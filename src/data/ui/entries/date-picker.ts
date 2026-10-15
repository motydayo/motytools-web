import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'date-picker',
  no: 21,
  category: 'input',
  name: 'デートピッカー',
  en: 'Date picker',
  aka: ['カレンダー入力', '日付選択', 'カレンダーピッカー', 'input type=date'],
  mode: 'script',
  title: 'デートピッカーの作り方｜input type=dateで足りる場面と自作する場面',
  description:
    'デートピッカー（カレンダーから日付を選ぶ部品）を触れる見本で解説。<input type="date">で足りる場面と、空き状況や料金を出すために自作する場面の見分け方、矢印キーでの日付移動、選べない日の伝え方までまとめました。',
  oneLine: '入力欄を押すとカレンダーが開き、日を押して日付を選ぶ。',
  what: [
    '日付の入力欄を押すと、その下にカレンダーが開き、日を押すと入力欄にその日付が入る部品です。見本では「チェックイン」を押すと11月のカレンダーが出て、日ごとの料金が小さく表示され、満室の日は線で消されて押せません。日を選ぶとカレンダーが閉じ、「2026年11月3日（火）・1泊 16,000円」と結果が出ます。',
    'まず考えたいのは、HTML の <input type="date"> で足りるかどうかです。誕生日・申込日・期限のように「日付を1つ入れてもらう」だけなら、ブラウザが自分のカレンダーを出してくれるので十分です。スマホでは各OSの慣れた選び方になり、キーボード操作や読み上げも最初から入っています。見本のように、日ごとの空き状況・料金・祝日を見せたい、チェックインとチェックアウトの範囲を選ばせたい、というときに初めて自作します。',
    '自作するときの決まりごとは次のとおりです。入力欄のボタンで開き、焦点はカレンダーの中の日へ移ります。左右の矢印キーで1日、上下で1週、PageUp と PageDown で前後の月、Home と End で週の端へ動き、Enter で決定、Esc で閉じて入力欄のボタンへ焦点を戻します。各日には「11月3日（火）16,000円」のように曜日まで含めた名前を付け、選べない日は disabled にして「満室」と伝えます。日付の選択は「決定」まで反映しない入力なので、予約フォームなら最後に「空室を確認する」のような送信ボタンを置きます。',
  ],
  when: [
    'ホテル・旅館・飲食店の予約で、空いている日と料金を見ながら日付を選んでもらうとき',
    '美容室・病院の予約で、予約できる日だけを選べるようにしたいとき',
    '配送日の指定で、選べる期間（3日後〜2週間後）を最初から絞って見せたいとき',
    '申込日や期限など、日付を1つ入れてもらうとき（この場合は <input type="date"> で十分）',
  ],
  avoid: [
    '生年月日の入力（何十年もさかのぼるのにカレンダーをめくらせることになる。年・月・日の入力欄かセレクトにする）',
    '「来週の金曜日」のように曜日で考えてほしいのに、日付の数字だけを並べる作り（曜日の見出しを必ず付ける）',
    '標準の <input type="date"> で足りるのに、見た目のためだけに自作すること（キーボードや読み上げの対応で漏れが出やすい）',
  ],
  prompt:
    '宿の予約フォームのチェックイン日を選ぶ「デートピッカー（date picker）」を作ってください。入力欄はボタンにして、押すと真下にカレンダーの小窓（role="dialog"）を開いてください。カレンダーは table の grid で、週は{{week:t}}にし、1マスは{{cell:t}}四方、日の下に1泊の料金を小さく出し、満室の日と過去の日は線で消して disabled にしてください。選んだ日は{{color:t}}で塗ってください。開いたら焦点を選んでいる日へ移し、矢印キーで1日・1週、PageUp/PageDown で月、Home/End で週の端へ動けるようにし、Enter で決定、Esc で閉じて入力欄へ焦点を戻してください。各日には「11月3日（火）16,000円」のように曜日と料金を含めた aria-label を付けてください。単純に日付を1つ入れるだけの欄は、自作せず <input type="date"> にしてください。',
  howTo: [
    '日付を1つ入れてもらうだけなら、<input type="date"> が答えです。min と max で選べる範囲を絞れ、スマホではOSのカレンダーやドラム式の選び方が出ます。accent-color でカレンダーの色を少し変えられ、showPicker() を呼べば、自分で置いたボタンからカレンダーを開くこともできます。',
    '「この日は満室」のように、範囲の中の特定の日だけを選べなくするのは <input type="date"> にはできません。そこで下のコードのように、選ばれた日を JavaScript で確かめ、setCustomValidity() で「その日は満室です」と伝えます。日ごとの料金や空き状況をカレンダーの上に出したいときは、見本のようにカレンダー自体を自作します。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<form class="booking">
  <label for="checkin">チェックイン</label>
  <input type="date" id="checkin" name="checkin" class="date-input"
    min="2026-10-15" max="2026-12-31" required
    aria-describedby="checkin-note">
  <p id="checkin-note" class="date-note"></p>
  <button type="submit">空室を確認する</button>
</form>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.date-input {
  min-height: 44px;
  padding: 0 12px;
  border: 1.5px solid #c9c7c0;
  border-radius: 10px;
  font: inherit;
  font-size: 16px; /* iPhone で拡大されないように16px以上 */
  accent-color: {{color}}; /* カレンダーの選択色（対応ブラウザのみ） */
}
.date-input:focus { border-color: #4f73d9; outline: 3px solid rgb(79 115 217 / 0.2); }
.date-input:user-invalid { border-color: #c0392b; }
.date-note { min-height: 20px; font-size: 13px; }`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const input = document.querySelector('#checkin');
const note = document.querySelector('#checkin-note');
const SOLD_OUT = ['2026-11-07', '2026-11-14', '2026-11-21'];

// 今日より前は選べないようにする
input.min = new Date().toLocaleDateString('sv-SE'); // 2026-10-15 の形

input.addEventListener('change', () => {
  if (!input.value) return;
  const d = new Date(input.value + 'T00:00');
  const w = '日月火水木金土'[d.getDay()];
  if (SOLD_OUT.includes(input.value)) {
    // 満室の日は選べない（送信時にブラウザが知らせる）
    input.setCustomValidity('その日は満室です。別の日を選んでください');
    note.textContent = '';
  } else {
    input.setCustomValidity('');
    // 曜日を添えて、選んだ日を確かめやすくする
    note.textContent = \`\${d.getMonth() + 1}月\${d.getDate()}日（\${w}）にチェックイン\`;
  }
  input.reportValidity();
});`,
    },
  ],
  tune: [
    { key: 'cell', label: '1マスの大きさ', min: 32, max: 52, step: 2, value: 44, unit: 'px' },
    { key: 'color', type: 'color', label: '選んだ日の色', value: '#f06a35' },
    {
      key: 'week',
      type: 'select',
      label: '週のはじまり',
      value: 'sun',
      options: [
        { value: 'sun', label: '日曜はじまり' },
        { value: 'mon', label: '月曜はじまり' },
      ],
    },
  ],
  cautions: [
    '日付の書き方は入力欄の横か下に必ず見せます。「2026/11/03」なのか「11月3日（火）」なのかが分かれば、選び間違いに気づけます。曜日を添えるのが特に効きます。',
    '1マスは44px四方が目安です。スマホの幅で7列を並べると1マスが狭くなりがちなので、つまみで小さくしたときの押しにくさを確かめてください。',
    '週のはじまりは国や業種で違います。日本のカレンダーは日曜はじまりが多く、ヨーロッパや仕事の予定表は月曜はじまりが多いので、使う人に合わせます。',
    '選べない日は色を薄くするだけでなく、線で消す・「満」と書くなど形でも示し、読み上げにも「満室」と伝えます。押しても反応しない理由が分からないと、壊れていると思われます。',
    'iPhone の Safari では、文字の大きさが16px未満の入力欄を押すと画面が拡大されます。日付の入力欄も16px以上にします。',
  ],
  similar: [
    { slug: 'autocomplete', diff: 'オートコンプリートも入力欄の下に一覧を出しますが、文字を打って候補を絞り込む部品です。デートピッカーは日付専用で、カレンダーから押して選びます。' },
    { slug: 'popover', diff: 'ポップオーバーはボタンの近くに小さな板を出す部品全般です。デートピッカーのカレンダーは、ポップオーバーの中身として日付選びに特化したものです。' },
    { slug: 'modal', diff: 'スマホでは、カレンダーを入力欄の下ではなく、画面全体のモーダルやボトムシートで出す作りもよく使われます。' },
  ],
  faq: [
    {
      q: '<input type="date"> の見た目は変えられますか？',
      a: '入力欄そのものの枠や文字の大きさは CSS で変えられますが、開くカレンダーの中身はブラウザとOSが描くので、ほとんど変えられません。accent-color で選択色を変えられる程度です。カレンダーの中身まで作り込みたいときは、見本のように自作します。',
    },
    {
      q: 'チェックインとチェックアウトのように、期間を選ぶにはどうしますか？',
      a: '<input type="date"> を2つ並べ、2つ目の min を1つ目の日付の翌日にするのが手軽です。1つのカレンダーで「最初に押した日から次に押した日まで」を塗る作りは見やすい反面、自作が必要で、キーボード操作の作り込みも増えます。',
    },
    {
      q: 'カレンダーを開いたとき、焦点はどこに置けばいいですか？',
      a: '選んでいる日があればその日、なければ今日（または選べる最初の日）に置くのが決まりです。焦点がカレンダーの外に残ると、キーボードの人は日を選び始められません。閉じたら、開いたボタンに焦点を戻します。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
