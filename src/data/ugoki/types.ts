// 動きの図鑑（/ugoki/）の1項目。1演出＝1ファイル（src/data/ugoki/entries/<slug>.ts）。
// 見本は src/components/ugoki/demos/<slug>.astro（ファイル名＝slug）。

export type UgokiCategory = 'scroll' | 'pointer' | 'load' | 'inform';

export interface CodeBlock {
  lang: 'html' | 'css' | 'js';
  /** 見出し（例:「HTML」「CSS」「JavaScript（30行）」） */
  label: string;
  code: string;
}

export interface Ugoki {
  slug: string;
  /** 図鑑の通し番号（1〜） */
  no: number;
  category: UgokiCategory;
  /** 日本語の呼び名（いちばん通じる言い方） */
  name: string;
  /** 英語の呼び名（AIや海外の資料で通じる言い方） */
  en: string;
  /** ほかの呼び方（検索・一覧の絞り込みにも使う） */
  aka: string[];
  /** 見本の動かし方（UgFrame の mode） */
  mode: 'scroll' | 'pointer' | 'loop' | 'script';
  /** <title>（検索結果に出る。32〜40字目安。「〜とは」「作り方」など検索される語を前に） */
  title: string;
  /** meta description（80〜120字） */
  description: string;
  /** 一言でいうと（40字以内。一覧カードにも出る） */
  oneLine: string;
  /** どんな動きか（見本の補足。2〜3文の段落を1〜3個） */
  what: string[];
  /** こんなときに使う（具体的な場面。3〜5個） */
  when: string[];
  /** 使わない方がいいとき（2〜4個） */
  avoid: string[];
  /** AIへの頼み方（そのまま貼れる指示文） */
  prompt: string;
  /** 作り方の説明（コードの前に置く1〜2段落） */
  howTo: string[];
  code: CodeBlock[];
  /** 気をつけること（表示速度・スマホ・読み上げ・動きを減らす設定など。3〜5個） */
  cautions: string[];
  /** 似ている演出との違い */
  similar: { slug: string; diff: string }[];
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
