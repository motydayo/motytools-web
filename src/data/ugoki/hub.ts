// 動きの図鑑の一覧ページ（/ugoki/・/en/motion/）の文章。{n} は項目数に置き換わる。
import type { Category, HubText } from '../zukan';

export const UGOKI_CATS_JA: Category[] = [
  { id: 'scroll', name: 'スクロールで起きる演出', short: 'スクロール', desc: '読み進めるのに合わせて動く' },
  { id: 'pointer', name: 'マウス・タップへの反応', short: 'マウス・タップ', desc: '触ったことが伝わる' },
  { id: 'load', name: '読み込み・移動・動き続ける演出', short: '読み込み・移動', desc: '待ち時間と場面転換を整える' },
  { id: 'inform', name: '知らせる・見せ方を切り替える演出', short: '知らせる・切り替え', desc: '状態の変化を伝える' },
];

export const UGOKI_CATS_EN: Category[] = [
  { id: 'scroll', name: 'Scroll-driven effects', short: 'Scroll', desc: 'Move as the reader scrolls' },
  { id: 'pointer', name: 'Hover, click and tap feedback', short: 'Hover & tap', desc: 'Show that an action registered' },
  { id: 'load', name: 'Loading, transitions and ambient motion', short: 'Loading & transitions', desc: 'Smooth over waits and scene changes' },
  { id: 'inform', name: 'Feedback and view switching', short: 'Feedback', desc: 'Signal that something changed' },
];

export const UGOKI_HUB_JA: HubText = {
  title: 'Webサイトの動き・演出の名前一覧{n}種｜動く見本とAIへの頼み方',
  description:
    '追従ヘッダー・ピン留め・パララックス・マーキーなど、LPやWebサイトでよく使う動きの演出{n}種を、動く見本つきで名前から引ける図鑑です。数値を変えて試せて、CSSとJavaScriptのコード、ClaudeやChatGPTに頼むときの指示文までそのままコピーできます。',
  h1: 'Webの動きの図鑑',
  lead: 'LP・Webサイト・アプリでよく見る動きの演出{n}種を、動く見本と名前で引けます。どんなときに使うか、数値を変えて試せる作り方のコード、AIに頼むときの指示文つきです。',
  searchLabel: '演出の名前で探す',
  searchPlaceholder: '例: ヘッダー、ホバー、sticky',
  all: 'すべて',
  empty: '見つかりませんでした。「ヘッダー」「スクロール」「ボタン」のように短い言葉で探すか、絞り込みを解除してください。',
  clear: '絞り込みを解除',
  guide: {
    heading: '名前で頼むと、狙った動きになる',
    paragraphs: [
      'AIにサイトを作ってもらうとき、「おしゃれに動かして」と頼むと、動きは毎回ばらばらで、多すぎたり場違いだったりします。演出には名前があります。名前と、どこに・どれくらいの速さでを添えて頼むと、思ったとおりの動きが返ってきます。',
    ],
    steps: [
      { b: '名前を日本語と英語の両方で書く', s: '「追従ヘッダー（sticky header）」のように。片方だけより取り違えが減ります。' },
      { b: 'どこに付けるかを書く', s: '「料金カードに」「各セクションの見出しに」。全部に付けると騒がしくなります。' },
      { b: '速さと距離を数字で書く', s: '「0.3秒」「下から16px」。小さな変化は0.2秒前後、場面の切り替えは0.3秒前後が目安です。各ページのつまみで、ちょうどいい数値を探せます。' },
      { b: '動きを減らす設定への配慮を書く', s: '「視差効果を減らす設定の人には動かさない」と一言添えます。' },
    ],
    exampleLead: 'たとえば次のように頼みます。',
    example: `トップページを作ってください。動きは次の4つだけにしてください。
1. ヘッダーは「追従ヘッダー（sticky header）」にして、スクロールしたら薄い影を付ける
2. 各セクションの見出しと本文は「スクロールでフェードイン（fade-in on scroll）」させる（下から16px、0.5秒、1回だけ）
3. 料金カードは「ホバーで浮き上がる（hover lift）」（上に6px、0.2秒）
4. 実績ロゴは「マーキー（marquee）」で左へ流し続け、マウスを乗せたら止める
端末で「視差効果を減らす」設定がオンの人には、どの動きも出さずに最初から表示してください。`,
    copyLabel: 'この頼み方をコピー',
  },
  faq: [
    {
      q: 'Webサイトの動きの演出は、何と呼べばAIに伝わりますか？',
      a: 'この図鑑の各ページにある日本語名と英語名をそのまま使ってください。たとえば「追従ヘッダー（sticky header）」「マーキー（marquee）」のように両方を書くと、ClaudeやChatGPTでも取り違えが起きにくくなります。動く速さ（0.3秒など）や距離（16pxなど）まで書くと、さらに狙いどおりになります。',
    },
    {
      q: '演出はたくさん入れた方がいいですか？',
      a: 'いいえ。1ページで目立つ演出は2〜3種類までにするのがおすすめです。動きが多いと、読む人の目がどこに行けばいいか分からなくなり、表示も重くなります。「操作したことが伝わる」「次に読む場所が分かる」など、意味のある動きだけを残してください。',
    },
    {
      q: 'CSSだけで作れる演出はどれですか？',
      a: '追従ヘッダー・ピン留め・スクロールスナップ・ホバーで浮き上がる・ホバーで画像ズーム・下線アニメーション・マーキー・グラデーションアニメーション・ふわふわアニメーション・スムーススクロール・アコーディオンなどは、CSS（とHTML）だけで作れます。各ページの「作り方」に、そのまま使えるコードを載せています。',
    },
    {
      q: '動きが苦手な人への配慮は必要ですか？',
      a: '必要です。スマホやパソコンには「視差効果を減らす（動きを減らす）」設定があり、乗り物酔いのような症状が出る人が使っています。CSSの @media (prefers-reduced-motion: reduce) で、その設定の人には動きを止めるか弱めてください。この図鑑のコードはすべてこの配慮を前提にしています。',
    },
  ],
};

export const UGOKI_HUB_EN: HubText = {
  title: '{n} Web Animation Effects by Name: Live Demos, Code & AI Prompts',
  description:
    'Sticky headers, pinning, parallax, marquees and more: {n} common website animation effects, each with a live demo you can tweak, copy-ready CSS and JavaScript, and a prompt you can paste into Claude or ChatGPT.',
  h1: 'Web Motion Library',
  lead: '{n} animation effects you see on landing pages, websites and apps — each with a live demo, its proper name, when to use it, tweakable code and a ready-to-paste AI prompt.',
  searchLabel: 'Search effects by name',
  searchPlaceholder: 'e.g. header, hover, sticky',
  all: 'All',
  empty: 'Nothing matched. Try a short word like “header”, “scroll” or “button”, or clear the filters.',
  clear: 'Clear filters',
  guide: {
    heading: 'Name the effect, get the effect',
    paragraphs: [
      'Ask an AI to “add some nice animations” and you get something different every time — usually too much, often in the wrong places. Every one of these effects has a name. Use the name, say where it goes and how fast it moves, and you get what you pictured.',
    ],
    steps: [
      { b: 'Use the exact name', s: '“Sticky header”, not “a header that stays at the top”. Names leave far less room for guessing.' },
      { b: 'Say where it goes', s: '“On the pricing cards”, “on each section heading”. Animating everything makes a page feel noisy.' },
      { b: 'Give numbers for speed and distance', s: '“0.3s”, “16px from below”. Small changes feel right around 0.2s; scene changes around 0.3s. The sliders on each page help you find the sweet spot.' },
      { b: 'Ask for reduced-motion support', s: 'Add “don’t animate for people who have Reduce Motion turned on.”' },
    ],
    exampleLead: 'For example:',
    example: `Build the home page with only these four animations:
1. Make the header a sticky header and add a soft shadow once the page scrolls.
2. Fade in each section heading and body text on scroll (16px up, 0.5s, once only).
3. Give the pricing cards a hover lift (6px up, 0.2s).
4. Run the client logos in a marquee that scrolls left continuously and pauses on hover.
For visitors with Reduce Motion turned on, skip all of these and show everything in its final state.`,
    copyLabel: 'Copy this prompt',
  },
  faq: [
    {
      q: 'What should I call an animation so an AI understands it?',
      a: 'Use the name at the top of each page — “sticky header”, “marquee”, “scroll snap”. Add the speed (like 0.3s) and distance (like 16px) and Claude or ChatGPT will get very close to what you had in mind on the first try.',
    },
    {
      q: 'How many animations should one page have?',
      a: 'Two or three noticeable ones is plenty. Too much motion makes it hard to know where to look and slows the page down. Keep the ones that mean something — confirming a click, pointing to what to read next.',
    },
    {
      q: 'Which of these can be built with CSS only?',
      a: 'Sticky headers, pinning, scroll snap, hover lift, image zoom on hover, underline animations, marquees, animated gradients, floating animations, smooth scrolling and accordions all work with plain CSS and HTML. Each page has copy-ready code.',
    },
    {
      q: 'Do I need to support people who turn motion off?',
      a: 'Yes. Phones and computers have a Reduce Motion setting used by people who get dizzy or nauseous from movement on screen. Wrap your animations in @media (prefers-reduced-motion: no-preference), or turn them off inside prefers-reduced-motion: reduce. All the code here already does this.',
    },
  ],
};
