// 公式発表から拾った各インシデントの時間軸。キーは data.js の INCIDENTS の org 名。
// フィールドの意味は data.js 冒頭のコメントを参照。src の "@" は officialUrl と同じページ。
(function (root) {
  const E = (type, date, raw, src) => ({ type, date, raw, src });

  const T = {
    "アクト・セン": {
      officialUrl: "https://act1000.jp/wp-content/uploads/2026/06/%E5%80%8B%E4%BA%BA%E6%83%85%E5%A0%B1%E6%BC%8F%E3%81%88%E3%81%84%E3%81%AE%E5%8F%AF%E8%83%BD%E6%80%A7%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B%E3%81%A8%E3%81%8A%E8%A9%AB%E3%81%B3.pdf",
      events: [
        E("incident", "2026-05-01", "2026年5月1日、…サーバーに対し外部からの不正アクセスが行われ", "@"),
        E("disclosed", "2026-06-15", "個人情報漏えいの可能性に関するお知らせとお詫び 2026年6月15日", "@")
      ],
      causes: ["ransomware"], causeText: "ランサムウェアによるものとみられる暗号化被害"
    },
    "小松製作所": {
      officialUrl: "https://www.komatsu.jp/ja/newsroom/2026/20260616_3",
      events: [
        E("exposure", null, "発生時期：2021年頃から、ユーザーの情報が閲覧可能な状態", "@"),
        E("leak_possible", "2026-04-23", "発覚日：2026年4月23日", "@"),
        E("disclosed", "2026-06-16", "個人情報が閲覧可能な状態にあったことに関するお知らせ 2026年6月16日", "@")
      ],
      causes: ["config"], causeText: "利用者管理の仕組みにおいて、設定上の不備により",
      dataNote: "公式発表で「発覚日」とされた日を「漏洩の可能性を認識」として扱っています。"
    },
    "KDDI": {
      officialUrl: "https://newsroom.kddi.com/news/assets/2026/kddi_nr_s-71_4593/kddi_nr_s-71_4593_pdf_01.pdf",
      events: [
        E("incident", "2026-05-16", "一部のISP事業者さまにおいて、2026年5月16日から発生", "https://newsroom.kddi.com/news/assets/2026/kddi_nr_s-73_4619/kddi_nr_s-73_4619_pdf_01.pdf"),
        E("access_confirmed", "2026-06-17", "2026年6月17日、…不正アクセス…を受けていたことを確認", "@"),
        E("leak_possible", "2026-06-17", "外部に漏えいした可能性があることを、2026年6月17日に確認", "@"),
        E("disclosed", "2026-06-23", "報道発表資料 2026年6月23日", "@"),
        E("update", "2026-07-06", "報道発表資料 2026年7月6日", "https://newsroom.kddi.com/news/assets/2026/kddi_nr_s-73_4619/kddi_nr_s-73_4619_pdf_01.pdf")
      ],
      causes: ["vuln"], causeText: "第三者製のソフトウェアの脆弱性を悪用されたことによるもの",
      certainty: "confirmed",
      dataNote: "第1報は「最大1,422万件の漏えいの可能性」。7月6日の続報で、メールアドレス12,231,954件（7月21日に訂正）とパスワード7,616,173件の漏えいを確認しています。"
    },
    "アフラック生命保険": {
      officialUrl: "https://www.aflac.co.jp/static/corp/profile/news/2026/20260630.pdf",
      events: [
        E("incident", "2026-06-10", "不正アクセスによる情報漏えいが最初に発生したのは2026年6月10日", "https://www.aflac.co.jp/static/corp/profile/news/2026/20260713.pdf"),
        E("leak_confirmed", "2026-06-25", "漏えいしたことが2026年6月25日（木）に判明", "@"),
        E("disclosed", "2026-06-30", "2026年6月30日", "@"),
        E("update", "2026-07-13", "お詫びとお知らせ（第二報）2026年7月13日", "https://www.aflac.co.jp/static/corp/profile/news/2026/20260713.pdf"),
        E("update", "2026-07-31", "調査結果と再発防止策について 2026年7月31日", "https://www.aflac.co.jp/static/corp/profile/news/2026/2026073100.pdf")
      ],
      causes: [], causeText: "アクセスとデータ照会の手口に対する制御が不十分であった",
      dataNote: "発生日は第1報で6月15日、第二報で6月10日に訂正されています。訂正後の日付を使っています。"
    },
    "朝日放送テレビ・アイネックス": {
      officialUrl: "https://www.i-nex.jp/2026/07/01/security-incident-notice/",
      events: [
        E("incident", "2026-06-17", "遡って6月17日に当該アカウントへの第三者による不正ログイン", "@"),
        E("anomaly", "2026-06-24", "2026年6月24日、…外部への不審なメール送信を確認", "@"),
        E("disclosed", "2026-07-01", "不正アクセスに関するお知らせ 2026年7月1日 株式会社アイネックス", "@"),
        E("disclosed", "2026-07-01", "2026年7月1日 朝日放送テレビ株式会社", "https://corp.asahi.co.jp/Portals/0/data/pdf/news/NR20260701TV_infomationunauthorizedaccess.pdf"),
        E("update", "2026-08-24", "お詫びとお知らせ（第二報）2026年8月24日", "https://www.i-nex.jp/2026/08/24/security-incident-notice-2/")
      ],
      causes: ["phishing", "credential"], causeText: "取引先を装うフィッシングメールに反応したことが判明"
    },
    "加賀ソルネット": {
      officialUrl: "https://www.kgem.co.jp/news/news260701/",
      events: [
        E("access_confirmed", "2026-06-22", "2026年6月22日に第三者による不正アクセスの発生が確認され", "@"),
        E("leak_possible", "2026-06-22", "ユーザー登録情報が漏えいした可能性があることが発覚", "@"),
        E("disclosed", "2026-07-01", "当社ECサイトに対する不正アクセスに関するご報告とお詫び 2026年7月1日", "@"),
        E("update", "2026-08-17", "続報（第二報）2026年8月17日", "https://www.kgem.co.jp/news/news260817/")
      ],
      causes: ["vuln"], causeText: "システム上の脆弱性を悪用した第三者による不正アクセス"
    },
    "J:COM": {
      officialUrl: "https://newsreleases.jcom.co.jp/files/2026/06/26062302.pdf",
      events: [
        E("incident", "2026-05-16", "当社においては、2026年5月16日から発生", "https://newsreleases.jcom.co.jp/news/20260706_21698.html"),
        E("vendor_notified", "2026-06-18", "2026年6月18日、KDDIからの報告により本事案が判明", "@"),
        E("disclosed", "2026-06-23", "News Release 2026年6月23日 JCOM株式会社", "@"),
        E("update", "2026-07-06", "2026年7月6日（更新）", "https://newsreleases.jcom.co.jp/news/20260706_21698.html")
      ],
      causes: ["vendor"], causeText: null,
      dataNote: "KDDI のメールシステムへの不正アクセスに伴う事案です。KDDI が不正アクセスを確認した日（6月17日）は、J:COM の検知日としては扱っていません。"
    },
    "日本大学": {
      officialUrl: "https://www.nihon-u.ac.jp/hojin_news/others/20260706-267.html",
      events: [
        E("incident", "2026-06-24", "発生日時：令和8年6月24日（水）以降", "@"),
        E("anomaly", "2026-06-26", "検知日時：令和8年6月26日（金）", "@"),
        E("disclosed", "2026-07-06", "おわびと御報告 2026/07/06", "@")
      ],
      causes: ["credential"], causeText: "何らかの手段で認証情報（ID・パスワード）が窃取され"
    },
    "サカタのタネ": {
      officialUrl: "https://corporate.sakataseed.co.jp/news/2026/20260708_02.html",
      events: [
        E("anomaly", "2026-06-27", "2026年6月27日、…サーバーに対する不正アクセスを検知", "@"),
        E("leak_possible", null, "その後の調査により…漏えいした可能性があると判断", "@"),
        E("disclosed", "2026-07-08", "ブラジル連結子会社に対するサイバー攻撃に関するお知らせ 2026年07月08日", "@")
      ],
      causes: [], causeText: null
    },
    "ムラタメイク": {
      officialUrl: "https://www.murata-mlb.co.jp/2026/07/10/%E6%9D%91%E7%94%B0%E8%A3%BD%E4%BD%9C%E6%89%80it%E7%92%B0%E5%A2%83%E3%81%B8%E3%81%AE%E4%B8%8D%E6%AD%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%AB%E3%82%88%E3%82%8B%E5%80%8B%E4%BA%BA%E6%83%85%E5%A0%B1/",
      events: [
        E("disclosed", "2026-07-10", "2026/07/10 村田製作所IT環境への不正アクセスによる個人情報漏えいに関するお知らせとお詫び", "@")
      ],
      causes: ["vendor"], causeText: null,
      dataNote: "親会社の村田製作所は2026年2月28日に不正アクセスの可能性を認識し、3月6日に公表しています。どちらも親会社の日付なので、ムラタメイクの検知日・公表日としては扱っていません。"
    },
    "日本交通": {
      officialUrl: "https://www.nihon-kotsu.co.jp/news/20260713-3334/",
      events: [
        E("incident", "2026-07-11", "発生日時 2026年7月11日（土）未明", "@"),
        E("disclosed", "2026-07-13", "2026年7月13日付で…公表", "https://www.nihon-kotsu.co.jp/news/20260722-3343/"),
        E("update", "2026-07-22", "（第3報）流出した疑いのある情報をインターネット上で確認", "https://www.nihon-kotsu.co.jp/news/20260722-3343/"),
        E("update", "2026-08-19", "（第4報）ファイルの一部が外部に流出していることが判明", "https://www.nihon-kotsu.co.jp/news/20260819-3385/")
      ],
      causes: [], causeText: "外部からの不正アクセス（マルウェア感染）"
    },
    "メディア4u（ファブリカHD子会社）": {
      officialUrl: "https://www.media4u.co.jp/news/3351",
      events: [
        E("access_confirmed", "2026-06-24", "2026年６月24日、…SMS送信システムに対する…不正アクセスを確認", "https://ssl4.eir-parts.net/doc/4193/tdnet/2851745/00.pdf"),
        E("disclosed", "2026-07-14", "2026年７月14日 サイバー攻撃による不正アクセス及び情報漏洩等に関するお知らせとお詫び", "https://ssl4.eir-parts.net/doc/4193/tdnet/2851745/00.pdf")
      ],
      causes: [], causeText: null
    },
    "日産化学": {
      officialUrl: "https://www.nissanchem.co.jp/news_release/news/n2026_07_16.pdf",
      events: [
        E("incident", "2026-06-30", "6月30日に第三者による不正ログインや不正なサーバの作成", "https://www.nissanchem.co.jp/news_release/news/n2026_08_05.pdf"),
        E("anomaly", "2026-07-01", "2026年7月1日に当社システムにおける不審な活動を検知", "@"),
        E("disclosed", "2026-07-16", "当社システムに対する不正アクセスについて 2026年7月16日", "@"),
        E("update", "2026-08-05", "（第2報）2026年8月5日", "https://www.nissanchem.co.jp/news_release/news/n2026_08_05.pdf")
      ],
      causes: [], causeText: "クラウド環境において…第三者による不正ログインや不正なサーバの作成"
    },
    "JR東海高島屋": {
      officialUrl: "https://www.jr-takashimaya.co.jp/info/post-287.html", listedDate: "2026-07-24",
      events: [
        E("incident", null, "本年5月に発生したアルバイト管理システムに対する不正アクセス", "@"),
        E("disclosed", "2026-05-08", "2026年5月8日にプレスリリースをさせていただいた", "@"),
        E("update", "2026-07-24", "追加調査結果のお知らせ 2026.07.24", "@")
      ],
      causes: ["vuln"], causeText: "サーバーを管理するためのソフトウェアのセキュリティ上の脆弱性が悪用された可能性が高い",
      dataNote: "初報は2026年5月8日です。対象者が1,338人から7,582人に拡大した7月24日の続報によって掲載しています。"
    },
    "タカラトミー": {
      officialUrl: "https://www.takaratomy.co.jp/support/pdf/dmp20260728.pdf",
      events: [
        E("exposure", "2025-08-01", "リリース日である2025年8月1日から…改修が完了した2026年7月13日までの間", "@"),
        E("disclosed", "2026-07-28", "2026年7月28日 …お詫びとお知らせ", "@")
      ],
      causes: ["config"], causeText: "ユーザー認証機能の設計・実装に脆弱性があったことに起因"
    },
    "生命保険協会": {
      officialUrl: "https://www.seiho.or.jp/info/news/shared/mt-item/20260729.pdf",
      events: [
        E("exposure", "2021-07-01", "運用を開始した2021年7月1日から…2026年7月27日まで継続", "https://www.seiho.or.jp/info/news/shared/mt-item/20260914.pdf"),
        E("vendor_notified", null, "外部のセキュリティ専門機関からの指摘により判明", "@"),
        E("disclosed", "2026-07-29", "2026年7月29日 …お知らせとお詫びについて（第一報）", "@"),
        E("update", "2026-09-14", "2026年9月14日 …調査結果、再発防止策およびシステムの再開について", "https://www.seiho.or.jp/info/news/shared/mt-item/20260914.pdf")
      ],
      causes: ["config"], causeText: "ゲストユーザー…に、他の利用者の個人情報を参照できる権限が誤って付与された"
    },
    "Eストアー（ショップサーブ）": {
      officialUrl: "https://estore.jp/press/20260801/",
      events: [
        E("incident", "2026-05-21", "2026年5月21日から8月1日において、…不正なプログラムを実行", "https://estore.jp/press/20260802/"),
        E("leak_confirmed", "2026-08-01", "2026年8月1日、…購入者情報が外部に漏えいしたことを確認", "@"),
        E("disclosed", "2026-08-01", "2026.08.01 不正アクセスによる個人情報漏えいに関するお詫びとお知らせ", "@"),
        E("update", "2026-08-02", "（第2報）2026.08.02", "https://estore.jp/press/20260802/")
      ],
      causes: [], causeText: "「ショップサーブ」のサーバーに対する外部からの不正アクセス",
      dataNote: "第1報では発生を8月1日としていましたが、第2報で5月21日からに改めています。"
    },
    "講談社": {
      officialUrl: "https://www.kodansha.co.jp/notices/723",
      events: [
        E("incident", "2026-07-27", "7月27日 取引先を偽装したフィッシングメールのリンクを弊社社員がクリック", "@"),
        E("anomaly", "2026-07-30", "（7月30日）同日に当該社員が異常に気付き", "@"),
        E("disclosed", "2026-08-03", "2026年8月3日 不正アクセスによる個人情報流出のお詫びとお知らせ", "@")
      ],
      causes: ["phishing", "credential"], causeText: "フィッシングメールのリンクを弊社社員がクリック…偽ログイン画面で認証情報を入力"
    },
    "中部電力": {
      officialUrl: "https://www.chuden.co.jp/publicity/press/1218169_3273.html",
      events: [
        E("vendor_notified", "2026-07-29", "2026年7月29日、第三者機関から当社に対する情報提供があり", "@"),
        E("leak_possible", null, "不正閲覧された可能性があることを確認", "@"),
        E("disclosed", "2026-08-04", "2026年08月04日 不正アクセスによる情報漏えいの可能性について", "@")
      ],
      causes: ["credential"], causeText: "一部のシステムに係る資格情報が不正に利用され"
    },
    "デジタル庁": {
      officialUrl: "https://www.digital.go.jp/news/6d720c40-a064-4e48-a698-c8123ba53299",
      events: [
        E("leak_confirmed", "2026-07-06", "令和8年7月6日（月）、…連絡があり、事象の発生を確認", "@"),
        E("disclosed", "2026-08-07", "2026年8月7日（ページ掲載日）", "@")
      ],
      causes: ["human"], causeText: "作業手順書の曖昧な記載により作業誤りが発生"
    },
    "大阪公立大学医学部附属病院": {
      officialUrl: null, events: [], causes: [], causeText: null,
      dataNote: "公式発表のページを確認できなかったため、日付は登録していません。"
    },
    "ロジックベイン": {
      officialUrl: "https://www.lvi.co.jp/company-news/2025/12/08/%E4%B8%8D%E6%AD%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E7%99%BA%E7%94%9F%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B/",
      listedDate: "2026-08-17",
      events: [
        E("incident", "2025-12-03", "2025年12月3日（水）のAM4:38にFirefoxの実行形跡", "https://www.lvi.co.jp/company-news/2026/01/30/%E4%B8%8D%E6%AD%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B-%E7%AC%AC2%E5%A0%B1-20260130/"),
        E("access_confirmed", "2025-12-08", "2025年12月8日、当社社内ネットワークへの不正アクセスが確認され", "@"),
        E("disclosed", "2025-12-08", "不正アクセス発生に関するお知らせ（2025/12/8）", "@"),
        E("leak_confirmed", null, "リークサイト…に掲載されていることを新たに確認", "https://www.lvi.co.jp/company-news/2026/08/17/post-2244/"),
        E("update", "2026-08-17", "第4報・続報（2026/08/17）", "https://www.lvi.co.jp/company-news/2026/08/17/post-2244/")
      ],
      causes: ["edge_device", "vuln"], causeText: "ファイアウォールの脆弱性を突かれ、VPN侵入を許した可能性が高い",
      dataNote: "初報は2025年12月8日です。リークサイトへの掲載を確認した8月17日の第4報によって掲載しています。発生日は会社が示した最も早い攻撃者の痕跡で、ログが削除されたため正確な侵入時期は不明とされています。"
    },
    "コタ": {
      officialUrl: "https://media.cota.co.jp/media/c461e507-b70e-4543-81b6-38210d442a3b.pdf", listedDate: "2026-08-20",
      events: [
        E("anomaly", "2026-03-27", "2026年３月27日に一部の社内ＰＣ端末に動作不良の発生を確認", "@"),
        E("access_confirmed", null, "その結果、第三者による不正アクセスが確認された", "@"),
        E("disclosed", "2026-03-30", "2026年３月30日付で…システム障害が発生したことについて公表", "@"),
        E("update", "2026-08-20", "2026年８月20日 お客さまの個人情報に関するお知らせとお詫び", "@")
      ],
      causes: ["ransomware"], causeText: "一部のサーバー及び社内ＰＣ端末等がランサムウェアに感染",
      dataNote: "初報は2026年3月30日です。個人情報の件数を示した8月20日のお知らせによって掲載しています。"
    },
    "01銀行": {
      officialUrl: "https://01bank.co.jp/news/pdf/2026/0821.pdf",
      events: [
        E("access_confirmed", "2026-08-17", "2026年8月17日に不正アクセスを検知し調査を開始", "https://01bank.co.jp/news/pdf/2026/0827.pdf"),
        E("disclosed", "2026-08-21", "2026.08.21 当行システムに対する不正アクセスのお知らせ", "https://01bank.co.jp/news/index.html"),
        E("leak_confirmed", null, "お客さま情報の漏えいが発生した事実を確認", "https://01bank.co.jp/news/pdf/2026/0827.pdf"),
        E("update", "2026-08-27", "2026.8.27 …不正アクセスおよび情報漏えい発生のお知らせ", "https://01bank.co.jp/news/pdf/2026/0827.pdf")
      ],
      causes: [], causeText: null
    },
    "コロナ": {
      officialUrl: "https://www.corona.co.jp/news/other/post-439.html",
      events: [
        E("vendor_notified", "2026-08-24", "2026年８月24日、…第三者からの情報提供を受け", "@"),
        E("leak_possible", "2026-08-24", "データが不正に流出した可能性があることを確認", "@"),
        E("disclosed", "2026-08-28", "2026年8月28日（掲載日）", "@")
      ],
      causes: [], causeText: null
    },
    "イエローハット": {
      officialUrl: "https://www.yellowhat.jp/information/yellowhat/202608.html",
      events: [
        E("access_confirmed", "2026-08-18", "2026年8月18日（火）朝、当システムへの不正アクセスを検知", "@"),
        E("disclosed", "2026-08-28", "2026年8月28日（掲載日）", "@")
      ],
      causes: [], causeText: "不正プログラムによる攻撃"
    },
    "さくらインターネット": {
      officialUrl: "https://www.sakura.ad.jp/corporate/information/newsreleases/2026/08/17/1968225614/",
      events: [
        E("incident", null, "販売管理システムに対する不正アクセスは、2023年4月以降、2026年3月までの間に発生", "https://www.sakura.ad.jp/corporate/information/newsreleases/2026/09/10/1968225692/"),
        E("anomaly", "2026-08-09", "2026年8月9日（日）…異常を検知し、調査を開始", "@"),
        E("disclosed", "2026-08-17", "2026.8.17 当社レンタルサーバーサービスの一部環境に対する不正なアクセスについて", "@"),
        E("update", "2026-08-19", "（第二報）2026.8.19", "https://www.sakura.ad.jp/corporate/information/newsreleases/2026/08/19/1968225633/"),
        E("update", "2026-09-10", "調査結果および再発防止策について（第三報）2026.9.10", "https://www.sakura.ad.jp/corporate/information/newsreleases/2026/09/10/1968225692/")
      ],
      causes: [], causeText: "第三者が当社管理環境を経由して…一部お客さま環境へ不正アクセス",
      dataNote: "第1報（8月17日）はレンタルサーバーのみが対象でした。販売管理システムの136万563アカウントは8月19日の第二報で示されました。"
    },
    "デジタル庁（GSS）": {
      officialUrl: "https://www.digital.go.jp/news/2026-0911-01",
      events: [
        E("anomaly", "2026-06-25", "令和8年6月25日、…大量のファイルへのアクセスが行われたことを検知", "@"),
        E("access_confirmed", "2026-07-09", "7月9日、第三者がネットワーク接続機器（VPN）の脆弱性を利用してシステムに侵入し…判明", "@"),
        E("disclosed", "2026-09-11", "公開日: 2026年9月11日", "@")
      ],
      causes: ["edge_device", "vuln"], causeText: "ネットワーク接続機器（VPN）の脆弱性を利用してシステムに侵入"
    },
    "ムラウチドットコム": {
      officialUrl: "https://murauchi.com/static-pages/privacy/pressrelease.html",
      events: [
        E("anomaly", "2026-07-15", "2026年7月15日未明：弊社社内システムに障害が発生", "@"),
        E("access_confirmed", "2026-07-16", "2026年7月16日：…第三者による不正アクセスの痕跡を確認", "@"),
        E("disclosed", "2026-07-24", "2026年7月24日 …お詫びとご報告（第一報）", "@"),
        E("update", "2026-09-15", "2026年9月15日 …お詫びとご報告（第二報）", "@")
      ],
      causes: ["vuln"], causeText: "Webシステムの一部に存在していた脆弱性を悪用されたことを起点",
      dataNote: "初報は7月24日です。件数（771万6,811件）は9月15日の第二報で示されました。"
    },
    "ロート製薬": {
      officialUrl: "https://www.rohto.co.jp/news/whatsnew/2026/0911_01/",
      events: [
        E("anomaly", "2026-09-10", "2026年9月10日…不正アクセスの可能性がある事象を確認", "@"),
        E("disclosed", "2026-09-11", "当社システムにおける不正アクセスの可能性について 2026年9月11日", "@"),
        E("update", "2026-09-15", "調査状況について 2026年9月15日", "https://www.rohto.co.jp/news/whatsnew/2026/0915_01/")
      ],
      causes: [], causeText: null
    },
    "Helpfeel（Gyazo）": {
      officialUrl: "https://corp.helpfeel.com/news/news-20260916-1",
      events: [
        E("incident", "2026-09-11", "2026年9月11日、…画像アップロードサーバーに存在した脆弱性を悪用し", "@"),
        E("anomaly", "2026-09-11", "同日夜に不正な挙動を検知し、調査および対応を開始", "@"),
        E("leak_confirmed", "2026-09-14", "9月14日 …情報が外部に流出したことを確認", "@"),
        E("disclosed", "2026-09-16", "2026/9/16 …影響を公表", "@"),
        E("update", "2026-09-25", "2026/9/25（第二報）", "https://corp.helpfeel.com/news/news-20260925-01"),
        E("update", "2026-10-21", "…調査結果のご報告とお詫び（第三報）2026/10/21", "https://corp.helpfeel.com/news/news-20261021")
      ],
      causes: ["vuln"], causeText: "動画等を変換する処理の一部に、外部からの入力値が適切に処理されないままサーバー上のコマンドとして解釈されてしまう脆弱性",
      dataNote: "10月21日の第三報で外部機関のフォレンジック調査の最終結果を公表しました。原因は動画等の変換処理で外部入力がコマンドとして解釈される脆弱性で、委託先やソフトウェア部品に起因するものではないとしています。流出件数は従来どおり（ユーザー約2,362万件など）ですが、新たに133名が所有する画像432件が第三者に閲覧・取得されたことが判明しました。"
    },
    "ニチレイ": {
      officialUrl: "https://www.nichirei.co.jp/news/2026/512.html",
      events: [
        E("incident", "2026-07-13", "本日、…不正アクセスによるシステム障害が発生しました（2026年7月13日）", "@"),
        E("disclosed", "2026-07-13", "当社グループでのシステム障害発生について（第1報）2026年7月13日", "@"),
        E("update", "2026-08-14", "（第6報）…漏えいのおそれがあることを確認", "https://www.nichirei.co.jp/news/2026/530.html"),
        E("update", "2026-09-18", "（第7報）…漏えいを確認いたしました", "https://www.nichirei.co.jp/news/2026/524.html")
      ],
      causes: [], causeText: "サーバの一部がサイバー攻撃を受けていた",
      dataNote: "初報は7月13日（システム障害）です。約5万件の漏洩確認は9月18日の第7報で示されました。"
    },
    "ファインズ": {
      officialUrl: "https://e-tenki.co.jp/news/%e5%bc%8a%e7%a4%be%e3%82%b7%e3%82%b9%e3%83%86%e3%83%a0%e3%81%b8%e3%81%ae%e4%b8%8d%e6%ad%a3%e3%82%a2%e3%82%af%e3%82%bb%e3%82%b9%e3%81%ab%e3%82%88%e3%82%8b%e6%83%85%e5%a0%b1%e6%bc%8f%e3%81%88%e3%81%84/",
      events: [
        E("anomaly", "2026-09-22", "2026年9月22日、システムにおける異常を検知", "@"),
        E("disclosed", "2026-09-25", "情報漏えいについてのお詫びとお知らせ【速報】2026/09/25", "@"),
        E("incident", "2026-09-21", "2026年9月21日から22日にかけて、…不正アクセスを受け", "@"),
        E("leak_confirmed", null, "お客様の情報を含む予約データが漏えいしたことを確認いたしました", "@"),
        E("update", "2026-10-29", "…お詫びとお知らせ【速報】（2026年10月29日追記済）", "@")
      ],
      causes: ["vuln"], causeText: "予約システムのプログラムの入力処理の不備を悪用した不正アクセス",
      certainty: "confirmed",
      dataNote: "10月29日の追記で、10月16日に契約者へ送ったメールの内容を掲載しました。予約システムの入力処理の不備を悪用され、不正に作成された管理者アカウントで予約データが取得され、予約者の氏名・電話番号・メールアドレス・予約内容の漏えいを確認したとしています。住所・生年月日などは漏えいのおそれがあり調査中です。"
    },
    "京王電鉄グループ": {
      officialUrl: "https://www.keio.co.jp/news/update/announce/nr260926v13404/",
      events: [
        E("access_confirmed", "2026-09-26", "2026年9月26日未明に、…ランサムウェアによる攻撃を確認", "@"),
        E("disclosed", "2026-09-26", "2026年9月26日 ランサムウェア攻撃によるシステム障害に関するお知らせとお詫び", "@"),
        E("update", "2026-10-16", "ランサムウェア攻撃によるシステム障害に関するお知らせ 第２報", "https://www.keio.co.jp/news/update/news_release/news_release2026/pdf/nr20261016_newsrelease.pdf"),
        E("update", "2026-10-21", "ランサムウェア攻撃によるシステム障害に関するお知らせ 第３報", "https://www.keio.co.jp/news/update/news_release/news_release2026/pdf/nr20261021_newsrelease.pdf"),
        E("leak_possible", null, "個人情報漏洩の可能性もあるとみて、個人情報保護委員会へ報告", "https://www.keio.co.jp/news/update/news_release/news_release2026/pdf/nr20261021_newsrelease.pdf")
      ],
      causes: ["ransomware"], causeText: null,
      count: "件数未公表（漏洩の可能性があるとして調査中）",
      certainty: "possible",
      dataNote: "10月16日の第2報で攻撃を名乗る組織が情報の一部を公開したと主張していることを確認し、10月21日の第3報で、公開されたとの報告を外部専門家から受け、個人情報漏洩の可能性もあるとみて個人情報保護委員会へ報告したと発表しました。件数・項目は未公表です。"
    },
    "ニッポンレンタカー": {
      officialUrl: "https://www.nipponrentacar.co.jp/info/202609.html",
      events: [
        E("disclosed", "2026-09-26", "会員情報漏えいに関するお詫びとお知らせ 2026年9月26日（土）", "@")
      ],
      causes: [], causeText: null,
      dataNote: "10月1日には、手法の異なる別の不正アクセス（55名分、9月19〜21日に発生）が公表されています。そちらの日付はこの事案には含めていません。"
    },
    "東京メトロ（メトポ）": {
      officialUrl: "https://www.metpo.jp/news/Gn52e-Vm",
      events: [
        E("anomaly", "2026-09-20", "2026年9月20日（日）に…メール配信サービスおいて不具合が発生", "@"),
        E("access_confirmed", "2026-09-25", "9月25日（金）に通常とは異なる利用記録を発見し…不正なアクセスがあったことが判明", "@"),
        E("disclosed", "2026-09-27", "2026年9月27日 東京地下鉄株式会社", "https://www.tokyometro.jp/info/files/9172e2efa7222d15f8d4f601b6385457.pdf")
      ],
      causes: [], causeText: "国外からと思われる第三者による不正なアクセス"
    },
    "スターツ出版（OZmall）": {
      officialUrl: "https://starts-pub.jp/info20260927",
      events: [
        E("incident", "2026-09-26", "2026年9月26日、当社サイトに海外から大量の不正アクセスが発生", "@"),
        E("access_confirmed", "2026-09-26", "不正アクセスが発生していることを当社システム部門が検知", "@"),
        E("leak_possible", null, "その後の調査の結果、…閲覧された可能性を確認", "@"),
        E("disclosed", "2026-09-27", "2026年9月27日 …個人情報流出の可能性に関するお知らせ", "@"),
        E("update", "2026-10-01", "（第２報）2026年10月1日", "https://starts-pub.jp/info20261001")
      ],
      causes: [], causeText: null
    },
    "パーク24（タイムズカー）": {
      officialUrl: "https://www.park24.co.jp/news/2026/09/web1.html",
      events: [
        E("access_confirmed", "2026-09-25", "2026年9月25日9時07分、当社システムにおいて、不正アクセスを検知", "@"),
        E("leak_possible", "2026-09-25", "個人情報が外部に漏えいした可能性があることが判明", "@"),
        E("disclosed", "2026-09-25", "2026年09月25日 …個人情報漏えいの可能性について（第1報）", "@"),
        E("leak_confirmed", null, "一部の会員様情報について、第三者に取得されたことを確認", "https://www.park24.co.jp/news/2026/09/20260928-1.html"),
        E("update", "2026-09-28", "（第2報）2026年09月28日", "https://www.park24.co.jp/news/2026/09/20260928-1.html"),
        E("update", "2026-09-29", "（第3報）2026年9月29日", "https://share.timescar.jp/news/2026/0929/1816.html"),
        E("update", "2026-10-16", "（…情報漏えい関連・第4報）2026年10月16日", "https://www.park24.co.jp/news/2026/10/20261016-1.html"),
        E("update", "2026-10-23", "…ご報告と今後の対応について（…第5報）2026年10月23日", "https://www.park24.co.jp/news/2026/10/20261023-1.html")
      ],
      causes: ["vuln"], causeText: "Webシステムに存在した脆弱性が悪用されたことにより発生したものと判断",
      dataNote: "初報は9月25日です。約660万アカウントは9月28日の第2報、本人確認書類 約160万件は9月29日の第3報で示されました。10月23日の第5報で、フォレンジック調査の最終件数として、氏名・住所・生年月日・運転免許情報などが外部送信された痕跡のあるもの6,628,007件、本人確認書類画像（暗号化）の外部送信痕跡約146万件（従来は「約160万件のおそれ」）を公表し、原因をWebシステムの脆弱性と特定しました。タイムズクラブWebシステムへの不正アクセスも確認されています。画像の外部送信が確認された人に3,000円相当のお見舞いを支払うとしています。",
      count: "6,628,007件（外部送信の痕跡を確認。うち本人確認書類画像 約146万件）",
      n: 6628007
    },
    "集英社（HAPPY PLUS COMMUNITY）": {
      officialUrl: "https://www.shueisha.co.jp/wp-content/uploads/2026/09/Shueisha20260928-1.pdf",
      events: [
        E("incident", "2026-09-09", "2026年9月9日（水）0時45分～1時25分 / 13時42分～16時46分", "@"),
        E("anomaly", "2026-09-09", "2026年9月9日（水）14時53分 …ユーザーから通報があり発覚", "@"),
        E("disclosed", "2026-09-28", "2026年9月28日 株式会社集英社", "@")
      ],
      causes: ["config"], causeText: "CMSの設定の不備に起因するAPI認証情報を狙った攻撃",
      dataNote: "対象のブロガーには公表前の9月25日にメールで個別に通知しています。対外公表日は9月28日として扱っています。"
    },
    "セイコーマート": {
      officialUrl: "https://www.secoma.co.jp/images/top/202609290017.pdf",
      events: [
        E("incident", "2026-09-24", "9月24日(木)の22時～23時の間に不正にクラブカードの退会処理", "@"),
        E("leak_possible", "2026-09-28", "会員サーバーに不正にアクセスされた可能性があることが、9月28日(月)17時過ぎに判明", "@"),
        E("disclosed", "2026-09-29", "2026年9月29日 …お詫びとお知らせ", "@"),
        E("leak_confirmed", null, "572,022人分の情報が不正アクセスにより閲覧されたことを確認", "https://www.secoma.co.jp/images/top/202609301900.pdf"),
        E("update", "2026-09-30", "（第三報）2026年9月30日", "https://www.secoma.co.jp/images/top/202609301900.pdf"),
        E("update", "2026-10-05", "…お詫びとお知らせ（第四報）2026年10月5日", "https://www.secoma.co.jp/images/top/202610051430.pdf"),
        E("update", "2026-10-26", "アプリログイン機能再開のお知らせ 2026年10月26日", "https://www.secoma.co.jp/images/top/20261026.pdf")
      ],
      causes: [], causeText: "アプリのサーバーを経由して会員情報を保有するサーバーに対し第三者が不正にアクセス",
      count: "574,647人分",
      n: 574647,
      dataNote: "10月5日の第四報で、対象をセイコーマートアプリに登録したことがあるクラブ会員574,647人分としました（第三報は572,022人分）。10月26日にアプリへのログインを再開し、個人情報をアプリやインターネットから閲覧できない仕組みに改めたとしています。"
    },
    "ヤマト運輸（クロネコ代金後払い）": {
      officialUrl: "https://www.yamato-hd.co.jp/important/img/impo_261002_1_1.pdf",
      events: [
        E("access_confirmed", "2026-09-28", "9月28日（月）に…不正アクセスを受けたことを確認", "@"),
        E("disclosed", "2026-09-29", "2026年09月29日 …不正アクセスの発生について", "@"),
        E("leak_possible", null, "情報の一部が漏えいした可能性があることが判明", "https://www.yamato-hd.co.jp/important/info_260929_1.html"),
        E("update", "2026-10-02", "【第2報】2026年10月02日", "https://www.yamato-hd.co.jp/important/info_260929_1.html"),
        E("update", "2026-10-09", "【第3報】「クロネコ代金後払いサービス」再開のお知らせ", "https://www.yamato-hd.co.jp/important/info_260929_1.html"),
        E("update", "2026-10-16", "【第4報】…不正アクセスに関する調査結果と今後の対応について", "https://www.yamato-hd.co.jp/important/info_260929_1.html"),
        E("leak_confirmed", null, "「クロネコ代金後払いサービス」に関わる一部の情報が不正に持ち出された", "https://www.yamato-hd.co.jp/important/info_260929_1.html")
      ],
      causes: [], causeText: null,
      count: "約526万件（うちメールアドレスを含む約49万件）、お届け先 約5万件、加盟店 約4,100件",
      n: 5260000,
      certainty: "confirmed",
      dataNote: "10月16日の第4報で、2018年10月1日〜2026年9月28日の利用者情報（氏名・住所・電話番号・メールアドレス・商品明細など）約526万件、お届け先情報約5万件、加盟店情報約4,100件が不正に持ち出されたと公表しました。第2報で挙げた請求金額・債権残高・社員氏名の持ち出しは確認されなかったとしています。原因は書かれていません。"
    },
    "日本郵便（郵便局アプリ）": {
      officialUrl: "https://files.japanpost.jp/assets/34d9d11432734cfaa759e78fe395b688/18239b871f714763aa7eb15c25e7b30b/20260929_01.pdf",
      events: [
        E("disclosed", "2026-09-29", "2026年9月29日 …郵便局アプリへの不正アクセスについて", "@")
      ],
      causes: [], causeText: null
    },
    "イープラス（スマチケ）": {
      officialUrl: "https://support-qa.eplus.jp/hc/ja/articles/62711500727961",
      events: [
        E("incident", "2026-09-11", "2026年9月11日(金) 19時58分 ～ 9月12日(土) 2時44分：不正アクセスが複数回発生", "@"),
        E("leak_confirmed", "2026-09-14", "2026年9月14日(月) ～ 15日(火)：不正アクセスおよび個人情報漏えいの事実を確認", "@"),
        E("disclosed", "2026-09-29", "2026年9月29日 株式会社イープラス", "@")
      ],
      causes: [], causeText: "払戻し情報を管理するシステムに対し、第三者から不正アクセス"
    },
    "VOISING": {
      officialUrl: "https://voising-official.com/news/931",
      events: [
        E("incident", "2026-08-10", "2026年8月10日（月）1時2分頃から…不正アクセスが開始", "@"),
        E("access_confirmed", "2026-08-16", "（8月16日）同日23時55分に事態を確認", "@"),
        E("disclosed", "2026-08-18", "2026.08.18 …不正アクセスおよび個人情報漏えいに関するお詫び", "@"),
        E("update", "2026-09-30", "2026.09.30 【第四報】…調査結果と再発防止策について", "https://voising-official.com/news/1015")
      ],
      causes: ["vuln"], causeText: "BIツール…の脆弱性を悪用されたことが原因",
      dataNote: "初報は8月18日です。原因と確定件数（約17万件）は9月30日の第四報で示されました。"
    },
    "大和証券": {
      officialUrl: "https://ssl4.eir-parts.net/doc/8601/tdnet/2891437/00.pdf",
      events: [
        E("incident", "2026-10-02", "不正アクセスは10月2日20時33分頃から10月3日8時1分頃までの間に発生", "@"),
        E("vendor_notified", "2026-10-03", "2026年10月3日、SC社から…形跡が確認された旨連絡を受けました", "@"),
        E("disclosed", "2026-10-05", "2026年10月5日 大和証券株式会社 …漏洩の可能性について", "@")
      ],
      causes: ["vendor"], causeText: null
    },

    // ---- 2026-10-07 更新分 ----
    "EPARKリラク＆エステ（PeakManager）": {
      officialUrl: "https://www.epark-relax.co.jp/news/225",
      events: [
        E("access_confirmed", "2026-07-27", "2026年7月27日、不正な方法によりPeakManagerの一部データベースへのアクセス", "@"),
        E("leak_possible", "2026-07-27", "外部へ漏えいした可能性があることが2026年7月27日に判明", "@"),
        E("disclosed", "2026-07-31", "不正アクセスによる個人情報漏えいの可能性に関するお知らせ（第一報）2026/07/31", "@"),
        E("update", "2026-08-04", "株式会社EPARKリラク＆エステの不正アクセスによる情報漏えいについて（親会社 株式会社EPARK）", "https://epark.jp/news/427/"),
        E("leak_confirmed", null, "データベース内の情報が外部へ転送されたことが確認されました", "https://www.epark-relax.co.jp/news/231"),
        E("update", "2026-09-24", "不正アクセスと個人情報漏えいに関するお知らせ（第二報）2026/09/24", "https://www.epark-relax.co.jp/news/231")
      ],
      causes: [], causeText: null,
      dataNote: "侵入経路と手法は第二報で「公表を差し控え」とされています。件数はレコード数で、人数ではありません。"
    },
    "佐川急便（お荷物問い合わせサービス）": {
      officialUrl: "https://www2.sagawa-exp.co.jp/information/detail/419/",
      events: [
        E("anomaly", "2026-09-30", "発覚日時：2026年9月30日（水）午前7時30分", "https://www2.sagawa-exp.co.jp/information/detail/426/"),
        E("access_confirmed", "2026-09-30", "9月30日（水）に第三者による不正アクセスを確認", "@"),
        E("disclosed", "2026-09-30", "「お荷物問い合わせサービス」への不正アクセスの発生について(第1報）", "@"),
        E("leak_possible", null, "お客さまの個人情報が外部に流出した可能性があることが判明", "https://www2.sagawa-exp.co.jp/information/detail/420/"),
        E("update", "2026-10-01", "個人情報流出の可能性について（第2報）2026年10月1日", "https://www2.sagawa-exp.co.jp/information/detail/420/"),
        E("update", "2026-10-08", "よくあるご質問（FAQ）（10月8日更新）", "https://www2.sagawa-exp.co.jp/information/detail/425/"),
        E("update", "2026-10-09", "個人情報流出の可能性について（第4報）2026年10月9日", "https://www2.sagawa-exp.co.jp/information/detail/426/"),
        E("update", "2026-10-23", "「お荷物問い合わせサービス」の再開および…調査状況について（第5報）", "https://www2.sagawa-exp.co.jp/information/detail/430/")
      ],
      causes: [], causeText: null,
      dataNote: "「約100日分」は流出した可能性のあるデータの範囲で、侵入の期間ではありません。2026年7月のスマートクラブの件とは別の事案です。10月23日の第5報で、流出した可能性のある個人情報を、重複を一定程度整理したうえで最大約5,323万件と公表しました（送り状データ等の重複を含み実人数ではなく、全件の流出を確認した件数でもないとしています）。同日、お荷物問い合わせサービスを再開しています。",
      count: "最大約5,323万件（重複を含む件数で実人数ではない）",
      n: 53230000
    },
    "第一ライフグループ・第一生命保険": {
      officialUrl: "https://www.dai-ichi-life.co.jp/information/pdf/index_192.pdf",
      events: [
        E("access_confirmed", "2026-09-24", "2026年9月24日、両社が利用する従業員向け人事システムへの不正アクセスを検知", "@"),
        E("leak_possible", null, "外部へ流出した可能性があることを確認いたしました", "@"),
        E("disclosed", "2026-10-02", "2026年10月２日 退職された皆さまへのお知らせ", "@")
      ],
      causes: [], causeText: "第三者による不正アクセスを受けたため",
      dataNote: "確認できた公式文書は退職者向けのお知らせのみです。"
    },
    "JOGMEC": {
      officialUrl: "https://www.jogmec.go.jp/news/information/information_00706.html",
      events: [
        E("vendor_notified", null, "外部機関から弊機構に対する情報提供があり", "@"),
        E("leak_possible", "2026-09-09", "漏えいした可能性があることが2026年9月9日に判明", "@"),
        E("disclosed", "2026-10-02", "2026年10月2日 …漏えいの可能性に関するお詫びとご報告", "@")
      ],
      causes: [], causeText: "情報システムに対する外部からの不正アクセスが原因と考えていますが…引き続き調査",
      dataNote: "件数は公式発表の2区分（約1,100件、約7,400件）を合計した値です。"
    },
    "日本経済新聞社": {
      officialUrl: "https://www.nikkei.co.jp/nikkeiinfo/news/information/1547.html",
      events: [
        E("incident", null, "アカウントが7月下旬以降、外部から不正にログインされ", "@"),
        E("vendor_notified", null, "8月上旬にグーグル社からの通知により判明", "@"),
        E("disclosed", "2026-10-04", "2026.10.04 不正ログインによる情報漏洩について", "@")
      ],
      causes: [], causeText: null
    },
    "日経BP": {
      officialUrl: "https://www.nikkeibp.co.jp/atcl/newsrelease/corp/100200417/",
      events: [
        E("incident", "2026-09-30", "2026年9月30日に、当社従業員のメールアカウントへの不正アクセスがあり", "@"),
        E("disclosed", "2026-10-04", "2026年10月04日 メール不正アクセスによる個人情報の漏えいについて", "@")
      ],
      causes: ["phishing", "credential"], causeText: "フィッシングメールから、認証情報を入手されました"
    },
    "大起水産（公式アプリ）": {
      officialUrl: "https://www.daiki-suisan.co.jp/files/optionallink/00000164_file.pdf",
      events: [
        E("access_confirmed", "2026-09-15", "2026年9月15日に本件を確認後、外部からの不正アクセスを防止するための対策", "@"),
        E("disclosed", "2026-10-05", "不正アクセスによる個人情報漏えいのおそれに関するお詫びとお知らせ 2026年10月5日", "@"),
        E("update", "2026-10-06", "【2026年10月6日更新】", "@")
      ],
      causes: [], causeText: null
    },
    "GMOリサーチ&AI（infoQ）": {
      officialUrl: "https://gmo-research.ai/pressroom/notice/notice-20261005",
      events: [
        E("incident", "2026-10-02", "10月2日（金）以降 第三者による不正アクセス", "@"),
        E("access_confirmed", "2026-10-03", "10月3日（土）午前 …不正アクセスが行われていたことを確認", "@"),
        E("leak_confirmed", null, "会員の皆さまの個人情報が外部に持ち出されたことを確認", "@"),
        E("disclosed", "2026-10-05", "2026年10月05日 お詫びとお知らせ", "@"),
        E("update", "2026-10-14", "…お詫びとお知らせ（第2報）", "https://gmo-research.ai/pressroom/notice/notice-20261014")
      ],
      causes: ["vuln"], causeText: "当社サイトで使用していたソフトウェアの脆弱性を悪用して侵入",
      count: "89万4,082件（外部に持ち出された件数として確定）",
      n: 894082,
      dataNote: "10月14日の第2報で、外部に持ち出された個人情報を89万4,082件と確定しました（第1報は最大94万8,498件）。全会員のパスワードは10月7日に無効化しています。"
    },
    "物語コーポレーション（焼肉きんぐ公式アプリ）": {
      officialUrl: "https://www.monogatari.co.jp/news/261005_news/",
      events: [
        E("access_confirmed", "2026-10-02", "2026年10月2日（金）、…第三者からの不正アクセスが確認されました", "@"),
        E("leak_confirmed", "2026-10-03", "会員情報が漏えいしたことを10月3日（土）に確認", "@"),
        E("disclosed", "2026-10-05", "2026.10.05 お知らせ", "@"),
        E("incident", "2026-10-02", "2026年10月2日（金）朝9時から、外部の第三者からの断続的な攻撃", "https://www.monogatari.co.jp/news/261020_news/"),
        E("update", "2026-10-20", "『焼肉きんぐ』公式アプリにおける…個人情報保護強化策について", "https://www.monogatari.co.jp/news/261020_news/")
      ],
      causes: [], causeText: "第三者による不正アクセスによるものと確認",
      dataNote: "公式発表の冒頭と経緯欄で書き方が異なります。経緯欄（10月2日に不正アクセスを確認、10月3日に漏えいを確認）を使っています。10月20日に再発防止策を公表し、攻撃が10月2日朝9時から断続的に行われたと説明しました。グループの公式アプリ計11本で氏名・電話番号を保持しない仕組みへ2027年上半期に移行するとしています。件数や原因の追加情報はありません。"
    },
    "ミスターマックス（MrMaxアプリ・オンラインストア）": {
      officialUrl: "https://www.mrmax.co.jp/info/incident_20261006/",
      events: [
        E("anomaly", "2026-10-03", "2026年10月3日(土)夕方、当社のサーバーに対する不審なアクセスを確認", "@"),
        E("leak_confirmed", null, "その後の調査の結果…個人情報の一部が流出したことが判明", "@"),
        E("disclosed", "2026-10-06", "2026年10月6日 不正アクセスによる情報流出に関するお詫びとお知らせ", "@")
      ],
      causes: [], causeText: "第三者が本サービスを構成するソフトウェアの機能を不正に利用してサーバーに侵入"
    },
    "楽天ドライブ": {
      officialUrl: "https://support.rakuten-drive.com/hc/ja/articles/62934949147929",
      events: [
        E("incident", "2026-01-29", "時期：2026年1月29日（木）から同年9月17日（木）", "@"),
        E("disclosed", "2026-10-06", "2026年10月06日（ページの公開日時）", "@")
      ],
      causes: ["credential"], causeText: "一部システムの管理用アカウントの認証情報を不正に取得し、システムにアクセス",
      dataNote: "3つの事象（①②は8月27日、③は1月29日〜9月17日）が含まれ、発生日は最も早いものです。検知日は記載されていません。"
    },
    "シチズン時計": {
      officialUrl: "https://www.citizen.co.jp/release/news/detail/2026/20261006.html",
      events: [
        E("incident", "2026-10-02", "不正アクセスは2026年10月2日20時33分頃から10月3日8時1分頃にかけて発生", "@"),
        E("vendor_notified", "2026-10-03", "2026年10月3日、…不正に取得された可能性があるとの報告を受けました", "@"),
        E("disclosed", "2026-10-06", "2026年10月6日 シチズン時計株式会社", "@")
      ],
      causes: ["vendor"], causeText: "委託先事業者であるSC社のサーバーに対する第三者による不正アクセス"
    },
    "旭化成セラピューティクス": {
      officialUrl: "https://www.asahi-kasei.co.jp/pharma/oshirase_20261006.html",
      events: [
        E("vendor_notified", "2026-10-02", "2026年10月2日、当社は、…医薬情報ネット…より…報告を受けました", "@"),
        E("disclosed", "2026-10-06", "プレスリリース 2026年10月6日 旭化成セラピューティクス株式会社", "@")
      ],
      causes: ["vendor"], causeText: "会員データベースにサイバー攻撃による不正アクセスが確認され",
      dataNote: "公式発表に合計はありません。報道では3区分を足した「最大55万8,700人」とされていますが、メールアドレス等の約4万4,000名は医療従事者の内数と読めるため、ここでは約51万4,700名としています。"
    },
    "IDCフロンティア": {
      officialUrl: "https://www.idcf.jp/news/topics/20261007001",
      events: [
        E("incident", "2026-10-07", "2026年10月7日（水）午前3時40分頃から継続中", "https://www.idcf.jp/news/topics/20261007002"),
        E("disclosed", "2026-10-07", "2026年10月7日 …第三者からの不正アクセスにより、サービスの一部に障害", "@"),
        E("update", "2026-10-07", "【第2報】…第三者からのランサムウェア攻撃によるものであることが判明", "https://www.idcf.jp/news/topics/20261007002"),
        E("update", "2026-10-08", "【第3報】当社サービスの一部システムへの不正アクセスによる障害について", "https://www.idcf.jp/news/topics/20261008001"),
        E("update", "2026-10-09", "【第4報】不正アクセスによる障害への対応体制について", "https://www.idcf.jp/news/topics/20261009001"),
        E("update", "2026-10-14", "【第5報】不正アクセスによる障害に関する調査の進捗について", "https://www.idcf.jp/news/topics/20261014001"),
        E("update", "2026-10-18", "【第6報】バックアップサービスの提供再開について", "https://www.idcf.jp/news/topics/20261018001"),
        E("update", "2026-10-27", "【第7報】不正アクセスに関する調査結果および今後の対応について", "https://www.idcf.jp/news/topics/20261027001")
      ],
      causes: ["ransomware", "vuln"], causeText: "「IDCFクラウドポータル」で採用しているオープンソースソフトウェアの脆弱性が悪用された",
      dataNote: "495は障害の影響を受けた顧客数で、漏洩件数ではありません。IDCフロンティア自身は第4報（10月9日）時点でも漏えいを確認していませんが、利用企業のビューカード、JR東日本、JR九州は10月9日にメールアドレスなどが閲覧・取得された可能性を公表しています。影響ゾーンの顧客データは「取り出しや復元が困難な見通し」とされています。10月14日の第5報で仮想サーバー内データの外部流出はなかったと判断し、10月27日の第7報で調査完了を報告しました。侵入原因はIDCFクラウドポータルの認証システムで使っていたオープンソースソフトウェアの脆弱性で、その後ランサムウェアで仮想サーバーが暗号化されたとしています。ポータルでは最大71社の登録情報が不正照会され（個人名等を含むもの最大31社・31件、持ち出しの痕跡なし）、ログインパスワード最大4件が不正に変更されていました。身代金の支払いや交渉はしていないとしています。",
      count: "仮想サーバー内データの外部流出なし（ポータル登録情報の不正照会 最大71社、個人名等を含むもの最大31件）"
    },

    // ---- 2026-10-08 更新分 ----
    "チャーム（チャーム本店）": {
      officialUrl: "https://charm.co.jp/honten/info/notice/20260813.html",
      events: [
        E("incident", "2026-07-01", "不正ログインの確認期間：2026年7月1日～2026年8月12日", "@"),
        E("access_confirmed", "2026-08-11", "2026年8月11日に…第三者による不正アクセスを受けたことが判明", "@"),
        E("anomaly", "2026-08-12", "2026年8月12日 チャーム本店にて不正アクセスを検知", "@"),
        E("disclosed", "2026-08-13", "2026年8月13日 株式会社チャーム", "@"),
        E("update", "2026-08-20", "（第2報）2026年8月20日", "https://charm.co.jp/honten/info/notice/20260820.html"),
        E("leak_confirmed", null, "個人情報の漏えいが確認されたものは約37万件", "https://charm.co.jp/honten/info/notice/20260901.html"),
        E("update", "2026-09-02", "第3報（2026年9月2日 更新）", "https://charm.co.jp/honten/info/notice/20260901.html"),
        E("update", "2026-10-07", "（第4報）2026年10月7日", "https://charm.co.jp/honten/info/notice/20261007.html")
      ],
      causes: [], causeText: null,
      dataNote: "発生日は「不正ログインの確認期間」の開始日で、侵入が始まった日とは限りません。第3報で件数が約43万件から約39万件に訂正されています。"
    },
    "スカラ（スカラコミュニケーションズ i-ask）": {
      officialUrl: "https://scalagrp.jp/pdf/ir/news/2026_IRnews1006.pdf",
      events: [
        E("incident", "2026-10-02", "2026年10月2日（金）20時30分頃から10月3日（土）8時頃にかけて", "@"),
        E("anomaly", "2026-10-03", "10月3日朝、データベースの監視アラートを契機に調査を開始", "@"),
        E("leak_possible", null, "お問い合わせ情報を取得された可能性があることを確認", "@"),
        E("disclosed", "2026-10-06", "2026年10月6日 株式会社スカラ", "@")
      ],
      causes: ["credential"], causeText: "第三者が i-ask の管理サイトに不正にログインし…不正なプログラムを設置",
      dataNote: "大和証券、シチズン時計、損害保険ジャパン、東武鉄道が公表した委託先事案の発生元です。"
    },
    "損害保険ジャパン": {
      officialUrl: "https://www.sompo-japan.co.jp/-/media/SJNK/files/news/2026/20261007_1.pdf",
      events: [
        E("incident", "2026-10-02", "SC社によると、不正アクセスは2026年10月2日20時33分頃から", "@"),
        E("vendor_notified", "2026-10-03", "当社は2026年10月３日、SC社から…連絡を受けました", "@"),
        E("disclosed", "2026-10-07", "2026年10月7日 損害保険ジャパン株式会社", "@")
      ],
      causes: ["vendor"], causeText: "スカラコミュニケーションズのシステムのサーバーが、第三者によって不正にアクセスされ"
    },
    "東武鉄道": {
      officialUrl: "https://www.tobu.co.jp/cms-pdf/news/20261007153424wpo2m-MJPLTJzWJHnUDkVw.pdf",
      events: [
        E("incident", "2026-10-02", "ＳＣ社によると、不正アクセスは２０２６年１０月２日２０時３３分頃から", "@"),
        E("vendor_notified", null, "ＳＣ社のサーバーに対する不正アクセスに関する報告を受けました", "@"),
        E("disclosed", "2026-10-07", "２０２６年１０月７日 東武鉄道株式会社", "@")
      ],
      causes: ["vendor"], causeText: "ＳＣ社が管理するシステムに対する不正アクセスの形跡が確認された"
    },
    "エイチ・アイ・エス（タイ現地法人）": {
      officialUrl: "https://www.his.co.jp/assets/20261007.pdf",
      events: [
        E("anomaly", "2025-12-11", "2025年12月11日、タイ法人のファイルサーバ…検知ソフトがアラートを発出", "@"),
        E("leak_possible", "2025-12-29", "サーバ内に日本で取得した個人情報の一部が含まれていることを確認", "@"),
        E("leak_possible", "2026-02-24", "最大627名のパスポート情報が含まれていることが判明", "@"),
        E("disclosed", "2026-10-07", "お客様各位 2026/10/07", "@")
      ],
      causes: [], causeText: "ネットワークに対する第三者による不正アクセスを受けた",
      dataNote: "個人情報保護委員会などへの報告は2025年12月29日です。公表までの期間について、同社は全ファイルを目視で確認していたためと説明しています。"
    },
    "戸田建設": {
      officialUrl: "https://www.toda.co.jp/news/2026/20261007_006350.html",
      events: [
        E("incident", "2026-10-01", "10月1日（木）から10月5日（月）にかけて、該当システムからの情報漏洩の形跡", "@"),
        E("anomaly", "2026-10-05", "2026年10月5日（月）、…外部からの不正アクセスを検知", "@"),
        E("leak_confirmed", null, "調査を行ったところ…情報漏洩の形跡を確認", "@"),
        E("disclosed", "2026-10-07", "2026/10/07", "@")
      ],
      causes: [], causeText: "弊社が管理するシステムの一部におきまして、外部からの不正アクセスにより"
    },
    "日水物流（ニッスイグループ）": {
      officialUrl: "https://www.nissui.co.jp/news/2026100702.html",
      events: [
        E("incident", "2026-10-07", "本日、…日水物流株式会社…でシステム障害が発生しました", "@"),
        E("disclosed", "2026-10-07", "日水物流株式会社におけるシステム障害について（第1報）2026年10月07日", "@"),
        E("update", "2026-10-09", "（第2報）本日10月9日より一部の入出荷業務を再開", "https://www.nissui.co.jp/news/20261009.html")
      ],
      causes: ["vendor"], causeText: "委託先である株式会社IDCフロンティアが第三者による不正アクセスを受けたことに伴い",
      dataNote: "システム障害の発表です。第2報で、被害を受けたサーバーに個人情報や顧客情報は含まれないと確認したとしています。発生日はシステム障害の発生日です。"
    },
    "東京都小平市": {
      officialUrl: "https://x.com/kodaira_tokyo/status/2107976770385224041",
      events: [
        E("leak_possible", null, "問合せフォーム等を利用した際の住民情報…について、情報漏えいのおそれ", "@"),
        E("disclosed", "2026-10-08", "市HPの保守管理を受託している事業者が使用するクラウド基盤サービスが…ランサムウェア攻撃", "@")
      ],
      causes: ["ransomware", "vendor"], causeText: "保守管理を受託している事業者が使用するクラウド基盤サービスが第三者によるランサムウェア攻撃を受け",
      dataNote: "市の公式Xアカウントの投稿（添付画像）による発表で、公表日は投稿日時です。10月7日の投稿では「システムトラブル」とだけ案内していました。現時点で情報漏洩は確認されていないとしています。"
    },

    // ---- 2026-10-10 更新分 ----
    "ローソン": {
      officialUrl: "https://www.lawson.co.jp/contents/cont07/1533174_3310.html",
      events: [
        E("incident", "2026-09-12", "9月12日(土)～9月14日(月)の間に「ローソンID」", "@"),
        E("access_confirmed", "2026-10-07", "2026年10月7日（水）に実施した調査の中で…判明しました", "@"),
        E("leak_confirmed", null, "調査の結果、以下の個人情報が漏えいしたことを確認", "@"),
        E("disclosed", "2026-10-08", "2026年10月8日", "@"),
        E("update", "2026-10-24", "10月24日追記：…「生年月日」の情報漏えいの可能性があることが判明", "@")
      ],
      causes: [], causeText: "アプリ上で利用者本人に対し情報を表示するためのセキュリティ機構が第三者による不正アクセスを受け",
      dataNote: "「ローソンアプリ予約」への不正アクセスは9月17日に発生しています（26件）。10月24日の追記で、ローソンIDについて「メールアドレス」「メルマガ取得情報」は漏えいしておらず、代わりに「生年月日」が漏えいした可能性があると訂正しました。10月26日の追記では、ローソンアプリ予約の店舗検索サービスを運営する委託先でも不正アクセスを検知し、店舗検索機能を停止したとしています。"
    },
    "第一興商": {
      officialUrl: "https://www.dkkaraoke.co.jp/news/newsletter/261008_2.html",
      events: [
        E("vendor_notified", "2026-10-05", "当社は10月5日にNCG社から報告を受けました", "@"),
        E("leak_possible", null, "漏えいしたおそれを否定できない状況です", "@"),
        E("disclosed", "2026-10-08", "お知らせ 2026年10月08日 株式会社第一興商", "@"),
        E("update", "2026-10-09", "お問い合わせ窓口（フリーダイヤル）開設のお知らせ", "https://www.dkkaraoke.co.jp/news/newsletter/261009_1.html"),
        E("update", "2026-10-26", "2026年10月26日追記", "@")
      ],
      causes: ["vendor"], causeText: "同社従業員の端末がマルウェアに感染し、当社のお客様情報が漏えいしたおそれがある",
      dataNote: "委託先（日本コロムビアグループ）側で端末の感染が判明した日（10月1〜2日）は委託先の日付なので、第一興商の検知日としては扱っていません。実際の外部漏えいは確認されていないとしています。10月26日の追記で、影響を受けた可能性のある顧客へSMS等で個別連絡を始めたと告知しました。実際の外部への漏えいや不正利用は引き続き確認されていないとしています。"
    },
    "ユーザベース（NewsPicks）": {
      officialUrl: "https://corp.newspicks.com/info/20261008",
      events: [
        E("anomaly", "2026-10-08", "2026年10月8日 12:48：不正アクセスを検知。対策本部を設置。", "@"),
        E("access_confirmed", "2026-10-08", "2026年10月8日 14:01：…第三者による不正アクセスと判断", "@"),
        E("disclosed", "2026-10-08", "2026年10月8日", "@"),
        E("update", "2026-10-09", "【第二報】2026年10月9日", "https://corp.newspicks.com/info/20261009")
      ],
      causes: ["vuln"], causeText: "NewsPicks が業務で利用する管理ツールの脆弱性を突いたもの",
      dataNote: "件数は第二報で示された項目別の最大想定件数で、人数の合計は示されていません。"
    },
    "オープンスマイル（ワラウ）": {
      officialUrl: "https://www.warau.jp/service/info/permalink/3130/",
      events: [
        E("anomaly", "2026-10-04", "2026年10月4日、当社サーバーへの不正アクセスを検知し", "@"),
        E("leak_confirmed", "2026-10-06", "10月6日、期限切れの連携トークンが外部に流出したことが判明", "@"),
        E("disclosed", "2026-10-08", "2026年10月8日", "@"),
        E("update", "2026-10-15", "不正アクセスによる個人情報に関するお詫びとご報告（第二報）", "https://www.opensmile.co.jp/corp/news/note/20261015"),
        E("leak_possible", null, "会員様の情報も第三者に取得された可能性があることが判明しました", "https://www.opensmile.co.jp/corp/news/note/20261015"),
        E("update", "2026-10-27", "2026年10月27日更新：…記載を追加、修正しました。", "https://www.opensmile.co.jp/corp/news/note/20261015")
      ],
      causes: ["vuln"], causeText: "原因は、サイトの一部の入力欄にあった脆弱性です。",
      dataNote: "氏名・メールアドレス・パスワード・ポイント・口座情報は流出していないとしています。10月10日未明から、新たな不正アクセスの検知を理由に全サービスを停止する緊急メンテナンスを告知していますが、本件との関係は書かれていません。10月15日の第二報で、10月8日の「氏名・メールアドレス・パスワード・口座情報などは流出していない」との発表は誤りだったと訂正しました。会員の氏名・生年月日・メールアドレス・ハッシュ化パスワード・秘密の質問と答え（判読できる形式で保管）・振込先口座情報などが取得された可能性があり、連携トークンの一部は攻撃時点で有効期限内だったとしています。第二報の掲載日は運営会社サイトのお知らせ一覧の日付（2026/10/15）です。",
      count: "件数の記載なし（2026年10月4日時点の会員情報が対象）"
    },
    "ハイホー（hi-ho）": {
      officialUrl: "https://hi-ho.co.jp/%e3%80%90%e9%87%8d%e8%a6%81%e3%81%aa%e3%81%8a%e7%9f%a5%e3%82%89%e3%81%9b%e3%80%91%e3%81%8a%e5%ae%a2%e6%a7%98%e6%83%85%e5%a0%b1%e3%81%b8%e3%81%ae%e7%ac%ac%e4%b8%89%e8%80%85%e3%81%ab%e3%82%88%e3%82%8b",
      events: [
        E("disclosed", "2026-10-08", "掲載日：2026年10月8日", "@")
      ],
      causes: ["credential"], causeText: "電話による勧誘を行い、その過程で、お客様ご本人からマイページへのログインに必要な情報を聞き出していた",
      dataNote: "公式発表に発生日・判明日の記載はありません。"
    },
    "ウイングアーク1st": {
      officialUrl: "https://corp.wingarc.com/public/202610/news3042.html",
      events: [
        E("vendor_notified", "2026-10-06", "2026年10月6日に…「コミューン株式会社」…から、第三者による不正アクセスが発生した旨の報告", "@"),
        E("disclosed", "2026-10-08", "2026.10.08", "@")
      ],
      causes: ["vendor"], causeText: "当該サイトの管理者アカウントが不正に利用され、一部の会員情報が取得・閲覧された可能性",
      dataNote: "コミューン（Commune）事案の委託元です。"
    },
    "ブックオフグループホールディングス": {
      officialUrl: "https://ssl4.eir-parts.net/doc/9278/tdnet/2893077/00.pdf",
      events: [
        E("access_confirmed", "2026-10-06", "2026年10月6日（火）、当社子会社の会員管理システムへの第三者による不正アクセスを確認", "@"),
        E("leak_confirmed", null, "調査の結果、同システムで管理している会員情報が外部から取得されたことが判明", "@"),
        E("disclosed", "2026-10-09", "2026年10月9日", "@"),
        E("incident", "2026-10-04", "2026年10月4日から同月6日にかけて、…会員情報が外部から取得された", "https://ssl4.eir-parts.net/doc/9278/tdnet/2894129/00.pdf"),
        E("update", "2026-10-13", "不正アクセスによる個人情報漏えいに関するお詫びとお知らせ(第2報)", "https://ssl4.eir-parts.net/doc/9278/tdnet/2894129/00.pdf"),
        E("update", "2026-10-16", "（訂正）「…お詫びとお知らせ(第2報)」の一部訂正について", "https://ssl4.eir-parts.net/doc/9278/tdnet/2896130/00.pdf"),
        E("update", "2026-10-23", "WEB照会機能の追加および専用フリーダイヤル開設のお知らせ", "https://ssl4.eir-parts.net/doc/9278/ir_material10/288762/00.pdf")
      ],
      causes: [], causeText: null,
      dataNote: "原因の記載はなく、対応として「脆弱性を是正し」とあるのみです。件数は会員番号の件数で、実際の人数ではありません。10月13日の第2報で、漏えい対象を会員番号ベース6,427,735件、対象者6,383,279人（有効会員6,170,908人、退会会員212,371人）と確定しました。漏えい項目は氏名・生年月日・性別・メールアドレス・電話番号・住所・パスワードのハッシュ値など（10月16日の訂正で職業・ニックネームを追加）。脆弱性や攻撃手法の詳細は公表を控えるとしています。",
      count: "6,427,735件（会員番号ベース。対象者 6,383,279人）",
      n: 6427735
    },
    "アドベンチャー（skyticket）": {
      officialUrl: "https://skyticket.jp/news/maintenance/67603",
      events: [
        E("incident", "2026-10-02", "（1）発生期間：2026年10月2日～10月4日", "@"),
        E("access_confirmed", "2026-10-05", "（1）発覚日：2026年10月5日", "@"),
        E("disclosed", "2026-10-09", "2026年10月9日 株式会社アドベンチャー", "@"),
        E("update", "2026-10-10", "【重要】メールサーバー障害の復旧に関するお知らせ", "https://skyticket.jp/news/maintenance/67616"),
        E("update", "2026-10-16", "不正アクセスによるお客様情報の流出に関するお詫びとお知らせ（第2報）", "https://skyticket.jp/news/maintenance/67630"),
        E("incident", "2026-10-03", "10月3日にこのログが取得されたことを確認いたしました", "https://skyticket.jp/news/maintenance/67630"),
        E("update", "2026-10-30", "不正アクセスによるお客様情報の流出に関するお詫びとお知らせ（第3報）", "https://skyticket.jp/news/maintenance/67691")
      ],
      causes: ["credential"], causeText: "過去に取得したデータベースの複製（バックアップ）を、不要となった後も削除せずにクラウド上に保管…不正に取得された認証情報が悪用され",
      dataNote: "3件をまとめた公表で、時間軸は最大の案件（1）のものです。案件（2）業務管理システムの脆弱性悪用（9月20日発生・9月28日発覚、17,780件）と、案件（3）予約完了ページがログインなしで閲覧できた状態（8月3日〜10月1日、約12,000件）は含めていません。対象者へのメール通知は10月8日19時ごろから始まっています。10月16日の第2報で、第1報の「カード番号は流出していない」を訂正し、2018年6月以前の「skyticketプレミアム」会費決済のログ（暗号化されていたが鍵も取得された）から最大6,140名のカード番号等が流出したと発表しました。10月30日の第3報では、削除せずクラウドに残していたDBの複製が不正取得された認証情報で読み取られ、返金先の銀行口座情報32,341件の流出（暗号化されずに保存）と、カード情報の一部約93.6万件（約41.4万人）・旅行保険情報約11.8万件の流出のおそれを公表しています。",
      count: "約1,464万件ほか（追加：カード情報 最大6,140名、返金先口座 32,341件が流出、カード情報の一部 約93.6万件・旅行保険 約11.8万件が流出のおそれ）"
    },
    "リゾートトラスト": {
      officialUrl: "https://www.resorttrust.co.jp/wp_api/wp-content/uploads/2026/10/20261009.pdf",
      events: [
        E("incident", "2026-10-05", "10月5日、20時30分頃から23時30分頃までの間に…異常な作動", "@"),
        E("anomaly", "2026-10-06", "翌10月6日に認知し", "@"),
        E("leak_confirmed", "2026-10-07", "10月7日に不正アクセスによる情報漏洩があったことが確認されました", "@"),
        E("disclosed", "2026-10-09", "2026年10月9日", "@")
      ],
      causes: [], causeText: null,
      dataNote: "公式発表に合計件数はありません（報道では約6万2千件）。メールアドレス・カード・口座・本人確認書類は含まれないとしています。"
    },
    "コミューン（Commune）": {
      officialUrl: "https://communeinc.com/ja/news/2026oct09",
      events: [
        E("incident", "2026-10-05", "2026年10月5日（月）18時ごろから、当社サービスが第三者による不正アクセスを受けました", "@"),
        E("anomaly", "2026-10-06", "当社は10月6日（火）にこれを検知し、通信遮断および防御措置を実施", "@"),
        E("leak_confirmed", null, "その後の調査の結果、一部のコミュニティにおいて…漏えいしたことが判明", "@"),
        E("disclosed", "2026-10-09", "2026.10.09", "@"),
        E("update", "2026-10-13", "当社サービスの臨時メンテナンスに関するお詫びとお知らせ", "https://communeinc.com/ja/news/2026oct13"),
        E("update", "2026-10-16", "当社サービスの一部コミュニティの再開に関するお知らせ", "https://communeinc.com/ja/news/2026oct16")
      ],
      causes: [], causeText: "外部の第三者が当社システムの不備を突き、不正アクセスを行った",
      dataNote: "委託元の企業・自治体も10月8〜9日に相次いで公表しています（本サイトではSansan、LINEヤフー、ウイングアーク1st、スズキを掲載）。会員情報の漏えいは10月7日13時17分〜14時36分とされています。10月10日0時50分から全コミュニティを臨時メンテナンスで停止し、管理者アカウントの二要素認証必須化などを実施したうえで、10月16日から機能を制限して順次再開しています。この間、新たな不正アクセスや情報漏えいは確認されていないとしています。"
    },
    "Sansan": {
      officialUrl: "https://jp.corp-sansan.com/news/2026/1009.html",
      events: [
        E("vendor_notified", "2026-10-06", "2026年10月6日…コミューン株式会社…から、第三者による不正アクセスを受けたとの報告", "@"),
        E("disclosed", "2026-10-09", "2026. 10. 09", "@")
      ],
      causes: ["vendor"], causeText: "本件はコミューン社のシステムに対する攻撃により発生したものです"
    },
    "LINEヤフー": {
      officialUrl: "https://www.lycorp.co.jp/ja/privacy-security/announcement/020892/",
      events: [
        E("vendor_notified", "2026-10-06", "2026年10月6日、コミューン株式会社より…不正アクセスが行われた旨の連絡", "@"),
        E("disclosed", "2026-10-09", "2026年10月9日", "@")
      ],
      causes: ["vendor"], causeText: "コミューン株式会社が提供するシステム上の不備が第三者に悪用されたことにより発生"
    },
    "スズキ": {
      officialUrl: "https://www.suzuki.co.jp/release/d/2026/1009/",
      events: [
        E("incident", "2026-10-05", "2026年10月5日から6日にかけて…第三者による不正アクセスが発生", "@"),
        E("vendor_notified", "2026-10-07", "当社は7日に事案に関する調査報告を受領しました", "@"),
        E("disclosed", "2026-10-09", "2026年10月9日", "@")
      ],
      causes: ["vendor"], causeText: "サービス提供事業者であるコミューン株式会社のサービスに対して第三者による不正アクセスが発生"
    },
    "ビューカード": {
      officialUrl: "https://www.jreast.co.jp/card/news/pdf/20261009.pdf",
      events: [
        E("leak_possible", "2026-10-07", "メールアドレスが漏えいした可能性があることが、2026年10月7日に判明", "@"),
        E("disclosed", "2026-10-09", "2026年10月9日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社IDCフロンティアで発生した不正アクセスに伴い"
    },
    "JR東日本": {
      officialUrl: "https://www.jreast.co.jp/press/2026/20261009_ho02.pdf",
      events: [
        E("disclosed", "2026-10-09", "2026年10月9日 東日本旅客鉄道株式会社", "@")
      ],
      causes: ["vendor"], causeText: "IDCフロンティア社で発生した不正アクセスに伴い",
      dataNote: "大人の休日倶楽部はメールアドレスに加え会員番号・カード有効期限・生年月日も対象です。報道の「計609万件」はビューカードの約403万件を足した数字です。"
    },
    "JR九州": {
      officialUrl: "https://www.jrkyushu.co.jp/common/inc/news/newtopics/__icsFiles/afieldfile/2026/10/09/202691009_mail_address_access_1.pdf",
      events: [
        E("disclosed", "2026-10-09", "2026年10月9日 九州旅客鉄道株式会社", "@")
      ],
      causes: ["vendor"], causeText: "IDCフロンティア社で発生した不正アクセスに伴い、お客さまの電子メールアドレスが漏えいした可能性"
    },

    // ---- 2026-10-10 夕方更新分：新規 ----
    "ディップ（バイトル）": {
      officialUrl: "https://www.dip-net.co.jp/news/2192",
      events: [
        E("incident", "2026-10-06", "2026年10月6日、…第三者からの不正アクセスを受け", "@"),
        E("access_confirmed", "2026-10-06", "2026年10月6日、Webサイトの一部機能において第三者からの不正アクセスを確認", "@"),
        E("disclosed", "2026-10-09", "2026年10月09日（公開日）", "@")
      ],
      causes: [], causeText: "システムの一部機能における仕様の不備を突いた、海外からの不正アクセス",
      dataNote: "対象の会員には、公表前の10月6日にバイトル・バイトルNEXTのサイト上で通知しています。対外公表日は会社のニュースリリース（10月9日）として扱っています。"
    },
    "ココナラ": {
      officialUrl: "https://coconala.co.jp/news-20261009/",
      events: [
        E("access_confirmed", "2026-10-08", "2026年10月8日 2時05分 当社システムにおいて不正なアクセスを検知", "@"),
        E("leak_confirmed", "2026-10-08", "2026年10月8日 15時00分頃 個人情報が外部に持ち出された形跡を確認", "@"),
        E("disclosed", "2026-10-09", "2026年10月9日 株式会社ココナラ", "@")
      ],
      causes: [], causeText: null,
      dataNote: "件数は書類の件数で、人数ではありません。「脆弱性の修正を完了」との記載はありますが、原因としては明示されていません。"
    },
    "エネコム": {
      officialUrl: "https://www.enecom.co.jp/information/3920/",
      events: [
        E("access_confirmed", "2026-10-06", "2026年10月6日（火）、第三者が外部から不正アクセスを行っていたことを確認", "@"),
        E("leak_confirmed", null, "複数の電子ファイルが外部に流出した形跡があることを確認", "@"),
        E("disclosed", "2026-10-09", "ニュースリリース 2026年10月9日", "@")
      ],
      causes: [], causeText: null,
      dataNote: "光回線サービス「メガ・エッグ」の顧客情報の漏えいは、現時点で確認されていないとしています。"
    },
    "キッセイ商事": {
      officialUrl: "https://www.kissei.co.jp/news/uploaded/8799a42c0104c787a0519f1fabd3b2a5.pdf",
      events: [
        E("anomaly", "2026-10-07", "2026年10月7日21:50頃、キッセイ商事関係者宛てに、第三者からデータ窃取…を通知するメール", "@"),
        E("leak_possible", null, "流出の可能性を否定できない状況です", "@"),
        E("disclosed", "2026-10-09", "各位 2026年10月9日", "@")
      ],
      causes: [], causeText: null,
      dataNote: "親会社キッセイ薬品工業との連名の発表です。攻撃者からの通知メールで判明したもので、システム障害は起きていないとしています。"
    },
    "郡山地方広域消防組合": {
      officialUrl: "https://www.shobo.koriyama.fukushima.jp/information/files/21d66502c523042e01bcb2b7da835dc3bceadb77.pdf",
      events: [
        E("incident", "2026-10-07", "10月７日（水）、…委託先事業者が利用するクラウドシステムが不正アクセスを受け", "@"),
        E("vendor_notified", "2026-10-07", "8時53分 委託先事業者から…障害が発生している旨のメールを受信", "@"),
        E("leak_possible", "2026-10-08", "講習申込者のメールアドレスが漏洩したおそれがあることが発覚", "@"),
        E("disclosed", "2026-10-09", "2026年10月９日 報道資料", "@")
      ],
      causes: ["vendor"], causeText: "委託先事業者（株式会社プロシーズ）が利用するクラウドシステムが不正アクセスを受け",
      dataNote: "委託先が使うクラウドの事業者名は書かれていません。"
    },

    // ---- 2026-10-10 夕方更新分：委託先・連鎖の追加 ----
    "オリックス生命保険": {
      officialUrl: "https://www.orixlife.co.jp/b3cd698c38a74ebea491976d56455ecd/77eb698f1d9543a39440e414940f9f4d/n261008.pdf",
      events: [
        E("leak_possible", null, "当社のお客さま情報が漏えいした可能性があることが判明しました", "@"),
        E("disclosed", "2026-10-08", "2026年10月8日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社スカラコミュニケーションズ（以下、SC社）が不正アクセスを受け",
      dataNote: "問い合わせ内容には申告された医療情報なども含まれます。"
    },
    "フューチャーショップ": {
      officialUrl: "https://www.future-shop.jp/news/2026/10/08.html",
      events: [
        E("disclosed", "2026-10-08", "2026.10.08", "@"),
        E("update", "2026-10-09", "第一報から新たに確認された事実はございません", "https://www.future-shop.jp/news/2026/10/09.html")
      ],
      causes: ["vendor"], causeText: "第三者によるランサムウェア攻撃が発生した旨の公表",
      dataNote: "宛先メールアドレスや本文中の氏名・誕生日などが対象基盤上にあり、流出の有無を含めて調査中としています。"
    },
    "高島屋": {
      officialUrl: "https://www.takashimaya.co.jp/aboutinfo/excuse/top/info_detail.html?id=5921",
      events: [
        E("disclosed", "2026-10-09", "2026年10月9日 株式会社 高島屋", "@"),
        E("update", "2026-10-15", "…システム障害に関するお知らせ（第２報）2026年10月15日", "https://www.takashimaya.co.jp/aboutinfo/excuse/top/info_detail.html?id=5961")
      ],
      causes: ["vendor"], causeText: "同クラウド基盤への第三者による不正アクセスとの報告",
      dataNote: "高島屋オンライン会員などの情報がIDCFクラウドに保持されていたとしつつ、10月9日時点で流出は確認されていないとしています。10月15日の第2報で、IDCフロンティアと委託先の調査の結果、高島屋オンラインストア等3サイトの会員情報について外部への流出を示す事実は確認されず、流出はなかったとの報告を受けたとしています。",
      count: "流出なし（IDCフロンティアと委託先からの報告）"
    },
    "Peach Aviation": {
      officialUrl: "https://www.flypeach.com/news/20261009",
      events: [
        E("vendor_notified", null, "本日、同社より一次調査に関する報告を受領いたしました", "@")
      ],
      causes: ["vendor"], causeText: "「IDCFクラウド」（東日本第1リージョン）が第三者からのランサムウェア攻撃を受けた",
      dataNote: "ページに掲載日の記載がないため、公表日は登録していません（URLは20261009）。約189万件は配信システム上にあった件数で、外部流出は確認されていないとしています。"
    },
    "VALX": {
      officialUrl: "https://corp.valx.jp/news/451vhhqdf29c/",
      events: [
        E("incident", "2026-10-06", "2026年10月6日19時18分頃から20時17分頃まで、不正アクセスが行われた", "@"),
        E("leak_possible", null, "2,950名分の会員一覧情報が第三者に閲覧・取得された可能性", "@"),
        E("disclosed", "2026-10-08", "2026年10月8日 VALX株式会社", "@")
      ],
      causes: ["vendor"], causeText: "同社システム上の複数の不備が悪用され、攻撃者が管理者になりすます"
    },
    "青森県（青森びいき）": {
      officialUrl: "https://www.pref.aomori.lg.jp/release/files/2026/81562.pdf",
      events: [
        E("vendor_notified", "2026-10-06", "コミューン社が第三者による不正アクセスを確認、県へ報告", "@"),
        E("leak_confirmed", "2026-10-07", "管理者アカウントへの不正アクセスにより一部の会員情報が閲覧されたことを確認", "@"),
        E("disclosed", "2026-10-08", "令和８年１０月８日", "@")
      ],
      causes: ["vendor"], causeText: "青森びいき管理者アカウントへの不正アクセス"
    },
    "ヤマハ": {
      officialUrl: "https://www.yamaha.com/ja/news_release/2026/26100901/",
      events: [
        E("incident", "2026-10-06", "10月6日11時59分頃から同日20時36分頃にかけて行われ", "https://www.yamaha.com/ja/news_release/files/news/26100901/pdf/2610090101.pdf"),
        E("vendor_notified", "2026-10-06", "当社は2026年10月6日、コミューン社から、…連絡を受けました", "https://www.yamaha.com/ja/news_release/files/news/26100901/pdf/2610090101.pdf"),
        E("leak_confirmed", null, "約1,600名分の…会員情報が漏えいしました", "https://www.yamaha.com/ja/news_release/files/news/26100901/pdf/2610090101.pdf"),
        E("disclosed", "2026-10-09", "2026年10月9日", "@")
      ],
      causes: ["vendor"], causeText: "同社が管理するサーバーへの不正アクセス"
    },
    "湖池屋": {
      officialUrl: "https://koikeya.co.jp/images/pdf/info_20261009.pdf",
      events: [
        E("incident", "2026-10-05", "2026年10月５日(月)、…第三者による不審なアクセスが判明", "@"),
        E("leak_confirmed", null, "10月7日(水)にコミュニティの管理者権限が不正に利用され", "@"),
        E("disclosed", "2026-10-09", "2026年10月9日 株式会社 湖池屋", "@")
      ],
      causes: ["vendor"], causeText: "コミュニティの管理者権限が不正に利用され",
      dataNote: "10月7日が管理者権限の不正利用の日か、漏えいが判明した日か、文面から特定できないため日付を付けていません。"
    },
    "森永乳業": {
      officialUrl: "https://www.morinagamilk.co.jp/information/newsentry-4168.html",
      events: [
        E("incident", "2026-10-06", "2026年10月6日、…「Commune」に対し、第三者による不正アクセスが行われた", "@"),
        E("leak_possible", null, "会員291名の会員一覧情報が第三者に閲覧・取得された可能性", "@"),
        E("disclosed", "2026-10-09", "2026年10月9日", "@")
      ],
      causes: ["vendor"], causeText: "システム上の複数の不備が第三者に悪用されたことにより発生"
    },
    "バンダイナムコエクスペリエンス": {
      officialUrl: "https://wanganmaxi-official.com/wanganmaxi6rrplus/jp/news/035.html",
      events: [
        E("leak_possible", null, "お客様の会員情報が漏洩した可能性があることが確認されました", "@"),
        E("disclosed", "2026-10-09", "2026年10月9日", "@"),
        E("update", "2026-10-14", "…臨時メンテナンス継続のお知らせ(10/14更新)", "@")
      ],
      causes: ["vendor"], causeText: "外部からの不正アクセス",
      count: "1,694人分",
      n: 1694,
      dataNote: "10月14日の更新で、会員1,694人分の会員情報が漏洩した可能性があると件数を示しました。"
    },
    "カルビー": {
      officialUrl: "https://www.calbee.co.jp/notice/pdf/69-54565.pdf",
      events: [
        E("leak_confirmed", null, "会員情報の一部が、外部から閲覧・取得されたことが判明", "@"),
        E("disclosed", "2026-10-09", "2026年10月9日 カルビー株式会社", "@")
      ],
      causes: ["vendor"], causeText: "外部からの不正アクセス"
    },
    "LIXIL": {
      officialUrl: "https://www.lixil.co.jp/announce/notice-info-leak.htm",
      events: [
        E("incident", "2026-10-06", "2026年10月6日（火）ごろ、外部からの不正アクセスが確認されました", "@"),
        E("leak_possible", null, "漏えいの可能性がある情報（いずれも登録されている場合）", "@"),
        E("disclosed", "2026-10-09", "2026年10月9日", "@")
      ],
      causes: ["vendor"], causeText: "コミューン社が提供するシステム上の複数の不備が第三者に悪用された"
    },
    "ZENB JAPAN": {
      officialUrl: "https://zenb.jp/blogs/news/20261009",
      events: [
        E("incident", "2026-10-05", "不正アクセスは10月5日（月）18時ごろから、10月6日（火）21時ごろまで", "@"),
        E("vendor_notified", "2026-10-07", "10月7日（水）、コミューン社より…連絡を受けました", "@"),
        E("leak_confirmed", "2026-10-08", "10月8日（木）に漏えいした事実があることが判明しました", "@"),
        E("disclosed", "2026-10-09", "2026/10/09", "@")
      ],
      causes: ["vendor"], causeText: "管理者になりすました第三者によって会員情報が閲覧・取得された"
    },
    "ちとせ研究所": {
      officialUrl: "https://chitose-bio.com/jp/news/12177/",
      events: [
        E("incident", "2026-10-06", "2026年10月6日、本サイトの管理者アカウント1件が第三者に不正利用され", "@"),
        E("vendor_notified", "2026-10-07", "翌10月7日、同社から当社に対し、本件に関する通知", "@"),
        E("disclosed", "2026-10-09", "2026.10.09", "@")
      ],
      causes: ["vendor"], causeText: "全コミュニティ共通のログイン用の署名鍵を入手し、コミュニティの管理者になりすまし"
    },
    "高知県（高知の知）": {
      officialUrl: "https://doppuri.kochi-tabi.jp/news/information.html?id=77",
      events: [
        E("leak_possible", null, "会員情報が第三者によって閲覧・取得された可能性がございます", "@"),
        E("disclosed", "2026-10-09", "（2026年10月9日 16:20時点）", "@"),
        E("update", "2026-10-11", "（2026年10月11日 9:00更新）", "@")
      ],
      causes: ["vendor"], causeText: "管理者アカウントへのなりすましが行われ",
      dataNote: "発表者は、高知県観光政策課内に事務局を置く「どっぷり高知旅キャンペーン推進委員会」です。10月11日の更新で、コミューン社の調査により会員の氏名・住所の漏えいはないことが確認されたとしています。"
    },
    "日本能率協会マネジメントセンター": {
      officialUrl: "https://www.jmam.co.jp/assets/images/topics/toki-labo_20261009.pdf",
      events: [
        E("incident", "2026-10-06", "第三者による不正アクセスが2026年10月6日（火）に発生", "@"),
        E("vendor_notified", "2026-10-07", "との報告を、同月7日（水）に受けました", "@"),
        E("disclosed", "2026-10-09", "2026年10月9日", "@")
      ],
      causes: ["vendor"], causeText: "当該サイトの管理者アカウントが不正に利用され"
    },
    "パナソニック": {
      officialUrl: "https://www.panasonic.com/jp/about/news/20261009.html",
      events: [
        E("leak_confirmed", null, "コミュニティ会員情報の一部が第三者に漏えいしたとの報告を受領", "@"),
        E("disclosed", "2026-10-09", "2026年10月9日 パナソニック株式会社", "@")
      ],
      causes: ["vendor"], causeText: "同社システムに対する不正アクセスを原因として"
    },
    "ソフトブレーン": {
      officialUrl: "https://www.softbrain.co.jp/news/topics/2026/20261009_1817/",
      events: [
        E("vendor_notified", "2026-10-06", "2026年10月6日に…「コミューン株式会社」…から…報告を受けました", "@"),
        E("disclosed", "2026-10-09", "2026年10月09日", "@")
      ],
      causes: ["vendor"], causeText: "本サイトの管理者アカウントが不正に利用され"
    },
    "ユニファ": {
      officialUrl: "https://unifa-e.com/news/info/20261009-info",
      events: [
        E("incident", "2026-10-05", "2026年10月5日から6日にかけて、…第三者による不正アクセスが発生", "@"),
        E("vendor_notified", "2026-10-07", "当社は7日に事案に関する調査報告を受領しました", "@"),
        E("leak_possible", null, "1,450名分の会員情報が閲覧・取得された可能性", "@"),
        E("disclosed", "2026-10-09", "2026.10.09", "@")
      ],
      causes: ["vendor"], causeText: "コミューン社のシステムにおきまして不正アクセスが発生"
    },

    // ---- 2026-10-11 更新分 ----
    "渋谷未来デザイン": {
      officialUrl: "https://fds.or.jp/news/1091/",
      events: [
        E("leak_possible", null, "メールアドレスやニックネーム、アカウント名等が参照された可能性", "@"),
        E("disclosed", "2026-10-11", "弊社コミュニティサイトへの不正アクセスに関するお知らせ 2026年10月11日", "@")
      ],
      causes: ["vendor"], causeText: "コミューン株式会社の管理者アカウント1件が、第三者により不正利用",
      dataNote: "一般社団法人渋谷未来デザインの発表です。不正利用が発覚した10月6日はコミューン側の日付なので、検知日としては扱っていません。"
    },

    // ---- 2026-10-11 更新分：取りこぼしの追加 ----
    "手間いらず": {
      officialUrl: "https://www.temairazu.co.jp/pdf/1206/news-update",
      events: [
        E("anomaly", "2026-09-21", "2026年9月21日（月）深夜頃より、複数の宿泊施設から", "@"),
        E("access_confirmed", null, "調査の過程で、当社システムへの不正アクセスがあったことを確認", "@"),
        E("leak_possible", null, "宿泊者情報の一部が第三者に閲覧または取得された可能性を否定できない", "@"),
        E("disclosed", "2026-09-28", "2026年9月28日 手間いらず株式会社", "@"),
        E("update", "2026-10-07", "2026年10月７日 …（第二報）", "https://www.temairazu.co.jp/pdf/1210/news-update")
      ],
      causes: [], causeText: null,
      dataNote: "宿泊予約者に不審なメッセージが届いたという宿泊施設からの連絡が発端です。システムを使う宿泊施設側にも影響が及ぶ事案です。"
    },
    "ユニリタ": {
      officialUrl: "https://www.unirita.co.jp/news/2026/media_20260929.html",
      events: [
        E("anomaly", "2026-09-28", "2026年9月28日13:30頃、…webサイトにて公表されている事実を確認", "@"),
        E("leak_possible", "2026-09-28", "情報漏洩の疑いがあることを2026年9月28日午後に確認", "@"),
        E("disclosed", "2026-09-29", "2026年9月29日 株式会社ユニリタ", "@"),
        E("leak_confirmed", null, "その後の調査で…一部のデータが窃取された事実を確認", "https://www.unirita.co.jp/dcms_media/other/261009_kaiji001.pdf"),
        E("update", "2026-10-09", "2026年10月9日 …不正アクセスの発生および情報漏えいに関するお知らせ", "https://www.unirita.co.jp/dcms_media/other/261009_kaiji001.pdf")
      ],
      causes: [], causeText: null,
      dataNote: "外部のWebサイトにデータ窃取の主張が掲載されたことで判明しました。攻撃者名やランサムウェアであることは公式発表には書かれていません。"
    },
    "修道学園": {
      officialUrl: "https://www.shudo-u.ac.jp/gakuen/information/b53fil000000008q.html",
      events: [
        E("access_confirmed", "2026-09-26", "2026年9月26日、本学園が管理するサーバーに対する第三者による不正アクセスを確認", "@"),
        E("leak_possible", null, "外部に漏えいした可能性のおそれがあることが判明", "@"),
        E("disclosed", "2026-09-30", "2026/09/30", "@"),
        E("update", "2026-10-08", "2026/10/08 …（第２報）", "https://www.shudo-u.ac.jp/gakuen/information/mh85jl0000000021.html")
      ],
      causes: [], causeText: null,
      dataNote: "広島修道大学と修道中学校・高等学校などを運営する学校法人の発表です。第2報で、学生の情報は含まれないとされました。"
    },
    "関西国際大学": {
      officialUrl: "https://www.kuins.ac.jp/news/2026/09/post_1448.html",
      events: [
        E("access_confirmed", null, "学内システムの一部に対して、第三者による不正アクセスを確認", "@"),
        E("disclosed", "2026-09-30", "2026年9月30日", "@"),
        E("leak_confirmed", null, "複数のファイルが外部に取得されたことが確認されました", "https://www.kuins.ac.jp/news/2026/10/post_1450.html"),
        E("update", "2026-10-06", "2026年10月6日 … 【第2報】", "https://www.kuins.ac.jp/news/2026/10/post_1450.html")
      ],
      causes: [], causeText: null
    },
    "アクティブ": {
      officialUrl: "https://www.active-pro.jp/news/4303/",
      events: [
        E("incident", "2026-10-02", "2026年10月2日：…不審なアクセス（SQLインジェクション攻撃）が発生", "@"),
        E("access_confirmed", "2026-10-03", "2026年10月3日：…不正アクセスの痕跡を確認しました", "@"),
        E("leak_possible", null, "顧客データおよび受注データが出力された形跡を確認しました", "@"),
        E("disclosed", "2026-10-06", "2026.10.06", "@")
      ],
      causes: ["vuln"], causeText: "特定のWebページに対する不審なアクセス（SQLインジェクション攻撃）",
      dataNote: "高松市の業務用冷凍食品メーカー、株式会社アクティブの通販サイトです。"
    },
    "埼玉県（渋沢MIX）": {
      officialUrl: "https://www.pref.saitama.lg.jp/a0803/news/page/news2026100702.html",
      events: [
        E("incident", "2026-10-06", "令和８年１０月６日（火）１８時３０分頃に、…メールが送信される事案", "https://www.pref.saitama.lg.jp/documents/288630/1007_pressrelease02.pdf"),
        E("disclosed", "2026-10-07", "令和８年１０月７日 産業労働部 イノベーション創造課", "https://www.pref.saitama.lg.jp/documents/288630/1007_pressrelease02.pdf")
      ],
      causes: [], causeText: "管理システムの脆弱性を攻撃されたものと考えられますが、詳細については調査中",
      dataNote: "原因は「考えられます」という推定の表現なので、原因タグは付けていません。"
    },
    "大手前病院": {
      officialUrl: "https://otemae.kkr.or.jp/news/20261008_10834.html",
      events: [
        E("access_confirmed", null, "当院が使用するメールアカウントに対して第三者による不正アクセスが確認され", "@"),
        E("leak_possible", null, "職員等に係る個人情報について、漏えいの可能性がある事案", "@"),
        E("disclosed", "2026-10-08", "令和8年10月8日 国家公務員共済組合連合会 大手前病院", "@")
      ],
      causes: [], causeText: null
    },
    "千葉西総合病院": {
      officialUrl: "https://www.chibanishi-hp.or.jp/archives/news/important/24310",
      events: [
        E("incident", "2026-10-05", "2026年10月5日夜間帯の勤務中に動画を撮影し", "https://www.chibanishi-hp.or.jp/archives/news/important/24345"),
        E("anomaly", "2026-10-08", "2026年10月８日15時18分～30分ころ … 動画の存在を確認", "https://www.chibanishi-hp.or.jp/archives/news/important/24345"),
        E("disclosed", "2026-10-08", "2026年10月8日 医療法人徳洲会千葉西総合病院 病院長", "@"),
        E("update", "2026-10-09", "【第2報】… 2026年10月9日", "https://www.chibanishi-hp.or.jp/archives/news/important/24345"),
        E("update", "2026-10-10", "【第3報】… 2026年10月10日", "https://www.chibanishi-hp.or.jp/archives/news/important/24370")
      ],
      causes: ["insider"], causeText: "当院職員によるSNSへの不適切な動画投稿",
      dataNote: "サイバー攻撃ではなく、職員による動画の無断投稿です。病院が「個人情報が漏洩した」として公表しているため掲載しています。"
    },

    // ---- 2026-10-30 更新分 ----
    "アルカディア（SpeeCAN RAIDEN）": {
      officialUrl: "https://raiden.site.ktaiwork.jp/archives/4597",
      events: [
        E("anomaly", "2026-10-11", "2026年10月11日16時30分…不正アクセスが疑われる不審な挙動を確認", "@"),
        E("disclosed", "2026-10-13", "10月13日 15時50分更新 【第１報】", "@"),
        E("leak_possible", "2026-10-13", "個人情報が漏洩した可能性があることを確認いたしました（第2報）", "@"),
        E("update", "2026-10-21", "不正なメールが配信されました…配信総数：1,423,428通", "@")
      ],
      causes: [], causeText: null,
      certainty: "possible",
      dataNote: "第1報は不正アクセスに伴う一部サービス緊急停止の告知で、件数は同日の第2報（18時47分更新）で公表。1ページに追記される形式で、日付は更新時刻表記。静岡市・杉並区など多数の自治体・事業者が利用。"
    },
    "ライドオンエクスプレス（銀のさら・釜寅・すし上等）": {
      officialUrl: "https://www.rideonexpresshd.co.jp/news/2026/10/3-33.html",
      events: [
        E("anomaly", "2026-10-05", "2026年10月5日以降…第三者による不正アクセスを検知", "@"),
        E("vendor_notified", "2026-10-07", "運営会社からサイバー攻撃（ランサムウェア攻撃）を受けた旨の発表および報告", "@"),
        E("disclosed", "2026-10-13", "2026.10.13", "@")
      ],
      causes: ["vendor", "ransomware"], causeText: "当該サーバーの運営会社からサイバー攻撃（ランサムウェア攻撃）を受けた旨の発表および報告",
      certainty: "possible",
      dataNote: "10/7・10/8の告知（post-482/484）はシステム障害・サイト停止としてのみ案内し、攻撃・漏えいへの言及はなく、サイバー攻撃と漏えい可能性を初めて公表したのは10/13の第3報。サーバー運営会社の名称は記載なし。漏えいの明確な痕跡は特定に至っていないとしている。"
    },
    "Fivot（IDARE）": {
      officialUrl: "https://idare.jp/news/1926/",
      events: [
        E("incident", "2026-08-10", "8月10日から9月27日にかけて、複数回にわたり…取得", "@"),
        E("disclosed", "2026-10-13", "2026.10.13", "@")
      ],
      causes: ["vuln"], causeText: "外部ソフトウェアの脆弱性を悪用した不正なアクセス",
      certainty: "confirmed",
      dataNote: "退会者を含む。一部対象者は本人確認書類の番号や口座番号下3桁等を含む。"
    },
    "NEXT STAGE": {
      officialUrl: "https://contents.xj-storage.jp/xcontents/AS09415/85ac085b/189e/4649/82f5/c3671d1900c8/140120261013549964.pdf",
      events: [
        E("incident", "2026-09-22", "不正アクセスが発生した期間：2026年９月22日～2026年10月９日", "@"),
        E("access_confirmed", "2026-10-09", "2026年10月9日…第三者による不正アクセスを受け…発覚", "@"),
        E("disclosed", "2026-10-13", "2026年10月13日", "@")
      ],
      causes: [], causeText: "第三者がアカウントを不正に利用し閲覧できる状態にあった",
      certainty: "possible",
      dataNote: "対象サービスはQualiz・ACRO5。取引先・認定現場監査士の情報。"
    },
    "DCMホールディングス（マイボ）": {
      officialUrl: "https://www.dcm-hc.co.jp/news/news_file/file/20261013nwes%20.pdf",
      events: [
        E("incident", "2026-09-21", "2026年9月21日…通常とは異なる多数のアクセスがありました", "@"),
        E("access_confirmed", "2026-10-08", "10月8日…第三者による不正アクセスが判明", "@"),
        E("disclosed", "2026-10-13", "2026年10月13日", "@")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "10/9からマイボアプリ全サービスを停止（停止告知の有無・内容は未確認）。氏名・住所・パスワードは含まれないとしている。"
    },
    "東日本三菱自動車販売": {
      officialUrl: "https://www.east-mitsubishi-motor-sales.com/custom/fuseiaccess2/",
      events: [
        E("incident", "2026-10-09", "2026年10月9日に不正ログインが発生", "@"),
        E("disclosed", "2026-10-13", "2026年10月13日付でお知らせしました第1報", "@"),
        E("update", "2026-10-30", "お知らせとお詫び（第2報）", "@")
      ],
      causes: [], causeText: null,
      certainty: "possible",
      dataNote: "10/13付の第1報（なりすましメール825件）は現在閲覧できず、officialUrlは第2報（2026.10.30）。第1報の日付は第2報本文の記載による。顧客情報の判明は第2報。"
    },
    "ホテリエ": {
      officialUrl: "https://hotel.inc/news/information/20261013_01/",
      events: [
        E("vendor_notified", "2026-09-15", "宿泊管理システム運営会社より不正ログイン報告を受け", "https://hotel.inc/wp-content/uploads/2026/10/20261007_apology_ja.pdf"),
        E("leak_confirmed", "2026-09-16", "お客様の個人情報が流出した事実を確認", "https://hotel.inc/wp-content/uploads/2026/10/20261007_apology_ja.pdf"),
        E("disclosed", "2026-10-13", "2026年10月13日", "https://hotel.inc/wp-content/uploads/2026/10/20261007_apology_ja.pdf")
      ],
      causes: [], causeText: "旧運営会社からの引継ぎ資料等に当該アカウントに関する情報が含まれておらず",
      certainty: "confirmed",
      dataNote: "対象は8施設の2026年4月8日〜9月14日の予約者。PDFのファイル名は20261007だが本文の日付は2026年10月13日。第三者がアカウントを利用できた原因は不明としている。"
    },
    "静岡市（防災メール等）": {
      officialUrl: "https://www.city.shizuoka.lg.jp/documents/59474/20261013004.pdf",
      events: [
        E("vendor_notified", "2026-10-13", "10月13日（火）10時48分 委託先から静岡市へ状況を報告（第１報）", "@"),
        E("leak_confirmed", null, "登録者情報が漏えいしたことが判明しました", "@"),
        E("disclosed", "2026-10-13", "（2026年１０月１３日発表）", "@"),
        E("update", "2026-10-27", "委託先への不正アクセスによる個人情報漏えいについて（第２報）", "https://www.city.shizuoka.lg.jp/documents/59474/20261027001.pdf")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "confirmed",
      dataNote: "アルカディア（SpeeCAN RAIDEN）事案の委託元。nは第2報の4サービス合計。ふるさと納税等の別サービスも漏えい可能性ありとして調査中。"
    },
    "JR九州フードサービス（トイポアプリ）": {
      officialUrl: "https://tgl-assets.imgix.net/images/9a837c2badb54362ab872287c59dee17.pdf",
      events: [
        E("vendor_notified", "2026-10-07", "2026年10月7日（水）、トイポ社より…連絡を受けました", "@"),
        E("disclosed", "2026-10-13", "2026年10月13日", "@")
      ],
      causes: ["vendor", "config"], causeText: "一部のAPIにおいて、本来アクセスする権限を有しない第三者が他のユーザー情報を取得できる状態",
      certainty: "possible",
      dataNote: "トイポ事案の導入企業の一つ（東武鉄道・東京メトロなど他社は既掲載）。トイポ社自身の公式発表は未確認。"
    },
    "さいたま市（防災行政無線メール等）": {
      officialUrl: "https://www.city.saitama.lg.jp/006/014/008/003/015/007/p134471.html",
      events: [
        E("anomaly", "2026-10-13", "市民から…不審メールを受信したとの問い合わせ", "@"),
        E("vendor_notified", "2026-10-13", "同日12時52分、アルカディアに状況を確認し…覚知", "@"),
        E("disclosed", "2026-10-13", "（令和8年10月13日発表）", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "アルカディア（SpeeCAN RAIDEN）事案の利用団体。影響範囲は調査中。"
    },
    "横須賀市（防災情報メール・防犯あんしんメール）": {
      officialUrl: "https://www.city.yokosuka.kanagawa.jp/0525/nagekomi/20261013_roueinoosore.html",
      events: [
        E("incident", "2026-10-11", "令和8年10月11日…第三者による不正アクセスがあったことを確認", "@"),
        E("anomaly", "2026-10-13", "令和8年10月13日…不審なメールの着信について問い合わせ", "@"),
        E("disclosed", "2026-10-13", "更新日：2026年10月13日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "アルカディア（SpeeCAN RAIDEN）事案の利用団体。漏洩件数・範囲は未確定（調査中）。4サービスを停止。"
    },
    "香川県（防災情報メール・職員安否確認システム）": {
      officialUrl: "https://www.pref.kagawa.lg.jp/kikikanri/sogo/bosaijoho/bousaijouhoume-ru_ryuusyutu.html",
      events: [
        E("leak_possible", "2026-10-13", "10月13日に個人情報が漏洩した可能性があることが判明", "@"),
        E("disclosed", "2026-10-13", "公開日：2026年10月13日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "アルカディア（SpeeCAN RAIDEN）事案の利用団体。ページは公開後に追記されており、職員安否確認システムの件数は10月15日時点。10月15日午後3時頃に配信再開。"
    },
    "西鉄ウェルネス（西新パレスドーム会員アプリ）": {
      officialUrl: "https://nishitetsu-wellness.com/wp/wp-content/uploads/2026/10/%E4%BC%9A%E5%93%A1%E3%82%A2%E3%83%97%E3%83%AA%E3%80%8C%E3%83%88%E3%82%A4%E3%83%9D%E3%80%8D%E3%81%B8%E3%81%AE%E4%B8%8D%E6%AD%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%AB%E4%BC%B4%E3%81%86%E5%80%8B%E4%BA%BA%E6%83%85%E5%A0%B1%E6%B5%81%E5%87%BA%E3%81%8A%E3%82%88%E3%81%B3%E6%B3%A8%E6%84%8F%E5%96%9A%E8%B5%B7%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B.pdf",
      events: [
        E("vendor_notified", null, "株式会社トイポより…外部に漏えいしたことが確認されたとの連絡", "@"),
        E("disclosed", "2026-10-13", "2026年10月13日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "トイポ事案の導入企業。通知を受けた日付の記載なし。"
    },
    "日本郵便（JPビジネスツールボックス）": {
      officialUrl: "https://files.japanpost.jp/assets/34d9d11432734cfaa759e78fe395b688/f3f28b64a67841a1bd88dec64017f917/20261013_03_01.pdf",
      events: [
        E("anomaly", "2026-10-08", "2026年10月8日（木）19時15分ごろ、サービス全体を停止", "@"),
        E("exposure", null, "他のお客さまが閲覧できる状態になっていた", "@"),
        E("disclosed", "2026-10-13", "2026年10月13日", "@")
      ],
      causes: ["config"], causeText: "原因は、アプリケーションの不具合により",
      certainty: "possible",
      dataNote: "10月9日付のお知らせ（https://www.post.japanpost.jp/newsrelease/pressrelease/4963034274.html）は「不正な操作を検知」によるサービス停止のみで個人情報への言及なし。閲覧可能になった開始時期の記載なし。ダウンロード・利用の形跡は未確認。既掲載の郵便局アプリとは別サービス。"
    },
    "ユニリタ（おしごと改革らぼ）": {
      officialUrl: "https://www.unirita.co.jp/news/2026/media_20261013.html",
      events: [
        E("vendor_notified", "2026-10-07", "2026年10月7日：コミューン社から不正アクセスの報告を受領", "@"),
        E("leak_possible", null, "会員情報の一部が外部に漏えいしたとの報告を受けました", "@"),
        E("disclosed", "2026-10-13", "2026年10月13日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "9月29日公表のユニリタ（社内文書管理システム）とは別の事案です。"
    },
    "アエナ（ECアプリ）": {
      officialUrl: "https://www.aena.co.jp/news/detail/7826/",
      events: [
        E("access_confirmed", "2026-10-13", "会員マイページが不正に閲覧されていたことが2026年10月13日（火）5時58分にて判明", "@"),
        E("disclosed", "2026-10-14", "2026年10月14日", "@")
      ],
      causes: [], causeText: "不正アクセスを通じて、機械的な連続アクセスが行われたことが原因",
      certainty: "possible",
      dataNote: "件数は「閲覧された可能性のある会員数」。カード番号下4桁・有効期限・名義を含む。パスワードの流出はないとしている。"
    },
    "マウスコンピューター（メールマガジン）": {
      officialUrl: "https://www2.mouse-jp.co.jp/ssl/user_support2/info.asp?N_ID=535",
      events: [
        E("vendor_notified", null, "委託している事業者から…不正アクセスが発生したとの報告を受けました", "@"),
        E("disclosed", "2026-10-14", "2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "漏えいの事実は確認されていないとしている。2026年9月5日〜10月6日のメール配信記録も対象。"
    },
    "イズミ（ゆめオンライン・ゆめデリバリー）": {
      officialUrl: "https://www.izumi.co.jp/news_release/assets/dc18e543b048e2f1a4d596bb0035aaaf_2.pdf",
      events: [
        E("vendor_notified", null, "株式会社IDCフロンティアより…ランサムウェア攻撃が発生した旨の連絡", "@"),
        E("disclosed", "2026-10-14", "2026年10月14日", "@"),
        E("update", "2026-10-16", "同社として外部へのデータの流出はなかったと判断している", "https://www.izumi.co.jp/news_release/assets/1009fd34c5a2ee0f13fd599c84c3a7f2_1.pdf")
      ],
      causes: ["vendor", "ransomware"], causeText: "第三者によるランサムウェア攻撃が発生",
      certainty: "possible",
      dataNote: "10/16の第二報で、IDCフロンティアは外部へのデータ流出はなかったと判断していると報告。"
    },
    "日テレWands（FaveConnect）": {
      officialUrl: "https://www.ntv-wands.co.jp/news/articles/pbs9b02rgl3oubrj.html",
      events: [
        E("incident", "2026-10-11", "2026年10月11日から10月13日までの間…閲覧した形跡", "@"),
        E("anomaly", "2026-10-13", "2026年10月13日…不審なアクセスを検知", "@"),
        E("disclosed", "2026-10-14", "2026.10.14", "@")
      ],
      causes: ["credential"], causeText: "第三者が管理者アカウントに不正にログイン",
      certainty: "possible",
      dataNote: "対象は「高嶺のなでしこオフィシャルファンクラブ」「HEROINES OFFICIAL WEBSITE」の2サービス合計。"
    },
    "Lili（マッチングサイト）": {
      officialUrl: "https://lili-jo.com/notice/20261014.html",
      events: [
        E("incident", "2026-07-11", "2026年7月11日（土）から10月6日（火）までの約3か月間…不正に侵入", "@"),
        E("anomaly", "2026-10-06", "2026年10月6日（火）、Liliのサーバー上に不審なプログラムがあることに気付き", "@"),
        E("incident", "2026-10-11", "10月11日（日）23:45頃、別の経路から再び侵入", "@"),
        E("disclosed", "2026-10-14", "2026年10月14日", "@"),
        E("update", "2026-10-22", "第2報を掲載し、本人確認書類の画像に関する記載と対象人数を訂正", "@")
      ],
      causes: [], causeText: null,
      certainty: "possible",
      dataNote: "運営会社名はページに記載なし。パスワードは平文での流出可能性が高いとしている。本人確認書類画像の対象は10/22の第2報で訂正・追加。"
    },
    "東京都杉並区（緊急メール等配信サービス）": {
      officialUrl: "https://www.city.suginami.tokyo.jp/news/29665.html",
      events: [
        E("vendor_notified", "2026-10-13", "10月13日 10時49分 事業者から杉並区へ報告", "@"),
        E("disclosed", "2026-10-14", "2026年10月14日", "@"),
        E("update", "2026-10-15", "【第2報】…新たに2つのメール配信システムについて", "https://www.city.suginami.tokyo.jp/news/29682.html")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "漏えいの有無や件数は事業者で調査中としており、記載の人数は対象サービスの登録者数。"
    },
    "ピーチ・ジョン（メールマガジン）": {
      officialUrl: "https://www.peachjohn.co.jp/information/detail/137",
      events: [
        E("leak_possible", null, "一部のお客様のメールアドレスが漏えいした可能性があることが判明", "@"),
        E("disclosed", "2026-10-14", "2026.10.14", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "対象はメールアドレスのみ（氏名・住所・電話番号・カード番号は当該配信サービスで不使用）。メールマガジン配信は停止。"
    },
    "スズキ二輪（スズキワールドホームページ）": {
      officialUrl: "https://suzukiworld.jp/post/2026/10/post-70.html",
      events: [
        E("anomaly", "2026-07-29", "2026年7月29日、本ホームページの不正アクセスを検知", "@"),
        E("leak_possible", null, "第三者に不正に閲覧または取得された可能性があることが判明", "@"),
        E("disclosed", "2026-10-14", "2026.10.14", "@")
      ],
      causes: [], causeText: null,
      certainty: "possible",
      dataNote: "運営受託の中部印刷も同日に同内容を公表（https://www.chu-bu.co.jp/info-20261014.html）。外部流出の形跡は未確認。スズキ本体のスズキヴィレッジ（コミューン経由）とは別件。"
    },
    "堺市（避難情報等一括配信・職員招集システム）": {
      officialUrl: "https://www.city.sakai.lg.jp/shisei/koho/hodo/hodoteikyoshiryo/kakohodo/r8/r810/081014_01.files/1014_01.pdf",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日 午後2時13分…連絡があり、事案を把握", "@"),
        E("disclosed", "2026-10-14", "令和8年10月14日提供", "@")
      ],
      causes: ["vendor"], causeText: "事業者が運営するシステムに対する不正アクセスによるものです",
      certainty: "possible",
      dataNote: "アルカディア（SpeeCAN RAIDEN）事案の利用団体。件数は登録件数で、漏えいの有無・範囲は事業者が調査中。"
    },
    "広島市（職員参集システム）": {
      officialUrl: "https://www.city.hiroshima.lg.jp/shisei/kouhou/1004010/1045546/1053867/1054485.html",
      events: [
        E("leak_possible", null, "職員に関する情報の一部…が漏えいした可能性が報告", "@"),
        E("disclosed", "2026-10-14", "令和8年（2026年）10月14日（水曜日）", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "アルカディア（SpeeCAN RAIDEN）事案の利用団体。広島市防災情報メール（市民登録者）は影響なしとしている。"
    },
    "トイポ（トイポアプリ）": {
      officialUrl: "https://toypo.notion.site/3f881a885025806aa1fce0704f26f839",
      events: [
        E("access_confirmed", "2026-10-04", "2026年10月4日、当社システムに対する不正アクセスを確認", "@"),
        E("leak_confirmed", null, "一部のお客様の情報が外部に漏えいしたことが判明", "https://toypo.notion.site/3f481a88502580f29a39d3eb439ee785"),
        E("disclosed", "2026-10-14", "2026年10月14日", "@")
      ],
      causes: ["vuln"], causeText: "本来アクセスする権限を有しない第三者が他のユーザー情報を取得できる脆弱性が存在していた",
      certainty: "confirmed",
      dataNote: "公式発表はNotion上に2ページあり、日付入りの版（10月14日）は「漏えいした可能性」、日付なしの版は「漏えいしたことが判明」と表記。対象者へは10月13日から個別通知。導入店舗（JR九州フードサービス、西鉄ウェルネス、萬野屋ほか）が個別に公表。"
    },
    "萬野屋（杵屋萬野公式アプリ）": {
      officialUrl: "https://www.mannoya.com/company/information/8958/",
      events: [
        E("leak_possible", null, "一部のお客様の個人情報が外部に漏えいした可能性があることが判明", "@"),
        E("disclosed", "2026-10-14", "2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "トイポ事案の導入企業（店舗運営はグルメ杵屋）。新規会員登録を一時停止。"
    },
    "ソースネクスト": {
      officialUrl: "https://www.sourcenext.com/support/i/2026/1015_info/",
      events: [
        E("incident", "2026-10-09", "10月9日（金）10時頃から不正アクセスがあり", "@"),
        E("access_confirmed", "2026-10-13", "10月13日（火）9時頃…不正アクセスがあったことを確認", "@"),
        E("leak_confirmed", null, "お客様の個人情報が外部に流出したことが判明", "@"),
        E("disclosed", "2026-10-15", "2026年10月15日", "@")
      ],
      causes: [], causeText: "会員情報取得APIを不正に利用し",
      certainty: "confirmed",
      dataNote: "本文は「流出したことが判明」とする一方、件数は「流出した可能性のあるお客様情報」として記載。クレジットカード情報は対象外。"
    },
    "ビーケー・ジャパン（バーガーキング公式アプリ）": {
      officialUrl: "https://www.burgerking.co.jp/images/notice/2026/10/15/d4d114ca-ebd7-4f3d-94ef-c4ea7a84a139.pdf",
      events: [
        E("incident", "2026-10-02", "2026年10月2日（金）から10月7日（水）にかけて不正アクセス", "@"),
        E("leak_confirmed", "2026-10-13", "会員情報が漏えいしたことが2026年10月13日（火）に判明", "@"),
        E("disclosed", "2026-10-15", "2026年10月15日", "@")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "パスワードの漏えいは確認されていないとしている。原因は調査中。"
    },
    "エムスリー（MR君）": {
      officialUrl: "https://corporate.m3.com/assets.ctfassets.net/1pwj74siywcy/4YBQ3JACTocGVgQmIVkSHe/bed9ff0b11db690e1217e0329c484104/20261015_Public_J.pdf",
      events: [
        E("access_confirmed", "2026-10-14", "2026年10月14日（水）…第三者による不正アクセスを確認", "@"),
        E("leak_confirmed", "2026-10-14", "情報が漏えいしたことを、同日確認", "@"),
        E("disclosed", "2026-10-15", "2026年10月15日", "@"),
        E("update", "2026-10-23", "不正アクセスによる個人情報漏えいに関するお詫びとお知らせ（第２報）", "https://corporate.m3.com/assets.ctfassets.net/1pwj74siywcy/TYwLIgktADUIxwA5M6XFE/3bcb64e5e6857ebaf8e5a5a4efd8f25f/20261023_Public_J.pdf")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "初報は人数未確定（医師会員全体の1割未満、製薬企業担当者数百名規模）。人数は10/23の第2報で公表。"
    },
    "NTTソルマーレ（コミックシーモア）": {
      officialUrl: "https://www.nttsolmare.com/press/2026/0616-1.html",
      events: [
        E("anomaly", "2026-10-15", "外部からの不正なアクセスが行われた可能性が高いと判断", "@"),
        E("disclosed", "2026-10-15", "2026年10月15日", "@"),
        E("leak_confirmed", "2026-10-16", "会員情報が第三者へ流出したことを確認", "https://www.nttsolmare.com/press/2026/1016.html"),
        E("update", "2026-10-21", "流出が確認された情報…最大約420万件", "https://www.nttsolmare.com/press/2026/1021.html")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "初報（10/15）は緊急メンテナンスの告知で不正アクセスの可能性に言及。流出確認は10/16の第2報、件数は10/21の第4報。ログ上の約420万件は重複を含む可能性ありとされる。初報URLのファイル名は「0616-1」だが掲載日は2026年10月15日。"
    },
    "ビューティガレージ（ECサイト）": {
      officialUrl: "https://www.beautygarage.co.jp/wp/wp-content/uploads/20261015_不正アクセスによるお客様情報漏洩に関するお詫びとお知らせ.pdf",
      events: [
        E("incident", "2026-10-10", "2026年10月10日から12日にかけて…不正侵入が発生", "@"),
        E("anomaly", "2026-10-13", "2026年10月13日（火）に事象を検知", "@"),
        E("disclosed", "2026-10-15", "2026年10月15日", "@")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "アイラッシュガレージ分を含む件数。同社は2026年2月6日にもカード情報漏洩懸念を公表している（別件）。"
    },
    "ACCESS（台湾子会社「CROS」）": {
      officialUrl: "https://www.access-company.com/files/2026/10/n261015.pdf",
      events: [
        E("anomaly", "2026-09-11", "2026年９月11日に…不正アクセスの徴候を検知", "@"),
        E("disclosed", "2026-10-15", "2026年10月15日", "@")
      ],
      causes: [], causeText: "不正アクセスの経路は…BI（Business Intelligence）ツールが起点となった",
      certainty: "confirmed",
      dataNote: "対象は台湾・香港・マカオ・シンガポールの通販利用者。nは受注ID件数（人数ベースではお客様ID 155,280件）。"
    },
    "メドレー（アットリンク）": {
      officialUrl: "https://at-link.net/information/%e3%82%a2%e3%83%83%e3%83%88%e3%83%aa%e3%83%b3%e3%82%af%e3%81%b8%e3%81%ae%e4%b8%8d%e6%ad%a3%e3%82%a2%e3%82%af%e3%82%bb%e3%82%b9%e3%81%8a%e3%82%88%e3%81%b3%e3%82%b5%e3%83%bc%e3%83%93%e3%82%b9%e3%81%ae/",
      events: [
        E("disclosed", "2026-10-15", "2026.10.15", "@"),
        E("vendor_notified", "2026-10-11", "外部の専門機関から不正アクセスの可能性について情報提供を受けて", "https://at-link.net/information/%E3%82%A2%E3%83%83%E3%83%88%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%B8%E3%81%AE%E4%B8%8D%E6%AD%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E8%AA%BF%E6%9F%BB%E7%8A%B6%E6%B3%81/"),
        E("incident", null, "2026年9月下旬から10月中旬にかけて…データベースにアクセスし情報を取得", "https://at-link.net/information/%E3%82%A2%E3%83%83%E3%83%88%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%B8%E3%81%AE%E4%B8%8D%E6%AD%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E8%AA%BF%E6%9F%BB%E7%8A%B6%E6%B3%81/"),
        E("leak_confirmed", null, "アットリンク等に登録された個人情報が外部に漏えいしたことを確認", "https://at-link.net/information/%E3%82%A2%E3%83%83%E3%83%88%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%B8%E3%81%AE%E4%B8%8D%E6%AD%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E8%AA%BF%E6%9F%BB%E7%8A%B6%E6%B3%81/"),
        E("update", "2026-10-23", "アットリンクへの不正アクセスに関する調査状況について", "https://at-link.net/information/%E3%82%A2%E3%83%83%E3%83%88%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%B8%E3%81%AE%E4%B8%8D%E6%AD%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E8%AA%BF%E6%9F%BB%E7%8A%B6%E6%B3%81/")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "初報ページ（掲載日2026.10.15）は随時更新され、現在は10/28更新版のみ閲覧可能。漏えい確認と経緯は10/23の調査状況ページ。対象数は調査中。サービスは10/14深夜から停止。"
    },
    "大和総研（内藤証券 ネット取引システム）": {
      officialUrl: "https://www.dir.co.jp/release/2026101501.pdf",
      events: [
        E("incident", "2026-10-14", "2026年10月14日（水）午前4時46分から午前6時56分までの間", "@"),
        E("disclosed", "2026-10-15", "2026年10月15日", "@")
      ],
      causes: [], causeText: null,
      certainty: "possible",
      dataNote: "不正アクセス時間帯にログインしていた利用者の一時データベース上の情報。出金先口座番号等を含む。"
    },
    "日本生命病院（訪問看護ステーション）": {
      officialUrl: "https://www.nissay-hp.or.jp/news/common/20261015_kojinjoho.html",
      events: [
        E("incident", "2026-09-19", "職員が…偽の警告に従って操作を行いました", "@"),
        E("disclosed", "2026-10-15", "2026年10月15日", "@")
      ],
      causes: ["phishing"], causeText: "サポート詐欺（※）の被害を受け",
      certainty: "possible",
      dataNote: "端末に院内規定に反して個人情報が保存されていた。閲覧・持ち出しの事実は未確認。"
    },
    "釧路市（市立小中学校の学習用アカウント）": {
      officialUrl: "https://www.city.kushiro.lg.jp/kosodatekyouiku/kyouiku/1008303/1019759.html",
      events: [
        E("incident", "2026-08-29", "令和8年8月29日、委託事業者の社内サーバーがランサムウェアによる攻撃", "@"),
        E("vendor_notified", "2026-10-13", "10月13日、情報が外部に流出した可能性を否定できないとの報告", "@"),
        E("disclosed", "2026-10-15", "更新日 2026年10月15日", "@")
      ],
      causes: ["vendor", "ransomware"], causeText: "委託事業者の社内サーバーがランサムウェアによる攻撃を受けました",
      certainty: "possible",
      dataNote: "公式ページの日付は「更新日」表記。件数は年度別のみで合計の記載はなく、nは最大の単一数値（令和2年児童生徒分）。委託先ポータスは2026年10月14日に第3報（https://www.portusinc.co.jp/update20261014/）を掲載。"
    },
    "ファンケル・アテニア（ECサイト）": {
      officialUrl: "https://www.fancl.jp/news/pdf/husei.pdf",
      events: [
        E("incident", "2026-10-03", "同年 10 月 3 日（土）から 10 月 10 日（土）までの間に", "@"),
        E("access_confirmed", "2026-10-15", "2026 年 10 月 15 日（木）に実施した内部調査により", "@"),
        E("disclosed", "2026-10-16", "2026 年 10 月 16 日", "@")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "2社分の合計は公式資料に記載がないため、nは単一の最大値（アテニア441,162件）。"
    },
    "Studio（ノーコードWeb制作サービス）": {
      officialUrl: "https://studio.design/ja/whats-new/unauthorized-access-2026-10",
      events: [
        E("incident", "2026-09-30", "2026年9月30日〜10月1日（日本時間）：第三者による不正アクセス", "@"),
        E("access_confirmed", "2026-10-13", "2026年10月13日：社内の調査により不正アクセスを確認", "@"),
        E("disclosed", "2026-10-16", "2026年10月16日：第一報を公開", "@")
      ],
      causes: ["vuln"], causeText: "第三者がStudioの一部機能の脆弱性を悪用して弊社のクラウド環境に不正にアクセスし",
      dataNote: "「実際に第三者に取得された事実は確認できておりませんが、取得されたものとみなして対応」と記載。Luup、ラクスル、Link-U、自治体など多数の利用者側が個別に公表。"
    },
    "岩井コスモ証券（委託先トレードワークス）": {
      officialUrl: "https://www.iwaicosmo.co.jp/news/2026/10161410.html",
      events: [
        E("anomaly", "2026-10-14", "2026年10月14日、当社において第三者による不正アクセスを検知", "@"),
        E("disclosed", "2026-10-16", "2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "confirmed",
      dataNote: "後日の続報で対象者数が更新されたとの報道あり（未検証）。"
    },
    "Luup（Studio経由）": {
      officialUrl: "https://luup.sc/news/2026-10-16/",
      events: [
        E("incident", "2026-09-30", "不正アクセスが2026年9月30日～10月1日（現時点で確認されている期間）", "@"),
        E("vendor_notified", null, "外部に流出した可能性があるとの連絡を受けました", "@"),
        E("disclosed", "2026-10-16", "2026.10.16", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "LUUPアプリの登録情報は対象外と記載。"
    },
    "ラクスル（Studio経由）": {
      officialUrl: "https://corp.raksul.com/news/press/261016raksul_studio/",
      events: [
        E("disclosed", "2026-10-16", "2026.10.16", "@")
      ],
      causes: ["vendor"], causeText: "当社が利用する外部クラウドサービスに対する不正アクセスによるもの",
      certainty: "possible",
      dataNote: "件数はフォーム送信件数で人数とは一致しない場合あり。印刷通販サイトの会員情報は対象外。"
    },
    "ゴルフダイジェスト・オンライン（GDO）": {
      officialUrl: "https://company.golfdigest.co.jp/corp/pr/2026101601.html",
      events: [
        E("anomaly", "2026-10-13", "2026年10月13日 7時9分頃：セキュリティ監視ツールが", "@"),
        E("leak_confirmed", "2026-10-14", "一部のファイルがダウンロードされていたことを確認", "@"),
        E("disclosed", "2026-10-16", "2026.10.16", "@")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "会員情報55件は照会された可能性（うち個人情報を含むもの4件）。"
    },
    "ジャパン・アーツ": {
      officialUrl: "https://www.japanarts.co.jp/news/p10043/",
      events: [
        E("incident", "2026-10-13", "2026年10月13日(火) 10:25頃", "@"),
        E("anomaly", "2026-10-14", "2026年10月14日(水) 07:07頃", "@"),
        E("leak_confirmed", null, "氏名およびメールアドレスの流出を確認しております", "@"),
        E("disclosed", "2026-10-16", "2026/10/16", "@")
      ],
      causes: ["phishing"], causeText: "不審メール（フィッシングメール）内のリンクに、誤って認証情報（パスワード）を入力",
      certainty: "confirmed",
      dataNote: "見出しは「流出した可能性のある情報」だが本文で流出を確認と記載。"
    },
    "Astemo": {
      officialUrl: "https://www.astemo.com/jp/news/pdf/20261016-01.pdf",
      events: [
        E("anomaly", "2026-09-17", "2026 年 9 月 17 日、当社のデーターを取得したと主張する第三者から", "@"),
        E("vendor_notified", null, "10 月初旬、本件委託会社から、同社システムのアカウントが侵害された旨の連絡", "@"),
        E("disclosed", "2026-10-16", "2026 年 10 月 16 日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "confirmed",
      dataNote: "委託会社名は非公表。ランサムウェア感染の証跡は確認されていないと記載。"
    },
    "Link-Uグループ（Studio経由）": {
      officialUrl: "https://content.link-u.co.jp/irdata/news/ir-news_261016_01.pdf",
      events: [
        E("vendor_notified", null, "本日、同サービスを提供するStudio株式会社より", "@"),
        E("disclosed", "2026-10-16", "2026 年10 月16 日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "連絡受領は「本日」と記載（日付の明記なし）。影響はコーポレートサイトに限られ、グループの各サービスへの影響はないと記載。"
    },
    "南日本放送（MBC／Studio経由）": {
      officialUrl: "https://www.mbc.co.jp/info/owabi/index.html",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日（日本時間）にかけて", "@"),
        E("disclosed", "2026-10-16", "2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "サイト別件数のみ記載で合計の記載なし。nは単一サイトの最大値（「動き出す浮世絵展」29件）。"
    },
    "京都市（京都市芸術文化協会への委託事業）": {
      officialUrl: "https://www.city.kyoto.lg.jp/bunshi/page/0000359411.html",
      events: [
        E("incident", "2026-09-30", "令和8年9月30日から10月1日の間、不正アクセスされ", "@"),
        E("vendor_notified", "2026-10-16", "令和8年10月16日午前10時41分に、公益財団法人京都市芸術文化協会に連絡", "@"),
        E("disclosed", "2026-10-16", "発表日 令和8年10月16日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "対象は「アート×ビジネス推進事業」相談サイト30件と「京の伝統文化体験事業」サイト3件。合計の記載はないためnは最大値。vendor_notifiedは受託者（京都市芸術文化協会）への連絡時刻で、市への連絡は同日午後1時20分。"
    },
    "埼玉県（さいたま緑の森博物館）": {
      officialUrl: "https://www.pref.saitama.lg.jp/a0508/news/page/news2026101603.html",
      events: [
        E("vendor_notified", "2026-10-16", "令和8年10月16日（金曜日）、さいたま緑の森博物館の指定管理者", "@"),
        E("disclosed", "2026-10-16", "発表日：2026年10月16日21時", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "指定管理者の石坂産業がStudio社から連絡を受け、県に報告。listed_orgsの「埼玉県（渋沢MIX）」とは別件。"
    },
    "ワサビ（WASABI SWITCH）": {
      officialUrl: "https://wasabi-inc.biz/help/news/20261016-01/",
      events: [
        E("incident", "2026-10-14", "2026年10月14日にWASABI SWITCHのシステムへ第三者による", "@"),
        E("vendor_notified", "2026-10-15", "2026年10月15日、ご利用店舗様より、「購入者様のもとに不審なメール", "@"),
        E("leak_confirmed", null, "情報が外部に流出していたことが判明いたしました", "@"),
        E("access_confirmed", "2026-10-16", "本日午前4時頃、別の原因による不正アクセスを確認", "@"),
        E("disclosed", "2026-10-16", "公開日：2026年10月16日（金）11:11", "@")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "流出した注文情報を悪用した「返金手続き」を装う不審メールが購入者に届いたと記載。見出しで「2026年10月16日午前4時頃に発生した不正アクセス」と明記（別原因）。2026年7月の開発環境端末への不正アクセス（ダミーデータのみ）とは別件。"
    },
    "CREAVE（Snapmart）": {
      officialUrl: "https://info.snapmart.jp/notice-20261016",
      events: [
        E("exposure", null, "2019年3月頃から2026年10月8日までの間、本人確認書類の画像が", "@"),
        E("anomaly", "2026-10-07", "2026年10月7日に本事象を確認し、直ちに不備を解消", "https://creave.co.jp/news/news20261016/"),
        E("disclosed", "2026-10-16", "2026年10月16日 株式会社CREAVE", "@"),
        E("update", "2026-10-20", "※2026年10月20日 追記", "@")
      ],
      causes: ["config"], causeText: "原因は、画像の保存先の設定不備です。",
      dataNote: "2020年5月以降のログでは第三者による画像取得の記録は確認されていないが、2019年3月〜2020年5月はログなしで確認不能と記載。運転免許証・マイナンバーカード等の画像が対象。同日付でCREAVE社サイトにも掲載。"
    },
    "マンション管理センター／日建学院（事前確認講習システム）": {
      officialUrl: "https://nik-g.com/news/261016_news.aspx",
      events: [
        E("disclosed", "2026-10-16", "令和8年10月16日", "@")
      ],
      causes: [], causeText: null,
      certainty: "possible",
      dataNote: "マンション管理センターと日建学院の連名で日建学院サイトに掲載。表題は「漏えい」、本文は「流出した可能性」。クレジットカード・銀行口座情報は含まれないと記載。"
    },
    "三菱ガス化学（委託先T4C）": {
      officialUrl: "https://www.mgc.co.jp/corporate/news/2026/261016.html",
      events: [
        E("incident", "2026-09-16", "1．発生日 2026年9月16日", "@"),
        E("disclosed", "2026-10-16", "2026年10月16日", "@")
      ],
      causes: ["vendor", "human"], causeText: "他社宛ての電子メールに誤って添付し、送信しました",
      certainty: "possible",
      dataNote: "対象は氏名と社員番号。送信先で未開封のまま同日中に削除されたことを確認と記載。合計の記載はないためnは2,092。"
    },
    "Finatextホールディングス（Studio経由）": {
      officialUrl: "https://finatext.com/hd/news/20261016",
      events: [
        E("vendor_notified", "2026-10-16", "2026年10月16日、Studio株式会社より", "@"),
        E("leak_confirmed", null, "その情報の一部に漏えいの形跡を確認しました", "@"),
        E("disclosed", "2026-10-16", "2026.10.16", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "confirmed",
      dataNote: "7,241件はコーポレートサイト問い合わせの総数で、不正アクセスはその最大18%程度と記載（具体件数なしのためn=null）。スマートプラス少額短期保険の問い合わせ12件も対象。ページはJS描画。"
    },
    "Joshin（上新電機）": {
      officialUrl: "https://www.joshin.co.jp/ja/news/info/info-20261017/main/0/link/20261017Notice%20and%20Apology%20Regarding%20System%20Disruption%20Caused%20by%20Unauthorized%20Access.pdf",
      events: [
        E("anomaly", "2026-10-16", "2026 年 10 月 16 日（金）に不正アクセスを認識", "@"),
        E("leak_possible", null, "現時点では個人情報漏洩の可能性も否定できません", "@"),
        E("disclosed", "2026-10-17", "2026 年 10 月 17 日", "@")
      ],
      causes: [], causeText: null,
      certainty: "possible",
      dataNote: "第一報には件数の記載なし。後日の続報で最大約600万件とされたとの報道あり（未検証）。"
    },
    "ハッピーキャット（猫カフェ「猫ちゃんといっしょ」／ファインズ経由）": {
      officialUrl: "https://www.with-necochan.com/news/4582",
      events: [
        E("incident", "2026-09-21", "2026年9月21日から22日にかけて、株式会社ファインズが提供する", "@"),
        E("vendor_notified", null, "予約者様の個人情報が漏えいしたとの報告を受けました", "@"),
        E("disclosed", "2026-10-17", "2026/10/17", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "confirmed",
      dataNote: "対象は2020年1月8日〜2025年1月31日の予約データ。住所・生年月日等は漏えいのおそれとして調査中。ファインズ本体はlisted_orgsに掲載済み。"
    },
    "東北電力フロンティア": {
      officialUrl: "https://www.tohoku-frontier.co.jp/news/1947/",
      events: [
        E("incident", "2026-09-30", "２０２６年９月３０日から１０月１日（日本時間）にかけて不正アクセス", "@"),
        E("vendor_notified", "2026-10-16", "２０２６年１０月１６日、Studio社より…連絡を受けました", "@"),
        E("disclosed", "2026-10-17", "2026.10.17", "@")
      ],
      causes: ["vendor"], causeText: "Studio社が提供するサービスの一部機能の脆弱性を第三者に悪用されたことによるもの",
      certainty: "possible",
      dataNote: "初回発表（10/17）はStudio経由の延べ182件（会社名・氏名・メールアドレス・電話番号・問い合わせ内容）。別事案として10月22日に、eポイントモールの開発・運営委託先ADDIXが利用する「ブラストメール」（ラクスライトクラウド）への不正アクセスで、eポイントモール会員のメールアドレス・内部管理ID 最大約10万件が漏洩した可能性を公表（https://www.tohoku-frontier.co.jp/news/1960/ 。10/22時点で会員情報が漏洩対象に含まれるかは未確認）。"
    },
    "ユミルリンク（Cuenote）": {
      officialUrl: "https://www.cuenote.jp/information/news/unauthorizedaccess.html",
      events: [
        E("access_confirmed", "2026-10-16", "2026年10月16日(金)未明に当社担当者が一部システムにおいて", "@"),
        E("disclosed", "2026-10-19", "2026年10月19日に掲載した内容に補足説明を追記", "@")
      ],
      causes: ["vuln"], causeText: "プログラムの脆弱性により",
      certainty: "confirmed",
      dataNote: "公式ページは第一報の2026年10月19日19:05更新版。件数は「延べ」の試算値で人数ではない。後日の続報で件数が更新されたとの報道あり（未検証）。"
    },
    "エイチ・ツー・オー リテイリング／阪急阪神百貨店（H2O ID）": {
      officialUrl: "https://data.swcms.net/file/h2o-retailing/ja/news/auto_20261019552921/pdfFile.pdf",
      events: [
        E("access_confirmed", "2026-10-16", "2026 年 10 月 16 日（金）、「阪急百貨店・阪神百貨店予約サイト」", "@"),
        E("access_confirmed", "2026-10-17", "10 月 17 日（土）、「HANKYU HANSHIN E-STORES」", "@"),
        E("leak_confirmed", "2026-10-19", "10 月 19 日（月）に、当該顧客管理システムで管理している", "@"),
        E("disclosed", "2026-10-19", "2026 年 10 月 19 日", "@")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "E-STORES／Remo Order経由分の漏えいの可能性は調査中と記載。"
    },
    "クリプトン・フューチャー・メディア（SONICWIRE・D2R）": {
      officialUrl: "https://www.crypton.co.jp/cfm/news/2026/10/20info",
      events: [
        E("anomaly", "2026-10-17", "2026年10月17日（土）20時頃", "@"),
        E("disclosed", "2026-10-19", "2026.10.19", "@"),
        E("update", "2026-10-22", "不正アクセスによるお客様情報漏えいのお詫びとお知らせ（26/10/22更新）", "@")
      ],
      causes: [], causeText: null,
      certainty: "possible",
      dataNote: "同一ページに追記される形式。10/19版は「可能性」、10/22更新版で362,137件の参照・取得を確認と記載。"
    },
    "リンクステーション（GETTIIS）": {
      officialUrl: "https://www.gettiis.jp/notice/detail/40",
      events: [
        E("anomaly", "2026-10-18", "2026年10月18日、弊社システムへの不審なアクセスを確認", "@"),
        E("leak_possible", "2026-10-18", "会員情報を取得していた可能性があることが判明", "@"),
        E("disclosed", "2026-10-19", "2026/10/19", "@")
      ],
      causes: ["vuln"], causeText: "第三者が「Gettii-Lite」のプログラムの脆弱性を悪用し",
      certainty: "confirmed",
      dataNote: "第一報は「流出したことを確認」としつつ件数は確認中。続報で約31.8万件とされたとの報道あり（未検証）。"
    },
    "ニフティ（回線申込・受付管理システム）": {
      officialUrl: "https://www.nifty.co.jp/newsrelease/nifty202610195434.htm",
      events: [
        E("access_confirmed", "2026-10-19", "2026年10月19日（月）10時20分頃、当社システムに対する", "@"),
        E("disclosed", "2026-10-19", "2026年10月19日", "@")
      ],
      causes: [], causeText: null,
      dataNote: "542,513件は影響を受ける可能性がある件数の最大値で、漏えい情報は調査中。後日、対象件数が修正されたとの報道あり（未検証）。"
    },
    "東邦ホールディングス（子会社エンタッチ）": {
      officialUrl: "https://www.release.tdnet.info/inbs/140120261019553091.pdf",
      events: [
        E("leak_confirmed", "2026-10-13", "2026年10月13日16時頃、エンタッチが管理するデータベースから", "@"),
        E("disclosed", "2026-10-19", "2026 年 10 月 19 日", "@")
      ],
      causes: ["ransomware"], causeText: "ランサムウェア攻撃を行う第三者 による不正アクセスが原因",
      certainty: "confirmed",
      dataNote: "データの改ざんや消去は確認されていないと記載（暗号化の記載なし）。"
    },
    "ジェトロ（日本貿易振興機構）": {
      officialUrl: "https://www.jetro.go.jp/news/releases/2026/a6deaac68f2dbe3b.html",
      events: [
        E("incident", "2026-10-14", "10月14日（水曜）から、当機構の一部ウェブサイトへの不正アクセスが行われた", "@"),
        E("disclosed", "2026-10-19", "2026年10月19日", "@")
      ],
      causes: [], causeText: null,
      certainty: "confirmed"
    },
    "ハノワ（歯科医療人材マッチング）": {
      officialUrl: "https://hanowa.co.jp/3fe09d1d0be580f88364c519d5196b72",
      events: [
        E("exposure", "2020-06-18", "2020年6月18日以降はログインしていない第三者からも、閲覧できる状態", "@"),
        E("anomaly", "2026-10-14", "2026年10月14日11時台、当社内の点検によりこの事実を把握", "@"),
        E("disclosed", "2026-10-19", "公表日：2026年10月19日", "@")
      ],
      causes: ["config"], causeText: "閲覧を制限する設定が適切に行われていませんでした",
      certainty: "possible",
      dataNote: "2019年6月以降はログインした他の利用者からも閲覧可能。本人確認書類・免許証画像も最大10,311名分が対象。"
    },
    "楽待（不動産投資サイト）": {
      officialUrl: "https://rakumachi.co.jp/20261019/",
      events: [
        E("incident", "2026-10-09", "2026年10月9日から10月11日にかけて、第三者による不正ログインが発生", "@"),
        E("disclosed", "2026-10-19", "2026.10.19", "@")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "リスト型攻撃は「推測しています」との表現のため原因タグは付与せず。"
    },
    "スカイマーク（採用お問い合わせ管理画面）": {
      officialUrl: "https://www.skymark.co.jp/ja/company/press/pdf/__icsFiles/afieldfile/2026/10/19/press_1019.pdf",
      events: [
        E("exposure", null, "2016 年 3 月から 2026 年 10 月 16 日まで閲覧可能な状態", "@"),
        E("anomaly", "2026-10-16", "2026 年 10 月 16 日、当社社員が、当該管理画面が社外から閲覧可能", "@"),
        E("disclosed", "2026-10-19", "2026 年 10 月 19 日", "@")
      ],
      causes: ["config"], causeText: "管理画面に対するアクセス制限の設定が不十分であったため",
      dataNote: "第三者による閲覧や流出は確認されておらず漏えいの記載もないためnはnull（2025年6月9日以前はアクセス記録なし）。"
    },
    "岐阜県（GIFU新事業共創チャレンジプログラム）": {
      officialUrl: "https://www.pref.gifu.lg.jp/site/pressrelease/522624.html",
      events: [
        E("incident", "2026-09-30", "令和8年9月30日から10月1日 第三者による不正アクセス", "@"),
        E("vendor_notified", "2026-10-16", "令和８年10 月16 日、当該事業の受託業者であったアルファドライブ", "https://www.pref.gifu.lg.jp/uploaded/attachment/518091.pdf"),
        E("disclosed", "2026-10-19", "令和８年１０月１９日（月）", "https://www.pref.gifu.lg.jp/uploaded/attachment/518091.pdf")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "受託業者アルファドライブ経由でStudio社の連絡を受けたもの。イベント参加申込は別管理で対象外と記載。"
    },
    "ジグザグ（WorldShopping）": {
      officialUrl: "https://www.release.tdnet.info/inbs/140120261019553141.pdf",
      events: [
        E("incident", "2026-10-15", "同年10 月15 日から16 日にかけて第三者による不正アクセス", "@"),
        E("anomaly", "2026-10-16", "2026 年10 月16 日、当社サービスへの外部からの不審なアクセスを検知", "@"),
        E("leak_confirmed", null, "お客様の個人情報が外部に漏えいしたことを確認いたしました", "@"),
        E("disclosed", "2026-10-19", "2026 年10 月19 日", "@")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "クレジットカード情報・パスワードは含まれないと記載。WorldShopping BIZ導入事業者の預かり情報は対象外。"
    },
    "hokan（hokan出納）": {
      officialUrl: "https://www.corp.hkn.jp/news/category/press/261019",
      events: [
        E("leak_confirmed", "2026-10-14", "10月14日22時28分頃に情報漏えいの事実が判明", "@"),
        E("disclosed", "2026-10-19", "2026/10/19", "@")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "クレジットカード番号・銀行口座番号・病歴等の項目からの漏えいは確認されていないと記載。hokan CRM・hokan Peopleへの不正アクセスは確認されていない。ページはJS描画。"
    },
    "LiNKX（Studio経由）": {
      officialUrl: "https://fs2.magicalir.net/tdnet/2026/584A/20261019553109.pdf",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日の間、第三者が同社のクラウド環境に", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日、ウェブサイト制作サービス「Studio」を提供する", "@"),
        E("disclosed", "2026-10-19", "2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "公式URLはTDnet開示PDFのミラー（magicalir）。"
    },
    "and US（Studio経由）": {
      officialUrl: "https://assets.minkabu.jp/news/article_media_content/urn:newsml:tdnet.info:20261019553073/140120261019553073.pdf",
      events: [
        E("vendor_notified", "2026-10-16", "2026 年10 月16 日、同サービスを提供する Studio 株式会社より", "@"),
        E("disclosed", "2026-10-19", "2026 年10 月19 日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "件数には営業目的の送信データ等の法人連絡を含むと記載。公式URLはTDnet開示PDFのミラー（みんかぶ）。"
    },
    "グリーンエナジー＆カンパニー（Studio経由）": {
      officialUrl: "https://fs2.magicalir.net/tdnet/2026/1436/20261019552974.pdf",
      events: [
        E("vendor_notified", "2026-10-16", "10 月16 日、「Studio」を運営するStudio 株式会社より", "@"),
        E("disclosed", "2026-10-19", "2026 年10 月19 日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "子会社3社（グリーンエナジー・プラス、同ファシリティーズ、同ネックス）のフォームが対象。公式URLはTDnet開示PDFのミラー（magicalir）。"
    },
    "テイクアンドギヴ・ニーズ（Studio経由）": {
      officialUrl: "https://www.tgn.co.jp/news/post/586/",
      events: [
        E("disclosed", "2026-10-19", "2026/10/19", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "件数はフォーム送信情報の件数で人数とは一致しない場合があると記載。生年月日・住所も対象。"
    },
    "オムロン（pengu／Studio経由）": {
      officialUrl: "https://www.omron.com/jp/ja/news/2026/10/c1019.html",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日の間、第三者が同社のクラウド環境に", "@"),
        E("vendor_notified", "2026-10-16", "2026 年10月16日、ウェブサイト制作サービス「Studio」を提供する", "@"),
        E("disclosed", "2026-10-19", "2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "curlでは403、ブラウザで確認。"
    },
    "UPSIDER（旧採用サイト／Studio経由）": {
      officialUrl: "https://corp-news.up-sider.com/pr-261019/",
      events: [
        E("incident", "2026-09-30", "不正アクセスがあったのは2026年9月30日〜10月1日", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日、Studio株式会社…から当社に対し…連絡がありました", "@"),
        E("disclosed", "2026-10-19", "2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "「Studio」において、第三者による不正アクセスが発生したため",
      certainty: "possible",
      dataNote: "対象は2022年5月〜2026年8月に旧採用サイトのフォームから送信された氏名・メールアドレス・電話番号・住所・本文、添付ファイル名（内容は対象外）。"
    },
    "トラストバンク（ふるさとチョイス）": {
      officialUrl: "https://www.trustbank.co.jp/newsroom/newsrelease/news261020/",
      events: [
        E("access_confirmed", "2026-10-17", "2026年10月17日（土）に不正アクセスがあったことを確認し", "@"),
        E("anomaly", "2026-10-19", "10月19日（月）通常と異なるアクセス傾向を把握したため確認を行った", "@"),
        E("disclosed", "2026-10-20", "2026.10.20", "@")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "件数は今後変動する可能性があると記載。"
    },
    "日本電気（NEC）": {
      officialUrl: "https://jpn.nec.com/news/info/20261020.html",
      events: [
        E("incident", null, "委託先」）が9月下旬にサイバー攻撃を受け", "@"),
        E("disclosed", "2026-10-20", "2026年10月20日", "@")
      ],
      causes: ["vendor", "credential"], causeText: "窃取された正規アカウントの認証情報が悪用されたことにより",
      certainty: "confirmed",
      dataNote: "委託先名は非公表。顧客サーバ内ファイルが暗号化されたと記載があるが、ランサムウェアの語はない。"
    },
    "国土交通省（住宅省エネ2024キャンペーン事務局・博報堂）": {
      officialUrl: "https://www.mlit.go.jp/report/press/house04_hh_001366.html",
      events: [
        E("vendor_notified", null, "漏洩した可能性があるとの報告を受けました", "@"),
        E("disclosed", "2026-10-20", "令和8年10月20日", "@")
      ],
      causes: [], causeText: null,
      certainty: "possible",
      dataNote: "経済産業省・環境省の事業も含むキャンペーン。報告受領日の記載なし。"
    },
    "Globee（abceed）": {
      officialUrl: "https://www.release.tdnet.info/inbs/140120261020553707.pdf",
      events: [
        E("anomaly", "2026-10-17", "2026 年 10 月 17 日、当社の関連システムへの不正アクセスを検知", "@"),
        E("disclosed", "2026-10-20", "2026 年 10 月 20 日", "@")
      ],
      causes: [], causeText: null,
      certainty: "possible",
      dataNote: "アカウント数で実人数は未確認と記載。"
    },
    "フジテレビジョン（番組宣伝システム）": {
      officialUrl: "https://www.fujitv.co.jp/company/news/r20261020_4814149391.pdf",
      events: [
        E("incident", null, "第三者による不正アクセスが昨夜発生したことを確認", "@"),
        E("disclosed", "2026-10-20", "2026 年10 月20 日", "@")
      ],
      causes: [], causeText: null,
      certainty: "possible",
      dataNote: "「昨夜」の具体的日付は記載なし。後日の更新で件数が修正されたとの報道あり（未検証）。"
    },
    "富士急ハイランド（CLUB フジQ）": {
      officialUrl: "https://www.fujiq.jp/news/20261020_oshirase.html",
      events: [
        E("incident", "2026-09-04", "発生日時：2026年9月4日（金）〜9月7日（月）", "@"),
        E("disclosed", "2026-10-20", "2026年10月20日", "@")
      ],
      causes: ["credential"], causeText: "外部で入手されたメールアドレスとパスワードの一覧を用いた、いわゆる「リスト型攻撃」",
      certainty: "possible"
    },
    "ネオキャリア（X-Tech Agent・Bee／Studio経由）": {
      officialUrl: "https://www.neo-career.co.jp/news/article_26461/",
      events: [
        E("incident", "2026-09-30", "不正アクセスは2026年9月30日から10月1日にかけて行われた", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日、Studio株式会社より、同社のクラウド環境に", "@"),
        E("disclosed", "2026-10-20", "2026.10.20", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "第三者に情報が取得された事実は確認されていないと記載。"
    },
    "Schoo（Studio経由）": {
      officialUrl: "https://prtimes.jp/main/html/rd/p/000000380.000006391.html",
      events: [
        E("incident", "2026-09-30", "不正アクセスが確認されているのは2026年9月30日から10月1日", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日、Studio社より、同社サービスの一部機能の", "@"),
        E("disclosed", "2026-10-20", "2026年10月20日 16時30分", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "公式URLは同社がPR TIMESで配信したリリース（自社サイト版は未確認、disclosedはその配信日時）。学習者会員情報はStudio上で管理しておらず影響なしと記載。"
    },
    "スカパーJSAT（SATELLITE CRAYON PROJECT／Studio経由）": {
      officialUrl: "https://www.skyperfectjsat.space/jp/news/20261020",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日（日本時間）にかけて不正アクセス", "@"),
        E("disclosed", "2026-10-20", "2026年10月20日", "@")
      ],
      causes: ["vendor"], causeText: "Studio社が提供するサービスの一部機能の脆弱性を第三者に悪用されたことによるもの",
      certainty: "possible"
    },
    "東邦ガス（新規事業サイト／Studio経由）": {
      officialUrl: "https://www.tohogas.co.jp/corporate-n/press/1262174_1342.html",
      events: [
        E("incident", "2026-09-30", "不正アクセスは2026年9月30日〜10月1日に行われ", "@"),
        E("vendor_notified", "2026-10-16", "当社は2026年10月16日、Studio社から", "@"),
        E("disclosed", "2026-10-20", "2026年10月20日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "都市ガス・電気の供給への影響はないと記載。"
    },
    "NTTPCコミュニケーションズ": {
      officialUrl: "https://www.nttpc.co.jp/press/info/2026/10/202610201600.html",
      events: [
        E("vendor_notified", "2026-10-19", "2026年10月19日、…不正アクセスが発生した旨の報告", "https://www.nttpc.co.jp/press/info/2026/10/202610271600.html"),
        E("disclosed", "2026-10-20", "2026.10.20", "https://www.nttpc.co.jp/press/info/2026/10/202610271600.html"),
        E("vendor_notified", "2026-10-26", "10月26日にユミルリンク株式会社より", "https://www.nttpc.co.jp/press/info/2026/10/202610271600.html"),
        E("leak_possible", "2026-10-26", "一部のお客さまの情報が漏えいの対象に含まれているとの報告", "https://www.nttpc.co.jp/press/info/2026/10/202610271600.html"),
        E("update", "2026-10-27", "2026.10.27", "https://www.nttpc.co.jp/press/info/2026/10/202610271600.html")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "10/20の初報は影響未確認の注意喚起（日付は続報ページの一覧表記、初報本文は未取得）。10/27続報で漏えい対象に含まれると報告を受けたが、タイトルは「漏えいの可能性」。"
    },
    "エムスリー（M3PSP・1人1円ファンド／Studio経由）": {
      officialUrl: "https://corporate.m3.com/assets.ctfassets.net/1pwj74siywcy/7tQjGKGMtsasFkBD2dX3Sq/05abba2f58cdd6543d38fa3c6e5e140c/20261021_Public_J.pdf",
      events: [
        E("disclosed", "2026-10-21", "2026 年10 月2１日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "サイト別人数のみで合計の記載なし。nは単一最大値。"
    },
    "GMOインターネット（お名前.com デスクトップクラウド）": {
      officialUrl: "https://www.onamae.com/news/article/11584",
      events: [
        E("access_confirmed", "2026-10-20", "第三者による不正なプログラムが設置されたことを確認", "@"),
        E("leak_possible", null, "サーバー内に保管されている情報が閲覧された可能性があります。", "@"),
        E("disclosed", "2026-10-21", "（2026年10月21日 4:00時点）", "@"),
        E("update", "2026-10-24", "お客様の情報が外部に持ち出された事実を確認しております", "https://internet.gmo/news/article/249/")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "第1報（10/21）時点では個人情報漏えいは「確認されておりません」としていたが、第4報（10/24）で顧客情報の外部持ち出しを確認と公表。持ち出し件数は未記載。26,739件はサーバー数で漏えい件数ではないためnはnull。取引口座での身に覚えのない取引の報告、脅迫（身代金要求）も後続報で公表。"
    },
    "ラクス（ラクスライトクラウド「ブラストメール」）": {
      officialUrl: "https://www.rakus.co.jp/news/2026/1021-2.html",
      events: [
        E("anomaly", null, "システムへの不審なアクセスを検知したため", "@"),
        E("disclosed", "2026-10-21", "2026年10月21日", "@"),
        E("leak_confirmed", null, "お客さまの個人情報を含むデータが外部に持ち出されたことを確認", "https://www.rakus.co.jp/news/2026/1021-3.html"),
        E("update", "2026-10-21", "2026年10月21日", "https://www.rakus.co.jp/news/2026/1021-3.html")
      ],
      causes: [], causeText: "外部の第三者が、株式会社ラクスライトクラウドのAPI用サーバー2台に侵入してコマンドを実行し",
      certainty: "confirmed",
      dataNote: "同日（10/21）に第一報（不審なアクセス検知・緊急停止）と第二報（持ち出し確認）を公表。侵入経路は調査中。利用企業・自治体の公表が多数続いており、本ファイルにも主要な利用者を個別に収録。"
    },
    "沖縄ツーリスト（OTS）": {
      officialUrl: "https://otspremium.com/news/3008",
      events: [
        E("vendor_notified", null, "社外より個人情報漏えいに関するお問い合わせを受け", "@"),
        E("leak_possible", null, "個人情報の漏えいが発生した可能性があることを確認しました", "@"),
        E("disclosed", "2026-10-21", "2026/ 10/ 21", "@"),
        E("leak_confirmed", null, "お客様の個人情報の漏えいがあったことを確認しました", "https://otspremium.com/news/3030"),
        E("update", "2026-10-23", "2026/ 10/ 23", "https://otspremium.com/news/3030")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "公式発表は原因（不正アクセス等）を明記していない（typeは暫定）。10月18日から当該サイトへの外部アクセスを遮断。運転免許証番号を含む。免許証画像（最大6,000件）は漏えい有無を調査中。"
    },
    "イオン（グループ各社の一部Webサイト）": {
      officialUrl: "https://www.aeon.info/wp-content/uploads/news/important/pdf/2026/10/261021R_2.pdf",
      events: [
        E("access_confirmed", null, "第三者による不正アクセスを検知し、安全確認を 実施しております", "@"),
        E("disclosed", "2026-10-21", "２０２６年１０月２１日", "@")
      ],
      causes: [], causeText: null,
      dataNote: "対象となるグループ会社・サイト名、件数は未公表。個人情報の流出有無は調査中。"
    },
    "大日本印刷（honto）": {
      officialUrl: "https://image.honto.jp/library/info/pdf/honto_20261021_001.pdf",
      events: [
        E("vendor_notified", "2026-10-19", "2026 年 10 月 19 日、ユミルリンク社より", "@"),
        E("disclosed", "2026-10-21", "2026 年 10 月 21 日 大日本印刷株式会社", "@"),
        E("update", "2026-10-29", "【10/29更新】外部委託先への不正アクセスによるお客様情報漏えいの可能性", "https://honto.jp/info/detail_041000135344.html")
      ],
      causes: ["vendor"], causeText: "ユミルリンク社が運用管理するメール配信システムが第三者によって不正にアクセスされ",
      certainty: "possible",
      dataNote: "対象はメールマガジン配信を許諾している顧客の氏名・メールアドレス・識別番号。DNPグループのシステムへの不正アクセスは確認されていないとしている。"
    },
    "リクルート（カーセンサーnet・C-MATCH）": {
      officialUrl: "https://www.recruit.co.jp/newsroom/pressrelease/2026/1021_149447.html",
      events: [
        E("anomaly", "2026-10-17", "2026年10月17日（土）…外部からの不審なアクセスを検知", "@"),
        E("leak_possible", "2026-10-20", "2026年10月20日（火）…漏えいした可能性のある個人情報…件数（最大値）を把握", "@"),
        E("disclosed", "2026-10-21", "2026.10.21", "@")
      ],
      causes: [], causeText: "第三者からの不正なアクセス",
      certainty: "possible",
      dataNote: "内訳はカーセンサーnetで販売店へ問い合わせた利用者3,210,421件（住所は原則市区町村まで、番地等まで含む可能性は最大447,670件）、口コミ投稿者5,289件、C-MATCH登録販売店483,168件（個人事業主は引落口座情報を含む）、従業員・委託先等10,673件。決済情報・パスワードは含まれない。10月17日17時頃から関連サービスを停止しているが同日付の公式告知は確認できず、初回公式発表は10月21日付プレスリリースとして記録。"
    },
    "JFEケミカル": {
      officialUrl: "https://www.jfe-chem.com/uploads/2026/10/baa6f7b08015cd87b11014e01d51141e.pdf",
      events: [
        E("anomaly", "2026-10-14", "10 月 14 日に不正アクセスの可能性を認識し、調査を開始", "@"),
        E("leak_confirmed", "2026-10-19", "10 月 19 日に…データが不正に取得されたことが判明", "@"),
        E("disclosed", "2026-10-21", "2026 年 10 月 21 日", "@"),
        E("update", "2026-10-28", "（第二報）2026 年 10 月 28 日 … 最大約 23 万件", "https://www.jfe-chem.com/uploads/2026/10/5d39f850d21f5b45caec8589b42bacf9.pdf")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "第二報（10/28）で、不正に取得された、またはそのおそれのある個人情報は最大約23万件（氏名・所属先・電話番号・メールアドレス等）。同一個人の重複算入や単独では個人を特定できないデータを含み精査中。取引先・社外関係者のクレジットカード番号・銀行口座情報の漏洩はないとしている。"
    },
    "石油資源開発（JAPEX）": {
      officialUrl: "https://www.japex.co.jp/news/detail/20261021_01/",
      events: [
        E("vendor_notified", "2026-10-21", "2026年10月21日、ラクスライトクラウド社から", "@"),
        E("leak_possible", "2026-10-21", "外部に漏えいした可能性があるとの報告を受けました", "@"),
        E("disclosed", "2026-10-21", "2026年10月21日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "機関投資家・アナリスト向け配信対象者は氏名・会社名・住所・電話番号等も対象。"
    },
    "富山県（就活ラインとやま）": {
      officialUrl: "https://shukatsu-line.pref.toyama.lg.jp/news/284",
      events: [
        E("leak_possible", null, "個人情報が漏洩した可能性があります", "@"),
        E("disclosed", "2026-10-21", "2026.10.21", "@"),
        E("update", "2026-10-22", "令和8年10月22日更新", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "まとめサイトでは学生4,278人・企業1,490社とされるが、取得したページに件数の記載なし。富山県はヤングジョブとやま・スマラボTOYAMAでも別途公表（未収録）。disclosedはサイトのお知らせ一覧の日付表記。"
    },
    "アイシン（YYSystem／Studio経由）": {
      officialUrl: "https://www.aisin.com/jp/news/2026/010729.html",
      events: [
        E("vendor_notified", "2026-10-16", "2026年10月16日、ウェブサイト制作サービス「Studio」を提供する", "@"),
        E("disclosed", "2026-10-22", "2026.10.22", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "Studioの利用は2026年9月16日までと記載。"
    },
    "SmartHR（グループ5社サイト／Studio経由）": {
      officialUrl: "https://smarthr.co.jp/news/info/20261022/",
      events: [
        E("incident", "2026-09-30", "2026年9月30日～10月1日（日本時間）に「Studio」の一部機能の", "@"),
        E("disclosed", "2026-10-22", "2026.10.22", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "SmartHR、Smart相談室、AIRVISA、BYARD、Looperのサイトが対象。SmartHR等のクラウドサービス上のデータは対象外。"
    },
    "カプコン（CAPCOM ID）": {
      officialUrl: "https://www.capcom.co.jp/ir/news/html/261022.html",
      events: [
        E("anomaly", "2026-10-19", "不正アクセスの疑いのある痕跡を発見", "@"),
        E("access_confirmed", "2026-10-19", "同日、不正アクセスが行われたことを確認。", "@"),
        E("leak_confirmed", "2026-10-20", "お客様情報の一部が漏えいしたことが判明", "@"),
        E("disclosed", "2026-10-22", "2026年10月22日", "@"),
        E("update", "2026-10-23", "不正アクセスによるお客様情報漏えいのお詫びとお知らせ （第二報）", "https://www.capcom.co.jp/ir/news/html/261023.html")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "うち43件は生年月日・性別等も漏えい、196件でログインパスワードの不正変更を確認。発表日はIRニュース一覧の表記。"
    },
    "厚生労働省（委託先テクノヒル「1FEdu」）": {
      officialUrl: "https://www.mhlw.go.jp/stf/newpage_76892.html",
      events: [
        E("vendor_notified", null, "個人情報の漏えい及び漏えいした可能性があるとの報告を受けました", "@"),
        E("leak_confirmed", null, "6名のメールアドレス及びパスワードが漏えいしたことを確認", "@"),
        E("disclosed", "2026-10-22", "令和8年10月22日（木）", "@")
      ],
      causes: ["vendor"], causeText: "同社が運営するウェブサイト「1FEdu（いちえふエデュ）」に対して第三者によるサイバー攻撃が行われ",
      certainty: "confirmed",
      dataNote: "東電福島第一原発廃炉等作業における被ばく低減対策普及啓発事業。漏えいした認証情報を用いた不正ログインも確認。"
    },
    "新潟日報社（新潟日報パスポート）": {
      officialUrl: "https://www.niigata-nippo.co.jp/articles/-/929006", listedDate: "2026-10-22",
      events: [
        E("vendor_notified", "2026-10-21", "１０月２１ 日午前０時すぎ、ラクスライトクラウド社から", "@"),
        E("leak_confirmed", "2026-10-22", "「パスポート会員全ての個人情報が漏えいした」との報告", "@"),
        E("update", "2026-10-22", "2026/10/22 17:20", "@")
      ],
      causes: ["vendor"], causeText: "「ブラストメール」（運営・株式会社ラクスライトクラウド）において、第三者による不正アクセスが発生し",
      certainty: "confirmed",
      dataNote: "取得できたのは第2報（2026/10/22 17:20掲載、10/23更新）で、第1報のURL・掲載日は未確認のためdisclosedを省略。「にいがた鮭プロジェクト会員」約7000人も漏えいの可能性。"
    },
    "H.I.S.ホテルホールディングス": {
      officialUrl: "https://www.hishotelgroup.com/news/3359/",
      events: [
        E("leak_possible", null, "会員様の「配信先リスト」も漏洩した可能性があることが発覚いたしました", "@"),
        E("disclosed", "2026-10-22", "2026.10.22", "@")
      ],
      causes: ["vendor"], causeText: "当該委託会社が不正アクセスによるハッキング被害を受けました",
      certainty: "possible",
      dataNote: "公式発表はサービス名を明記していないが、報道・まとめではブラストメール（ラクスライトクラウド）関連とされる。H.I.S.（タイ現地法人）の既収録事案とは別法人・別件。"
    },
    "名鉄観光サービス": {
      officialUrl: "https://www.mwt.co.jp/press/2026/press_20261022.pdf",
      events: [
        E("vendor_notified", "2026-10-21", "10 月 21 日、ラクスライトクラウド社より", "@"),
        E("disclosed", "2026-10-22", "2026 年 10 月 22 日 名鉄観光サービス株式会社", "@")
      ],
      causes: ["vendor"], causeText: "「ブラストメール」において、第三者による不正アクセスを受け",
      certainty: "possible"
    },
    "南日本新聞社（みなみパス）": {
      officialUrl: "https://373news.com/corporation/notice/press/id_bfcd6f6b-43d6-4d48-931c-d9cac9dae279",
      events: [
        E("vendor_notified", "2026-10-22", "2026年10月22日（木）16:00頃：委託先より情報持ち出しの報告を受ける", "@"),
        E("disclosed", "2026-10-22", "2026年10月22日", "@")
      ],
      causes: ["vendor"], causeText: "「ブラストメール」（株式会社ラクスライトクラウド）が不正アクセスを受け",
      certainty: "confirmed"
    },
    "JR四国（JR四国ツアーWebメールマガジン）": {
      officialUrl: "https://www.jr-shikoku.co.jp/emc_info/assets/2026/10/22/0d2c20563ba3a1dafd421b6e36d48dad53dcd273.pdf",
      events: [
        E("leak_possible", null, "個人情報が閲覧または取得された可能性が否定できない状況です", "@"),
        E("disclosed", "2026-10-22", "2026 年 10 月 22 日 四国旅客鉄道株式会社", "@")
      ],
      causes: ["vendor"], causeText: "株式会社ラクスライトクラウドのサービスにおいて、第三者による不正アクセスが発生し",
      certainty: "possible"
    },
    "横浜市（GREEN×EXPO 2027 市出展エリアボランティア）": {
      officialUrl: "https://www.city.yokohama.lg.jp/city-info/koho-kocho/press/kankyo/2026/1022expovolunteer.html",
      events: [
        E("vendor_notified", "2026-10-21", "令和８年 10 月 21 日（水）午前１時頃", "@"),
        E("leak_possible", null, "メールマガジン登録者の個人情報が漏えいした可能性があることが判明しました", "@"),
        E("disclosed", "2026-10-22", "令和８年10月22日", "@")
      ],
      causes: ["vendor"], causeText: "メール配信サービス（ブラストメール）に対し、第三者による不審なアクセスにより",
      certainty: "possible",
      dataNote: "同日、公益社団法人2027年国際園芸博覧会協会もGREEN×EXPO 2027ボランティア（メールアドレス等）の漏えいのおそれを公表（記者発表資料に同梱）。"
    },
    "損保ジャパンDC証券（確定拠出年金加入者向けメール）": {
      officialUrl: "https://www.sjdc.co.jp/-/media/sjnkdc/files/information/20261022_03.pdf?la=ja-JP",
      events: [
        E("vendor_notified", "2026-10-21", "2026年10月21日未明、サービス提供元より", "@"),
        E("leak_possible", null, "当社のお客さま情報が外部に漏えいした可能性があることが判明", "@"),
        E("disclosed", "2026-10-22", "2026年10月22日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "対象は2022年9月以降に通知メールを配信した顧客。共同運営先の名古屋銀行も10/23に同一事案（同じ対象）を告知（https://www.meigin.com/news/files/20261023_oshirase_2.pdf）。"
    },
    "東北電力フロンティア（eポイントモール）": {
      officialUrl: "https://www.tohoku-frontier.co.jp/news/1960/",
      events: [
        E("vendor_notified", "2026-10-21", "2026年10月21日、ADDIX社より", "@"),
        E("leak_possible", null, "会員の個人情報が外部に漏洩した可能性があることを確認", "@"),
        E("disclosed", "2026-10-22", "2026.10.22", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "委託先ADDIX経由の再委託構造。会員情報が漏洩対象に含まれるかは確認できていない段階。"
    },
    "アンドエスティHD": {
      officialUrl: "https://www.andst-hd.co.jp/news/notice/entry-17234/",
      events: [
        E("incident", "2026-10-22", "2026年10月22日（木）午前7時30分頃、外部からの不正アクセスにより", "@"),
        E("anomaly", "2026-10-22", "午前10時00分頃、不正な操作を検知し", "@"),
        E("disclosed", "2026-10-23", "2026.10.23", "@"),
        E("leak_possible", "2026-10-23", "10月23日時点で流出の可能性が判明した個人情報等の内容", "@")
      ],
      causes: [], causeText: null,
      certainty: "possible"
    },
    "トレジャー・ファクトリー": {
      officialUrl: "https://www2.jpx.co.jp/disc/30930/140120261023555328.pdf",
      events: [
        E("incident", "2026-10-20", "同日未明から朝にかけて、第三者による当社システムの脆弱性を悪用した不正アクセス", "@"),
        E("leak_confirmed", "2026-10-20", "お客様情報等が不正に取得されたことを確認いたしました", "@"),
        E("disclosed", "2026-10-23", "2026年10月23日", "@")
      ],
      causes: [], causeText: "データベースへのアクセスに関する脆弱性が第三者に悪用されたことが原因とみております",
      certainty: "confirmed",
      dataNote: "適時開示（TDnet）。原因は「とみております」と推定表現のためcausesは空。2026年8月の子会社カインドオルの事案とは別件と説明。"
    },
    "モスフードサービス（モスカード）": {
      officialUrl: "https://www.mos.jp/topics/20261023_1/",
      events: [
        E("leak_confirmed", null, "一部のモスカード情報が外部へ流出したことが判明いたしました", "@"),
        E("disclosed", "2026-10-23", "2026/10/23", "@")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "お知らせページは詳細をニュースリリースに委ねており、本文の件数・委託先名は未確認。報道では委託先バリューデザインへの不正アクセスにより113万3,070件（カード番号・PIN・残高）が流出、氏名等の個人情報は含まれないとされる。流出カードのPINは強制変更。"
    },
    "日本ピザハット": {
      officialUrl: "https://corp.pizzahut.jp/info/5540",
      events: [
        E("incident", "2026-10-19", "2026年10月19日、第三者がピザハットの日本国内向けオンライン注文サービス", "@"),
        E("leak_confirmed", null, "外部に漏えいしたことが確認されている情報は、以下のとおりです", "@"),
        E("disclosed", "2026-10-23", "2026年10月23日", "@")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "漏えい項目はお客様ID、メールアドレス、電話番号、削除済みお客様情報の記録、セッションログイントークン、取引記録。クレジットカード情報は含まれない。報道では最大約448万件とされるが公式発表に件数記載なし。"
    },
    "アルク": {
      officialUrl: "https://www.alc.co.jp/2026/10/23/1996", listedDate: "2026-10-23",
      events: [
        E("vendor_notified", "2026-10-21", "2026年10月21日、ブラストメールの運営会社より", "@"),
        E("leak_confirmed", "2026-10-22", "配信先メールアドレスが漏えい対象に含まれていることを確認しました", "@"),
        E("update", "2026-10-23", "お詫びとお知らせ（第2報）", "@")
      ],
      causes: ["vendor"], causeText: "外部サービス「ブラストメール」（株式会社ラクスライトクラウド提供）において、第三者による不正アクセスが発生し",
      certainty: "confirmed",
      dataNote: "取得できたのは第2報（2026/10/23、以後追記あり）で、第1報のURL・掲載日は未確認のためdisclosedを省略。"
    },
    "HRビジョン（日本の人事部）": {
      officialUrl: "https://jinjibu.jp/info/detl/2012/",
      events: [
        E("vendor_notified", "2026-10-21", "同社サーバーへの不正アクセスに伴うサービスの緊急停止", "@"),
        E("leak_confirmed", "2026-10-22", "会員のメールアドレスが漏えい対象に含まれていたとの報告を受領", "@"),
        E("disclosed", "2026-10-23", "2026年10月23日：第一報を『日本の人事部』ホームページに掲載", "@"),
        E("update", "2026-10-27", "掲載日：2026/10/27", "@")
      ],
      causes: ["vendor"], causeText: "メール配信サービス「ブラストメール」において、第三者による不正アクセスが発生した",
      certainty: "confirmed",
      dataNote: "同一URLを更新。第一報（10/23）では登録アドレス数212,243件と記載、10/26に213,294件で確定。"
    },
    "NHK出版（みんなの趣味の園芸）": {
      officialUrl: "https://news.nhk-book.co.jp/archives/35481",
      events: [
        E("leak_confirmed", "2026-10-23", "メール送付先リスト（全件）の漏えいが確認されたとの報告", "@"),
        E("disclosed", "2026-10-23", "2026/10/23", "@")
      ],
      causes: ["vendor"], causeText: "「ブラストメール」（運営・株式会社ラクスライトクラウド）において、第三者による不正アクセスが発生し",
      certainty: "confirmed"
    },
    "愛媛新聞社": {
      officialUrl: "https://www.ehime-np.co.jp/article/news202610230206",
      events: [
        E("vendor_notified", "2026-10-23", "当社は10月23日午前に同社から報告を受けました", "@"),
        E("disclosed", "2026-10-23", "2026年10月23日（金）（愛媛新聞）", "@")
      ],
      causes: ["vendor"], causeText: "「ブラストメール」（運営・株式会社ラクスライトクラウド）が第三者による不正アクセスを受け",
      certainty: "confirmed",
      dataNote: "ページは10月23日21時30分に更新されている。"
    },
    "東京都（東京都農林水産振興財団・東京広域援農ボランティア事業）": {
      officialUrl: "https://www.metro.tokyo.lg.jp/information/press/2026/10/2026102317",
      events: [
        E("leak_confirmed", null, "不正アクセスによる個人情報の漏えいが判明しました", "@"),
        E("disclosed", "2026-10-23", "2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: "外部の第三者が同社のAPI 用のサーバー2台に侵入してコマンドを実行し",
      certainty: "confirmed"
    },
    "エックスサーバー（ニュース・キャンペーン配信／ブラストメール）": {
      officialUrl: "https://www.xserver.ne.jp/news_detail.php?view_id=19739",
      events: [
        E("leak_confirmed", null, "お客様の個人情報が外部に漏洩したことが判明いたしました", "@"),
        E("disclosed", "2026-10-23", "2026/10/23", "@"),
        E("update", "2026-10-29", "（2026/10/29 20:30 追記）…漏洩件数および漏洩した情報の詳細が判明", "@")
      ],
      causes: ["vendor"], causeText: "本件は外部メール配信サービスへの不正アクセスによるもの",
      certainty: "confirmed",
      dataNote: "459,679件はメール配信先として登録されていたメールアドレスの件数。付随して氏名・フリガナ380,384件、会社名115,702件、利用サービス名316,453件、アカウント登録日431,076件、XServerアカウントID 692件等が漏洩。パスワード・住所・電話番号・決済情報は対象外。同社システムへの不正アクセスは確認されていないとしている。"
    },
    "ホウライ（千本松牧場オンラインショップ・ゴルフポイントカード等）": {
      officialUrl: "https://www.horai-kk.co.jp/topics/info_20261023_news.pdf",
      events: [
        E("vendor_notified", "2026-10-21", "2026年10月21日（水）、委託先から", "@"),
        E("leak_possible", null, "外部に流出した可能性あることが判明いたしました", "@"),
        E("disclosed", "2026-10-23", "2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "件数は想定最大件数で、流出の有無は調査中。ゴルフポイントカード会員は生年月日・住所（都道府県）も対象。"
    },
    "野村證券（i-Port）": {
      officialUrl: "https://www.nomuraholdings.com/jp/news/topics/20261023.html",
      events: [
        E("vendor_notified", "2026-10-22", "2026年10月22日、当社が、金融機関等向けの", "@"),
        E("leak_possible", "2026-10-22", "外部に漏えいした可能性があるとの報告を受けました", "@"),
        E("disclosed", "2026-10-23", "2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "ページは「Cuenote FC」の名称は記さず「ユミルリンク株式会社…メール配信サービス」。委託先側の10/16不正アクセス確認・10/22持ち出し確認はベンダー側の日付のため記録していない。ポートフォリオ情報・証券口座情報は含まれない。"
    },
    "DDタウン（山日YBSグループ）": {
      officialUrl: "https://www.ddtown.jp/maintenance/notification.pdf",
      events: [
        E("vendor_notified", "2026-10-23", "10 月 23 日、 個人情報漏えいの判明について通知", "@"),
        E("leak_confirmed", "2026-10-23", "登録者の個人情報 1 万件が漏えいした事実 が判明", "@"),
        E("disclosed", "2026-10-23", "2026 年 10 月 23 日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "confirmed",
      dataNote: "PDF本文に運営会社名の記載がなく（問い合わせ先は山日YBSグループ広報室）、まとめサイトでは運営会社をデジタルディビジョンとしている。PDFのテキスト抽出でサービス名が文字化け（「ラスストメール」「スクススイトクスウド」）するが、ブラストメール／ラクスライトクラウドを指す。同グループの山梨日日新聞社も別途公表（未収録）。"
    },
    "長野県（ハピネスナビ信州・シューカツNAGANO・デジタル農活信州）": {
      officialUrl: "https://www.pref.nagano.lg.jp/jisedai/happyou/20261023press.html",
      events: [
        E("leak_possible", null, "サーバーに保管されている個人情報等が漏えいした可能性がある", "@"),
        E("disclosed", "2026-10-23", "令和8年（2026年）10月23日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "nは最大の単一メルマガ（シューカツNAGANO約2,900件）。合計の記載はない。"
    },
    "鹿児島市（mark MEIZAN・オープンイノベーション創出支援事業ほか）": {
      officialUrl: "https://www.city.kagoshima.lg.jp/soumu/soumu/soumu/documents/roueikouhyou30-2.pdf", listedDate: "2026-10-23",
      events: [
        E("leak_possible", "2026-10-22", "配信先リストの漏えい 可能性を覚知", "@"),
        E("update", "2026-10-23", "令和８年１０月２３日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセス が行われたもの",
      certainty: "possible",
      dataNote: "取得したのは第2報（10/23）。第1報（ソーホーかごしまメルマガ、約500件とされる）は未取得のためdisclosedは省略。受託者に南日本新聞社（既収録）・薩摩郷中を含む。鹿児島市は他にすくすくメール・ふれあいスポーツランド等の個別公表もある（未収録）。"
    },
    "広島市（広島市産業振興センターNEWS・産学官連携ネットワークニュース）": {
      officialUrl: "https://www.city.hiroshima.lg.jp/shisei/kouhou/1004010/1045546/1053867/1054693.html",
      events: [
        E("leak_possible", null, "個人情報が漏洩した可能性がありますので", "@"),
        E("disclosed", "2026-10-23", "令和8年10月23日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "件数は登録件数で、漏洩の有無は確認中。合計の明記なし。"
    },
    "ボーダレス・ジャパン（For Good・広報メールマガジン）": {
      officialUrl: "https://www.borderless-japan.com/press_release/95535/",
      events: [
        E("leak_confirmed", null, "配信先の情報が外部に漏えいしたことを確認いたしました", "@"),
        E("disclosed", "2026-10-23", "2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "confirmed",
      dataNote: "漏えい確認はクラウドファンディング「For Good」と広報メルマガ。ボーダレスアカデミー・ハチドリ電力のメルマガは10/23 15時時点で未確認。WebSearch結果から直接公式ページに到達したためnews欄は空。"
    },
    "サダマツ（festaria Online Shop）": {
      officialUrl: "https://onlineshop.festaria.jp/news/20261023",
      events: [
        E("vendor_notified", "2026-10-23", "2026年10月23日（金）10:00頃", "@"),
        E("leak_possible", null, "お客様情報の流出の可能性について", "@"),
        E("disclosed", "2026-10-23", "2026.10.23", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "運営会社名はページのコピーライト表記（SADAMATSU）による。WebSearch結果から直接公式ページに到達したためnews欄は空。"
    },
    "アゾンインターナショナル（メールマガジン）": {
      officialUrl: "https://news.azone-int.co.jp/archives/71862",
      events: [
        E("leak_confirmed", null, "お客様のメールアドレスが外部に漏洩したことが判明いたしました", "@"),
        E("disclosed", "2026-10-23", "2026年10月23日", "@"),
        E("update", "2026-10-23", "（10/23・17時更新）", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "confirmed",
      dataNote: "タイトルは「漏えいの可能性」、本文は「漏洩したことが判明」。対象はメールアドレスのみ。"
    },
    "環境省（関連メールマガジン6誌）": {
      officialUrl: "https://www.env.go.jp/press/press_05784.html",
      events: [
        E("leak_possible", null, "配信先情報が漏えいした可能性があることが確認されました", "@"),
        E("disclosed", "2026-10-23", "2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "現時点で漏えいがあったとは確認されていないとしている。対象はGEOC・地域循環共生圏・東北EPO・福島環境再生プラザ・関東ESDセンター・きんき環境館の各メルマガ。"
    },
    "カカオピッコマ（ピッコマ）": {
      officialUrl: "https://piccoma.com/web/notice_detail/7503",
      events: [
        E("vendor_notified", "2026-10-24", "同社から、当社のメールマガジンの宛先メールアドレスが流出した旨の報告", "@"),
        E("disclosed", "2026-10-24", "2026年10月24日にお知らせいたしました", "@"),
        E("update", "2026-10-28", "2026/10/28", "@")
      ],
      causes: ["vendor"], causeText: "「ブラストメール」が第三者による不正アクセスを受け",
      certainty: "confirmed",
      dataNote: "10/24の第1報のURLは特定できず、officialUrlは同内容を含む第2報（2026/10/28）。対象は2026年10月14日配信分の宛先。"
    },
    "マネーフォワード（Studio経由）": {
      officialUrl: "https://corp.moneyforward.com/news/info/20261026-mf-press-1/",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日に、一部機能の脆弱性を悪用した", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日、「Studio」の提供元であるStudio社より", "@"),
        E("disclosed", "2026-10-26", "2026-10-26", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "社別件数のみで合計の記載なし。nは単一最大値（マネーフォワード採用サイト4,150件）。"
    },
    "楽天グループ（楽天トラベル）": {
      officialUrl: "https://travel.rakuten.co.jp/info/announce/20261026.html",
      events: [
        E("anomaly", "2026-09-10", "一部のページにおいて異常を検知しました", "@"),
        E("anomaly", "2026-10-20", "第三者による不正アクセスの可能性を検知しました", "@"),
        E("disclosed", "2026-10-26", "2026/10/26", "@")
      ],
      causes: [], causeText: null,
      dataNote: "公式発表は「不正アクセスの対象となった」という表現で、漏えいの確定・可能性のどちらとも書いていない。9/10の検知は海外ホテル予約ページ（事象①）、10/20の検知は多言語予約サイト（事象②）。多言語サイトの件数は本文の後半にあり取得範囲外。楽天グループは「楽天ドライブ」の件で既に掲載されている可能性あり（別サービス・別事案）。"
    },
    "朝日新聞社": {
      officialUrl: "https://www.asahi.com/corporate/info/16995713",
      events: [
        E("incident", "2026-10-16", "不正取得が行われたのは10月16日午後とみられています", "@"),
        E("vendor_notified", "2026-10-26", "データが外部に出力された形跡が確認されたとの連絡を26日に受けました", "@"),
        E("disclosed", "2026-10-26", "2026-10-26", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "取得できた公式ページは10月27日午後5時の追記版までで、件数は確認中とされていた。報道では10月29日に延べ70,921件（9割超はメールアドレスのみ）と公表されたとされるが、公式ページでは未確認のため n は空欄。"
    },
    "ヤクルト本社": {
      officialUrl: "https://www.yakult.co.jp/maintenance/",
      events: [
        E("access_confirmed", null, "当社ホームページにおいて不正アクセスが認められました", "@"),
        E("disclosed", "2026-10-26", "2026年10月26日（月）19:00", "@"),
        E("leak_confirmed", null, "外部に漏えいしたことを確認しました", "@"),
        E("update", "2026-10-30", "2026年10月30日（金）9:00", "@")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "第1報（10/26）と第2報（10/30）は同じメンテナンスページに掲載。10月26日にホームページの機能を停止。報道によると、10月24日に攻撃者を名乗る人物が犯罪フォーラムでデータ公開を主張していたが、公式発表には記載なし。"
    },
    "ドトールコーヒー": {
      officialUrl: "https://www.doutor.co.jp/news/newsrelease/detail/20261026144748.html",
      events: [
        E("anomaly", "2026-10-20", "2026年10月20日、当社システムへの不正アクセスを検知し", "@"),
        E("leak_possible", null, "外部へ流出した可能性があることを確認いたしました", "@"),
        E("disclosed", "2026-10-26", "2026.10.26", "@")
      ],
      causes: [], causeText: null,
      certainty: "possible",
      dataNote: "対象項目に銀行口座番号を含む。顧客情報への不正アクセスは確認されていない。"
    },
    "Gunosy": {
      officialUrl: "https://gunosy.co.jp/news/464",
      events: [
        E("incident", "2026-10-21", "2026年10月21日午後、第三者が不正に入手した当社の社内業務用アカウント", "@"),
        E("anomaly", "2026-10-21", "当社の監視システムにより検知しました", "@"),
        E("leak_confirmed", null, "氏名・メールアドレス等が流出したことが判明しました", "@"),
        E("disclosed", "2026-10-26", "2026.10.26", "@")
      ],
      causes: ["credential"], causeText: "社内業務用アカウントの認証情報（ID・パスワード）を用いてログイン",
      certainty: "confirmed",
      dataNote: "グノシー等のサービス利用者の情報流出は確認されていない。認証情報の入手経路は調査中。"
    },
    "静岡ガス（Webエネリア／ブラストメール）": {
      officialUrl: "https://www.shizuokagas.co.jp/news/documents/20261026_1.pdf",
      events: [
        E("vendor_notified", "2026-10-21", "2026 年 10 月 21 日、ラクスライトクラウド社から…報告を受けました", "@"),
        E("leak_confirmed", "2026-10-26", "2026 年 10 月 26 日 17 時に…外部に持ち出されたことが確認された」との報告", "@"),
        E("disclosed", "2026-10-26", "2026 年 10 月 26 日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "confirmed",
      dataNote: "漏えいはメールアドレスのみで、氏名・住所・電話番号・口座・カード・支払い情報は含まれない。同社グループのシステムへの影響はないとしている。"
    },
    "JR東海・JR西日本（エクスプレス予約・スマートEX）": {
      officialUrl: "https://www.westjr.co.jp/press/article/2026/10/26/items/261026_00_press_ex.pdf",
      events: [
        E("incident", "2026-10-16", "２０２６年１０月１６日（金）、同社が不正アクセスを受けた際", "@"),
        E("vendor_notified", "2026-10-26", "本日同社よりお客様の個人情報について、第三者に閲覧、または取得されたとの連絡", "@"),
        E("leak_confirmed", "2026-10-26", "第三者に閲覧、または取得されたとの連絡がありました", "@"),
        E("disclosed", "2026-10-26", "2026年10月26日", "@"),
        E("update", "2026-10-27", "2026/10/27", "https://smart-ex.jp/topics/detail/?id=889")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "confirmed",
      dataNote: "東海旅客鉄道・西日本旅客鉄道・九州旅客鉄道の3社連名の発表（JR九州は既収録のため本エントリはJR東海・JR西日本として収録）。PDFは「Cuenote FC」の名称は記さず「ユミルリンク株式会社が提供するメール配信サービス」、スマートEXの10/27掲載ページは「Cuenote FC」と明記。JR東海保有の予約システムからの漏えいは確認されていない。"
    },
    "毎日新聞社（ニュースレター・メールマガジン）": {
      officialUrl: "https://www.mainichi.co.jp/info/news/20261026.html",
      events: [
        E("vendor_notified", "2026-10-18", "10月18日にユミルリンク社から「不正アクセスを検知した」との連絡", "@"),
        E("vendor_notified", "2026-10-26", "「一部データが外部に不正に取得された可能性が高い」との連絡", "@"),
        E("leak_possible", "2026-10-26", "一部データが外部に不正に取得された可能性が高い", "@"),
        E("disclosed", "2026-10-26", "（2026.10.26）", "@"),
        E("leak_confirmed", "2026-10-27", "メールアドレス等の漏えいを確認（第2報）（2026.10.27）", "https://www.mainichi.co.jp/info/news/"),
        E("update", "2026-10-30", "個人情報漏えいの対象となる方の該当条件について（第4報）", "https://www.mainichi.co.jp/info/news/")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "confirmed",
      dataNote: "第1報は「可能性が高い」、お知らせ一覧の第2報（10/27）タイトルは「漏えいを確認」。報道（産経）は第2報で2,328件（長期コース契約者2,061件・企業法人向け267件）としているが、第2報本文は未取得のためnは空欄。10/21に一度配信を再開し、10/26に再停止、10/28に再開（第3報）。"
    },
    "アスマーク（アンケート配信・D style web）": {
      officialUrl: "https://www.asmarq.co.jp/news/external_service_20261026/",
      events: [
        E("incident", "2026-10-16", "2026年10月16日午後に登録データが外部へ出力された形跡", "@"),
        E("vendor_notified", "2026-10-26", "2026年10月26日、ユミルリンク株式会社より", "@"),
        E("leak_possible", "2026-10-26", "外部へ不正に取得された可能性が高い旨の連絡", "@"),
        E("disclosed", "2026-10-26", "2026年10月26日", "@")
      ],
      causes: ["vendor", "vuln", "credential"], causeText: "第三者はプログラムの脆弱性を利用して同社担当者の認証情報を取得し",
      certainty: "possible",
      dataNote: "原因はユミルリンク社発表の引用。モニターサイト「D style web」にも同旨の告知あり。"
    },
    "ソニーネットワークコミュニケーションズ（So-net）": {
      officialUrl: "https://www.sonynetwork.co.jp/corporation/release/2026/v5e5u00000000zwj-att/20261027.pdf",
      events: [
        E("incident", "2026-10-19", "So-net 会員データベースに対して外部から不正アクセスを受けました", "@"),
        E("access_confirmed", "2026-10-23", "同アクセスがあったことを確認しました", "@"),
        E("leak_confirmed", "2026-10-24", "不正アクセスにより個人情報の漏洩が認められ", "@"),
        E("disclosed", "2026-10-27", "2026 年 10 月 27 日", "@")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "原因は「第三者からの不正アクセス（調査中）」とのみ記載。plala（Sコース）会員分（443,495件）は別に集計されており、合算はしていない（報道では計258万5,481件とされる）。"
    },
    "バンダイナムコエンターテインメント・BANDAI SPIRITS（THE GUNDAM BASE MEMBERS）": {
      officialUrl: "https://www.bandainamcoid.com/portal/info?mode=detail&id=1221",
      events: [
        E("vendor_notified", "2026-10-26", "情報の取得の形跡があった旨の報告を受けました", "@"),
        E("leak_confirmed", null, "メールアドレスが漏えいしたことが判明いたしました", "@"),
        E("disclosed", "2026-10-27", "2026/10/27 21:00", "@")
      ],
      causes: ["vendor"], causeText: "委託先であるユミルリンク株式会社への不正アクセスが発生しました",
      certainty: "confirmed",
      dataNote: "漏えい項目はメールアドレスとバンダイナムコID管理用の内部識別子のみ。氏名・住所・購入履歴・パスワード・カード情報は含まれない。既掲載の「バンダイナムコエクスペリエンス」とは別の会社。"
    },
    "インプレス（DIGITAL X News）": {
      officialUrl: "https://www.impress.co.jp/newsrelease/2026/10/info20261027.html",
      events: [
        E("vendor_notified", null, "影響を受けている可能性があると同社より報告を受けました", "@"),
        E("disclosed", "2026-10-27", "2026.10.27", "@"),
        E("update", "2026-10-28", "漏えいの対象に含まれていると同社より報告を受けました", "https://www.impress.co.jp/newsrelease/2026/10/info20261028.html")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "confirmed",
      dataNote: "第一報では「漏えいした可能性」、第二報（10/28）で「DIGITAL X News」登録情報 約58,000件が漏えいの対象と特定された。certainty は第二報に基づく。"
    },
    "りそな銀行・埼玉りそな銀行・関西みらい銀行": {
      officialUrl: "https://www.resona-gr.co.jp/holdings/news/newsrelease_c/2026/files/20261027_1t.pdf",
      events: [
        E("vendor_notified", "2026-10-19", "同社のシステム内の情報が外部に持ち出されたとの報告を受けました", "@"),
        E("leak_possible", "2026-10-26", "情報が外部へ持ち出された可能性が高いことが判明しました", "@"),
        E("disclosed", "2026-10-27", "2026 年 10 月 27 日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "3行の連名発表。10月21日には「持ち出しはない」との報告を受けていたが、10月26日に判断が変わった。口座番号・暗証番号・パスワード・クレジットカード情報は対象外。"
    },
    "ダイハツ工業（ダイハツメディアサイト／ブラストメール）": {
      officialUrl: "https://www.daihatsu.com/jp/news/2026/20261027-1.html",
      events: [
        E("vendor_notified", null, "個人情報が外部へ漏えいしたとの報告を同社より受けました", "@"),
        E("disclosed", "2026-10-27", "2026年10月27日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "confirmed",
      dataNote: "対象情報は氏名・会社名・役職・メールアドレス。本文は「漏えいしたとの報告」、見出しは「漏えいの可能性がある個人情報」と表現が混在。メディアサイトは停止中で再開時期未定。"
    },
    "UPSIDER（Breakthrough GRID）": {
      officialUrl: "https://corp-news.up-sider.com/261027-pr-2/",
      events: [
        E("incident", "2026-10-27", "2026年10月27日(火)に第三者の不正アクセスがあり", "@"),
        E("leak_confirmed", "2026-10-27", "会員向けサービスサイトに保存されていた情報が持ち出されました", "@"),
        E("disclosed", "2026-10-27", "2026年10月27日", "@")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "対象は会員本人の氏名・メールアドレス、所属企業名・部署、イベント情報、ディスカッションの議事録など。法人カード「UPSIDER」等の会員・カード・決済情報システムへの影響はないとしている。同社は別事案として10/19にStudio経由の旧採用サイト問い合わせ情報の漏えいのおそれを公表（別要素で記録）。"
    },
    "資さん（資さんうどん 従業員・退職者／委託先カホエンタープライズ）": {
      officialUrl: "https://www.sukesanudon.com/news/news-8014/",
      events: [
        E("exposure", null, "従業員および退職者の皆様の個人情報が外部から閲覧可能となっていた可能性", "@"),
        E("disclosed", "2026-10-27", "2026年10月27日", "@")
      ],
      causes: ["config", "vendor"], causeText: "同サーバーの一部設定に不備があり",
      certainty: "possible",
      dataNote: "対象は2021年10月〜2026年10月に在籍実績のある従業員・退職者で、氏名・生年月日・性別・電話番号・賃金履歴・勤怠実績等（一部に入退社日・退職理由・社会保険加入履歴）。公式発表に件数記載なし（報道では約2万人）。委託先カホエンタープライズの同日付告知では、自主点検で設定不備を確認、第三者アクセスの有無は確認できないとしている（https://kaho-enterprise.co.jp/202610-01/）。"
    },
    "モスフードサービス（SNSキャンペーン）": {
      officialUrl: "https://www.mos.co.jp/company/pr_pdf/pr_261027_1.pdf",
      events: [
        E("incident", "2026-10-16", "2026 年 10 月 16 日（金）、スマートシェア社において…不正アクセスが発生", "@"),
        E("leak_confirmed", null, "外部から閲覧・ダウンロードされた形跡がある旨の報告をスマートシェア社より受けました", "@"),
        E("disclosed", "2026-10-27", "2026 年 10 月 27 日", "@")
      ],
      causes: ["vendor", "vuln"], causeText: "「OWNLY」のファイルアップロード機能の不備を侵入経路とした第三者による不正アクセス",
      certainty: "confirmed",
      dataNote: "漏洩情報はX/LINEのユーザー名・ユーザーID、エントリー日時、抽選・クーポン取得状況等。対象は3キャンペーン（モスのレシートチャレンジ2,995件、モスでハロウィンプレゼント11,001件、VALX×モスバーガーコラボ38件）。氏名・住所・電話・メール・カード情報は収集していない。new_c.jsonのモスカード（委託先経由のプリペイドカード情報流出）とは別事案。"
    },
    "スマートシェア（OWNLY）": {
      officialUrl: "https://www.smartshare.jp/news/20261027",
      events: [
        E("anomaly", "2026-10-16", "2026 年 10 月 16 日未明、…不正アクセスを監視システムが検知", "@"),
        E("leak_confirmed", null, "閲覧・ダウンロードされた形跡があることを確認しております", "@"),
        E("disclosed", "2026-10-27", "2026/10/27", "@")
      ],
      causes: ["vuln"], causeText: "OWNLY のファイルアップロード機能の不備を侵入経路とした不正アクセス",
      certainty: "confirmed",
      dataNote: "対象はモスフードサービスの3キャンペーンのみ（モス側エントリーと同一データ）で、それ以外のキャンペーンでは閲覧・取得の形跡は確認されていない。通知設定の不備で担当者の把握が検知より遅れたが同日中に侵入経路を遮断。10月21日に個人情報保護委員会等へ報告。"
    },
    "宣伝会議（メールマガジン）": {
      officialUrl: "https://prtimes.jp/main/html/rd/p/000000856.000002888.html",
      events: [
        E("vendor_notified", "2026-10-21", "ユミルリンクより「弊社のシステムは対象外」との回答を受領", "@"),
        E("vendor_notified", "2026-10-26", "2026年10月26日12時28分：訂正通知を受領", "@"),
        E("leak_possible", "2026-10-26", "宣伝会議のアドレス帳データが流出した可能性が高いと確認", "@"),
        E("disclosed", "2026-10-27", "2026年10月27日 16時00分", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "公式発表は同社のPR TIMESプレスリリース。経緯欄の「2026年10月16日：ユミルリンク社内にて不正アクセス検知」はベンダー側の検知日のため事象として記録していない。"
    },
    "MMDLabo（MMD研究所メールマガジン）": {
      officialUrl: "https://mmdlabo.jp/press_release/detail_2582.html", listedDate: "2026-10-27",
      events: [
        E("leak_confirmed", "2026-10-27", "以下の個人情報が漏洩したことが確認されました", "@"),
        E("update", "2026-10-27", "2026年10月27日 追記", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "confirmed",
      dataNote: "初報の掲載日（10/21または10/26）の読み取りが一致しないためdisclosedは省略。当初は「可能性」、10/27追記で漏洩確認。WebSearch結果から直接公式ページに到達したためnews欄は空。"
    },
    "アララ（アララメッセージ）": {
      officialUrl: "https://am.arara.com/news/2026102801",
      events: [
        E("access_confirmed", null, "第三者による不正アクセスが発生していることを確認いたしました", "@"),
        E("disclosed", "2026-10-28", "2026年10月28日", "@"),
        E("leak_confirmed", "2026-10-28", "第三者による不正アクセスに伴う個人情報の流出が確認されました", "https://am.arara.com/news/2026102802")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "第一報（サービス停止）の時点では「情報漏えいの事実は確認されておりません」とし、同日付の続報で約301万件の流出を公表。原因（Webサーバーの脆弱性）は親会社ペイクラウドHDの10/29適時開示で公表と報じられているが、本調査では未確認。利用企業（鹿児島銀行などのPayどん等）にも波及。"
    },
    "ソニー生命保険（お客さまWEBサービス）": {
      officialUrl: "https://www.sonylife.co.jp/info/popup/261028_oshirase.pdf",
      events: [
        E("access_confirmed", "2026-10-27", "不正にアクセスされたことが、2026 年 10 月 27 日 （火）に判明", "https://www.sonylife.co.jp/info/popup/261028_oshirase2.pdf"),
        E("disclosed", "2026-10-28", "2026 年 10 月 28 日", "@"),
        E("leak_confirmed", null, "お客さま情報が漏えいしたことが判明しました", "https://www.sonylife.co.jp/info/popup/261028_oshirase2.pdf")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "同日付で、サービスの一時停止の告知（漏えいへの言及なし）と、不正アクセス・情報漏えいのお詫びの2本のPDFを掲載。officialUrlは前者、詳細は後者による。マイナンバー、クレジットカード、保険料振替口座の情報は含まれない。"
    },
    "ライフカード": {
      officialUrl: "https://www.lifecard.co.jp/info/important-notice.html",
      events: [
        E("vendor_notified", "2026-10-26", "外部に漏えいした可能性がある旨の連絡を受けました", "@"),
        E("disclosed", "2026-10-28", "2026年10月28日", "@")
      ],
      causes: ["vendor"], causeText: "「Cuenote FC」において第三者による不正アクセスが発生し",
      certainty: "possible",
      dataNote: "ライフカードが管理するカード会員情報システムへの不正アクセスは確認されていない。件数は人数ではなく契約数。"
    },
    "日本航空・日本トランスオーシャン航空（JAL・JTA）": {
      officialUrl: "https://www.jal.co.jp/ja-jp/news/general/2026/other/261028.html",
      events: [
        E("vendor_notified", "2026-10-23", "Amadeus IT Group, S.A.社から報告を受けた", "@"),
        E("access_confirmed", null, "予約情報の一部が外部から参照された形跡がある", "@"),
        E("disclosed", "2026-10-28", "2026年10月28日", "@")
      ],
      causes: ["vendor"], causeText: null,
      dataNote: "JAL公式ページは直接取得できず（403）、検索エンジンが表示した同ページの抜粋で内容と日付を確認。そのためrawの文言は抜粋からとっており、原文と細部が異なる可能性がある。参照された形跡の期間は2023年8月10日〜2026年9月23日。クレジットカード番号とパスワードは対象外。ANAも同じ委託先の件を10月29〜30日に公表しているが、公式ページを確認できず未収録。"
    },
    "クレディセゾン（トク買）": {
      officialUrl: "https://www.saisoncard.co.jp/customer-support/information/20261028",
      events: [
        E("incident", "2026-10-14", "2026 年 10 月 14 日から 10 月 20 日にかけて", "@"),
        E("access_confirmed", "2026-10-21", "10 月 21 日に本件が判明したことを受け", "@"),
        E("disclosed", "2026-10-28", "2026 年 10 月 28 日", "@"),
        E("update", "2026-10-28", "一部の会員様の個人情報が漏えいしたことが 確認されました", "https://corp.benefit-one.co.jp/company/news/news/2026/20261028/20261028.pdf")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "confirmed",
      dataNote: "ベネフィット・ワンも同日にお知らせを公表（同社は9/30に別サービスの漏えいを公表済みのため、本件はカード発行元のクレディセゾンを主体として収録）。決済システムとの連携に使う認証関連情報の一部も漏えいしたおそれがあるが、10/26に変更済み。クレジットカード情報は対象外。"
    },
    "ドン・キホーテほか（時計修理委託先コックス）": {
      officialUrl: "https://www.donki.com/updata/news/info_84zw5.pdf",
      events: [
        E("vendor_notified", "2026-09-25", "2026 年 9 月 25 日に委託先より報告がございました", "@"),
        E("disclosed", "2026-10-28", "2026 年 10 月 28 日", "@")
      ],
      causes: ["ransomware", "vendor"], causeText: "サーバ内がランサムウェアにより暗号化され",
      certainty: "possible",
      dataNote: "公表はドン・キホーテ、長崎屋、橘百貨店、UDリテールの連名。対象は2025年9月以降にグループ店舗で時計修理を依頼した顧客。委託先は2026年9月15日に攻撃を検知（委託先側の日付のため events には入れていない）。PPIHグループは2025年10月10日にも別の委託先（アクリーティブ）のランサムウェア被害を公表しているが、別の事案。"
    },
    "ゲームトレード": {
      officialUrl: "https://gametrade.jp/official_notifications/283",
      events: [
        E("anomaly", "2026-10-27", "不正アクセスを検知。直ちに当該アクセスの遮断", "@"),
        E("access_confirmed", "2026-10-27", "同日、不正アクセスが行われたことを確認。", "@"),
        E("leak_possible", "2026-10-28", "お客様情報の一部が漏えいした可能性があることが判明", "@"),
        E("disclosed", "2026-10-28", "2026/10/28", "@")
      ],
      causes: [], causeText: null,
      certainty: "possible",
      dataNote: "第2報・第3報が出ているが本調査では未確認。漏えいの可能性がある項目にはハッシュ化されたパスワードを含む。"
    },
    "九州大学（校友会メール配信・QLIFICA）": {
      officialUrl: "https://www.kyushu-u.ac.jp/ja/notices/view/3198/",
      events: [
        E("leak_confirmed", null, "漏えいが確認された旨の報告を受けています", "@"),
        E("leak_possible", null, "本学職員9名の利用者アカウント情報について、漏えいのおそれ", "@"),
        E("disclosed", "2026-10-28", "令和8年10月28日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "confirmed",
      dataNote: "外部サービス2件の別々の事案。certainty はブラストメール側（漏えい確認）に基づき、QLIFICA側は漏えいのおそれ。9,999件は登録件数の上限で漏えい件数ではないため n は空欄。校友会サイトではこの公表より前に注意喚起を出したとされるが、その日付は記載がない。"
    },
    "Creema（メールマガジン／ブラストメール）": {
      officialUrl: "https://www.creema.co.jp/news/552/", listedDate: "2026-10-28",
      events: [
        E("vendor_notified", "2026-10-25", "10月25日…一部のメールアドレスが流出していたことが判明したとの報告", "@"),
        E("disclosed", null, "10月23日…その旨を公表しました", "@"),
        E("update", "2026-10-28", "2026.10.28 お知らせ", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "confirmed",
      dataNote: "対象は2026年7月8日〜10月2日にメールマガジンが配信された顧客の一部で、流出情報はメールアドレスのみ。10/28付お知らせの経緯欄によれば10/23（流出未確認の旨）と10/25（流出判明の旨）にも公表しているが、それらの告知ページは確認できなかったため、officialUrlは確認できた10/28付のもの。10月21〜22日のPHP脆弱性対応の緊急メンテナンスとは別事案としている。"
    },
    "ペルソナ（エイチ・ツー・オー リテイリング子会社／Cuenote FC）": {
      officialUrl: "https://www.h2o-retailing.co.jp/ja/news/news3907232089918425776/main/0/link/PERSONA_20261028.pdf",
      events: [
        E("vendor_notified", "2026-10-18", "2026 年 10 月 18 日（日）にユミルリンク社から「不正アクセスを検知した」との連絡", "@"),
        E("leak_possible", "2026-10-26", "10 月 26 日（月）に…「一部データが外部に不正取得された可能性が高い」との連絡", "@"),
        E("disclosed", "2026-10-28", "2026 年 10 月 28 日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "対象は2024年11月〜2026年2月入会の会員のうちメール受信者のメールアドレスのみ。10/20に「漏えいは確認されていない」との連絡を受け配信を再開したが、10/26の連絡で再停止。阪急阪神百貨店（H2O ID）の不正アクセス事案（new_b.json）とは別。"
    },
    "Rise UP（カラコン通販「モアコンタクト」）": {
      officialUrl: "https://r-up.jp/news/2026-10-28-cuenote-fc/",
      events: [
        E("vendor_notified", "2026-10-26", "2026年10月26日、ユミルリンク社より", "@"),
        E("leak_confirmed", "2026-10-26", "お客さま情報が外部に流出したとの報告を受けました", "@"),
        E("disclosed", "2026-10-28", "2026年10月28日", "@")
      ],
      causes: ["vendor", "vuln"], causeText: "プログラムの脆弱性を突かれ、複数の利用企業の環境からデータが外部に流出したもの",
      certainty: "confirmed",
      dataNote: "件数は延べ件数で人数ではない。氏名・住所・電話番号・カード情報・パスワードはCuenote FCに預けておらず流出なしとしている。原因の記述はユミルリンク社の報告の引用。WebSearch結果から直接公式ページに到達したためnews欄は空。"
    },
    "アニメイト（アニメイト通販・ポケドラのメールマガジン）": {
      officialUrl: "https://www.animate.co.jp/en/news/53375/",
      events: [
        E("vendor_notified", "2026-10-20", "2026年10月20日、ユミルリンク株式会社より", "@"),
        E("vendor_notified", "2026-10-27", "2026年10月27日、ユミルリンク株式会社よりお客様の個人情報について", "@"),
        E("leak_confirmed", null, "当社のお客様に関する個人情報が漏えいしたことを確認いたしました", "@"),
        E("disclosed", "2026-10-28", "2026.10.28", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "confirmed",
      dataNote: "10/20時点では影響なしとの報告だったが、10/27に第三者に閲覧・取得されたとの連絡。氏名・住所・電話番号・カード情報・パスワードは漏えいしていない。"
    },
    "鹿児島銀行・南日本銀行・鹿児島相互信用金庫・鹿児島信用金庫（Payどん）": {
      officialUrl: "https://www.kagin.co.jp/important/emergency_20261029_3.html",
      events: [
        E("access_confirmed", "2026-10-28", "アララ株式会社に不正アクセスが発生していることを確認しました", "@"),
        E("leak_possible", null, "外部に漏えいした可能性があることが判明しております", "@"),
        E("disclosed", "2026-10-28", "2026年10月28日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "4行庫連名。ページURLは20261029だが印字日は2026年10月28日。南日本銀行も10/29付PDFを掲載（https://nangin.jp/information/contents/RELEASE_20261029_paydon.pdf）。同日17時23分にアララがメール通知機能と新規登録を停止。"
    },
    "カンム（バンドルカード）": {
      officialUrl: "https://kanmu.co.jp/news/20261029-corporate-announcement/",
      events: [
        E("incident", "2019-11-22", "2019年11月22日から2026年10月22日までの期間", "@"),
        E("disclosed", "2026-10-29", "2026.10.29", "@")
      ],
      causes: ["human"], causeText: "委託先サービスへ情報を送信するためのプログラムに不備があり",
      dataNote: "不正アクセスによるものではなく、委託先（分析サービス）への誤送信。会社は送信先から第三者への流出は確認されていないとしている。人数は公式ページ内の表（画像）にあり、テキストでは取得できなかったため報道の転記値で確認。サポートサイト側の期間は2017年11月21日から。"
    },
    "NEL（osina）": {
      officialUrl: "https://www.nel-all.com/news/632/",
      events: [
        E("access_confirmed", "2026-10-14", "本件は2026年10月14日に発見しました", "@"),
        E("leak_confirmed", null, "個人情報が外部に流出したことを確認しました", "@"),
        E("disclosed", "2026-10-29", "【2026年10月29日】", "@")
      ],
      causes: ["vuln"], causeText: "当社が利用していたデータ分析ツールの脆弱性を悪用した不正アクセス",
      certainty: "confirmed",
      dataNote: "osina会員の銀行口座情報、SNS連携用の認証情報も対象。データ分析ツールの製品名は記載なし。"
    },
    "グッズ（旧通販サイトgoods-co.net）": {
      officialUrl: "https://www.goods-co.net/blogs/news/security-incident-20261029",
      events: [
        E("anomaly", "2026-10-22", "外部から不正なプログラムが置かれていることが判明しました", "@"),
        E("leak_possible", null, "外部に漏えいした可能性があることが判明しました", "@"),
        E("disclosed", "2026-10-29", "2026年10月29日", "@")
      ],
      causes: [], causeText: null,
      certainty: "possible",
      dataNote: "10月23日から「緊急メンテナンス」としてサイトを停止していた。旧サイトのログインパスワード（変換した形で保存）も対象。クレジットカード情報は預かっていない。"
    },
    "クラブネッツ（CNポイント サテライトシステム）": {
      officialUrl: "https://www.clubnets.jp/infos/id/221",
      events: [
        E("access_confirmed", null, "サテライトシステムに対して外部からの不正アクセスが確認され", "@"),
        E("disclosed", "2026-10-29", "2026年10月29日", "@")
      ],
      causes: [], causeText: null,
      certainty: "possible",
      dataNote: "16,936件と2,857件は異なる会員DBに基づくユニーク件数で、合算値は公表されていない。パスワード流出は確認されていない。CNエクスチェンジ・CNコンテンツ・CNモニターを10月29日に停止、CNポイント本体は稼働継続。"
    },
    "アイリスプラザ（アイリスオーヤマ公式通販）": {
      officialUrl: "https://www.irisohyama.co.jp/news/2026/?date=1029",
      events: [
        E("access_confirmed", null, "ECサイトにおいて不正アクセスを確認いたしました", "@"),
        E("disclosed", "2026-10-29", "掲載日：2026年10月29日", "@")
      ],
      causes: [], causeText: null,
      dataNote: "現時点でクレジットカード情報の漏えいは確認されておらず、その他の情報は調査中。個人情報の漏えいの有無・件数は未公表。"
    },
    "良品計画（MUJIアプリ）": {
      officialUrl: "https://prtimes.jp/main/html/rd/p/000001877.000000987.html",
      events: [
        E("anomaly", null, "外部からの不正なアクセスを検知し", "@"),
        E("leak_possible", null, "外部に流出した可能性があることを確認しました", "@"),
        E("disclosed", "2026-10-30", "2026年10月30日 14時10分", "@")
      ],
      causes: [], causeText: null,
      certainty: "possible",
      dataNote: "良品計画の自社サイト（ryohin-keikaku.jp/news/articles/2026_1030_01）はブラウザ認証のため取得できず、同社がPR TIMESで配信した同日付リリースで内容を確認。氏名・住所・電話番号・クレジットカード情報は対象外とされる。"
    },
    "松屋フーズホールディングス（松屋公式アプリ）": {
      officialUrl: "https://www.matsuyafoods.co.jp/", listedDate: "2026-10-30",
      events: [
        E("anomaly", null, "現在、外部からの不正アクセスが検知されたため", "@"),
        E("leak_confirmed", "2026-10-28", "アプリに登録されている会員情報等が漏えいしたことが判明しました", "https://www.release.tdnet.info/inbs/140120261030561172.pdf"),
        E("update", "2026-10-30", "令和８年 10 月 30 日", "https://www.release.tdnet.info/inbs/140120261030561172.pdf")
      ],
      causes: [], causeText: null,
      certainty: "confirmed",
      dataNote: "最初の公式告知は松屋フーズ公式サイト上の「松屋アプリ等のサービス停止のお知らせ」で、ページに日付の記載がないため disclosed は記録していない（報道では10月29日の公表とされる）。件数は10/30の適時開示による。2区分の件数は別集計で、合算しない。"
    },
    "ワールド（子会社ティンパンアレイ／RAGTAG等）": {
      officialUrl: "https://www.release.tdnet.info/inbs/140120261030560364.pdf",
      events: [
        E("incident", "2026-10-17", "業務サーバーに対する不正アクセスが行われ", "@"),
        E("anomaly", "2026-10-28", "10月28日（水）12時08分頃、不正な操作を検知し", "@"),
        E("leak_possible", null, "外部へ流出した可能性があることが判明いたしました", "@"),
        E("disclosed", "2026-10-30", "2026年10月30日", "@")
      ],
      causes: [], causeText: null,
      certainty: "possible",
      dataNote: "不正アクセスは10月17日14時51分頃。延べ件数で、対象会員と件数の詳細は確認中とされる。クレジットカード等の決済情報と顔情報の流出は確認されていない。"
    },
    "日本製薬団体連合会ほか製薬4団体（PRAISE-NET）": {
      officialUrl: "https://www.jpma.or.jp/news_room/release/2026/261030.html",
      events: [
        E("vendor_notified", "2026-10-19", "不正アクセスの対象に含まれていないとの説明を受けていました", "@"),
        E("vendor_notified", "2026-10-26", "外部に漏えいした可能性があるとの報告を受けました", "@"),
        E("disclosed", "2026-10-30", "2026年10月30日", "@")
      ],
      causes: ["vendor"], causeText: "ユミルリンク株式会社（以下「ユミルリンク社」）において不正アクセスが発生し",
      certainty: "possible",
      dataNote: "公表は日本製薬団体連合会、日本製薬工業協会、東京医薬品工業協会、関西医薬品協会の連名。PRAISE-NET本体への不正アクセスではない。10/19の報告では対象外とされていた。"
    },
    "東急不動産（GREEN CROSS PARK公式サイトほか）": {
      officialUrl: "https://www.tokyu-land.co.jp/news/uploads/4e81382e895fcd779559705843fcb56f83846c28.pdf",
      events: [
        E("access_confirmed", "2026-10-19", "不正アクセスの発覚後、直ちに該当ウェブサイトを遮断し", "@"),
        E("leak_possible", null, "流出の可能性を否定できないものとして", "@"),
        E("disclosed", "2026-10-30", "2026 年 10 月 30 日", "@")
      ],
      causes: ["vuln", "config"], causeText: "ソフトウェア脆弱性およびサーバー内のアクセス権限設定不備を突いた第三者による攻撃",
      certainty: "possible",
      dataNote: "2サイト分の件数は別々に記載されている（合計4,082件は報道による合算）。"
    },
    "全日本空輸（ANA／Amadeus旅客サービスシステム）": {
      officialUrl: "https://www.ana.co.jp/ja/jp/special-notice/001612.html",
      events: [
        E("access_confirmed", null, "予約情報の一部が参照された形跡があるとの報告を受けました", "@"),
        E("disclosed", "2026-10-30", "2026年10月30日", "@")
      ],
      causes: ["vendor"], causeText: null,
      dataNote: "対象は2023年8月10日〜2026年9月23日にANAへ予約した一部顧客。約36,100名は氏名・予約番号・搭乗日・区間・クラス、約1,700名はこれに加えメールアドレス・電話番号・パスポート番号・国籍・マイレージ番号・航空券番号等。カード情報・パスワードは含まれない。「参照された形跡」とし漏えい確定・可能性のいずれとも明記していないためcertaintyはnull。同じAmadeus事案のJAL・JTAはnew_d.jsonに記録済み。"
    },
    "バリューコマース": {
      officialUrl: "https://www.valuecommerce.co.jp/news/c_news/6819/", listedDate: "2026-10-30",
      events: [
        E("incident", "2026-10-16", "2026年10月16日に、弊社が利用する環境からアドレス帳データが外部へ不正に出力", "@"),
        E("leak_possible", null, "外部に流出した可能性が高いことが判明いたしました", "@"),
        E("update", "2026-10-30", "【2026年10月30日 追記】調査状況について", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "初回掲載日は取得本文に印字がないためdisclosedは省略。nは延べ件数（重複除き6,096件）。"
    }
  };

  Object.values(T).forEach(t => t.events.forEach(e => { if (e.src === "@") e.src = t.officialUrl; }));
  root.TIMELINES = T;
})(typeof window !== "undefined" ? window : globalThis);
