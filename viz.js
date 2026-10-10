// グラフ表示：流出件数の散布図と、委託先・連鎖のスイムレーン。
// データは data.js / timelines.js、計算は lib.js。ここは描画だけを受け持つ。
(() => {
  const L = window.LeakLib;
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const css = name => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const md = d => `${d.startsWith("2026") ? "" : d.slice(0, 4) + "/"}${+d.slice(5, 7)}/${+d.slice(8)}`;

  const TYPES = { access: "不正アクセス", ransom: "ランサムウェア", config: "設定・認証不備", human: "人為ミス・内部", vendor: "委託先・連鎖" };
  const SHAPES = { access: "circle", ransom: "triangle", config: "rect", human: "rectRounded", vendor: "rectRot" };
  const CERT = { confirmed: "漏洩を確認", possible: "漏洩の可能性", unstated: "漏洩確認の記載なし" };

  const inc = window.INCIDENTS.map(x => {
    const t = L.derive(x);
    return { ...x, t, date: t.timelineDate, cert: L.certaintyOf(x) };
  });

  // ---- 流出件数（散布図・対数目盛） ----
  const BASE = Date.UTC(2026, 5, 1);
  const dayNum = d => (Date.parse(d + "T00:00:00Z") - BASE) / 864e5;
  const dayToMd = v => { const t = new Date(BASE + v * 864e5); return `${t.getUTCMonth() + 1}/${t.getUTCDate()}`; };
  const POW = [10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8];
  const fmtN = v => v >= 1e8 ? `${v / 1e8}億` : v >= 1e4 ? `${Math.round(v / 1e4).toLocaleString("ja-JP")}万` : v.toLocaleString("ja-JP");

  // 凡例の形（種別）と塗り（確度）
  function shape(type, fill, stroke) {
    const p = `fill="${fill}" stroke="${stroke}" stroke-width="1.5"`;
    const g = {
      circle: `<circle cx="6" cy="6" r="4.5" ${p}/>`,
      triangle: `<polygon points="6,1.5 10.5,10.5 1.5,10.5" ${p}/>`,
      rect: `<rect x="1.5" y="1.5" width="9" height="9" ${p}/>`,
      rectRounded: `<rect x="1.5" y="1.5" width="9" height="9" rx="3" ${p}/>`,
      rectRot: `<polygon points="6,1 11,6 6,11 1,6" ${p}/>`
    }[SHAPES[type] || "circle"];
    return `<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">${g}</svg>`;
  }

  function countLegend() {
    const ink = css("--muted");
    $("countLegend").innerHTML =
      Object.entries(TYPES).map(([k, v]) => `<span>${shape(k, `var(--c-${k})`, `var(--c-${k})`)}${v}</span>`).join("") +
      `<span class="sep">${shape("access", ink, ink)}漏洩を確認</span><span>${shape("access", "none", ink)}可能性・確認の記載なし</span>`;
  }

  let chart = null;
  function drawCount() {
    countLegend();
    const pts = inc.filter(x => typeof x.n === "number" && x.n > 0);
    const none = inc.filter(x => !(typeof x.n === "number" && x.n > 0));
    $("countNote").innerHTML = `件数の単位（人・件・アカウント・レコード・延べ件数）は事案ごとに違うため、合計はしていません。` +
      `件数の記載がない、または漏洩が確認されていない ${none.length} 件はグラフに含めていません（${none.map(x => esc(x.org)).join("、")}）。`;
    if (!window.Chart) { $("countCanvasWrap").innerHTML = `<p class="vnote">グラフを読み込めませんでした。</p>`; return; }

    const surf = css("--surface"), muted = css("--muted"), line = css("--line");
    const datasets = Object.keys(TYPES).flatMap(type => ["confirmed", "other"].map(c => {
      const color = css(`--c-${type}`);
      const filled = c === "confirmed";
      return {
        label: `${TYPES[type]}（${filled ? "確認" : "可能性など"}）`,
        data: pts.filter(x => x.type === type && (x.cert === "confirmed") === filled).map(x => ({ x: dayNum(x.date), y: x.n, r: x })),
        pointStyle: SHAPES[type], pointRadius: 6, pointHoverRadius: 8, pointHitRadius: 8,
        backgroundColor: filled ? color : surf, borderColor: filled ? surf : color, borderWidth: 2, hoverBorderWidth: 2
      };
    })).filter(d => d.data.length);

    const maxX = dayNum(window.UPDATED) + 6;
    const monthTicks = [];
    for (let m = 5; ; m++) { const v = (Date.UTC(2026, m, 1) - BASE) / 864e5; if (v > maxX) break; monthTicks.push(v); }

    if (chart) chart.destroy();
    chart = new Chart($("countChart"), {
      type: "scatter",
      data: { datasets },
      options: {
        responsive: true, maintainAspectRatio: false, animation: false,
        layout: { padding: { top: 8, right: 8 } },
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: {
            title: () => "",
            label: c => { const x = c.raw.r; return [`${x.org}（${md(x.date)} 公表）`, x.count, CERT[x.cert]]; }
          } }
        },
        scales: {
          x: { type: "linear", min: 0, max: maxX, grid: { display: false }, border: { color: line },
            afterBuildTicks: s => { s.ticks = monthTicks.map(v => ({ value: v })); },
            ticks: { color: muted, callback: v => dayToMd(v) } },
          y: { type: "logarithmic", min: 10, max: 1e8, grid: { color: line }, border: { display: false },
            afterBuildTicks: s => { s.ticks = POW.map(v => ({ value: v })); },
            ticks: { color: muted, callback: v => fmtN(v) } }
        }
      }
    });
  }

  // ---- 委託先・連鎖（スイムレーン、横軸は暦日） ----
  function drawChain() {
    const chains = L.buildChains(window.CHAINS || [], window.INCIDENTS);
    const lanes = chains.filter(c => c.startDate && c.rows.length >= 2);
    const singles = chains.filter(c => !(c.startDate && c.rows.length >= 2));

    const dates = lanes.flatMap(c => [c.startDate, c.hubDisclosed, ...c.rows.map(r => r.date)]).filter(Boolean).sort();
    if (!dates.length) { $("chainSvg").outerHTML = `<p class="vnote">表示できる連鎖はまだありません。</p>`; return; }
    const d0 = dates[0], d1 = dates[dates.length - 1];
    const span = Math.max(L.daysBetween(d0, d1), 1);
    const X0 = 200, X1 = 640, W = 660;
    const xOf = d => X0 + L.daysBetween(d0, d) * (X1 - X0) / span;
    const short = s => s.replace(/（.*?）/g, "");
    const T = (x, y, s, cls, anchor) => `<text x="${x}" y="${y}" class="${cls}"${anchor ? ` text-anchor="${anchor}"` : ""}>${s}</text>`;

    const out = [];
    let y = 8;
    lanes.forEach(c => {
      y += 22;
      out.push(T(8, y, esc(c.label), "lh"));
      out.push(T(X1, y, `利用企業 ${c.rows.length}社・公表は${c.spanDays + 1}日間に分散`, "lm", "end"));
      y += 10;
      // 委託先本体：発生 → 公表
      y += 22;
      out.push(T(16, y + 4, "委託先（発生・公表）", "lm"));
      const xs = xOf(c.startDate);
      if (c.hubDisclosed) out.push(`<line x1="${xs}" y1="${y}" x2="${xOf(c.hubDisclosed)}" y2="${y}" class="ln"/>`);
      out.push(`<circle cx="${xs}" cy="${y}" r="5" class="hub-start"><title>委託先で発生 ${md(c.startDate)}</title></circle>`);
      if (c.hubDisclosed) {
        const xh = xOf(c.hubDisclosed);
        out.push(`<rect x="${xh - 5}" y="${y - 5}" width="10" height="10" rx="2" class="hub-disc"><title>委託先本体の公表 ${md(c.hubDisclosed)}</title></rect>`);
        if (c.hubDisclosed === c.startDate) out.push(xh > X1 - 80 ? T(xh - 10, y + 4, "発生と公表が同日", "lm", "end") : T(xh + 10, y + 4, "発生と公表が同日", "lm"));
      }
      // 利用企業
      c.rows.forEach(r => {
        y += 22;
        const xm = xOf(r.date);
        out.push(T(16, y + 4, esc(short(r.org)), "lo"));
        out.push(`<line x1="${xs}" y1="${y}" x2="${xm}" y2="${y}" class="ln dash"/>`);
        out.push(`<circle cx="${xm}" cy="${y}" r="5" class="mem"><title>${esc(r.org)} 公表 ${md(r.date)}${r.lag !== null ? `（発生から${r.lag}日）` : ""}</title></circle>`);
        if (r.lag !== null) out.push(xm > X1 - 40 ? T(xm - 10, y + 4, `+${r.lag}日`, "lm", "end") : T(xm + 10, y + 4, `+${r.lag}日`, "lm"));
      });
      y += 12;
    });
    // 日付軸
    y += 8;
    out.push(`<line x1="${X0}" y1="${y}" x2="${X1}" y2="${y}" class="axis"/>`);
    const step = span <= 14 ? 1 : 7;
    for (let i = 0; i <= span; i += step) {
      const d = new Date(Date.parse(d0 + "T00:00:00Z") + i * 864e5).toISOString().slice(0, 10);
      out.push(`<line x1="${xOf(d)}" y1="${y}" x2="${xOf(d)}" y2="${y + 4}" class="axis"/>`);
      out.push(T(xOf(d), y + 18, md(d), "lm", "middle"));
    }
    const H = y + 28;
    const svg = $("chainSvg");
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.innerHTML = `<title>委託先・連鎖のスイムレーン</title><desc>委託先ごとに、委託先での発生日、委託先本体の公表日、利用企業の公表日を暦日で並べた図</desc>${out.join("")}`;

    $("chainSingle").innerHTML = singles.map(c => {
      const r = c.rows.map(r => `${esc(r.org)} 公表 ${md(r.date)}${r.lag !== null ? `（発生から${r.lag}日）` : ""}`).join("、");
      return `<li><b>${esc(c.label)}</b> → ${r}${c.startDate ? `<span class="lmh">／委託先側の発生 ${md(c.startDate)}</span>` : ""}${c.hubDisclosed ? `<span class="lmh">／委託先本体の公表 ${md(c.hubDisclosed)}</span>` : ""}</li>`;
    }).join("");
  }

  // ---- タブ ----
  let chainDrawn = false;
  function show(which) {
    ["count", "chain"].forEach(k => {
      $(`tab-${k}`).setAttribute("aria-selected", k === which);
      $(`v-${k}`).hidden = k !== which;
    });
    if (which === "chain" && !chainDrawn) { drawChain(); chainDrawn = true; }
    if (which === "count") drawCount();
  }
  $("tab-count").onclick = () => show("count");
  $("tab-chain").onclick = () => show("chain");

  // テーマが変わったら canvas の色を引き直す（SVG は CSS 変数で自動追従）
  document.addEventListener("themechange", () => { if (!$("v-count").hidden) drawCount(); });
  try { matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => { if (!$("v-count").hidden) drawCount(); }); } catch (e) {}

  show("count");
})();
