// 情報漏洩・不正アクセス公表タイムライン データ
// date: 初回公表日（まとめ記事・報道ベース。一次情報で要確認）
// type: access=不正アクセス / ransom=ランサムウェア / config=設定・認証不備 / human=人為ミス・内部 / vendor=委託先経由
// n: ソート用の概算最大件数（不明は null）

// 主要AIモデルの登場など（vendor: 開発元）
const M = (date, vendor, title, note, src, srcName) => ({ date, vendor, title, note, src, srcName });
const AIW = ["https://www.businessinsider.jp/article/2608-how-much-did-major-generative-ai-service-fees/", "BUSINESS INSIDER JAPAN 2026年8月版"];
const AIS = ["https://www.businessinsider.jp/article/2609-how-much-did-major-generative-ai-service-fees/", "BUSINESS INSIDER JAPAN 2026年9月版"];

window.MILESTONES = [
  M("2026-06-10", "Anthropic", "Claude Fable 5 リリース", "Mythos 級モデルを一般公開。", "https://forest.watch.impress.co.jp/docs/news/2116968.html", "窓の杜"),
  M("2026-06-12", "Anthropic", "Fable 5 / Mythos 5 全世界で一時停止", "米国政府の輸出管理指令による（米国時間）。", "https://forest.watch.impress.co.jp/docs/news/2116968.html", "窓の杜"),
  M("2026-07-02", "Anthropic", "Fable 5 提供再開が報道される", "米政府の要求への対策を経て復活。", "https://www.itmedia.co.jp/news/articles/2607/02/news095.html", "ITmedia NEWS"),
  M("2026-07-08", "SpaceXAI", "Grok 4.5 公開", "", ...AIW),
  M("2026-07-09", "OpenAI", "GPT-5.6 ファミリー一般公開", "Sol・Terra・Luna の3モデル構成。", ...AIW),
  M("2026-07-21", "Google", "Gemini 3.6 Flash 公開", "Gemini 3.5 Flash-Lite、Gemini 3.5 Flash Cyber も同日公開。", ...AIW),
  M("2026-07-24", "Anthropic", "Claude Opus 5 リリース", "", ...AIW),
  M("2026-08-12", "SpaceXAI", "Grok 4.6 公開", "コンテキスト 500k トークン。", ...AIW),
  M("2026-08-14", "Google", "Gemini 3.7 Flash 公開", "", ...AIS),
  M("2026-09-01", "Anthropic", "Claude Fable 5.1 リリース", "", "https://emergent.sh/news/claude-fable-5-1-release-date", "Emergent"),
  M("2026-09-02", "Google", "Gemini 3.8 Flash 公開", "", ...AIS),
  M("2026-09-03", "OpenAI", "GPT-6 Astra リリース", "GPT-6 世代の最上位モデル。サイバーセキュリティ分野の性能もうたう。", "https://japan-ai.co.jp/media/10406/", "JAPAN AI"),
  M("2026-09-21", "SpaceXAI", "Grok 4.7 公開", "", ...AIS),
  M("2026-09-22", "Anthropic", "Claude Opus 5.5 リリース", "Fable 5.1 並みの性能を Opus 5 比 約40%低いコストで。", "https://blog.serverworks.co.jp/2026/09/25/190000", "サーバーワークスエンジニアブログ"),
  M("2026-09-22", "OpenAI", "GPT-6 Sol / Luna 追加", "", "https://japan-ai.co.jp/media/10406/", "JAPAN AI"),
  M("2026-09-28", "Anthropic", "Claude Sonnet 5.5 リリース", "", "https://aiprofitboardroom.com/blog/sonnet-5-5-release-date/", "AI Profit Boardroom")
];

const S = {
  tmi6: ["https://tmiconsulting.co.jp/privacy-security-news/2733/", "TMIコンサルティング 2026年6月まとめ"],
  tmi7: ["https://tmiconsulting.co.jp/privacy-security-news/2743/", "TMIコンサルティング 2026年7月まとめ"],
  rb7: ["https://rocket-boys.co.jp/security-measures-lab/2026-07-data-breach-cases-summary/", "セキュリティ対策Lab 2026年7月まとめ"],
  rb8: ["https://rocket-boys.co.jp/security-measures-lab/2026-08-data-breach-cases-summary/", "セキュリティ対策Lab 2026年8月まとめ"],
  g9: ["https://www.gate02.ne.jp/lab/security-article/incident-news-summary-202609-extra-edition/", "サイバーセキュリティラボ 2026年9月号外"],
  my9: ["https://news.mynavi.jp/techplus/article/20260930-5050581/", "マイナビニュース 2026年9月まとめ"],
  ys10: ["https://yasashii-cybersecurity.com/ai-attack-cost-drop-autumn-breaches-2026", "やさしいサイバーセキュリティ"]
};

const I = (date, org, summary, count, n, type, src, extra) =>
  ({ date, org, summary, count, n, type, src: src[0], srcName: src[1], ...(extra || {}) });

window.INCIDENTS = [
  // ---- 2026年6月 ----
  I("2026-06-15", "アクト・セン", "作業管理システムのサーバーへの不正アクセス", "不明", null, "access", S.tmi6),
  I("2026-06-16", "小松製作所", "社内システムで個人情報が閲覧可能な状態だった", "不明", null, "config", S.tmi6),
  I("2026-06-23", "KDDI", "ISP事業者向けメールシステムに不正アクセス。第三者製ソフトウェアの脆弱性を悪用。対象はピカラ光、CPI、J:COM NET、コミュファ光、@nifty、BIGLOBE", "メールアドレス・パスワード 最大1,422万件", 14220000, "access",
    ["https://atmarkit.itmedia.co.jp/ait/articles/2606/25/news036.html", "@IT"]),
  I("2026-06-30", "アフラック生命保険", "「よりそうネット」「オンライン相談」への不正アクセス。アクセス・照会制御が不十分で大量照会を検知できず。金融庁が報告徴求命令", "顧客 約440万人（うち口座情報 約22万人）、代理店 約4万店", 4400000, "access",
    ["https://piyolog.hatenadiary.jp/entry/2026/07/08/232742", "piyolog"]),

  // ---- 2026年7月 ----
  I("2026-07-01", "朝日放送テレビ・アイネックス", "グループ会社の従業員アカウントおよびクラウドサービスへの不正アクセス", "従業員関連情報", null, "access", S.rb7),
  I("2026-07-02", "加賀ソルネット", "学生向けPC販売サイト（アカデミコナビ）への不正アクセス", "最大 約17万件", 170000, "access", S.rb7),
  I("2026-07-06", "J:COM", "KDDIのメールシステムへの不正アクセスの影響（J:COM NET）", "メールアドレス 2,473,191件", 2473191, "vendor",
    ["https://newsreleases.jcom.co.jp/news/20260706_21698.html", "J:COM ニュースリリース"]),
  I("2026-07-06", "日本大学", "メールアカウントへの不正アクセス", "不明", null, "access", S.tmi7),
  I("2026-07-08", "サカタのタネ", "ブラジル子会社へのサイバー攻撃", "不明", null, "access", S.tmi7),
  I("2026-07-10", "ムラタメイク", "親会社への不正アクセスが子会社へ波及", "自動車保険契約者情報", null, "access", S.rb7),
  I("2026-07-13", "日本交通", "社内システムへの不正アクセスによりシステム停止", "不明", null, "access", S.tmi7),
  I("2026-07-14", "メディア4u（ファブリカHD子会社）", "SMS送信システムへの不正アクセスと不正送信", "9万件超", 90000, "access", S.rb7),
  I("2026-07-16", "日産化学", "社内システムへの不正アクセス", "不明", null, "access", S.tmi7),
  I("2026-07-24", "JR東海高島屋", "管理システムへの不正アクセス（対象者拡大）", "7,582人", 7582, "access", S.rb7),
  I("2026-07-28", "タカラトミー", "アプリの認証機能の不備で個人情報が閲覧可能に", "最大 約15万5,000人", 155000, "config", S.rb7),
  I("2026-07-29", "生命保険協会", "契約照会システムで特定操作により利用者情報が閲覧可能に", "約3万7,000件", 37000, "config", S.rb7),

  // ---- 2026年8月 ----
  I("2026-08-01", "Eストアー（ショップサーブ）", "サーバー上での不正プログラム実行", "延べ 最大885万3,839件（購入者情報、店舗管理画面ID・パスワード）", 8853839, "access", S.rb8),
  I("2026-08-03", "講談社", "フィッシングメールでメールアカウントを乗っ取られる", "連絡先 最大3,812件（二次被害553件）", 3812, "access", S.rb8),
  I("2026-08-04", "中部電力", "システムへの不正アクセス", "連絡先情報 最大7万4,100件", 74100, "access", S.rb8),
  I("2026-08-07", "デジタル庁", "ログイン履歴ファイル作成時の運用ミス", "職員150名分", 150, "human", S.rb8),
  I("2026-08-12", "大阪公立大学医学部附属病院", "取引業者従業員が患者X線画像をスマホで撮影・持ち出し", "13件", 13, "human", S.rb8),
  I("2026-08-17", "ロジックベイン", "ランサムウェア攻撃（続報）", "約9万7,338名", 97338, "ransom", S.rb8),
  I("2026-08-20", "コタ", "ランサムウェア攻撃（続報）", "延べ10万9,147件＋株主情報5万5,408件", 164555, "ransom", S.rb8),
  I("2026-08-27", "01銀行", "システムへの不正アクセス", "顧客識別情報 最大100社分", null, "access", S.rb8),
  I("2026-08-28", "コロナ", "施工情報クラウドへの不正アクセス", "最大3万5,000名", 35000, "access", S.rb8),
  I("2026-08-28", "イエローハット", "WEB作業予約システムへの不正プログラムによる攻撃", "最大180万1,499件", 1801499, "access", S.g9),
  I("2026-08-31", "さくらインターネット", "管理環境（販売管理システム）経由の不正アクセス", "136万563アカウント", 1360563, "access", S.rb8),

  // ---- 2026年9月 ----
  I("2026-09-11", "デジタル庁（GSS）", "ガバメントソリューションサービスのVPN機器の脆弱性を悪用した侵入", "約24万6,000件（職員・事業者の氏名、メール、電話番号等）", 246000, "access", S.g9),
  I("2026-09-15", "ムラウチドットコム", "Webシステムの脆弱性を起点とした不正アクセス", "771万6,811件", 7716811, "access", S.g9),
  I("2026-09-15", "ロート製薬", "通販システムへの不正アクセス", "通話音声データ・顧客情報（件数未確定）", null, "access", S.my9),
  I("2026-09-16", "Helpfeel（Gyazo）", "画像サーバーの脆弱性による任意コマンド実行", "ユーザー 約2,362万件、画像メタデータ 約4.9億件", 23620000, "access", S.ys10),
  I("2026-09-18", "ニチレイ", "サイバー攻撃", "約5万件（配送先・取引先・従業員情報）", 50000, "access", S.my9),
  I("2026-09-25", "ファインズ", "第三者による不正アクセス", "1,536,322件（予約者情報）", 1536322, "access", S.g9),
  I("2026-09-26", "京王電鉄グループ", "ランサムウェア攻撃で営業システムに障害", "漏洩は確認されず（調査中）", null, "ransom", S.g9),
  I("2026-09-26", "ニッポンレンタカー", "アプリシステムへの不正アクセス", "41名", 41, "access", S.my9),
  I("2026-09-27", "東京メトロ（メトポ）", "会員向けサービスへの不正アクセス", "メールアドレス 約5万9,000件", 59000, "access", S.g9),
  I("2026-09-27", "スターツ出版（OZmall）", "不正アクセス", "最大44万7,610件", 447610, "access", S.g9),
  I("2026-09-28", "パーク24（タイムズカー）", "Webシステムへの不正アクセス", "約660万アカウント（うち本人確認書類 約160万件）", 6600000, "access", S.my9),
  I("2026-09-28", "集英社（HAPPY PLUS COMMUNITY）", "CMSの設定不備で認証情報が露出し、APIを繰り返し呼ばれる", "ブロガー 2,835人分", 2835, "config", S.ys10),
  I("2026-09-29", "セイコーマート", "アプリサーバー経由で会員情報サーバーへ不正アクセス", "約57万アカウント", 570000, "access", S.g9),
  I("2026-09-29", "ヤマト運輸（クロネコ代金後払い）", "不正アクセス", "件数不明（調査中）", null, "access", S.g9),
  I("2026-09-29", "日本郵便（郵便局アプリ）", "外部からの不正アクセス", "69件（19名分）", 69, "access", S.g9),
  I("2026-09-29", "イープラス（スマチケ）", "払戻し情報管理システムへの侵入", "1,463件（一部に口座情報）", 1463, "access", S.g9),
  I("2026-09-30", "VOISING", "BIツールの脆弱性を悪用", "約17万件", 170000, "access", S.g9),

  // ---- 2026年10月 ----
  I("2026-10-05", "大和証券", "問い合わせ管理の委託先（スカラコミュニケーションズ）のサーバーへの不正アクセス。パスワード・取引用ID等は含まれず", "約11万人（問い合わせ情報含め約22万件）", 110000, "vendor",
    ["https://rocket-boys.co.jp/security-measures-lab/daiwa-securities-scala-communications-data-breach-2026/", "セキュリティ対策Lab"])
];

window.UPDATED = "2026-10-06";
