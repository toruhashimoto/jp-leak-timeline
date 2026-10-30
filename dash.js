// 概況ダッシュボード：数字タイル、累積カーブ、日別の積み上げ棒、委託先ランキング、内訳バー。
// クリックで下の一覧を絞り込む（"leakfilter" イベントで index.html の一覧に伝える）。
(() => {
  const L = window.LeakLib;
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fmt = n => n.toLocaleString("ja-JP");
  const md = d => `${+d.slice(5, 7)}/${+d.slice(8)}`;
  const WD = "日月火水木金土";
  const wd = d => WD[new Date(d + "T00:00:00Z").getUTCDay()];
  const emit = detail => document.dispatchEvent(new CustomEvent("leakfilter", { detail }));

  const TYPES = { access: "不正アクセス", ransom: "ランサムウェア", config: "設定・認証不備", human: "人為ミス・内部", vendor: "委託先・連鎖" };
  const CERT = [["confirmed", "漏洩を確認"], ["possible", "漏洩の可能性"], ["unstated", "確認の記載なし"]];
  // 積み上げの区分（下から順）。色は固定順で、件数の順位では塗り替えない
  const CATS = [
    { k: "solo", label: "単独の事案", c: "--k-solo" },
    { k: "arcadia", label: "アルカディア", c: "--k-arcadia" },
    { k: "studio", label: "Studio", c: "--k-studio" },
    { k: "blastmail", label: "blastmail", c: "--k-blastmail" },
    { k: "idcf", label: "IDCF", c: "--k-idcf" },
    { k: "other", label: "その他の委託先", c: "--k-other" }
  ];
  const MAIN = new Set(["arcadia", "studio", "blastmail", "idcf"]);

  const chainOf = {};
  (window.CHAINS || []).forEach(c => { c.members.forEach(o => { chainOf[o] = c.key; }); if (c.hubOrg) chainOf[c.hubOrg] = c.key; });
  const inc = window.INCIDENTS.map(x => {
    const t = L.derive(x), ch = chainOf[x.org] || null;
    const cat = ch && MAIN.has(ch) ? ch : ch || x.type === "vendor" ? "other" : "solo";
    return { ...x, t, date: t.timelineDate, cert: L.certaintyOf(x), chain: ch, cat };
  });
  const START = "2026-06-10", END = window.UPDATED;
  const addDay = (d, n) => new Date(Date.parse(d + "T00:00:00Z") + n * 864e5).toISOString().slice(0, 10);
  const DAYS = [];
  for (let d = START; d <= END; d = addDay(d, 1)) DAYS.push(d);

  // ---- 共通ツールチップ ----
  const tip = document.createElement("div");
  tip.className = "tip"; tip.hidden = true; document.body.appendChild(tip);
  const showTip = (e, html) => {
    tip.innerHTML = html; tip.hidden = false;
    const r = tip.getBoundingClientRect(), pad = 12;
    let x = e.clientX + pad, y = e.clientY + pad;
    if (x + r.width > innerWidth - 8) x = e.clientX - r.width - pad;
    if (y + r.height > innerHeight - 8) y = e.clientY - r.height - pad;
    tip.style.left = Math.max(8, x) + "px"; tip.style.top = Math.max(8, y) + "px";
  };
  const hideTip = () => { tip.hidden = true; };
  const sw = c => `<i class="sw" style="background:var(${c})"></i>`;

  // ---- 数字タイル ----
  function kpis() {
    const last7 = inc.filter(x => x.date > addDay(END, -7)).length;
    const month = END.slice(0, 7);
    const thisMonth = inc.filter(x => x.date.startsWith(month)).length;
    const viaVendor = inc.filter(x => x.cat !== "solo").length;
    const s = L.summarize(inc.map(x => x.t.daysToDisclose));
    const big = inc.filter(x => (x.n || 0) >= 1e6).length;
    $("heroNum").textContent = fmt(inc.length);
    $("heroSub").innerHTML = `件 <span>／ ${DAYS.length}日間</span>`;
    const tiles = [
      [`+${fmt(last7)}`, "直近7日", "7d"],
      [fmt(thisMonth), `${+month.slice(5)}月`, month],
      [`${Math.round(viaVendor / inc.length * 100)}<small>%</small>`, "委託先経由", null],
      [s.n ? `${s.median}<small>日</small>` : "—", "検知→公表 中央値", null],
      [fmt(big), "100万件超", null]
    ];
    $("kpis").innerHTML = tiles.map(([v, l, p]) =>
      `<${p ? `button type="button" data-p="${p}"` : "div"} class="kpi"><b>${v}</b><span>${l}</span></${p ? "button" : "div"}>`).join("");
    $("kpis").onclick = e => { const b = e.target.closest("[data-p]"); if (b) emit({ period: b.dataset.p, scroll: true }); };
  }

  // ---- 累積カーブ（ヒーロー背景） ----
  function cumulative() {
    const per = {}; inc.forEach(x => { per[x.date] = (per[x.date] || 0) + 1; });
    let acc = inc.filter(x => x.date < START).length;
    const pts = DAYS.map(d => (acc += per[d] || 0));
    const W = 600, H = 160, max = pts[pts.length - 1];
    const xy = pts.map((v, i) => [i / (pts.length - 1) * W, H - v / max * (H - 6)]);
    const line = xy.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join("");
    $("cumSvg").setAttribute("viewBox", `0 0 ${W} ${H}`);
    $("cumSvg").innerHTML = `<defs><linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--accent)" stop-opacity=".35"/><stop offset="1" stop-color="var(--accent)" stop-opacity="0"/></linearGradient></defs>
      <path d="${line}L${W},${H}L0,${H}Z" fill="url(#cg)"/><path d="${line}" fill="none" stroke="var(--accent)" stroke-width="2" vector-effect="non-scaling-stroke"/>`;
  }

  // ---- 日別の公表件数（委託先別に積み上げ） ----
  let selDate = null;
  function daily() {
    const by = {};
    inc.forEach(x => { if (x.date < START) return; ((by[x.date] ||= {})[x.cat] = (by[x.date][x.cat] || 0) + 1); });
    const tot = d => CATS.reduce((s, c) => s + ((by[d] || {})[c.k] || 0), 0);
    const max = Math.max(...DAYS.map(tot));
    const yMax = Math.ceil(max / 50) * 50;
    const W = 1000, H = 260, ML = 34, MR = 8, MT = 26, MB = 26;
    const pw = (W - ML - MR) / DAYS.length, bw = Math.max(pw - 1.5, 1.5);
    const yOf = v => MT + (H - MT - MB) * (1 - v / yMax);
    const out = [];
    for (let v = 0; v <= yMax; v += 50) {
      out.push(`<line x1="${ML}" x2="${W - MR}" y1="${yOf(v)}" y2="${yOf(v)}" class="grid"/>`);
      out.push(`<text x="${ML - 6}" y="${yOf(v) + 4}" class="tick" text-anchor="end">${v}</text>`);
    }
    DAYS.forEach((d, i) => {
      const x = ML + i * pw;
      if (d.endsWith("-01") || i === 0) out.push(`<text x="${x}" y="${H - 8}" class="tick">${+d.slice(5, 7)}月</text>`,
        `<line x1="${x}" x2="${x}" y1="${MT}" y2="${H - MB + 4}" class="grid dim"/>`);
      let acc = 0;
      CATS.forEach(c => {
        const v = (by[d] || {})[c.k] || 0; if (!v) return;
        const y1 = yOf(acc), y0 = yOf(acc + v); acc += v;
        out.push(`<rect x="${x.toFixed(2)}" y="${y0.toFixed(2)}" width="${bw.toFixed(2)}" height="${Math.max(y1 - y0 - (acc < tot(d) ? 1 : 0), 1).toFixed(2)}" fill="var(${c.c})" rx="${bw > 4 ? 1 : 0}"/>`);
      });
      out.push(`<rect x="${x}" y="${MT}" width="${pw}" height="${H - MT - MB}" class="hit${d === selDate ? " sel" : ""}" data-d="${d}"/>`);
    });
    // ピークの日だけ直接ラベル
    const peak = DAYS.reduce((a, d) => tot(d) > tot(a) ? d : a, DAYS[0]);
    const px = ML + DAYS.indexOf(peak) * pw + bw / 2;
    out.push(`<text x="${px + 6}" y="${yOf(tot(peak)) + 10}" class="peak">${md(peak)} ${tot(peak)}件</text>`);
    // AIモデルの登場（◆）
    window.MILESTONES.filter(m => m.date >= START && m.date <= END).forEach(m => {
      const x = ML + DAYS.indexOf(m.date) * pw + bw / 2;
      out.push(`<rect x="${x - 4}" y="6" width="8" height="8" transform="rotate(45 ${x} 10)" class="ms${m.region === "cn" ? " cn" : ""}" data-m="${esc(m.date)}|${esc(m.vendor)}|${esc(m.title)}"/>`);
    });
    const svg = $("dailySvg");
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.innerHTML = `<title>日別の公表件数</title><desc>2026年6月10日以降の公表件数を日ごとに委託先別で積み上げた棒グラフ。上段の菱形はAIモデルの登場日。</desc>${out.join("")}`;
    svg.onmousemove = e => {
      const m = e.target.closest("[data-m]");
      if (m) { const [d, v, t] = m.dataset.m.split("|"); showTip(e, `<b>${md(d)}</b> ${t}<br><span class="mut">${v}</span>`); return; }
      const h = e.target.closest("[data-d]"); if (!h) return hideTip();
      const d = h.dataset.d, row = by[d] || {};
      showTip(e, `<b>${md(d)}（${wd(d)}）</b> 計 ${tot(d)}件` +
        CATS.filter(c => row[c.k]).reverse().map(c => `<div class="tr">${sw(c.c)}${c.label}<em>${row[c.k]}</em></div>`).join("") +
        (tot(d) ? `<div class="mut">クリックで一覧を絞り込み</div>` : ""));
    };
    svg.onmouseleave = hideTip;
    svg.onclick = e => {
      const h = e.target.closest("[data-d]"); if (!h || !tot(h.dataset.d)) return;
      emit({ period: h.dataset.d, scroll: true });
    };
    $("dailyLegend").innerHTML = CATS.map(c => `<span>${sw(c.c)}${c.label}</span>`).join("") +
      `<span class="sep"><i class="sw ms"></i>AIモデル</span><span><i class="sw ms cn"></i>AIモデル（中国系）</span>`;
  }

  // ---- 委託先ランキング ----
  function ranking() {
    const chains = (window.CHAINS || []).filter(c => c.members.length >= 2).sort((a, b) => b.members.length - a.members.length);
    const max = chains[0] ? chains[0].members.length : 1;
    $("rank").innerHTML = chains.map(c => {
      const col = MAIN.has(c.key) ? `--k-${c.key}` : "--k-other";
      return `<button type="button" class="rk" data-k="${esc(c.key)}"><span class="rl">${esc(MAIN.has(c.key) ? CATS.find(k => k.k === c.key).label : c.label.replace(/（.*?）/g, ""))}</span>
        <span class="rb"><i style="width:${(c.members.length / max * 100).toFixed(1)}%;background:var(${col})"></i></span><em>${fmt(c.members.length)}</em></button>`;
    }).join("");
    $("rank").onclick = e => { const b = e.target.closest("[data-k]"); if (b) emit({ chain: b.dataset.k, scroll: true }); };
  }

  // ---- 内訳（種別・確度の100%バー） ----
  function composition() {
    const pct = (v, t) => v / t < .01 ? "<1%" : `${Math.round(v / t * 100)}%`;
    const bar = (id, parts, onClick) => {
      const total = parts.reduce((s, p) => s + p.v, 0);
      $(id).innerHTML = `<div class="cb">${parts.filter(p => p.v).map(p =>
        `<i style="flex:${p.v};background:${p.bg}" data-k="${p.k}" data-tip="${esc(p.label)}　${fmt(p.v)}件（${pct(p.v, total)}）"${onClick ? ' class="click"' : ""}></i>`).join("")}</div>
        <div class="cl">${parts.filter(p => p.v).map(p => `<span><i class="sw" style="background:${p.bg}"></i>${p.label}<em>${pct(p.v, total)}</em></span>`).join("")}</div>`;
      const el = $(id);
      el.onmousemove = e => { const t = e.target.closest("[data-tip]"); t ? showTip(e, t.dataset.tip + (onClick ? `<div class="mut">クリックで一覧を絞り込み</div>` : "")) : hideTip(); };
      el.onmouseleave = hideTip;
      if (onClick) el.onclick = e => { const t = e.target.closest("[data-k]"); if (t) onClick(t.dataset.k); };
    };
    const ct = L.countBy(inc, x => x.type);
    bar("compType", Object.entries(TYPES).map(([k, label]) => ({ k, label, v: ct[k] || 0, bg: `var(--c-${k})` })),
      k => emit({ type: k, scroll: true }));
    const cc = L.countBy(inc, x => x.cert);
    const certBg = { confirmed: "var(--ink)", possible: "var(--cert-possible)", unstated: "var(--line)" };
    bar("compCert", CERT.map(([k, label]) => ({ k, label, v: cc[k] || 0, bg: certBg[k] })));
  }

  // 一覧側で日付が選ばれたら棒をハイライト
  document.addEventListener("leakstate", e => {
    const p = e.detail.period;
    selDate = /^\d{4}-\d{2}-\d{2}$/.test(p) ? p : null;
    document.querySelectorAll("#dailySvg .hit").forEach(r => r.classList.toggle("sel", r.dataset.d === selDate));
  });

  kpis(); cumulative(); daily(); ranking(); composition();
})();
