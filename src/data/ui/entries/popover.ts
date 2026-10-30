import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'popover',
  no: 5,
  category: 'overlay',
  name: 'ポップオーバー',
  en: 'Popover',
  aka: ['ポップアップ', '吹き出しパネル', 'フライアウト', 'トグルチップ', 'popover API'],
  mode: 'script',
  title: 'ポップオーバーとは？ツールチップ・モーダルとの違いとpopover属性の使い方',
  description:
    'ポップオーバーを触れる見本で解説。ツールチップやモーダルとの違い、HTMLのpopover属性とpopovertargetで作る方法、外を押す・Escで閉じる決まりごと、ボタンのすぐ下に出すCSSアンカー配置、AIへの頼み方まで分かります。',
  oneLine: 'ボタンを押すと、すぐ下に小窓が開き、中で選んだり入力したりできる。',
  what: [
    'ボタンを押すと、そのすぐそばに小さな窓を開き、中で選んだり入力したりしてもらう部品です。見本では「人数」を押すと人数を選ぶ小窓が開き、＋と−で大人と子どもの数を変えられます。「決定」・小窓の外を押す・Escキーのどれでも閉じ、閉じても選んだ値は残ります。',
    'ツールチップとの違いは「押して開き、中を操作できる」ことです。ツールチップは乗せるだけで出て、読むだけの文しか入れません。モーダルとの違いは「後ろを止めない」ことです。ポップオーバーは暗幕を敷かず、外を押せばそのまま後ろのページを使えます。今の画面の流れを止めずに、ちょっとした設定や補足を出し入れできるのが価値です。',
  ],
  when: [
    '宿や航空券の検索で、人数や部屋数のような小さな設定を、検索欄のすぐ下で選んでもらうとき',
    '料金や用語の横の「?」を押したとき、リンク付きの説明を出したいとき',
    'プロフィールのアイコンを押したとき、名前・設定・ログアウトをまとめて出したいとき',
    '表の列の見出しから、その列だけの絞り込み条件を出したいとき',
  ],
  avoid: [
    '取り消しにくい判断（削除・購入の確認）を求めるとき（後ろも触れるので、確認はモーダルにする）',
    '入力欄が何個も並ぶ長いフォーム（小窓が大きくなりすぎて、どこから出たか分からなくなる）',
    'ただの操作の一覧（矢印キーで選べるドロップダウンメニューの方が向く）',
  ],
  prompt:
    '宿の検索欄の「人数」を「ポップオーバー（popover）」で作ってください。HTMLの popover 属性と popovertarget を使い、自作の開閉処理は書かないでください。小窓は「人数」ボタンのすぐ下{{gap:t}}の位置に、左端をそろえて出し（CSSアンカー配置 position-anchor / position-area を使い、未対応のブラウザでは JavaScript で位置を計算）、角丸は{{radius:t}}、開くときは{{dur:t}}かけて少し上から減速しながら出してください。中には大人（1〜8名）と子ども（0〜8名）の＋−ボタンと「決定」ボタンを置き、ボタンには「大人を増やす」のような読み上げ用の名前を付けてください。外を押す・Escキー・「決定」で閉じ、後ろに暗幕は敷かないでください。動きを減らす設定（prefers-reduced-motion）では動かさずに表示してください。',
  howTo: [
    '今は HTML の popover 属性がいちばん手軽です。小窓の要素に popover を、開くボタンに popovertarget="小窓のid" を書くだけで、押すと開く・もう一度押すと閉じる・外を押すと閉じる・Escで閉じる、がそろいます。ボタンの aria-expanded（開いているかどうか）もブラウザが自動で伝えます。',
    'ただし popover は、何もしないと画面の真ん中に出ます。ボタンのすぐ下に出すには CSS のアンカー配置を使い、ボタンに anchor-name、小窓に position-anchor と position-area を書きます。下に入りきらないときは position-try-fallbacks で上へ逃がせます。アンカー配置は2026年1月に主要ブラウザの現行版がそろいましたが、それより古い版のブラウザ向けに、開いた瞬間（toggle イベント）にボタンの位置から座標を計算する数行も添えます。見本は枠の中に収めるため、position: absolute で同じ配置を再現しています。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<button type="button" class="guests-btn" popovertarget="guests">
  人数：<span class="guests-sum">大人2名</span>
</button>

<div id="guests" class="guests-pop" popover role="dialog" aria-labelledby="guests-h">
  <h2 id="guests-h">人数</h2>
  <div class="row">
    <span>大人</span>
    <button type="button" data-key="adults" data-step="-1" aria-label="大人を減らす">−</button>
    <span data-count="adults" aria-live="polite">2</span>
    <button type="button" data-key="adults" data-step="1" aria-label="大人を増やす">+</button>
  </div>
  <div class="row">
    <span>子ども</span>
    <button type="button" data-key="children" data-step="-1" aria-label="子どもを減らす">−</button>
    <span data-count="children" aria-live="polite">0</span>
    <button type="button" data-key="children" data-step="1" aria-label="子どもを増やす">+</button>
  </div>
  <button type="button" popovertarget="guests" popovertargetaction="hide">決定</button>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.guests-btn { anchor-name: --guests; }

.guests-pop {
  /* 画面中央ではなく、ボタンの真下に左端をそろえて */
  position-anchor: --guests;
  position-area: bottom span-right;
  position-try-fallbacks: flip-block; /* 下に入らなければ上へ */
  inset: auto;
  margin: {{gap}} 0;
  width: 280px;
  padding: 16px;
  border: 1px solid #e4e2dc;
  border-radius: {{radius}};
  box-shadow: 0 16px 40px -12px rgb(20 24 40 / 0.35);
  /* 開閉の動き（出るときは減速） */
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity {{dur}} ease-in, transform {{dur}} ease-in,
    overlay {{dur}} allow-discrete, display {{dur}} allow-discrete;
}
.guests-pop:popover-open {
  opacity: 1;
  transform: none;
  transition-timing-function: ease-out;
}
@starting-style {
  .guests-pop:popover-open { opacity: 0; transform: translateY(-6px); }
}
.row button { width: 44px; height: 44px; border-radius: 50%; }

@media (prefers-reduced-motion: reduce) {
  .guests-pop { transition: none; transform: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const btn = document.querySelector('.guests-btn');
const pop = document.querySelector('#guests');
const sum = document.querySelector('.guests-sum');
const count = { adults: 2, children: 0 };
const min = { adults: 1, children: 0 };

// ＋−で数を変える（開閉は popover 属性が全部やる）
pop.addEventListener('click', (e) => {
  const b = e.target.closest('[data-step]');
  if (!b) return;
  const k = b.dataset.key;
  count[k] = Math.min(8, Math.max(min[k], count[k] + Number(b.dataset.step)));
  pop.querySelector(\`[data-count="\${k}"]\`).textContent = count[k];
  sum.textContent = \`大人\${count.adults}名\` +
    (count.children ? \`・子ども\${count.children}名\` : '');
});

// アンカー配置に未対応のブラウザでは、開いた瞬間に位置を計算する
if (!CSS.supports('position-area', 'bottom span-right')) {
  pop.addEventListener('toggle', (e) => {
    if (e.newState !== 'open') return;
    const r = btn.getBoundingClientRect();
    pop.style.left = \`\${r.left}px\`;
    pop.style.top = \`\${r.bottom}px\`;
  });
}`,
    },
  ],
  tune: [
    { key: 'gap', label: 'ボタンとの距離', min: 0, max: 20, step: 1, value: 8, unit: 'px' },
    { key: 'dur', label: '開く速さ', min: 0.1, max: 0.5, step: 0.05, value: 0.2, unit: 's' },
    { key: 'radius', label: '角の丸み', min: 0, max: 24, step: 2, value: 12, unit: 'px' },
  ],
  cautions: [
    'ポップオーバーは焦点を閉じ込めません。Tabキーで進むと、開くボタンの次に小窓の中、そのあとページの続きへ移ります。小窓を開くボタンのすぐ後ろに置くと、この順番が自然になります。',
    '中身が「選ぶ・入力する」なら role="dialog" と見出し（aria-labelledby）を付けると、読み上げソフトに何の小窓かが伝わります。操作の一覧なら role="menu" のドロップダウンメニューとして作ります。',
    'スマホの狭い画面では、ボタンの下に出すと横にはみ出したり、キーボードに隠れたりします。幅の狭い画面ではボトムシートに切り替える作りもよく使われます。',
    'popover 属性・@starting-style・アンカー配置は比較的新しい機能です。古い版のブラウザでも「真ん中に出る」「動きなしで開く」になるだけで操作はできますが、古い版にも対応するなら、位置の計算だけは JavaScript の予備を用意しておきます。',
  ],
  similar: [
    { slug: 'tooltip', diff: 'ツールチップは乗せるだけで出て、短い文を読ませるだけです。ポップオーバーは押して開き、中のボタンや入力欄を操作できます。' },
    { slug: 'modal', diff: 'モーダルは暗幕を敷いて後ろを止め、判断を求めます。ポップオーバーは後ろを止めず、外を押せばそのまま作業に戻れます。' },
    { slug: 'dropdown-menu', diff: 'ドロップダウンメニューもボタンの下に開きますが、中身は操作の一覧で、矢印キーで選ぶ決まりがあります。ポップオーバーは中身を自由に組めます。' },
  ],
  faq: [
    {
      q: 'ポップオーバーとポップアップは何が違いますか？',
      a: 'ポップアップは「飛び出して出てくるもの」全般を指す日常語で、モーダルや広告の小窓も含みます。ポップオーバーはその中でも「押したボタンのそばに開き、後ろを止めない小窓」を指す、もっと狭い名前です。HTMLの機能の名前（popover属性）にもなっています。',
    },
    {
      q: 'popover属性はすべてのブラウザで使えますか？',
      a: '使えます。Chrome・Edge・Safari・Firefox の現行版が対応しています。ボタンのそばに出すためのアンカー配置（position-anchor）も、2026年1月の Firefox 147 で主要ブラウザの現行版がそろいました（2026年10月確認）。古い版のブラウザにも対応するなら、未対応のときに JavaScript で位置を計算する予備を入れておくと安心です。',
    },
    {
      q: 'ポップオーバーを開いたら、焦点を中へ移すべきですか？',
      a: '中身によります。人数の選択のように「開いたらすぐ操作する」ものは、最初のボタンへ移すと親切です。ただしモーダルと違って焦点を閉じ込めることはせず、Tabで外へ出たら閉じるか、開いたままにしておきます。Escで閉じたときは、開いたボタンへ焦点を戻します（popover属性で作れば自動で戻ります）。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
