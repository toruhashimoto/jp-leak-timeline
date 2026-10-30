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
        E("update", "2026-10-09", "（第2報）本日10月9日より一部の入出荷業務を再開", "https://www.nissui.co.jp/news/20261009.html"),
        E("update", "2026-10-14", "日水物流株式会社におけるシステム障害について（第3報）2026年10月14日", "https://www.nissui.co.jp/news/20261014.html"),
        E("update", "2026-10-20", "（第4報）本日10月20日、日水物流の全17拠点において通常の入出荷業務に移行", "https://www.nissui.co.jp/news/20261020.html")
      ],
      causes: ["vendor"], causeText: "委託先である株式会社IDCフロンティアが第三者による不正アクセスを受けたことに伴い",
      dataNote: "システム障害の発表です。第2報で、被害を受けたサーバーに個人情報や顧客情報は含まれないと確認したとしています。発生日はシステム障害の発生日です。10月14日の第3報でも、被害を受けたサーバーにニッスイグループが管理する個人情報や顧客情報は含まれないとしています。10月20日の第4報で、全17拠点が通常の入出荷業務に移行したとしています。"
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
        E("disclosed", "2026-10-09", "2026年10月9日 九州旅客鉄道株式会社", "@"),
        E("update", "2026-10-15", "（続報）…漏えいの事実は確認されませんでした", "https://www.jrkyushu.co.jp/common/inc/news/newtopics/__icsFiles/afieldfile/2026/10/15/202691015_mail_address_access.pdf")
      ],
      causes: ["vendor"], causeText: "IDCフロンティア社で発生した不正アクセスに伴い、お客さまの電子メールアドレスが漏えいした可能性",
      dataNote: "10月15日の続報で、IDCフロンティアの調査の結果、JR九州Web会員約130万件の電子メールアドレスについて漏えいの事実は確認されなかったとの報告を受けたとしています。"
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
        E("update", "2026-10-09", "第一報から新たに確認された事実はございません", "https://www.future-shop.jp/news/2026/10/09.html"),
        E("update", "2026-10-15", "【重要・第三報】…メール配信データの外部への流出はなかったものと判断", "https://www.future-shop.jp/news/2026/10/15-2.html")
      ],
      causes: ["vendor"], causeText: "第三者によるランサムウェア攻撃が発生した旨の公表",
      dataNote: "宛先メールアドレスや本文中の氏名・誕生日などが対象基盤上にあり、流出の有無を含めて調査中としています。10月15日の第三報で、IDCフロンティアの調査結果（10月14日）に基づき、「future Scenario Cast」「futureCartRecovery」で預かっていたメール配信データの外部流出はなかったものと判断したとしています。"
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
        E("disclosed", "2026-10-14", "2026.10.14", "@"),
        E("update", "2026-10-16", "【第2報】…「メールアドレスの漏えいはなかった」旨の報告を受けております", "https://www.peachjohn.co.jp/information/detail/138"),
        E("update", "2026-10-26", "メールマガジン配信再開のお知らせ 2026.10.26", "https://www.peachjohn.co.jp/information/detail/139")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "対象はメールアドレスのみ（氏名・住所・電話番号・カード番号は当該配信サービスで不使用）。メールマガジン配信は停止。10月16日の第2報で、サービス提供事業者とセキュリティ専門会社の調査の結果「メールアドレスの漏えいはなかった」との報告を受けたとしています。10月26日には配信システムを変更してメールマガジンの配信を再開しました。"
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
        E("disclosed", "2026-10-19", "2026年10月19日に掲載した内容に補足説明を追記", "@"),
        E("access_confirmed", "2026-10-25", "新たに42システムに不正アクセス、データ出力記録があることを確認", "https://www.ymir.co.jp/info/ymir-information20261027.html"),
        E("update", "2026-10-26", "当社システムへの不正なアクセスに関するご報告（第二報）", "https://www.ymir.co.jp/info/ymir-information20261027.html")
      ],
      causes: ["vuln", "credential"], causeText: "ライブラリの脆弱性により、49システムで情報漏洩が発生",
      certainty: "confirmed",
      dataNote: "公式ページは第一報の2026年10月19日19:05更新版。件数は「延べ」の試算値で人数ではない。後日の続報で件数が更新されたとの報道あり（未検証）。2026年10月26日の第二報で、漏えい確認システムがCuenote FC 49システム（延べ51,628,280件）とCuenote BASE 1システム（契約者情報190件）の計50システムに拡大。16システムは件数調査中で増加の可能性あり。攻撃者は脆弱性を突いてサポート・品質管理担当者の認証情報やログインセッション情報を取得し不正ログインしたと記載。cuenote.jpの最新情報ページは2026.10.26 17時更新が最新（10/30時点で第三報なし）。",
      count: "51,628,280件（延べ件数）／Cuenote FC 49システム（ほかCuenote BASE契約者情報190件）",
      n: 51628280
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
        E("disclosed", "2026-10-26", "2026-10-26", "@"),
        E("update", "2026-10-27", "(10月27日午後5時追記あり)", "@"),
        E("update", "2026-10-29", "外部に流出したおそれがある情報は延べ7万921件であることが判明", "https://www.asahi.com/corporate/info/17004624")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "取得できた公式ページは10月27日午後5時の追記版までで、件数は確認中とされていた。報道では10月29日に延べ70,921件（9割超はメールアドレスのみ）と公表されたとされるが、公式ページでは未確認のため n は空欄。10月29日付の続報で、流出したおそれのある情報が延べ7万921件と判明（9割超はメールアドレスのみ、一部に氏名・学校名等）。対象者には個別連絡。",
      count: "延べ7万921件",
      n: 70921
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
        E("disclosed", "2026-10-28", "2026.10.28", "@"),
        E("update", "2026-10-30", "対象者および対象件数の特定ならびに漏えい情報の訂正について", "https://www.animate.co.jp/news/53522/")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "confirmed",
      dataNote: "10/20時点では影響なしとの報告だったが、10/27に第三者に閲覧・取得されたとの連絡。氏名・住所・電話番号・カード情報・パスワードは漏えいしていない。10月30日の続報で対象件数140,443件を特定。漏えい項目は第一報の「メールアドレス、性別、都道府県、会員コード」から「メールアドレスのみ」に訂正され、対象も一部のアニメイト通販メルマガ登録者（10/14〜10/16配信分）とポケドラのキャンペーン応募者に訂正。11月2日から個別連絡予定。",
      count: "140,443件",
      n: 140443
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
    },

    // ---- 2026-10-31 追加分（Studio・blastmail の利用組織） ----
    "ジュン（メールマガジン）": {
      officialUrl: "https://www.jun.co.jp/news/1/",
      events: [
        E("incident", "2026-10-07", "2026年10月7日（水）、…クラウド基盤…において、システム障害が発生", "@"),
        E("disclosed", "2026-10-08", "（第1報）…2026.10.08", "@"),
        E("update", "2026-10-13", "（第2報）…現在のところ外部への流出は確認されておりません", "https://www.jun.co.jp/news/2/"),
        E("update", "2026-10-14", "（第3報）…メールアドレスの外部への流出はなかったものと判断", "https://www.jun.co.jp/news/3_1/")
      ],
      causes: ["vendor"], causeText: "同クラウド基盤への第三者による不正アクセスが原因との報告",
      dataNote: "第1報で、障害が発生したクラウド基盤に顧客のメールアドレスの一部が保管されていたとし、「外部に流出した可能性も考えられる」として調査中としていました。10月14日の第3報で、IDCフロンティアの調査結果と委託先の報告を踏まえ、流出はなかったものと判断したとしています。"
    },
    "日本ICTテレコムユーザー協会（eラーニング）": {
      officialUrl: "https://www.jtua.or.jp/jtua_news/44237/",
      events: [
        E("leak_possible", null, "eラーニング受講者のメールアドレス等の漏えいの可能性について", "@"),
        E("disclosed", "2026-10-09", "公開日：2026/10/09", "@"),
        E("update", "2026-10-16", "【終報】…過去受講者のメールアドレスは、流出のおそれがないことが確認", "https://www.jtua.or.jp/jtua_news/44310/")
      ],
      causes: ["vendor"], causeText: "弊社の業務委託先IDCFrontier社のクラウドサービスの一部のシステムに対する第三者からの不正アクセス",
      dataNote: "初報では個人情報の漏えいは「確認中」で、主な対象は申込時のメールアドレスとしていました。10月16日の終報で、IDCフロンティアの第5報を受け、過去受講者のメールアドレスは流出のおそれがないことが確認できたとしています。"
    },
    "レック（ラヴィ・ファクトリー）": {
      officialUrl: "https://www.lecg.co.jp/news/1731/",
      events: [
        E("leak_possible", null, "外部への流出の可能性を否定できない状況となっております", "@"),
        E("disclosed", "2026-10-12", "2026.10.12 当社利用クラウドサービスへの不正アクセスに関するお知らせ", "@"),
        E("update", "2026-10-16", "【続報】…対象となる情報の範囲について", "https://www.lecg.co.jp/news/1758/")
      ],
      causes: ["vendor"], causeText: "「IDCFクラウド」において、第三者によるランサムウェア攻撃が発生",
      certainty: "possible",
      dataNote: "10月16日の続報で対象情報を、名前またはご両家名、挙式日・挙式場名、2026年8月以降にアップロードした制作用画像データ、工場から直送した顧客の届け先（受取人名・郵便番号・住所・電話番号）と特定。IDCフロンティアが外部へのデータ流出はなかったと判断した旨を紹介していますが、レック自身の結論は書かれていません。2026年10月14日に個人情報保護委員会へ報告済み。"
    },
    "栗山町（防災情報メール）": {
      officialUrl: "https://www.town.kuriyama.hokkaido.jp/soshiki/28/38097.html",
      events: [
        E("disclosed", "2026-10-13", "更新日：2026年10月13日更新", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセス",
      certainty: "possible",
      dataNote: "公表日の記載がなく、ページの更新日を disclosed として記録。"
    },
    "斜里町（ほっとメールしゃり）": {
      officialUrl: "https://www.town.shari.hokkaido.jp/kurashinojoho/bosai_kishojoho/4366.html",
      events: [
        E("disclosed", "2026-10-13", "第1報・10月13日発出", "@"),
        E("update", "2026-10-14", "第2報・10月14日発出", "@"),
        E("update", "2026-10-15", "第3報・10月15日発出", "@")
      ],
      causes: ["vendor"], causeText: "配信システムへの不正アクセス事案",
      certainty: "possible",
      dataNote: "斜里町の利用者の漏えい有無・件数は未確認と記載。第1報本文に令和8年10月13日の記載あり。"
    },
    "沼田町（メールぬまた）": {
      officialUrl: "https://www.town.numata.hokkaido.jp/section/soumu/c77jgl0000001lxt.html",
      events: [
        E("disclosed", "2026-10-13", "最終更新日：2026年10月13日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "公表日の記載がなく、ページの更新日を disclosed として記録。"
    },
    "宮崎県（防災・防犯情報メールサービス）": {
      officialUrl: "https://www.pref.miyazaki.lg.jp/kiki-kikikanri/press/2026/10/20261013181842.html",
      events: [
        E("leak_possible", "2026-10-13", "メールアドレス等が漏えいした可能性があることが、本日判明", "@"),
        E("disclosed", "2026-10-13", "報道発表日：2026年10月13日", "@")
      ],
      causes: ["vendor"], causeText: "同システムに対して第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "38,959件は登録件数（漏えいの有無・範囲は確認中）。「本日判明」は報道発表日（10月13日）を指す。"
    },
    "宮崎市（防災情報配信システム）": {
      officialUrl: "https://www.city.miyazaki.miyazaki.jp/life/fire_department/news/418334.html",
      events: [
        E("disclosed", "2026-10-13", "【第1報】…（令和8年10月13日）", "@"),
        E("update", "2026-10-14", "【第2報】…（令和8年10月14日）", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスにより個人情報が漏洩した可能性",
      certainty: "possible",
      dataNote: "第1報・第2報とも同一ページに掲載。漏洩の有無・範囲は事業者が調査中。"
    },
    "さつま町（安全安心メール）": {
      officialUrl: "https://www.satsuma-net.jp/info_taisetu/10321.html",
      events: [
        E("disclosed", "2026-10-13", "更新日：2026年10月13日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスにより、登録者の皆様の個人情報が漏洩した可能性",
      certainty: "possible",
      dataNote: "日付は更新日のみ。"
    },
    "糸満市（防災メール）": {
      officialUrl: "https://www.city.itoman.lg.jp/soshiki/5/40278.html",
      events: [
        E("disclosed", "2026-10-13", "更新日：2026年10月13日更新", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセス",
      certainty: "possible",
      dataNote: "10月11日16時30分は運営会社側の不審な挙動の発生時刻。日付は更新日のみ（タイトルに【更新】）。"
    },
    "倶知安町（防災メール）": {
      officialUrl: "https://www.town.kutchan.hokkaido.jp/Living_Information/bouhan-bousai-syobo/bousai_info/5808/",
      events: [
        E("disclosed", "2026-10-13", "登録情報の流出について（R8.10.13)", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」）のサーバーが不正アクセスを受けました",
      certainty: "possible",
      dataNote: "本文に日付記載なし。タイトル末尾の「（R8.10.13)」をdisclosedとした。"
    },
    "富谷市（安全安心メール）": {
      officialUrl: "https://www.tomiya-city.miyagi.jp/information/2026/10/3b9ac2a8f423dcba24a3ac3de956a57cfb0b99ad.html",
      events: [
        E("disclosed", "2026-10-13", "更新日：2026年10月13日", "@")
      ],
      causes: ["vendor"], causeText: "委託先事業者（…SpeeCAN RAIDEN）が不正アクセスを受けたことによります",
      certainty: "possible",
      dataNote: "更新日のみ記載のため更新日をdisclosedとした。"
    },
    "北塩原村（きたしおばら防災無線メール）": {
      officialUrl: "https://www.vill.kitashiobara.fukushima.jp/soshiki/somukikaku/10096.html",
      events: [
        E("disclosed", "2026-10-13", "更新日：2026年10月13日更新", "@")
      ],
      causes: ["vendor"], causeText: "同社システムに対し、第三者による不正アクセス事案が発生し",
      certainty: "possible",
      dataNote: "更新日のみ記載のため更新日をdisclosedとした。漏洩可能性のある情報の種別は記載なし。"
    },
    "棚倉町（登録制メール）": {
      officialUrl: "https://www.town.tanagura.fukushima.jp/jumin/bousai-saigaiinfo/bousai-info/page001132.html",
      events: [
        E("disclosed", "2026-10-13", "【更新日】2026年10月13日", "@")
      ],
      causes: ["vendor"], causeText: "運営会社（株式会社アルカディア）が第三者による不正アクセスを受けた",
      certainty: "possible",
      dataNote: "更新日のみ記載のため更新日をdisclosedとした。"
    },
    "福島県立ふたば未来学園中学校・高等学校": {
      officialUrl: "https://futabamiraigakuen-h.fcs.ed.jp/plugin/blogs/show/1/3/5615",
      events: [
        E("disclosed", "2026-10-13", "2026年10月13日 13時27分", "@")
      ],
      causes: ["vendor"], causeText: "同社のシステム（SpeeCAN RAIDENおよびライデン・スクール）に対する第三者からの不正アクセス",
      certainty: "possible",
      dataNote: "学校ブログ記事。ページ内の10月11日16時30分・10月12日3時頃はアルカディア側の日時のため記録せず。"
    },
    "北茨城市（防災メール）": {
      officialUrl: "https://www.city.kitaibaraki.lg.jp/docs/2026101300052/",
      events: [
        E("disclosed", "2026-10-13", "公開日 2026年10月13日", "@")
      ],
      causes: ["vendor"], causeText: "システム運営会社から、第３者による不正アクセスがあり",
      certainty: "possible",
      dataNote: "本文にアルカディアの名称はないが候補元からアルカディア案件。"
    },
    "那須烏山市（防災・行政情報メール）": {
      officialUrl: "https://www.city.nasukarasuyama.lg.jp/safety-security/disaster-fire/page006959.html",
      events: [
        E("leak_possible", null, "不正アクセスに伴い、個人情報漏洩の可能性があります", "@"),
        E("disclosed", "2026-10-13", "【更新日】2026年10月13日", "@")
      ],
      causes: ["vendor"], causeText: "防災・行政情報メール「SpeeCAN RAIDEN」が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。3,802件は登録者数であり、漏洩可能性の対象件数として明記されたものではない。"
    },
    "塩谷町（防災情報配信サービス）": {
      officialUrl: "https://www.town.shioya.tochigi.jp/info/2866",
      events: [
        E("disclosed", "2026-10-13", "更新日2026年10月13日 更新", "@")
      ],
      causes: ["vendor"], causeText: "防災情報配信サービス「SpeeCAN RAIDEN」が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "印字された更新日は2026年10月13日だが、本文に10月15日のアルカディア第9報が追記されており、更新日が実際の最終更新を反映していない可能性がある。10月11日は事業者（アルカディア）側の事象としてページに記載された日時。"
    },
    "館林市（たてばやし情報配信メール）": {
      officialUrl: "https://www.city.tatebayashi.gunma.jp/s014/anzen/020/130/010/20261013181814.html",
      events: [
        E("disclosed", "2026-10-13", "10月13日公開情報", "@"),
        E("update", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」が第三者による不正アクセスを受けた",
      certainty: "possible",
      dataNote: "漏えい可能性は事業者の発表として記載。本市登録者情報への影響は「現在、サービス提供事業者に確認」中とされている。公表日はページ内の「10月13日公開情報」による（年は更新日から）。"
    },
    "南房総市（安全安心メール）": {
      officialUrl: "https://www.city.minamiboso.chiba.jp/0000025184.html",
      events: [
        E("disclosed", "2026-10-13", "[公開日：2026年10月13日]", "@"),
        E("leak_possible", null, "第三者による不正アクセスが行われ、個人情報が漏洩した可能性が判明", "https://www.city.minamiboso.chiba.jp/0000025194.html"),
        E("update", "2026-10-14", "[更新日：2026年10月14日]（第2報）", "https://www.city.minamiboso.chiba.jp/0000025194.html")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのシステムに対し、第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "第1報（10月13日）はサービス緊急停止のみで、漏洩可能性と件数は第2報（https://www.city.minamiboso.chiba.jp/0000025194.html、公開日10月13日・更新日10月14日）に記載。"
    },
    "茂原市（安全・安心メール）": {
      officialUrl: "https://www.city.mobara.chiba.jp/emergencyinfo/0000000386.html",
      events: [
        E("disclosed", "2026-10-13", "[2026年10月13日 19時08分]", "@")
      ],
      causes: ["vendor"], causeText: "茂原市安全・安心メールを業務委託している会社が不正アクセスを受け",
      certainty: "possible",
      dataNote: "漏洩可能性は表題で示され、漏洩し得る情報項目・件数の記載なし。添付PDFはアルカディアの発表文。"
    },
    "長柄町（防災メール）": {
      officialUrl: "https://www.town.nagara.chiba.jp/soshiki/1/18691.html",
      events: [
        E("disclosed", "2026-10-13", "更新日：2026年10月13日更新", "@")
      ],
      causes: ["vendor"], causeText: "長柄町防災メールを業務委託している会社が不正アクセスを受け",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。漏洩可能性は表題とリンク先（アルカディア発表）で示され、情報項目・件数の記載なし。"
    },
    "綾瀬市（あやせ安全・安心メール）": {
      officialUrl: "https://www.city.ayase.kanagawa.jp/soshiki/kikikanrika/bosai_bohan_anzen_anshin/1/25245.html",
      events: [
        E("incident", "2026-10-11", "発生日時 令和8年10月11日（日曜日）", "@"),
        E("disclosed", "2026-10-13", "第1報（令和8年10月13日）", "@"),
        E("update", "2026-10-15", "第2報（令和8年10月15日）", "@"),
        E("update", "2026-10-21", "第3報（令和8年10月21日）", "@"),
        E("update", "2026-10-26", "更新日：2026年10月26日", "@")
      ],
      causes: ["vendor"], causeText: "「あやせ安全・安心メールサービス」に対し、第3者からの不正アクセスがあり",
      certainty: "possible"
    },
    "砺波市（市緊急メール）": {
      officialUrl: "https://www.city.tonami.lg.jp/info/92713p/",
      events: [
        E("disclosed", "2026-10-13", "公開日時：2026年10月13日 18時28分", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスにより",
      certainty: "possible",
      dataNote: "漏洩の可能性は事業者の発表を引用する形。漏洩項目の記載なし。"
    },
    "南砺市（なんと!緊急メールサービス）": {
      officialUrl: "https://www.city.nanto.toyama.jp/soshiki/somu/7/7657.html",
      events: [
        E("disclosed", "2026-10-13", "更新日：2026年10月13日", "@")
      ],
      causes: ["vendor"], causeText: "同社のサーバーが第三者による不正アクセスを受け",
      certainty: "possible",
      dataNote: "公表日は更新日のみ。"
    },
    "入善町（緊急情報メール配信サービス）": {
      officialUrl: "https://www.town.nyuzen.toyama.jp/gyosei/machizukuri/anzen_anshin/3/6969.html",
      events: [
        E("disclosed", "2026-10-13", "以下、2026年10月13日（火曜日）時点の掲載内容", "@"),
        E("update", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」が不正アクセスを受けたことに伴い",
      certainty: "possible",
      dataNote: "10月15日の復旧告知に、10月13日時点の掲載内容を併記。漏洩項目の記載なし。"
    },
    "小矢部市（防災・緊急メール配信サービス）": {
      officialUrl: "https://www.city.oyabe.toyama.jp/kurashi/1002236/1002243/1007998.html",
      events: [
        E("disclosed", "2026-10-13", "更新日 2026年10月13日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスにより",
      certainty: "possible",
      dataNote: "公表日は更新日のみ。"
    },
    "鯖江市（緊急情報一斉配信システム）": {
      officialUrl: "https://www.city.sabae.fukui.jp/anzen_anshin/bosai/oshirase/CmsAdmin202610131.html",
      events: [
        E("disclosed", "2026-10-13", "…個人情報漏えいの可能性について（R8.10.13）", "@"),
        E("update", "2026-10-16", "鯖江市緊急情報一斉配信システムの運用再開について（R8.10.16）", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスを受けたため",
      certainty: "possible",
      dataNote: "最終更新日は2026年10月16日。漏えい項目の記載なし。"
    },
    "大野市（福井県）（防災メール）": {
      officialUrl: "https://www.city.ono.fukui.jp/kurashi/bousai-anzen/bousai/joho/1013bosaimail.html",
      events: [
        E("disclosed", "2026-10-13", "最終更新日： 2026年10月13日", "@")
      ],
      causes: ["vendor"], causeText: "不正アクセスにより",
      certainty: "possible",
      dataNote: "公表日は最終更新日のみ。漏えいの可能性は事業者の発表を引用する形。"
    },
    "伊豆の国市（Eメール配信サービス）": {
      officialUrl: "https://www.city.izunokuni.shizuoka.jp/system/e-mail/index.html",
      events: [
        E("disclosed", "2026-10-13", "（2026年10月13日17時時点）Eメール配信サービスの停止について", "@"),
        E("update", "2026-10-15", "（2026年10月15日10時時点）…メールアドレス情報の漏洩の可能性について", "@"),
        E("update", "2026-10-16", "更新日：2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "管理会社に、第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "10月13日の初報は配信停止のみで、漏洩可能性の記載は10月15日の追記から。本文は「管理会社」とのみ記載（送信元はraiden3.ktaiwork.jp）。"
    },
    "菊川市（茶こちゃんメール）": {
      officialUrl: "https://www.city.kikugawa.shizuoka.jp/anzen/fuseiakusesu.html",
      events: [
        E("disclosed", "2026-10-13", "茶こちゃんメール登録アドレスへの不審メールに注意ください（令和8年10月13日）", "@"),
        E("update", "2026-10-23", "更新日：2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: "管理会社に、不正アクセスが確認されました",
      certainty: "possible",
      dataNote: "本文は「管理会社」とのみ記載（アルカディアのお知らせへリンク）。10月26日からの配信再開の記載あり（更新日は10月23日）。"
    },
    "日野町（日野めーる）": {
      officialUrl: "https://www.town.shiga-hino.lg.jp/0000009014.html",
      events: [
        E("disclosed", "2026-10-13", "公開日：2026年10月13日", "@"),
        E("update", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "契約している事業者のメール配信システム（SpeeCANRAIDEN）が不正アクセスを受けた",
      certainty: "possible"
    },
    "加古川市（職員メール配信システム）": {
      officialUrl: "https://www.city.kakogawa.lg.jp/soshikikarasagasu/bousai/kikikanrisitsu/sizensaigai/kikikanrikakaranooshirase/51199.html",
      events: [
        E("disclosed", "2026-10-13", "更新日：2026年10月13日", "@")
      ],
      causes: ["vendor"], causeText: "職員メール配信システムを運用する事業者において、外部からの不正アクセス",
      certainty: "possible",
      dataNote: "市民の個人情報の漏えいは確認されていないとしている。防災ネットかこがわは別事業者で対象外。ページは事業者名を明記していない。disclosedは更新日。"
    },
    "大和郡山市": {
      officialUrl: "https://www.city.yamatokoriyama.lg.jp/soshiki/saigai/oshirase/18155.html",
      events: [
        E("disclosed", "2026-10-13", "更新日：2026年10月13日", "@")
      ],
      causes: ["vendor"], causeText: "防災情報配信サービス「SpeeCAN RAIDEN」が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "disclosedは更新日。"
    },
    "下関市（防災メール）": {
      officialUrl: "https://www.city.shimonoseki.lg.jp/soshiki/9/164253.html",
      events: [
        E("incident", "2026-10-11", "不正アクセス：令和８年１０月１１日（日）１６：３０", "@"),
        E("disclosed", "2026-10-13", "更新日：2026年10月13日更新（記者発表資料）", "@")
      ],
      causes: ["vendor"], causeText: "システム業者が不正アクセスを受け",
      certainty: "possible",
      dataNote: "件数は防災メールの登録件数で、漏洩の事実は調査中と記載。"
    },
    "和木町（防災メール）": {
      officialUrl: "https://www.town.waki.lg.jp/soshiki/1/9902.html",
      events: [
        E("disclosed", "2026-10-13", "更新日：2026年10月13日更新", "@")
      ],
      causes: ["vendor"], causeText: "システム業者が不正アクセスを受けたもの",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（掲載日）のみのため、それを公表日として記録。件数は登録件数で、「現時点で個人情報漏洩の有無は不明」とも記載。"
    },
    "今治市（いまばり火災メール・職員参集メール等）": {
      officialUrl: "https://www.city.imabari.ehime.jp/kouhou/info/004/",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日…運営事業者から…不正アクセスが発生したとの報告", "@"),
        E("disclosed", "2026-10-13", "令和8年10月13日（ページ冒頭の日付）", "@"),
        E("update", null, "漏えいの可能性がある情報（10月14日16時00分追加）", "@")
      ],
      causes: ["vendor"], causeText: "運営事業者（株式会社アルカディア）において、第三者による不正アクセスが発生し",
      certainty: "possible",
      dataNote: "追加情報の日付「10月14日」は年の記載がないため date は null。「現時点では個人情報の流出や悪用は確認されていません」とも記載。"
    },
    "長崎市（防災情報メール）": {
      officialUrl: "https://www.city.nagasaki.lg.jp/page/93192.html",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日…株式会社アルカディアから本市に対し…報告", "@"),
        E("disclosed", "2026-10-13", "更新日：2026年10月13日更新", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」に対し、第三者による不正アクセスがあった",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。"
    },
    "大分県（県民安全・安心メール）": {
      officialUrl: "https://www.pref.oita.jp/soshiki/13550/bosaimeil.html",
      events: [
        E("disclosed", "2026-10-13", "更新日：2026年10月13日更新", "@")
      ],
      causes: ["vendor"], causeText: "システム業者が不正アクセスを受け",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。事業者名の記載はないが「システム業者が不正アクセスを受け」と記載。"
    },
    "JR東海（JR東海MARKET・いいもの探訪／IDCF経由のメール配信）": {
      officialUrl: "https://jr-central.co.jp/news/release/_pdf/000046064.pdf",
      events: [
        E("incident", "2026-10-07", "２０２６年１０月７日（水）株式会社ＩＤＣフロンティアで発生した不正アクセス", "@"),
        E("leak_possible", null, "メールアドレス等の個人情報が漏えいした可能性のあること", "@"),
        E("disclosed", "2026-10-13", "２０２６年１０月１３日 東海旅客鉄道株式会社", "@"),
        E("update", "2026-10-15", "両サイトの「個人情報の漏えいの事実は確認されなかった」旨の報告", "@")
      ],
      causes: ["vendor"], causeText: "当該事業者が株式会社ＩＤＣフロンティアの運営するクラウドを利用しており",
      dataNote: "10月13日に個人情報保護委員会へ報告。対象はメールアドレスと、配信メール本文に記載された氏名・住所・電話番号・注文内容・配送先等。約15,000件はIDCフロンティアが不正アクセスを確認した10月7日時点のデータ件数です。10月15日の更新（同じPDFに追記）で、委託先のシステム運営事業者からIDCフロンティアの調査結果を踏まえ「個人情報の漏えいの事実は確認されなかった」との報告を受けたとしています。エクスプレス予約・スマートEX（Cuenote経由）とは別の事案です。"
    },
    "スカパーJSAT（スカパー！メンバーズ／IDCF経由のメール配信）": {
      officialUrl: "https://www.skyperfectjsat.space/jp/news/20261013",
      events: [
        E("leak_possible", null, "メールアドレス漏えいの可能性があることが判明いたしました", "@"),
        E("disclosed", "2026-10-13", "2026年10月13日", "@"),
        E("update", "2026-10-16", "メールアドレスの閲覧、漏えいはなかったとの結論に至りました", "https://www.skyperfectjsat.space/jp/news/20261016_2")
      ],
      causes: ["vendor"], causeText: "株式会社IDCフロンティアのクラウド基盤において発生した不正アクセスによるもの",
      dataNote: "対象はスカパー！メンバーズ会員（一部退会者含む）のメールアドレス。10月16日の調査結果報告で、業務委託先との詳細調査の結果、メールアドレスの閲覧・漏えいはなかったと結論づけたとしています。SATELLITE CRAYON PROJECT（Studio経由）とは別の事案です。"
    },
    "NTT ExCパートナー（LStep）": {
      officialUrl: "https://www.nttexc.co.jp/news/detail20261013/",
      events: [
        E("incident", "2026-10-07", "2026年10月7日、…利用しているメール配信サービスに障害が発生", "@"),
        E("vendor_notified", null, "第三者による不正アクセスが発生した旨の報告を受けました", "@"),
        E("leak_possible", null, "一部のお客さまのメールアドレスが漏えいした可能性があることが判明", "@"),
        E("disclosed", "2026-10-13", "2026年10月13日、…漏えいした可能性についてお知らせしました", "https://www.nttexc.co.jp/news/detail20261015/"),
        E("update", "2026-10-15", "【第２報】…当該情報の流出を示す事実は確認できませんでした", "https://www.nttexc.co.jp/news/detail20261015/")
      ],
      causes: ["vendor"], causeText: "同社が利用するIDCフロンティア社のサービス環境において、第三者による不正アクセスが発生",
      dataNote: "初報ページには掲載日の記載がなく、公表日は第2報の本文（「2026年10月13日、…お知らせしました」）と新着情報一覧の日付によるものです。対象はメールアドレスのみ。10月15日の第2報で、IDCフロンティアとメールサービス事業者の報告を踏まえ、メールアドレスの漏えいを示す事実は無いと判断したとしています。"
    },
    "DRC医薬（公式オンラインショップ メールマガジン）": {
      officialUrl: "https://drciyaku.jp/news_261013_2.html",
      events: [
        E("vendor_notified", null, "第三者による不正アクセスが発生したとの報告を受けました", "@"),
        E("disclosed", "2026-10-13", "2026年10月13日 DRC医薬株式会社", "@"),
        E("update", "2026-10-15", "（第二報）…「外部へのデータの流出はなかった」と判断している旨が公表", "https://drciyaku.jp/news_261015.html")
      ],
      causes: ["vendor"], causeText: "当該配信サービスを提供する事業者が利用しているクラウド基盤（株式会社IDCフロンティア社の「IDCFクラウド」）に対して第三者による不正アクセスが発生",
      dataNote: "対象はDMを可としている会員のメールアドレスと氏名（カード情報・電話番号・パスワード・住所は含まれない）。配信サービスはフューチャーショップのfutureshop経由です。10月15日の第二報では、IDCフロンティアが外部へのデータ流出はなかったと判断した旨を伝えていますが、DRC医薬自身の結論は書かれていません。"
    },
    "中央競馬ピーアール・センター（ターフィーショップオンライン）": {
      officialUrl: "https://shop.prc.jp/shop/t/t1011/",
      events: [
        E("disclosed", "2026-10-13", "2026年10月13日 株式会社中央競馬ピーアール・センター", "@")
      ],
      causes: ["vendor"], causeText: "株式会社IDCフロンティアが公表した第三者による不正アクセス事案の影響",
      dataNote: "件数は配信用サーバに記録されていた人数で、漏えい件数ではありません（9月25日・10月2日のメルマガ受信者のメールアドレス、9月24日〜10月7日10時頃の再入荷通知受信者の氏名・メールアドレス）。委託先を通じてIDCフロンティア等から情報漏えいの事実は確認されていないとの報告を受けたとしています。配信は10月7日10時頃から停止。"
    },
    "千歳市消防本部（NET119・招集通知システム）": {
      officialUrl: "https://www.city.chitose.lg.jp/c50/1002703/1002722/1007015.html",
      events: [
        E("disclosed", "2026-10-14", "更新日 2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディア（以下、委託事業者）において、外部からの不正アクセスが発生",
      certainty: "possible",
      dataNote: "招集通知システムは令和7年9月11日に運用廃止済み。公表日の記載がなく、ページの更新日を disclosed として記録。"
    },
    "雨竜町（防災情報等配信サービス）": {
      officialUrl: "https://www.town.uryu.hokkaido.jp/docs/4953.html",
      events: [
        E("disclosed", "2026-10-14", "2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアの配信システムに第三者による不正アクセス",
      certainty: "possible",
      dataNote: "公表日の記載がなく、ページの更新日を disclosed として記録。"
    },
    "当別町（防災情報メール）": {
      officialUrl: "https://www.town.tobetsu.hokkaido.jp/soshiki/kiki/55911.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "配信システム「SpeeCAN RAIDEN」に第三者による不正アクセスが確認され",
      certainty: "possible",
      dataNote: "ページに「令和8年10月11日…不正アクセスが確認され」とあるが事業者側の確認日のため events に含めず。一部登録者に不審なメール到達を確認。公表日の記載がなく、ページの更新日を disclosed として記録。"
    },
    "大空町（メール配信サービス）": {
      officialUrl: "https://www.town.ozora.hokkaido.jp/soshiki/1010/16/4091.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスがあり",
      certainty: "possible",
      dataNote: "町は停止対象サービスを利用しておらず、点検で不正プログラムなしと記載。公表日の記載がなく、ページの更新日を disclosed として記録。"
    },
    "上士幌町（SpeeCAN RAIDEN）": {
      officialUrl: "https://www.kamishihoro.jp/entry/00007093",
      events: [
        E("disclosed", "2026-10-14", "令和8年10月14日 13時 更新", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "町独自の@InfoCanalは無関係と記載。ページ見出しには「15日(木)16時更新」ともある。公表日の記載がなく、ページの更新日を disclosed として記録。"
    },
    "芦別市（あしべつ防災メール39・高齢者SOSネットワーク）": {
      officialUrl: "https://www.city.ashibetsu.hokkaido.jp/docs/3134965.html",
      events: [
        E("disclosed", "2026-10-14", "2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスがあり",
      certainty: "possible",
      dataNote: "ページ記載の日付（公開日）を disclosed として記録。"
    },
    "深川市（防災メール）": {
      officialUrl: "https://www.city.fukagawa.lg.jp/cms/section/soumu/ai39rj0000001m2e.html",
      events: [
        E("disclosed", "2026-10-14", "最終更新日: 2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスがあり",
      certainty: "possible",
      dataNote: "公表日の記載がなく、ページの更新日を disclosed として記録。"
    },
    "北広島市（一斉連絡サービス・NET119）": {
      officialUrl: "https://www.city.kitahiroshima.hokkaido.jp/hotnews/detail/00160585.html",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日（火）…「株式会社アルカディア」より…報告", "@"),
        E("disclosed", "2026-10-14", "令和8年（2026年）10月14日（水） 10時00分", "@"),
        E("update", "2026-10-15", "令和8年（2026年）10月15日（木） 11時15分 追記", "@")
      ],
      causes: ["vendor"], causeText: "当該システムへの不正アクセスがあり",
      certainty: "possible",
      dataNote: "NET119は札幌圏消防指令センター利用分。合計は記載なし（n は最大の単独数値）。"
    },
    "小樽市（登録制メール・職員参集メール・NET119）": {
      officialUrl: "https://www.city.otaru.lg.jp/docs/2026101400011/",
      events: [
        E("disclosed", "2026-10-14", "公開日 2026年10月14日", "@"),
        E("update", "2026-10-26", "更新日 2026年10月26日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのシステムに対し第三者による不正アクセス",
      certainty: "possible",
      dataNote: "合計は記載なし（n は最大の単独数値）。"
    },
    "奈井江町（災害時一斉情報配信サービス）": {
      officialUrl: "https://www.town.naie.hokkaido.jp/oshirase/2314/",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日14時12分に株式会社アルカディアから奈井江町へ連絡", "@"),
        E("disclosed", "2026-10-14", "2026年10月14日(水)", "@")
      ],
      causes: ["vendor"], causeText: "運営する事業者への第三者による不正アクセス",
      certainty: "possible",
      dataNote: "事業者側の経緯（令和8年10月11日16時30分 不審な挙動確認、12日3時ごろ応急措置）は事業者の日付のため events に含めず。現時点で流出は未確認と記載。"
    },
    "芽室町（めむろ安心メール）": {
      officialUrl: "https://www.memuro.net/administration/soshiki/soumu/2026-1014-1551-15.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "公表日の記載がなく、ページの更新日を disclosed として記録。"
    },
    "新得町（防災情報メール）": {
      officialUrl: "https://www.shintoku-town.jp/oshirase/3652/",
      events: [
        E("disclosed", "2026-10-14", "2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」が不正アクセスを受けた",
      certainty: "possible"
    },
    "平取町（防災情報メール）": {
      officialUrl: "https://www.town.biratori.hokkaido.jp/kinkyu_joho/2949.html",
      events: [
        E("disclosed", "2026-10-14", "公開日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "提供事業者において、不正アクセスが確認され",
      certainty: "possible",
      dataNote: "経過表の10月11日16時30分（不審な挙動確認）等は事業者側の日付のため events に含めず。対象者数は不明と記載。"
    },
    "占冠村（緊急情報配信システム）": {
      officialUrl: "https://www.vill.shimukappu.lg.jp/shimukappu/section/soumu/e2be5g0000001sia.html",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日（火）…「株式会社アルカディア」より…報告", "@"),
        E("disclosed", "2026-10-14", "最終更新日: 2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "当該システムへの不正アクセスがあり",
      certainty: "possible",
      dataNote: "公表日の記載がなく、ページの更新日を disclosed として記録。"
    },
    "えびの市（防災情報一斉配信システム）": {
      officialUrl: "https://www.city.ebino.lg.jp/sumai_kankyo_anzen/bosai_anzen/bosai/2/7783.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスにより個人情報が漏洩した可能性",
      certainty: "possible",
      dataNote: "日付は更新日のみ。"
    },
    "五ヶ瀬町（防災行政情報メールサービス）": {
      officialUrl: "https://www.town.gokase.miyazaki.jp/kakuka/soumu/chiikijyoho/2318.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "運営する事業者への第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "日付は更新日のみ。事業者名はリンク先（SpeeCAN RAIDEN公式ブログ）で示される。"
    },
    "姶良市（防災・地域情報メール）": {
      officialUrl: "https://www.city.aira.lg.jp/bosai/kurashi/bosai/bosai_mail.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスにより、登録者の皆様のメールアドレス等が漏えいした可能性",
      certainty: "possible",
      dataNote: "日付は更新日のみ。"
    },
    "枕崎市（防災・一般情報提供メール）": {
      officialUrl: "https://www.city.makurazaki.lg.jp/soshiki/soumu/30301.html",
      events: [
        E("disclosed", "2026-10-14", "2026年10月14日（当初のお知らせ）", "@"),
        E("update", "2026-10-23", "2026年10月23日", "@"),
        E("update", "2026-10-26", "掲載日：2026年10月26日更新", "@")
      ],
      causes: ["vendor"], causeText: "同社が管理するサーバーが第三者からの不正アクセスを受け",
      certainty: "possible",
      dataNote: "同一ページに複数回の追記。令和8年10月16日に市から個人情報保護委員会へ報告と記載。10月23日付の追記の日付は掲載位置から判断。"
    },
    "東串良町（防災登録制メール）": {
      officialUrl: "https://www.higashikushira.com/docs/2026101400011/",
      events: [
        E("disclosed", "2026-10-14", "公開日 2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスにより、登録者の皆様の個人情報が漏えいした可能性",
      certainty: "possible"
    },
    "伊仙町（防災情報メール）": {
      officialUrl: "https://www.town.isen.kagoshima.jp/bousai/fuseiakuseu.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCANRAIDEN」において、第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "日付は更新日のみ。"
    },
    "志布志市（安全安心メール）": {
      officialUrl: "https://www.city.shibushi.lg.jp/soshiki/2/35426.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスにより、登録者の皆様の個人情報が漏洩した可能性",
      certainty: "possible",
      dataNote: "日付は更新日のみ。"
    },
    "浦添市（防災行政速報メール）": {
      officialUrl: "https://www.city.urasoe.lg.jp/doc/2026101400097/",
      events: [
        E("disclosed", "2026-10-14", "公開日 2026年10月14日", "@"),
        E("update", "2026-10-16", "2026年10月16日更新", "@")
      ],
      causes: ["vendor"], causeText: "同社が不正アクセスを受けたことに伴い",
      certainty: "possible"
    },
    "中城村（防災メール）": {
      officialUrl: "https://www.vill.nakagusuku.okinawa.jp/bousai/musen/1792043709/",
      events: [
        E("disclosed", "2026-10-14", "[掲載開始日：2026年10月14日]", "@")
      ],
      causes: ["vendor"], causeText: "第三者からの不正アクセスがあったことが確認",
      certainty: "possible"
    },
    "宮城県東部消防指令センター（NET119）": {
      officialUrl: "http://isyoubou.jp/net%EF%BC%91%EF%BC%91%EF%BC%99%E7%B7%8A%E6%80%A5%E9%80%9A%E5%A0%B1%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E7%99%BB%E9%8C%B2%E6%83%85%E5%A0%B1%E3%81%AE%E6%BC%8F/",
      events: [
        E("leak_possible", "2026-10-14", "同日午後５時20分に同社へ問い合わせを行い…漏えいしている可能性があることが判明", "@"),
        E("disclosed", "2026-10-14", "2026年10月14日", "@"),
        E("update", "2026-10-28", "最終更新日時 : 2026年10月28日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのサーバーが、第三者による不正アクセスを受け",
      certainty: "possible",
      dataNote: "掲載は石巻地区広域行政事務組合消防本部サイト。10月28日の最終更新は内容変更か不明。10月11日は事業者が不審な挙動を確認した日。"
    },
    "大崎地域広域行政事務組合消防本部（NET119）": {
      officialUrl: "https://osakikoiki.jp/fire119-doc/2026101400011/",
      events: [
        E("leak_possible", "2026-10-14", "令和8年10月14日…個人情報漏えいの可能性が確認されました", "@"),
        E("disclosed", "2026-10-14", "公開日 2026年10月14日", "@"),
        E("update", "2026-10-16", "更新日 2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "外部からの不正アクセスによる個人情報漏えいの可能性",
      certainty: "possible"
    },
    "秋田市消防本部（NET119）": {
      officialUrl: "https://www.city.akita.lg.jp/shobo/oshirase/1053565.html",
      events: [
        E("incident", "2026-10-11", "令和8年10月11日（日曜日）、運用管理委託業者において第三者による不正アクセスが確認", "@"),
        E("leak_possible", "2026-10-14", "同月14日（水曜日）確認", "@"),
        E("disclosed", "2026-10-14", "更新日 令和8年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "運用管理委託業者において第三者による不正アクセスが確認",
      certainty: "possible",
      dataNote: "日付は更新日のみ。"
    },
    "伊達地方消防組合（NET119）": {
      officialUrl: "https://www.date119.jp/?p=28519",
      events: [
        E("leak_possible", "2026-10-13", "発覚日時 令和 8 年 10 月 13 日（水）18 時 47 分", "https://www.date119.jp/control/wp-content/uploads/2026/10/%E3%80%90%E4%BC%8A%E9%81%94%E5%9C%B0%E6%96%B9%E6%B6%88%E9%98%B2%E7%B5%84%E5%90%88%E3%80%91%E4%B8%8D%E6%AD%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%AB%E3%82%88%E3%82%8B%E5%80%8B%E4%BA%BA%E6%83%85%E5%A0%B1%E6%BC%8F%E3%81%88%E3%81%84%E3%81%AE%E5%8F%AF%E8%83%BD%E6%80%A7%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6.pdf"),
        E("disclosed", "2026-10-14", "令和８年１０月１４日（木）", "https://www.date119.jp/control/wp-content/uploads/2026/10/%E3%80%90%E4%BC%8A%E9%81%94%E5%9C%B0%E6%96%B9%E6%B6%88%E9%98%B2%E7%B5%84%E5%90%88%E3%80%91%E4%B8%8D%E6%AD%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%AB%E3%82%88%E3%82%8B%E5%80%8B%E4%BA%BA%E6%83%85%E5%A0%B1%E6%BC%8F%E3%81%88%E3%81%84%E3%81%AE%E5%8F%AF%E8%83%BD%E6%80%A7%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6.pdf")
      ],
      causes: ["vendor"], causeText: "インターネット・サービスが不正アクセスを受け",
      certainty: "possible",
      dataNote: "日付は添付PDF（伊達地方消防組合「不正アクセスによる個人情報漏えいの可能性について」）による。PDFの曜日表記（13日（水）・14日（木））は暦と1日ずれている。119RAIDENは詳細調査で対象外と判明と記載。"
    },
    "甲府地区広域行政事務組合消防本部（NET119）": {
      officialUrl: "https://www.kfd.or.jp/?p=15617",
      events: [
        E("disclosed", "2026-10-14", "2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "第三者によるシステムへの不正アクセスを受け",
      certainty: "possible"
    },
    "山梨国中地域消防指令センター（NET119）": {
      officialUrl: "https://kuninaka119.jp/%E3%83%86%E3%82%B9%E3%83%88/",
      events: [
        E("disclosed", "2026-10-14", "2026.10.14", "@")
      ],
      causes: ["vendor"], causeText: "第三者によるシステムへの不正アクセスを受け",
      certainty: "possible",
      dataNote: "甲府地区消防本部と同文の別組織のお知らせ。"
    },
    "大垣消防組合（NET119）": {
      officialUrl: "https://www.ogaki-syoubou.or.jp/back/275_back_msg.html",
      events: [
        E("disclosed", "2026-10-14", "2026.10.14", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが行われた形跡があり",
      certainty: "possible"
    },
    "衣浦東部広域連合消防局（NET119・職員用災害情報メール）": {
      officialUrl: "http://www.kinutoh.jp/shobo/shobo/kouhou/kouhoushisaku/202610141615.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのサーバーが、第三者による不正アクセスを受け",
      certainty: "possible",
      dataNote: "10月11日は事業者が不審な挙動を確認した日。日付は更新日のみ。nは最大の単独数値。"
    },
    "湖北地域消防組合消防本部（火災情報メール）": {
      officialUrl: "https://www.shiga-kohokuarea119.jp/wp-sys/wp-content/uploads/2026/10/%E5%B8%82%E6%B0%91%E5%91%A8%E7%9F%A5%E6%96%87.pdf",
      events: [
        E("disclosed", "2026-10-14", "更新日：令和８年 10 月 14 日", "@")
      ],
      causes: ["vendor"], causeText: "メール配信システム (SpeeCAN RAIDEN)が第三者からの不正アクセスを受けた",
      certainty: "possible",
      dataNote: "日付は更新日のみ。"
    },
    "下関市消防局（NET119）": {
      officialUrl: "https://www.city.shimonoseki.lg.jp/site/fire/164337.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "システム業者が不正アクセスを受け",
      certainty: "possible",
      dataNote: "記者発表資料。50人は登録者数。"
    },
    "長門市消防本部（NET119）": {
      officialUrl: "https://www.city.nagato.yamaguchi.jp/uploaded/attachment/39638.pdf",
      events: [
        E("incident", "2026-10-11", "不正アクセス：令和８年 10 月 11 日（日）16 時 30 分", "@"),
        E("disclosed", "2026-10-14", "発信年月日：令和８年 10 月 14 日", "@")
      ],
      causes: ["vendor"], causeText: "システム業者が不正アクセスを受け",
      certainty: "possible",
      dataNote: "記者配布資料（PDF）。業者名の記載はないがNET119。11人は登録者数。"
    },
    "札幌市（避難情報等電話サービス）": {
      officialUrl: "https://www.city.sapporo.jp/kikikanri/huseiakusesu.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアが運営するSpeeCANRAIDENが不正アクセスを受けました",
      certainty: "possible",
      dataNote: "更新日のみ記載のため更新日をdisclosedとした。"
    },
    "上砂川町（登録制メール）": {
      officialUrl: "https://town.kamisunagawa.hokkaido.jp/kurashi_tetsuzuki/bosai/2639.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@"),
        E("access_confirmed", "2026-10-13", "令和8年10月13日、…外部から不正アクセスを受けたことが判明", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN（運営元・株式会社アルカディア）」が、外部から不正アクセスを受けた",
      certainty: "possible",
      dataNote: "更新日のみ記載のため更新日をdisclosedとした。"
    },
    "田野畑村（タノくんメール等）": {
      officialUrl: "https://www.vill.tanohata.iwate.jp/docs/2026101400011/",
      events: [
        E("disclosed", "2026-10-14", "2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "運営事業者（株式会社アルカディア）において、第三者による不正アクセスが発生",
      certainty: "possible"
    },
    "矢巾町（わたまるメール）": {
      officialUrl: "https://www.town.yahaba.iwate.jp/soshiki/kikaku/chousei/17919357673068275/",
      events: [
        E("disclosed", "2026-10-14", "10月14日午前10時20分 …町ホームページで公表", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアが不正アクセスを受けたことにより",
      certainty: "possible"
    },
    "岩沼市（iあいメール等）": {
      officialUrl: "https://www.city.iwanuma.miyagi.jp/shisei/policy/kojinjouhoutaiou.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディア）のシステムに対して第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "更新日のみ記載のため更新日をdisclosedとした。ページ記載のアルカディア側の日時は「2026年10月12日16時30分」となっており他自治体の記載（10月11日）と異なる。アルカディア側日時のため記録せず。"
    },
    "宮城県（職員安否確認システム）": {
      officialUrl: "https://www.pref.miyagi.jp/site/chiji-kaiken/kk-261014.html",
      events: [
        E("disclosed", "2026-10-14", "宮城県知事記者会見（令和8年10月14日）", "@"),
        E("vendor_notified", null, "昨日連絡があったのですけれども", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "知事記者会見録（掲載日2026年10月16日）。disclosedは会見日。「昨日連絡」の日付は推定せずnull。漏洩対象の情報種別・件数の記載なし。"
    },
    "由利本荘市（NET119）": {
      officialUrl: "https://www.city.yurihonjo.lg.jp/1001576/1001986/1013930.html",
      events: [
        E("disclosed", "2026-10-14", "更新日 2026年10月14日", "@"),
        E("vendor_notified", "2026-10-14", "令和8年10月14日（水曜日）夕方、委託会社より", "@"),
        E("leak_possible", "2026-10-14", "外部に漏えいした可能性があることを、10月14日（水曜日）に確認", "@")
      ],
      causes: ["vendor"], causeText: "運用管理委託業者において第三者による不正アクセスが確認され",
      certainty: "possible",
      dataNote: "更新日のみ記載のため更新日をdisclosedとした。消防本部ページ。「昨日公表」の「消防、防災メール」の件は別ページ（本バッチ対象外）。"
    },
    "にかほ市（NET119）": {
      officialUrl: "https://www.city.nikaho.akita.jp/soshikikarasagasu/shobohonbu/gyomuannai/3/6959.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@"),
        E("vendor_notified", "2026-10-14", "令和8年10月14日（水曜日）夕方、委託会社より", "@"),
        E("leak_possible", "2026-10-14", "外部に漏えいした可能性があることを、10月14日（水曜日）に確認", "@")
      ],
      causes: ["vendor"], causeText: "運用管理委託業者において第三者による不正アクセスが確認され",
      certainty: "possible",
      dataNote: "更新日のみ記載のため更新日をdisclosedとした。消防本部ページ。氏名・生年月日・性別・住所・電話番号・メールアドレス・FAX番号。"
    },
    "戸沢村（防災行政情報メール）": {
      officialUrl: "https://www.vill.tozawa.yamagata.jp/pages/401?detail=1&b_id=2269&r_id=1192#block2269-1192",
      events: [
        E("disclosed", "2026-10-14", "2026-10-14", "@"),
        E("leak_possible", "2026-10-13", "漏えいした可能性があることを、同月13日（火曜日）に確認", "@")
      ],
      causes: ["vendor"], causeText: "運用管理委託業者において第三者による不正アクセスが確認され",
      certainty: "possible",
      dataNote: "ページ内の「令和8年10月11日（日曜日）16時30分…不正アクセスが確認」は委託業者側の確認日時のため記録せず。"
    },
    "福島市（防災と災害情報メールマガジン）": {
      officialUrl: "https://www.city.fukushima.fukushima.jp/bosai-anzen/20632.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@"),
        E("leak_possible", "2026-10-13", "外部に漏えいした可能性があることを、10月13日（火曜日）に確認", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」において、第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "更新日のみ記載のため更新日をdisclosedとした。ページ内の10月11日16時30分の記載は運営会社側の確認日時のため記録せず。"
    },
    "昭和村（福島県）": {
      officialUrl: "https://www.vill.showa.fukushima.jp/news/7797/",
      events: [
        E("disclosed", "2026-10-14", "2026 10 14", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアにおいて、第三者による不正アクセスが確認されました",
      certainty: "possible",
      dataNote: "村が確認した該当は職員個人・担当係・システム関係事業者・連携用の各メールアドレス計4件。住民分は確認されていないとしている。"
    },
    "郡山市（防災メールマガジン）": {
      officialUrl: "https://www.city.koriyama.lg.jp/soshiki/5/195747.html",
      events: [
        E("disclosed", "2026-10-14", "(令和8年10月14日掲載分)", "@"),
        E("update", "2026-10-15", "(令和8年10月15日掲載分)", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」が第三者による不正アクセスを受",
      certainty: "possible",
      dataNote: "郡山地方広域消防組合（既掲載）とは別団体。"
    },
    "磐梯町（お知らせメール）": {
      officialUrl: "https://www.town.bandai.fukushima.jp/site/bousai-anzen/20261014huseiaruka.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "運営システムにおいて、第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "更新日のみ記載のため更新日をdisclosedとした。本文にアルカディアの名称はないがURL・候補元からアルカディア案件。漏洩可能性のある情報の種別は記載なし。"
    },
    "潮来市（防災メール）": {
      officialUrl: "https://www.city.itako.lg.jp/di-em-information/dis-information/page009180.html",
      events: [
        E("disclosed", "2026-10-14", "2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアから不正アクセスにより個人情報が漏えいした可能性があるとの連絡",
      certainty: "possible",
      dataNote: "ページ末尾の日付（2026年10月14日、更新日か掲載日かの表記なし）をdisclosedとした。"
    },
    "鹿沼市（防災情報メール）": {
      officialUrl: "https://www.city.kanuma.tochigi.jp/0566/info-0000011583-0.html",
      events: [
        E("disclosed", "2026-10-14", "掲載日 令和8年10月14日", "@"),
        E("update", "2026-10-21", "更新日 令和8年10月21日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」が不正アクセスを受けたことに伴い",
      certainty: "possible"
    },
    "前橋市（まちの安全ひろメール等）": {
      officialUrl: "https://www.city.maebashi.gunma.jp/taisetsu/51475.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "運営している事業者（株式会社アルカディア）への第三者による不正アクセス",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。"
    },
    "伊勢崎市（火災情報メール）": {
      officialUrl: "https://www.city.isesaki.lg.jp/kurashi_tetsuzuki/anzen_anshin/shobo_kyukyu/kasaitaisaku/16337.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスにより、同メールサービスで取り扱うメールアドレスが漏洩した可能性",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。本文の「令和8年10月13日」は事業者が発表した日。"
    },
    "高崎市（災害時電話・FAXサービス）": {
      officialUrl: "https://www.city.takasaki.gunma.jp/page/98884.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "「災害時電話・FAXサービス」…のシステムに対し第三者からの不正アクセスがありました",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。安心ほっとメール等その他の配信媒体には影響なしと記載。"
    },
    "蕨市（メール配信サービス・電話/ファクス配信）": {
      officialUrl: "https://www.city.warabi.saitama.jp/anzen/bousai/1012477/1013329.html",
      events: [
        E("vendor_notified", "2026-10-13", "10⽉13⽇（火曜日）14時12分、アルカディアより…報告のメールを受信", "@"),
        E("disclosed", "2026-10-14", "令和8年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "アルカディア…のネットワークが外部から不正アクセスを受け",
      certainty: "possible",
      dataNote: "10月11日は事業者（アルカディア）側の事象としてページに記載された日時。"
    },
    "本庄市（防災行政無線メール・ファクス配信）": {
      officialUrl: "https://www.city.honjo.lg.jp/kurashi_tetsuzuki/anzen_anshin/bosai/22763.html",
      events: [
        E("access_confirmed", "2026-10-11", "10月11日（日曜日）午後4時30分 運営会社において…不正アクセスを確認", "@"),
        E("vendor_notified", "2026-10-13", "10月13日（火曜日）午後2時12分 運営会社から本庄市に対し…メールを受信", "@"),
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@"),
        E("update", "2026-10-19", "（令和8年10月19日追記）", "@")
      ],
      causes: ["vendor"], causeText: "システムへの不正アクセスがあり",
      certainty: "possible",
      dataNote: "更新日（2026年10月14日）を公表日として記録。10月11日の不正アクセス確認は運営会社側の事象。"
    },
    "東金市（防災メール）": {
      officialUrl: "https://www.city.togane.chiba.jp/emergencyinfo/0000000206.html",
      events: [
        E("disclosed", "2026-10-14", "[2026年10月14日 13時01分]", "@")
      ],
      causes: ["vendor"], causeText: "(株)アルカディアに対して、第三者による不正アクセスが行われ",
      certainty: "possible"
    },
    "市川市（電話等一斉配信サービス）": {
      officialUrl: "https://www.city.ichikawa.lg.jp/page/80942.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアへの不正アクセスが行われ",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。171人は登録者数。市川市メール情報配信サービスは別事業者で影響なしと記載。"
    },
    "大網白里市（防災メール）": {
      officialUrl: "https://www.city.oamishirasato.lg.jp/0000015702.html",
      events: [
        E("disclosed", "2026-10-14", "[公開日：2026年10月14日]", "@")
      ],
      causes: ["vendor"], causeText: "業務を委託しているシステム会社に対して、第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "ページ本文では委託先名を記載していない（SpeeCAN RAIDEN関連としてpiyologに掲載）。"
    },
    "長生村（防災メール）": {
      officialUrl: "https://www.vill.chosei.chiba.jp/0000002841.html",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日（火曜日）夕方に委託事業者から…連絡がありました", "@"),
        E("disclosed", "2026-10-14", "[公開日：2026年10月14日]", "@")
      ],
      causes: ["vendor"], causeText: "委託している事業者に対し、第三者による不正アクセスが確認され",
      certainty: "possible",
      dataNote: "ページ本文では委託先名を記載していない（SpeeCAN RAIDEN関連としてpiyologに掲載）。"
    },
    "千葉県（職員参集システム等）": {
      officialUrl: "https://www.pref.chiba.lg.jp/dejisui/press/2026/20261014incident.html",
      events: [
        E("vendor_notified", "2026-10-13", "10月13日（火曜日） 午前10時50分 …不正アクセス事案の報告を受けた", "@"),
        E("disclosed", "2026-10-14", "発表日：令和8年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "サービス提供事業者（株式会社アルカディア）から、第三者による不正アクセスを受け",
      certainty: "possible",
      dataNote: "このほか災害時支援協力員約40名、委託業者社員6名、水道事業関係団体組合員約220名。10月11日は事業者（アルカディア）側の事象としてページに記載された日時。"
    },
    "松戸市（災害時防災情報テレフォン・FAXサービス）": {
      officialUrl: "https://www.city.matsudo.chiba.jp/kurashi/anzen_anshin/oshirase/accessjian.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "利用しているシステムについて、第三者による不正アクセスがあり",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。10月11日は事業者（アルカディア）側の事象としてページに記載された日時。"
    },
    "佐倉市（防災情報架電サービス）": {
      officialUrl: "https://www.city.sakura.lg.jp/soshiki/kikikanrika/oshirase/22935.html",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日…漏えいした可能性があるとの報告を受けました", "@"),
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN  RAIDEN」に対して、第三者による不正アクセスが確認され",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。市民の個人情報が漏えいした事実は確認されていないと記載。"
    },
    "三鷹市（SpeeCAN RAIDEN利用の情報配信）": {
      officialUrl: "https://www.city.mitaka.lg.jp/c_anzen/121/121660.html",
      events: [
        E("disclosed", "2026-10-14", "公開日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのシステムに、第三者による不正アクセスがあり",
      certainty: "possible"
    },
    "世田谷区（災害・防犯情報メール配信サービス）": {
      officialUrl: "https://www.city.setagaya.lg.jp/02049/36404.html", listedDate: "2026-10-14",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日…不審な挙動が確認されたと事業者より報告を受けています", "@"),
        E("update", "2026-10-14", "（令和８年１０月１４日１２時更新）", "@"),
        E("update", "2026-10-29", "最終更新日 2026年10月29日", "@")
      ],
      causes: ["vendor"], causeText: "SpeeCAN RAIDENにおいて、第三者による不正アクセスが疑われる不審な挙動が確認された",
      certainty: "possible",
      dataNote: "初回公表日は印字されていないためdisclosedは記録しない（表題に10月14日12時更新、最終更新日10月29日）。件数は「想定影響範囲」として記載。"
    },
    "江東区（こうとう安全・安心メール）": {
      officialUrl: "https://www.city.koto.lg.jp/056100/bosai/20261014.html",
      events: [
        E("access_confirmed", "2026-10-13", "令和8年10月13日…第三者による不正アクセスがあったことを確認いたしました", "@"),
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "委託している事業者に対して、第三者による不正アクセスがあった",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。本文では委託先名を記載していない。区登録者に関する情報漏えいは確認されていないと記載。"
    },
    "中央区（東京都）（ちゅうおう安全・安心メール等）": {
      officialUrl: "https://www.city.chuo.lg.jp/a0003/kusei/kouhoukouchou/press/261014.html",
      events: [
        E("disclosed", "2026-10-14", "掲載日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "提供元業者のネットワークに対し、第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "件数は登録者数。本区システムで被害は確認されていないと記載。10月11日は事業者（アルカディア）側の事象としてページに記載された日時。"
    },
    "町田市（職員メール配信システム）": {
      officialUrl: "https://www.city.machida.tokyo.jp/kurashi/bouhan/bousai/Fuseiakusesunitsuite.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアにおいて、第三者による不正アクセスが確認されました",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。"
    },
    "葉山町（防災情報メール）": {
      officialUrl: "https://www.town.hayama.lg.jp/soshiki/bousaianzen/2/4/17670.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスを受けたことに伴い",
      certainty: "possible",
      dataNote: "公表日は更新日のみ。8,850人は登録者数で、漏洩した可能性のある情報は登録者名・メールアドレス・電話番号・ファクス番号（登録情報は個々に異なる）。"
    },
    "横浜市磯子区（緊急時情報伝達システム）": {
      officialUrl: "https://www.city.yokohama.lg.jp/isogo/bosai_bohan/saigai/sonota/20261014.html",
      events: [
        E("disclosed", "2026-10-14", "最終更新日 2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」が不正アクセスを受けたことに伴い",
      certainty: "possible",
      dataNote: "公表日は最終更新日のみ。漏洩の可能性はアルカディアの公表を引用する形で記載。サービス停止（10月13日11時から）の告知を兼ねる。"
    },
    "二宮町（防災メール）": {
      officialUrl: "https://www.town.ninomiya.kanagawa.jp/0000003632.html",
      events: [
        E("incident", "2026-10-11", "事業発生日 令和8年10月11日", "@"),
        E("vendor_notified", "2026-10-13", "二宮町には13日に報告あり", "@"),
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "公表日は更新日のみ。"
    },
    "神奈川県（大気汚染情報メール・テレホン配信サービス）": {
      officialUrl: "https://www.pref.kanagawa.jp/docs/pf7/r4075583.html",
      events: [
        E("vendor_notified", "2026-10-13", "10月13日（火曜日）に、アルカディアから…漏えいした可能性があるとの連絡", "@"),
        E("vendor_notified", "2026-10-14", "14日に…テレホンサービス利用者の電話番号も漏えいした可能性があるとの連絡", "@"),
        E("disclosed", "2026-10-14", "2026年10月14日 記者発表資料", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスを受け",
      certainty: "possible",
      dataNote: "第１報。6321件は光化学スモッグ注意報情報メールの登録件数（2026年3月末時点）で、他のメール配信・テレホンサービスの件数は確認中。テレホンサービスの令和7年度利用件数は277件・275件と記載。"
    },
    "大磯町（防災生活情報メール）": {
      officialUrl: "https://www.town.oiso.kanagawa.jp/kinkyu/25377.html",
      events: [
        E("incident", "2026-10-11", "事象発生日 令和８年10月11日（日曜日）", "@"),
        E("vendor_notified", "2026-10-13", "大磯町には13日に報告あり", "@"),
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "第三者からの不正アクセスにより",
      certainty: "possible",
      dataNote: "公表日は更新日のみ。氏名や住所等は含まれないと記載。"
    },
    "長岡市（ながおかＤメールプラス等）": {
      officialUrl: "https://www.bousai.city.nagaoka.niigata.jp/news/2026/2026-1014-0858-9.html",
      events: [
        E("disclosed", "2026-10-14", "2026.10.14", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスにより",
      certainty: "possible",
      dataNote: "本文はアルカディア／SpeeCAN RAIDENの名称を出さず、事業者のお知らせページ（arcadia.co.jp/info/4076）へリンク。電話配信サービスの氏名・電話番号、市職員の氏名・メールアドレスも対象。"
    },
    "三条市（メール配信サービス）": {
      officialUrl: "https://www.city.sanjo.niigata.jp/soshiki/somubu/dxsuishinka/security/21283.html",
      events: [
        E("vendor_notified", "2026-10-13", "10月13日（火曜日）午後2時12分 メールにより運営事業者から三条市に連絡", "@"),
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが確認され",
      certainty: "possible",
      dataNote: "公表日は更新日のみ。小中学校用・保育所/児童クラブ用の登録者情報も対象。"
    },
    "湯沢町（緊急情報メール）": {
      officialUrl: "https://www.town.yuzawa.lg.jp/kurashinojoho/kurashi_tetsuzuki/2/3/3/1/8104.html",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日、…サービス提供事業者（株式会社アルカディア）より…発表", "@"),
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "不正アクセスによる",
      certainty: "possible",
      dataNote: "公表日は更新日のみ。一部登録者へ不審なメールが届いていると記載。"
    },
    "新潟市（にいがた防災メール等）": {
      officialUrl: "https://www.city.niigata.lg.jp/kurashi/bosai/oshirase_ichiran/20261014bousaijouhou.html",
      events: [
        E("disclosed", "2026-10-14", "令和８年 10 月 14 日 新潟市報道資料", "https://www.city.niigata.lg.jp/kurashi/bosai/oshirase_ichiran/20261014bousaijouhou.files/bousaijouhoufusei.pdf"),
        E("update", "2026-10-15", "最終更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスにより",
      certainty: "possible",
      dataNote: "件数はページからリンクされた報道資料PDF（10月14日）の表による（PDF抽出テキストのため行と件数の対応は掲載順で解釈）。n はにいがた防災メールの42,472件。"
    },
    "志賀町（防災メール）": {
      officialUrl: "https://www.town.shika.lg.jp/page/10885.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスを受けた可能性",
      certainty: "possible",
      dataNote: "公表日は更新日のみ。10月14日13時00分から配信停止と記載。"
    },
    "上野原市（行政防災うえのはらメール・NET119等）": {
      officialUrl: "https://www.city.uenohara.yamanashi.jp/page/1027600.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "同社のサーバーに対して第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "公表日は更新日のみ。n は行政防災うえのはらメールの1,855件。"
    },
    "各務原市消防本部（119RAIDEN・NET119）": {
      officialUrl: "https://www.city.kakamigahara.lg.jp/life/bousai/1001268/1001319/1029647.html",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日、…株式会社アルカディアから…発表がありました", "@"),
        E("disclosed", "2026-10-14", "更新日 令和8年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "同社のサーバーに対して第三者による不正アクセスが発生",
      certainty: "possible",
      dataNote: "disclosedはページの更新日（ページ上の唯一の日付）。nは2サービスのうち大きい方（約930件）。合算せず。"
    },
    "羽島市消防（119RAIDEN）": {
      officialUrl: "https://www.city.hashima.lg.jp/7008.html",
      events: [
        E("disclosed", "2026-10-14", "2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "第三者からのシステムへの不正アクセスを受け",
      certainty: "possible",
      dataNote: "同市は別ページで「NET119緊急通報システムへの不正アクセスによる個人情報漏えいの可能性」も掲載（本バッチ対象外）。"
    },
    "美濃市（防災・あんしんメール）": {
      officialUrl: "https://www.city.mino.gifu.jp/docs/3134978.html",
      events: [
        E("disclosed", "2026-10-14", "2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアが、外部から不正アクセスを受けた",
      certainty: "possible"
    },
    "三島市（みしまるホッとメール）": {
      officialUrl: "https://www.city.mishima.shizuoka.jp/page/37885.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "disclosedはページの更新日（ページ上の唯一の日付）。本文は「運営会社／管理会社」とのみ記載（SpeeCAN RAIDEN公式ブログへリンク）。"
    },
    "松崎町（防災メール）": {
      officialUrl: "https://www.town.matsuzaki.shizuoka.jp/docs/2026101400011/",
      events: [
        E("disclosed", "2026-10-14", "公開日 2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "管理会社（株式会社アルカディア）に、不正アクセスが確認されました",
      certainty: "possible"
    },
    "西尾市（SpeeCAN RAIDEN）": {
      officialUrl: "https://www.city.nishio.aichi.jp/kurashi/bosai/1008157/1012456.html",
      events: [
        E("disclosed", "2026-10-14", "2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN…」（運営：株式会社アルカディア）に第三者による不正アクセス",
      certainty: "possible",
      dataNote: "件数は重複登録や無効データを含む登録件数。合計は市の記載。"
    },
    "北名古屋市（児童クラブ緊急連絡メール）": {
      officialUrl: "https://www.city.kitanagoya.lg.jp/kosodate/1007714.html",
      events: [
        E("vendor_notified", "2026-10-13", "10月13日14時12分 本市への情報提供", "@"),
        E("disclosed", "2026-10-14", "2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "運営する事業者への第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "incidentは事業者が不審な挙動を確認した日時。"
    },
    "多気町（おかえりSOSネットワーク）": {
      officialUrl: "https://www.town.taki.mie.jp/life/soshiki/kenko_fukushi/koreishafukushi_kaigo/1/5547.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが確認され",
      certainty: "possible",
      dataNote: "disclosedはページの更新日（ページ上の唯一の日付）。松阪市・明和町・大台町との共同運営（所管は松阪市）。"
    },
    "津市（防災情報メール・職員参集メール・徘徊SOS）": {
      officialUrl: "https://www.info.city.tsu.mie.jp/kurashi/bousai_kyuukyuu_shoubou/1003370/1003406/1003428/1014020.html",
      events: [
        E("disclosed", "2026-10-14", "2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "SpeeCAN RAIDENへ不正アクセスが行われ",
      certainty: "possible",
      dataNote: "市は報道を受けて10月14日に事業者へ確認。件数はSpeeCAN RAIDENへの登録数で、閲覧の可能性は否定できないとの記載。nは最大の単一区分。"
    },
    "鈴鹿市（災害メールシステム・職員参集システム）": {
      officialUrl: "https://www.city.suzuka.lg.jp/kurashi/safe/1001523/1018091.html",
      events: [
        E("disclosed", "2026-10-14", "2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "運営会社（株式会社アルカディア）に対する第三者による不正アクセスが確認されました",
      certainty: "possible",
      dataNote: "旧メルモニ登録者も対象。"
    },
    "多賀町（総合情報配信システム）": {
      officialUrl: "https://www.town.taga.lg.jp/important/2788.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "委託している業者(株式会社アルカディア)のメール配信システム(SpeeCAN RAIDEN)が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "disclosedは更新日。"
    },
    "豊郷町（メール配信システム）": {
      officialUrl: "https://www.town.toyosato.shiga.jp/0000004049.html",
      events: [
        E("disclosed", "2026-10-14", "公開日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "委託している業者(株式会社アルカディア)のメール配信システム(SpeeCAN RAIDEN)が不正アクセスを受けた",
      certainty: "possible"
    },
    "愛荘町（あいしょうタウンめーる）": {
      officialUrl: "https://www.town.aisho.shiga.jp/soshiki/keiei/1/1/1/15483.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "委託先事業者のメール配信システム（SpeeCANRAIDEN）が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "disclosedは更新日。"
    },
    "福知山市消防本部（消防メール）": {
      officialUrl: "https://www.city.fukuchiyama.lg.jp/site/syoubou/89846.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "消防メール配信システムを運営する事業者への第三者による不正アクセス",
      certainty: "possible",
      dataNote: "disclosedは更新日。"
    },
    "城陽市（安心・安全メール）": {
      officialUrl: "https://www.city.joyo.kyoto.jp/0000012712.html",
      events: [
        E("disclosed", "2026-10-14", "2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "安心・安全メール配信サービスを運営する事業者への第三者による不正アクセス",
      certainty: "possible",
      dataNote: "「現時点での情報の流出は確認されていません」と併記。"
    },
    "綾部市（行方不明者早期発見SOSメール）": {
      officialUrl: "https://www.city.ayabe.lg.jp/0000004720.html",
      events: [
        E("disclosed", "2026-10-14", "初版公開日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "SOSメール配信サービスを運営する事業者への第三者による不正アクセス",
      certainty: "possible",
      dataNote: "「現時点での情報の流出は確認されておりません」と併記。"
    },
    "宮津市（みやづ情報メール）": {
      officialUrl: "https://www.city.miyazu.kyoto.jp/site/press/31537.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新（題名に令和8年10月14日）", "@")
      ],
      causes: ["vendor"], causeText: "メール配信サービスを運営する事業者への第三者による不正アクセス",
      certainty: "possible",
      dataNote: "「現時点での情報の流出は確認されていません」と併記。"
    },
    "向日市（防災・防犯メール）": {
      officialUrl: "https://www.city.muko.kyoto.jp/soshiki/11/19422.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "事業者（株式会社アルカディア）のシステムに対し第三者による不正アクセス",
      certainty: "possible",
      dataNote: "「現時点での情報の流出は確認されていません」と併記。disclosedは更新日。"
    },
    "長岡京市（防災情報メール等8サービス）": {
      officialUrl: "https://www.city.nagaokakyo.lg.jp/0000013962.html",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日（火曜日）…運営事業者…から…報告", "@"),
        E("disclosed", "2026-10-14", "2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "同社のサーバーに対して第三者による不正アクセスが発生",
      certainty: "possible",
      dataNote: "「現時点では個人情報の流出や悪用は確認されていません」と併記。"
    },
    "木津川市（防災情報メール）": {
      officialUrl: "https://www.city.kizugawa.lg.jp/0000003468.html",
      events: [
        E("disclosed", "2026-10-14", "公開日：2026年10月14日", "@"),
        E("update", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのシステムに対し第三者による不正アクセス",
      certainty: "possible"
    },
    "豊能町（たんぽぽメール）": {
      officialUrl: "https://www.town.toyono.osaka.jp/gyousei/about/ippanjouhou/page008411.html",
      events: [
        E("vendor_notified", "2026-10-13", "アルカディアより令和8年10月13日（火）に受けました", "@"),
        E("disclosed", "2026-10-14", "令和8年10月14日付けで報道提供", "@"),
        E("update", "2026-10-19", "【更新日】2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」において、第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "disclosedはページに記載された報道提供日。"
    },
    "泉佐野市（防災情報配信サービス）": {
      officialUrl: "https://www.city.izumisano.lg.jp/kakuka/kikikanri/bousai/menu/bou/osirase/19241.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」（運営会社・株式会社アルカディア）が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "10月11日はアルカディア側の検知。disclosedは更新日。"
    },
    "高槻市（緊急・災害情報伝達サービス等）": {
      officialUrl: "https://www.city.takatsuki.osaka.jp/soshiki/6/187835.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "不正アクセスにより情報漏洩の可能性があることが発表されています",
      certainty: "possible",
      dataNote: "サービス別の個別ページへのリンクあり（本エントリは利用状況まとめページ）。disclosedは更新日。"
    },
    "忠岡町（ただおかメール等）": {
      officialUrl: "https://www.town.tadaoka.osaka.jp/soshiki/jichi_bosai/2/6147.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "disclosedは更新日。"
    },
    "神戸市（職員情報伝達メール）": {
      officialUrl: "https://www.city.kobe.lg.jp/a95474/496502948727.html",
      events: [
        E("vendor_notified", "2026-10-13", "2026年10月13日10時50分頃に株式会社アルカディアから神戸市へ連絡", "@"),
        E("disclosed", "2026-10-14", "記者資料提供（2026年10月14日）", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディア（システム運営事業者）が運営する職員情報伝達メールシステム（SpeeCAN RAIDEN）において不正アクセス",
      certainty: "possible",
      dataNote: "事業者側の不審挙動確認時刻（10月11日16時30分）をincidentとして記録。対象は職員情報。"
    },
    "豊岡市": {
      officialUrl: "https://www.city.toyooka.lg.jp/_res/projects/default_project/_page_/001/039/180/20261014-3.pdf",
      events: [
        E("vendor_notified", "2026-10-13", "10月13日（火）14時12分…アルカディアより豊岡市宛てにメールで連絡", "@"),
        E("disclosed", "2026-10-14", "2026年10月14日（記者配布資料）", "@")
      ],
      causes: ["vendor"], causeText: "サービス提供者（株式会社アルカディア）…第三者における不正アクセス",
      certainty: "possible",
      dataNote: "事業者側の不審挙動確認時刻（10月11日16時30分）をincidentとして記録。nは業務別最大の消防団参集約2,000件。児童の生年月日、NET119の既往症等も含む。"
    },
    "西宮市（要配慮者利用施設向け防災情報配信）": {
      officialUrl: "https://www.nishi.or.jp/kurashi/anshin/bosaijoho/oshirase/fusei_access.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "同社のシステムが外部から不正アクセスを受け",
      certainty: "possible",
      dataNote: "事業者側の不審挙動確認時刻（10月11日16時30分）をincidentとして記録。disclosedは更新日。登録は施設・事業者（一部個人名含む）。市民向け「にしのみや防災ネット」は影響なし。"
    },
    "相生市": {
      officialUrl: "https://www.city.aioi.lg.jp/soshiki/kikikanri/fusei-access.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "「防災情報一斉送信サービス（スピーキャン・ライデン）」におきまして、第三者による不正アクセス",
      certainty: "possible",
      dataNote: "事業者側の不審挙動確認時刻（10月11日16時30分）をincidentとして記録。disclosedは更新日。"
    },
    "小野市": {
      officialUrl: "https://www.city.ono.hyogo.jp/soshikikarasagasu/shiminanzembu_bosaigroup/15269.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "運営会社（株式会社アルカディア）が第三者による不正アクセスを受けた",
      certainty: "possible",
      dataNote: "disclosedは更新日。小野市安全安心メール・ひょうご防災ネットは影響なし。"
    },
    "広陵町（防災メール）": {
      officialUrl: "https://www.town.koryo.nara.jp/0000008174.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアから…不正アクセスにより個人情報が漏えいした可能性があるとの発表",
      certainty: "possible",
      dataNote: "disclosedは更新日。町への影響は事業者の発表を引用する形。"
    },
    "三郷町（奈良県）": {
      officialUrl: "https://www.town.sango.nara.jp/soshiki/2/14708.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "防災情報配信サービス「SpeeCAN RAIDEN」が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "disclosedは更新日。氏名・住所・電話番号は保有していないとのこと。"
    },
    "奈良市（防災情報メール）": {
      officialUrl: "https://www.city.nara.lg.jp/site/bousai-saigai/276922.html",
      events: [
        E("vendor_notified", "2026-10-13", "10月13日（火曜日）：提供元事業者から…公表・報告", "@"),
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "提供元事業者（株式会社アルカディア）のシステムに対し、第三者からの不正アクセス",
      certainty: "possible",
      dataNote: "事業者側の不審挙動確認時刻（10月11日16時30分）をincidentとして記録。disclosedは更新日。"
    },
    "九度山町": {
      officialUrl: "https://www.town.kudoyama.lg.jp/bousai/bousai/huseiakusesu.html",
      events: [
        E("disclosed", "2026-10-14", "最終更新日:2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN（運営元：株式会社アルカディア）」が、外部からの不正アクセス",
      certainty: "possible",
      dataNote: "disclosedは最終更新日。"
    },
    "上富田町": {
      officialUrl: "https://www.town.kamitonda.lg.jp/soshiki/soumu/gyosei/5406.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "同社サーバーに対して第三者による不正アクセス",
      certainty: "possible",
      dataNote: "disclosedは更新日。"
    },
    "すさみ町": {
      officialUrl: "https://www.town.susami.lg.jp/bousai/01/2026-1014-1613-9.html",
      events: [
        E("disclosed", "2026-10-14", "最終更新日:2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "同社サーバに対し不正アクセスが行われ",
      certainty: "possible",
      dataNote: "disclosedは最終更新日。"
    },
    "和歌山市（防災情報メール）": {
      officialUrl: "https://www.city.wakayama.wakayama.jp/kurashi/bousai_bouhan_koutsu/1000032/1036580/1068840.html",
      events: [
        E("vendor_notified", "2026-10-13", "10月13日 14時12分 個人情報漏洩の可能性がある報告メールを受信", "@"),
        E("disclosed", "2026-10-14", "市長定例記者会見資料（令和8年10月14日）", "@"),
        E("update", "2026-10-19", "更新日 令和8年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "防災情報配信システム提供元業者のネットワークが外部から不正アクセス",
      certainty: "possible",
      dataNote: "disclosedは掲載の記者会見資料の日付（10月14日）。本文「令和8年10月13日…不正アクセスが行われ…報告を受けた」は報告受領日の文脈のため事件日としては記録せず。"
    },
    "那智勝浦町": {
      officialUrl: "https://www.town.nachikatsuura.wakayama.jp/info/1841",
      events: [
        E("leak_possible", "2026-10-13", "令和８年10月13日…漏えいした可能性があることが判明", "@"),
        E("disclosed", "2026-10-14", "更新日2026年10月14日 更新", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN（運営：株式会社アルカディア）」が外部からの不正アクセス",
      certainty: "possible",
      dataNote: "disclosedは更新日。"
    },
    "印南町": {
      officialUrl: "https://www.town.wakayama-inami.lg.jp/0000001916.html",
      events: [
        E("disclosed", "2026-10-14", "[公開日：2026年10月14日]", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN（運営会社：株式会社アルカディア）」が、外部から不正アクセス",
      certainty: "possible"
    },
    "米子市（緊急情報FAX等配信サービス）": {
      officialUrl: "https://www.city.yonago.lg.jp/item/62900.htm",
      events: [
        E("disclosed", "2026-10-14", "掲載日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "運営する事業者への第三者による不正アクセス",
      certainty: "possible",
      dataNote: "ページに事業者名の明記なし（piyologでアルカディア関連として掲載）。障がい者支援課の告知。"
    },
    "鳥取市": {
      officialUrl: "https://www.city.tottori.lg.jp/jikenjiko/50577.html",
      events: [
        E("disclosed", "2026-10-14", "提供年月日2026年10月14日", "@"),
        E("update", "2026-10-15", "更新日：2026年10月15日更新", "@")
      ],
      causes: ["vendor"], causeText: "Speecanraiden（事業者：(株)アルカディア）への第三者による不正アクセス",
      certainty: "possible"
    },
    "島根県（道路規制情報システム）": {
      officialUrl: "https://www.pref.shimane.lg.jp/press_release/2026/tliih22sqpum.html",
      events: [
        E("disclosed", "2026-10-14", "掲載日令和8年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのメール配信システム（SpeeCAN RAIDEN）の一部サービスに対し第三者による不正アクセス",
      certainty: "possible",
      dataNote: "県システムへの直接的な不正アクセスは確認されていないと記載。件数は19市町村ごとの延べ登録数。"
    },
    "江津市（ごうつ防災メール）": {
      officialUrl: "https://www.city.gotsu.lg.jp/soshiki/4/42638.html",
      events: [
        E("disclosed", "2026-10-14", "掲載日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "運営会社である株式会社アルカディアにおいて、第三者の不正アクセスが確認されました",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（掲載日）のみのため、それを公表日として記録。"
    },
    "松江市消防本部（NET119緊急通報システム）": {
      officialUrl: "https://www.city.matsue.lg.jp/kurashi_tetsuzuki/anzen_anshin/7/26695.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "NET119緊急通報システムにおいて、第三者による不正アクセスを受けた形跡が確認され",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（掲載日）のみのため、それを公表日として記録。"
    },
    "玉野市（玉野市防災メールマガジン）": {
      officialUrl: "https://www.city.tamano.lg.jp/site/bousai/59190.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "防災情報等発信システム「SpeeCAN RAIDEN」が第三者による不正アクセスを受けた",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（掲載日）のみのため、それを公表日として記録。件数は登録者数。"
    },
    "廿日市市（はつかいちし安全・安心メール）": {
      officialUrl: "https://www.city.hatsukaichi.hiroshima.jp/soshiki/3/145721.html",
      events: [
        E("disclosed", "2026-10-14", "掲載日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアが運営するSpeeCAN RAIDEN）が不正アクセスを受けました",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（掲載日）のみのため、それを公表日として記録。"
    },
    "福山市（ふくやま防災メール）": {
      officialUrl: "https://www.city.fukuyama.hiroshima.jp/site/bosai/415082.html",
      events: [
        E("disclosed", "2026-10-14", "掲載日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN（運営元・株式会社アルカディア）」が、外部から不正アクセスを受けた",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（掲載日）のみのため、それを公表日として記録。"
    },
    "府中市（広島県）（災害時情報配信サービス）": {
      officialUrl: "https://www.city.fuchu.hiroshima.jp/shisei/11961.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」システムにおいて、外部からの不正アクセスを受け",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（掲載日）のみのため、それを公表日として記録。"
    },
    "府中町（防災情報メール）": {
      officialUrl: "https://www.town.fuchu.hiroshima.jp/site/kikikannrika/57853.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアが運営する「SpeeCAN RAIDEN」）のシステムが不正アクセスを受けました",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（掲載日）のみのため、それを公表日として記録。"
    },
    "三次市（三次市防災一斉メール）": {
      officialUrl: "https://www.city.miyoshi.hiroshima.jp/site/bousai/42206.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアが運営するSpeecan Raiden）が不正アクセスを受けました",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（掲載日）のみのため、それを公表日として記録。"
    },
    "海田町（海田町防災メール）": {
      officialUrl: "https://www.town.kaita.lg.jp/soshiki/8/148670.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "運営する事業者（(株)アルカディア）への第三者による不正アクセス",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（掲載日）のみのため、それを公表日として記録。"
    },
    "大竹市（防災メール・保育所/児童クラブ連絡メール・NET119等）": {
      officialUrl: "https://www.city.otake.hiroshima.jp/soshiki/somu/kikikanri/gyoumukiki/5/jyouhoudentatu/9508.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "配信サービス運営事業者への第三者による不正アクセス",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（掲載日）のみのため、それを公表日として記録。「現時点での情報の流出は確認されていません」とも記載。"
    },
    "周南市（しゅうなんメール（災害情報）・職員参集システム）": {
      officialUrl: "https://www.city.shunan.lg.jp/soshiki/9/153516.html",
      events: [
        E("disclosed", "2026-10-14", "サービス緊急停止について(令和8年10月14日）", "@"),
        E("update", "2026-10-15", "再開について(令和8年10月15日）", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセス",
      certainty: "possible",
      dataNote: "10月11日は事業者側で不審な挙動が発生した日時（ページ記載）。同一ページに第1報（10月14日）と再開の続報（10月15日）を掲載。"
    },
    "山口市（防災情報配信サービス）": {
      officialUrl: "https://www.city.yamaguchi.lg.jp/soshiki/4/201461.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアにおいて、不正アクセス事案が発生し",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（掲載日）のみのため、それを公表日として記録。"
    },
    "光市（メール配信サービス）": {
      officialUrl: "https://www.city.hikari.lg.jp/soshiki/2/bosai/kurashi/1/16756.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "システム業者のサーバーが不正アクセスを受けたもの",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（掲載日）のみのため、それを公表日として記録。漏洩可能性のある情報は業者発表の引用で、「光市民の皆様の個人情報の漏洩は確認されていません」と記載。"
    },
    "鳴門市（防災行政無線メール配信サービス）": {
      officialUrl: "https://www.city.naruto.lg.jp/news/2026101400042/",
      events: [
        E("disclosed", "2026-10-14", "公開日 2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが行われたため",
      certainty: "possible",
      dataNote: "個人情報保護委員会へ報告したと記載。"
    },
    "つるぎ町（つるぎ町情報配信メール・電話）": {
      officialUrl: "https://www.town.tokushima-tsurugi.lg.jp/docs/6435254.html",
      events: [
        E("disclosed", "2026-10-14", "2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのシステムに対し、第三者による不正アクセスが行われ",
      certainty: "possible"
    },
    "那賀町（認知症高齢者等SOSネットワークシステム）": {
      officialUrl: "https://www.town.tokushima-naka.lg.jp/news_kinkyu/5013.html",
      events: [
        E("vendor_notified", "2026-10-13", "個人情報漏えいの可能性がある旨の連絡が令和8年10月13日（火曜日）にありました", "@"),
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "委託先である株式会社アルカディアより、第三者による不正アクセスが行われた",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（掲載日）のみのため、それを公表日として記録。"
    },
    "三木町（香川県）（防災行政メール）": {
      officialUrl: "https://www.town.miki.lg.jp/life/dtl.php?hdnKey=8880",
      events: [
        E("disclosed", "2026-10-14", "総務課 ： 2026/10/14", "@")
      ],
      causes: ["vendor"], causeText: "システムを運営する事業者に対し、第三者による不正アクセスが行われ",
      certainty: "possible"
    },
    "八幡浜市（消防団連絡メール等）": {
      officialUrl: "https://www.city.yawatahama.ehime.jp/doc/2026101400035/",
      events: [
        E("leak_possible", "2026-10-14", "個人情報が漏えいした可能性があることを本日確認", "@"),
        E("disclosed", "2026-10-14", "公開日 2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのシステムに対し第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "「本日確認」は公開日（10月14日）を指すものとして記録。"
    },
    "久万高原町（防災情報メール・職員参集メール）": {
      officialUrl: "https://www.kumakogen.jp/soshiki/2/27258.html",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日(火曜日)…運営事業者から…メールで報告", "@"),
        E("disclosed", "2026-10-14", "2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "運営事業者（株式会社アルカディア）において、第三者による不正アクセスが発生し",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（掲載日）のみのため、それを公表日として記録。"
    },
    "安芸市（防災行政無線メール・FAX配信）": {
      officialUrl: "https://www.city.aki.kochi.jp/life/dtl.php?hdnKey=8910",
      events: [
        E("leak_possible", "2026-10-13", "令和8年10月13日…登録されている情報が漏洩した可能性があることが判明", "@"),
        E("disclosed", "2026-10-14", "危機管理課 ： 2026/10/14", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのネットワークが外部から不正アクセスを受け",
      certainty: "possible",
      dataNote: "「漏洩した可能性のある情報が不特定多数に公開された事実や、不正利用された事実は確認されておりません」とも記載。"
    },
    "南国市（南国市防災メール）": {
      officialUrl: "https://www.city.nankoku.lg.jp/life/life_dtl.php?hdnKey=10204",
      events: [
        E("leak_possible", "2026-10-13", "漏えいした可能性があることを、同月13日（火曜日）に確認", "@"),
        E("disclosed", "2026-10-14", "掲載日 ： 2026/10/14", "@")
      ],
      causes: ["vendor"], causeText: "運用管理業者において第三者による不正アクセスが確認され",
      certainty: "possible"
    },
    "大牟田市（災害情報テレホン・FAX、職員参集システム等）": {
      officialUrl: "https://www.city.omuta.lg.jp/kiji00321868/index.html",
      events: [
        E("disclosed", "2026-10-14", "最終更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアに対し第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（掲載日）のみのため、それを公表日として記録。合計の記載はないため最大の単一値を n とした。"
    },
    "久留米市（防災メール・職員参集メール）": {
      officialUrl: "https://www.city.kurume.fukuoka.jp/1500soshiki/9096bousai/3010oshirase/2026-1014-1307-87.html",
      events: [
        E("disclosed", "2026-10-14", "令和８年１０月１４日（第一報）", "https://www.city.kurume.fukuoka.jp/1500soshiki/9096bousai/3010oshirase/files/dai1ppou1.pdf")
      ],
      causes: ["vendor"], causeText: "運営事業者が第三者による不正アクセスを受け",
      certainty: "possible",
      dataNote: "件数は登録者数。第一報PDFでは「情報漏洩については調査中であり、現在のところ確認されていません」と記載。"
    },
    "広川町（広川町情報（防災）配信メール）": {
      officialUrl: "https://www.town.hirokawa.fukuoka.jp/kurashi_tetsuzuki/anzen_anshin/2/7266.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "システムへ第三者の不正アクセスが疑われ",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（掲載日）のみのため、それを公表日として記録。"
    },
    "福津市（防災行政情報メール）": {
      officialUrl: "https://www.city.fukutsu.lg.jp/information/21183.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "防災行政情報メールを配信するために使用しているシステムが不正アクセスを受け",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（掲載日）のみのため、それを公表日として記録。"
    },
    "宇美町（宇美町防災メール）": {
      officialUrl: "https://www.town.umi.lg.jp/soshiki/59/72189.html",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日…運営事業者…から、不正なアクセスを受けた旨の報告", "@"),
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "運営事業者（株式会社アルカディア）のサーバーに対し、第三者による不正アクセスが確認されました",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（掲載日）のみのため、それを公表日として記録。"
    },
    "水巻町（災害情報等配信サービス）": {
      officialUrl: "https://www.town.mizumaki.lg.jp/s026/20261014100340.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "アルカディアのネットワークが外部からの不正アクセスを受け",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（掲載日）のみのため、それを公表日として記録。"
    },
    "宗像市（緊急情報伝達システム）": {
      officialUrl: "https://www.city.munakata.lg.jp/kiji00310490/index.html",
      events: [
        E("vendor_notified", "2026-10-13", "令和８年１０月１３日１４時１２分に株式会社アルカディアから宗像市へ連絡", "@"),
        E("disclosed", "2026-10-14", "最終更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "災害時一斉情報配信サービス運営事業者への第三者による不正アクセス",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。10月11日16時30分は事業者（アルカディア）側で不審な挙動を確認した日時（ページ記載）。"
    },
    "飯塚市（防災情報配信サービス）": {
      officialUrl: "https://www.city.iizuka.lg.jp/site/bousai/23691.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN(運用元：株式会社アルカディア）」が、外部から不正アクセスを受けた",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。"
    },
    "古賀市（防災メール）": {
      officialUrl: "https://www.city.koga.fukuoka.jp/news/d/6738",
      events: [
        E("disclosed", "2026-10-14", "2026/10/14危機管理課", "@")
      ],
      causes: ["vendor"], causeText: "防災メールを配信するために使用しているシステムが、外部から不正アクセスを受け",
      certainty: "possible"
    },
    "岡垣町（職員参集システム）": {
      officialUrl: "https://www.town.okagaki.lg.jp/s019/20261014091949.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」への不正アクセス",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。住民の個人情報は登録していないと記載。"
    },
    "北九州市（災害情報配信サービス）": {
      officialUrl: "https://www.city.kitakyushu.lg.jp/contents/13801401_00003.html",
      events: [
        E("disclosed", "2026-10-14", "更新日 : 2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアが運営する一斉配信サービス「SpeeCAN RAIDEN」において、不正アクセス",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。10月11日16時30分は事業者（アルカディア）側で不審な挙動を確認した日時（ページ記載）。災害情報自動配信サービス・もらって安心災害情報配信サービスの登録者が対象。"
    },
    "中間市（SpeeCAN RAIDEN・RAIDEN119・NET119）": {
      officialUrl: "https://www.city.nakama.lg.jp/site/bousai/21210.html",
      events: [
        E("disclosed", "2026-10-14", "令和8年10月14日 中間市総務部安全安心まちづくり課", "@"),
        E("update", "2026-10-15", "10月15日現在の情報", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」において、個人情報が漏洩している可能性があるとの報告を運営元であります株式会社アルカディアから受けました",
      certainty: "possible",
      dataNote: "件数は10月15日更新分。サービス別の件数であり合算しない（nはSpeeCAN RAIDEN分）。"
    },
    "武雄市（防災メール等）": {
      officialUrl: "https://www.city.takeo.lg.jp/information/2026/10/016140.html",
      events: [
        E("disclosed", "2026-10-14", "投稿日：2026年10月14日(水)", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのシステムに対して、第三者による不正アクセスが確認",
      certainty: "possible",
      dataNote: "件数はサービス別（合算しない）。防災アプリ「たけぼう」は対象外。"
    },
    "基山町（防災情報電話配信サービス）": {
      officialUrl: "https://www.town.kiyama.lg.jp/kiji0036743/index.html",
      events: [
        E("disclosed", "2026-10-14", "最終更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "運用会社（株式会社アルカディア）が不正アクセスを受け",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。"
    },
    "上峰町（防災メール マモル）": {
      officialUrl: "https://www.town.kamimine.lg.jp/kiji0031658/index.html",
      events: [
        E("disclosed", "2026-10-14", "最終更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "運用会社（株式会社アルカディア）が不正アクセスを受け",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。"
    },
    "伊万里市（防災メール）": {
      officialUrl: "https://www.city.imari.lg.jp/item/39179.htm#pagetop",
      events: [
        E("disclosed", "2026-10-14", "(2026年10月14日更新)", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN（運営元・株式会社アルカディア）」が、外部から不正アクセスを受けた",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。漏えい対象項目の記載なし。"
    },
    "吉野ヶ里町（吉野ヶ里メール）": {
      officialUrl: "https://www.town.yoshinogari.lg.jp/lifeinfo/soshiki/somu/1/2/5595.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "運用会社（株式会社アルカディア）が不正アクセスを受け",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。"
    },
    "諫早市（防災メール）": {
      officialUrl: "https://www.city.isahaya.nagasaki.jp/soshiki/3/50411.html",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日…株式会社アルカディアから本市に対し…報告", "@"),
        E("disclosed", "2026-10-14", "更新日：2026年10月14日更新", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」に対し、第三者による不正アクセスがあった",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。"
    },
    "大村市（防災情報メールマガジン）": {
      officialUrl: "https://www.city.omura.nagasaki.jp/bousai/kurashi/anzen/bosai/fusei-access.html",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日（火曜日）…報告を受けました", "@"),
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」に対し第三者による不正アクセスがあり",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。10月11日16時30分は事業者（アルカディア）側で不審な挙動を確認した日時（ページ記載）。"
    },
    "佐々町（防災行政無線メール配信システム）": {
      officialUrl: "https://www.sazacho-nagasaki.jp/kiji0036435/index.html",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日…連絡がありました", "@"),
        E("disclosed", "2026-10-14", "最終更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアの「SpeeCANRAIDEN」において、第三者による不正アクセス",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。"
    },
    "壱岐市（メールサービス）": {
      officialUrl: "https://www.city.iki.nagasaki.jp/shisei/oshirase/16500.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "同社サーバーが第三者による不正アクセスを受け",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。10月11日16時30分は事業者（アルカディア）側で不審な挙動を確認した日時（ページ記載）。"
    },
    "合志市（防災情報お知らせメール）": {
      officialUrl: "https://www.city.koshi.lg.jp/kiji00325893/index.html",
      events: [
        E("disclosed", "2026-10-14", "最終更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "システム会社（株式会社アルカディア)が、第三者による不正アクセスを受けました",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。"
    },
    "南小国町（防災情報システム）": {
      officialUrl: "https://www.town.minamioguni.lg.jp/news/2026/2969.html",
      events: [
        E("disclosed", "2026-10-14", "2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "情報システムを運営する事業者への第三者による不正アクセス",
      certainty: "possible"
    },
    "嘉島町（一斉配信メールシステム）": {
      officialUrl: "https://www.town.kumamoto-kashima.lg.jp/q/aview/55/6362.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "システム会社が、第三者による不正アクセスを受けました",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。"
    },
    "大分市（防災メール等）": {
      officialUrl: "https://www.city.oita.oita.jp/o009/fuseiaccess20261013.html",
      events: [
        E("disclosed", "2026-10-14", "更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのシステムに対し第三者による不正アクセス",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。防災メール・電話FAX配信・職員参集システム・自治委員連絡メールの登録者が対象。"
    },
    "日田市（ひた防災メール等）": {
      officialUrl: "https://www.city.hita.oita.jp/site/bousai/19172.html",
      events: [
        E("leak_possible", "2026-10-13", "令和8年10月13日…個人情報が漏洩した可能性があることを確認", "@"),
        E("disclosed", "2026-10-14", "令和8年10月14日（水曜日）漏洩した可能性がある個人情報を周知", "@"),
        E("update", "2026-10-16", "令和8年10月16日（金曜日）…ひた防災メールの配信再開", "@")
      ],
      causes: ["vendor"], causeText: "サービス提供事業者（株式会社アルカディア）…第三者による不正アクセス",
      certainty: "possible"
    },
    "九重町（消防団一斉メール配信システム）": {
      officialUrl: "https://www.town.kokonoe.oita.jp/docs/2026101400042/",
      events: [
        E("disclosed", "2026-10-14", "公開日 2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "運営事業者に対し、第三者による不正アクセス",
      certainty: "possible"
    },
    "佐伯市（さいき防災メール）": {
      officialUrl: "https://www.city.saiki.oita.jp/kiji00312043/index.html",
      events: [
        E("disclosed", "2026-10-14", "最終更新日：2026年10月14日", "@")
      ],
      causes: ["vendor"], causeText: "委託事業者である株式会社アルカディアに対し第三者による不正アクセス",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。"
    },
    "中津市（緊急情報の電話・FAX配信、職員等参集システム）": {
      officialUrl: "https://www.city-nakatsu.jp/doc/2026102300020/",
      events: [
        E("disclosed", "2026-10-14", "公開日 2026年10月14日", "@"),
        E("update", "2026-10-23", "更新日 2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのシステムに対し、第三者による不正アクセス",
      certainty: "possible",
      dataNote: "piyolog掲載のURL（kinkyudocs）は404のため、現行ページを使用。"
    },
    "帯広市（緊急情報一斉伝達システム）": {
      officialUrl: "https://www.city.obihiro.hokkaido.jp/kurashi/bousai/1007325/1025071.html",
      events: [
        E("disclosed", "2026-10-15", "更新日 2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "ページは復旧告知に更新済み。公表日の記載がなく、ページの更新日を disclosed として記録。"
    },
    "日高町（北海道）（防災情報配信サービス）": {
      officialUrl: "https://www.town.hidaka.hokkaido.jp/prevention/?content=4435",
      events: [
        E("disclosed", "2026-10-15", "更新日 2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "漏洩対象の項目は記載なし。公表日の記載がなく、ページの更新日を disclosed として記録。"
    },
    "中頓別町（防災情報提供メールサービス）": {
      officialUrl: "https://www.town.nakatombetsu.hokkaido.jp/bunya/143483/",
      events: [
        E("disclosed", "2026-10-15", "令和8年10月15日掲載分", "@"),
        E("update", "2026-10-19", "令和8年10月19日掲載分", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセス",
      certainty: "possible"
    },
    "八雲町（NET119）": {
      officialUrl: "https://www.town.yakumo.lg.jp/soshiki/seisaku/261015001.html",
      events: [
        E("leak_possible", "2026-10-14", "令和8年10月14日（水曜日）に判明", "@"),
        E("disclosed", "2026-10-15", "更新日：2026年10月15日更新", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが確認され",
      certainty: "possible",
      dataNote: "公表日の記載がなく、ページの更新日を disclosed として記録。"
    },
    "名寄市（防災情報配信システム）": {
      officialUrl: "http://www.city.nayoro.lg.jp/section/bousai/vdh2d1000000cjsw.html",
      events: [
        E("disclosed", "2026-10-15", "最終更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "運営委託先（株式会社アルカディア）が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "公表日の記載がなく、ページの更新日を disclosed として記録。"
    },
    "中標津町（緊急情報メール キキボウ）": {
      officialUrl: "https://www.nakashibetsu.jp/topics/6333/",
      events: [
        E("disclosed", "2026-10-15", "2026年10月15日(木)", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」に対し、第三者による不正アクセスがあった",
      certainty: "possible",
      dataNote: "令和８年１０月１３日には不審メールへの注意喚起を掲載済み（漏えいの記載はその後の本告知）。個人情報保護委員会へ報告済みと記載。"
    },
    "玖珠町（消防団一斉メール配信システム）": {
      officialUrl: "https://www.town.kusu.oita.jp/soshiki/kichi_bosaitaisakuka/1/1/2/6415.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "運営事業者において、第三者による不正アクセスが発生",
      certainty: "possible",
      dataNote: "日付は更新日のみ。SpeeCAN RAIDEN公式ブログへのリンクあり。"
    },
    "竹田市消防本部（119RAIDEN・NET119）": {
      officialUrl: "https://www.city.taketa.oita.jp/shobo/syoubouosirase/2026/13286.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのシステムに対し第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "日付は更新日のみ。"
    },
    "阿久根地区消防組合（NET119・119RAIDEN）": {
      officialUrl: "https://www.city.akune.lg.jp/soshikikarasagasu/akunechikushoboukumiai/2320.html",
      events: [
        E("disclosed", "2026-10-15", "令和8年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "サービス提供事業者（株式会社アルカディア）に対する不正アクセス",
      certainty: "possible",
      dataNote: "同文のお知らせが阿久根市サイトの「重要なお知らせ」にも掲載（https://www.city.akune.lg.jp/important/7312.html、更新日2026年10月15日）。候補「阿久根市」と同一事案のため1件に統合。"
    },
    "薩摩川内市消防局（NET119）": {
      officialUrl: "https://www.city.satsumasendai.lg.jp/gyoseijoho/johokokai/21393.html",
      events: [
        E("leak_possible", "2026-10-15", "漏えいした可能性があることが、10月15日に判明", "@"),
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "「NET119緊急通報システム」に対する不正アクセス事案",
      certainty: "possible",
      dataNote: "disclosedは更新日。判明日の年はページ上明記なし（10月15日）。"
    },
    "下北地域広域行政事務組合消防本部（NET119）": {
      officialUrl: "http://shimoko.e-shimokita.jp/syobo/17051/",
      events: [
        E("leak_possible", "2026-10-14", "令和８年10月14日（水）15時00分…ホームページに記載され判明", "@"),
        E("disclosed", "2026-10-15", "2026年10月15日 更新", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのネットワークが外部から不正アクセスを受け",
      certainty: "possible",
      dataNote: "disclosedは更新日。"
    },
    "鯖江・丹生消防組合消防本部（NET119・119RAIDEN）": {
      officialUrl: "https://www.fd-sabaenyu.jp/%E5%A7%94%E8%A8%97%E5%85%88%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%81%B8%E3%81%AE%E4%B8%8D%E6%AD%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%AB%E4%BC%B4%E3%81%86%E5%80%8B%E4%BA%BA%E6%83%85%E5%A0%B1/",
      events: [
        E("disclosed", "2026-10-15", "令和８年１０月１５日", "@")
      ],
      causes: ["vendor"], causeText: "外部からの不正アクセスによる個人情報流出の可能性",
      certainty: "possible",
      dataNote: "「流出が認められた個人情報：現時点でありません」とも記載。nは最大の単独数値（119RAIDEN 783名）。"
    },
    "泉州南消防組合（NET119・消防団員等招集システム）": {
      officialUrl: "https://www.senshu-minami119.jp/articles/9187.html",
      events: [
        E("disclosed", "2026-10-15", "令和８年１０月１５日 １１時００分提供", "@")
      ],
      causes: ["vendor"], causeText: "外部から不正アクセスがあり、個人情報が漏洩した可能性",
      certainty: "possible",
      dataNote: "本文は添付PDF（報道提供資料）。10月14日に対象利用者へ注意喚起と記載。ページは2026年10月15日公開。"
    },
    "根室市（ねむろメール）": {
      officialUrl: "https://www.city.nemuro.hokkaido.jp/lifeinfo/kakuka/soumubu/kikikanri/kiki_JOHO/9340.html",
      events: [
        E("disclosed", "2026-10-15", "令和8年10月15日掲載", "@")
      ],
      causes: ["vendor"], causeText: "配信に利用しているシステムについて、不正アクセスがあり",
      certainty: "possible",
      dataNote: "ページ内の10月11日16時30分（不審な挙動確認）・10月12日3時頃（応急措置）はアルカディア側の日時のため本団体のイベントとして記録していない。"
    },
    "森町消防本部（NET119）": {
      officialUrl: "https://www.town.hokkaido-mori.lg.jp/soshiki/morimachishobohonbu/4690.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@"),
        E("vendor_notified", "2026-10-14", "株式会社アルカディア）より、2026年10月14日（水曜日）", "@")
      ],
      causes: ["vendor"], causeText: "システムの運用先で、第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "更新日のみ記載のため更新日をdisclosedとした。氏名・生年月日・性別・住所・電話番号・メールアドレス等。"
    },
    "むつ市（防災情報電話・FAX配信サービス）": {
      officialUrl: "https://www.city.mutsu.lg.jp/government/bousai/telfax_johorouei.html", listedDate: "2026-10-15",
      events: [
        E("update", "2026-10-15", "10月15日15時10分更新", "@")
      ],
      causes: ["vendor"], causeText: "アルカディア…のネットワークが外部から不正アクセスを受け",
      certainty: "possible",
      dataNote: "初回掲載日の記載なし（10月15日の更新時刻のみ）のためdisclosedは省略。10月13日のアルカディア発表・サービス停止の記載あり。ページ内の10月11日16時30分（不審な挙動確認）・10月12日3時頃（応急措置）はアルカディア側の日時のため本団体のイベントとして記録していない。"
    },
    "青森市（防災情報自動配信サービス）": {
      officialUrl: "https://www.city.aomori.aomori.jp/anzen_kinkyu/bousai_shoubou/1002609/1002610/1011518.html", listedDate: "2026-10-15",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日10時48分、株式会社アルカディアから本市に対しメールにて", "@"),
        E("update", "2026-10-15", "復旧のお知らせ（10月15日更新）", "@"),
        E("update", "2026-10-16", "更新日 2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが行われ、個人情報が漏えいした可能性",
      certainty: "possible",
      dataNote: "初回掲載日の記載なしのためdisclosedは省略。nは最大の単一数値（メルマガ登録者約4,900人）。ページ内の10月11日16時30分（不審な挙動確認）・10月12日3時頃（応急措置）はアルカディア側の日時のため本団体のイベントとして記録していない。"
    },
    "藤崎町": {
      officialUrl: "https://www.town.fujisaki.lg.jp/news/index.cfm/detail.9.23600.html",
      events: [
        E("disclosed", "2026-10-15", "更新日: 2026年10月15日", "@"),
        E("vendor_notified", "2026-10-13", "令和8年10月13日14時12分、…アルカディアからの報告により", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが行われ、個人情報が漏洩した可能性",
      certainty: "possible",
      dataNote: "更新日のみ記載のため更新日をdisclosedとした（登録日2018年はページ登録日）。"
    },
    "北上市（防災情報メール）": {
      officialUrl: "https://www.city.kitakami.iwate.jp/life/emergency/30209.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」に、第三者による不正アクセスがあり",
      certainty: "possible",
      dataNote: "更新日のみ記載のため更新日をdisclosedとした。"
    },
    "花巻市（SOSネットワーク）": {
      officialUrl: "https://www.city.hanamaki.iwate.jp/kenko_iryo_fukushi/koureinokata/1019854/1026159.html",
      events: [
        E("disclosed", "2026-10-15", "更新日 令和8年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのシステムに対して第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "更新日のみ記載のため更新日をdisclosedとした。nは最大の単一数値（捜索協力者1,222件）。ページ内の10月11日16時30分（不審な挙動確認）・10月12日3時頃（応急措置）はアルカディア側の日時のため本団体のイベントとして記録していない。"
    },
    "真室川町（防災メール等）": {
      officialUrl: "https://www.town.mamurogawa.yamagata.jp/kinkyu/5806.html",
      events: [
        E("disclosed", "2026-10-15", "公開日：2026年10月15日", "@"),
        E("leak_possible", "2026-10-13", "漏洩した可能性があることが10月13日（火曜日）に判明", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのシステムに対し、第三者による不正アクセスが行われ",
      certainty: "possible"
    },
    "会津若松市（災害時電話発信サービス）": {
      officialUrl: "https://www.city.aizuwakamatsu.fukushima.jp/docs/2026101400011/",
      events: [
        E("disclosed", "2026-10-15", "（令和8年10月15日掲載分）", "@"),
        E("update", "2026-10-16", "更新日 2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "「株式会社アルカディア」のシステムが不正アクセスを受けた",
      certainty: "possible"
    },
    "古河市（防災・防犯メール）": {
      officialUrl: "https://www.city.ibaraki-koga.lg.jp/soshiki/shobou/oshirase/22875.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "「古河市防災・防犯メール」が不正アクセスを受けたことが判明",
      certainty: "possible",
      dataNote: "更新日のみ記載のため更新日をdisclosedとした。"
    },
    "常陸太田市（電話一斉配信システム）": {
      officialUrl: "https://www.city.hitachiota.ibaraki.jp/shobo-bosai/news/page011463.html",
      events: [
        E("disclosed", "2026-10-15", "【更新日】2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアの電話一斉配信システムにおいて、第三者による不正アクセスが確認され",
      certainty: "possible",
      dataNote: "更新日のみ記載のため更新日をdisclosedとした。"
    },
    "桐生市（防災アプリHAZARDON）": {
      officialUrl: "https://www.city.kiryu.lg.jp/anzen/bousai/1027750.html",
      events: [
        E("disclosed", "2026-10-15", "令和8年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」に対して、不正アクセスが行われたことにより",
      certainty: "possible"
    },
    "太田市（おおた安全安心メール・Net119）": {
      officialUrl: "https://www.city.ota.gunma.jp/page/1065504.html",
      events: [
        E("access_confirmed", "2026-10-13", "（1）発覚日時 令和8年10月13日（火曜日）11時30分頃", "@"),
        E("disclosed", "2026-10-15", "更新日：2026年10月15日更新", "@")
      ],
      causes: ["vendor"], causeText: "サービス提供事業者から第三者による不正アクセスの可能性があることが発表されました",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。件数は登録者数。「個人情報が実際に漏えいした事実および不正利用の事実は確認されていません」と記載。発覚日時の主体は明記されていない。10月11日は事業者（アルカディア）側の事象としてページに記載された日時。"
    },
    "寄居町（メール配信サービス）": {
      officialUrl: "https://www.town.yorii.saitama.jp/soshiki/28/mailteishi.html",
      events: [
        E("access_confirmed", "2026-10-11", "令和8年10月11日（日曜日）…第三者による不正アクセスが確認された", "@"),
        E("vendor_notified", "2026-10-13", "令和8年10月13日（火曜日）、「株式会社アルカディア」から町へ…報告", "@"),
        E("disclosed", "2026-10-15", "更新日：2026年10月15日更新", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」において、第三者による不正アクセスがあり",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。不正アクセス確認時点の正確な人数は確認中と記載。10月11日の確認は事業者側の事象。"
    },
    "蓮田市消防本部（NET119・119RAIDEN）": {
      officialUrl: "https://www.city.hasuda.saitama.jp/shobo/documents/documents/jouhou.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "(株)アルカディア社のサービスにおいて、不正アクセスが疑われる不審な挙動を確認",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。漏洩可能性は表題で示され、本文は対象サービスと件数のみ記載。漏洩し得る情報項目は記載なし。10月11日は事業者（アルカディア）側の事象としてページに記載された日時。"
    },
    "柏市（かしわメール配信サービス）": {
      officialUrl: "https://www.city.kashiwa.lg.jp/kohokocho/anshinanzen/security_notice/20261013.html",
      events: [
        E("disclosed", "2026-10-15", "更新日令和8(2026)年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN（ライデン）」に第三者による不正アクセスが発生し",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。件数は推計登録者数。個別の漏えい有無は確認できていないと記載。10月11日は事業者（アルカディア）側の事象としてページに記載された日時。"
    },
    "浦安市（電話・ファクス災害時緊急情報配信サービス）": {
      officialUrl: "https://www.city.urayasu.lg.jp/todokede/anzen/bousai/1049604.html",
      events: [
        E("disclosed", "2026-10-15", "更新日 令和8年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアへの不正アクセスが行われ",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。"
    },
    "東久留米市（安心くるめーる等）": {
      officialUrl: "https://www.city.higashikurume.lg.jp/kurashi/anzen/bousai/1028208/1029881/index.html",
      events: [
        E("disclosed", "2026-10-15", "更新日 令和8年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのシステムに、第三者による不正アクセスがあり",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。"
    },
    "国分寺市（消防団指令システム）": {
      officialUrl: "https://www.city.kokubunji.tokyo.jp/bousai/shouboudan/1038579/index.html",
      events: [
        E("disclosed", "2026-10-15", "令和8年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "委託先事業者（…SpeeCAN RAIDEN）が第三者による不正アクセスを受け",
      certainty: "possible"
    },
    "福生市（消防団員参集メール）": {
      officialUrl: "https://www.city.fussa.tokyo.jp/life/disaster/emergency/1021825.html",
      events: [
        E("leak_possible", "2026-10-15", "利用者の個人情報が漏えいした可能性があることを本日確認しました", "@"),
        E("disclosed", "2026-10-15", "令和8年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのシステム（119RAIDEN）に対して、第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "「本日確認」の本日はページの日付（令和8年10月15日）として記録。"
    },
    "秦野市（緊急情報メール）": {
      officialUrl: "https://www.city.hadano.kanagawa.jp/soshiki/3/1016/14264.html",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日、…株式会社アルカディア…から…報告がありました", "@"),
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが行われたため",
      certainty: "possible",
      dataNote: "公表日は更新日（2026年10月15日）のみ記載。件数は漏えいの可能性がある登録者数で、漏えい件数は未確定と記載。"
    },
    "横浜市港南区（緊急時情報伝達システム）": {
      officialUrl: "https://www.city.yokohama.lg.jp/konan/bosai_bohan/saigai/bousai-oshirase.html",
      events: [
        E("leak_possible", "2026-10-13", "個人情報が漏えいした可能性があると令和８年10月13日に判明しました", "@"),
        E("disclosed", "2026-10-15", "最終更新日 2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "運営事業者において、第三者による不正アクセスが発生し",
      certainty: "possible",
      dataNote: "公表日は最終更新日のみ。港南区が利用するサービスは侵入経路となったサービスとは別で、通常どおり稼働と記載。"
    },
    "小田原市（災害情報配信システム）": {
      officialUrl: "https://www.city.odawara.kanagawa.jp/field/disaster/disaster/topics/p42964.html",
      events: [
        E("disclosed", "2026-10-15", "最終更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "不正アクセスがあり",
      certainty: "possible",
      dataNote: "公表日は最終更新日のみ（見出しに【10月15日（木）】）。検知は事業者側の日時として本文に記載。n は防災メールの約21,600件。"
    },
    "横浜市戸塚区（とつか緊急時情報伝達システム）": {
      officialUrl: "https://www.city.yokohama.lg.jp/totsuka/bosai_bohan/saigai/sonota/kinkyuujijyoho.html",
      events: [
        E("leak_possible", "2026-10-13", "個人情報が漏えいした可能性があることが、令和8年10月13日に", "@"),
        E("disclosed", "2026-10-15", "最終更新日 2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生し",
      certainty: "possible",
      dataNote: "公表日は最終更新日のみ。漏えい項目の記載なし。"
    },
    "横浜市瀬谷区（緊急情報伝達システム）": {
      officialUrl: "https://www.city.yokohama.lg.jp/seya/bosai_bohan/saigai/dentatsusystemseya.html",
      events: [
        E("access_confirmed", "2026-10-11", "10月11日16時30分に…システムへの不正アクセスが確認されました", "@"),
        E("leak_possible", "2026-10-13", "10月13日に、当該不正アクセスによる影響が、瀬谷区…に及ぶことが分かりました", "@"),
        E("disclosed", "2026-10-15", "最終更新日 2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "第三者によるシステムへの不正アクセス",
      certainty: "possible",
      dataNote: "公表日は最終更新日のみ。10月11日の確認はアルカディア側の事象。"
    },
    "鎌倉市（NET119緊急通報システム）": {
      officialUrl: "https://www.city.kamakura.kanagawa.jp/kisya/data/2026/20261015.html",
      events: [
        E("vendor_notified", "2026-10-14", "令和8年（2026年）10月14日、…提供事業者（株式会社アルカディア）より…報告", "@"),
        E("disclosed", "2026-10-15", "記者発表資料発表日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "同社サーバーに対して外部からの不正アクセスが行われた形跡があり",
      certainty: "possible",
      dataNote: "18名は登録者数。本文中に「SpeeCAN RAIDEN」の名称はなく、提供事業者アルカディアのサーバーへの不正アクセスとして記載。"
    },
    "新発田市（あんしんメール）": {
      officialUrl: "https://www.city.shibata.lg.jp/kurashi/iza/anshin/1032874.html",
      events: [
        E("leak_possible", "2026-10-11", "判明日：令和8年10月11日（日曜日）16時30分", "@"),
        E("disclosed", "2026-10-15", "更新日 令和8年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのシステムに対する第三者による不正アクセス",
      certainty: "possible",
      dataNote: "候補リンクは一覧ページで、本文は個別ページ（1032874）。「判明日」10月11日16時30分はアルカディア側の検知時刻と同じ。公表日は更新日のみ。漏えい項目の記載なし。"
    },
    "小千谷市（緊急情報メール）": {
      officialUrl: "https://www.city.ojiya.niigata.jp/soshiki/bousai/raiden-jyouhou.html",
      events: [
        E("vendor_notified", "2026-10-13", "10月13日（火曜日）、…株式会社アルカディアから情報提供がありました", "@"),
        E("disclosed", "2026-10-15", "10月15日（木曜日）発表", "@"),
        E("update", "2026-10-16", "10月16日（金曜日）追記", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」が不正アクセスを受けたことに伴い",
      certainty: "possible"
    },
    "魚沼市消防本部（NET119・119ライデン）": {
      officialUrl: "https://www.city.uonuma.lg.jp/site/shoubou-honbu/1044499.html",
      events: [
        E("disclosed", "2026-10-15", "令和 8 年 10 月 15 日 報道資料", "https://www.city.uonuma.lg.jp/uploaded/attachment/30745.pdf")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスがあり",
      certainty: "possible",
      dataNote: "ページの更新日も2026年10月15日。10月11日の検知はアルカディア側の事象。個人情報保護委員会へ報告済みと記載。"
    },
    "燕市（おかえりつばめ～ル）": {
      officialUrl: "https://www.city.tsubame.niigata.jp/kenko/fukushi_kaigo/2/23142.html",
      events: [
        E("disclosed", "2026-10-15", "令和8年10月15日（木曜日）付けにて、…お知らせいたしました", "@"),
        E("update", "2026-10-19", "更新日：2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアに対する不正アクセス",
      dataNote: "10月19日の続報で「個人情報は、漏洩していないことが本日確認されました」と記載。初報日は続報本文の記載による。防災つばめ～ルは別会社のシステム。"
    },
    "高岡市（防災情報一斉配信システム）": {
      officialUrl: "https://www.city.takaoka.toyama.jp/soshiki/kikikanrika/2/1/1/3/14408.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "運営事業者（株式会社アルカディア）への不正アクセスの影響により",
      certainty: "possible",
      dataNote: "サービス復旧のお知らせで、漏洩の可能性は「公表されています」と事業者発表を引用する形。漏洩項目の記載なし。"
    },
    "小諸市（登山防災情報メール）": {
      officialUrl: "https://www.city.komoro.lg.jp/official/tyui_kanki/18618.html",
      events: [
        E("vendor_notified", "2026-10-13", "株式会社アルカディア…から10月13日に連絡がありました", "@"),
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」において、第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "disclosedはページの更新日（ページ上の唯一の日付）。"
    },
    "軽井沢町（防災行政無線電話・Faxサービス）": {
      officialUrl: "https://www.town.karuizawa.lg.jp/site/bousai/25656.html",
      events: [
        E("vendor_notified", "2026-10-13", "運営会社から…連絡が10月13日にありました", "@"),
        E("disclosed", "2026-10-15", "更新日：2026年10月15日更新", "@"),
        E("update", "2026-10-20", "【10月20日現在】", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが確認された可能性",
      certainty: "possible",
      dataNote: "disclosedはページの更新日（ページ上の唯一の日付）。本文に「10月20日現在」の追記があるが更新日は10月15日のまま。"
    },
    "飛騨市消防本部（NET119・119RAIDEN）": {
      officialUrl: "https://www.city.hida.gifu.jp/soshiki/33/88217.html",
      events: [
        E("vendor_notified", "2026-10-14", "令和8年10月14日、…株式会社アルカディアから…発表がありました", "@"),
        E("disclosed", "2026-10-15", "掲載日：2026年10月15日更新", "@")
      ],
      causes: ["vendor"], causeText: "同社のサーバーに対して第三者による不正アクセスが発生",
      certainty: "possible",
      dataNote: "disclosedはページの更新日（ページ上の唯一の日付）。"
    },
    "笠松町（あんしんかさまつメール）": {
      officialUrl: "https://www.town.kasamatsu.gifu.jp/docs/2026101400011/",
      events: [
        E("disclosed", "2026-10-15", "公開日 2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "委託先事業者である株式会社アルカディアが外部から不正アクセスを受けた",
      certainty: "possible",
      dataNote: "サービス停止は令和8年10月13日午前11時から（本文記載）。"
    },
    "下呂市（119Raiden・Net119）": {
      officialUrl: "https://www.city.gero.lg.jp/soshiki/48/40876.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日更新", "@")
      ],
      causes: ["vendor"], causeText: "Speecan Raidenについて、不正アクセスを受け",
      certainty: "possible",
      dataNote: "disclosedはページの更新日（ページ上の唯一の日付）。1,722件は同一人の重複登録を含む登録件数（10月14日時点）。"
    },
    "海津市消防（NET119緊急通報システム）": {
      officialUrl: "https://www.city.kaizu.lg.jp/kurashi/0000003529.html",
      events: [
        E("disclosed", "2026-10-15", "2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのネットワークが外部から不正アクセスを受けた",
      certainty: "possible"
    },
    "多治見市消防本部（NET119緊急通報システム）": {
      officialUrl: "https://www.city.tajimi.lg.jp/kurashi_tetsuduzuki/shobo/1006022/1011138.html",
      events: [
        E("vendor_notified", "2026-10-14", "令和8年10月14日、…株式会社アルカディアから…発表がありました", "@"),
        E("disclosed", "2026-10-15", "令和8年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "同社のサーバーに対して第三者による不正アクセスが発生",
      certainty: "possible"
    },
    "瑞浪市消防（NET119緊急通報システム）": {
      officialUrl: "https://www.city.mizunami.lg.jp/bousai_saigai/bousai/1011965.html",
      events: [
        E("disclosed", "2026-10-15", "令和8年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが行われた形跡があり",
      certainty: "possible"
    },
    "恵那市消防本部（NET119緊急通報システム）": {
      officialUrl: "https://www.city.ena.lg.jp/soshikiichiran/shobohombu/annai/21372.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアにおいて、第三者による不正アクセスが発生",
      certainty: "possible",
      dataNote: "disclosedはページの更新日（ページ上の唯一の日付）。"
    },
    "中津川市消防本部（NET119緊急通報システム）": {
      officialUrl: "https://www.city.nakatsugawa.lg.jp/life/fire/kyukyu/40832.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアにおいて、第三者による不正アクセスが発生",
      certainty: "possible",
      dataNote: "disclosedはページの更新日（ページ上の唯一の日付）。項目に既往歴・かかりつけ病院・緊急連絡先を含む。"
    },
    "島田市（防災メール）": {
      officialUrl: "https://www.city.shimada.shizuoka.jp/kurashi-docs/kikitaisakumail.html",
      events: [
        E("disclosed", "2026-10-15", "不審なメールにご注意ください（令和8年10月15日）", "@"),
        E("update", "2026-10-20", "メール配信の再開について（令和８年10月20日）", "@")
      ],
      causes: ["vendor"], causeText: "管理会社において、不正アクセスが確認されました",
      certainty: "possible",
      dataNote: "本文は「管理会社」とのみ記載（アルカディアのお知らせへリンク、配信元はraiden.ktaiwork.jp）。本文の10月13日は管理会社が不正アクセスを確認した日。"
    },
    "御前崎市（防災メール）": {
      officialUrl: "https://www.city.omaezaki.shizuoka.jp/soshiki/kikikanri/saigaijijohoteikyo/11566.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "運営会社への不正アクセスが確認され",
      certainty: "possible",
      dataNote: "disclosedはページの更新日（ページ上の唯一の日付）。本文の令和8年10月13日は運営会社への不正アクセスが確認された日。本文は「運営会社」とのみ記載（アルカディアのお知らせへリンク）。"
    },
    "浜松市消防局（119RAIDEN・Net119）": {
      officialUrl: "https://www.city.hamamatsu.shizuoka.jp/hfdjoho/1.html",
      events: [
        E("incident", "2026-10-11", "10月11日（日曜日）午後4時30分に同社の他システムへの不正アクセスが疑われた", "@"),
        E("vendor_notified", "2026-10-14", "消防局が事業者から報告を受けた時刻：同日午後4時00分", "@"),
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "運営する事業者（株式会社アルカディア）への第三者による不正アクセス",
      certainty: "possible",
      dataNote: "disclosedはページの更新日（ページ上の唯一の日付）。事業者が漏えい可能性を把握したのは10月14日午後3時（事業者側）。nは最大の単一区分（メール登録者2,159人）。"
    },
    "亀山市（職員参集メール）": {
      officialUrl: "https://www.city.kameyama.mie.jp/docs/2026101500216/",
      events: [
        E("disclosed", "2026-10-15", "公開日 2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアより、外部からの不正アクセスを受けたとの報告",
      certainty: "possible",
      dataNote: "市職員専用サービスで、市民の個人情報は含まれないとしている。disclosedはページの公開日。"
    },
    "菰野町消防本部（NET119）": {
      officialUrl: "https://www2.town.komono.mie.jp/soshiki/18/11471.html",
      events: [
        E("leak_possible", "2026-10-14", "令和8年10月14日…登録されている情報が漏洩した可能性があることが判明", "@"),
        E("disclosed", "2026-10-15", "更新日：2026年10月15日更新", "@")
      ],
      causes: ["vendor"], causeText: "システム提供元業者である株式会社アルカディアのネットワークが外部から不正アクセスを受け",
      certainty: "possible",
      dataNote: "四日市市・桑名市・菰野町の3消防本部で構成する三重北消防指令センターのシステム。44件は菰野町の登録者数。disclosedは更新日（他の日付表示なし）。"
    },
    "御浜町（防災行政無線メール）": {
      officialUrl: "http://www.town.mihama.mie.jp/soshikikarasagasu/somuka/kurashinojoho/3/1829.html",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日14時頃…報告がありました", "@"),
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "同社が運営するSpeeCAN RAIDENにおきまして、第三者による不正アクセス",
      certainty: "possible",
      dataNote: "10月11日はアルカディア側の検知日時。disclosedは更新日。"
    },
    "大台町（おかえりSOSネットワークまつさか）": {
      officialUrl: "https://www.odaitown.jp/kenko_fukushi/koreishafukushi_kaigo/4/3345.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアから、第三者による不正アクセスが確認され",
      certainty: "possible",
      dataNote: "明和町・松阪市・多気町との共同運営システム。disclosedは更新日。"
    },
    "大津市（防災メール）": {
      officialUrl: "https://www.city.otsu.lg.jp/bosai/b/ji/info/76164.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "サービス提供事業者より、第三者からの不正アクセスを受けたとの報告",
      certainty: "possible",
      dataNote: "disclosedは更新日（令和8年10月15日更新の追記あり、初報日の表示なし）。"
    },
    "滋賀県（環境放射線テレメータ一斉通報）": {
      officialUrl: "https://www.pref.shiga.lg.jp/as00/press-release/34227.html",
      events: [
        E("disclosed", "2026-10-15", "提供年月日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアが情報が漏えいした可能性があると公表しているサービスの一覧において、このサービスが含まれている",
      certainty: "possible",
      dataNote: "県民の個人情報は扱っていないとしている。"
    },
    "久御山町（登録型戸別受信システム）": {
      officialUrl: "https://www.town.kumiyama.lg.jp/0000006770.html",
      events: [
        E("disclosed", "2026-10-15", "公開日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "SpeeCAN RAIDEN）が外部から不正アクセスを受けた",
      certainty: "possible",
      dataNote: "町使用サービスは「不正アクセスを受けた可能性は低い」との報告も併記。"
    },
    "大山崎町（防災・防犯メール）": {
      officialUrl: "http://www.town.oyamazaki.kyoto.jp/annai/somuka/kikikanri/saigainosonae/11692.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "事業者（株式会社アルカディア）のシステムに対し第三者による不正アクセス",
      certainty: "possible",
      dataNote: "「現時点での情報の流出は確認されていません」と併記。disclosedは更新日。"
    },
    "京丹後市（メール配信サービス・119RAIDEN）": {
      officialUrl: "https://www.city.kyotango.lg.jp/top/soshiki/somu/digital/1/23416.html",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日…漏洩の可能性があるとの情報提供", "@"),
        E("update", "2026-10-14", "令和8年10月14日…「119RAIDEN」において…漏洩の可能性", "@"),
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "メール配信サービスを運営する事業者へ第三者による不正アクセス",
      certainty: "possible",
      dataNote: "10月11日はアルカディア側の検知。第1報・第2報の報道資料PDFもあるが、記録した日付はページ本文と更新日のみ。disclosedは更新日。"
    },
    "和泉市（いずみメール等）": {
      officialUrl: "https://www.city.osaka-izumi.lg.jp/topics/23976.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのネットワークが第三者から不正アクセスを受けた",
      certainty: "possible",
      dataNote: "disclosedは更新日。"
    },
    "岬町（徘徊高齢者等SOSメール）": {
      officialUrl: "https://www.town.misaki.osaka.jp/soshiki/shiawase/koureifukushi2/oshirase1/nintishou/6307.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "事業者（株式会社アルカディア）への第三者による不正アクセス",
      certainty: "possible",
      dataNote: "disclosedは更新日。"
    },
    "交野市（災害・避難情報等の電話・FAX通知サービス）": {
      officialUrl: "https://www.city.katano.osaka.jp/important_docs/2026101500018/",
      events: [
        E("disclosed", "2026-10-15", "公開日 2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」が不正アクセスを受けた",
      certainty: "possible"
    },
    "岸和田市（ライデン・ライデンスクール・119ライデン・NET119）": {
      officialUrl: "https://www.city.kishiwada.lg.jp/page/20261015-arcadia.html",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日（火曜日） ：サービス提供事業者から…本市に連絡", "@"),
        E("disclosed", "2026-10-15", "更新日：2026年10月15日掲載", "@")
      ],
      causes: ["vendor"], causeText: "SpeeCAN RAIDEN、119ライデン、ＮＥＴ119緊急通報システム）に対する、第三者からの不正アクセスによるもの",
      certainty: "possible",
      dataNote: "nは最大の単一数値（約1,300件）。合計値の記載なし。119ライデン245名は市職員210・消防団員33・関係機関2の内訳から。個人情報保護委員会へ報告するとしている。"
    },
    "貝塚市消防本部（NET119・119RAIDEN）": {
      officialUrl: "https://www.city.kaizuka.lg.jp/juyona_oshirase/illegalaccess20261015.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "「防災・減災ソリューション 119 RAIDEN」への不正アクセス",
      certainty: "possible",
      dataNote: "登録者数は10月14日現在。disclosedは更新日。"
    },
    "泉大津市消防本部（Net119）": {
      officialUrl: "https://www.city.izumiotsu.lg.jp/syoubou/osirase/16482.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "不正アクセスにより個人情報が漏えいした可能性がある旨の公表",
      certainty: "possible",
      dataNote: "disclosedは更新日。"
    },
    "猪名川町（防災情報配信・自治会電子回覧板）": {
      officialUrl: "https://www.town.inagawa.lg.jp/important_news/10375.html", listedDate: "2026-10-15",
      events: [
        E("disclosed", null, "現時点（令和8年10月14日9時現在）の状況をお知らせ", "@"),
        E("update", "2026-10-15", "令和8年10月15日午後6時更新", "@"),
        E("update", "2026-10-27", "追記（令和8年10月27日現在）", "@")
      ],
      causes: ["vendor"], causeText: "サービス提供事業者（株式会社アルカディア）において、外部からの不正アクセス",
      certainty: "possible",
      dataNote: "初回掲載日の印字なし（本文に「令和8年10月14日9時現在」の状況とあるのみ）。電話723名、FAX99名、LINE情報2,544名も記載。合計の記載なし。"
    },
    "大和高田市": {
      officialUrl: "https://www.city.yamatotakada.nara.jp/oshirase_top/10607.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」において、第三者による不正アクセスが確認され",
      certainty: "possible",
      dataNote: "disclosedは更新日。"
    },
    "野迫川村（のせ川村メール）": {
      officialUrl: "https://www.vill.nosegawa.nara.jp/top/village_government/pr/1071.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "委託事業者(株式会社アルカディア)が運営する一斉配信システム「SpeeCAN RAIDEN」が第三者による不正アクセス",
      certainty: "possible",
      dataNote: "disclosedは更新日。"
    },
    "河合町（奈良県）": {
      officialUrl: "https://www.town.kawai.nara.jp/kakuka/somu/1_1/2/bousaizyouhousabisu/7805.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアの防災情報配信サービス「SpeeCAN RAIDEN」が不正アクセス",
      certainty: "possible",
      dataNote: "再開告知ページで、日付は更新日のみ。"
    },
    "海南市": {
      officialUrl: "https://www.city.kainan.lg.jp/important/8601.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "システム提供事業者が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "復旧告知ページで、日付は更新日のみ。個人情報保護委員会へ報告と記載。FAX3人、電話1人、職員情報も対象。"
    },
    "有田川町": {
      officialUrl: "https://www.town.aridagawa.lg.jp/top/oshirase/10265.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN（運営会社：株式会社アルカディア）」について不正アクセス",
      certainty: "possible",
      dataNote: "disclosedは更新日。"
    },
    "奥出雲町（防災メール）": {
      officialUrl: "https://www.town.okuizumo.shimane.jp/bosaijoho/bosai-info/bousaimail.html",
      events: [
        E("access_confirmed", "2026-10-13", "令和8年10月13日…運営会社への不正アクセスが確認され", "@"),
        E("disclosed", "2026-10-15", "最終更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "防災メールシステムの運営会社への不正アクセス",
      certainty: "possible",
      dataNote: "disclosedは最終更新日。"
    },
    "松山市（まつやま防災メール）": {
      officialUrl: "https://www.city.matsuyama.ehime.jp/kurashi/bosai/bousai/all/syusyuhouhou/20261014.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」で第三者の不正アクセスが確認され",
      certainty: "possible",
      dataNote: "ページの日付は更新日（10月15日）のみのため、それを公表日として記録。初出はこれより前の可能性がある。URLに20261014の文字列あり。"
    },
    "土佐清水市（防災行政無線メッセージ・消防本部の防災情報配信）": {
      officialUrl: "https://www.city.tosashimizu.kochi.jp/kurashi/section/kikikanri/24080.html",
      events: [
        E("anomaly", null, "10⽉11⽇（日曜日）16時30分、アルカディアが…不審な挙動を確認", "@"),
        E("access_confirmed", null, "10月14日（水曜日）12時50分頃…不正アクセスが行われたことを覚知", "@"),
        E("disclosed", "2026-10-15", "2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "アルカディアのネットワークが外部から不正アクセスを受け",
      certainty: "possible",
      dataNote: "冒頭に「漏洩したことが判明しました」とあるが本文は「漏洩した可能性」のため possible とした。経緯の日付は年の記載がないため date は null（10月11日は事業者側の検知）。"
    },
    "福岡市（避難情報配信システム）": {
      officialUrl: "https://www.city.fukuoka.lg.jp/bousai/bousaikojinjohorouei.html",
      events: [
        E("vendor_notified", "2026-10-13", "10月13日午後２時13分、同社から本市へ連絡", "@"),
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "一斉情報配信サービスを運営する事業者において、第三者による不正アクセスが確認",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。10月11日16時30分は事業者（アルカディア）側で不審な挙動を確認した日時（ページ記載）。対象は視覚・聴覚に障がいがある方等の登録者。"
    },
    "太宰府市（災害情報等配信サービス V-net）": {
      officialUrl: "https://www.city.dazaifu.lg.jp/soshiki/5/2928.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日更新", "@")
      ],
      causes: ["vendor"], causeText: "運営会社（株式会社アルカディア）が第三者による不正アクセスを受けた",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。"
    },
    "福岡県（土砂災害危険度情報配信システム）": {
      officialUrl: "https://www.pref.fukuoka.lg.jp/contents/dosyasystemannounce.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日更新", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアが運営する一斉配信サービス「SpeeCAN RAIDEN」において、不正アクセス",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。10月11日16時30分は事業者（アルカディア）側で不審な挙動を確認した日時（ページ記載）。"
    },
    "島原市（防災メール）": {
      officialUrl: "https://www.city.shimabara.lg.jp/page21247.html?type=top", listedDate: "2026-10-15",
      events: [
        E("update", "2026-10-15", "最終更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "(株)アルカディアのメール配信システム（SpeeCAN RAIDEN）が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "ページは配信再開のお知らせ（最終更新日2026年10月15日）で、初報の日付は不明のためdisclosedは記録せず。"
    },
    "佐世保市（防災情報メール・道路冠水情報メール）": {
      officialUrl: "https://www.city.sasebo.lg.jp/bousai/20261013_arcadia.html",
      events: [
        E("vendor_notified", "2026-10-13", "市覚知日時は令和8年10月13日11時44分", "@"),
        E("update", "2026-10-15", "（10.15追記）不審なメールが届いたと複数の市民の方から連絡", "@"),
        E("disclosed", "2026-10-15", "更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアの「SpeeCANRAIDEN」において、第三者による不正アクセス",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（10.15追記を含む）のみ。発生日時はページ記載どおり（内容は事業者側での不審挙動確認）。"
    },
    "宇土市（お知らせメール）": {
      officialUrl: "https://www.city.uto.lg.jp/article/view/1310/17200.html",
      events: [
        E("disclosed", "2026-10-15", "2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "「株式会社 アルカディア」のシステム（SpeeCAN RAIDEN ）において、第三者による不正アクセス",
      certainty: "possible",
      dataNote: "ページは注意喚起が主で「個人情報の漏洩や不審なアクセス等の二次被害が懸念されます」との表現。漏えい対象項目の記載なし。"
    },
    "長洲町（防災行政メール配信サービス）": {
      officialUrl: "https://www.town.nagasu.lg.jp/bousai/bousai/bousai_mail/17920251033194033/",
      events: [
        E("disclosed", "2026-10-15", "最終更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "同社サーバーに対して第三者による不正アクセス",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。"
    },
    "御船町（防災メール）": {
      officialUrl: "https://www.town.mifune.kumamoto.jp/page9504.html",
      events: [
        E("disclosed", "2026-10-15", "最終更新日：2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "システム会社から、第三者による不正アクセスを受けたと報告",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。"
    },
    "津久見市消防本部（119RAIDEN・NET119）": {
      officialUrl: "https://www.city.tsukumi.oita.jp/soshiki/27/33530.html",
      events: [
        E("disclosed", "2026-10-15", "更新日：2026年10月15日更新", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのシステムに対し第三者による不正アクセス",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。"
    },
    "臼杵市消防本部（119RAIDEN・NET119）": {
      officialUrl: "https://www.city.usuki.oita.jp/article/2026101500018/",
      events: [
        E("leak_possible", "2026-10-14", "10月14日に確認いたしました", "@"),
        E("disclosed", "2026-10-15", "公開日 2026年10月15日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのシステム（119RAIDENおよびNET119）に対し、第三者による不正アクセス",
      certainty: "possible"
    },
    "石狩市（メール配信サービス）": {
      officialUrl: "https://www.city.ishikari.hokkaido.jp/shisei/shiseiunei/1001910/1003581.html",
      events: [
        E("disclosed", "2026-10-16", "更新日 2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "運営する事業者への第三者による不正アクセスを受けた",
      certainty: "possible",
      dataNote: "公表日の記載がなく、ページの更新日を disclosed として記録。"
    },
    "いちき串木野市（防災情報メール・NET119）": {
      officialUrl: "https://www.city.ichikikushikino.lg.jp/densan1/r8/261013_info.html",
      events: [
        E("disclosed", "2026-10-16", "更新日：2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "第三者の不正アクセスにより個人情報が外部に流出した可能性",
      certainty: "possible",
      dataNote: "日付は更新日のみ。防災情報メールは令和6年度まで運用（過去の登録者が対象）。"
    },
    "秋田市（防災ネットあきた）": {
      officialUrl: "https://www.city.akita.lg.jp/bosai-kinkyu/1011678/1053554.html",
      events: [
        E("disclosed", "2026-10-16", "更新日 令和8年10月16日", "@"),
        E("leak_possible", "2026-10-13", "漏えいした可能性があることを、同月13日（火曜日）に確認", "@")
      ],
      causes: ["vendor"], causeText: "運用管理委託業者において第三者による不正アクセスが確認され",
      certainty: "possible",
      dataNote: "更新日のみ記載のため更新日をdisclosedとした。ページ内の「令和8年10月11日（日曜日）16時30分…不正アクセスが確認」は委託業者側の確認日時のため記録せず。"
    },
    "和光市（防災・防犯情報メール）": {
      officialUrl: "https://www.city.wako.lg.jp/kurashi/anshin/1010199/1014124.html", listedDate: "2026-10-16",
      events: [
        E("update", "2026-10-16", "（2026年10月16日 更新）", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN（ライデン）」に第三者による不正アクセスが発生し",
      certainty: "possible",
      dataNote: "ページ上の日付は2026年10月16日（配信再開の更新）のみで、初回掲載日は印字されていないためdisclosedは記録しない。個人情報保護委員会へ報告済みと記載。10月11日は事業者（アルカディア）側の事象としてページに記載された日時。"
    },
    "新座市（一斉情報伝達・収集システム）": {
      officialUrl: "https://www.city.niiza.lg.jp/soshiki/17/speecanraiden-oshirase.html",
      events: [
        E("disclosed", "2026-10-16", "（以下、10月16日に掲載した内容です。）", "@"),
        E("update", "2026-10-20", "更新日：2026年10月20日更新", "@")
      ],
      causes: ["vendor"], causeText: "同サービスに対して第三者による不正アクセスが発生し",
      certainty: "possible",
      dataNote: "公表日は本文の「10月16日に掲載」による（年は更新日から）。個人情報保護委員会へ報告済みと記載。10月11日は事業者（アルカディア）側の事象としてページに記載された日時。"
    },
    "千葉市（ちばし安全・安心メール等）": {
      officialUrl: "https://www.city.chiba.jp/shimin/shimin/chiikianzen/chiba-an_oshirase1.html",
      events: [
        E("disclosed", "2026-10-16", "更新日：2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "利用しているシステムについて、第三者による不正アクセスがあり",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。10月11日は事業者（アルカディア）側の事象としてページに記載された日時。"
    },
    "印西市（電話・ファクス災害等緊急情報配信サービス）": {
      officialUrl: "https://www.city.inzai.lg.jp/0000022714.html",
      events: [
        E("leak_possible", "2026-10-14", "10月14日 …事業者から不正アクセスによる影響が当市にもある可能性を確認", "@"),
        E("disclosed", "2026-10-16", "[2026年10月16日]", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのネットワークが外部からの不正アクセスを受け",
      certainty: "possible",
      dataNote: "ページ上の日付は2026年10月16日（復旧完了の掲載）のみで、これを公表日として記録。印西市防災メールは別事業者で影響なしと記載。"
    },
    "八千代市（やちよ情報メール）": {
      officialUrl: "https://www.city.yachiyo.lg.jp/soshiki/11/87422.html",
      events: [
        E("disclosed", "2026-10-16", "更新日：2026年10月16日更新", "@")
      ],
      causes: ["vendor"], causeText: "配信サービス「SpeeCAN RAIDEN」が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。掲載中の版は運用再開の更新後のもの。"
    },
    "立川市（立川見守りメール）": {
      officialUrl: "https://www.city.tachikawa.lg.jp/bosai/bohan/1008439/1028484.html",
      events: [
        E("disclosed", "2026-10-16", "2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "ページ上の日付は2026年10月16日のみで、これを公表日として記録。職員参集システム・出火報等指令システムも同事業者を利用と記載。"
    },
    "昭島市（メール配信サービス）": {
      officialUrl: "https://www.city.akishima.lg.jp/kurashi/bosai/1008247/1002358/1009244/1002308.html",
      events: [
        E("disclosed", "2026-10-16", "2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "一斉同報サービス「SpeeCAN RAIDEN」が、不正アクセスを受けた",
      certainty: "possible",
      dataNote: "ページ上の日付は2026年10月16日のみで、これを公表日として記録。"
    },
    "台東区（たいとうメールマガジン）": {
      officialUrl: "https://www.city.taito.lg.jp/kusei/sanka/sns/taitomail/teishi20261013.html", listedDate: "2026-10-16",
      events: [
        E("vendor_notified", "2026-10-13", "10月13日（火曜日）10時50分ごろに、運用会社から…区へ連絡がありました", "@"),
        E("update", "2026-10-16", "更新日：2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "運用会社が不正アクセスを確認した",
      certainty: "possible",
      dataNote: "ページは10月16日更新版で初回公表日は印字されていないためdisclosedは記録しない。6,922人は登録者数。10月11日は事業者（アルカディア）側の事象としてページに記載された日時。"
    },
    "座間市（いさまメール・職員安否参集確認システム）": {
      officialUrl: "https://www.city.zama.kanagawa.jp/kurashi/bousai/1014143.html",
      events: [
        E("disclosed", "2026-10-16", "令和8年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "委託先事業者（…SpeeCAN RAIDEN）が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "件数は登録者数で、漏洩件数は確定していないと記載。個人情報保護委員会へ報告済み。"
    },
    "厚木市（多言語防災行政無線メールサービス）": {
      officialUrl: "https://www.city.atsugi.kanagawa.jp/material/files/group/3/tagengokojinjoho.pdf",
      events: [
        E("incident", "2026-10-11", "11 日 16 時 30 分ごろ、…「SpeeCAN RAIDEN…」が第三者からの不正アクセスを受けました", "@"),
        E("leak_possible", "2026-10-15", "15 日 14 時ごろ…４人分の個人情報が流出した可能性があることが分かりました", "@"),
        E("disclosed", "2026-10-16", "令和８年 10 月 16 日 厚木市報道資料", "@"),
        E("update", "2026-10-16", "更新日：2026年10月16日", "https://www.city.atsugi.kanagawa.jp/bousai/oshirase/55105.html")
      ],
      causes: ["vendor"], causeText: "サービス提供事業者への不正アクセス",
      certainty: "possible",
      dataNote: "候補リンク（サービス再開のお知らせ、公開日2026年10月13日）自体は停止・注意喚起のみで、個人情報漏えいの可能性は同ページからリンクされた市報道資料PDF（10月16日）に記載。PDFには応急措置を「11 日３時ごろ」と記載。一般向け「あつぎメールマガジン」（登録者数10672人）は別サービスと記載。"
    },
    "池田町（福井県）（ご近助防災メール）": {
      officialUrl: "https://www.town.ikeda.fukui.jp/toplink/emergency/p003018.html",
      events: [
        E("disclosed", "2026-10-16", "最終更新日 2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "不正アクセスを受けたことに伴い",
      certainty: "possible",
      dataNote: "日付は最終更新日（配信再開のお知らせ）のみで、初報日は不明。"
    },
    "白馬村（防災メール）": {
      officialUrl: "https://www.vill.hakuba.lg.jp/gyosei/soshikikarasagasu/somuka/osirase_ibennto_kouhoumusenntou/15345.html",
      events: [
        E("incident", "2026-10-11", "令和8年（2026年）10月11日（日曜日）午後4時30分ごろ、運営会社が…不正アクセスの疑いがある動きを確認", "@"),
        E("vendor_notified", "2026-10-13", "10月13日（火曜日）に運営会社から報告を受けました", "@"),
        E("disclosed", "2026-10-16", "更新日：2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "同社のシステムが受けた第三者による不正アクセス",
      certainty: "possible",
      dataNote: "disclosedはページの更新日（ページ上の唯一の日付）。incidentは運営会社が不審な動きを確認した日時。防災アプリのみの利用者は対象外。"
    },
    "上田市（メール配信サービス）": {
      officialUrl: "https://www.city.ueda.nagano.jp/soshiki/uedapr/138236.html",
      events: [
        E("vendor_notified", "2026-10-13", "運営会社である株式会社アルカディア…から10月13日に連絡", "@"),
        E("disclosed", "2026-10-16", "更新日：2026年10月16日更新", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが行われたことにより発生",
      certainty: "possible",
      dataNote: "disclosedはページの更新日（ページ上の唯一の日付）。件数は登録者数（約24,800件）。"
    },
    "名張市（NET119緊急通報システム）": {
      officialUrl: "https://www.city.nabari.lg.jp/s071/020/010/010/NET119/20261015125415.html",
      events: [
        E("disclosed", "2026-10-16", "更新日：2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "委託事業者（株式会社アルカディア）のサーバーに対し、外部からの不正アクセス",
      certainty: "possible",
      dataNote: "disclosedは更新日（他の日付表示なし）。"
    },
    "湖南市（メール配信システム）": {
      officialUrl: "https://www.city.shiga-konan.lg.jp/information/41923.html", listedDate: "2026-10-16",
      events: [
        E("update", "2026-10-16", "更新日：2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "当市が契約している会社のメール配信システム(SpeeCAN RAIDEN)が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "第一報〜第三報を同一ページに掲載。日付表示は更新日（第三報時点）のみで初報日不明のためdisclosedは記録せず。"
    },
    "栗東市（防災・防犯情報システム）": {
      officialUrl: "https://www.city.ritto.lg.jp/important/18762.html", listedDate: "2026-10-16",
      events: [
        E("update", "2026-10-16", "更新日：2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "運用事業者（株式会社アルカディア）が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "市は「直接侵入を受けたシステムではありません」が「漏えいの可能性が完全に否定できない」としている。日付表示は更新日のみで初報日不明のためdisclosedは記録せず。"
    },
    "枚方市（自動音声配信電話サービス）": {
      officialUrl: "https://www.city.hirakata.osaka.jp/kikikanri/0000054451.html", listedDate: "2026-10-16",
      events: [
        E("update", "2026-10-16", "公開日：2026年10月16日（サービス再開のお知らせ）", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアのネットワークにおいて、第三者による不正アクセスが確認された",
      certainty: "possible",
      dataNote: "サービス再開を知らせるページ（公開日10月16日）。休止を知らせた初報の日付は不明のためdisclosedは記録せず。80名は登録者数。"
    },
    "島本町（登録制メール・ライデン・スクール・NET119）": {
      officialUrl: "https://www.town.shimamoto.lg.jp/soshiki/5/37877.html", listedDate: "2026-10-16",
      events: [
        E("update", "2026-10-16", "更新日：2026年10月16日更新", "@")
      ],
      causes: ["vendor"], causeText: "運営する事業者が第三者による不正アクセスを受けた",
      certainty: "possible",
      dataNote: "日付表示は更新日のみ（10月16日の追記あり）で初報日不明のためdisclosedは記録せず。"
    },
    "宍粟市（情報配信サービス）": {
      officialUrl: "https://www.city.shiso.lg.jp/soshiki/shichokoshitsu/hishokoho/oshirase/22489.html", listedDate: "2026-10-16",
      events: [
        E("update", "2026-10-16", "更新日：2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "復旧のお知らせページ（10月19日追記あり）。初報日の表示がなくdisclosedは記録せず。対象者に10月15日付で通知を送付。"
    },
    "芦屋市（職員情報）": {
      officialUrl: "https://www.city.ashiya.lg.jp/bousai/jouhou/documents/system.html",
      events: [
        E("disclosed", "2026-10-16", "更新日：2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "本市の防災情報配信システムを運用する事業者において、外部からの不正アクセス",
      certainty: "possible",
      dataNote: "【更新】版のページで、表示されている日付は更新日のみ（初報日不明）。市民の個人情報の漏洩事実はないと記載。"
    },
    "高砂市（高齢者等見守り・SOSネットワーク）": {
      officialUrl: "https://www.city.takasago.lg.jp/soshikikarasagasu/chiikifukushika/koreishafukushi_kaigo/2/2/14357.html",
      events: [
        E("disclosed", "2026-10-16", "更新日：2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "委託先から「第三者による不正アクセスを受けたことにより…漏洩した可能性がある」",
      certainty: "possible",
      dataNote: "disclosedは更新日。履歴本文に記載の8人は住所・氏名・年齢・身体的特徴等。"
    },
    "斑鳩町": {
      officialUrl: "https://www.town.ikaruga.nara.jp/0000003413.html",
      events: [
        E("disclosed", "2026-10-16", "[公開日：2026年10月16日]", "@")
      ],
      causes: ["vendor"], causeText: "防災情報配信サービス「SpeeCAN RAIDEN」が不正アクセスを受けた",
      certainty: "possible",
      dataNote: "掲載ページは再開のお知らせ（公開日10月16日）で、それ以前の告知を統合した内容。"
    },
    "生駒市": {
      officialUrl: "https://www.city.ikoma.lg.jp/0000042931.html",
      events: [
        E("disclosed", "2026-10-16", "[更新日：2026年10月16日]", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアの防災情報配信サービス「SpeeCAN RAIDEN」が不正アクセス",
      certainty: "possible",
      dataNote: "disclosedは更新日。市は登録件数（概数）が全て漏洩した可能性と記載、ただし市関係の件数は未確定とも記載。"
    },
    "新宮市": {
      officialUrl: "https://www.city.shingu.lg.jp/info/3086",
      events: [
        E("update", "2026-10-15", "10月15日 更新", "@"),
        E("disclosed", "2026-10-16", "更新日2026年10月16日 更新", "@")
      ],
      causes: ["vendor"], causeText: "「株式会社アルカディア」のシステムに対し第三者による不正アクセス",
      certainty: "possible",
      dataNote: "印字日付は更新日（10/16）と本文の「10月15日 更新」のみで初報日不明。個人情報保護委員会へ速報済み。"
    },
    "岡山市（災害時一斉情報配信サービス）": {
      officialUrl: "https://www.city.okayama.jp/kurashi/0000086126.html",
      events: [
        E("vendor_notified", "2026-10-13", "10月13日10時48分 同社から岡山市へ連絡があった", "https://www.city.okayama.jp/kurashi/cmsfiles/contents/0000086/86126/kouhourennraku_2.pdf"),
        E("disclosed", "2026-10-16", "令和8年10月16日（広報連絡資料）", "https://www.city.okayama.jp/kurashi/cmsfiles/contents/0000086/86126/kouhourennraku_2.pdf")
      ],
      causes: ["vendor"], causeText: "事業者への第三者による不正アクセス",
      certainty: "possible",
      dataNote: "確認できたのはサービス再開を知らせる10月16日付の広報資料（PDF）のみで、これより前の第一報があったかは不明。個人情報漏洩の可能性は添付PDFの経緯欄に記載。10月11日は事業者側で不審な挙動を確認した日時。"
    },
    "竹原市（防災情報等メール・一斉電話サービス等）": {
      officialUrl: "https://www.city.takehara.lg.jp/soshikikarasagasu/kikikanrika/gyomuannai/4_1/4/8494.html",
      events: [
        E("disclosed", "2026-10-16", "更新日：2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアで、第三者による不正アクセスが一部サーバーで発生し",
      certainty: "possible",
      dataNote: "ページの日付は更新日（10月16日、サービス復旧の追記後）のみのため、それを公表日として記録。初出はこれより前の可能性がある。"
    },
    "柳井市（防災メール）": {
      officialUrl: "https://www.city-yanai.jp/soshiki/6/bousaimailoshirase.html",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日（火）午後2時12分 事業者からのメールを受信", "@"),
        E("disclosed", "2026-10-16", "更新日：2026年10月16日更新", "@")
      ],
      causes: ["vendor"], causeText: "事業者（株式会社アルカディア）が不正アクセスを受け",
      certainty: "possible",
      dataNote: "ページの日付は更新日（10月16日）のみのため、それを公表日として記録。初出はこれより前の可能性がある。10月11日は事業者側の検知日時。「現時点での情報流出は確認されていません」とも記載。"
    },
    "美馬市（防災行政情報発信システム連携の電話・FAX・メール配信）": {
      officialUrl: "https://www.city.mima.lg.jp/gyosei/docs/3131999.html",
      events: [
        E("disclosed", "2026-10-16", "2026年10月16日公開", "@")
      ],
      causes: ["vendor"], causeText: "事業者（(株)アルカディア（大阪府箕面市））のサーバが第三者による不正アクセスを受け",
      certainty: "possible",
      dataNote: "確認できたのは配信再開を知らせる10月16日公開のページで、これより前の第一報があったかは不明。"
    },
    "遠賀町（災害情報等配信サービス）": {
      officialUrl: "https://www.town.onga.lg.jp/soshiki/4/95381.html",
      events: [
        E("disclosed", "2026-10-16", "更新日：2026年10月16日更新", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディア…のネットワークが外部からの不正アクセスを受け",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日のみのため、それを公表日として記録。対象者には個別通知予定と記載。"
    },
    "東武動物公園（東武レジャー企画）": {
      officialUrl: "https://www.tobuzoo.com/pdf/QjpbetCbcKMJCaMb.pdf", listedDate: "2026-10-16",
      events: [
        E("update", "2026-10-16", "（続報）…お問い合わせフォーム…個人情報について、漏えいはなかったものと判断", "@")
      ],
      causes: ["vendor"], causeText: null,
      dataNote: "初報PDF（https://www.tobuzoo.com/pdf/sS3zHUaAFnwIDQTkpLlXiGbgPc.pdf）は削除済み（404）で確認できず、公表日・件数は登録していません。確認できたのは10月16日の続報のみで、IDCフロンティアが外部へのデータ流出はなかったと判断したことを踏まえ、お問い合わせフォームの個人情報は漏えいはなかったものと判断したとしています。ホームページは引き続き閲覧障害。"
    },
    "諫早市（道の駅251いいもりじゃがーロード）": {
      officialUrl: "https://www.city.isahaya.nagasaki.jp/soshiki/43/50518.html",
      events: [
        E("vendor_notified", "2026-10-16", "令和8年10月16日、…Studio株式会社から本市に対し…報告を受けており", "@"),
        E("disclosed", "2026-10-16", "更新日：2026年10月16日更新", "@")
      ],
      causes: ["vendor"], causeText: "Studio株式会社から…同社が利用するクラウド環境に対し、第三者による不正アクセスがあった",
      certainty: "possible",
      dataNote: "漏洩の可能性がある項目は氏名、フリガナ、メールアドレス、住所、電話番号。件数の記載なし。"
    },
    "糸魚川市（移住ポータル「わたしのいと」・ワーケーションサイト）": {
      officialUrl: "https://www.city.itoigawa.lg.jp/page/28776.html", listedDate: "2026-10-16",
      events: [
        E("update", "2026-10-16", "（第2報）更新日：2026年10月16日更新", "@")
      ],
      causes: ["vendor"], causeText: "ホームページ制作サービスへの不正アクセスにより",
      certainty: "possible",
      dataNote: "確認できたのは第2報のページ（10月16日公表の件数23件に7件追加と記載）。第1報のURLは特定できず、disclosedは記録していない。合計の記載なし。"
    },
    "くふうカンパニー（グループ各社のStudio利用サイト）": {
      officialUrl: "https://kufu.co.jp/2026/10/16/kufu-announce-3/",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日にかけて、同社クラウド環境に第三者による不正アクセス", "@"),
        E("disclosed", "2026-10-16", "2026.10.16", "@")
      ],
      causes: ["vendor"], causeText: "Studio株式会社が、同社クラウド環境への第三者による不正アクセスにより…公表",
      dataNote: "グループ会社のくふう住まい（https://kufusumai.co.jp/news/5d_1p9gp4）、くふうウェディング（https://wedding.kufu.co.jp/news/40duo1Hl）、Seven Signatures International（https://mgh.sevensignatures.com/posts/xMLHbTM_）も同日付で同じ文面の第一報を出しているため、1件にまとめた。いずれも個人情報漏えいの有無は確認中。くふう住まいの一覧表示は2026.10.15だが、本文は2026年10月16日付。"
    },
    "Make Care（訪問看護ステーションくるみ採用サイト／Studio経由）": {
      officialUrl: "https://kurumi.makecare.co.jp/2026/10/16/security-incident/",
      events: [
        E("incident", "2026-09-30", "2026年9月30日〜10月1日：第三者による不正アクセス", "@"),
        E("disclosed", "2026-10-16", "2026.10.16", "@")
      ],
      causes: ["vendor"], causeText: "「Studio」への不正アクセス",
      certainty: "possible"
    },
    "タレントブック（コーポレート・サービスサイト／Studio経由）": {
      officialUrl: "https://talentbook.co.jp/news/topics261016",
      events: [
        E("disclosed", "2026-10-16", "2026/10/16", "@")
      ],
      causes: ["vendor"], causeText: "同社のクラウド環境への不正アクセス",
      certainty: "possible"
    },
    "SIGQ（コーポレート・Incident Lakeサイト／Studio経由）": {
      officialUrl: "https://note.com/sigq/n/n8a557b8140f2",
      events: [
        E("disclosed", "2026-10-16", "2026年10月16日 14:40", "@")
      ],
      causes: ["vendor"], causeText: "一部機能の脆弱性を悪用した不正アクセス",
      certainty: "possible",
      dataNote: "公式noteでの公表。"
    },
    "全力優（LPサイト／Studio経由）": {
      officialUrl: "https://z-suguru.co.jp/news/studio/",
      events: [
        E("disclosed", "2026-10-16", "2026/10/16", "@")
      ],
      causes: ["vendor"], causeText: "クラウド環境への不正アクセス",
      certainty: "possible"
    },
    "かるがもクリニック（Studio経由）": {
      officialUrl: "https://www.karugamo-cl.jp/news/studio-unauthorized-access",
      events: [
        E("disclosed", "2026-10-16", "2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "一部機能の脆弱性が第三者に悪用され",
      certainty: "possible"
    },
    "アルビレックス新潟レディース（公式サイト／Studio経由）": {
      officialUrl: "https://albirex-niigata-ladies.com/news/2026-10-26-1930",
      events: [
        E("incident", "2026-09-30", "2026年9月30日〜10月1日（日本時間）：第三者による不正アクセス", "@"),
        E("disclosed", "2026-10-16", "2026/10/16", "@")
      ],
      causes: ["vendor"], causeText: "Studioの一部機能の脆弱性を悪用",
      certainty: "possible",
      dataNote: "運営は株式会社新潟レディースフットボールクラブ。URLに2026-10-26を含むが、ページ掲載日は2026/10/16。"
    },
    "琉球新報社（コーポレートサイト／Studio経由）": {
      officialUrl: "https://corp.ryukyushimpo.jp/news/posts/Er2BSBOp",
      events: [
        E("incident", "2026-09-30", "2026 年 9 月 30 日～10 月 1 日にかけて", "@"),
        E("disclosed", "2026-10-16", "2026/10/16 公開", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセス",
      certainty: "possible"
    },
    "フラー（コーポレートサイト・高専キャラバン／Studio経由）": {
      officialUrl: "https://www.fuller-inc.com/news/202610-studio-unauthorized-access",
      events: [
        E("incident", "2026-09-30", "2026年9月30日～10月1日（日本時間）", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日にStudio社より受けました", "@"),
        E("disclosed", "2026-10-16", "2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "Studioの一部機能の脆弱性を悪用して第三者がStudio社のクラウド環境に不正アクセス",
      certainty: "possible",
      dataNote: "件数はフォーム送信件数で個人の人数とは一致しない場合あり。合計値は記載なし。"
    },
    "Fukuoka Growth Next（Studio経由）": {
      officialUrl: "https://growth-next.com/news/studio-incident-form-data-notice-1",
      events: [
        E("incident", "2026-09-30", "同年9月30日（水）から10月1日（木）まで（日本時間）", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日（金）、Studio社から", "@"),
        E("disclosed", "2026-10-16", "2026.10.16", "@"),
        E("update", "2026-10-21", "2026年10月21日追記：…第2報にて訂正", "@")
      ],
      causes: ["vendor"], causeText: "同社の一部機能の脆弱性を悪用した第三者による不正アクセス",
      certainty: "possible",
      dataNote: "フォーム別件数のみで合計の記載なし（nは最大のフォーム件数）。10月21日に第2報で対象期間を訂正（第2報ページは未確認）。"
    },
    "書店在庫情報プロジェクト（Studio経由）": {
      officialUrl: "https://info.openbs.jp/news/unauthorized-access-2026-10",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日にかけて", "@"),
        E("vendor_notified", "2026-10-16", "10:42 Studio株式会社からメールにて不正アクセスの報告を受領", "@"),
        E("disclosed", "2026-10-16", "2026/10/16", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセス",
      certainty: "possible",
      dataNote: "サイト管理は株式会社カーリル。vendor_notifiedの日付は「2026年10月16日に以下の対応を実施」の対応記録による。"
    },
    "LastResort（コーポレートサイト／Studio経由）": {
      officialUrl: "https://1astresort.com/news-releases/20261016-01",
      events: [
        E("disclosed", "2026-10-16", "公開日：2026.10.16", "@"),
        E("update", "2026-10-28", "2026年10月28日：お問い合わせフォームをご利用いただいた方への通知を実施", "@")
      ],
      causes: ["vendor"], causeText: "一部機能の脆弱性を悪用した第三者による不正アクセス",
      certainty: "possible"
    },
    "waypoint venture partners（Studio経由）": {
      officialUrl: "https://waypoint-vp.com/news_detail/kNnhdhcL",
      events: [
        E("incident", "2026-09-30", "2026年9月30日〜10月1日：同社のクラウド環境に第三者が不正にアクセス", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日に同社からの連絡を受け", "@"),
        E("disclosed", "2026-10-16", "2026/10/16 21:47", "@")
      ],
      causes: ["vendor"], causeText: "同社のクラウド環境に第三者が不正にアクセス",
      certainty: "possible"
    },
    "Zero-Ten Park（Studio経由）": {
      officialUrl: "https://zerotenpark.jp/news/unauthorized-access-info",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日（日本時間）にかけて", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日、Studio社より当社に本件の連絡がありました", "@"),
        E("disclosed", "2026-10-16", "2026.10.16", "@")
      ],
      causes: ["vendor"], causeText: "Studioの一部機能の脆弱性を悪用した第三者",
      certainty: "possible",
      dataNote: "採用応募フォームを含む。履歴書等の添付ファイル本文は対象外（ファイル名のみ）。"
    },
    "コミュニティオ（コーポレート・製品紹介サイト／Studio経由）": {
      officialUrl: "https://communitio.jp/news/studio-unauthorized-access-form-data-leak-1",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日（日本時間）にかけて", "@"),
        E("disclosed", "2026-10-16", "2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: "同社サービスの一部機能の脆弱性を悪用した第三者による不正アクセス",
      certainty: "possible",
      dataNote: "漏えいの有無・範囲は確認中。TeamSticker等のサービス内データは対象外。"
    },
    "シンプルフォーム（Studio経由）": {
      officialUrl: "https://www.simpleform.co.jp/news/384Piuke",
      events: [
        E("incident", "2026-09-30", "2026年9月30日〜10月1日に第三者による不正アクセスを受けた", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日、当社が利用するWeb制作プラットフォーム「Studio」", "@"),
        E("disclosed", "2026-10-16", "2026/10/16", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生",
      certainty: "possible",
      dataNote: "公開日はページのスクリプトで描画される表示日付（ブラウザで確認）。件数はStudio社調査による2026年10月16日時点の情報。SimpleCheck等のサービスは対象外。"
    },
    "静岡新聞社（Studio経由）": {
      officialUrl: "https://shizushinsbs.co.jp/posts/vFHmnxKp",
      events: [
        E("vendor_notified", "2026-10-16", "2026年10月16日、サービス提供元であるStudio株式会社より", "@"),
        E("disclosed", "2026-10-16", "2026/10/16", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生",
      certainty: "possible",
      dataNote: "公開日はページのスクリプトで描画される表示日付（ブラウザで確認）。"
    },
    "永和システムマネジメント（Studio経由）": {
      officialUrl: "https://esm.co.jp/news/security-notice-studio-202610",
      events: [
        E("incident", "2026-09-30", "2026年9月30日〜10月1日：Studio株式会社のクラウド環境に対する", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日：同社が本件を公表し、弊社にも連絡", "@"),
        E("disclosed", "2026-10-16", "2026年10月16日 第一報を掲載", "@"),
        E("update", "2026-10-23", "2026年10月23日 第二報として更新", "@"),
        E("update", "2026-10-26", "2026年10月26日 記載内容の一部を修正", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生",
      certainty: "possible",
      dataNote: "同一URLが第二報に更新されており、第一報（10月16日）の本文は確認できない。件数は第二報の記載。"
    },
    "つなぐる": {
      officialUrl: "https://tsunagle.co.jp/news/important-info-20261016",
      events: [
        E("disclosed", "2026-10-16", "2026.10.16", "@")
      ],
      causes: ["vendor"], causeText: "第三者が同社サービスの脆弱性を悪用し、同社が利用するクラウド環境へ不正にアクセス",
      certainty: "possible"
    },
    "Recamp（ハックの隠れ家）": {
      officialUrl: "https://www.recamp.co.jp/20261016-info",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日（日本時間）に行われた", "@"),
        E("disclosed", "2026-10-16", "2026.10.16", "@")
      ],
      causes: ["vendor"], causeText: "第三者が同社サービスの一部機能の脆弱性を悪用し、クラウド環境に不正アクセス",
      certainty: "possible"
    },
    "いちのいち": {
      officialUrl: "https://ichinoichi.jp/info/Eki4r3t8",
      events: [
        E("disclosed", "2026-10-16", "2026/10/16", "@")
      ],
      causes: ["vendor"], causeText: "Studio株式会社が提供するサービスの一部機能の脆弱性を第三者が悪用し、同社のクラウド環境へ不正にアクセス",
      certainty: "possible",
      dataNote: "対象は2025年2月1日以降のお問い合わせフォーム送信分。"
    },
    "イメージ・マジック（3DME）": {
      officialUrl: "https://3dme.jp/news/studio-incident",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日にかけて、第三者が…不正アクセス", "@"),
        E("disclosed", "2026-10-16", "2026年10月16日 株式会社イメージ・マジック", "@")
      ],
      causes: ["vendor"], causeText: "第三者がStudioの一部機能の脆弱性を悪用して同社のクラウド環境に不正アクセス",
      certainty: "possible",
      dataNote: "件数はサイト別（合計の記載なし）のフォーム送信件数。nは大きい方の3DME分。"
    },
    "事業人": {
      officialUrl: "https://jigyojin.com/news/P5GrSkfm",
      events: [
        E("incident", "2026-09-30", "不正アクセスが確認された期間は2026年9月30日から10月1日", "@"),
        E("disclosed", "2026-10-16", "2026.10.16", "@")
      ],
      causes: ["vendor"], causeText: "第三者が同社サービスの脆弱性を悪用してクラウド環境にアクセス",
      certainty: "possible",
      dataNote: "対象期間は2022年2月2日〜2026年10月14日。"
    },
    "音楽によるまちづくり推進実行委員会（KURUME MUSIC FES.）": {
      officialUrl: "https://kurume-mf.com/news-1-1/5J7MndhQ",
      events: [
        E("disclosed", "2026-10-16", "2026/10/16", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "事務局は久留米市市民文化部文化振興課。"
    },
    "ペンギンカフェ": {
      officialUrl: "https://x.com/PenguinCafeASGY/status/2111044844554702992",
      events: [
        E("disclosed", "2026-10-16", "19:41 · 2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "公式Xアカウントでの公表。X投稿の日時は閲覧時の表示（日本時間と想定）による。"
    },
    "クロカワリュート": {
      officialUrl: "https://ryutokurokawa.tokyo/notice-20261016",
      events: [
        E("incident", "2026-09-30", "2026年9月30日〜10月1日　第三者がStudio社のクラウド環境に不正アクセス", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日に同社からの通知により判明", "@"),
        E("disclosed", "2026-10-16", "2026年10月16日　公開", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "piyologのリンクはXの告知投稿（2026年10月16日15:23）で、詳細は同投稿からリンクされた公式サイトのお知らせによる。対象は2022年5月以降のフォーム利用者。"
    },
    "飛企画": {
      officialUrl: "https://x.com/tobi_kikaku/status/2111041371243164066",
      events: [
        E("disclosed", "2026-10-16", "19:27 · 2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "公式Xアカウントでの公表。X投稿の日時は閲覧時の表示（日本時間と想定）による。"
    },
    "泉翔嵐の行政書士事務所": {
      officialUrl: "https://x.com/fons_izumi/status/2110968415330742708",
      events: [
        E("disclosed", "2026-10-16", "14:37 · 2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "行政書士本人のXアカウントでの公表。個人情報保護委員会へ報告済みとしている。X投稿の日時は閲覧時の表示（日本時間と想定）による。"
    },
    "AI彼氏くん（Pictoria）": {
      officialUrl: "https://ikebo.ai/news/IuqjKOhY",
      events: [
        E("disclosed", "2026-10-16", "2026/10/16 20:09", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "piyologのリンクはXの告知投稿（2026年10月17日0:32）。公式サイトのお知らせ（10月16日20:09）を初報とした。アプリ内の会話内容・決済情報は対象外。"
    },
    "増田直生のデザイン事務所": {
      officialUrl: "https://x.com/naokimsd/status/2110917693448806572",
      events: [
        E("disclosed", "2026-10-16", "11:16 · 2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "代表者のXアカウントでの公表（投稿には編集後の新しいバージョンがある）。X投稿の日時は閲覧時の表示（日本時間と想定）による。"
    },
    "たかしお": {
      officialUrl: "https://x.com/takashi_okb313/status/2111027768326795630",
      events: [
        E("disclosed", "2026-10-16", "18:33 · 2026年10月16日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "合同会社たかしお代表者のXアカウントでの公表。X投稿の日時は閲覧時の表示（日本時間と想定）による。"
    },
    "OpenStreet（HELLO CYCLING問い合わせフォーム／Studio経由）": {
      officialUrl: "https://www.openstreet.co.jp/news/usLRgR7Y",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日にかけて第三者による不正アクセスが確認", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日、Studio社より…通知を受けました", "@"),
        E("disclosed", "2026-10-17", "2026年10月17日", "@")
      ],
      causes: ["vendor"], causeText: "同社が利用するクラウド環境に第三者による不正アクセスが発生",
      certainty: "possible",
      dataNote: "件数は暫定のフォーム保存回答数で、実際の流出件数・人数ではない。"
    },
    "スマートラウンド（コーポレートサイト／Studio経由）": {
      officialUrl: "https://jp.smartround.com/corporate/news/posts/Ab4Kkfrj", listedDate: "2026-10-17",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日（日本時間）にかけて", "@"),
        E("vendor_notified", "2026-10-16", "当社は10月16日にStudio社から連絡を受け", "@"),
        E("update", "2026-10-17", "更新日 2026/10/17", "@")
      ],
      causes: ["vendor"], causeText: "Studioの一部機能の脆弱性を悪用した第三者による不正アクセス",
      certainty: "possible",
      dataNote: "ページには「更新日 2026/10/17」のみ表示され、初回公開日の記載がないためdisclosedは省略。"
    },
    "スマートキャンプ（コーポレート・サービスサイト／Studio経由）": {
      officialUrl: "https://smartcamp.co.jp/news/information/article/20261017",
      events: [
        E("disclosed", "2026-10-17", "2026/10/17", "@"),
        E("vendor_notified", null, "2026年10月16日10時30分頃、Studio株式会社より", "@")
      ],
      causes: ["vendor"], causeText: "同社のクラウド環境において第三者による不正アクセスが発生",
      certainty: "possible"
    },
    "動物園学会（Studio経由）": {
      officialUrl: "https://zoostudy.jp/news/202610-news-hp",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日にかけて、同社のシステムに第三者が不正に入り込みました", "@"),
        E("disclosed", "2026-10-17", "2026年10月17日", "@")
      ],
      causes: ["vendor"], causeText: "同社のシステムに第三者が不正に入り込みました",
      certainty: "possible"
    },
    "YOURBODY（ピラティススタジオ／Studio経由）": {
      officialUrl: "https://yourbody.jp/news/Bx0bWvsj",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日にかけて、同社のシステムに第三者が不正に入り込みました", "@"),
        E("disclosed", "2026-10-17", "2026年10月17日", "@")
      ],
      causes: ["vendor"], causeText: "同社のシステムに第三者が不正に入り込みました",
      certainty: "possible",
      dataNote: "運営会社はFLOTO Inc.（フッター表記）。"
    },
    "REIONE（Studio経由）": {
      officialUrl: "https://reione.fun/news/202610incident",
      events: [
        E("incident", "2026-09-30", "2026年9月30日〜10月1日：Studio株式会社のクラウド環境への第三者による不正アクセスが発生", "@"),
        E("leak_possible", "2026-10-16", "2026年10月16日：…REIONEが情報流出の可能性を認識", "@"),
        E("disclosed", "2026-10-17", "2026/10/17", "@")
      ],
      causes: ["vendor"], causeText: "Studio株式会社のクラウド環境への第三者による不正アクセス",
      certainty: "possible"
    },
    "MAPPA EXPO運営事務局（公式サイト／Studio経由）": {
      officialUrl: "https://expo.mappa.co.jp/infomation/QVIAWjFu",
      events: [
        E("vendor_notified", "2026-10-16", "Studio株式会社…より、2026年10月16日に報告を受けました", "@"),
        E("disclosed", "2026-10-17", "2026/10/17", "@")
      ],
      causes: ["vendor"], causeText: "同社が利用するクラウド環境への第三者による不正アクセス",
      certainty: "possible"
    },
    "eatas（Studio経由）": {
      officialUrl: "https://eatas-inc.com/news/466/",
      events: [
        E("disclosed", "2026-10-17", "2026/10/17", "@")
      ],
      causes: ["vendor"], causeText: "同社の一部機能の脆弱性を悪用した不正アクセス",
      certainty: "possible",
      dataNote: "eat+アプリ等の登録情報は対象外。「当社の対応」欄にテンプレートの記載指示文が残ったまま掲載されている。"
    },
    "ナッジ（コーポレートサイト／Studio経由）": {
      officialUrl: "https://nudge.works/news/20261017",
      events: [
        E("incident", "2026-09-30", "不正アクセスが確認された期間は、2026年9月30日〜10月1日", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日、Studio株式会社（以下、Studio社）から", "@"),
        E("disclosed", "2026-10-17", "2026/10/17", "@")
      ],
      causes: ["vendor"], causeText: "同社の一部機能の脆弱性を悪用した第三者による不正アクセス",
      certainty: "possible",
      dataNote: "公開日はページのスクリプトで描画される表示日付（ブラウザで確認）。件数はフォーム別で合計の記載なし（nは最大のフォーム件数）。採用応募は添付ファイル（履歴書等）を含む。"
    },
    "FES Global Education（Studio経由）": {
      officialUrl: "https://fesglobaledu.com/posts/studio-unauthorized-access-2026-10",
      events: [
        E("disclosed", "2026-10-17", "2026年10月17日", "@")
      ],
      causes: ["vendor"], causeText: "Studio株式会社のシステムに第三者による不正アクセスがあった",
      certainty: "possible",
      dataNote: "対象は2026年1月14日〜6月2日の送信分。項目に留学希望の子どもの生年月日を含む。"
    },
    "AndGo（Studio経由）": {
      officialUrl: "https://andgo.co.jp/posts/C6kNHoGC",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日にかけて第三者による不正アクセス", "@"),
        E("disclosed", "2026-10-17", "2026年10月17日", "@")
      ],
      causes: ["vendor"], causeText: "「Studio」（運営：Studio株式会社）において、第三者による不正アクセスが発生",
      certainty: "possible",
      dataNote: "対象は2022年1月〜2024年1月の問い合わせ。"
    },
    "STATION Ai（Studio経由）": {
      officialUrl: "https://stationai.co.jp/news/mhv1CXpZ",
      events: [
        E("vendor_notified", "2026-10-16", "流出した可能性があるとの通知を26年10月16日に受けました", "@"),
        E("disclosed", "2026-10-17", "2026年10月17日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "対象はSKIP Focus、Physical AI、開業前のお問い合わせフォーム。通知日は原文で「26年10月16日」と表記。"
    },
    "Zenmetry（旧ウェブサイト）": {
      officialUrl: "https://zenmetry.net/news/studio-unauthorized-access-20261017",
      events: [
        E("incident", "2026-09-30", "不正アクセスが確認されている期間は2026年9月30日から10月1日（日本時間）", "@"),
        E("disclosed", "2026-10-17", "2026年10月17日 株式会社Zenmetry", "@")
      ],
      causes: ["vendor"], causeText: "Studio社が利用するクラウド環境への第三者による不正アクセス",
      certainty: "possible",
      dataNote: "Studioは利用停止済みだが過去の送信情報がStudio環境に保存されていたと記載。"
    },
    "アルク社会保険労務士法人": {
      officialUrl: "https://arcsr.jp/info/024",
      events: [
        E("incident", "2026-09-30", "不正アクセスが確認された期間は2026年9月30日～10月1日", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日、…運営会社から、…報告を受けました", "@"),
        E("disclosed", "2026-10-17", "2026.10.17", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "対象期間・情報はStudioに照会中。"
    },
    "YOTA SAKI（ポートフォリオサイト）": {
      officialUrl: "https://x.com/YOTASAKI_LOG/status/2111458588128674154",
      events: [
        E("disclosed", "2026-10-17", "23:05 · 2026年10月17日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "本人のXアカウントでの公表。X投稿の日時は閲覧時の表示（日本時間と想定）による。"
    },
    "ムーサ楽芸室 ときどき喫茶": {
      officialUrl: "https://x.com/musagakugeicafe/status/2111231828938113355",
      events: [
        E("vendor_notified", null, "昨日ムーサのHPを運営しているstudio株式会社へ不正アクセスがあり", "@"),
        E("disclosed", "2026-10-17", "8:04 · 2026年10月17日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "公式Xアカウントでの公表。「昨日」連絡があったとするが日付の明記はない。X投稿の日時は閲覧時の表示（日本時間と想定）による。"
    },
    "MEDPER（メドパー）": {
      officialUrl: "https://x.com/medper_maeda/status/2111334110333633006",
      events: [
        E("disclosed", "2026-10-17", "14:50 · 2026年10月17日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "代表取締役のXアカウントでの公表。X投稿の日時は閲覧時の表示（日本時間と想定）による。"
    },
    "ごきげん社": {
      officialUrl: "https://x.com/gokigensha/status/2111230710690550234",
      events: [
        E("disclosed", "2026-10-17", "8:00 · 2026年10月17日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "公式Xアカウントでの公表。X投稿の日時は閲覧時の表示（日本時間と想定）による。"
    },
    "渋谷動物医療センター（SAMC／Studio経由）": {
      officialUrl: "https://samc.co.jp/news/UYq7eT4D",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日にかけて、同社のシステムに第三者が不正に入り込みました", "@"),
        E("disclosed", "2026-10-18", "2026年10月18日", "@")
      ],
      causes: ["vendor"], causeText: "同社のシステムに第三者が不正に入り込みました",
      certainty: "possible"
    },
    "THE CLUB golf village": {
      officialUrl: "https://tcgv.jp/news/sjaxJ6DW",
      events: [
        E("disclosed", "2026-10-18", "2026/10/18", "@")
      ],
      causes: ["vendor"], causeText: "同社のクラウド環境への第三者による不正アクセス",
      certainty: "possible"
    },
    "秋田県里親支援センターTOMONY": {
      officialUrl: "https://tomo-ny.com/news/typZnqZQ",
      events: [
        E("disclosed", "2026-10-18", "2026/10/18", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible"
    },
    "江別市（防災情報提供サービス）": {
      officialUrl: "https://www.city.ebetsu.hokkaido.jp/soshiki/kikitaisaku/157244.html",
      events: [
        E("disclosed", "2026-10-19", "掲載日：2026年10月19日更新", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」のサーバーが不正アクセスを受けました",
      certainty: "possible",
      dataNote: "市民への実在カード会社を名乗る不審メール到達を確認。10月16日12時から運用再開。公表日の記載がなく、ページの更新日を disclosed として記録。"
    },
    "鹿沼市消防本部（119ライデン・ネット119）": {
      officialUrl: "https://www.city.kanuma.tochigi.jp/0566/info-0000011589-0.html",
      events: [
        E("vendor_notified", "2026-10-19", "令和8年10月19日（月曜日）17時39分 （株）アルカディアより…メール連絡を受ける", "@"),
        E("disclosed", "2026-10-19", "掲載日 令和8年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "不正アクセスによる個人情報漏えいの可能性",
      certainty: "possible",
      dataNote: "システム登録者数は119ライデン819人、ネット119 48人（10月19日現在）。"
    },
    "加美町（防災メール）": {
      officialUrl: "https://www.town.kami.miyagi.jp/information/6056.html", listedDate: "2026-10-19",
      events: [
        E("update", "2026-10-19", "更新日：2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "「SPeeCANRAIDEN」が不正アクセスを受けたことが確認されました",
      certainty: "possible",
      dataNote: "更新日（10月19日、配信再開の追記後）のみ記載のため初回掲載日不明、disclosedは省略。漏洩可能性のある情報の種別は記載なし。"
    },
    "小金井市（安全・安心メール等）": {
      officialUrl: "https://www.city.koganei.lg.jp/kurashi/472/bohan/bohanservice/anzennansinmail.html", listedDate: "2026-10-19",
      events: [
        E("update", "2026-10-19", "更新日：2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "委託先事業者（…SpeeCAN RAIDEN）が第三者による不正アクセスを受け",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日2026年10月19日のみで、本文に10月15日の報告に基づく配信再開が含まれるため、初回公表日ではないとみなしdisclosedは記録しない。"
    },
    "横浜市鶴見区（緊急時情報一斉伝達システム）": {
      officialUrl: "https://www.city.yokohama.lg.jp/tsurumi/bosai_bohan/saigai/sonae/bousai2026.html",
      events: [
        E("disclosed", "2026-10-19", "最終更新日 2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが確認されたため",
      certainty: "possible",
      dataNote: "日付は最終更新日（2026年10月19日・運用再開の更新）のみで、初報の日付は不明。"
    },
    "横浜市西区（緊急時情報伝達システム）": {
      officialUrl: "https://www.city.yokohama.lg.jp/nishi/bosai_bohan/saigai/joho/oshirase.html",
      events: [
        E("disclosed", "2026-10-19", "最終更新日 2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスを受けたことに伴い",
      certainty: "possible",
      dataNote: "日付は最終更新日（2026年10月19日・運用再開の更新）のみで、初報の日付は不明。対象者には個別に通知と記載。"
    },
    "佐久市（さくネット電話・FAX配信）": {
      officialUrl: "https://www.city.saku.nagano.jp/kurashi/iza/bousai_apri/20261014_sakunetto.html",
      events: [
        E("disclosed", "2026-10-19", "更新日：2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "業務委託先である「株式会社アルカデイア」のネットワークが、第三者による不正アクセスを受け",
      certainty: "possible",
      dataNote: "disclosedはページの更新日（ページ上の唯一の日付）。incidentは委託先が不審な挙動を確認した日時。"
    },
    "橋本市（防災はしもとメール）": {
      officialUrl: "https://www.city.hashimoto.lg.jp/guide/kikikanri/osirase/23612.html",
      events: [
        E("disclosed", "2026-10-19", "更新日：2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN（運営元・株式会社アルカディア）」が、外部から不正アクセス",
      certainty: "possible",
      dataNote: "印字日付は更新日（10月19日追記）のみ。"
    },
    "美祢市（NET119緊急通報システム）": {
      officialUrl: "https://www2.city.mine.lg.jp/information/13766.html",
      events: [
        E("disclosed", "2026-10-19", "更新日：2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "システム業者が不正アクセスを受け",
      certainty: "possible",
      dataNote: "ページの日付は更新日（10月19日、新規登録再開の追記後）のみのため、それを公表日として記録。初出はこれより前の可能性がある。"
    },
    "小豆島町（防災行政無線メール配信サービス）": {
      officialUrl: "https://www.town.shodoshima.lg.jp/gyousei/kakuka/somu/2_1/3/9684.html",
      events: [
        E("disclosed", "2026-10-19", "更新日：2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "「Speecan RAIDEN」（株式会社アルカディア提供）が第三者による不正アクセスを受けた",
      certainty: "possible",
      dataNote: "ページの日付は更新日（10月19日、配信再開予定の追記後）のみのため、それを公表日として記録。初出はこれより前の可能性がある。"
    },
    "志摩市（志摩市民病院）": {
      officialUrl: "https://www.city.shima.mie.jp/kakuka/byoinjigyobu/shimashiminbyoin/9828.html",
      events: [
        E("disclosed", "2026-10-19", "更新日：2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "「Studio」（運営会社：Studio株式会社）において、同社のクラウド環境が第三者による不正アクセスを受けました",
      certainty: "possible",
      dataNote: "氏名、メールアドレス、問い合わせ内容。診療業務・電子カルテへの影響はないとしている。"
    },
    "福岡市（福岡コンベンションセンター）": {
      officialUrl: "https://www.city.fukuoka.lg.jp/shisei/kouhou-hodo/hodo-happyo/2026/documents/261019webseisakujigyousyahenofuseiakusesukojinnjyouhourouei.pdf",
      events: [
        E("incident", "2026-09-30", "環境内のデータを外部から取得できる状態（９月30日～10月１日）", "@"),
        E("vendor_notified", "2026-10-16", "当財団は2026年10月16日（金）、Studio株式会社より…連絡を受けた", "@"),
        E("disclosed", "2026-10-19", "令和8年10月19日 経済観光文化局観光コンベンション部 MICE推進課", "@")
      ],
      causes: ["vendor"], causeText: "Studio株式会社は、同社のクラウド環境に第三者が不正アクセスし",
      certainty: "possible",
      dataNote: "内訳：施設利用問い合わせ288件、落とし物問い合わせ1,185件、身障者駐車スペース予約766件（いずれも2026年3月10日～10月14日分）。暗号化保存だったが復号鍵も読み出されたとStudio側が説明。福岡市報道資料に財団のお知らせが添付。"
    },
    "和歌山市（デジタル人材育成事業・移住プロモーションサイト）": {
      officialUrl: "https://www.city.wakayama.wakayama.jp/shisei/1022414/1068899/1068855.html",
      events: [
        E("disclosed", "2026-10-19", "令和8年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "第三者がStudioの一部機能の脆弱性を悪用してクラウド環境に不正にアクセスし",
      certainty: "possible",
      dataNote: "piyologのリンク先（/shisei/1022414/1068855.html）は404。同じページ番号1068855の現行URLで確認。項目はメールアドレス（移住サイトは居住エリアも）。合計の記載なし。"
    },
    "見附市（移住定住サイト「ハピネスみつけ」）": {
      officialUrl: "https://www.city.mitsuke.niigata.jp/soshiki/19/59434.html",
      events: [
        E("incident", "2026-09-30", "令和8年9月30日から10月1日の間、不正アクセスがあり", "@"),
        E("vendor_notified", "2026-10-16", "令和8年10月16日に、システム運営事業者から見附市に連絡がありました", "@"),
        E("disclosed", "2026-10-19", "更新日：2026年10月19日更新", "@")
      ],
      causes: ["vendor"], causeText: "利用していた外部サービスの運営事業者に対する第三者からの不正アクセスにより",
      certainty: "possible",
      dataNote: "令和7年7月16日～令和8年10月5日の問い合わせ分。氏名、会社名、メールアドレス、電話番号、住所、問い合わせ内容。個人13件と企業57件の合計は記載なし。"
    },
    "青森市（公民連携ポータル）": {
      officialUrl: "https://www.city.aomori.aomori.jp/_res/projects/default_project/_page_/001/006/866/1019_01_huseiakusesu.pdf",
      events: [
        E("incident", "2026-09-30", "令和8年9月30日〜10月1日：第三者による不正アクセス", "@"),
        E("disclosed", "2026-10-19", "令和8年10月19日 青森市企画部連携推進課長", "@")
      ],
      causes: ["vendor"], causeText: "同社が利用するクラウド環境に第三者による不正アクセスがあり",
      certainty: "possible",
      dataNote: "令和5年7月～令和6年1月の提案分。企業・団体名、担当者名、所在地、電話番号、メールアドレス、提案内容等（添付ファイルの中身は含まず）。"
    },
    "府中市（広島県）（道の駅びんご府中・移住応援サイトふふふちゅう）": {
      officialUrl: "https://www.city.fuchu.hiroshima.jp/soshiki/keizaikanko/syokokanko/osirase/11981.html",
      events: [
        E("disclosed", "2026-10-19", "更新日：2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "HP作成プラットフォーム「Studio」への 不正アクセス",
      dataNote: "このページは道の駅びんご府中分の追加報告で、先に「ふふふちゅう」への影響を知らせていたと記載されているが、その初報ページは見つからなかった。disclosedは道の駅分ページの日付。件数はフォーム利用件数で、漏えいの有無・範囲は調査中。"
    },
    "湯沢町（移住定住ポータルサイト・YuzaWork）": {
      officialUrl: "https://www.town.yuzawa.lg.jp/soshikikarasagasu/kikkakusangyoukankoubu/kikakukankouka/4/4/8110.html",
      events: [
        E("vendor_notified", "2026-10-16", "令和8年10月16日、…サービス提供事業者（Studio株式会社）より…発表がありました", "@"),
        E("disclosed", "2026-10-19", "更新日：2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "サービス提供事業者（Studio株式会社）より不正アクセスによる個人情報漏えいの可能性がある旨の発表",
      certainty: "possible",
      dataNote: "氏名、性別、住所、生年月日、電話番号、メールアドレス、職業、家族構成、管理者用アカウントのパスワード。"
    },
    "長崎市（長崎満喫！アウェイ遠征応援キャンペーン）": {
      officialUrl: "https://www.city.nagasaki.lg.jp/uploaded/life/93532_627532_misc.pdf",
      events: [
        E("incident", "2026-09-30", "発生日：令和８年９月３０日", "@"),
        E("leak_possible", "2026-10-18", "発覚日：令和８年１０月１８日", "@"),
        E("disclosed", "2026-10-19", "10月19日 公表（市政記者への情報提供）", "@")
      ],
      causes: ["vendor"], causeText: "Studio 株式会社に不正アクセスがあり",
      certainty: "possible",
      dataNote: "氏名、メールアドレス、問い合わせ内容。市は10月18日に報道でStudioの件を知り、通知メールで該当を確認。"
    },
    "新潟市（業務効率専門家派遣事業・在宅テレワーカー育成事業）": {
      officialUrl: "https://www.city.niigata.lg.jp/shisei/koho/houdou/202610.files/261019_4.pdf",
      events: [
        E("disclosed", "2026-10-19", "新潟市報道資料 令和 8 年 10 月 19 日", "@")
      ],
      causes: ["vendor"], causeText: "運営会社（Studio 株式会社）が、第三者による不正アクセスにより個人情報等が漏えいした可能性があると発表",
      certainty: "possible",
      dataNote: "合計の記載なし。"
    },
    "長岡市（移住体験ツアー特設サイト）": {
      officialUrl: "https://www.city.nagaoka.niigata.jp/shisei/cate02/houdou-shiryou/file/20261019-05.pdf",
      events: [
        E("vendor_notified", "2026-10-16", "10月16日（金）午後２時42分…受託事業者から報告を受けました", "@"),
        E("disclosed", "2026-10-19", "令和８年１０月１９日 長岡市地方創生推進部 政策企画課長", "@")
      ],
      causes: ["vendor"], causeText: "ウェブサイト制作サービス提供事業者（Studio 株式会社）のクラウド環境への不正アクセス",
      certainty: "possible",
      dataNote: "令和8年9月5日～10月13日の入力分。氏名、メールアドレス、住所（4件は市区町村まで）、家族構成。"
    },
    "神奈川県（成長期ベンチャー交流拠点事業）": {
      officialUrl: "https://www.pref.kanagawa.jp/docs/sr4/prs/r9000706.html",
      events: [
        E("vendor_notified", "2026-10-16", "同日21時30分頃、株式会社eiiconから産業振興課あて…報告", "@"),
        E("disclosed", "2026-10-19", "委託事業における個人情報の漏えいの可能性について（第１報） 2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "受託事業者が使用していたサービスを運営する事業者が外部から不正アクセスを受け",
      certainty: "possible",
      dataNote: "受託事業者はパーソルイノベーション（現在は事業継承した株式会社eiicon）。ページの初期公開日は2026年10月20日、資料日付は10月19日。"
    },
    "アクティブリテック（Studio経由）": {
      officialUrl: "https://active-rt.com/news/unauthorized-access-to-the-website-creation-service-studio/",
      events: [
        E("disclosed", "2026-10-19", "2026-10-19", "@")
      ],
      causes: ["vendor"], causeText: "同社サービスの一部機能の脆弱性を悪用した第三者による不正アクセス",
      certainty: "possible"
    },
    "シミックHD（CMIC Trust・harmo／Studio経由）": {
      officialUrl: "https://www.cmicgroup.com/news/notice/2026/20261019/",
      events: [
        E("disclosed", "2026-10-19", "2026年10月19日", "@"),
        E("update", "2026-10-20", "【10月20日更新】…harmo株式会社について調査の結果", "@"),
        E("update", "2026-10-20", "2026/10/20 Studio株式会社への不正アクセスに伴う個人情報漏えいの可能性について", "https://www.harmo.biz/posts/studio")
      ],
      causes: ["vendor"], causeText: "外部サービスにおいて不正アクセスが発生",
      certainty: "possible",
      dataNote: "対象はCMIC Trust株式会社とharmo株式会社。harmoは2026/10/20に自社ページ（https://www.harmo.biz/posts/studio）で運輸向け健康支援事業サイトのお問い合わせフォームが対象と公表。piyologでは2社別掲載だが初報が同一のため1件に統合。"
    },
    "クラウドワークス（アカデミー・クラウドタウン等／Studio経由）": {
      officialUrl: "https://crowdworks.co.jp/news/v-2z1klpkvd/",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日の間", "@"),
        E("vendor_notified", "2026-10-16", "当社は2026年10月16日に同社から連絡を受け", "@"),
        E("disclosed", "2026-10-19", "2026.10.19", "@")
      ],
      causes: ["vendor"], causeText: "第三者が同社のクラウド環境に不正にアクセス",
      certainty: "possible",
      dataNote: "件数はフォーム送信件数で人数と一致しない場合あり。合計値の記載なし。"
    },
    "Voicy（パーソナリティ応募・法人問い合わせ／Studio経由）": {
      officialUrl: "https://corp.voicy.jp/2026/10/19/11746/",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日にかけて", "@"),
        E("vendor_notified", "2026-10-16", "当社は10月16日に同社から報告を受け", "@"),
        E("disclosed", "2026-10-19", "2026.10.19", "@"),
        E("update", "2026-10-20", "(10月20日更新)", "@")
      ],
      causes: ["vendor"], causeText: "同社サービスの一部機能の脆弱性が悪用され",
      certainty: "possible",
      dataNote: "件数はフォーム送信件数で人数とは一致しない。"
    },
    "JIJ（Studio経由）": {
      officialUrl: "https://www.j-ij.com/ja/news/ImportantNotice-20261019",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日（日本時間）", "@"),
        E("vendor_notified", "2026-10-16", "当社は2026年10月16日、Studioから", "@"),
        E("disclosed", "2026-10-19", "2026/10/19", "@")
      ],
      causes: ["vendor"], causeText: "同サービスが利用するクラウド環境に対し…不正アクセス",
      certainty: "possible"
    },
    "メディアリンク（AIto・DXでんわ等サイト／Studio経由）": {
      officialUrl: "https://www.medialink-ml.co.jp/news/2026/important-notice-20261019/",
      events: [
        E("incident", "2026-09-30", "2026年9月30日〜10月1日に発生", "@"),
        E("vendor_notified", "2026-10-16", "当社は10月16日に同社から連絡を受け", "@"),
        E("disclosed", "2026-10-19", "2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "Studioの一部機能の脆弱性を悪用した第三者による不正アクセス",
      certainty: "possible"
    },
    "建設物価調査会（Web建設物価受付／Studio経由）": {
      officialUrl: "https://kensetu-bukka.studio.site/notice/20261019",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日にかけて", "@"),
        E("disclosed", "2026-10-19", "2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "クラウドサービス「Studio」が第三者による不正アクセスを受け",
      certainty: "possible",
      dataNote: "piyolog掲載URL（https://www.kensetu-bukka.or.jp/notice/18878/）はPHP脆弱性対応で公開停止中のため、同会の暫定サイト（studio.site）上の同日付お知らせで確認。"
    },
    "トドケール（コーポレートサイト／Studio経由）": {
      officialUrl: "https://todoker.com/news/Jrv65COB",
      events: [
        E("disclosed", "2026-10-19", "2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "Studio株式会社のクラウド環境が第三者による不正アクセスを受けた",
      certainty: "possible"
    },
    "Ubie（コーポレートサイト／Studio経由）": {
      officialUrl: "https://ubie.life/news/notice-20261019",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日にかけて", "@"),
        E("disclosed", "2026-10-19", "2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "同社が提供するシステムへの不正アクセス",
      certainty: "possible",
      dataNote: "件数はフォーム送信件数で人数ではない（コーポレート最大15,243件、サービス最大762件）。"
    },
    "スペイシー（GYYM・THE POINT／Studio経由）": {
      officialUrl: "https://www.spacee.co.jp/news/3050",
      events: [
        E("incident", "2026-09-30", "2026年9月30日〜10月1日：第三者による不正アクセス", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日、Studio株式会社より本件について報告を受けました", "@"),
        E("disclosed", "2026-10-19", "2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "「Studio」（Studio株式会社）への第三者による不正アクセス",
      certainty: "possible"
    },
    "mikan（Studio経由）": {
      officialUrl: "https://mikan.link/posts/vw-yTBy1",
      events: [
        E("incident", "2026-09-30", "不正アクセスが確認されている期間は2026年9月30日〜10月1日", "@"),
        E("disclosed", "2026-10-19", "2026/10/19", "@")
      ],
      causes: ["vendor"], causeText: "Webサイト制作ツール「Studio」が、第三者から不正アクセスを受けました",
      certainty: "possible",
      dataNote: "公開日はページのスクリプトで描画される表示日付（ブラウザで確認）。件数は回答件数で人数とは異なる。mikanアプリのシステムは対象外。"
    },
    "南房タクシー（Studio経由）": {
      officialUrl: "https://nanboutaxi.com/news/l-Nq0gAz",
      events: [
        E("incident", "2026-09-30", "2026年9月30日〜10月1日（現時点で確認されている期間）", "@"),
        E("vendor_notified", "2026-10-16", "（以下「Studio社」）より、2026年10月16日に", "@"),
        E("disclosed", "2026-10-19", "2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "一部機能の脆弱性を悪用した不正アクセスが発生",
      certainty: "possible"
    },
    "X Mile（Studio経由）": {
      officialUrl: "https://www.xmile.co.jp/news/release328",
      events: [
        E("incident", "2026-09-30", "2026年9月30日〜10月1日：第三者による不正アクセス", "@"),
        E("disclosed", "2026-10-19", "公表日：2026年10月19日", "@"),
        E("update", "2026-10-21", "更新日：2026年10月21日", "@")
      ],
      causes: ["vendor"], causeText: "第三者が同サービスの一部機能の脆弱性を悪用して同社のクラウド環境に不正にアクセス",
      certainty: "possible",
      dataNote: "クロスワーク、ロジポケ等の各サービスの登録情報は対象外。10月16日はStudio社の公表を受けて把握した日。"
    },
    "フーディソン（コーポレートサイト／Studio経由）": {
      officialUrl: "https://foodison.jp/news/202610privacy",
      events: [
        E("incident", "2026-09-30", "2026年9月30日～10月1日：第三者がStudio社のサービスの脆弱性を悪用", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日：弊社がStudio社から連絡を受領", "@"),
        E("disclosed", "2026-10-19", "2026/10/19", "@")
      ],
      causes: ["vendor"], causeText: "第三者がStudio社のサービスの脆弱性を悪用し、同社のクラウド環境に不正アクセス",
      certainty: "possible",
      dataNote: "公開日はページのスクリプトで描画される表示日付（ブラウザで確認）。対象は2023年10月24日〜2026年10月14日の送信分。魚ポチ等の各サービスの顧客情報は対象外。"
    },
    "YAMAGATA（コーポレートサイト／Studio経由）": {
      officialUrl: "https://yamagata-corp.jp/news/20261019",
      events: [
        E("incident", "2026-09-30", "不正アクセスを確認できている期間は、2026年9月30日〜10月1日", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日（日本時間）、同社が利用するクラウド環境へ", "@"),
        E("disclosed", "2026-10-19", "2026.10.19", "@")
      ],
      causes: ["vendor"], causeText: "第三者がCMSの一部機能の脆弱性を悪用",
      certainty: "possible",
      dataNote: "対象は2025年2月21日〜2026年10月14日の「ご相談・お問い合せ」利用分。項目に住所を含む。人材サービス部サイトは情報漏えいのおそれなしとしている。"
    },
    "羅針盤（Studio経由）": {
      officialUrl: "https://compasscorp.jp/news/1225/",
      events: [
        E("vendor_notified", "2026-10-16", "2026年10月16日に運営会社Studio株式会社より連絡を受ける", "@"),
        E("disclosed", "2026-10-19", "2026年10月19日", "@")
      ],
      causes: ["vendor"], causeText: "外部CMSツール「Studio」のシステムの一部脆弱性を悪用した第三者による不正アクセス",
      certainty: "possible",
      dataNote: "COMPASS STAYは2025年1月15日までの取得分。"
    },
    "TRUSTART（Studio経由）": {
      officialUrl: "https://www.trustart.co.jp/news/20261019",
      events: [
        E("incident", "2026-09-30", "不正アクセスが確認されている期間は2026年9月30日〜10月1日", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日、Studio株式会社から当社に対し", "@"),
        E("disclosed", "2026-10-19", "2026-10-19", "@")
      ],
      causes: ["vendor"], causeText: "Studio株式会社のクラウド環境に、第三者による不正アクセスがあった",
      certainty: "possible",
      dataNote: "送信期間は2021年12月〜2026年5月。R.E.DATA Plus等の利用者情報は対象外。"
    },
    "フィードフォース（アナグラム「TATE-PRO」含む／Studio経由）": {
      officialUrl: "https://www.feedforce.jp/information/20261019",
      events: [
        E("vendor_notified", "2026-10-16", "2026年10月16日（金）、Studio社より", "@"),
        E("disclosed", "2026-10-19", "2026.10.19", "@")
      ],
      causes: ["vendor"], causeText: "同社のクラウド環境が第三者による不正アクセスを受け",
      certainty: "possible",
      dataNote: "公開日はページのスクリプトで描画される表示日付（ブラウザで確認）。アナグラム社「TATE-PRO」の顧客分を含む（案内はアナグラム社から）。親会社フィードフォースグループも同日付でまとめのお知らせを掲載（https://feedforcegroup.jp/news/1681/）。"
    },
    "リワイア（App Unity／Studio経由）": {
      officialUrl: "https://rewired.jp/blogs/news/20261019",
      events: [
        E("vendor_notified", "2026-10-16", "2026年10月16日（金）、Studio社より", "@"),
        E("disclosed", "2026-10-19", "2026/10/19", "@")
      ],
      causes: ["vendor"], causeText: "同社のクラウド環境が第三者による不正アクセスを受け",
      certainty: "possible",
      dataNote: "フィードフォースと共同運営。フォームは2024年2月〜4月頃に利用。"
    },
    "アジケ（コーポレートサイト／Studio経由）": {
      officialUrl: "https://ajike.co.jp/news/notice-studio-unauthorized-access-2026-10",
      events: [
        E("incident", "2026-09-30", "2026年9月30日〜10月1日：Studio社のクラウド環境への不正アクセス", "@"),
        E("vendor_notified", "2026-10-16", "当社にも、フォームの送信内容が影響を受けている旨の連絡があり", "@"),
        E("disclosed", "2026-10-19", "2026-10-19", "@")
      ],
      causes: ["vendor"], causeText: "一部機能の脆弱性を悪用した不正アクセスが発生",
      certainty: "possible",
      dataNote: "公開日はページのスクリプトで描画される表示日付（ブラウザで確認）。件数は送信件数で人数とは一致しない場合がある。"
    },
    "Qand（Studio経由）": {
      officialUrl: "https://www.qand.co.jp/news/studio-incident-2026",
      events: [
        E("incident", "2026-09-30", "不正アクセスが2026年9月30日〜10月1日に確認され", "@"),
        E("disclosed", "2026-10-19", "公開日 2026.10.19", "@")
      ],
      causes: ["vendor"], causeText: "同社の一部機能の脆弱性を悪用した不正アクセス",
      certainty: "possible",
      dataNote: "ページはクライアント描画のためブラウザで本文を確認。"
    },
    "バイタルリード（TAKUZOサイト）": {
      officialUrl: "https://takuzo.vitallead.co.jp/posts/YkJmU-8b",
      events: [
        E("incident", "2026-09-30", "不正アクセスが確認された期間：2026年9月30日～10月1日（日本時間）", "@"),
        E("disclosed", "2026-10-19", "2026年10月19日", "@")
      ],
      causes: ["vendor", "human"], causeText: "自社としてお問い合わせ対応が終了した段階で、データを速やかに削除していなかったことが、今回の事態を招いた原因",
      certainty: "possible",
      dataNote: "自社のデータ未削除を原因として明記（Studio社側の脆弱性悪用による不正アクセスと併記）。配車システム「TAKUZO」への影響はないと記載。"
    },
    "Awarefy（コーポレートサイト）": {
      officialUrl: "https://www.awarefy.com/news/corporate-261019",
      events: [
        E("incident", "2026-09-30", "不正アクセスが確認されている期間は2026年9月30日〜10月1日", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日、同サービスを提供するStudio株式会社より", "@"),
        E("disclosed", "2026-10-19", "【2026年10月19日(月)発表】", "@")
      ],
      causes: ["vendor"], causeText: "Studioの一部機能の脆弱性を、第三者に悪用されたことにより生じたもの",
      certainty: "possible"
    },
    "八千代町（防災情報メール）": {
      officialUrl: "https://www.town.ibaraki-yachiyo.lg.jp/page/page012699.html", listedDate: "2026-10-20",
      events: [
        E("update", "2026-10-20", "2026年10月20日", "@")
      ],
      causes: ["vendor"], causeText: "「八千代町防災情報メール配信サービス」が不正アクセスを受けたことが判明",
      certainty: "possible",
      dataNote: "現在のページは再開のお知らせ（末尾日付2026年10月20日）で初回掲載日不明のためdisclosedは省略。"
    },
    "横浜市栄区（緊急時情報伝達システム）": {
      officialUrl: "https://www.city.yokohama.lg.jp/sakae/bosai_bohan/saigai/bousai/kinnkyujiteishi.html",
      events: [
        E("disclosed", "2026-10-20", "最終更新日 2026年10月20日", "@")
      ],
      causes: ["vendor"], causeText: "運営する事業者（株式会社アルカディア）が不正アクセスを受けたことに伴い",
      certainty: "possible",
      dataNote: "日付は最終更新日（2026年10月20日）のみで、初報の日付は不明。漏洩項目の記載なし。"
    },
    "新居浜市（職員参集システム・消防の災害時等メール配信システム）": {
      officialUrl: "https://www.city.niihama.lg.jp/soshiki/soumu/kojinjyouhou.html",
      events: [
        E("disclosed", "2026-10-20", "更新日：2026年10月20日更新", "@")
      ],
      causes: ["vendor"], causeText: "運営事業者（株式会社アルカディア）が第三者による不正アクセスを受けました",
      certainty: "possible",
      dataNote: "ページの日付は更新日（10月20日、漏えい可能性情報の追加後）のみのため、それを公表日として記録。初出はこれより前の可能性がある。"
    },
    "玄海町（災害メールサービス）": {
      officialUrl: "https://www.town.genkai.lg.jp/soshiki/18/96255.html",
      events: [
        E("disclosed", "2026-10-20", "更新日：2026年10月20日更新", "@")
      ],
      causes: ["vendor"], causeText: "委託事業者である株式会社アルカディアに対し第三者による不正アクセス",
      certainty: "possible",
      dataNote: "ページ上の日付は更新日（2026年10月20日、新規登録再開の追記あり）のみ。初報日は不明。"
    },
    "埼玉県（ぷらっとさいたま -スマート農業導入ナビ-）": {
      officialUrl: "https://www.pref.saitama.lg.jp/a0903/news/page/news2026102001.html",
      events: [
        E("vendor_notified", "2026-10-20", "令和8年10月20日、株式会社ナレッジクライマーから", "@"),
        E("leak_possible", "2026-10-20", "個人情報が流出した可能性があると県に報告がありました", "@"),
        E("disclosed", "2026-10-20", "発表日：2026年10月20日18時", "@")
      ],
      causes: ["vendor"], causeText: "ユミルリンク株式会社のサーバーに不正アクセスがあり",
      certainty: "possible",
      dataNote: "再委託構造（県→ナレッジクライマー→ユミルリンク）。ページには「Cuenote」の名称はなく「ユミルリンク株式会社のサーバー」と記載。"
    },
    "カクヤス（飲食店向けメールマガジン）": {
      officialUrl: "https://pro-navi.kakuyasu.co.jp/news/261020/unauthorizedaccess/",
      events: [
        E("disclosed", "2026-10-20", "2026.10.20（更新日 2026.10.22）", "@"),
        E("update", "2026-10-22", "更新日 2026.10.22", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "「被害対象に含まれているとの情報は確認できていません」としつつ、「漏えいした可能性がある情報」として項目を列挙した予防的な注意喚起。"
    },
    "草津市（草津川跡地公園）": {
      officialUrl: "https://www.city.kusatsu.shiga.jp/kurashi/toshikeikaku/kusatsugawaatochi/oshirase/kusatsu_river221019.html",
      events: [
        E("vendor_notified", "2026-10-16", "令和8年10月16日（金曜日）、草津川跡地公園の指定管理者から市に対して…報告", "@"),
        E("leak_possible", "2026-10-19", "10月19日（月曜日）に…情報が外部に流出した可能性があることが判明", "@"),
        E("disclosed", "2026-10-20", "更新日：2026年10月20日", "@")
      ],
      causes: ["vendor"], causeText: "「Studio株式会社」のクラウド環境へ第三者が不正アクセスし",
      certainty: "possible",
      dataNote: "氏名、住所、電話番号、メールアドレス。"
    },
    "新潟県（チャレンジ新潟ポータルサイト）": {
      officialUrl: "https://www.pref.niigata.lg.jp/sec/sangyoritchi/challenge-niigata-husei.html",
      events: [
        E("vendor_notified", "2026-10-19", "10月19日午後3時10分頃、受託事業者から…報告がありました", "@"),
        E("disclosed", "2026-10-20", "（第1報） 更新日：2026年10月20日更新", "@")
      ],
      causes: ["vendor"], causeText: "外部クラウドサービス「Studio」において、不正アクセスが発生し",
      certainty: "possible",
      dataNote: "会社名、所属、担当者氏名、メールアドレス、電話番号、問い合わせ本文。"
    },
    "千葉県（ちば部ほか委託4事業）": {
      officialUrl: "https://www.pref.chiba.lg.jp/dejisui/press/2026/20261020incident.html",
      events: [
        E("vendor_notified", null, "10月16日（金曜日）から19日（月曜日） 各委託事業者から県に対し、不正アクセスの報告", "@"),
        E("disclosed", "2026-10-20", "発表日：令和8年10月20日", "@")
      ],
      causes: ["vendor"], causeText: "クラウドサービス「Studio」…が、第三者による不正アクセスを受け",
      certainty: "possible",
      dataNote: "合計の記載なし。nは最大の単一件数（ちば部の法人登録78事業者）。委託事業者からの報告は10月16日～19日にまたがるため日付はnull。"
    },
    "飛騨市（飛騨まんが王国）": {
      officialUrl: "https://www.city.hida.gifu.jp/soshiki/5/88316.html",
      events: [
        E("vendor_notified", "2026-10-16", "令和8年10月16日、…Studio株式会社より…報告がありました", "@"),
        E("disclosed", "2026-10-20", "掲載日：2026年10月20日更新", "@")
      ],
      causes: ["vendor"], causeText: "Studio株式会社より、同社のクラウド環境へ第三者が不正アクセスし",
      certainty: "possible",
      dataNote: "氏名、メールアドレス、電話番号。"
    },
    "TVer（TVer広告サイト／Studio経由）": {
      officialUrl: "https://tver.co.jp/news/20261020",
      events: [
        E("vendor_notified", "2026-10-16", "2026年10月16日、Studio株式会社より、同社が利用するクラウド環境", "@"),
        E("disclosed", "2026-10-20", "2026.10.20", "@")
      ],
      causes: ["vendor"], causeText: "第三者が「Studio」の一部機能の脆弱性を悪用してクラウド環境に不正アクセス",
      certainty: "possible",
      dataNote: "公開日はページのスクリプトで描画される表示日付（ブラウザで確認）。動画配信サービス「TVer」のユーザー情報は含まれない。"
    },
    "ガモウ（サービスサイト各種／Studio経由）": {
      officialUrl: "https://www.gamo.co.jp/news/37855/",
      events: [
        E("disclosed", "2026-10-20", "2026.10.20", "@")
      ],
      causes: ["vendor"], causeText: "Studio株式会社のシステムに第三者による不正アクセスがあった",
      certainty: "possible",
      dataNote: "対象はTokyo Hairdressing Awards、cetera app、OLAPLEX等のサービスサイト。オフィシャルサイトは対象外。"
    },
    "リプロネクスト（旧採用サイト・ゴーグルLP／Studio経由）": {
      officialUrl: "https://lipronext.com/news/release/%E3%80%8Cstudio%E3%80%8D%E3%81%B8%E3%81%AE%E4%B8%8D%E6%AD%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%AB%E4%BC%B4%E3%81%86%E6%83%85%E5%A0%B1%E6%B5%81%E5%87%BA%E3%81%AE%E5%8F%AF%E8%83%BD%E6%80%A7/",
      events: [
        E("vendor_notified", "2026-10-16", "2026年10月16日に提供元のStudio株式会社から報告を受けました", "@"),
        E("disclosed", "2026-10-20", "2026.10.20", "@")
      ],
      causes: ["vendor"], causeText: "「Studio」において、不正アクセスによる情報流出の可能性がある",
      certainty: "possible",
      dataNote: "2025年から利用のGoogleフォーム経由の応募情報は対象外。添付ファイルはファイル名のみ。"
    },
    "NTT DXパートナー（Studio経由）": {
      officialUrl: "https://www.nttdxpn.co.jp/information/notice/l_jurre04u/",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日（現時点で確認されている期間）にかけて", "@"),
        E("disclosed", "2026-10-20", "2026.10.20", "@")
      ],
      causes: ["vendor"], causeText: "第三者がStudio株式会社のサービスの一部機能の脆弱性を悪用して同社のクラウド環境に不正にアクセス",
      certainty: "possible",
      dataNote: "対象期間は過去送信分すべて。添付ファイルはファイル名のみ。"
    },
    "MEME（Studio経由）": {
      officialUrl: "https://memetech.co.jp/posts/yfeJtJkb",
      events: [
        E("disclosed", "2026-10-20", "2026年10月20日（火）", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生し、フォームに入力された情報が外部に流出した可能性",
      certainty: "possible",
      dataNote: "運営会社は株式会社MEME（memetech.co.jp）。当社における具体的な影響範囲は未確定で、Studio社に調査・確認を依頼中としている。"
    },
    "HYPE（TOKIO TOKYOほか／Studio経由）": {
      officialUrl: "https://tokio.world/contents/webstudio",
      events: [
        E("incident", "2026-09-30", "不正アクセスは2026年9月30日から10月1日にかけて発生", "@"),
        E("disclosed", "2026-10-20", "2026-10-20", "@"),
        E("update", "2026-10-24", "2026-10-24", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生",
      certainty: "possible",
      dataNote: "払い戻し受付フォーム（247件）は振込先口座情報（金融機関名・口座番号・名義）を含む。TOKIO TOKYO、CHIC HALL SHIBUYA等11フォーム。"
    },
    "Relic（Innovator’s101ほか各サービスサイト／Studio経由）": {
      officialUrl: "https://relic.co.jp/news/notice/63588/",
      events: [
        E("disclosed", "2026-10-20", "2026年10月20日19:00", "@")
      ],
      causes: ["vendor"], causeText: "「Studio」（Studio株式会社運営）への第三者による不正アクセス",
      certainty: "possible",
      dataNote: "対象サービスは20サービス超。件数は2026年10月20日18時時点で、今後追加の可能性があると記載。"
    },
    "ポケットサイン": {
      officialUrl: "https://pocketsign.co.jp/news/130",
      events: [
        E("disclosed", "2026-10-20", "2026-10-20", "@")
      ],
      causes: ["vendor"], causeText: "外部サービス「Studio」（Studio株式会社提供）において第三者による不正アクセスが発生",
      certainty: "possible",
      dataNote: "対象は通常は表示されていなかった非表示フォームの送信情報。通常のお問い合わせフォームや自治体向けアプリの利用者情報は対象外と記載。"
    },
    "鹿児島テレビ（KTS住宅フェア）": {
      officialUrl: "https://www.kts-tv.co.jp/plus/single.html?id=277",
      events: [
        E("incident", "2026-09-30", "2026年9月30日〜10月1日：Studio株式会社のシステムの脆弱性を悪用し", "@"),
        E("disclosed", "2026-10-20", "2026年10月20日", "@")
      ],
      causes: ["vendor"], causeText: "Studioの一部機能の脆弱性を突いた不正アクセス",
      certainty: "possible"
    },
    "LayerX（コーポレートサイト）": {
      officialUrl: "https://layerx.co.jp/news/202610201500/",
      events: [
        E("incident", "2026-09-30", "不正アクセスは2026年9月30日〜10月1日（現時点で確認されている期間）に発", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日、提供元のStudio株式会社（以下「Studio社」）よ", "@"),
        E("disclosed", "2026-10-20", "2026.10.20", "@")
      ],
      causes: ["vendor"], causeText: "同社のクラウド環境への不正アクセスにより情報が外部に漏えいした可能性",
      certainty: "possible"
    },
    "リヴァ（Google広告LP）": {
      officialUrl: "https://liva.co.jp/news/25827",
      events: [
        E("incident", "2026-09-30", "2026年9月30日〜10月1日に第三者による不正アクセスを受けた", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日、弊社が利用するWeb制作プラットフォーム「Studio」", "@"),
        E("disclosed", "2026-10-20", "2026.10.20", "@")
      ],
      causes: ["vendor"], causeText: "Webサイト制作プラットフォーム「Studio」において第三者による不正アクセスが発生",
      certainty: "possible",
      dataNote: "ページ表記は「2026.10.20 | 最終更新日:2026.10.21」。"
    },
    "Jitera（旧コーポレートサイト）": {
      officialUrl: "https://jitera.com/ja/news/20261019/",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日の間、第三者が同社のクラウド環境に不正にアクセ", "@"),
        E("vendor_notified", "2026-10-16", "10月16日に同社から連絡を受け", "@"),
        E("disclosed", "2026-10-20", "2026年10月20日", "@")
      ],
      causes: ["vendor"], causeText: "「Studio」において、第三者による不正アクセスが発生",
      certainty: "possible",
      dataNote: "URLは20261019だがページの日付表記は2026年10月20日。対象者には個別連絡済みで、連絡が届かない人向けに掲載したと記載。"
    },
    "エムクロスエンジニアリング（カバーグリップ）": {
      officialUrl: "https://storage.googleapis.com/studio-design-asset-files/projects/d7WlJe9ZqV/s-1x1_bfd9131c-304b-4bad-bd4f-f82f3835e114.pdf",
      events: [
        E("vendor_notified", "2026-10-16", "2026年10月16日、当社が同ウェブサイトで利用しているウェブサイト制作", "@"),
        E("disclosed", "2026-10-20", "2026年10月20日", "@")
      ],
      causes: ["vendor"], causeText: "同社のクラウド環境において第三者による不正アクセスが発生",
      certainty: "possible"
    },
    "エクサウィザーズ（wellwiz・リハwizほか）": {
      officialUrl: "https://exawizards.com/archives/33142/",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日にかけて、同社のシステムの脆弱性を悪用した不正", "@"),
        E("disclosed", "2026-10-20", "2026.10.20", "@")
      ],
      causes: ["vendor"], causeText: "同社のシステムの脆弱性を悪用した不正アクセス",
      certainty: "possible",
      dataNote: "対象者には10月19日に個別通知済みと記載。"
    },
    "Amazing Day（DM Boosterほか）": {
      officialUrl: "https://www.amazingday.co.jp/news/20261020-security-notice.html",
      events: [
        E("incident", "2026-09-30", "Studio株式会社のクラウド環境に2026年9月30日〜10月1日に不正アクセ", "@"),
        E("vendor_notified", "2026-10-16", "弊社は10月16日に同社からの連絡で本件を把握", "@"),
        E("disclosed", "2026-10-20", "2026年10月20日", "@")
      ],
      causes: ["vendor"], causeText: "Studioの一部機能の脆弱性が悪用されたもの",
      certainty: "possible"
    },
    "Medii": {
      officialUrl: "https://medii.jp/news/20261020",
      events: [
        E("incident", "2026-09-30", "2026年9月30日〜10月1日：…不正アクセスが発生", "@"),
        E("vendor_notified", "2026-10-16", "同日、…流出した可能性がある旨の連絡を同社より受領", "@"),
        E("disclosed", "2026-10-20", "2026/10/20", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "対象は2023年2月20日〜2024年12月27日のお問い合わせフォーム送信分。Medii Eコンサル・Medii Qの会員情報は対象外。"
    },
    "ふるさと全国県人会まつり実行委員会": {
      officialUrl: "https://kenjinkai-matsuri.com/NnfhWpxP/1u2nmIA1",
      events: [
        E("disclosed", "2026-10-20", "2026/10/20 07:00", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "事務局の問い合わせ先は読売新聞中部支社総務部。"
    },
    "平田タイル": {
      officialUrl: "https://www.hiratatile.co.jp/news/2O1MHuzy",
      events: [
        E("incident", "2026-09-30", "2026年9月30日〜10月1日（現時点で確認されている期間）", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日に…報告を受けました", "@"),
        E("disclosed", "2026-10-20", "2026.10.20", "@")
      ],
      causes: ["vendor"], causeText: "一部機能の脆弱性を悪用した不正アクセス",
      certainty: "possible",
      dataNote: "対象は2025年1月1日〜2026年10月1日の問い合わせフォーム入力分。"
    },
    "船橋市消防局（NET119）": {
      officialUrl: "https://www.city.funabashi.lg.jp/emergency/news/attention1/p150975.html",
      events: [
        E("leak_possible", "2026-10-14", "2026年10月14日15時00分…漏えいした可能性があることを確認いたしました", "@"),
        E("disclosed", "2026-10-21", "更新日：令和8(2026)年10月21日（水曜日）", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "日付は更新日のみ（初回掲載日は不明）。10月14日15時00分は委託業者からの情報の時刻とも読め、主体がやや曖昧。"
    },
    "日野市（メール配信サービス）": {
      officialUrl: "https://www.city.hino.lg.jp/kurashi/annzen/bousai/mail/1032174.html",
      events: [
        E("disclosed", "2026-10-21", "令和8年10月21日", "@")
      ],
      causes: ["vendor"], causeText: "サービス提供事業者（事業者名：株式会社アルカディア）に対し、第三者からの不正アクセスが確認されました",
      certainty: "possible",
      dataNote: "ページ上の日付は令和8年10月21日のみで、これを公表日として記録。"
    },
    "アイ・コミュニケーション（アイ・メール）": {
      officialUrl: "https://www.sc-p.jp/news/20261021/",
      events: [
        E("disclosed", "2026-10-21", "2026.10.21", "@"),
        E("update", "2026-10-28", "最終更新：2026年10月28日（水）13時00分", "@")
      ],
      causes: ["vendor"], causeText: "外部の第三者による不正アクセスが発生しました",
      certainty: "possible",
      dataNote: "配信先リストの漏えいは内部調査では未確認だが外部調査継続中としている。"
    },
    "大分県（おおいた子育て応援パスポート）": {
      officialUrl: "https://www.pref.oita.jp/soshiki/12520/kosodateouen-passport.html",
      events: [
        E("disclosed", "2026-10-21", "本日（令和８年１０月２１日）", "@"),
        E("leak_confirmed", null, "「ブラストメール」に保管されていたメールアドレスが外部に漏えいしたことが判明", "https://www.pref.oita.jp/soshiki/12520/kosodateouen-passport2.html"),
        E("update", "2026-10-23", "更新日：2026年10月23日更新", "https://www.pref.oita.jp/soshiki/12520/kosodateouen-passport2.html")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスを受け",
      certainty: "confirmed",
      dataNote: "漏えい判明の日付は第2報に明記なし。"
    },
    "香美市（登録制メール）": {
      officialUrl: "https://www.city.kami.lg.jp/soshiki/10/tourokumail-rouei.html", listedDate: "2026-10-21",
      events: [
        E("update", "2026-10-21", "更新日：2026年10月21日更新", "@")
      ],
      causes: ["vendor"], causeText: "システムに対する不審なアクセスにより",
      certainty: "confirmed",
      dataNote: "公式ページに初回掲載日の記載がないため disclosed は未記録。"
    },
    "BS11（BS11マガジン）": {
      officialUrl: "https://www.bs11.jp/info/",
      events: [
        E("disclosed", "2026-10-21", "2026年10月21日（水）", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不審なアクセスが検知され",
      certainty: "possible",
      dataNote: "お知らせ一覧ページ内の項目。"
    },
    "山梨市（防災防犯メール）": {
      officialUrl: "https://www.city.yamanashi.yamanashi.jp/soshiki/7/21187.html", listedDate: "2026-10-21",
      events: [
        E("update", "2026-10-21", "更新日：2026年10月21日", "@")
      ],
      causes: ["vendor"], causeText: "10月21日に第三者による不正アクセスが行われ",
      certainty: "possible",
      dataNote: "アルカディア（10月13日発生）の件とは別案件と明記。サービス名の記載はなく運営会社名のみ。公式ページに初回掲載日の記載がないため disclosed は未記録。"
    },
    "江戸川区（農の風景コンテスト）": {
      officialUrl: "https://www.city.edogawa.tokyo.jp/e004/kuseijoho/kohokocho/press/2026/10/1021.html",
      events: [
        E("incident", "2026-09-30", "9月30日から10月1日にStudio株式会社が不正アクセスを受ける", "@"),
        E("vendor_notified", "2026-10-20", "10月20日、受託事業者より区に…連絡があった", "@"),
        E("disclosed", "2026-10-21", "2026年10月21日 区の委託事業における個人情報漏えいの可能性", "@")
      ],
      causes: ["vendor"], causeText: "Studio株式会社が不正アクセスを受け",
      certainty: "possible",
      dataNote: "氏名、生年月日、住所、メールアドレス、電話番号。区は10月23日にも同名の発表をしている（別事業か続報かは未確認）。"
    },
    "須崎市（釣りバカシティSUSAKI）": {
      officialUrl: "https://www.city.susaki.lg.jp/life/detail.php?hdnKey=6134",
      events: [
        E("incident", "2026-09-30", "令和8年9月30日～10月1日、Studio社のクラウド環境に第三者の不正アクセス", "@"),
        E("vendor_notified", "2026-10-16", "令和8年10月16日（金）に運営管理事業者より本市に第一報", "@"),
        E("disclosed", "2026-10-21", "掲載日 ： 2026/10/21", "@")
      ],
      causes: ["vendor"], causeText: "サービス提供事業者のクラウド環境に第三者の不正アクセスがあり",
      certainty: "possible",
      dataNote: "運営管理事業者は株式会社アイムービック。サイトは非公開化。"
    },
    "名古屋市（ICTを活用した禁煙支援事業）": {
      officialUrl: "https://www.city.nagoya.jp/houdou/3003942/3003949/3006141.html",
      events: [
        E("disclosed", "2026-10-21", "報道発表日時：2026年10月21日 午後4時00分", "@")
      ],
      causes: ["vendor", "vuln"], causeText: "第三者にStudioの一部機能の脆弱性を悪用され、不正にアクセスされました",
      certainty: "possible",
      dataNote: "2025年7月14日～2026年8月31日の申込分。氏名、性別、生年月日、連絡先、住所のほか喫煙・服薬・通院状況、既往歴、アレルギー、妊娠の有無等を含む。"
    },
    "山梨県（やまなしキャリアアップ・ユニバーシティ）": {
      officialUrl: "https://www.pref.yamanashi.jp/release/san-jin/0810/cuu0810.html",
      events: [
        E("disclosed", "2026-10-21", "発表日：2026年10月21日", "@")
      ],
      causes: ["vendor"], causeText: "Webサイト作成サービス「Studio」の運営会社において、不正アクセスによる情報漏洩の可能性",
      certainty: "possible",
      dataNote: "運営受託者はNTT DXパートナー（委託元：山梨県職業能力開発協会）。氏名、電話番号、メールアドレスなど。同県は在宅医療研修会、県政情報の配信、社会人基礎力養成講座でも情報漏洩の可能性を別途発表しているが、本エントリはCUUのみ。"
    },
    "Payke（コーポレートサイト）": {
      officialUrl: "https://payke.co.jp/news/20261021",
      events: [
        E("incident", "2026-09-30", "不正アクセスが確認されている期間は2026年9月30日〜10月1日（日本時間）", "@"),
        E("vendor_notified", "2026-10-16", "当社は同日、Studio社からの連絡を受け", "@"),
        E("disclosed", "2026-10-21", "2026年10月21日", "@")
      ],
      causes: ["vendor"], causeText: "「Studio」の一部機能の脆弱性が第三者に悪用されたもの",
      certainty: "possible"
    },
    "Acompany（コーポレートサイト）": {
      officialUrl: "https://www.acompany.tech/news/26-1021-2",
      events: [
        E("incident", "2026-09-30", "2026年9月30日〜10月1日：第三者による不正アクセス", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日：Studio社による公表を受け、当社が本件を把握", "@"),
        E("disclosed", "2026-10-21", "2026/10/21", "@")
      ],
      causes: ["vendor"], causeText: "第三者が同サービスの一部機能の脆弱性を悪用して同社のクラウド環境に不正にアクセス",
      certainty: "possible"
    },
    "たかの橋中央病院": {
      officialUrl: "https://www.takanobashichuo-hp.jp/news/r_6Pj386",
      events: [
        E("incident", "2026-09-30", "2026年9月30日〜10月1日（現時点で確認されている期間）", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日に同社のクラウド環境への不正アクセスに伴い", "@"),
        E("disclosed", "2026-10-21", "2026.10.21", "@")
      ],
      causes: ["vendor"], causeText: "一部機能の脆弱性を悪用した不正アクセス",
      certainty: "possible"
    },
    "SODEN（コーポレートサイト）": {
      officialUrl: "https://soden-inc.jp/news/lvJ1UIly",
      events: [
        E("incident", "2026-09-30", "不正アクセスが確認されている期間：2026年9月30日〜10月1日（日本時間）", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日、Studio社より、同社のクラウド環境に不正アクセス", "@"),
        E("disclosed", "2026-10-21", "2026.10.21", "@")
      ],
      causes: ["vendor"], causeText: "Studioの一部機能の脆弱性を、第三者に悪用されたもの",
      certainty: "possible"
    },
    "ベイジ（採用サイト）": {
      officialUrl: "https://baigie.me/news/20261021-9254/",
      events: [
        E("incident", "2026-09-30", "不正アクセスが確認された期間：2026年9月30日〜10月1日", "@"),
        E("disclosed", "2026-10-21", "2026年10月21日", "@")
      ],
      causes: ["vendor"], causeText: "外部サービス「Studio」（提供：Studio株式会社）において、第三者による",
      certainty: "possible",
      dataNote: "当社データが実際に流出したかは確認中と記載。対象の可能性がある人へ2026年10月20日にメール連絡。"
    },
    "Sally（コーポレートサイト）": {
      officialUrl: "https://sally-inc.jp/news/2026-10-incident",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日にかけて不正アクセスが発生", "@"),
        E("vendor_notified", "2026-10-16", "10月16日に報告を受けました", "@"),
        E("disclosed", "2026-10-21", "2026年10月21日 株式会社Sally", "@")
      ],
      causes: ["vendor"], causeText: "Studio株式会社のクラウド環境に、2026年9月30日から10月1日にかけて不正アクセスが発生",
      certainty: "possible",
      dataNote: "同じお知らせで別件（2026年10月14日に社員メールアカウントが不正利用され、ウズのお問い合わせ管理システムにログインされた件、544名）も公表。本エントリはStudio関連分のみ。"
    },
    "クレシード（テリロジーHD子会社）": {
      officialUrl: "https://www.terilogy-hd.com/news/8147.html",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日の間、第三者が…不正にアクセス", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日、…Studio株式会社から、…連絡を受けました", "@"),
        E("disclosed", "2026-10-21", "2026年10月21日", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "親会社テリロジーホールディングスがPDFで公表。求人応募フォームでは生年月日・住所・学歴・経歴等を含む。"
    },
    "美唄市消防本部（参集メール・Net119）": {
      officialUrl: "https://www.city.bibai.hokkaido.jp/soshiki/35/32677.html",
      events: [
        E("vendor_notified", "2026-10-13", "令和8年10月13日…運営事業者から…報告", "@"),
        E("disclosed", "2026-10-22", "更新日：2026年10月22日更新", "@")
      ],
      causes: ["vendor"], causeText: "同社のサーバーに対して第三者による不正アクセスが発生",
      certainty: "possible",
      dataNote: "10月22日追記で33名を公表。初報の掲載日記載なし。公表日の記載がなく、ページの更新日を disclosed として記録。"
    },
    "牧之原市（まきのはらTeaメール）": {
      officialUrl: "https://www.city.makinohara.shizuoka.jp/soshiki/4/63180.html",
      events: [
        E("disclosed", "2026-10-22", "更新日：2026年10月22日更新", "@")
      ],
      causes: ["vendor"], causeText: "管理会社において、不正アクセスが確認されました",
      certainty: "possible",
      dataNote: "disclosedはページの更新日（ページ上の唯一の日付）。本文は「管理会社」とのみ記載（アルカディアのお知らせへリンク）。10月22日に登録者へ架空請求メールが届いた事案の記載あり。"
    },
    "富山県（とやま出会い応援ポータル）": {
      officialUrl: "https://www.pref.toyama.jp/101721/20261022press.html",
      events: [
        E("disclosed", "2026-10-22", "発表日 2026年10月22日（木曜日）", "@")
      ],
      causes: ["vendor"], causeText: "外部の第三者による不正アクセスが行われ、個人情報が漏洩した可能性があります",
      certainty: "possible"
    },
    "2027年国際園芸博覧会協会（GREEN×EXPO 2027 ボランティア）": {
      officialUrl: "https://expo2027yokohama.or.jp/assets/docs/news/3a26bed2389e543c368d5e74a069eaf1b7ff0369.pdf",
      events: [
        E("disclosed", "2026-10-22", "2026年10月22日", "@")
      ],
      causes: ["vendor"], causeText: "不正アクセス及び情報の持ち出しが確認されたとの報告",
      certainty: "possible",
      dataNote: "ボランティア登録者が漏えい対象かは未確認としている。神奈川県も同件を記者発表しているが県保有情報ではないとしている。"
    },
    "名取市（なとりコイン・アンケート回答者向けメール配信）": {
      officialUrl: "https://www.city.natori.miyagi.jp/uploaded/attachment/26494.pdf",
      events: [
        E("vendor_notified", "2026-10-21", "令和 8 年 10 月 21 日、システム提供元から…報告を受けました", "@"),
        E("disclosed", "2026-10-22", "令和 8 年 10 月 22 日", "@")
      ],
      causes: ["vendor"], causeText: "同社システムのクラウド環境への不正アクセスにより",
      certainty: "possible",
      dataNote: "HTML版: https://www.city.natori.miyagi.jp/page/46938.html 。第2報あり。"
    },
    "鹿児島市（子育て情報配信メール「すくすくメール」）": {
      officialUrl: "https://www.city.kagoshima.lg.jp/soumu/soumu/soumu/documents/roueikouhyou31_1.pdf",
      events: [
        E("vendor_notified", "2026-10-22", "令和８年１０月２２日（木）１４時３７分…委託先（渕上印刷株式会社）を通じて", "@"),
        E("disclosed", "2026-10-22", "【公表年月日】： 令和８年１０月２２日", "@")
      ],
      causes: ["vendor"], causeText: "システム運営会社に第三者による不正アクセスが行われたもの",
      certainty: "possible",
      dataNote: "公表資料にサービス名「ブラストメール」の記載はなく運営会社名のみ。お知らせページ: https://www.city.kagoshima.lg.jp/ribonkan/sukusuku.html"
    },
    "紀宝町（移住定住サポートデスク）": {
      officialUrl: "https://www.town.kiho.lg.jp/news/54025/", listedDate: "2026-10-22",
      events: [
        E("update", "2026-10-22", "更新日付：2026年10月22日", "@")
      ],
      causes: ["vendor"], causeText: "外部の第三者が同社のAPI用サーバー2台に侵入してコマンドを実行し",
      certainty: "possible",
      dataNote: "公式ページに初回掲載日の記載がないため disclosed は未記録。"
    },
    "ギフティ（旅先納税ID・giftee Benefitほか）": {
      officialUrl: "https://giftee.co.jp/press/news/info20261026/",
      events: [
        E("disclosed", "2026-10-22", "【2026年10 月22日（木）公開】", "@"),
        E("update", "2026-10-23", "【2026年10 月23日（ 金）公開】", "@"),
        E("update", "2026-10-26", "2026年10月26日（月）追記", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生し",
      certainty: "possible",
      dataNote: "第1報URL(info20261022)は現在404のため第3報ページ（第1報本文を含む）を採用。288件・344件に同社契約は含まれないとしている。"
    },
    "京都府・京都市（WMG2027関西 京都エリアボランティア）": {
      officialUrl: "https://www.pref.kyoto.jp/press/documents/2026102211.pdf",
      events: [
        E("disclosed", "2026-10-22", "令和 8 年 10 月 22 日", "@")
      ],
      causes: ["vendor"], causeText: "外部の第三者から不正アクセスされ",
      certainty: "possible",
      dataNote: "府・市の実行委員会による同時資料配付。京都市版: https://www.city.kyoto.lg.jp/bunshi/page/0000359579.html"
    },
    "和歌山県（わかやま移住PRマガジン）": {
      officialUrl: "https://www.pref.wakayama.lg.jp/chiji/press/08/d00223176_d/fil/1021_2.pdf",
      events: [
        E("vendor_notified", "2026-10-22", "10/22 9:15頃 委託事業者より、県あて…報告あり", "@"),
        E("disclosed", "2026-10-22", "令和８年１０月２２日", "@")
      ],
      causes: ["vendor"], causeText: "第三者の不正アクセス",
      certainty: "possible"
    },
    "周南市（周南市ファンクラブメールマガジン）": {
      officialUrl: "https://www.city.shunan.lg.jp/soshiki/101/153883.html", listedDate: "2026-10-22",
      events: [
        E("update", "2026-10-22", "更新日：2026年10月22日更新", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスを受け、個人情報が漏洩しました",
      certainty: "possible",
      dataNote: "本文冒頭は「漏洩しました」、登録情報の項は「漏洩の可能性が疑われる」と記載。公式ページに初回掲載日の記載がないため disclosed は未記録。"
    },
    "埼玉県（保育士応援ポータル「埼玉保育ナビ」）": {
      officialUrl: "https://www.pref.saitama.lg.jp/b0616/news/page/news2026102202.html",
      events: [
        E("vendor_notified", "2026-10-21", "令和8年10月21日（水曜日）、埼玉県社会福祉協議会から", "@"),
        E("disclosed", "2026-10-22", "発表日：2026年10月22日16時", "@")
      ],
      causes: ["vendor"], causeText: "株式会社ラクスライトクラウドのサーバーに不正アクセスがあり",
      certainty: "possible",
      dataNote: "公表文にサービス名の記載はなく運営会社名のみ。"
    },
    "仙台こども財団": {
      officialUrl: "https://sendai-kodomo.jp/news/detail---id-453.html",
      events: [
        E("vendor_notified", "2026-10-21", "2026年10月21日（水）、ブラストメールの運営会社から", "@"),
        E("disclosed", "2026-10-22", "2026.10.22", "@")
      ],
      causes: ["vendor"], causeText: "外部の第三者による不正アクセスが発生し",
      certainty: "possible"
    },
    "クラシコム（北欧、暮らしの道具店）": {
      officialUrl: "https://hokuohkurashi.com/note/1000001058",
      events: [
        E("vendor_notified", "2026-10-22", "本日10月22日、ブラストメールの運営会社より続報で…外部に漏えいしたとの報告", "@"),
        E("disclosed", "2026-10-22", "同日19時07分：…公表（本お知らせ）", "@"),
        E("update", "2026-10-29", "【2026年10/29 17:45  追記】", "@")
      ],
      causes: ["vendor"], causeText: "ブラストメール」で不審なアクセスが検知され",
      certainty: "confirmed",
      dataNote: "10月21日にメルマガ一時停止のお知らせ（https://kurashi.com/news/16903 ほか）あり。"
    },
    "茨城県（移住に係るメールマガジン）": {
      officialUrl: "https://iju-ibaraki.jp/information/news/35001.html",
      events: [
        E("disclosed", "2026-10-22", "2026.10.22", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスを受け",
      certainty: "possible"
    },
    "医書ジェーピー（メールニュース）": {
      officialUrl: "https://isho.jp/maintenance/news.html",
      events: [
        E("disclosed", "2026-10-22", "2026年10月22日（第一報）", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスがあり",
      certainty: "possible"
    },
    "マヒトデザイン（メールマガジン）": {
      officialUrl: "https://mhtdesign.net/news/20261022",
      events: [
        E("disclosed", "2026-10-22", "※以下は、2026年10月22日にお知らせした内容です。", "@"),
        E("update", "2026-10-30", "【2026年10月30日 9時15分更新】", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスがあり",
      certainty: "possible",
      dataNote: "10月30日時点で流出は確認されていないとしている。"
    },
    "テクノル（MR-EPメールニュース）": {
      officialUrl: "https://mrb-security.jp/outline/newslist/mr-epweb202610220956",
      events: [
        E("disclosed", "2026-10-22", "投稿日 : 2026.10.22", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセ",
      certainty: "possible",
      dataNote: "社名はページのコピーライト表記（株式会社テクノル）による。"
    },
    "サンライズプロモーション（メールマガジン）": {
      officialUrl: "https://sunrisetokyo.com/news/37741/",
      events: [
        E("disclosed", "2026-10-22", "2026/10/22", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生いたしました",
      certainty: "possible"
    },
    "UDS（コーポレートニュースレター）": {
      officialUrl: "https://uds-net.co.jp/news/blastmail-1/",
      events: [
        E("vendor_notified", "2026-10-21", "10月21日(水)…株式会社ラクスライトクラウドより", "@"),
        E("disclosed", "2026-10-22", "2026.10.22", "@")
      ],
      causes: ["vendor"], causeText: "同社システムに対する不審なアクセスを検知し",
      certainty: "possible",
      dataNote: "自社アカウントの個人情報漏えいの報告は受けていないとしている。"
    },
    "BICSI日本支部（メールマガジン）": {
      officialUrl: "https://www.bicsi.jp/news/20261022",
      events: [
        E("disclosed", "2026-10-22", "2026.10.22", "@"),
        E("update", "2026-10-27", "【2026.10.27追記】", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生し",
      certainty: "possible",
      dataNote: "10月27日追記で現時点では漏えい対象に含まれていないとしている。"
    },
    "延岡市（商工観光文化部メール配信）": {
      officialUrl: "https://www.city.nobeoka.miyazaki.jp/soshiki/43/52675.html", listedDate: "2026-10-22",
      events: [
        E("update", "2026-10-22", "更新日：2026年10月22日更新", "@")
      ],
      causes: ["vendor"], causeText: "第三者よる不正アクセスを受けた",
      certainty: "possible",
      dataNote: "公式ページに初回掲載日の記載がないため disclosed は未記録。"
    },
    "コグニビジョン（コグニソフト部品情報配信）": {
      officialUrl: "https://www.cognivision.jp/news/2026/post_284/",
      events: [
        E("disclosed", "2026-10-22", "2026/10/22", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生し",
      certainty: "possible"
    },
    "えちごトキめき鉄道": {
      officialUrl: "https://www.echigo-tokimeki.co.jp/information/detail?id=2673",
      events: [
        E("vendor_notified", "2026-10-21", "2026年10月21日（水）、ブラストメールの運営会社から", "@"),
        E("disclosed", "2026-10-22", "2026-10-22", "@")
      ],
      causes: ["vendor"], causeText: "外部の第三者による不正アクセスが発生し",
      certainty: "possible"
    },
    "鹿児島市スポーツ振興協会（かごスポ）": {
      officialUrl: "https://www.kago-spo.or.jp/important/29890/",
      events: [
        E("disclosed", "2026-10-22", "2026年10月22日", "@")
      ],
      causes: ["vendor"], causeText: "外部の第三者による不正アクセスが発生し",
      certainty: "possible"
    },
    "ナレッジリーン（エコ・プラネットメーリングマガジン）": {
      officialUrl: "https://www.kmri.co.jp/column/news/blastmail-security-notice",
      events: [
        E("disclosed", "2026-10-22", "2026.10.22", "@"),
        E("update", "2026-10-29", "【第２報】2026年10月29日現在", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスを受け",
      certainty: "possible",
      dataNote: "第2報時点で個別連絡は受けていないとしている。"
    },
    "ラプラス・システム（メールマガジン・障害通知）": {
      officialUrl: "https://www.lapsys.co.jp/topics/2026/10/post-379.html",
      events: [
        E("disclosed", "2026-10-22", "2026/10/22", "@"),
        E("update", "2026-10-26", "※※2026/10/26 10:00更新※※", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生いたしました",
      certainty: "possible",
      dataNote: "10月26日更新で漏えいは確認されていないとしている。"
    },
    "私のアクション！未来のNAGANO創造県民会議": {
      officialUrl: "https://www.nagano-action.jp/topics/710/",
      events: [
        E("disclosed", "2026-10-22", "2026.10.22", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスを受け",
      certainty: "possible"
    },
    "日本経営協会（事業情報配信）": {
      officialUrl: "https://www.noma.or.jp/news/detail.html?dispmid=528&itemid=103",
      events: [
        E("disclosed", "2026-10-22", "2026年10月22日", "@")
      ],
      causes: ["vendor"], causeText: "不正アクセスを受け、個人情報が漏洩した可能性",
      certainty: "possible"
    },
    "デイトナ（DIOS取引先・出展社向けメール）": {
      officialUrl: "https://www.release.tdnet.info/inbs/140120261022554714.pdf",
      events: [
        E("disclosed", "2026-10-22", "2026 年 10 月 22 日", "@")
      ],
      causes: ["vendor"], causeText: "メール配信サービスへの不正アクセス",
      certainty: "possible",
      dataNote: "登録情報の漏洩は確認されていないとしている。"
    },
    "大阪中小企業投資育成（メールマガジン）": {
      officialUrl: "https://www.sbic-wj.co.jp/news/2026/26557/",
      events: [
        E("disclosed", "2026-10-22", "2026.10.22", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスを受けた",
      certainty: "possible",
      dataNote: "登録者の個人情報漏洩の連絡は受けていないとしている。"
    },
    "ときわ総合サービス（メールマガジン）": {
      officialUrl: "https://www.tokiwa-ss.co.jp/journal/news/post-77.html",
      events: [
        E("vendor_notified", "2026-10-21", "2026年10月21日、ラクスライトクラウド社から", "@"),
        E("disclosed", "2026-10-22", "26.10.22", "@")
      ],
      causes: ["vendor"], causeText: "同社システムのクラウド環境への不正アクセスにより",
      certainty: "possible"
    },
    "岡山県（天神山文化プラザ）": {
      officialUrl: "https://www.pref.okayama.jp/site/presssystem/1062550.html",
      events: [
        E("vendor_notified", "2026-10-16", "令和８年１０月１６日（金）、…指定管理者…から県に対し…報告", "https://www.pref.okayama.jp/uploaded/life/1062550_10298808_misc.pdf"),
        E("disclosed", "2026-10-22", "2026年10月22日更新／文化振興課", "@")
      ],
      causes: ["vendor"], causeText: "Studio株式会社（東京都）のクラウド環境において、第三者による不正アクセスが発生した",
      certainty: "possible",
      dataNote: "氏名、メールアドレス、電話番号、問い合わせ内容等。添付PDFの日付も令和8年10月22日。"
    },
    "広島県（スポーツ能力発見会）": {
      officialUrl: "https://www.pref.hiroshima.lg.jp/uploaded/attachment/686793.pdf",
      events: [
        E("incident", "2026-09-30", "9 月 30 日(水)～10 月１日(木) 【事案発生】", "@"),
        E("vendor_notified", "2026-10-21", "10 月 21 日(水)17:30 …受託者から広島県（当課）に対し…報告", "@"),
        E("disclosed", "2026-10-22", "資料提供 令和８年 10 月 22 日", "@")
      ],
      causes: ["vendor"], causeText: "同サービスの一部機能の脆弱性を悪用した不正アク セスが発生",
      certainty: "possible",
      dataNote: "県事業分は2件。受託者HP全体で流出の可能性がある件数は59件。"
    },
    "田村市（地域おこし協力隊・お試し移住ほか）": {
      officialUrl: "https://www.city.tamura.lg.jp/soshiki/2/assets/10%E6%9C%8822%E6%97%A5%E3%80%80%E5%8F%97%E8%A8%97%E4%BA%8B%E6%A5%AD%E8%80%85%E3%81%8C%E5%88%A9%E7%94%A8%E3%81%97%E3%81%9F%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%81%B8%E3%81%AE%E4%B8%8D%E6%AD%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%AB%E4%BC%B4%E3%81%86%E5%80%8B%E4%BA%BA%E6%83%85%E5%A0%B1%E6%BC%8F%E3%81%88%E3%81%84%E3%81%AE%E5%8F%AF%E8%83%BD%E6%80%A7%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6.pdf",
      events: [
        E("vendor_notified", null, "受託事業者からの報告を受けた日：令和８年 10 月 19 日、20 日", "@"),
        E("disclosed", "2026-10-22", "2026 年 10 月 22 日", "@")
      ],
      causes: ["vendor"], causeText: "ウェブサイト作成サービス「Studio」に不正アクセスがあり",
      certainty: "possible",
      dataNote: "報告受領日は10月19日と20日の2日に分かれるため、vendor_notifiedの日付はnull。項目は氏名、住所、メールアドレス、電話番号、問合せ内容。"
    },
    "スカイディスク（採用ページ）": {
      officialUrl: "https://skydisc.jp/information/4968/",
      events: [
        E("incident", "2026-09-30", "2026年9月30日〜10月1日に同社サービスの脆弱性を悪用した不正アクセス", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日、当社が採用ページで利用しているWebサイト制作サービス", "@"),
        E("disclosed", "2026-10-22", "2026.10.22", "@")
      ],
      causes: ["vendor"], causeText: "同社サービスの脆弱性を悪用した不正アクセス",
      certainty: "possible"
    },
    "RECEPTIONIST（旧コーポレートサイト）": {
      officialUrl: "https://receptionist.co.jp/news/20261022-notice",
      events: [
        E("incident", "2026-09-30", "不正アクセスの期間は2026年9月30日から10月1日（日本時間）", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日、Studio株式会社より", "@"),
        E("disclosed", "2026-10-22", "2026.10.22", "@")
      ],
      causes: ["vendor"], causeText: "第三者が同社サービスの一部機能の脆弱性を悪用して不正にアクセス",
      certainty: "possible"
    },
    "ユウクリ（e-Create Space）": {
      officialUrl: "https://www.y-create.co.jp/blog/recruitment/1990.html",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日の間、第三者が同社のクラウド環境に不正にアクセ", "@"),
        E("vendor_notified", "2026-10-16", "当社は2026年10月16日に同社から連絡を受け", "@"),
        E("disclosed", "2026-10-22", "2026年10月22日", "@")
      ],
      causes: ["vendor"], causeText: "ウェブサイト制作サービス「Studio」への第三者による不正アクセス",
      certainty: "possible"
    },
    "MCAT（コワーキングスペースarica）": {
      officialUrl: "https://www.mcat.co.jp/%E3%81%8A%E8%A9%AB%E3%81%B3%E3%81%A8%E3%81%94%E5%A0%B1%E5%91%8A%EF%BC%9Aweb%E3%82%B5%E3%82%A4%E3%83%88%E5%88%B6%E4%BD%9C%E3%83%84%E3%83%BC%E3%83%AB%E3%80%8Cstudio%E3%80%8D%E3%81%B8%E3%81%AE%E4%B8%8D/",
      events: [
        E("incident", "2026-09-30", "2026 年9月30日〜10月1日 ：第三者による不正アクセス（Studioが確", "@"),
        E("disclosed", "2026-10-22", "2026年10月22日", "@")
      ],
      causes: ["vendor"], causeText: "外部サービス「Studio」（運営：Studio株式会社）において、第三者による",
      certainty: "possible",
      dataNote: "個人会員515件はStudio上のデータを事前削除済みのため流出の可能性は極めて低いとし、流出の可能性を否定できないのは法人会員5件と記載。"
    },
    "イネサス（ウェルサポート）": {
      officialUrl: "https://www.ymfg.co.jp/files/51baf416c479188a7536d0d163cd6551f441d20d7e9db3f9a4d65aa77afceb7e",
      events: [
        E("vendor_notified", "2026-10-19", "２０２６年１０月１９日、…Ｌｅａｆｅａ社を通じて…報告を受けました", "@"),
        E("disclosed", "2026-10-22", "２０２６年１０月２２日", "@")
      ],
      causes: ["vendor"], causeText: "Ｓｔｕｄｉｏ社システムの脆弱性を悪用したクラウド環境への不正アクセス",
      certainty: "possible",
      dataNote: "山口フィナンシャルグループ・山口銀行・もみじ銀行・北九州銀行・イネサスの連名で公表。アプリ開発会社Leafea経由の連鎖。アプリと新規申込を一時停止。当社顧客情報が含まれるかは確認中。"
    },
    "稚内市（子ども安全育成センター不審者情報メール）": {
      officialUrl: "https://www.city.wakkanai.hokkaido.jp/kyoiku/seishonenikusei/ikuseikatsudo/haishinstop.html?u=1791972971",
      events: [
        E("disclosed", "2026-10-23", "更新日：2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: "委託事業者（株式会社アルカディア）が運営する配信サービスに不正アクセス",
      certainty: "possible",
      dataNote: "配信停止は令和８年10月14日から、10月23日再開。公表日の記載がなく、ページの更新日を disclosed として記録。"
    },
    "南魚沼市（防災メール）": {
      officialUrl: "https://www.city.minamiuonuma.niigata.jp/docs/86988.html",
      events: [
        E("vendor_notified", "2026-10-13", "10月13日(火曜日)、…株式会社アルカディアから情報提供がありました", "@"),
        E("disclosed", "2026-10-23", "掲載日:令和8年10月23日更新", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」が不正アクセスを受けたことに伴い",
      certainty: "possible",
      dataNote: "ページの日付は「令和8年10月23日更新」（配信再開）のみで、初報日は不明。"
    },
    "長浜市（防災コール）": {
      officialUrl: "https://www.city.nagahama.lg.jp/0000017317.html", listedDate: "2026-10-23",
      events: [
        E("update", "2026-10-23", "公開日：2026年10月23日（第2報）", "@")
      ],
      causes: ["vendor"], causeText: "サービス提供事業者である株式会社アルカディアにおいて、不正アクセスを受けた",
      certainty: "possible",
      dataNote: "第2報ページ（公開日10月23日）に第1報を併載。第1報の日付は表示なしのためdisclosedは記録せず。"
    },
    "紀の川市（メール配信サービス）": {
      officialUrl: "https://www.city.kinokawa.lg.jp/003/mailhaishin.html",
      events: [
        E("disclosed", "2026-10-23", "最終更新日:2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN（運営会社：株式会社アルカディア）」が不正アクセス",
      certainty: "possible",
      dataNote: "印字日付は最終更新日のみ（再開告知を追記後）。"
    },
    "田辺市（NET119緊急通報システム）": {
      officialUrl: "https://www.city.tanabe.lg.jp/kinkyu/7728.html",
      events: [
        E("disclosed", "2026-10-23", "更新日：2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社アルカディアにおいて、第三者による不正アクセスが発生",
      certainty: "possible",
      dataNote: "disclosedは更新日。SpeeCAN RAIDENと119RAIDENについては漏えいなしを確認済みと記載。"
    },
    "山梨日日新聞社（山日YBS企業ガイダンス）": {
      officialUrl: "https://www2.sannichi.co.jp/GUIDANCE/2028/info/cd/90001/seq/12",
      events: [
        E("vendor_notified", "2026-10-23", "株式会社ラクスライトクラウド（本社東京）から10月23日、個人情報漏えい事実の判", "@"),
        E("disclosed", "2026-10-23", "2026.10.23", "@")
      ],
      causes: ["vendor"], causeText: "メール配信サービスの委託会社に不正アクセスがあり",
      certainty: "confirmed",
      dataNote: "2027年卒向けサイト（GUIDANCE/2027）にも同文・同件数のお知らせが掲載されている。"
    },
    "富山県（Smart Lab TOYAMA）": {
      officialUrl: "https://www.pref.toyama.jp/130331/20261023sumarabo.html",
      events: [
        E("disclosed", "2026-10-23", "発表日 2026年10月23日（金曜日）", "@")
      ],
      causes: ["vendor"], causeText: "外部の第三者による不正アクセスが行われ、個人情報が漏洩した可能性があります",
      certainty: "possible"
    },
    "鹿児島市（鹿児島ふれあいスポーツランド）": {
      officialUrl: "https://www.city.kagoshima.lg.jp/soumu/soumu/soumu/documents/roueikouhyou32_1.pdf",
      events: [
        E("vendor_notified", "2026-10-23", "令和 8 年 10 月 23 日（金）11：00 指定管理者（南国殖産株式会社）", "@"),
        E("disclosed", "2026-10-23", "【公表年月日】：令和８年１０月２３日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが行われたもの",
      certainty: "possible",
      dataNote: "公表資料にサービス名の記載はなく運営会社名のみ。"
    },
    "日本赤十字社東京都支部（NT NEWS）": {
      officialUrl: "https://www.jrc.or.jp/chapter/tokyo/news/2026/1023_056631.html",
      events: [
        E("disclosed", "2026-10-23", "2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスを受け、登録情報が漏洩した可能性",
      certainty: "possible",
      dataNote: "登録者が対象かは調査中としている。"
    },
    "下関市（雇用対策事業）": {
      officialUrl: "https://www.city.shimonoseki.lg.jp/site/kisya/164876.html",
      events: [
        E("disclosed", "2026-10-23", "令和8年（2026年）10月 23日", "@")
      ],
      causes: ["vendor"], causeText: "外部の第三者による不正ア",
      certainty: "possible"
    },
    "下関市（インクルーシブ推進事業）": {
      officialUrl: "https://www.city.shimonoseki.lg.jp/site/kisya/140361.html", listedDate: "2026-10-23",
      events: [
        E("update", "2026-10-23", "更新日：2026年10月23日更新", "@")
      ],
      causes: ["vendor"], causeText: "外部の第三者による不正ア",
      certainty: "possible",
      dataNote: "公式ページに初回掲載日の記載がないため disclosed は未記録。"
    },
    "ホビージャパン（ホビージャパンウェブ）": {
      officialUrl: "https://hjweb.jp/news/2867395/",
      events: [
        E("vendor_notified", "2026-10-21", "2026年10月21日、ラクスライトクラウド社より…報告を受けました", "@"),
        E("disclosed", "2026-10-23", "2026.10.23", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生し",
      certainty: "possible"
    },
    "タミヤ（イベント案内メール）": {
      officialUrl: "https://www.tamiya.com/japan/newstopics/news_1982",
      events: [
        E("vendor_notified", "2026-10-21", "2026年10月21日、同社より…報告を受けました", "@"),
        E("disclosed", "2026-10-23", "2026年10月23日", "@"),
        E("update", "2026-10-26", "(10/26 18時追記)", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生し",
      certainty: "possible",
      dataNote: "10月26日の追記時点でタミヤは漏えい対象者に含まれていないとしている。"
    },
    "東邦ホールディングス（子会社eヘルスケア）": {
      officialUrl: "https://www2.jpx.co.jp/disc/81290/140120261023555469.pdf",
      events: [
        E("disclosed", "2026-10-23", "2026 年 10 月 23 日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生しました",
      certainty: "possible",
      dataNote: "288契約のリストにeヘルスケアのIDは含まれていないが漏洩なしは確定していないとしている。同文: https://www.tohohd.co.jp/news/files/261023.pdf"
    },
    "MAGUS（ARTnews JAPAN）": {
      officialUrl: "https://artnewsjapan.com/article/90648",
      events: [
        E("vendor_notified", "2026-10-21", "2026年10月21日…運営会社より…報告を受けました", "@"),
        E("leak_confirmed", "2026-10-23", "10月23日朝、当メディアのメールマガジン登録者のメールアドレスが漏えい", "@"),
        E("disclosed", "2026-10-23", "2026.10.23", "@")
      ],
      causes: ["vendor"], causeText: "外部の第三者がAPI用サーバーに侵入し",
      certainty: "confirmed"
    },
    "先端教育機構（出版部メールマガジン）": {
      officialUrl: "https://www.sentankyo.jp/articles/d7cb4acc-34ad-4698-a51e-b5d07a72718d",
      events: [
        E("vendor_notified", "2026-10-23", "当方配信リスト漏えいの連絡（10月23日）", "@"),
        E("disclosed", "2026-10-23", "2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社ラクスライトクラウドのシステムに対する、第三者による不正アクセスです。",
      certainty: "confirmed",
      dataNote: "事業構想オンラインにも同文掲載: https://www.projectdesign.jp/articles/news/df304f2c-22fc-4ae1-b40e-7a17d9e63959"
    },
    "名古屋銀行（企業型DC／損保ジャパンDC証券経由）": {
      officialUrl: "https://www.meigin.com/news/files/20261023_oshirase_2.pdf",
      events: [
        E("disclosed", "2026-10-23", "2026 年 10 月 23 日", "@")
      ],
      causes: ["vendor"], causeText: "同サービスに対する不正アクセスが発生したとの報告",
      certainty: "possible",
      dataNote: "現時点で漏えいは確認されていないとしている。損保ジャパンDC証券は別掲。"
    },
    "京都市・京都府（京の食文化ミュージアム・あじわい館）": {
      officialUrl: "https://www.city.kyoto.lg.jp/sankan/page/0000359632.html",
      events: [
        E("vendor_notified", "2026-10-22", "リーフより令和8年10月22日午後6時に、京都府及び京都市に連絡", "@"),
        E("disclosed", "2026-10-23", "発表日 令和8年10月23日", "@")
      ],
      causes: ["vendor"], causeText: "外部の第三者から不正アクセスされ",
      certainty: "possible"
    },
    "名古屋市（シティプロモーション推進事業 ブランドパートナー）": {
      officialUrl: "https://www.city.nagoya.jp/houdou/3003942/3003949/3006181.html",
      events: [
        E("disclosed", "2026-10-23", "報道発表日時：2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスを受け",
      certainty: "possible"
    },
    "名古屋市（イーブルなごや）": {
      officialUrl: "https://www.city.nagoya.jp/houdou/3003942/3003949/3006162.html",
      events: [
        E("disclosed", "2026-10-23", "報道発表日時：2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスを受け",
      certainty: "possible"
    },
    "大分県（健康アプリ「あるとっく」協力店）": {
      officialUrl: "https://www.pref.oita.jp/site/kenkozyumyo-nipponichi-oita/altokoita-kyoryokutenn2.html", listedDate: "2026-10-23",
      events: [
        E("update", "2026-10-23", "更新日：2026年10月23日更新", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスを受け",
      certainty: "possible",
      dataNote: "アプリ登録者の情報は漏えいしていないとしている。公式ページに初回掲載日の記載がないため disclosed は未記録。"
    },
    "大分県（おおいたボランティア・NPOセンター「メルマガ週イチくん」）": {
      officialUrl: "https://www.pref.oita.jp/soshiki/13110/onnpo20261023.html",
      events: [
        E("disclosed", "2026-10-23", "本日（令和８年１０月２３日）", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスを受けました",
      certainty: "possible"
    },
    "宇都宮市（市民応援団「teamNEXT」）": {
      officialUrl: "https://www.city.utsunomiya.lg.jp/kurashi/kotsu/lrt/1028857/1050022.html", listedDate: "2026-10-23",
      events: [
        E("update", "2026-10-23", "更新日 令和8年10月23日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスを受け",
      certainty: "possible",
      dataNote: "公式ページに初回掲載日の記載がないため disclosed は未記録。"
    },
    "福岡県（福岡キャリア・カフェ）": {
      officialUrl: "https://www.pref.fukuoka.lg.jp/contents/careercafe-attention.html", listedDate: "2026-10-23",
      events: [
        E("vendor_notified", "2026-10-22", "令和8年10月22日（木曜日）、株式会社オフィスatから", "@"),
        E("update", "2026-10-23", "更新日：2026年10月23日更新", "@")
      ],
      causes: ["vendor"], causeText: "株式会社ラクスライトクラウドのサーバーに不正アクセスがあり",
      certainty: "possible",
      dataNote: "公表文にサービス名の記載はなく運営会社名のみ。公式ページに初回掲載日の記載がないため disclosed は未記録。"
    },
    "埼玉県（ねんりんピック彩の国さいたま2026ボランティア）": {
      officialUrl: "https://www.pref.saitama.lg.jp/b0617/nenrin-saitama2026/1022hodohappyo.html",
      events: [
        E("vendor_notified", "2026-10-22", "令和8 年10 月22 日（木曜日）、受託事業者から", "@"),
        E("disclosed", "2026-10-23", "発表日：2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: "株式会社ラクスライトクラウドのサーバーに不正アクセスがあり",
      certainty: "possible"
    },
    "国立環境研究所（NIESメールマガジンほか）": {
      officialUrl: "https://www.nies.go.jp/pr/news-and-updates/2026/20261023.html",
      events: [
        E("disclosed", "2026-10-23", "2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: "第三者からの不正アクセスが発生し",
      certainty: "possible",
      dataNote: "現時点で漏えいは確認されていないとしている。"
    },
    "SHIFT（福利厚生サービス「まん福」）": {
      officialUrl: "https://www.shiftinc.jp/news/20261023/",
      events: [
        E("vendor_notified", "2026-10-22", "2026年10月22日：…当社のメール配信担当者の情報が漏洩したことについての報", "@"),
        E("vendor_notified", "2026-10-23", "2026年10月23日：同社より…「配信先リスト」の情報についても漏洩", "@"),
        E("disclosed", "2026-10-23", "2026/10/23", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生したと",
      certainty: "confirmed",
      dataNote: "実際に漏洩した範囲・正確な件数は調査中としている。"
    },
    "鹿児島音楽文化協会（鹿児島音協メルマガ）": {
      officialUrl: "https://kagoshima-onkyo.rgr.jp/topinfo/attention202610/",
      events: [
        E("disclosed", "2026-10-23", "2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが行われ",
      dataNote: "自会の会員が対象かは明記なし。"
    },
    "サンフェア（メールニュース）": {
      officialUrl: "https://sunfair.jp/info/1953/",
      events: [
        E("disclosed", "2026-10-23", "2026.10.23", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスがあり",
      certainty: "possible"
    },
    "ブロードリーフ（ものづくりドットコム）": {
      officialUrl: "https://www.broadleaf.co.jp/company/news/news_detail/?dispmid=1001&itemid=371",
      events: [
        E("disclosed", "2026-10-23", "2026年10月23日（金）15時", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが行われ",
      certainty: "confirmed",
      dataNote: "リストの項目・対象者は確認中としている。"
    },
    "セルズ（メールマガジン等配信先）": {
      officialUrl: "https://www.cells.co.jp/news/115953",
      events: [
        E("disclosed", "2026-10-23", "2026年10月23日", "@"),
        E("update", "2026-10-26", "【2026年10月26日11時00分追記】", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生し",
      certainty: "possible",
      dataNote: "10月26日追記で現時点では漏えい対象に含まれていないとしている。"
    },
    "湯沢市（緊急・防災メール）": {
      officialUrl: "https://www.city-yuzawa.jp/soshiki/8/6580.html", listedDate: "2026-10-23",
      events: [
        E("update", "2026-10-23", "更新日：2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: "システムに対する不審なアクセスを検知",
      certainty: "confirmed",
      dataNote: "漏洩確認は契約者情報（市担当者名・電話番号・メールアドレス）。配信者の情報漏えいは確認されていないとしている。公式ページに初回掲載日の記載がないため disclosed は未記録。"
    },
    "経済同友会": {
      officialUrl: "https://www.doyukai.or.jp/newsrelease/2026/261023.html",
      events: [
        E("vendor_notified", "2026-10-22", "10月22日午後に同社から連絡を受け", "@"),
        E("disclosed", "2026-10-23", "2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生し",
      certainty: "possible"
    },
    "ECOMMIT（法人向け案内メール）": {
      officialUrl: "https://www.ecommit.jp/news/j3gta0dzcs/",
      events: [
        E("vendor_notified", "2026-10-21", "当社は、2026年10月21日に同社から本件の報告を受けました。", "@"),
        E("disclosed", "2026-10-23", "2026.10.23", "@")
      ],
      causes: ["vendor"], causeText: "外部の第三者が同社のAPI用サーバー2台に侵入してコマンドを実行し",
      certainty: "possible",
      dataNote: "288件の個別連絡対象には含まれていないとしている。"
    },
    "ファブリカコミュニケーションズ（BP事業部 業務管理システム配信先）": {
      officialUrl: "https://www.fabrica-com.co.jp/news/press/5215/",
      events: [
        E("vendor_notified", "2026-10-23", "2026年10月23日　同社より…メール配信先リストの全件が漏えいしたとの個別報", "@"),
        E("disclosed", "2026-10-23", "2026年10月23日にお知らせいたしました", "@"),
        E("update", "2026-10-27", "2026/10/27", "@")
      ],
      causes: ["vendor"], causeText: "メール配信委託先への不正アクセスに伴う情報漏えい",
      certainty: "confirmed",
      dataNote: "第1報（10月23日）のURLは未確認のため第2報URLを採用。第1報時点の件数は最大2,816件。"
    },
    "フロールエバー（Florever News）": {
      officialUrl: "https://www.florever.co.jp/news/2026/10/18569/",
      events: [
        E("disclosed", "2026-10-23", "2026/10/23", "@"),
        E("update", "2026-10-27", "【2026年10月27日更新】", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生しました",
      certainty: "possible",
      dataNote: "10月27日更新で内部調査では漏えい未確認としている。"
    },
    "株式会社人事部（メールマガジン）": {
      officialUrl: "https://www.jinjibu-inc.co.jp/notice/1347/",
      events: [
        E("disclosed", "2026-10-23", "2026年10月23日(金)", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生し",
      certainty: "confirmed",
      dataNote: "漏えい確認は契約に関する情報。配信先情報（会社名・氏名・メールアドレス等）は漏えい有無を確認中。"
    },
    "日本語教育振興協会": {
      officialUrl: "https://www.nisshinkyo.org/news/detail.php?f=news&id=3566",
      events: [
        E("disclosed", "2026-10-23", "令和8年10月23日掲載", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生しました",
      certainty: "confirmed",
      dataNote: "配信先情報の漏えい有無は確認されていないとしている。"
    },
    "日本消防協会（メールマガジン）": {
      officialUrl: "https://www.nissho.or.jp/info/news20261023.html",
      events: [
        E("disclosed", "2026-10-23", "2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: "情報漏えいが発生した可能性があることを確認",
      certainty: "possible"
    },
    "オカムラ（スマートロジテック メールマガジン）": {
      officialUrl: "https://www.okamura.co.jp/corporate/info/2026/20261023.html",
      events: [
        E("disclosed", "2026-10-23", "2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスによる情報漏えい事案が発生",
      certainty: "possible"
    },
    "アップリンク（UPLINK メールマガジン）": {
      officialUrl: "https://www.uplink.co.jp/news/2026/55017", listedDate: "2026-10-23",
      events: [
        E("update", "2026-10-23", "2026年10月23日 更新", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生し",
      certainty: "possible",
      dataNote: "個別連絡は受けていないとしている。公式ページに初回掲載日の記載がないため disclosed は未記録。"
    },
    "WEBX（side bizz）": {
      officialUrl: "https://www.web-x.co.jp/news/unauthorized-access/",
      events: [
        E("vendor_notified", "2026-10-23", "メール送付先リストが外部に漏洩したとの報告を2026年10月23日に受領", "@"),
        E("disclosed", "2026-10-23", "2026.10.23", "@")
      ],
      causes: ["vendor"], causeText: "第三者からの不正アクセスが発生いたしました",
      certainty: "confirmed"
    },
    "Be ACTO亀戸（会員・登録者向けメール）": {
      officialUrl: "https://be-acto-kameido.net/event/16276",
      events: [
        E("disclosed", "2026-10-23", "2026/10/23", "@")
      ],
      causes: ["vendor"], causeText: "外部の第三者がサービス提供会社のサーバーに不正アクセス",
      certainty: "possible"
    },
    "郡山市（鯉に恋する郡山プロジェクトほか委託3事業）": {
      officialUrl: "https://www.city.koriyama.lg.jp/uploaded/attachment/132275.pdf",
      events: [
        E("vendor_notified", "2026-10-16", "同日 Studio 株式会社及び各委託事業者から市に対し、不正アクセスの報告", "@"),
        E("disclosed", "2026-10-23", "2026 年 10 月 23 日", "@")
      ],
      causes: ["vendor"], causeText: "クラウドサービス「Studio」…が、第三者による不正アクセスを受け",
      certainty: "possible",
      dataNote: "合計の記載なし。nは最大の単一件数（55件）。"
    },
    "モニクルリサーチ（旧サイト／Studio経由）": {
      officialUrl: "https://monicleresearch.co.jp/news/20261023",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日までにかけて", "@"),
        E("vendor_notified", "2026-10-16", "2026年10月16日、同社から当社の旧サイトが本件の対象である旨の連絡", "@"),
        E("disclosed", "2026-10-23", "2026.10.23", "@")
      ],
      causes: ["vendor"], causeText: "第三者が同社サービスの脆弱性を悪用して同社のクラウド環境に不正にアクセス",
      certainty: "possible"
    },
    "モニクルフィナンシャル（旧サイト／Studio経由）": {
      officialUrl: "https://moniclefinancial.co.jp/news/20261023",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日までにかけて", "@"),
        E("disclosed", "2026-10-23", "2026.10.23", "@")
      ],
      causes: ["vendor"], causeText: "第三者が同社サービスの脆弱性を悪用して同社のクラウド環境に不正にアクセス",
      certainty: "possible",
      dataNote: "旧サイトのフォーム送信内容がStudio上に保存されていたことを確認し、対象となるかStudio社に確認中（確定的な回答なし）としている。"
    },
    "モニクル（旧サイト／Studio経由）": {
      officialUrl: "https://monicle.co.jp/news/mo/20261023",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日までにかけて", "@"),
        E("disclosed", "2026-10-23", "2026.10.23", "@")
      ],
      causes: ["vendor"], causeText: "第三者が同社サービスの脆弱性を悪用して同社のクラウド環境に不正にアクセス",
      certainty: "possible",
      dataNote: "旧サイトのフォーム送信内容がStudio上に保存されていたことを確認し、対象となるかStudio社に確認中（確定的な回答なし）としている。"
    },
    "Mizkan（Mizkan Asia Pacificサイト／Studio経由）": {
      officialUrl: "https://www.mizkan.co.jp/file.jsp?id=2021_Renewal%2Ffiles%2Fpdf%2Femg%2Fnews%2Foshirase15.pdf",
      events: [
        E("incident", "2026-09-30", "2026 年 9 月 30 日（水）から 10 月 1 日（木）にかけて", "@"),
        E("vendor_notified", "2026-10-16", "2026 年 10 月 16 日（金） 、Studio 社より", "@"),
        E("disclosed", "2026-10-23", "2026 年 10 月 23 日", "@")
      ],
      causes: ["vendor"], causeText: "同社サービスの一部機能の脆弱性を悪用した第三者による不正アクセス",
      certainty: "possible"
    },
    "渋谷ボッチャ協会": {
      officialUrl: "https://note.com/dandy_dove8780/n/n25c4e2e952ed",
      events: [
        E("incident", "2026-09-30", "2026年9月30日～10月1日…第三者による不正アクセス", "@"),
        E("disclosed", "2026-10-23", "2026年10月23日", "@")
      ],
      causes: ["vendor"], causeText: "第三者がStudio社の一部機能の脆弱性を悪用してクラウド環境に不正アクセス",
      certainty: "possible",
      dataNote: "公式noteでの公表。具体的な影響範囲はStudio社へ個別調査を依頼中としている。"
    },
    "ボートレースまるがめ（Bカード会員メールマガジン）": {
      officialUrl: "https://www.marugameboat.jp/asp/marugame/00info/info.php?type=4", listedDate: "2026-10-25",
      events: [
        E("vendor_notified", "2026-10-21", "報告を受けました(令和8年10月21日)", "@"),
        E("update", "2026-10-25", "(令和8年10月25日)", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスを受け、個人情報…が漏洩した可能性",
      certainty: "possible",
      dataNote: "お知らせ一覧の表示日は2026/10/25（追加情報の日付）。10月25日時点で漏洩は確認されていないとしている。公式ページに初回掲載日の記載がないため disclosed は未記録。"
    },
    "eJudo（eJudo会員ニュースレター）": {
      officialUrl: "https://ejudo.info/articles/34272",
      events: [
        E("disclosed", "2026-10-25", "公開:2026.10.25", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生し",
      certainty: "confirmed"
    },
    "TOAST（海外大学進学サポート）": {
      officialUrl: "https://note.com/toast_edu/n/n39aa811b9dba",
      events: [
        E("incident", "2026-09-30", "2026年9月30日～10月1日の間、Studioの一部機能の脆弱性を悪用して", "@"),
        E("disclosed", "2026-10-25", "2026年10月25日 11:11", "@")
      ],
      causes: ["vendor"], causeText: "Studioの一部機能の脆弱性を悪用して第三者がStudio社のクラウド環境に不",
      certainty: "possible",
      dataNote: "発表はnote上の団体公式アカウント。"
    },
    "ログラス（Loglass障害告知メール）": {
      officialUrl: "https://loglass.co.jp/news/press-20261023", listedDate: "2026-10-26",
      events: [
        E("update", "2026-10-26", "2026年10月26日 14:30更新", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスを受け",
      certainty: "possible",
      dataNote: "URLは2026年10月23日付。ページ上の初回掲載日の表記が判読できないため disclosed は未記録。"
    },
    "中部電力・中電クラビス（みんなの美尻フェスタin掛川メルマガ）": {
      officialUrl: "https://www.chuden.co.jp/publicity/press/1218551_3273.html",
      events: [
        E("vendor_notified", "2026-10-21", "2026年10月21日、中電クラビスの再委託先より", "@"),
        E("disclosed", "2026-10-26", "2026年10月26日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスを受け",
      certainty: "possible",
      dataNote: "中部電力の別件（1218169）は既掲載。同日中電クラビスが一部訂正を公表。"
    },
    "南城市（尚巴志ハーフマラソン ランナーアンケート配信）": {
      officialUrl: "https://www.city.nanjo.okinawa.jp/topics/1792646187/", listedDate: "2026-10-26",
      events: [
        E("update", "2026-10-26", "最終更新日：2026年10月26日", "@")
      ],
      causes: ["vendor"], causeText: "不正アクセスによる情報漏洩の可能性",
      certainty: "possible",
      dataNote: "第2報・第3報で、漏洩判明対象にランナーのメールアドレスは該当していないとしている。公式ページに初回掲載日の記載がないため disclosed は未記録。"
    },
    "日本カノマックス（メールマガジン）": {
      officialUrl: "https://www.kanomax.co.jp/wordp/wp-content/uploads/2026/10/107d845671c2483803cd866f1d0f7e87.pdf",
      events: [
        E("vendor_notified", "2026-10-24", "2026 年 10 月 24 日、…株式会社ラクスライトクラウドから…個別通知を", "@"),
        E("disclosed", "2026-10-26", "2026 年 10 月 26 日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生し",
      certainty: "confirmed",
      dataNote: "お知らせページ: https://www.kanomax.co.jp/info/news/14942/ （2026年10月27日掲載）"
    },
    "Polimill（QommonsAI お知らせ配信）": {
      officialUrl: "https://www.polimill.jp/261026-3/",
      events: [
        E("disclosed", "2026-10-26", "2026.10.26", "@")
      ],
      causes: ["vendor"], causeText: "不正アクセスが発生し",
      certainty: "possible",
      dataNote: "個別連絡は受けていないとしている。"
    },
    "せんだい男女共同参画財団（メール de えるなびっ）": {
      officialUrl: "https://www.sendai-l.jp/information/19786.html", listedDate: "2026-10-26",
      events: [
        E("update", "2026-10-26", "（2026年10月26日16時00分更新）", "@")
      ],
      causes: ["vendor"], causeText: "外部の第三者による不正アクセスが発生し",
      certainty: "possible",
      dataNote: "10月26日時点で漏えい対象者に含まれていないとしている。公式ページに初回掲載日の記載がないため disclosed は未記録。"
    },
    "サイボウズ（各種お知らせ配信）": {
      officialUrl: "https://topics.cybozu.co.jp/news/2026/10/26-19556.html",
      events: [
        E("vendor_notified", "2026-10-20", "当社は対象外であることの回答を受けました", "@"),
        E("vendor_notified", "2026-10-26", "2026年10月26日（月）13:15、ユミルリンク株式会社より", "@"),
        E("leak_possible", "2026-10-26", "一部のメールアドレス等が漏えいした可能性が高いとの連絡を受けました", "@"),
        E("disclosed", "2026-10-26", "2026.10.26", "@"),
        E("leak_confirmed", "2026-10-28", "23,392件のメールアドレス等が漏えいしたとの報告を受けました", "https://topics.cybozu.co.jp/news/2026/10/28-19557.html"),
        E("update", "2026-10-28", "（第二報）2026.10.28", "https://topics.cybozu.co.jp/news/2026/10/28-19557.html")
      ],
      causes: ["vendor"], causeText: "「Cuenote FC」において不正アクセスが発生し",
      certainty: "confirmed",
      dataNote: "第一報（10/26）は「可能性が高い」、第二報（10/28）で23,392件の漏えいを報告。第二報は10/28 21:43に件数を修正、10/29に対象者へ個別連絡済みと追記。kintone等のサービスデータへの影響はないとしている。"
    },
    "日本能率協会マネジメントセンター（Cuenote）": {
      officialUrl: "https://www.jmam.co.jp/assets/images/topics/cuenote_20261026.pdf",
      events: [
        E("vendor_notified", "2026-10-20", "10月20日時点では、当社の利用環境における情報漏洩は確認されていない", "@"),
        E("vendor_notified", "2026-10-26", "10月26日、同社から当社が同サービスを通じて取り扱っていた情報の一部が漏洩", "@"),
        E("leak_confirmed", "2026-10-26", "情報の一部が外部に漏洩したことが判明いたしました", "@"),
        E("disclosed", "2026-10-26", "2026年10月26日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生し",
      certainty: "confirmed",
      dataNote: "PDFはテキスト抽出不可のため画像で確認。10/18にユミルリンクからサーバー停止の連絡。項目・件数は確認中。既収録のtoki-labo事案（10/9公表）とは別。"
    },
    "ZEN大学": {
      officialUrl: "https://zen.ac.jp/news/202610_announcement_studio",
      events: [
        E("vendor_notified", "2026-10-16", "報告が、2026年10月16日にございました", "@"),
        E("disclosed", "2026-10-26", "2026/10/26", "@")
      ],
      causes: ["vendor"], causeText: "第三者が同社のクラウド環境に不正アクセス",
      certainty: "possible"
    },
    "パンハウス（旧Webサイト）": {
      officialUrl: "https://panhouse.jp/news/2026-10-notice-001/",
      events: [
        E("incident", "2026-09-30", "2026年9月30日から10月1日にかけて、同社サービスの脆弱性が悪用され", "@"),
        E("disclosed", "2026-10-26", "2026.10.26", "@")
      ],
      causes: ["vendor"], causeText: "同社サービスの脆弱性が悪用され",
      certainty: "possible"
    },
    "久喜市（緊急情報架電サービス）": {
      officialUrl: "https://www.city.kuki.lg.jp/kurashi/bosai/bosaijoho/1002152/1013704.html",
      events: [
        E("leak_possible", "2026-10-14", "令和8年10月14日（水曜）…対象サービスに含まれていることを確認", "@"),
        E("disclosed", "2026-10-27", "2026年10月27日", "@")
      ],
      causes: ["vendor"], causeText: "アルカディア…のネットワークが外部から不正アクセスを受け",
      certainty: "possible",
      dataNote: "ページ上の日付は2026年10月27日のみで、これを公表日として記録（初回公表日かは不明）。10月11日は事業者（アルカディア）側の事象としてページに記載された日時。"
    },
    "西東京市（職員等向け情報伝達サービス）": {
      officialUrl: "https://www.city.nishitokyo.lg.jp/kurasi/iza/bosai/josei/shokuinsanshuu.html", listedDate: "2026-10-27",
      events: [
        E("update", "2026-10-27", "最終更新日 2026年10月27日", "@")
      ],
      causes: ["vendor"], causeText: "情報伝達サービス提供事業者（株式会社アルカディア）サーバが不正アクセスを受けた",
      certainty: "possible",
      dataNote: "ページ上の日付は最終更新日2026年10月27日のみ（表題は【10月15日午後3時現在】）で、初回公表日が不明なためdisclosedは記録しない。"
    },
    "五條市（防災メール）": {
      officialUrl: "https://www.city.gojo.lg.jp/moshimo/bousai/19871.html",
      events: [
        E("disclosed", "2026-10-27", "更新日：2026年10月27日", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN（運営元・株式会社アルカディア）」が、外部から不正アクセス",
      certainty: "possible",
      dataNote: "第1報ページだが印字日付は更新日（10月27日）のみ。初報日は不明。"
    },
    "十日町市（農業情報メール）": {
      officialUrl: "https://www.city.tokamachi.lg.jp/soshiki/sangyokankobu/norinka/1/gyomu/11410.html", listedDate: "2026-10-27",
      events: [
        E("vendor_notified", "2026-10-21", "10月21日（水曜日）…株式会社ラクスライトクラウドから…サービスを停止するとの", "@"),
        E("update", "2026-10-27", "更新日：2026年10月27日", "@")
      ],
      causes: ["vendor"], causeText: "外部の第三者がシステム管理会社のサーバーに侵入したことによる。",
      certainty: "possible",
      dataNote: "ページは更新日（2026年10月27日）のみ記載。報道では599人分とされるが公式ページに件数の記載なし。公式ページに初回掲載日の記載がないため disclosed は未記録。"
    },
    "千歳市（メール配信サービス）": {
      officialUrl: "https://www.city.chitose.lg.jp/c70/1002860/1007035.html", listedDate: "2026-10-27",
      events: [
        E("update", "2026-10-27", "更新日 2026年10月27日", "@")
      ],
      causes: ["vendor"], causeText: "外部の第三者が同社のAPI 用のサーバー2台に侵入してコマンドを実行し",
      certainty: "confirmed",
      dataNote: "公式ページに初回掲載日の記載がないため disclosed は未記録。"
    },
    "伊奈町（ふれあい活動センター「ゆめくる」）": {
      officialUrl: "https://www.town.saitama-ina.lg.jp/0000009853.html",
      events: [
        E("disclosed", "2026-10-27", "[2026年10月27日]", "@")
      ],
      causes: ["vendor"], causeText: "外部からの不正アクセスを受け",
      certainty: "confirmed",
      dataNote: "漏洩確認は契約者情報。登録者185件は可能性で、10月27日時点で漏洩の事実は未確認。サービス名の記載はなく運営会社名のみ。"
    },
    "じげん（ミナオシ）": {
      officialUrl: "https://3naoshi.com/announcements/20261027",
      events: [
        E("vendor_notified", "2026-10-23", "2026年10月23日：配信委託先より、当社が配信のために登録していた情報が漏え", "@"),
        E("disclosed", "2026-10-27", "2026年10月27日　本件のお知らせを掲載しました", "@")
      ],
      causes: ["vendor"], causeText: "外部の第三者が同社のサーバーに侵入し、データベースから情報を持ち出した",
      certainty: "confirmed",
      dataNote: "運営会社名はページのコピーライト（ZIGExN Co., Ltd.）による。"
    },
    "Earthwatch Japan": {
      officialUrl: "https://www.earthwatch.jp/news/news_10_27_2026/", listedDate: "2026-10-27",
      events: [
        E("vendor_notified", "2026-10-21", "2026年10月21日（水）、ブラストメールの運営会社から", "@"),
        E("update", "2026-10-27", "2026年10月27日12時00分更新", "@")
      ],
      causes: ["vendor"], causeText: "外部の第三者による不正アクセスが発生し",
      certainty: "possible",
      dataNote: "配信先の個人情報は漏えいが確認されていないとしている。公式ページに初回掲載日の記載がないため disclosed は未記録。"
    },
    "フジッコ（フジッコ通信）": {
      officialUrl: "https://www.fujicco.co.jp/upload/pr_261027.pdf",
      events: [
        E("disclosed", "2026-10-27", "2026 年 10 月 27 日", "@")
      ],
      causes: ["vendor"], causeText: "不正アクセスによる個人情報の漏えいが判明しました",
      certainty: "possible"
    },
    "三光電業（メールマガジン）": {
      officialUrl: "https://www.sumnet.co.jp/news/5025.html",
      events: [
        E("disclosed", "2026-10-27", "2026年10月27日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生し",
      certainty: "confirmed",
      dataNote: "購読者の情報は流出していないとの報告を受けているとしている。"
    },
    "ソースネクスト（Cuenote FC）": {
      officialUrl: "https://www.sourcenext.com/support/i/2026/1027_info/",
      events: [
        E("vendor_notified", "2026-10-26", "2026年10月26日、ユミルリンク株式会社より", "@"),
        E("leak_possible", "2026-10-26", "データが外部に出力された形跡が確認されたとの報告を受けました", "@"),
        E("disclosed", "2026-10-27", "2026年10月27日", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが発生し",
      certainty: "possible",
      dataNote: "10月15日公表の同社サイトへの不正アクセス（既収録）とは別事案と明記。パスワード・クレジットカード情報は含まれないとしている。"
    },
    "伊勢市消防本部（災害情報メール・NET119）": {
      officialUrl: "https://www.city.ise.mie.jp/syoubou/gaiyo/1012086/1020958.html", listedDate: "2026-10-28",
      events: [
        E("update", "2026-10-28", "更新日 令和8年10月28日", "@")
      ],
      causes: ["vendor"], causeText: "システム運営会社である株式会社アルカディアから、第三者による不正アクセスにより",
      certainty: "possible",
      dataNote: "ページの日付は更新日（令和8年10月28日）のみ。本文に「令和8年10月15日時点」の状況記載があり初報はそれ以前とみられるが、初報日の表示がないためdisclosedは記録せず。"
    },
    "長岡市（メールマガジン「Gekkanながおか」）": {
      officialUrl: "https://www.city.nagaoka.niigata.jp/kurashi/life01/gekkan.html", listedDate: "2026-10-28",
      events: [
        E("update", "2026-10-28", "最終更新日　2026年10月28日", "@")
      ],
      causes: ["vendor"], causeText: "「ブラストメール」運営会社（株式会社ラクスライトクラウド）が第三者よる不正アクセスを受け",
      certainty: "possible",
      dataNote: "10月28日時点で登録者情報の流出は確認されていないとしている。公式ページに初回掲載日の記載がないため disclosed は未記録。"
    },
    "宮城県（みやぎ移住・交流ガイドメールマガジン）": {
      officialUrl: "https://www.pref.miyagi.jp/soshiki/sinkou/zyouhourouei-miyagiizyuukouryuugaido.html",
      events: [
        E("vendor_notified", "2026-10-27", "受託事業者から県に、メルマガ配信のためブラストメールを利用している旨の報告", "@"),
        E("disclosed", "2026-10-28", "令和8年10月28日", "@")
      ],
      causes: ["vendor"], causeText: "サーバーが第三者による不正アクセスを受け",
      certainty: "possible"
    },
    "太田市（ふるさと納税／さとふる経由）": {
      officialUrl: "https://www.city.ota.gunma.jp/site/furusato/1065936.html", listedDate: "2026-10-28",
      events: [
        E("leak_possible", null, "本市のふるさと納税に係る寄附者の情報についても外部流出している恐れ", "@"),
        E("update", "2026-10-28", "更新日：2026年10月28日更新", "@")
      ],
      causes: ["vendor"], causeText: null,
      certainty: "possible",
      dataNote: "本市寄附者の情報も外部流出の恐れと明記。 さとふる経由の自治体告知（さとふる公表内容の転載が中心）。漏えい項目・対象者・件数は確認中で、当該自治体の寄附者が含まれるかは未記載。10/29以降、さとふるから「対象外」との報告を受けたと追記する自治体が多数あり、続報で対象外となる可能性がある。日付は更新日表記のみのページが多く、その場合disclosedは記録していない。さとふる自身の公式ページ（satofull.jp）は接続できず未確認。"
    },
    "松阪地区広域消防組合（SpeeCAN RAIDEN）": {
      officialUrl: "https://www.mie-matsusaka119.jp/%E7%81%BD%E5%AE%B3%E6%83%85%E5%A0%B1%E3%83%A1%E3%83%BC%E3%83%AB%E9%85%8D%E4%BF%A1%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%81%B8%E3%81%AE%E4%B8%8D%E6%AD%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%AB/",
      events: [
        E("vendor_notified", "2026-10-13", "10月13日、…株式会社アルカディアから…報告を受けました", "@"),
        E("disclosed", "2026-10-30", "2026 10.30", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスが確認され",
      certainty: "possible",
      dataNote: "ページの日付は2026.10.30のみ（10/16運用再開の追記があり、更新後の日付の可能性）。件数は事業者が調査中。"
    },
    "上越市（安全メール）": {
      officialUrl: "https://www.city.joetsu.niigata.jp/soshiki/shimin-anzen/bouhan-mail-teishi.html",
      events: [
        E("vendor_notified", "2026-10-13", "10月13日（火曜日）、…(株)アルカディアから情報提供がありました", "@"),
        E("disclosed", "2026-10-30", "掲載日：2026年10月30日更新", "@")
      ],
      causes: ["vendor"], causeText: "「SpeeCAN RAIDEN」が不正アクセスを受けたことに伴い",
      certainty: "possible",
      dataNote: "ページの日付は「掲載日：2026年10月30日更新」のみで、初報日は不明（disclosed は更新日）。候補URL（bouhan-mail-teishi.html）は本ページを表示。消防団員・市職員の氏名等も対象。"
    },
    "松阪市（防災情報メール・防災電話サービス）": {
      officialUrl: "https://www.city.matsusaka.mie.jp/site/bousai/info.html",
      events: [
        E("disclosed", "2026-10-30", "更新日：2026年10月30日更新", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセス",
      certainty: "possible",
      dataNote: "disclosedはページの更新日（ページ上の唯一の日付）。初報の掲載日はページに記載なく、更新日のみ。officialUrlは防災カテゴリページ（記事ID 0201954）。"
    },
    "下松市（くだまつメール）": {
      officialUrl: "https://www.city.kudamatsu.lg.jp/chiiki/kouhou/osirase_kudamatumail.html", listedDate: "2026-10-30",
      events: [
        E("update", "2026-10-30", "更新日：2026年10月30日（第3報 全面再開）", "@")
      ],
      causes: ["vendor"], causeText: "第三者による不正アクセスがあり",
      certainty: "possible",
      dataNote: "ページの日付は第3報時点の更新日（10月30日）のみで、第1報の日付は印字なし。そのため公表日は未記録。第3報では「本市の登録者情報が漏えいしたとの報告は受けておりません」と記載。"
    },
    "埼玉県（シニア活躍推進宣言企業メールマガジン）": {
      officialUrl: "https://www.pref.saitama.lg.jp/a0816/news/page/news2026103001.html",
      events: [
        E("vendor_notified", "2026-10-30", "令和8年10月30日（金曜日）、受託事業者から", "@"),
        E("disclosed", "2026-10-30", "発表日：2026年10月30日17時", "@")
      ],
      causes: ["vendor"], causeText: "株式会社ラクスライトクラウドのサーバーに不正アクセスがあり",
      certainty: "possible"
    }
  };

  Object.values(T).forEach(t => t.events.forEach(e => { if (e.src === "@") e.src = t.officialUrl; }));
  root.TIMELINES = T;
})(typeof window !== "undefined" ? window : globalThis);
