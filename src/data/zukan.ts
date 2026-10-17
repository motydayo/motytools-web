// 図鑑の「本」の設定。3冊（動き・UI部品・資料レイアウト）× 2言語（日本語・英語）。資料レイアウトは今は日本語だけ。
// ページのひな形（src/components/zukan/）はここだけを見て組み立てる。
import type { Lang, Ugoki } from './ugoki/types';
export type { Lang, Ugoki } from './ugoki/types';

export type BookId = 'ugoki' | 'ui' | 'shiryo';

export interface Category {
  id: string;
  name: string;
  short: string;
  desc: string;
}

export interface HubText {
  title: string;
  description: string;
  h1: string;
  lead: string;
  searchLabel: string;
  searchPlaceholder: string;
  all: string;
  empty: string;
  clear: string;
  guide: { heading: string; paragraphs: string[]; steps: { b: string; s: string }[]; exampleLead: string; example: string; copyLabel: string };
  faq: { q: string; a: string }[];
}

export interface Book {
  id: BookId;
  lang: Lang;
  /** 例 '/ugoki/'・'/en/motion/' */
  base: string;
  /** もう一方の言語の同じ本 */
  altBase: string;
  /** パンくず・見出しに出す本の名前 */
  name: string;
  categories: Category[];
  entries: Ugoki[];
  hub: HubText;
}

const load = (mods: Record<string, { default: Ugoki }>) =>
  Object.values(mods)
    .map((m) => m.default)
    .sort((a, b) => a.no - b.no);

const UGOKI_JA = load(import.meta.glob<{ default: Ugoki }>('./ugoki/entries/*.ts', { eager: true }));
const UGOKI_EN = load(import.meta.glob<{ default: Ugoki }>('./ugoki/entries-en/*.ts', { eager: true }));
const UI_JA = load(import.meta.glob<{ default: Ugoki }>('./ui/entries/*.ts', { eager: true }));
const UI_EN = load(import.meta.glob<{ default: Ugoki }>('./ui/entries-en/*.ts', { eager: true }));
const SHIRYO_JA = load(import.meta.glob<{ default: Ugoki }>('./shiryo/entries/*.ts', { eager: true }));
const SHIRYO_EN = load(import.meta.glob<{ default: Ugoki }>('./shiryo/entries-en/*.ts', { eager: true }));

import { UGOKI_CATS_JA, UGOKI_CATS_EN, UGOKI_HUB_JA, UGOKI_HUB_EN } from './ugoki/hub';
import { UI_CATS_JA, UI_CATS_EN, UI_HUB_JA, UI_HUB_EN } from './ui/hub';
import { SHIRYO_CATS_JA, SHIRYO_CATS_EN, SHIRYO_HUB_JA, SHIRYO_HUB_EN } from './shiryo/hub';

export const BOOKS: Record<BookId, Record<Lang, Book>> = {
  ugoki: {
    ja: { id: 'ugoki', lang: 'ja', base: '/ugoki/', altBase: '/en/motion/', name: '動きの図鑑', categories: UGOKI_CATS_JA, entries: UGOKI_JA, hub: UGOKI_HUB_JA },
    en: { id: 'ugoki', lang: 'en', base: '/en/motion/', altBase: '/ugoki/', name: 'Web Motion Library', categories: UGOKI_CATS_EN, entries: UGOKI_EN, hub: UGOKI_HUB_EN },
  },
  ui: {
    ja: { id: 'ui', lang: 'ja', base: '/ui/', altBase: '/en/ui/', name: 'UI部品の図鑑', categories: UI_CATS_JA, entries: UI_JA, hub: UI_HUB_JA },
    en: { id: 'ui', lang: 'en', base: '/en/ui/', altBase: '/ui/', name: 'UI Component Library', categories: UI_CATS_EN, entries: UI_EN, hub: UI_HUB_EN },
  },
  // 英語版（/en/slides/）は項目がまだ0件。0件の間は hasAlt が false なのでリンクも hreflang も出ない
  shiryo: {
    ja: { id: 'shiryo', lang: 'ja', base: '/shiryo/', altBase: '/en/slides/', name: '資料レイアウトの図鑑', categories: SHIRYO_CATS_JA, entries: SHIRYO_JA, hub: SHIRYO_HUB_JA },
    en: { id: 'shiryo', lang: 'en', base: '/en/slides/', altBase: '/shiryo/', name: 'Slide Layout Library', categories: SHIRYO_CATS_EN, entries: SHIRYO_EN, hub: SHIRYO_HUB_EN },
  },
};

export const book = (id: BookId, lang: Lang) => BOOKS[id][lang];
const BOOK_ORDER: BookId[] = ['ugoki', 'ui', 'shiryo'];
/** ほかの本（項目が1件以上ある本だけ）。記事の末尾・一覧の頭の「〜も調べる」リンクに使う */
export const otherBooks = (id: BookId, lang: Lang): Book[] =>
  BOOK_ORDER.filter((x) => x !== id)
    .map((x) => BOOKS[x][lang])
    .filter((b) => b.entries.length > 0);

/** もう一方の言語に同じ slug のページがあるか（hreflang と言語切替に使う） */
export const hasAlt = (b: Book, slug?: string) => {
  const alt = BOOKS[b.id][b.lang === 'ja' ? 'en' : 'ja'];
  if (alt.entries.length === 0) return false;
  return slug ? alt.entries.some((e) => e.slug === slug) : true;
};

/** 画面の決まり文句（日英） */
export const T = {
  ja: {
    home: 'ホーム',
    english: 'English',
    other: '日本語',
    nameEn: '英語では',
    nameOther: 'ほかの呼び方',
    what: { ugoki: 'どんな動き？', ui: 'どんな部品？', shiryo: 'どんな型？' },
    usage: '使いどころ',
    when: 'こんなときに使う',
    avoid: '使わない方がいいとき',
    tuneHeading: '数値を変えて試す',
    tuneLead: 'つまみを動かすと、見本・下のコード・AIへの指示文が一緒に変わります。',
    tuneReset: '最初の値に戻す',
    prompt: 'AIへの頼み方',
    promptLead: {
      ugoki: 'ClaudeやChatGPTなどにサイトを作ってもらうときは、「いい感じにして」ではなく、名前と中身を指定すると狙いどおりになります。そのまま貼って使えます。',
      ui: 'ClaudeやChatGPTなどにサイトを作ってもらうときは、「いい感じにして」ではなく、名前と中身を指定すると狙いどおりになります。そのまま貼って使えます。',
      shiryo: 'ChatGPT・Claude・Gemini・Copilotなどに資料を作ってもらうときは、「わかりやすいスライドにして」ではなく、型の名前と「どこに何を置くか」を指定すると一発で整います。中身の数字や言葉を自分の資料に差し替えて貼ってください。',
    },
    promptCopy: '指示文をコピー',
    howto: '作り方',
    tunedNote: '上のつまみで変えた数値が、コードにもそのまま入ります。',
    copy: 'コピー',
    cautions: '気をつけること',
    similar: '似ているものとの違い',
    faq: 'よくある質問',
    updated: (d: string) => {
      const [y, m, dd] = d.split('-').map(Number);
      return `${y}年${m}月${dd}日更新`;
    },
    prev: '前へ',
    next: '次へ',
    more: (cat: string) => `${cat}のほかの項目`,
    all: (n: number) => `${n}種すべて見る`,
    /** ほかの本へのリンクの文言（行き先の本ごと） */
    otherBook: { ugoki: '動きの演出の名前も調べる', ui: 'UI部品の名前も調べる', shiryo: '資料レイアウトの名前も調べる' },
  },
  en: {
    home: 'Home',
    english: 'English',
    other: '日本語',
    nameEn: 'In Japanese',
    nameOther: 'Also called',
    what: { ugoki: 'What it does', ui: 'What it is', shiryo: 'What the layout is' },
    usage: 'When to use it',
    when: 'Good fit',
    avoid: 'Skip it when',
    tuneHeading: 'Tweak the numbers',
    tuneLead: 'Move a slider and the demo, the code below and the AI prompt all update together.',
    tuneReset: 'Reset to defaults',
    prompt: 'How to ask AI for it',
    promptLead: {
      ugoki: 'When you have Claude, ChatGPT or another AI build a page, “make it look nice” gets you random results. Name the pattern and spell out the details instead. Copy and paste this as is.',
      ui: 'When you have Claude, ChatGPT or another AI build a page, “make it look nice” gets you random results. Name the pattern and spell out the details instead. Copy and paste this as is.',
      shiryo: 'When you have ChatGPT, Claude, Gemini or Copilot make slides, “make it clear” gets you random results. Name the layout and say what goes where. Swap in your own numbers and words, then paste.',
    },
    promptCopy: 'Copy prompt',
    howto: 'How to build it',
    tunedNote: 'Whatever you set with the sliders above is already in this code.',
    copy: 'Copy',
    cautions: 'Watch out for',
    similar: 'Similar patterns',
    faq: 'FAQ',
    updated: (d: string) => {
      const dt = new Date(`${d}T00:00:00Z`);
      return `Updated ${dt.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })}`;
    },
    prev: 'Previous',
    next: 'Next',
    more: (cat: string) => `More in ${cat}`,
    all: (n: number) => `See all ${n}`,
    otherBook: { ugoki: 'Look up motion effect names too', ui: 'Look up UI component names too', shiryo: 'Look up slide layout names too' },
  },
} as const;
