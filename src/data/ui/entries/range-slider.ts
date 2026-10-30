import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'range-slider',
  no: 18,
  category: 'input',
  name: 'スライダー',
  en: 'Range slider',
  aka: ['レンジスライダー', 'シークバー', 'つまみ', 'input range'],
  mode: 'script',
  title: 'スライダー（input type=range）の使いどころとCSSの整え方',
  description:
    'スライダー（レンジスライダー）を触れる見本で解説。数字の入力欄との使い分け、<input type="range">の見た目をCSSで整える方法、刻み（step）の決め方、矢印キーでの操作と金額の読み上げまでまとめました。',
  oneLine: 'つまみを左右に動かして、決まった範囲の中から値を選ぶ。',
  what: [
    '横に引いた線の上の丸い「つまみ」を動かして、最小から最大までの範囲の中の値を選ぶ部品です。見本では「1泊の予算（上限）」のつまみを動かすと、金額の表示と「6件中 3件」の件数、下の宿の一覧が、動かしている最中から変わります。',
    'スライダーが得意なのは「だいたいこのくらい」をすばやく選ぶことです。正確に「12,345円」と打ちたいときは、数字の入力欄の方が速く確実です。そのため、絞り込みの予算・音量・明るさ・写真の加工の強さのように、結果を見ながら少しずつ調整するものに向きます。動かすたびに結果がすぐ変わる「即時反映」が基本で、反映に時間がかかる処理なら、指を離したとき（change）にだけ反映します。',
    '決まりごととして、つまみの横か上には今の値を文字で常に出します。キーボードでは左右（上下）の矢印キーで1刻みずつ、Home と End で端まで動かします。HTML の <input type="range"> を使えば、この操作と、読み上げソフトへの「スライダー、15000」の伝達が最初からそろいます。金額などは aria-valuetext で「15,000円」と読ませます。',
  ],
  when: [
    '宿・不動産・中古車の検索で、予算の上限や広さを結果を見ながら絞り込むとき',
    '音量・明るさ・文字の大きさのように、変化を見ながら好みに合わせるとき',
    '写真の加工アプリで、ぼかしや明るさの強さを調整するとき',
    'ローンの返済額のシミュレーションで、借入額や年数を動かして比べたいとき',
  ],
  avoid: [
    '正確な数字を入れてほしいとき（生年月日・郵便番号・金額ぴったり。入力欄にする）',
    '範囲が広く、刻みが細かすぎるとき（0〜100万円を1円刻み、のように指で狙えない）',
    '選択肢が3〜5個しかないとき（セグメントコントロールやラジオボタンの方が一目で分かる）',
  ],
  prompt:
    '宿の検索に「1泊の予算（上限）」を選ぶ「スライダー（range slider）」を作ってください。HTMLの <input type="range" min="5000" max="40000" step="{{step:n}}"> を使い、label で項目名を常に表示し、今の金額を output 要素で「15,000円」のように出してください。見た目はCSSで整え、線の太さは{{track:t}}、つまみは直径{{thumb:t}}の丸にし、選んだところまでの線を色で塗ってください（Chrome・Safari・Firefox のすべてで同じ見た目に）。押せる高さは44px以上にしてください。動かしている最中（input イベント）に検索結果の件数を更新し、読み上げ用に aria-valuetext で「15,000円」と伝えてください。矢印キーで{{step:t}}円ずつ動き、焦点の枠線が見えるようにしてください。',
  howTo: [
    'HTML の <input type="range"> が土台です。min・max・step を書くだけで、ドラッグ・タップ・矢印キー・Home／End での操作と、読み上げソフトへの値の伝達がそろいます。値は文字にして横に出し、label で何の値かを常に示します。',
    '見た目は CSS で変えます。appearance: none で標準の見た目を消し、線は input 自体の背景、つまみは ::-webkit-slider-thumb（Chrome・Safari）と ::-moz-range-thumb（Firefox）に同じ指定を書きます。選んだところまでの塗りは、値を割合にした CSS変数（--p）を JavaScript で入れ、背景のグラデーションで描きます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<label for="budget">1泊の予算（上限）</label>
<output for="budget" class="budget-value">15,000円</output>
<input type="range" id="budget" class="slider"
  min="5000" max="40000" step="{{step:n}}" value="15000"
  aria-valuetext="15,000円">
<p class="budget-count" aria-live="polite">6件中 3件</p>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.slider {
  --p: 0.29; /* 選んだ割合（0〜1）。JavaScript で入れる */
  --thumb: {{thumb}};
  width: 100%;
  height: 44px; /* 押せる高さ */
  margin: 0;
  appearance: none;
  background: transparent;
  cursor: pointer;
}
/* 線（選んだところまでを塗る） */
.slider::-webkit-slider-runnable-track {
  height: {{track}};
  border-radius: 999px;
  background: linear-gradient(to right, #f06a35 calc(var(--p) * 100%), #dedcd5 0);
}
.slider::-moz-range-track {
  height: {{track}};
  border-radius: 999px;
  background: linear-gradient(to right, #f06a35 calc(var(--p) * 100%), #dedcd5 0);
}
/* つまみ */
.slider::-webkit-slider-thumb {
  appearance: none;
  width: var(--thumb);
  height: var(--thumb);
  margin-top: calc(({{track}} - var(--thumb)) / 2); /* 線の真ん中に置く */
  border: 2px solid #f06a35;
  border-radius: 50%;
  background: #fff;
}
.slider::-moz-range-thumb {
  width: var(--thumb);
  height: var(--thumb);
  border: 2px solid #f06a35;
  border-radius: 50%;
  background: #fff;
}
.slider:focus-visible { outline: 3px solid #4f73d9; outline-offset: 4px; }`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const slider = document.querySelector('#budget');
const out = document.querySelector('.budget-value');
const yen = (v) => Number(v).toLocaleString('ja-JP') + '円';
// 一覧の絞り込み（中身はサイトに合わせて書き換える）
const updateResults = (max) => {
  console.log(max + '円以下で絞り込み');
};

const update = () => {
  const p = (slider.value - slider.min) / (slider.max - slider.min);
  slider.style.setProperty('--p', p);
  out.textContent = yen(slider.value);
  slider.setAttribute('aria-valuetext', yen(slider.value)); // 読み上げ用
  // 動かしている最中から件数を更新（重い処理なら 'change' で）
  updateResults(Number(slider.value));
};
slider.addEventListener('input', update);
update();`,
    },
  ],
  tune: [
    { key: 'thumb', label: 'つまみの大きさ', min: 16, max: 36, step: 2, value: 24, unit: 'px' },
    { key: 'track', label: '線の太さ', min: 2, max: 12, step: 1, value: 6, unit: 'px' },
    { key: 'step', label: '刻み（円）', min: 500, max: 5000, step: 500, value: 1000, unit: '' },
  ],
  cautions: [
    'つまみの見た目が小さくても、押せる高さは44px以上にします。input の高さを44pxにして、線とつまみはその中に描くのが簡単です。',
    '今の値は必ず文字で出します。線の上の位置だけでは「いくらなのか」が分かりません。最小と最大の値も両端に書いておくと、範囲がつかめます。',
    'スマホでは、縦にスクロールしようとして横のスライダーを誤って動かしやすくなります。画面の端から端まで広げすぎず、上下に余白を取ります。',
    'input イベントは動かしている間ずっと飛びます。検索をサーバーに問い合わせるような重い処理は、change イベント（指を離したとき）か、少し待ってから実行する工夫（デバウンス）にします。',
    '読み上げソフトは値を数字のまま読むので、金額や「弱・中・強」のような意味のある値は aria-valuetext で言い換えます。',
  ],
  similar: [
    { slug: 'quantity-stepper', diff: '数量ステッパーは「−」「＋」で1つずつ増減する部品です。1〜10個のように範囲が狭く、正確な数が大事なときはステッパーが向きます。' },
    { slug: 'segmented-control', diff: 'セグメントコントロールは決まった2〜5個の選択肢から選びます。選択肢が少ないなら、スライダーより迷いません。' },
    { slug: 'before-after', book: 'ugoki', diff: 'ビフォーアフタースライダーは、つまみを動かして2枚の写真の境目を動かす演出です。値を選ぶ部品ではなく、見比べるための見せ方です。' },
  ],
  faq: [
    {
      q: '最小値と最大値の両方を選べるスライダー（つまみ2つ）は作れますか？',
      a: 'HTML の <input type="range"> はつまみが1つだけです。「5,000円〜15,000円」のように範囲を選ぶには、range を2本重ねて JavaScript で交差しないようにするのが手軽な方法です。ただ操作が細かくなるので、スマホでは「下限」と「上限」の入力欄やセレクトを並べる方が使いやすいこともあります。',
    },
    {
      q: 'スライダーの色を変えるだけなら簡単な方法はありますか？',
      a: 'あります。accent-color: #f06a35; を1行書くだけで、つまみと塗りの色が変わります。大きさや形まで変えたいときに、この記事のように appearance: none から作り直します。',
    },
    {
      q: 'スマホで動かしにくいと言われました。どうすればいいですか？',
      a: 'つまみと押せる範囲を大きくし（つまみ24px以上・高さ44px以上）、刻みを粗くします。細かい値が必要なら、スライダーの横に数字の入力欄を並べて、どちらでも入れられるようにすると親切です。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
