// UI部品の図鑑の一覧ページ（/ui/・/en/ui/）の文章。{n} は項目数に置き換わる。
import type { Category, HubText } from '../zukan';

export const UI_CATS_JA: Category[] = [
  { id: 'overlay', name: '画面の上に重なって出る部品', short: '重なって出る', desc: '今の画面を残したまま、別の中身を見せる' },
  { id: 'nav', name: '移動・案内の部品', short: '移動・案内', desc: '今どこにいて、次にどこへ行けるかを示す' },
  { id: 'input', name: '入力・選択の部品', short: '入力・選択', desc: '迷わず、間違えずに選んでもらう' },
  { id: 'display', name: '見せる・伝える部品', short: '見せる・伝える', desc: '情報をまとめて、ひと目で伝える' },
];

export const UI_CATS_EN: Category[] = [
  { id: 'overlay', name: 'Overlays', short: 'Overlays', desc: 'Show something new without leaving the page' },
  { id: 'nav', name: 'Navigation', short: 'Navigation', desc: 'Where you are and where you can go next' },
  { id: 'input', name: 'Inputs and selection', short: 'Inputs', desc: 'Help people choose quickly and correctly' },
  { id: 'display', name: 'Content display', short: 'Display', desc: 'Pack information so it reads at a glance' },
];

export const UI_HUB_JA: HubText = {
  title: 'UI部品の名前一覧{n}種｜モーダル・ドロワー・トグルの違いを動く見本で',
  description:
    'モーダル・ドロワー・ボトムシート・トグルスイッチ・パンくずリストなど、Webサイトやアプリでよく使うUI部品{n}種の名前を、触れる見本つきで引ける図鑑です。使い分け、HTML・CSS・JavaScriptのコード、AIに頼むときの指示文までまとめています。',
  h1: 'UI部品の図鑑',
  lead: 'Webサイトやアプリでよく使う画面の部品{n}種を、触れる見本と名前で引けます。似た部品との使い分け、作り方のコード、AIに頼むときの指示文つきです。',
  searchLabel: '部品の名前で探す',
  searchPlaceholder: '例: メニュー、切り替え、modal',
  all: 'すべて',
  empty: '見つかりませんでした。「メニュー」「選ぶ」「小窓」のように短い言葉で探すか、絞り込みを解除してください。',
  clear: '絞り込みを解除',
  guide: {
    heading: '部品の名前が分かると、伝わる',
    paragraphs: [
      '「下から出てくるやつ」「ON/OFFのあれ」では、AIにも制作会社にも伝わりません。画面の部品にはそれぞれ名前があり、名前ごとに「こう動くのが普通」という約束があります。名前で頼めば、見た目だけでなく、閉じ方やキーボード操作のような細かいところまで一度でそろいます。',
    ],
    steps: [
      { b: '部品の名前を日本語と英語で書く', s: '「ボトムシート（bottom sheet）」のように。似た部品（モーダル・ドロワー）との取り違えが減ります。' },
      { b: '中に何を入れるかを書く', s: '「並び替えの選択肢を4つ」のように中身を書くと、大きさや置き場所が決まります。' },
      { b: '開け方と閉じ方を書く', s: '「ボタンで開く。×・背景・Escキーで閉じる」。閉じ方が足りない部品は迷子を生みます。' },
      { b: 'キーボードと読み上げへの配慮を書く', s: '「キーボードだけで操作でき、読み上げにも名前が伝わるように」と一言添えます。' },
    ],
    exampleLead: 'たとえば次のように頼みます。',
    example: `商品一覧ページに次の部品を作ってください。
1. 並び替えは「ボトムシート（bottom sheet）」にする。スマホで画面下からせり上がり、選択肢は「おすすめ順・新着順・安い順・高い順」の4つ。×・背景・下へのスワイプ・Escキーで閉じる
2. 表示の切り替えは「セグメントコントロール（segmented control）」で「一覧・写真」の2つ
3. 絞り込み中の条件は「チップ（chips）」で並べ、それぞれ×で外せるようにする
どの部品もキーボードだけで操作でき、読み上げソフトに役割と状態が伝わるようにしてください。`,
    copyLabel: 'この頼み方をコピー',
  },
  faq: [
    {
      q: 'モーダル・ドロワー・ボトムシートは何が違いますか？',
      a: '出てくる場所と役割が違います。モーダルは画面の真ん中に出て、閉じるまで後ろを操作できない「確認・入力用」の小窓です。ドロワーは画面の端（多くは左右）から引き出す「メニュー用」の板です。ボトムシートはスマホの画面下からせり上がる板で、親指が届く位置に選択肢を並べたいときに使います。',
    },
    {
      q: 'UI部品の名前は、日本語と英語のどちらで覚えればいいですか？',
      a: '両方が便利です。日本の現場ではカタカナ（モーダル・ドロワー）で通じますが、AIや海外の資料では英語名（modal, drawer）の方が正確に伝わります。この図鑑の各ページでは両方を並べています。',
    },
    {
      q: 'HTMLだけで作れる部品はありますか？',
      a: 'あります。モーダルは <dialog>、アコーディオンは <details> と <summary>、スライダーは <input type="range">、日付の入力は <input type="date"> と、HTMLにもともと用意された部品があります。キーボード操作や読み上げへの対応が最初から入っているので、まずはこれらを土台にするのがおすすめです。',
    },
    {
      q: '部品はたくさん使った方が親切ですか？',
      a: 'いいえ。1つの画面に重なって出る部品（モーダルやポップアップ）が多いと、利用者は何を閉じればいいか迷います。同じ役割には同じ部品を使い、画面ごとに部品の種類を絞った方が、迷わず使えるサイトになります。',
    },
  ],
};

export const UI_HUB_EN: HubText = {
  title: '{n} UI Component Names Explained: Modal vs Drawer vs Bottom Sheet & More',
  description:
    'Modals, drawers, bottom sheets, toggle switches, breadcrumbs and more: {n} common UI components with interactive demos, when to use which, copy-ready HTML, CSS and JavaScript, and prompts you can paste into an AI.',
  h1: 'UI Component Library',
  lead: '{n} interface components you use on websites and apps — each with a hands-on demo, its proper name, how it differs from look-alikes, the code, and a ready-to-paste AI prompt.',
  searchLabel: 'Search components by name',
  searchPlaceholder: 'e.g. menu, toggle, modal',
  all: 'All',
  empty: 'Nothing matched. Try a short word like “menu”, “select” or “popup”, or clear the filters.',
  clear: 'Clear filters',
  guide: {
    heading: 'Know the name, get the right component',
    paragraphs: [
      '“The thing that slides up from the bottom” or “that on/off switch” leaves an AI — or a developer — guessing. Every interface component has a name, and each name comes with expectations about how it behaves. Ask by name and you get the details right in one go: how it opens, how it closes, how it works with a keyboard.',
    ],
    steps: [
      { b: 'Use the exact name', s: '“Bottom sheet”, not “a popup at the bottom”. It keeps the AI from mixing it up with a modal or a drawer.' },
      { b: 'Say what goes inside', s: '“Four sort options” tells it how big the component should be and where it belongs.' },
      { b: 'Say how it opens and closes', s: '“Opens from a button; closes with ×, a tap on the backdrop, or Esc.” A component without enough ways out traps people.' },
      { b: 'Ask for keyboard and screen-reader support', s: 'Add “usable with the keyboard alone, with roles and states announced to screen readers.”' },
    ],
    exampleLead: 'For example:',
    example: `On the product list page, build these components:
1. Put sorting in a bottom sheet that slides up from the bottom on phones, with four options: Recommended, Newest, Price: low to high, Price: high to low. Close it with ×, a tap on the backdrop, a downward swipe, or Esc.
2. Add a segmented control with two options, List and Grid, to switch the view.
3. Show active filters as chips, each with an × to remove it.
Every component must work with the keyboard alone and announce its role and state to screen readers.`,
    copyLabel: 'Copy this prompt',
  },
  faq: [
    {
      q: 'What is the difference between a modal, a drawer and a bottom sheet?',
      a: 'Where they appear and what they are for. A modal opens in the middle of the screen and blocks the page behind it until you close it — use it for confirmations and short forms. A drawer slides in from a side edge, usually for navigation. A bottom sheet rises from the bottom of a phone screen so options sit within thumb reach.',
    },
    {
      q: 'Which components can I build with HTML alone?',
      a: 'More than you might think: <dialog> gives you a modal, <details> and <summary> an accordion, <input type="range"> a slider and <input type="date"> a date picker. They come with keyboard support and screen-reader semantics built in, so start from these whenever you can.',
    },
    {
      q: 'Why do names matter when prompting an AI?',
      a: 'Because each name carries conventions. Ask for a “modal” and you implicitly ask for a focus trap, Esc to close and a backdrop. Ask for “a box that pops up” and you may get none of that. The name is a compact spec.',
    },
    {
      q: 'Is it more helpful to use lots of different components?',
      a: 'No. Stacking several overlays on one screen leaves people unsure what to close first. Use the same component for the same job everywhere and keep the variety per screen low — that is what makes an interface feel easy.',
    },
  ],
};
