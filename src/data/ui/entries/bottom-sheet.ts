import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'bottom-sheet',
  no: 3,
  category: 'overlay',
  name: 'ボトムシート',
  en: 'Bottom sheet',
  aka: ['ハーフモーダル', 'アクションシート', 'シート', 'モーダルボトムシート', 'bottom drawer'],
  mode: 'script',
  title: 'ボトムシートとは？スマホで下から出る部品の作り方と使い分け【見本】',
  description:
    'ボトムシート（ハーフモーダル）を触れる見本で解説。モーダル・ドロワーとの違い、<dialog>で下からせり上げるCSS、下へ引いて閉じるJavaScript、Escや暗幕で閉じる決まりごと、AIへの頼み方まで分かります。',
  oneLine: '画面の下から板がせり上がり、親指の届く場所に選択肢が並ぶ。',
  what: [
    '画面の下の端から板（シート）をせり上げて、その場で選んでほしいものを並べる部品です。見本では「並び替え」を押すと下から板が出て、「料金が安い順」を選ぶと板が下がり、一覧の順番が変わります。閉じ方は×・暗幕を押す・Escキー・取っ手を下へ引く、の4つです。日本では「ハーフモーダル」とも呼ばれます。',
    'モーダルは画面の真ん中、ドロワーは横の端から出るのに対し、ボトムシートは下から出ます。スマホを片手で持つと親指は画面の下半分にしか届かないので、選択肢を下に出すだけで押しやすさが大きく変わります。並び替え・共有先・「その他の操作」のように、今の画面に付け足す短い選択に向いた部品です。',
  ],
  when: [
    '商品や宿の一覧で、並び替えや表示件数を選んでもらうとき',
    '「共有する」「保存する」「報告する」など、1件に対する操作をまとめて出したいとき',
    '地図アプリのように、地図を見せたまま下に詳しい情報を半分だけ重ねたいとき',
    'スマホで、モーダルを出すほどではない短い確認や選択をしてもらうとき',
  ],
  avoid: [
    'PCの広い画面（下に出すと視線の移動が大きい。PCではポップオーバーやモーダルに切り替える）',
    '入力欄がいくつもある長いフォーム（キーボードが出ると板が押し上げられて窮屈になる）',
    'ページ全体のメニュー（行き先の一覧はドロワーやタブバーの役割）',
  ],
  prompt:
    'スマホの一覧ページの並び替えを「ボトムシート（bottom sheet）」で作ってください。「並び替え」ボタンで開き、HTMLの <dialog> と showModal() を使ってください。板は画面の下端に張り付け、幅は最大560px、上の角だけ{{radius:t}}の角丸、上に取っ手（横長の小さな線）を付けてください。開くときは{{dur:t}}かけて下からせり上げ、出るときは減速（ease-out）にしてください。選択肢は「おすすめ順・新着順・料金が安い順・料金が高い順」の4つのボタンで、選ぶとすぐ閉じます。閉じ方は「×ボタン」「暗幕を押す」「Escキー」「取っ手を下へ引く（板の高さの{{threshold:t}}以上引いたら閉じ、足りなければ元に戻す）」の4つ。閉じたら焦点を「並び替え」ボタンへ戻し、動きを減らす設定（prefers-reduced-motion）ではせり上げずに表示してください。',
  howTo: [
    'ボトムシートもモーダルの一種なので、<dialog> と showModal() を土台にします。後ろを押せなくする・Escで閉じる・閉じたら焦点を戻すがそろうので、残りは置き場所と動きです。CSS で <dialog> を画面の下端に寄せ（margin: auto auto 0）、transform: translateY(100%)（下の外に隠す）から 0 へせり上げます。',
    '選択肢はラジオボタンではなく、選んだら閉じるボタンにします。ラジオボタンで「選んだら閉じる」にすると、キーボードの矢印で選択肢を移っただけで閉じてしまうためです。<form method="dialog"> の中のボタンに value を付けると、押したボタンの値が returnValue で受け取れます。取っ手を下へ引いて閉じる動きだけは自分で書きます。指の動きに板を付いてこさせ、離したときに一定以上引いていれば閉じ、足りなければ元の位置へ戻します。見本は枠の中に収めるため div で作っていますが、仕組みは同じです。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<button type="button" class="sort-btn" aria-haspopup="dialog">
  並び替え：<b>おすすめ順</b>
</button>

<dialog class="sheet" aria-labelledby="sheet-title">
  <div class="sheet-inner">
    <div class="sheet-grab">
      <span class="sheet-handle" aria-hidden="true"></span>
      <h2 id="sheet-title">並び替え</h2>
    </div>
    <form method="dialog">
      <button class="sheet-x" value="" aria-label="閉じる">×</button>
      <button value="recommend" aria-pressed="true">おすすめ順</button>
      <button value="new" aria-pressed="false">新着順</button>
      <button value="price-asc" aria-pressed="false">料金が安い順</button>
      <button value="price-desc" aria-pressed="false">料金が高い順</button>
    </form>
  </div>
</dialog>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.sheet {
  /* 画面の下端に張り付ける */
  margin: auto auto 0;
  width: 100%;
  max-width: 560px;
  max-height: 85dvh;
  padding: 0;
  border: 0;
  border-radius: {{radius}} {{radius}} 0 0;
  background: #fff;
  /* 閉じているときは下の外へ */
  transform: translateY(100%);
  transition: transform {{dur}} ease-in,
    overlay {{dur}} allow-discrete, display {{dur}} allow-discrete;
}
.sheet[open] {
  transform: translateY(0);
  transition-timing-function: ease-out;
}
@starting-style {
  .sheet[open] { transform: translateY(100%); }
}
.sheet.is-dragging { transition: none; }
.sheet::backdrop { background: rgb(20 24 40 / 0.4); }

.sheet-inner { padding: 0 8px calc(8px + env(safe-area-inset-bottom)); }
/* 取っ手の帯は指で引けるように、スクロールを止める */
.sheet-grab { touch-action: none; cursor: grab; }
.sheet-handle {
  display: block; width: 36px; height: 4px;
  margin: 8px auto; border-radius: 2px; background: #cfccc4;
}
.sheet-x { position: absolute; top: 4px; right: 4px; width: 44px; height: 44px; }
.sheet [aria-pressed] { display: block; width: 100%; min-height: 48px; text-align: left; }
.sheet [aria-pressed='true'] { font-weight: 700; }

html:has(.sheet[open]) { overflow: hidden; }

@media (prefers-reduced-motion: reduce) {
  .sheet { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const sheet = document.querySelector('.sheet');
const sortBtn = document.querySelector('.sort-btn');
const grab = sheet.querySelector('.sheet-grab');

sortBtn.addEventListener('click', () => {
  sheet.returnValue = ''; // 前回の選択を持ち越さない
  sheet.showModal();
});

// 暗幕（板の外）を押したら閉じる
sheet.addEventListener('click', (e) => {
  if (e.target === sheet) sheet.close();
});

// 選んだ値を受け取る
sheet.addEventListener('close', () => {
  const v = sheet.returnValue;
  if (!v) return; // ×・Esc・暗幕で閉じたときは何もしない
  sheet.querySelectorAll('[aria-pressed]').forEach((b) =>
    b.setAttribute('aria-pressed', String(b.value === v)));
  // ここで一覧を並べ替える
});

// 取っ手を下へ引いて閉じる
let startY = 0;
let dy = 0;
grab.addEventListener('pointerdown', (e) => {
  startY = e.clientY;
  dy = 0;
  grab.setPointerCapture(e.pointerId);
  sheet.classList.add('is-dragging');
});
grab.addEventListener('pointermove', (e) => {
  if (!grab.hasPointerCapture(e.pointerId)) return;
  dy = Math.max(0, e.clientY - startY);
  sheet.style.transform = \`translateY(\${dy}px)\`;
});
grab.addEventListener('pointerup', () => {
  sheet.classList.remove('is-dragging');
  sheet.style.transform = '';
  // 高さの {{threshold}} 以上引いたら閉じる。足りなければ元に戻る
  if (dy > sheet.offsetHeight * {{threshold:n}} / 100) sheet.close();
});`,
    },
  ],
  tune: [
    { key: 'dur', label: 'せり上がる速さ', min: 0.1, max: 0.6, step: 0.05, value: 0.3, unit: 's' },
    { key: 'radius', label: '上の角の丸み', min: 0, max: 32, step: 2, value: 16, unit: 'px' },
    { key: 'threshold', label: '閉じるまでの引き下げ量', min: 10, max: 60, step: 5, value: 30, unit: '%' },
  ],
  cautions: [
    '取っ手（上の横線）は「引けば閉じる」という合図ですが、それだけでは閉じ方が分からない人もいます。×ボタンも必ず置き、Escキーや暗幕でも閉じられるようにします。',
    'iPhoneでは画面の下端に「ホームに戻る」の細い線があります。板の下の余白に env(safe-area-inset-bottom) を足して、最後の選択肢がその線に重ならないようにします。',
    '中身が長くて板の中でスクロールさせる場合、取っ手を引く動きと中身のスクロールがぶつかります。引けるのは取っ手と見出しの帯だけにして、中身はふつうにスクロールさせると混乱しません。',
    'PCでも同じ板を下から出すと、画面の下の端まで視線を動かす必要があります。幅の広い画面ではモーダルやポップオーバーに切り替えるのが一般的です。',
  ],
  similar: [
    { slug: 'modal', diff: 'モーダルは画面の真ん中に出て、取り消しにくい判断を求めます。ボトムシートは下から出て、その場の短い選択に使います。' },
    { slug: 'drawer', diff: 'ドロワーは横の端から出るメニューの板で、行き先を選ぶためのものです。ボトムシートは今の画面に付け足す選択肢を出します。' },
    { slug: 'dropdown-menu', diff: 'ドロップダウンメニューはボタンのすぐ下に小さく開く操作の一覧です。PCではドロップダウン、スマホではボトムシートと出し分けることもよくあります。' },
  ],
  faq: [
    {
      q: 'ボトムシートとハーフモーダルは同じものですか？',
      a: 'ほぼ同じものを指します。ハーフモーダルは日本でよく使われる呼び名で、画面の半分ほどまでせり上がるボトムシートのことです。英語ではbottom sheet（iOSではsheet）と呼ぶので、AIに頼むときは「ボトムシート（bottom sheet）」と書くと伝わります。',
    },
    {
      q: '下へスワイプして閉じる動きは必須ですか？',
      a: '必須ではありませんが、スマホの利用者の多くが試す操作なので、あると親切です。ただしスワイプだけに頼るのは不十分で、キーボードや読み上げソフトの利用者のために×ボタンとEscキーでも閉じられるようにします。',
    },
    {
      q: 'ボトムシートを開いたまま、後ろのページを操作できるようにしてもいいですか？',
      a: 'できます。地図アプリの詳細表示のように、暗幕を敷かずに後ろも触れるものは「スタンダードボトムシート」と呼ばれます。その場合は showModal() ではなく show() で開くか popover 属性を使い、焦点を閉じ込めない作りにします。並び替えのように「選んだら閉じる」ものは、見本のように暗幕つきのモーダル型にします。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
