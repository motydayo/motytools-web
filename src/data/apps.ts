// iPhoneアプリ台帳（正本）。/apps/ ハブ・/guide/ 記事のアプリ誘導・ツールページの導線・
// sitemap.xml はすべてこのファイルから駆動される。1アプリ = 1エントリ。
//
// - storeName / rating は iTunes lookup API（https://itunes.apple.com/lookup?id=<ID>&country=jp）の実データ。
//   最終取得: 2026-10-12。評価は実データだけを載せる（評価が無いアプリは rating を書かない）。
// - アイコンは public/app-icons/ に保存したもの（App Storeへの直リンクはしない）。
//   <slug>-256.webp = 画面表示用、<slug>-512.png = 構造化データ・OGP用。
// - 配信していないアプリ（そだち・ピッと保証など）は載せない。

export type AppCategoryId = 'food' | 'money' | 'life' | 'hobby';

export interface AppCategory {
  id: AppCategoryId;
  name: string;
  description: string;
}

export const APP_CATEGORIES: AppCategory[] = [
  { id: 'food', name: '料理・食品', description: 'レシピの保存、冷蔵庫の残り物、賞味期限の管理。' },
  { id: 'money', name: 'お金・仕事', description: '家賃・月謝・原価など、個人で稼ぐ人の台帳。' },
  { id: 'life', name: '暮らし', description: '買い物の値段、まちの安全、思いついたことのメモ。' },
  { id: 'hobby', name: '趣味', description: '生きものの飼育記録と、同じ趣味の仲間。' },
];

/** schema.org の applicationCategory（Googleが受け付ける値だけ） */
export type SchemaAppCategory =
  | 'LifestyleApplication'
  | 'BusinessApplication'
  | 'FinanceApplication'
  | 'ShoppingApplication'
  | 'SocialNetworkingApplication'
  | 'UtilitiesApplication';

export interface AppEntry {
  /** 記事の frontmatter `app:` に書く値。URL（/guide/app/<slug>/）にも使う */
  slug: string;
  /** 画面に出す短い名前 */
  name: string;
  /** App Storeの正式名（iTunes lookup の trackName） */
  storeName: string;
  /** 一言（40字以内。カードの説明・誘導ブロックに出る） */
  tagline: string;
  /** 対象者（誰のためのアプリか） */
  audience: string;
  /** 主な機能（3〜5個） */
  features: string[];
  /** 料金の一行説明 */
  pricing: string;
  appId: string;
  storeUrl: string;
  /** motytools.com 内のLPのパス（末尾スラッシュ込み） */
  lpPath: string;
  /** 256px WebP（表示用） */
  icon: string;
  /** 512px PNG（構造化データ・OGP用） */
  icon512: string;
  category: AppCategoryId;
  schemaCategory: SchemaAppCategory;
  /** App Storeのジャンル（日本語） */
  genre: string;
  /** 対応iOSの最小バージョン（iTunes lookup の minimumOsVersion） */
  minIos: string;
  /** App Storeの評価（実データのみ。無ければ書かない） */
  rating?: { value: number; count: number };
  /** 関係が本当に近い無料ツールの slug（src/data/tools.ts） */
  relatedTools: string[];
  /** LP（public/ の静的ページ）の titleタグ。検索語を前に置く。scripts/sync-lp.ts が書き込む */
  lpTitle: string;
  /** LPの meta description / og:description（90〜120字） */
  lpDescription: string;
}

const store = (id: string) => `https://apps.apple.com/jp/app/id${id}`;
const icon = (slug: string) => `/app-icons/${slug}-256.webp`;
const icon512 = (slug: string) => `/app-icons/${slug}-512.png`;

export const APPS: AppEntry[] = [
  // ── 料理・食品 ──
  {
    slug: 'recipescrap',
    name: 'レシピスクラップ',
    storeName: 'レシピスクラップ-インスタのレシピ保存・取り込み',
    tagline: 'インスタやTikTokのレシピを、材料と手順だけにして保存。',
    audience: 'SNSやレシピサイトで見つけたレシピを、あとで作るために残しておきたい人',
    features: [
      '共有ボタンから取り込むと、材料と手順だけに整理される',
      '料理名でも材料名でも検索できる',
      '調理中は手順を1つずつ大きな文字で表示',
      'レシピは端末内に保存。会員登録は不要',
    ],
    pricing: '無料（取り込みは月10件まで）。プレミアムは月額800円',
    appId: '6801675747',
    storeUrl: store('6801675747'),
    lpPath: '/recipescrap/',
    icon: icon('recipescrap'),
    icon512: icon512('recipescrap'),
    category: 'food',
    schemaCategory: 'LifestyleApplication',
    genre: 'フード／ドリンク',
    minIos: '15.1',
    relatedTools: [],
    lpTitle: 'インスタ・TikTokのレシピ保存アプリ「レシピスクラップ」｜材料と手順だけを残す',
    lpDescription:
      'インスタやTikTok、レシピサイトのレシピを、共有ボタンから材料と手順だけにして保存できるiPhoneアプリ「レシピスクラップ」。料理名・材料名で検索でき、調理中は手順を大きな文字で表示。端末内保存・会員登録不要。',
  },
  {
    slug: 'arumono-recipe',
    name: 'あるものレシピ',
    storeName: 'あるものレシピ 余り物・残り物の使い切り',
    tagline: '冷蔵庫にある食材を選ぶだけで、いま作れる料理がわかる。',
    audience: '冷蔵庫の残り物で献立を決めたい人、食材を使い切りたい人',
    features: [
      '食材をタップで選ぶと、いま作れる料理が並ぶ',
      '「あと1つで作れる」料理と足りない食材がわかる',
      '家庭料理477品を収録。通信なしで使える',
      'しょうゆ・油などの調味料は最初から「ある」扱い',
    ],
    pricing: '無料（広告あり）。広告を消すのは買い切り',
    appId: '6809333886',
    storeUrl: store('6809333886'),
    lpPath: '/arumono-recipe/',
    icon: icon('arumono-recipe'),
    icon512: icon512('arumono-recipe'),
    category: 'food',
    schemaCategory: 'LifestyleApplication',
    genre: 'フード／ドリンク',
    minIos: '16.4',
    relatedTools: [],
    lpTitle: '冷蔵庫の余り物で作れるレシピがわかるアプリ「あるものレシピ」｜残り物の使い切りに',
    lpDescription:
      '冷蔵庫の余り物・残り物から、いま作れる料理がわかるiPhoneアプリ「あるものレシピ」。食材をタップで選ぶだけで作れる料理が並び、「あと1つで作れる」料理と足りない食材もわかります。家庭料理477品・通信不要。',
  },
  {
    slug: 'pitto-kigen',
    name: 'ピッと期限',
    storeName: 'ピッと期限 - 賞味期限と食品在庫をバーコード管理',
    tagline: 'バーコードと賞味期限をカメラで読んで、食品の期限を管理。',
    audience: '冷蔵庫の食品を期限切れにしがちな家庭、家族で在庫を共有したい人',
    features: [
      'バーコードを読むと商品名が自動で入る',
      'パッケージの賞味期限をカメラで読み取り',
      '期限が近づくと通知でお知らせ',
      '招待コードで家族と冷蔵庫の中身を共有',
    ],
    pricing: '無料（すべての機能）',
    appId: '6786486488',
    storeUrl: store('6786486488'),
    lpPath: '/pitto-kigen/',
    icon: icon('pitto-kigen'),
    icon512: icon512('pitto-kigen'),
    category: 'food',
    schemaCategory: 'LifestyleApplication',
    genre: 'フード／ドリンク',
    minIos: '15.1',
    rating: { value: 5, count: 1 },
    relatedTools: ['days'],
    lpTitle: '賞味期限管理アプリ「ピッと期限」｜バーコードで食品在庫を管理・家族と共有',
    lpDescription:
      '賞味期限と食品在庫をバーコードで管理できる無料のiPhoneアプリ「ピッと期限」。バーコードで商品名を自動取得し、賞味期限はカメラで読み取り。期限前に通知し、家族と冷蔵庫の中身を共有できます。会員登録不要。',
  },

  // ── お金・仕事 ──
  {
    slug: 'ooya-note',
    name: '大家ノート',
    storeName: '大家ノート - 家賃管理・物件管理・賃貸経営',
    tagline: '家賃の入金・契約の更新日・年間収支をiPhoneで管理。',
    audience: 'アパートや区分マンションを数室〜数十室持つ個人の大家',
    features: [
      '毎月の家賃チェック表が自動でできる',
      '契約の更新日・火災保険の満了日を通知',
      '年間の収支を集計してCSV・PDFで書き出し',
      '修繕費などの領収書を撮って記録に添付',
      'データは端末内に保存。会員登録は不要',
    ],
    pricing: '無料（1物件・3室まで）。Premiumは月額980円',
    appId: '6798743723',
    storeUrl: store('6798743723'),
    lpPath: '/ooya-note/',
    icon: icon('ooya-note'),
    icon512: icon512('ooya-note'),
    category: 'money',
    schemaCategory: 'FinanceApplication',
    genre: 'ファイナンス',
    minIos: '16.4',
    relatedTools: ['genka-shokyaku', 'loan'],
    lpTitle: '家賃管理アプリ「大家ノート」｜個人大家の物件管理・賃貸経営をiPhoneで',
    lpDescription:
      '家賃の入金チェック・契約の更新日・火災保険の期日・年間収支を管理できる、個人大家向けの家賃管理アプリ「大家ノート」。期日を通知し、申告前の集計をCSV・PDFで書き出せます。データは端末内保存・会員登録不要。',
  },
  {
    slug: 'lesson-techo',
    name: 'レッスン手帳',
    storeName: 'レッスン手帳-月謝管理・振替管理・生徒管理',
    tagline: '生徒・月謝・振替をまとめて管理する、個人レッスン講師の台帳。',
    audience: 'ピアノ・英会話・習字などを個人で教えている講師',
    features: [
      '月謝の未納がひと目でわかる',
      '欠席から振替の発行・消化・期限まで自動で管理',
      '毎週・隔週のレッスン予定を8週間先まで自動で並べる',
      '月謝台帳をCSV、生徒別カルテをPDFで書き出し',
    ],
    pricing: '無料（生徒5人まで）。Premiumは月額480円',
    appId: '6798723405',
    storeUrl: store('6798723405'),
    lpPath: '/apps/lesson-techo/',
    icon: icon('lesson-techo'),
    icon512: icon512('lesson-techo'),
    category: 'money',
    schemaCategory: 'BusinessApplication',
    genre: '仕事効率化',
    minIos: '16.4',
    relatedTools: [],
    lpTitle: '月謝管理・振替管理アプリ「レッスン手帳」｜個人レッスン講師の生徒管理',
    lpDescription:
      '月謝の未納と振替を見落とさない、個人レッスン講師向けのiPhoneアプリ「レッスン手帳」。生徒・出欠・振替の期限・月謝をまとめて管理し、CSV・PDFで書き出せます。ピアノ・英会話・習字などの教室に。データは端末内保存。',
  },
  {
    slug: 'tsukulog',
    name: 'つくログ',
    storeName: 'つくログ - 材料と原価の記録アプリ',
    tagline: '材料の在庫と原価から、販路ごとの手取りと売値を計算。',
    audience: 'minne・Creema・イベントなどで作品を売るハンドメイド作家',
    features: [
      '欲しい手取り額から売値を逆算する値付けシミュレータ',
      '材料の在庫と単価をまとめて管理',
      '販路ごとの手数料を引いた手取りを自動で計算',
      '確定申告用の売上・仕入れのCSVを書き出し',
    ],
    pricing: '無料（材料30・作品10・販路2まで）。プレミアムは月額480円',
    appId: '6798757917',
    storeUrl: store('6798757917'),
    lpPath: '/apps/tsukulog/',
    icon: icon('tsukulog'),
    icon512: icon512('tsukulog'),
    category: 'money',
    schemaCategory: 'BusinessApplication',
    genre: '仕事効率化',
    minIos: '16.4',
    relatedTools: ['percent'],
    lpTitle: 'ハンドメイドの原価計算・値付けアプリ「つくログ」｜材料在庫と販路別の手取り',
    lpDescription:
      'ハンドメイド作家向けの原価計算・材料在庫管理アプリ「つくログ」。欲しい手取りから売値を逆算する値付けシミュレータ、minne・Creema・メルカリなど販路別の手取り計算、確定申告用CSVの書き出しに対応したiPhoneアプリです。',
  },

  // ── 暮らし ──
  {
    slug: 'price-scan',
    name: 'ピッと最安',
    storeName: 'ピッと最安 - バーコードで価格比較・最安値',
    tagline: '店頭でバーコードを読むだけで、ネットの最安値がわかる。',
    audience: 'お店で買う前に、ネットならいくらかを確かめたい人',
    features: [
      'バーコードを読むだけで最安値を大きく表示',
      '楽天市場とYahoo!ショッピングをまとめて比較',
      'Amazon・価格.comの検索にもワンタップで移動',
      'お気に入りの商品が値下がりしたら通知',
    ],
    pricing: '無料（広告あり）。広告を消すのは買い切り',
    appId: '6790871478',
    storeUrl: store('6790871478'),
    lpPath: '/price-scan/',
    icon: icon('price-scan'),
    icon512: icon512('price-scan'),
    category: 'life',
    schemaCategory: 'ShoppingApplication',
    genre: 'ショッピング',
    minIos: '15.1',
    relatedTools: ['percent'],
    lpTitle: 'バーコードで価格比較・最安値がわかるアプリ「ピッと最安」｜楽天・Yahoo!を横断',
    lpDescription:
      '店頭で商品のバーコードを読むだけで、楽天市場・Yahoo!ショッピングのネット最安値がわかる価格比較アプリ「ピッと最安」。Amazon・価格.comの検索にもワンタップ。会員登録不要・無料のiPhoneアプリです。',
  },
  {
    slug: 'machi-anzen-map',
    name: 'まちの安全マップ',
    storeName: 'まちの安全マップ 事故・不審者を地図で',
    tagline: '交通事故・不審者情報・行政処分・食中毒の記録を、地図で数える。',
    audience: '引っ越し先や通学路の周りの安全を、公的な記録で確かめたい人',
    features: [
      '住所や駅名から、半径500m・1kmの件数を出典つきで表示',
      '警察庁の交通事故統計の発生地点を全国で表示',
      '27都道府県の警察が公開した不審者情報',
      '国土地理院の地図から、土地の昔（田んぼ・川など）の目安',
    ],
    pricing: '無料（広告あり）。広告を消すのは買い切り',
    appId: '6817028245',
    storeUrl: store('6817028245'),
    lpPath: '/machi-anzen-map/',
    icon: icon('machi-anzen-map'),
    icon512: icon512('machi-anzen-map'),
    category: 'life',
    schemaCategory: 'LifestyleApplication',
    genre: 'ナビゲーション',
    minIos: '16.4',
    relatedTools: [],
    lpTitle: '交通事故・不審者情報を地図で見るアプリ「まちの安全マップ」｜行政処分・食中毒も',
    lpDescription:
      '交通事故・不審者情報・行政処分・食中毒の記録を、住所や駅名の周りで地図にして数えるiPhoneアプリ「まちの安全マップ」。警察庁の交通事故統計や各都道府県警察の公開情報を出典つきで表示。引っ越し先や通学路の確認に。',
  },
  {
    slug: 'memomail',
    name: 'メモびゅん',
    storeName: 'メモびゅん - 自分にメールを送るメモアプリ',
    tagline: '開いて書いて送るだけ。思いついたことを自分宛てにメール。',
    audience: 'ひらめきを確実に残したい人、自分宛てメールでメモしている人',
    features: [
      '起動・入力・送信の3タップで自分宛てに送れる',
      'GmailやiCloudなど複数の宛先を登録して使い分け',
      '音声入力で話すだけでメモになる',
      '送ったメモをObsidianにも自動で保存',
    ],
    pricing: '無料（1日3通・宛先1件まで）。Proは月額300円',
    appId: '6784932051',
    storeUrl: store('6784932051'),
    lpPath: '/memomail/',
    icon: icon('memomail'),
    icon512: icon512('memomail'),
    category: 'life',
    schemaCategory: 'UtilitiesApplication',
    genre: '仕事効率化',
    minIos: '15.1',
    relatedTools: ['moji-count'],
    lpTitle: '自分にメールを送るメモアプリ「メモびゅん」｜3タップで自分宛てに送信',
    lpDescription:
      '思いついたことを3タップで自分宛てにメールできるiPhoneのメモアプリ「メモびゅん」。Captioの代わりを探している方に。複数の宛先、音声入力、Obsidianへの自動保存に対応。無料から使えます。',
  },

  // ── 趣味 ──
  {
    slug: 'reptile-sns',
    name: 'うちの爬虫類',
    storeName: 'うちの爬虫類',
    tagline: '給餌・体重・脱皮を3タップで記録する、爬虫類・両生類の飼育記録SNS。',
    audience: 'レオパ・フトアゴ・ボールパイソンなど、爬虫類や両生類の飼い主',
    features: [
      '給餌・体重・脱皮を3タップで記録',
      '写真をつけた記録が、そのまま個体の投稿になる',
      '同じ種類の飼い主が集まる7つの「部屋」',
      '体重と給餌の推移をグラフで振り返る',
    ],
    pricing: '無料（5匹まで）。Proは月額300円',
    appId: '6815512730',
    storeUrl: store('6815512730'),
    lpPath: '/reptile-sns/',
    icon: icon('reptile-sns'),
    icon512: icon512('reptile-sns'),
    category: 'hobby',
    schemaCategory: 'SocialNetworkingApplication',
    genre: 'ソーシャルネットワーキング',
    minIos: '16.4',
    relatedTools: [],
    lpTitle: '爬虫類の飼育記録アプリ・SNS「うちの爬虫類」｜給餌・体重・脱皮を3タップで記録',
    lpDescription:
      'レオパ・フトアゴ・ボールパイソンなど爬虫類・両生類の飼育記録アプリ「うちの爬虫類」。給餌・体重・脱皮を3タップで記録でき、記録がそのまま投稿に。同じ種類の飼い主が集まる「部屋」で相談もできるiPhoneアプリです。',
  },
];

/** 記事の frontmatter `app:` の検証に使う slug 一覧 */
export const APP_SLUGS = APPS.map((a) => a.slug) as [string, ...string[]];

export function getApp(slug: string): AppEntry {
  const app = APPS.find((a) => a.slug === slug);
  if (!app) throw new Error(`Unknown app slug: ${slug}`);
  return app;
}

export function getAppCategory(id: AppCategoryId): AppCategory {
  const cat = APP_CATEGORIES.find((c) => c.id === id);
  if (!cat) throw new Error(`Unknown app category: ${id}`);
  return cat;
}

/** 同じカテゴリを先に、そのあと他カテゴリ。自分は除く */
export function otherApps(slug: string, limit = 3): AppEntry[] {
  const self = getApp(slug);
  const same = APPS.filter((a) => a.slug !== slug && a.category === self.category);
  const rest = APPS.filter((a) => a.slug !== slug && a.category !== self.category);
  return [...same, ...rest].slice(0, limit);
}

/** schema.org SoftwareApplication（LP・ハブで共通に使う） */
export function softwareApplicationLd(app: AppEntry, siteUrl: string): Record<string, unknown> {
  const ld: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    alternateName: app.storeName,
    description: app.tagline,
    operatingSystem: `iOS ${app.minIos} 以降`,
    applicationCategory: app.schemaCategory,
    image: `${siteUrl}${app.icon512}`,
    url: `${siteUrl}${app.lpPath}`,
    downloadUrl: app.storeUrl,
    installUrl: app.storeUrl,
    inLanguage: 'ja',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
    publisher: { '@type': 'Organization', name: 'motytools', url: siteUrl },
  };
  if (app.rating && app.rating.count > 0) {
    ld.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: String(app.rating.value),
      ratingCount: app.rating.count,
      bestRating: '5',
      worstRating: '1',
    };
  }
  return ld;
}
