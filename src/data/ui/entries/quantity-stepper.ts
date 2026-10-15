import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'quantity-stepper',
  no: 22,
  category: 'input',
  name: '数量ステッパー',
  en: 'Quantity stepper',
  aka: ['ステッパー', '数量選択', 'プラスマイナスボタン', 'スピンボタン', '数量カウンター'],
  mode: 'script',
  title: '数量ステッパー（＋−ボタン）の作り方｜数字入力との違いと上限の伝え方',
  description:
    '数量ステッパー（−と＋で数を増減する部品）を触れる見本で解説。入力欄・セレクトとの使い分け、<input type="number">を土台にした作り方、在庫の上限の伝え方、すぐ反映する場面と「カートに入れる」が要る場面をまとめました。',
  oneLine: '「−」と「＋」を押して、数を1つずつ増やしたり減らしたりする。',
  what: [
    '真ん中の数字を「−」と「＋」のボタンで挟み、押すたびに1つずつ増減させる部品です。見本のカートで「＋」を押すと数量が増え、下の合計金額がすぐに変わります。在庫の上限（残り5点）まで来ると「＋」が薄くなって押せなくなり、「在庫は残り5点です」と理由が出ます。1個より下には減らせません。',
    '似た部品は数字の入力欄とセレクトです。数字の入力欄は「120」のような大きな数を打つのに向き、セレクトは「1〜10」を一覧から選ぶ形です。ステッパーは「たいてい1〜3個、たまに少し増やす」という数量に向いていて、指1本で押すだけで済みます。見本のように真ん中を入力欄にしておけば、まとめて20個のようなときは直接打ち替えられます。',
    '反映のしかたは置き場所で変わります。カートの中なら、変えた瞬間に合計を更新する「即時反映」が自然です。商品ページなら、数を選んでから「カートに入れる」を押して初めて反映させます。決まりごととして、ボタンには「数量を1つ減らす（有田焼のマグカップ）」のような読み上げ用の名前を付け、真ん中の欄はキーボードの上下矢印でも増減できるようにします。<input type="number"> を使えば、矢印キーと「スピンボタン、2」の読み上げが最初から入っています。',
  ],
  when: [
    'ネットショップのカートで、商品ごとの数量をその場で変えてもらうとき',
    '商品ページで、「カートに入れる」の前に数量を選んでもらうとき',
    '飲食店の予約で、大人・子どもの人数を選んでもらうとき',
    'ホテル予約の「部屋数」「泊数」のように、小さな数を少しだけ変えるとき',
  ],
  avoid: [
    '数がよく大きく変わるとき（「500枚」のように、押して増やすのでは遠すぎる。数字の入力欄にする）',
    '範囲が決まっていない値や小数（金額・体重など。入力欄にする）',
    '選択肢が「S・M・L」のような数ではないもの（セグメントコントロールにする）',
  ],
  prompt:
    'ネットショップのカートの数量欄を「数量ステッパー（quantity stepper）」で作ってください。真ん中は <input type="number" inputmode="numeric" min="1" max="{{max:n}}"> にして直接打ち替えられるようにし、その左右に「−」「＋」の button を置いてください。ボタンは{{size:t}}四方の丸で、アイコンだけなので aria-label に「数量を1つ減らす（商品名）」のような名前を付けてください。押した瞬間に数量と合計金額を更新し、合計は aria-live で知らせてください。1のときは「−」、在庫の上限{{max:t}}個のときは「＋」を disabled にし、「在庫は残り{{max:t}}点です」と理由を表示してください。直接打ち替えた値は、打っている途中ではなく欄を離れたときに範囲へ収めてください。ブラウザ標準の小さな上下ボタンは消してください。',
  howTo: [
    '真ん中は <input type="number"> にします。min と max で範囲を決め、inputmode="numeric" でスマホに数字のキーボードを出します。矢印キーでの増減と、読み上げソフトへの「スピンボタン」の伝達はこれだけでそろいます。ブラウザ標準の小さな上下ボタンは押しにくいので CSS で消し、代わりに大きな「−」「＋」の button を両脇に置きます。',
    'JavaScript では、ボタンを押したら値を1つ増減して範囲に収め、合計を更新し、端に来たらその向きのボタンを disabled にします。打ち替えたときに範囲外の数（0 や 99）を直すのは change イベント（欄を離れたとき）にします。打っている途中で直すと、「12」と打とうとして「1」の時点で書き換わる、といった事故が起きます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="qty">
  <button type="button" class="step-btn" data-step="-1" aria-label="数量を1つ減らす（有田焼のマグカップ）">−</button>
  <input type="number" class="step-num" inputmode="numeric"
    min="1" max="{{max:n}}" step="1" value="2" aria-label="数量（有田焼のマグカップ）">
  <button type="button" class="step-btn" data-step="1" aria-label="数量を1つ増やす（有田焼のマグカップ）">＋</button>
</div>
<p class="step-msg"></p>
<p>合計 <strong class="cart-total" aria-live="polite">3,600円</strong></p>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.qty {
  display: inline-flex;
  align-items: center;
  border: 1.5px solid #c9c7c0;
  border-radius: 999px;
}
.step-btn {
  width: {{size}};
  height: {{size}};
  border: 0;
  border-radius: 999px;
  background: transparent;
  font-size: 18px;
  cursor: pointer;
}
.step-btn:active { transform: scale(0.9); background: #e4e2dc; }
.step-btn:disabled { color: #c9c7c0; cursor: not-allowed; }
.step-num {
  width: 2.6em;
  height: {{size}};
  border: 0;
  font-size: 16px; /* iPhone で拡大されないように */
  font-weight: 800;
  text-align: center;
  appearance: textfield; /* 標準の小さな上下ボタンを消す */
}
.step-num::-webkit-inner-spin-button,
.step-num::-webkit-outer-spin-button { appearance: none; margin: 0; }
.step-btn:focus-visible, .step-num:focus-visible { outline: 3px solid #4f73d9; outline-offset: -2px; }`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const num = document.querySelector('.step-num');
const msg = document.querySelector('.step-msg');
const total = document.querySelector('.cart-total');
const [dec, inc] = document.querySelectorAll('.step-btn');
const PRICE = 1800;

const update = () => {
  const q = Number(num.value);
  dec.disabled = q <= num.min;
  inc.disabled = q >= num.max;
  msg.textContent = q >= num.max ? \`在庫は残り\${num.max}点です\` : '';
  total.textContent = (q * PRICE).toLocaleString('ja-JP') + '円'; // すぐ反映
};
const set = (q) => {
  num.value = Math.min(Number(num.max), Math.max(Number(num.min), q));
  update();
};

document.querySelectorAll('.step-btn').forEach((b) => {
  b.addEventListener('click', () => set(Number(num.value) + Number(b.dataset.step)));
});
// 打ち替えは、欄を離れたときに範囲へ収める
num.addEventListener('change', () => set(Math.round(Number(num.value)) || 1));
update();`,
    },
  ],
  tune: [
    { key: 'size', label: 'ボタンの大きさ', min: 28, max: 56, step: 2, value: 44, unit: 'px' },
    { key: 'max', label: '上限（在庫数）', min: 3, max: 20, step: 1, value: 5, unit: '' },
  ],
  cautions: [
    'ボタンは見た目も押せる範囲も44px以上にします。−と＋は隣り合うので、小さいと押し間違えます。つまみで小さくしたときの押しにくさを確かめてください。',
    '上限・下限で押せなくするときは、理由を文字で出します。「＋」が薄くなっただけでは、在庫がないのか、1回に買える数の上限なのかが分かりません。',
    'カートで即時反映するときは、サーバーへの保存を押すたびに送らず、少し待ってからまとめて送ります。連打すると順番が入れ替わり、数がずれることがあります。',
    '「−」で0にしたら削除、という作りは便利ですが、うっかり消えてしまいます。0にせず、別に「削除」を置くか、削除したあとに「元に戻す」を出します。',
  ],
  similar: [
    { slug: 'range-slider', diff: 'スライダーは広い範囲の中で「だいたいこのくらい」を選ぶ部品です。1〜10個のような小さな数を正確に選ぶなら、ステッパーが向きます。' },
    { slug: 'segmented-control', diff: 'セグメントコントロールは数ではない決まった選択肢から1つ選びます。「1人・2人・3人」の3つしかないなら、こちらでも構いません。' },
    { slug: 'ripple', book: 'ugoki', diff: 'リップルエフェクトは押したところから波紋が広がる演出です。ステッパーのボタンに付けると、押したことが伝わりやすくなります。' },
  ],
  faq: [
    {
      q: '数量ステッパーとセレクト（1〜10のプルダウン）はどちらがいいですか？',
      a: 'たいてい1〜2個で、たまに増やすならステッパーの方が少ない手数で済みます。10個以上をよく選ぶ、または「1・6・12個」のように決まった単位でしか買えないなら、セレクトの方が選びやすくなります。',
    },
    {
      q: '<input type="number"> の上下の小さなボタンを消すには？',
      a: 'Chrome と Safari は ::-webkit-inner-spin-button と ::-webkit-outer-spin-button に appearance: none を、Firefox は入力欄に appearance: textfield を指定します。消したら、代わりに押しやすい「−」「＋」のボタンを必ず置きます。',
    },
    {
      q: '長押しで連続して増えるようにした方がいいですか？',
      a: '大きな数を扱うなら便利ですが、止めどころが難しく、行き過ぎやすくなります。上限が10程度なら不要で、それ以上をよく扱うなら、真ん中の欄に直接打てることを優先した方が確実です。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
