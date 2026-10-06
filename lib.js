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

  root.LeakLib = { DETECT_TYPES, EVENT_LABELS, CAUSES, isDate, daysBetween, earliest, derive, summarize, countBy };
})(typeof window !== "undefined" ? window : globalThis);
