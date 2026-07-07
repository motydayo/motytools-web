// ツール台帳。/tools/ ハブ・関連ツール・sitemap.xml・OG画像生成はすべてこのファイルから駆動される。
// 1ツール = 1エントリ。ページ本体は src/pages/<slug>/index.astro。

export type CategoryId = 'money' | 'date' | 'text';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  /** カテゴリチップ・OGアクセントに使う色（ライト背景でAAを満たす濃い色） */
  color: string;
  /** ダークテーマ時のチップ文字色 */
  colorDark: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'money',
    name: 'お金の計算',
    description: '手取り・ローン・積立・電気代など、暮らしのお金をその場で計算できるツール。',
    color: '#047857',
    colorDark: '#34d399',
  },
  {
    id: 'date',
    name: '日付・年齢',
    description: '和暦変換・年齢計算・日数計算・営業日計算など、日付まわりの定番ツール。',
    color: '#0369a1',
    colorDark: '#38bdf8',
  },
  {
    id: 'text',
    name: '文字・画像',
    description: '文字数カウント・QRコード作成・画像圧縮・HEIC変換。すべてブラウザ内で完結。',
    color: '#6d28d9',
    colorDark: '#a78bfa',
  },
];

export interface Tool {
  slug: string;
  /** 表示名（H1やカードの見出し） */
  name: string;
  /** titleタグ（末尾に「 | motytools」が自動付与される） */
  title: string;
  /** meta description（90〜120字目安・重複禁止） */
  description: string;
  /** カード用の短い説明（40〜60字） */
  short: string;
  category: CategoryId;
  /** 狙う検索キーワード（メタには出さない。設計・関連リンクの参考） */
  keywords: string[];
  /** 24x24 stroke アイコンの内側SVG要素 */
  icon: string;
}

export const TOOLS: Tool[] = [
  // ── お金の計算 ──
  {
    slug: 'tedori',
    name: '手取り計算',
    title: '手取り計算ツール｜年収から手取り額をシミュレーション',
    description:
      '年収（額面）を入れるだけで手取りの年額・月額を概算。健康保険・厚生年金・雇用保険・所得税・住民税の内訳つきでブラウザだけで今すぐ計算できます。',
    short: '年収から手取り額と税金・社会保険料の内訳を概算。',
    category: 'money',
    keywords: ['手取り 計算', '年収 手取り', '給料 手取り 計算', '手取り 早見表'],
    icon: '<rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 10h20"/><circle cx="17" cy="14.5" r="1"/>',
  },
  {
    slug: 'fukuri',
    name: '複利・積立シミュレーター',
    title: '複利計算・積立シミュレーター｜新NISAの資産推移を試算',
    description:
      '毎月の積立額・想定利回り・年数を入れるだけで、複利で増える資産推移をグラフと表で試算。元本と運用益の内訳、新NISAの非課税枠チェックにも対応した無料シミュレーター。',
    short: '毎月の積立と複利でいくら増えるかをグラフで試算。新NISA対応。',
    category: 'money',
    keywords: ['複利 計算', '積立 シミュレーション', '新NISA シミュレーション', '資産運用 計算'],
    icon: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  },
  {
    slug: 'loan',
    name: '住宅ローンシミュレーター',
    title: '住宅ローン返済シミュレーター｜月々の返済額と総返済額を計算',
    description:
      '借入額・金利・返済期間から、住宅ローンの毎月の返済額・総返済額・利息総額をその場で計算。元利均等と元金均等の比較、年別の残高推移表にも対応した無料シミュレーター。',
    short: '借入額と金利から毎月の返済額・利息総額を計算。',
    category: 'money',
    keywords: ['住宅ローン シミュレーション', '住宅ローン 計算', 'ローン 返済額 計算', '月々 返済額'],
    icon: '<path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M9 21v-8h6v8"/>',
  },
  {
    slug: 'denkidai',
    name: '電気代計算',
    title: '電気代計算ツール｜家電の消費電力から1時間・1ヶ月の電気代を計算',
    description:
      'エアコン・扇風機・ドライヤーなど家電の消費電力（W）と使用時間から、1時間・1日・1ヶ月の電気代を計算。主要家電のプリセットつきで、節電の目安がすぐわかります。',
    short: '消費電力と使用時間から電気代を計算。主要家電プリセット付き。',
    category: 'money',
    keywords: ['電気代 計算', 'エアコン 電気代 1時間', '消費電力 電気代', 'ワット 電気代'],
    icon: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  },
  {
    slug: 'percent',
    name: 'パーセント計算',
    title: 'パーセント計算ツール｜割引・割合・増減率を一発計算',
    description:
      '「◯◯の20%は？」「AはBの何%？」「30%引きはいくら？」をその場で計算できる無料ツール。割引価格・割合・増減率の4つのモードで、消費税や値引きの暗算いらず。',
    short: '割合・割引価格・増減率の4モードを一発計算。',
    category: 'money',
    keywords: ['パーセント 計算', '割引 計算', '何パーセント 計算', '増減率 計算'],
    icon: '<line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
  },
  // ── 日付・年齢 ──
  {
    slug: 'wareki',
    name: '西暦・和暦変換',
    title: '西暦和暦変換ツール｜早見表付きで一発変換',
    description:
      '西暦⇔和暦（令和・平成・昭和・大正・明治）を入力した瞬間に変換。令和は西暦何年？平成◯年は西暦？に一発回答。明治からの対照早見表つきで書類記入に便利です。',
    short: '西暦⇔令和・平成・昭和を瞬時に変換。対照早見表つき。',
    category: 'date',
    keywords: ['西暦 和暦 変換', '和暦 西暦', '令和 西暦', '平成 西暦 変換'],
    icon: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 15h6"/>',
  },
  {
    slug: 'nenrei',
    name: '年齢計算・年齢早見表',
    title: '年齢計算・年齢早見表｜生年月日から満年齢を計算',
    description:
      '生年月日を入れるだけで今日時点の満年齢・数え年・干支・和暦・卒業年度がわかる年齢計算ツール。生まれ年ごとの年齢早見表つきで、書類記入や年齢確認にすぐ使えます。',
    short: '生年月日から満年齢・数え年・干支を計算。早見表つき。',
    category: 'date',
    keywords: ['年齢 計算', '年齢 早見表', '生年月日 年齢', '満年齢 計算'],
    icon: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/>',
  },
  {
    slug: 'days',
    name: '日数計算',
    title: '日数計算ツール｜今日から何日後・2つの日付の間の日数',
    description:
      '2つの日付の間の日数と、今日から◯日後・◯日前の日付をその場で計算。締切までの残り日数、記念日からの経過日数、曜日の確認までブラウザだけで完結します。',
    short: '日付の間の日数と、◯日後・◯日前の日付を計算。',
    category: 'date',
    keywords: ['日数 計算', '何日後', '日付 計算', '残り日数'],
    icon: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 15h3"/><path d="M13 18h3"/>',
  },
  {
    slug: 'eigyobi',
    name: '営業日計算',
    title: '営業日計算ツール｜土日祝を除いた◯営業日後を計算',
    description:
      '「5営業日後はいつ？」「この期間の営業日数は？」を土日・日本の祝日を除いて自動計算。2025〜2027年の祝日データ内蔵、祝日一覧表つきで納期・締切の確認に便利です。',
    short: '土日祝を除いた営業日を計算。祝日一覧（2025〜2027）つき。',
    category: 'date',
    keywords: ['営業日 計算', '5営業日後', '営業日数 カウント', '2026年 祝日 一覧'],
    icon: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 15.5l2 2 4-4"/>',
  },
  // ── 文字・画像 ──
  {
    slug: 'moji-count',
    name: '文字数カウント',
    title: '文字数カウントツール｜原稿用紙・SNS換算にも対応',
    description:
      '入力した瞬間に文字数・行数・原稿用紙換算・バイト数がわかる文字数カウンター。スペース込み/除きの切替、X（Twitter）やInstagramの残り文字数チェックにも対応。',
    short: '文字数・行数・原稿用紙換算をリアルタイム表示。',
    category: 'text',
    keywords: ['文字数 カウント', '文字数 数える', '原稿用紙 換算', 'ツイート 文字数'],
    icon: '<path d="M4 7V5h16v2"/><path d="M12 5v14"/><path d="M9 19h6"/>',
  },
  {
    slug: 'qr',
    name: 'QRコード作成',
    title: 'QRコード作成ツール｜無料・登録不要・ブラウザ完結',
    description:
      'URLやテキストを入れるだけでQRコードを無料作成。PNG・SVGでダウンロードでき、サイズや誤り訂正レベルも調整可能。データは端末の外に送信されず、登録も不要です。',
    short: 'URLやテキストからQRコードを作成。PNG/SVG保存対応。',
    category: 'text',
    keywords: ['QRコード 作成', 'QRコード 作成 無料', 'QRコード ジェネレーター', 'URL QRコード'],
    icon: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3z"/><path d="M20 14h1v1h-1z"/><path d="M14 20h1v1h-1z"/><path d="M19 19h2v2h-2z"/>',
  },
  {
    slug: 'image-compress',
    name: '画像圧縮・リサイズ',
    title: '画像圧縮・リサイズツール｜アップロード不要でブラウザ完結',
    description:
      'JPEG・PNG・WebP画像をブラウザ内で圧縮・リサイズ。サーバーに画像を送らないので安心で速い。品質と最大サイズを指定して複数枚まとめて処理、その場でダウンロードできます。',
    short: '画像をブラウザ内で圧縮・縮小。サーバー送信なしで安心。',
    category: 'text',
    keywords: ['画像 圧縮', '画像 リサイズ', 'jpg 圧縮', '写真 容量 小さく'],
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>',
  },
  {
    slug: 'heic-jpg',
    name: 'HEIC→JPG変換',
    title: 'HEIC JPG変換ツール｜iPhoneの写真をブラウザだけで変換',
    description:
      'iPhoneで撮ったHEIC形式の写真を、アプリ不要でJPG・PNGに変換。画像はサーバーに送信されずブラウザ内で処理されるので安心。複数枚まとめて変換してすぐ保存できます。',
    short: 'iPhoneのHEIC写真をJPG/PNGへ。ブラウザ内で安全に変換。',
    category: 'text',
    keywords: ['HEIC JPG 変換', 'HEIC 変換', 'heic jpeg 変換 無料', 'iPhone 写真 jpg'],
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 15h7"/><path d="M12.5 12l3 3-3 3"/>',
  },
];

export function getTool(slug: string): Tool {
  const tool = TOOLS.find((t) => t.slug === slug);
  if (!tool) throw new Error(`Unknown tool slug: ${slug}`);
  return tool;
}

export function getCategory(id: CategoryId): Category {
  const cat = CATEGORIES.find((c) => c.id === id);
  if (!cat) throw new Error(`Unknown category: ${id}`);
  return cat;
}

export function relatedTools(slug: string, limit = 4): Tool[] {
  const self = getTool(slug);
  const sameCat = TOOLS.filter((t) => t.slug !== slug && t.category === self.category);
  const others = TOOLS.filter((t) => t.slug !== slug && t.category !== self.category);
  return [...sameCat, ...others].slice(0, limit);
}
