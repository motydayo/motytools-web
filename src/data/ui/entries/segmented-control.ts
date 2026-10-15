import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'segmented-control',
  no: 17,
  category: 'input',
  name: 'セグメントコントロール',
  en: 'Segmented control',
  aka: ['セグメントボタン', 'セグメンテッドコントロール', '切り替えボタン', 'ボタングループ'],
  mode: 'script',
  title: 'セグメントコントロールとは？タブ・ラジオボタンとの違いと作り方',
  description:
    'セグメントコントロールを触れる見本で解説。タブやラジオボタンとの使い分け、選択肢の数の目安、ラジオボタンを土台にCSSで作る方法、矢印キーで選べるキーボード操作、AIに頼むときの指示文までまとめました。',
  oneLine: '横に並んだ2〜5個のボタンから1つを選び、表示をすぐ切り替える。',
  what: [
    'ひとつながりの細長い枠を2〜5個に区切り、その中から1つだけを選ぶ部品です。見本では「週・月・年」を押すと白い板が横にすべり、同じ支出のグラフが選んだ期間に切り替わります。押した瞬間に表示が変わり、保存ボタンはありません。',
    'よく似た部品が2つあります。タブは「概要・口コミ・地図」のように、まったく別の中身の面を切り替える部品です。ラジオボタンはフォームの中で選んでおき、「送信する」で確定させる部品で、選択肢が多いときや文が長いときにも使えます。セグメントコントロールはその間にあり、「同じ中身の見せ方や範囲」を、短い言葉の選択肢ですぐに切り替えるときに使います。',
    '決まりごととして、いつも必ずどれか1つが選ばれています（何も選ばれていない状態は作りません）。キーボードでは Tab で入り、左右の矢印キーで選ぶ項目を移します。これはラジオボタンと同じ動きなので、HTMLのラジオボタンを土台にすると、キーボード操作と読み上げ（「集計の期間、週、選択済み、3項目中1番目」のような伝わり方）が最初からそろいます。',
  ],
  when: [
    '家計簿やアクセス解析で、同じグラフを「週・月・年」で切り替えるとき',
    '料金表で「月払い・年払い」の金額を切り替えて見せるとき',
    '商品一覧の見せ方を「リスト・写真」で切り替えるとき',
    '地図アプリで「車・電車・徒歩」のように、同じ経路検索の条件を切り替えるとき',
  ],
  avoid: [
    '選択肢が6個以上あるとき、または文字が長いとき（1つずつが狭くなって読めない。セレクトかラジオボタンにする）',
    '切り替えると中身がまったく別の画面になるとき（タブにする）',
    'フォームの途中で、送信するまで確定しない選択（ラジオボタンの方が「まだ確定していない」ことが伝わる）',
    'オンとオフの2択（トグルスイッチの方が一目で分かる）',
  ],
  prompt:
    '支出グラフの期間の切り替えを「セグメントコントロール（segmented control）」で作ってください。HTMLは fieldset と legend（「集計の期間」）の中に「週・月・年」のラジオボタンを置き、ラジオボタン自体は見えなくして、ラベルを横並びのボタンに見せてください。入れ物は角の丸み{{r:t}}、各ボタンの高さは{{h:t}}にし、選ばれた項目の後ろに白い板を敷いて、選び直すと{{dur:t}}かけて減速しながら横にすべらせてください。選んだ瞬間にグラフと合計金額を切り替え、保存ボタンは置かないでください。左右の矢印キーで選べ、焦点の枠線が見えるようにしてください。動きを減らす設定（prefers-reduced-motion）の人には板をすべらせずに切り替えてください。',
  howTo: [
    '中身は「ラジオボタンの組」です。fieldset で囲んで legend に名前を付け、同じ name のラジオボタンを並べます。こうすると矢印キーで選び直せる・必ず1つだけ選ばれる・読み上げで何番目か伝わる、という決まりごとがHTMLだけでそろいます。',
    '見た目は CSS で作ります。ラジオボタンは opacity: 0 で見えなくしてラベルの上いっぱいに広げ、ラベルを横並びの区画にします。選ばれた印の白い板は1枚だけ置き、何番目が選ばれているかを CSS変数（--i）に入れて transform で横へ動かします。:has() を使えば、JavaScript なしで --i を切り替えることもできます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<fieldset class="segmented">
  <legend>集計の期間</legend>
  <div class="seg-track">
    <span class="seg-indicator" aria-hidden="true"></span>
    <label><input type="radio" name="period" value="week" checked><span>週</span></label>
    <label><input type="radio" name="period" value="month"><span>月</span></label>
    <label><input type="radio" name="period" value="year"><span>年</span></label>
  </div>
</fieldset>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.segmented { border: 0; padding: 0; margin: 0; }
.segmented legend { font-size: 12px; margin-bottom: 4px; }
.seg-track {
  --n: 3; /* 選択肢の数 */
  --i: 0; /* 選ばれている番号（0から） */
  position: relative;
  display: grid;
  grid-template-columns: repeat(var(--n), 1fr);
  padding: 3px;
  border-radius: {{r}};
  background: #ecebe6;
}
/* 選ばれている印の白い板 */
.seg-indicator {
  position: absolute;
  inset: 3px auto 3px 3px;
  width: calc((100% - 6px) / var(--n));
  border-radius: max(0px, calc({{r}} - 3px));
  background: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.18);
  transform: translateX(calc(100% * var(--i)));
  transition: transform {{dur}} ease-out;
}
.seg-track label {
  position: relative;
  display: grid;
  place-items: center;
  min-height: {{h}};
  font-weight: 700;
  color: #5d6272;
  cursor: pointer;
}
/* 本物のラジオは見えなくするだけ。キーボードと読み上げは効いたまま */
.seg-track input { position: absolute; inset: 0; margin: 0; opacity: 0; cursor: pointer; }
.seg-track label:has(:checked) { color: #1f2433; }
.seg-track label:has(:focus-visible) { outline: 3px solid #4f73d9; outline-offset: 1px; }
/* JavaScript なしで板の位置を決める */
.seg-track:has(label:nth-of-type(2) :checked) { --i: 1; }
.seg-track:has(label:nth-of-type(3) :checked) { --i: 2; }

@media (prefers-reduced-motion: reduce) {
  .seg-indicator { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `// 選んだ瞬間に、同じグラフの期間を切り替える
document.querySelectorAll('input[name="period"]').forEach((radio) => {
  radio.addEventListener('change', () => {
    drawChart(radio.value); // 'week' | 'month' | 'year'
  });
});`,
    },
  ],
  tune: [
    { key: 'dur', label: '板がすべる速さ', min: 0.1, max: 0.6, step: 0.05, value: 0.25, unit: 's' },
    { key: 'r', label: '角の丸み', min: 0, max: 24, step: 2, value: 10, unit: 'px' },
    { key: 'h', label: 'ボタンの高さ', min: 32, max: 56, step: 2, value: 44, unit: 'px' },
  ],
  cautions: [
    '選ばれている項目は、白い板だけでなく文字の濃さでも区別します。板と背景の色の差が小さいと、どれが選ばれているか分かりにくくなります。',
    '選択肢の文字の長さをそろえます。「週」と「過去12か月の推移」が並ぶと、1つずつが同じ幅なので長い方が切れてしまいます。',
    'スマホでは1つずつの幅が狭くなります。5個を超えたら、セレクトかラジオボタンを検討してください。押せる高さは44px以上にします。',
    '切り替えで中身が大きく変わるなら、変わった内容（合計金額など）を aria-live の欄に入れておくと、読み上げソフトの人にも結果が伝わります。',
  ],
  similar: [
    { slug: 'tab-indicator', book: 'ugoki', diff: 'タブはまったく別の中身の面（概要・口コミ・地図）を切り替える部品で、下線がすべる演出がよく使われます。同じ中身の見せ方を変えるならセグメントコントロールです。' },
    { slug: 'toggle-switch', diff: 'トグルスイッチはオンとオフの2択専用です。2つの選択肢が「月払い・年払い」のように並列なら、セグメントコントロールの方が意味が伝わります。' },
    { slug: 'chips', diff: 'チップは複数を同時に選べる絞り込みの札です。セグメントコントロールは必ず1つだけを選びます。' },
  ],
  faq: [
    {
      q: 'セグメントコントロールとタブの違いは何ですか？',
      a: 'タブは別々の中身（面）を切り替え、セグメントコントロールは同じ中身の見せ方や範囲を切り替えます。たとえば「概要・口コミ・地図」はタブ、同じグラフの「週・月・年」はセグメントコントロールです。読み上げでもタブは role="tab"、セグメントコントロールはラジオボタンとして伝えるのが自然です。',
    },
    {
      q: '選択肢はいくつまでにするのがいいですか？',
      a: '2〜5個が目安です。スマホの幅で1つずつに十分な幅と44px以上の高さを取れるのがこのくらいで、それ以上は文字が切れたり押し間違えたりします。',
    },
    {
      q: 'ラジオボタンを使わず、button を並べて作ってもいいですか？',
      a: '作れますが、矢印キーで選び直す動き・「選択済み」の読み上げ・必ず1つだけ選ばれる仕組みを、すべて JavaScript と aria 属性で書く必要があります。ラジオボタンを土台にした方が少ないコードで漏れなく作れます。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
