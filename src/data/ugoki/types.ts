// 図鑑（動きの図鑑 /ugoki/・UI部品の図鑑 /ui/、英語版 /en/motion/・/en/ui/）の1項目。
// 1項目＝1ファイル。日本語は entries/<slug>.ts、英語は entries-en/<slug>.ts（同じ slug・同じ型）。
// 見本は src/components/ugoki/demos/<slug>.astro（動き）か ui-demos/<slug>.astro（UI部品）か shiryo-demos/<slug>.astro（資料レイアウト）。

export type Lang = 'ja' | 'en';
export type UgokiCategory = 'scroll' | 'pointer' | 'load' | 'inform';
export type UiCategory = 'overlay' | 'nav' | 'input' | 'display';
export type ShiryoCategory = 'kousei' | 'data' | 'keikaku' | 'teian';

export interface CodeBlock {
  lang: 'html' | 'css' | 'js';
  /** 見出し（例:「HTML」「CSS」「JavaScript（30行）」） */
  label: string;
  /** {{key}} などの差し込み口を書ける（下の TuneParam を参照） */
  code: string;
}

/**
 * つまみ（数値を変えて試す）。見本には CSS 変数 --t-<key> として渡る（例: --t-dur: 0.2s）。
 * code と prompt の中の差し込み口:
 *   {{key}}    → CSSに書く形（値＋単位。例 0.2s / 6px / #f06a35）
 *   {{key:n}}  → 数だけ（例 0.2。JavaScript の中で使う）
 *   {{key:t}}  → 文章に書く形（日本語なら 0.2秒、英語なら 0.2s。色・選択肢は表示名）
 */
export type TuneParam =
  | {
      key: string;
      type?: 'range';
      label: string;
      min: number;
      max: number;
      step: number;
      value: number;
      /** CSS の単位（'' なら単位なし） */
      unit: 's' | 'ms' | 'px' | '%' | 'deg' | 'em' | '';
    }
  | { key: string; type: 'color'; label: string; value: string }
  | { key: string; type: 'select'; label: string; value: string; options: { value: string; label: string }[] };

export interface Ugoki {
  slug: string;
  /** 図鑑の通し番号（1〜） */
  no: number;
  category: UgokiCategory | UiCategory | ShiryoCategory;
  /** いちばん通じる呼び名（日本語版は日本語、英語版は英語） */
  name: string;
  /** もう一方の言語での呼び名（日本語版には英語名、英語版には日本語名） */
  en: string;
  /** ほかの呼び方（検索・一覧の絞り込みにも使う） */
  aka: string[];
  /** 見本の動かし方（UgFrame の mode）。資料レイアウトの図鑑は 'static'（自動再生なし） */
  mode: 'scroll' | 'pointer' | 'loop' | 'script' | 'static';
  /** <title>（検索結果に出る） */
  title: string;
  /** meta description */
  description: string;
  /** 一言でいうと（一覧カードにも出る） */
  oneLine: string;
  /** どんな動き・部品か */
  what: string[];
  /** こんなときに使う */
  when: string[];
  /** 使わない方がいいとき */
  avoid: string[];
  /** AIへの頼み方（そのまま貼れる指示文。{{key:t}} を書ける） */
  prompt: string;
  /** 作り方の説明 */
  howTo: string[];
  code: CodeBlock[];
  /** つまみ（2〜4個。無い項目もある） */
  tune?: TuneParam[];
  /** 気をつけること */
  cautions: string[];
  /** 似ている項目との違い。book を書けばほかの図鑑を指せる。まだ無い slug は記事に出ない（後で項目が増えたら自動で出る） */
  similar: { slug: string; diff: string; book?: 'ugoki' | 'ui' | 'shiryo' }[];
  faq: { q: string; a: string }[];
  publishedAt: string;
  updatedAt?: string;
}

export const CATEGORIES: { id: UgokiCategory; name: string; short: string; desc: string }[] = [
  { id: 'scroll', name: 'スクロールで起きる演出', short: 'スクロール', desc: '読み進めるのに合わせて動く' },
  { id: 'pointer', name: 'マウス・タップへの反応', short: 'マウス・タップ', desc: '触ったことが伝わる' },
  { id: 'load', name: '読み込み・移動・動き続ける演出', short: '読み込み・移動', desc: '待ち時間と場面転換を整える' },
  { id: 'inform', name: '知らせる・見せ方を切り替える演出', short: '知らせる・切り替え', desc: '状態の変化を伝える' },
];
