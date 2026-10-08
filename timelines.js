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
      causes: ["vuln"], causeText: "第三者製のソフトウェアの脆弱性を悪用されたことによるもの"
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
        E("update", "2026-09-25", "2026/9/25（第二報）", "https://corp.helpfeel.com/news/news-20260925-01")
      ],
      causes: ["vuln"], causeText: "画像アップロードサーバーに存在した脆弱性を悪用し…任意のコマンドを実行"
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
        E("disclosed", "2026-09-25", "情報漏えいについてのお詫びとお知らせ【速報】2026/09/25", "@")
      ],
      causes: [], causeText: null
    },
    "京王電鉄グループ": {
      officialUrl: "https://www.keio.co.jp/news/update/announce/nr260926v13404/",
      events: [
        E("access_confirmed", "2026-09-26", "2026年9月26日未明に、…ランサムウェアによる攻撃を確認", "@"),
        E("disclosed", "2026-09-26", "2026年9月26日 ランサムウェア攻撃によるシステム障害に関するお知らせとお詫び", "@")
      ],
      causes: ["ransomware"], causeText: null
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
        E("update", "2026-09-29", "（第3報）2026年9月29日", "https://share.timescar.jp/news/2026/0929/1816.html")
      ],
      causes: [], causeText: null,
      dataNote: "初報は9月25日です。約660万アカウントは9月28日の第2報、本人確認書類 約160万件は9月29日の第3報で示されました。"
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
        E("update", "2026-09-30", "（第三報）2026年9月30日", "https://www.secoma.co.jp/images/top/202609301900.pdf")
      ],
      causes: [], causeText: "アプリのサーバーを経由して会員情報を保有するサーバーに対し第三者が不正にアクセス"
    },
    "ヤマト運輸（クロネコ代金後払い）": {
      officialUrl: "https://www.yamato-hd.co.jp/important/img/impo_261002_1_1.pdf",
      events: [
        E("access_confirmed", "2026-09-28", "9月28日（月）に…不正アクセスを受けたことを確認", "@"),
        E("disclosed", "2026-09-29", "2026年09月29日 …不正アクセスの発生について", "@"),
        E("leak_possible", null, "情報の一部が漏えいした可能性があることが判明", "https://www.yamato-hd.co.jp/important/info_260929_1.html"),
        E("update", "2026-10-02", "【第2報】2026年10月02日", "https://www.yamato-hd.co.jp/important/info_260929_1.html")
      ],
      causes: [], causeText: null
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
        E("access_confirmed", "2026-09-30", "9月30日（水）に第三者による不正アクセスを確認", "@"),
        E("disclosed", "2026-09-30", "「お荷物問い合わせサービス」への不正アクセスの発生について(第1報）", "@"),
        E("leak_possible", null, "お客さまの個人情報が外部に流出した可能性があることが判明", "https://www2.sagawa-exp.co.jp/information/detail/420/"),
        E("update", "2026-10-01", "個人情報流出の可能性について（第2報）2026年10月1日", "https://www2.sagawa-exp.co.jp/information/detail/420/"),
        E("update", "2026-10-08", "よくあるご質問（FAQ）（10月8日更新）", "https://www2.sagawa-exp.co.jp/information/detail/425/")
      ],
      causes: [], causeText: null,
      dataNote: "「約100日分」は流出した可能性のあるデータの範囲で、侵入の期間ではありません。2026年7月のスマートクラブの件とは別の事案です。"
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
        E("disclosed", "2026-10-05", "2026年10月05日 お詫びとお知らせ", "@")
      ],
      causes: ["vuln"], causeText: "当社サイトで使用していたソフトウェアの脆弱性を悪用して侵入"
    },
    "物語コーポレーション（焼肉きんぐ公式アプリ）": {
      officialUrl: "https://www.monogatari.co.jp/news/261005_news/",
      events: [
        E("access_confirmed", "2026-10-02", "2026年10月2日（金）、…第三者からの不正アクセスが確認されました", "@"),
        E("leak_confirmed", "2026-10-03", "会員情報が漏えいしたことを10月3日（土）に確認", "@"),
        E("disclosed", "2026-10-05", "2026.10.05 お知らせ", "@")
      ],
      causes: [], causeText: "第三者による不正アクセスによるものと確認",
      dataNote: "公式発表の冒頭と経緯欄で書き方が異なります。経緯欄（10月2日に不正アクセスを確認、10月3日に漏えいを確認）を使っています。"
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
        E("update", "2026-10-08", "【第3報】当社サービスの一部システムへの不正アクセスによる障害について", "https://www.idcf.jp/news/topics/20261008001")
      ],
      causes: ["ransomware"], causeText: "第三者からのランサムウェア攻撃",
      dataNote: "495は障害の影響を受けた顧客数で、漏洩件数ではありません。第3報（10月8日）時点でも漏えいは確認されておらず、侵入経路は調査中です。影響ゾーンの顧客データは「取り出しや復元が困難な見通し」とされています。"
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
        E("disclosed", "2026-10-07", "日水物流株式会社におけるシステム障害について（第1報）2026年10月07日", "@")
      ],
      causes: ["vendor"], causeText: "委託先のデータセンターへの第三者による不正アクセスとみられています",
      dataNote: "システム障害の発表で、個人情報や顧客データの流出は確認中とされています。発生日はシステム障害の発生日です。"
    },
    "東京都小平市": {
      officialUrl: "https://x.com/kodaira_tokyo/status/2107976770385224041",
      events: [
        E("leak_possible", null, "問合せフォーム等を利用した際の住民情報…について、情報漏えいのおそれ", "@"),
        E("disclosed", "2026-10-08", "市HPの保守管理を受託している事業者が使用するクラウド基盤サービスが…ランサムウェア攻撃", "@")
      ],
      causes: ["ransomware", "vendor"], causeText: "保守管理を受託している事業者が使用するクラウド基盤サービスが第三者によるランサムウェア攻撃を受け",
      dataNote: "市の公式Xアカウントの投稿（添付画像）による発表で、公表日は投稿日時です。10月7日の投稿では「システムトラブル」とだけ案内していました。現時点で情報漏洩は確認されていないとしています。"
    }
  };

  Object.values(T).forEach(t => t.events.forEach(e => { if (e.src === "@") e.src = t.officialUrl; }));
  root.TIMELINES = T;
})(typeof window !== "undefined" ? window : globalThis);
