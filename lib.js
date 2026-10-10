// 分析用の純粋関数。表示（index.html）と将来の統計ページで共有する。
// データ本体は data.js の INCIDENTS。ここでは値をハードコードしない。
(function (root) {
  // 「企業が認識した」とみなすイベント種別。最も早い確定日を検知日とする
  const DETECT_TYPES = ["anomaly", "access_confirmed", "leak_possible", "leak_confirmed", "vendor_notified"];

  const EVENT_LABELS = {
    incident: "発生",
    exposure: "閲覧可能な状態の開始",
    anomaly: "異常を検知",
    access_confirmed: "不正アクセスを確認",
    leak_possible: "漏洩の可能性を認識",
    leak_confirmed: "漏洩を確認",
    vendor_notified: "委託先等から報告",
    disclosed: "公表",
    update: "続報"
  };

  // 原因・侵入経路の分類語彙。公式発表で明示されたものだけを付与する
  const CAUSES = {
    ransomware: "ランサムウェア",
    credential: "認証情報窃取",
    phishing: "フィッシング",
    edge_device: "VPN／外部公開機器",
    vuln: "脆弱性悪用",
    vendor: "委託先・サプライチェーン",
    config: "設定・認証不備",
    human: "人的ミス",
    insider: "内部不正",
    unknown: "原因不明"
  };

  const ISO = /^\d{4}-\d{2}-\d{2}$/;
  const isDate = d => typeof d === "string" && ISO.test(d);

  // 暦日の差（b − a）。どちらかが確定日でなければ null
  function daysBetween(a, b) {
    if (!isDate(a) || !isDate(b)) return null;
    return Math.round((Date.parse(b + "T00:00:00Z") - Date.parse(a + "T00:00:00Z")) / 864e5);
  }

  // 指定種別のうち、日付が確定しているイベントで最も早いもの
  function earliest(events, types) {
    return events
      .filter(e => types.includes(e.type) && isDate(e.date))
      .sort((x, y) => x.date.localeCompare(y.date))[0] || null;
  }

  // 1件のインシデントから時間軸の指標を導出する
  function derive(inc) {
    const ev = inc.events || [];
    const incident = earliest(ev, ["incident"]);
    const detected = earliest(ev, DETECT_TYPES);
    const disclosed = earliest(ev, ["disclosed"]);
    const span = (a, b) => {
      const d = a && b ? daysBetween(a.date, b.date) : null;
      return d === null || d < 0 ? null : d; // 負の値はデータ不整合として扱わない
    };
    return {
      incident, detected, disclosed,
      daysToDetect: span(incident, detected),
      daysToDisclose: span(detected, disclosed),
      daysIncidentToDisclose: span(incident, disclosed),
      // タイムライン上の位置：続報で掲載した事案は続報の日付、それ以外は公式の公表日、なければ報道まとめの日付
      timelineDate: inc.listedDate || (disclosed ? disclosed.date : inc.reportedDate),
      officialDate: !!(inc.listedDate || disclosed),
      followUp: !!inc.listedDate,
      vague: ev.filter(e => !isDate(e.date))
    };
  }

  // 数値配列の要約（null は除外）
  function summarize(values) {
    const v = values.filter(x => typeof x === "number").sort((a, b) => a - b);
    if (!v.length) return { n: 0, median: null, min: null, max: null };
    const m = v.length >> 1;
    return {
      n: v.length,
      median: v.length % 2 ? v[m] : (v[m - 1] + v[m]) / 2,
      min: v[0],
      max: v[v.length - 1]
    };
  }

  // キーごとの件数（例: countBy(incs, i => i.causes) で原因別件数）
  function countBy(items, keyFn) {
    const out = {};
    items.forEach(it => {
      const k = keyFn(it);
      (Array.isArray(k) ? k : [k]).forEach(x => { if (x != null) out[x] = (out[x] || 0) + 1; });
    });
    return out;
  }

  // 漏洩の確度。上書きがなければ、漏洩を確認したイベントがあれば confirmed、可能性の認識だけなら possible
  function certaintyOf(inc) {
    if (inc.certainty) return inc.certainty;
    const ev = inc.events || [];
    if (ev.some(e => e.type === "leak_confirmed")) return "confirmed";
    if (ev.some(e => e.type === "leak_possible")) return "possible";
    return "unstated";
  }

  // 件数の単位を表示文字列から推定する（集計で単位の違うものを足さないため）
  function unitOf(count) {
    const rules = [[/レコード/, "レコード"], [/アカウント/, "アカウント"], [/延べ|問い合わせ単位/, "延べ件数"], [/人|名/, "人"], [/件/, "件"]];
    for (const [re, u] of rules) if (re.test(count || "")) return u;
    return null;
  }

  // 委託先・連鎖：委託先側の発生日を起点に、利用企業の公表日と経過日数を並べる
  function buildChains(chains, incidents) {
    const byOrg = Object.fromEntries(incidents.map(i => [i.org, i]));
    return chains.map(c => {
      const hub = c.hubOrg ? byOrg[c.hubOrg] : null;
      const hubT = hub ? derive(hub) : null;
      const members = c.members.map(o => byOrg[o]).filter(Boolean).map(inc => ({ inc, t: derive(inc) }));
      // 起点：委託先自身の発生日。なければ利用企業の発表に書かれた発生日
      const start = (hubT && hubT.incident) || earliest(members.flatMap(m => m.inc.events || []), ["incident"]);
      const startDate = start ? start.date : null;
      const rows = members.map(m => {
        const date = m.t.disclosed ? m.t.disclosed.date : m.t.timelineDate;
        return { org: m.inc.org, inc: m.inc, date, lag: startDate ? daysBetween(startDate, date) : null };
      }).sort((a, b) => a.date.localeCompare(b.date));
      const hubDisclosed = hubT && hubT.disclosed ? hubT.disclosed.date : null;
      const all = rows.map(r => r.date).concat(hubDisclosed ? [hubDisclosed] : []).sort();
      return { ...c, hub, startDate, hubDisclosed, rows, spanDays: all.length ? daysBetween(all[0], all[all.length - 1]) : null };
    });
  }

  root.LeakLib = { DETECT_TYPES, EVENT_LABELS, CAUSES, isDate, daysBetween, earliest, derive, summarize, countBy, certaintyOf, unitOf, buildChains };
})(typeof window !== "undefined" ? window : globalThis);
