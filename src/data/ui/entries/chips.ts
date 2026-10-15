import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'chips',
  no: 19,
  category: 'input',
  name: 'チップ',
  en: 'Chips (filter chips)',
  aka: ['フィルターチップ', '絞り込みボタン', 'ピル', 'トグルタグ'],
  mode: 'script',
  title: 'チップ（フィルターチップ）とは？タグ・バッジとの違いと絞り込みの作り方',
  description:
    'チップ（フィルターチップ）を触れる見本で解説。押せないタグ・バッジとの違い、複数選べる絞り込みをチェックボックスで作る方法、選んだ印を色だけにしない理由、すぐ絞り込むか「決定」で絞り込むかの判断までまとめました。',
  oneLine: '丸い小さな札を押して、条件をいくつでもオン・オフする。',
  what: [
    '角の丸い小さな札が横に並び、押すたびにオンとオフが切り替わる部品です。見本では「温泉」「朝食つき」を押すと札に印が付き、下の宿の一覧と「5件中 2件」の件数がその場で絞り込まれます。いくつでも同時に選べ、選んだ条件をすべて満たすものだけが残ります。',
    '見た目が似たものに「タグ」と「バッジ」があります。見本の宿カードの中の灰色の「温泉」はタグで、その宿の分類を示すだけの押せない札です。赤い「残り2室」はバッジで、状態や数を知らせる印です。チップはこの2つと違い、押して条件を変えるための操作部品です。だからこそ、押せることが分かる枠線と、押した感（色の変化）が要ります。',
    '絞り込みのチップは、押した瞬間に一覧が変わる「即時反映」が基本です。ただし、条件を変えるたびにサーバーへの問い合わせで数秒待つような一覧や、条件を10個以上組み合わせる画面では、チップをまとめて選んでから「この条件で探す」を押す形にします。キーボードでは Tab で札を移り、Space で切り替えます。HTMLのチェックボックスを土台にすると、この操作と「温泉、チェックボックス、オン」の読み上げがそろいます。',
  ],
  when: [
    '宿・飲食店・求人の一覧で、「温泉」「駐車場あり」のような条件を重ねて絞り込むとき',
    'ネットショップの商品一覧で、サイズや色をすぐに切り替えて見比べたいとき',
    '記事の一覧で、興味のある話題をいくつか選んで読みたいものだけ残すとき',
    '検索窓の下に「よく使われる条件」を並べ、1回押すだけで絞り込めるようにしたいとき',
  ],
  avoid: [
    '1つしか選べない選択（セグメントコントロールかラジオボタンにする。チップは複数選べると思われる）',
    '押せない分類の表示（タグにして、枠線や押した感を付けない。押せると誤解される）',
    '条件が20個を超えるとき（横に並びきらず探せない。分類ごとに見出しを付けたチェックボックスの一覧にする）',
  ],
  prompt:
    '宿の一覧の絞り込みを「フィルターチップ（filter chips）」で作ってください。HTMLは fieldset と legend（「絞り込み」）の中に、label で包んだチェックボックスを「温泉・朝食つき・ペット可・駐車場あり・駅から5分」の5つ並べ、チェックボックス自体は見えなくして、ラベルを角の丸み{{r:t}}・高さ36pxの札に見せてください。押せる範囲は上下に広げて44px以上にします。選んだ札は枠と背景を{{color:t}}系の色にし、選んだ印は「{{mark:t}}」で示してください。押した瞬間に、選んだ条件をすべて満たす宿だけに一覧を絞り込み、件数を aria-live の欄で知らせ、1つ以上選んでいるときは「すべて解除」を出してください。0件のときは「条件を1つ外してみてください」と案内してください。',
  howTo: [
    'フィルターチップの中身は「チェックボックスの組」です。fieldset で囲んで legend に名前を付け、label で包んだチェックボックスを並べます。複数選べる・Space キーで切り替わる・読み上げで「オン／オフ」が伝わる、という決まりごとがHTMLだけでそろい、JavaScript が動かなくてもフォームとして送信できます。',
    '見た目は CSS で札にします。チェックボックスは opacity: 0 にしてラベルいっぱいに広げ、label:has(:checked) で選ばれた札の色を変えます。選んだ札にはチェック印も出し、色の見分けがつきにくい人にも分かるようにします。絞り込みは change イベントで一覧を作り直すだけです。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<fieldset class="chips">
  <legend>絞り込み</legend>
  <label class="chip-item"><input type="checkbox" name="feature" value="onsen"><svg class="chip-check" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>温泉</label>
  <label class="chip-item"><input type="checkbox" name="feature" value="meal"><svg class="chip-check" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>朝食つき</label>
  <label class="chip-item"><input type="checkbox" name="feature" value="pet"><svg class="chip-check" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>ペット可</label>
</fieldset>
<p class="chips-count" aria-live="polite">5件中 5件</p>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.chips { display: flex; flex-wrap: wrap; gap: 8px; border: 0; padding: 0; }
.chips legend { width: 100%; margin-bottom: 4px; font-size: 12px; }
.chip-item {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 36px;
  padding: 0 14px;
  border: 1px solid #c9c7c0;
  border-radius: {{r}};
  background: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease-out, border-color 0.15s ease-out;
}
/* 見た目は36pxでも、押せる範囲は44pxに広げる */
.chip-item::before { content: ""; position: absolute; inset: -4px 0; }
/* 本物のチェックボックスは見えなくするだけ */
.chip-item input { position: absolute; inset: 0; margin: 0; opacity: 0; cursor: pointer; }
.chip-check { display: none; width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 2.6; }
/* 選ばれた札: 色＋チェック印（色だけに頼らない） */
.chip-item:has(:checked) {
  border-color: {{color}};
  background: color-mix(in srgb, {{color}} 12%, #fff);
  color: color-mix(in srgb, {{color}} 75%, #000);
}
.chip-item:has(:checked) .chip-check { display: block; }
.chip-item:has(:focus-visible) { outline: 3px solid #4f73d9; outline-offset: 2px; }

@media (prefers-reduced-motion: reduce) {
  .chip-item { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const boxes = [...document.querySelectorAll('.chips input')];
const cards = [...document.querySelectorAll('.hotel-card')]; // data-f="onsen meal"
const count = document.querySelector('.chips-count');

const apply = () => {
  const on = boxes.filter((b) => b.checked).map((b) => b.value);
  let hit = 0;
  cards.forEach((card) => {
    const f = card.dataset.f.split(' ');
    card.hidden = !on.every((v) => f.includes(v)); // すべての条件を満たすものだけ
    if (!card.hidden) hit++;
  });
  count.textContent = hit
    ? \`\${cards.length}件中 \${hit}件\`
    : '条件に合う宿がありません。条件を1つ外してみてください。';
};
// 押した瞬間に絞り込む
boxes.forEach((b) => b.addEventListener('change', apply));`,
    },
  ],
  tune: [
    { key: 'r', label: '角の丸み', min: 0, max: 18, step: 2, value: 18, unit: 'px' },
    { key: 'color', type: 'color', label: '選んだ札の色', value: '#4f73d9' },
    {
      key: 'mark',
      type: 'select',
      label: '選んだ印',
      value: 'check',
      options: [
        { value: 'check', label: 'チェック印と色' },
        { value: 'color', label: '色だけ' },
      ],
    },
  ],
  cautions: [
    '選んだ札を色だけで見分けさせないでください。「選んだ印」のつまみを「色だけ」にすると分かるとおり、薄い色の差は見落とされます。チェック印を足すのが確実です。',
    '絞り込んだ結果が0件になったら、灰色の「該当なし」だけで終わらせず、「条件を1つ外してみてください」と次の行動を案内し、「すべて解除」を押せるようにします。',
    'チップの見た目は32〜36pxと小さめでも、押せる範囲は上下に広げて44px以上にします。隣の札との間は8px以上空けます。',
    'スマホで横一列に並べてはみ出す場合は、折り返すか横スクロールにします。横スクロールにするなら、端の札が半分見えるようにして「まだある」と伝えます。',
  ],
  similar: [
    { slug: 'badge', diff: 'バッジは「新着」「残り2室」「3」のように状態や数を知らせる押せない印です。チップは押して条件を変える操作部品です。' },
    { slug: 'segmented-control', diff: 'セグメントコントロールは必ず1つだけを選ぶ横並びのボタンです。チップは複数を同時に選べます。' },
    { slug: 'toggle-switch', diff: 'トグルスイッチは設定をオン・オフする部品です。チップのオン・オフは「今見ている一覧の絞り込み」で、設定として保存はしません。' },
  ],
  faq: [
    {
      q: 'チップとタグの違いは何ですか？',
      a: 'チップは押して何かを選ぶ・外すための操作部品で、タグは分類を示すだけの表示です。見た目は似ていますが、押せるものには枠線と押した感を、押せないものには付けない、と見た目で区別します。ブログのタグのように押すとその分類の一覧へ移動するものは、部品としてはリンクです。',
    },
    {
      q: 'チップは押した瞬間に絞り込むべきですか？「決定」ボタンは要りますか？',
      a: '結果がすぐ（1秒以内に）出るなら、押した瞬間に絞り込む方が気持ちよく使えます。結果の取得に時間がかかる、条件を多く組み合わせる、スマホで絞り込みをボトムシートにまとめている、といった場合は、選んでから「この条件で探す（24件）」を押す形が向きます。',
    },
    {
      q: '入力した言葉がチップになる部品は何と呼びますか？',
      a: '「インプットチップ（input chips）」や「タグ入力」と呼ばれます。メールの宛先欄のように、入力した言葉が札になり、×で外せる部品です。この記事のフィルターチップとは役割が違い、選ぶのではなく「入れたものを並べて見せる」ために使います。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
