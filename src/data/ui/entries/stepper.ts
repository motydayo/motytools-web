import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'stepper',
  no: 12,
  category: 'nav',
  name: 'ステップ表示（ステッパー）',
  en: 'Stepper (progress steps)',
  aka: ['ステッパー', 'ステップバー', 'ステップインジケーター', '進捗ステップ', 'フロー表示'],
  mode: 'script',
  title: 'ステッパー（ステップ表示）とは？フォームの進み具合の見せ方と作り方',
  description:
    '申し込みフォームの「入力→確認→完了」を示すステッパーを触れる見本で解説。進捗バーやパンくずとの違い、<ol>とaria-current="step"を使ったHTML、段の数の決め方、スマホでの見せ方、AIへの頼み方までまとめました。',
  oneLine: '手順を番号の丸と線で並べ、今どの段にいて残りいくつかを示す。',
  what: [
    '申し込み・予約・会員登録のように、いくつかの画面を順番に進む手続きの上に「1 日付・人数 → 2 お客さま情報 → 3 内容の確認 → 4 完了」と段を並べ、今どこにいるかを示す部品です。見本では「次へ」を押すたびに今の段が右へ移り、終わった段は塗りつぶされてチェックが付き、段と段をつなぐ線が伸びます。「戻る」で前の段にも戻れます。',
    '似た部品の「進捗バー」は、どれだけ進んだかを割合（棒の長さ）でしか示せません。ステッパーは「段の名前」と「残りの段の数」が見えるので、「あと確認だけで終わる」と先の見通しが立ち、途中でやめる人を減らす手助けになります。パンくずリストは「サイトの階層」の位置を示すもので、手順の順番ではありません。',
    '決まりごとは、順番に意味があるので <ol>（番号つきの並び）で書き、今の段の <li> に aria-current="step" を付けること。終わった段は見た目だけでなく、読み上げ用に「完了」と文字でも伝えます。段が変わったら、その段の見出しへ焦点を移すと、キーボードや読み上げの人にも新しい段が始まったことが伝わります。',
  ],
  when: [
    '宿泊・飲食店の予約、通販の購入手続きのように、入力→確認→完了と画面が3〜5枚続くとき',
    '会員登録や見積もり依頼で、入力項目が多く1画面に収まらないフォームを分けたとき',
    '初めて使う人向けの初期設定（プロフィール・通知・好みの選択）を順に案内するとき',
    '「残りあと何段か」を見せて、途中でやめる人を減らしたいとき',
  ],
  avoid: [
    '入力が1画面に収まる短いフォーム（段を分けると、かえって手間が増えたように感じる）',
    '段が7つ以上あるとき（先が長く見えて不安を与える。段をまとめて3〜5つにする）',
    '順番に関係なく好きな項目から設定できる画面（ステッパーではなくタブや一覧にする）',
  ],
  prompt:
    '予約フォームの上に「ステッパー（stepper / progress steps）」を作ってください。「日付・人数」「お客さま情報」「内容の確認」「完了」の4段を <ol> で横に並べ、各段は直径{{size:t}}の番号つきの丸と、その下の短い名前にしてください。段と段の間は太さ{{line:t}}の線でつなぎ、終わった段は丸を塗りつぶしてチェックの印に変え、線の色が{{dur:t}}かけて左から伸びるようにしてください。今の段の <li> には aria-current="step" を付けて縁を強調し、終わった段には読み上げ用に「完了」と文字を添えてください。「次へ」「戻る」ボタンで段を移動し、移動したら「ステップ2 / 4・お客さま情報」のような見出しへ焦点を移してください。スマホ（480px未満）では今の段の名前だけを出してください。動きを減らす設定（prefers-reduced-motion）では線の動きを省いてください。',
  howTo: [
    '段は <ol> の <li> で並べ、丸（番号）と名前を入れます。段の間の線は li + li::before で描き、色の付いた線を ::after で重ねて、transform: scaleX(0) から scaleX(1) へ伸ばします。状態は「終わった段（is-done）」「今の段（aria-current="step"）」「まだの段」の3つで、それぞれ塗り・縁・灰色と見た目を変えます。',
    'JavaScriptは「今の段の番号」を1つ持っておき、「次へ」「戻る」でその番号を変えて、クラスと aria-current を付け直すだけです。各段の入力欄はそれぞれ <section> に分けて hidden で切り替えます。送信前に段ごとの入力チェックをして、問題があればその段から先へ進めないようにします。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（2段目を表示中）',
      code: `<ol class="stepper" aria-label="予約の手順">
  <li class="is-done">
    <span class="dot" aria-hidden="true">1</span>
    <span class="name">日付・人数<span class="visually-hidden">（完了）</span></span>
  </li>
  <li aria-current="step">
    <span class="dot" aria-hidden="true">2</span>
    <span class="name">お客さま情報</span>
  </li>
  <li>
    <span class="dot" aria-hidden="true">3</span>
    <span class="name">内容の確認</span>
  </li>
  <li>
    <span class="dot" aria-hidden="true">4</span>
    <span class="name">完了</span>
  </li>
</ol>

<h2 class="step-title" tabindex="-1">ステップ2 / 4・お客さま情報</h2>
<!-- ここに2段目の入力欄 -->
<button type="button" class="back">戻る</button>
<button type="button" class="next">次へ</button>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.stepper {
  display: flex;
  list-style: none;
  padding: 0;
}
.stepper li {
  position: relative;
  flex: 1;
  display: grid;
  justify-items: center;
  gap: 6px;
  font-size: 12px;
  color: #5d6272;
  text-align: center;
}
/* 前の段とのあいだの線（灰色の下地と、伸びる色の線） */
.stepper li + li::before,
.stepper li + li::after {
  content: "";
  position: absolute;
  top: calc({{size}} / 2 - {{line}} / 2);
  left: calc(-50% + {{size}} / 2 + 6px);
  right: calc(50% + {{size}} / 2 + 6px);
  height: {{line}};
  background: #e4e2dc;
}
.stepper li + li::after {
  background: #4f73d9;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform {{dur}} ease-out;
}
.stepper li.is-done + li::after { transform: scaleX(1); }

.stepper .dot {
  display: grid;
  place-items: center;
  width: {{size}};
  height: {{size}};
  border: 2px solid #c9c6be;
  border-radius: 50%;
  background: #fff;
  font-size: calc({{size}} * 0.45);
  font-weight: 800;
}
/* 今の段 */
.stepper [aria-current="step"] { color: #1f2433; font-weight: 700; }
.stepper [aria-current="step"] .dot { border-color: #4f73d9; color: #4f73d9; }
/* 終わった段（番号の代わりにチェック） */
.stepper .is-done .dot { border-color: #4f73d9; background: #4f73d9; color: transparent; position: relative; }
.stepper .is-done .dot::after { content: "✓"; position: absolute; inset: 0; display: grid; place-items: center; color: #fff; }

/* 見えないが読み上げられる文字 */
.visually-hidden {
  position: absolute; width: 1px; height: 1px;
  overflow: hidden; clip-path: inset(50%); white-space: nowrap;
}

/* スマホでは今の段の名前だけ見せる（読み上げには残す） */
@media (max-width: 479px) {
  .stepper li:not([aria-current]) .name {
    position: absolute; width: 1px; height: 1px;
    overflow: hidden; clip-path: inset(50%); white-space: nowrap;
  }
}
@media (prefers-reduced-motion: reduce) {
  .stepper li + li::after { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const steps = [...document.querySelectorAll('.stepper li')];
const title = document.querySelector('.step-title');
let current = 1; // 0 から数えて2段目

function render() {
  steps.forEach((li, i) => {
    li.classList.toggle('is-done', i < current);
    // 終わった段には、読み上げ用に「（完了）」を付ける（見た目には出さない）
    const note = li.querySelector('.visually-hidden');
    if (i < current && !note) li.querySelector('.name').insertAdjacentHTML('beforeend', '<span class="visually-hidden">（完了）</span>');
    if (i >= current && note) note.remove();
    if (i === current) li.setAttribute('aria-current', 'step');
    else li.removeAttribute('aria-current');
  });
  const name = steps[current].querySelector('.name').firstChild.textContent.trim();
  title.textContent = \`ステップ\${current + 1} / \${steps.length}・\${name}\`;
  title.focus(); // 段が変わったことを読み上げにも伝える
}

document.querySelector('.next').addEventListener('click', () => {
  // ここで今の段の入力チェックをして、問題があれば進まない
  if (current < steps.length - 1) { current++; render(); }
});
document.querySelector('.back').addEventListener('click', () => {
  if (current > 0) { current--; render(); }
});`,
    },
  ],
  tune: [
    { key: 'size', label: '丸の大きさ', min: 20, max: 40, step: 2, value: 28, unit: 'px' },
    { key: 'line', label: '線の太さ', min: 1, max: 6, step: 1, value: 2, unit: 'px' },
    { key: 'dur', label: '線が伸びる速さ', min: 0.1, max: 0.6, step: 0.05, value: 0.3, unit: 's' },
  ],
  cautions: [
    '終わった段を「色だけ」で示すと、色の見分けにくい人や読み上げの人には伝わりません。チェックの印と「完了」の文字を添えます。',
    '「戻る」で前の段に戻ったとき、入力済みの内容を消さないでください。消えると最初から入れ直しになり、そこでやめる人が出ます。',
    '終わった段の丸を押して戻れるようにする場合は、それを <button> にして「日付・人数を修正」のような名前を付けます。押せない丸と見た目を変えておきます。',
    '「確認」の段では、どの段の内容かを並べ、それぞれに「変更」リンクを付けると、ステッパーを行き来しなくても直せます。',
  ],
  similar: [
    { slug: 'progress-bar', book: 'ugoki', diff: 'スクロールプログレスバーは、ページをどこまで読んだかを棒の長さで示します。ステッパーは段の名前と残りの数を見せ、手続きの見通しを立てます。' },
    { slug: 'breadcrumb', diff: 'パンくずリストはサイトの階層の中の位置を示し、上の段へ戻るためのリンクです。ステッパーは手順の順番の中の位置を示します。' },
    { slug: 'pagination', diff: 'ページネーションも番号が並びますが、一覧のどのページでも自由に飛べる部品です。ステッパーは順番どおりに進むのが前提です。' },
  ],
  faq: [
    {
      q: 'ステッパーの段はいくつにするのがいいですか？',
      a: '3〜5段が目安です。2段なら「入力」「確認」をそのまま画面の見出しにすれば足り、6段以上になると先が長く感じられて途中でやめる人が増えます。入力項目が多い場合も、関係の近い項目をまとめて段の数を減らします。',
    },
    {
      q: 'ステッパーと進捗バー（プログレスバー）はどう使い分けますか？',
      a: '段の名前が決まっている手続きならステッパー、段の区切りがない作業（アップロードの進み具合、アンケートの残り割合など）なら進捗バーが向きます。質問の数が多いアンケートでは、両方を組み合わせて「3 / 10問」と棒を並べる方法もあります。',
    },
    {
      q: 'aria-current="step" は何のために付けるのですか？',
      a: '読み上げソフトに「この段が今の段です」と伝えるためです。見た目の色や太字は読み上げでは分からないので、属性で伝えます。CSS でも [aria-current="step"] を目印に見た目を変えられるので、見た目と読み上げがずれにくくなります。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
