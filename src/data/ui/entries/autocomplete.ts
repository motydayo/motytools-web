import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'autocomplete',
  no: 20,
  category: 'input',
  name: 'オートコンプリート',
  en: 'Autocomplete (combobox)',
  aka: ['入力補完', 'サジェスト', 'コンボボックス', 'インクリメンタルサーチ', 'datalist'],
  mode: 'script',
  title: 'オートコンプリート（入力補完）の作り方｜セレクトとの違いとキーボード操作',
  description:
    'オートコンプリート（コンボボックス）を触れる見本で解説。セレクトとの使い分け、HTMLのdatalistで足りる場合、矢印キー・Enter・Escの決まりごと、読み上げへの伝え方、打つたびに問い合わせない工夫までまとめました。',
  oneLine: '入力欄に文字を打つと、合う候補が下に出て選べる。',
  what: [
    '入力欄に文字を打つと、その文字に合う候補が真下に一覧で出て、そこから選べる部品です。見本の「行き先」に「は」と打つと箱根・函館・博多などが出て、「はこ」まで打つと2つに絞られます。打った部分は太字になり、なぜその候補が出たのかが分かります。',
    'よく比べられるのがセレクト（プルダウン）です。セレクトは決まった選択肢を全部並べて、その中から選ばせる部品で、都道府県のように47個程度までなら十分使えます。候補が数百・数千ある（駅名・住所・商品名）、または一覧にない言葉も自由に入れてよい、というときはオートコンプリートにします。全部を眺めるより、数文字打って絞る方が速いからです。',
    '決まりごとはキーボードにあります。下矢印で候補に入り、上下で移動、Enter で決定、Esc で候補を閉じます（もう一度 Esc で入力を消す）。このとき焦点は入力欄に置いたまま、「今どの候補を選んでいるか」を aria-activedescendant で読み上げソフトに伝えます。入力欄には role="combobox" と aria-expanded（候補が開いているか）を付けます。手軽に済ませたいなら、HTML の <datalist> だけでも簡単な入力補完ができます。',
  ],
  when: [
    '旅行・乗換案内で、行き先や駅名を数文字打って選んでもらうとき',
    '住所の入力で、郵便番号や市区町村名から候補を出すとき',
    'ネットショップの検索窓で、よく検索される言葉や商品名を先回りして出すとき',
    '社内ツールで、何百人もいる担当者の名前から1人を選ぶとき',
  ],
  avoid: [
    '選択肢が10個以下のとき（セレクトやラジオボタンで全部見せた方が速い）',
    '候補にない言葉を入れられては困るのに、自由入力を許してしまう作り（候補から選ぶまで決定できないようにする）',
    '打つたびにサーバーへ問い合わせて、候補の表示が遅れたり順番が入れ替わったりする作り（少し待ってから問い合わせる）',
  ],
  prompt:
    '旅行サイトの「行き先」入力欄を「オートコンプリート（autocomplete / combobox）」で作ってください。label は常に表示し、例文は「例: はこね、はかた」にしてください。入力欄は role="combobox"・aria-autocomplete="list"・aria-expanded・aria-controls を持ち、候補は ul[role="listbox"] と li[role="option"] で真下に出してください。打つたびではなく、手が止まって{{delay:t}}待ってから候補を絞り込み、最大{{rows:t}}件まで表示し、それより多いときは「ほか○件」と出してください。読み仮名の前方一致でも探せるようにし、打った部分は太字にしてください。下矢印で候補に入り、上下で移動、Enter で決定、Esc で閉じ、選んでいる候補は aria-activedescendant で伝えてください（焦点は入力欄のまま）。候補の数は role="status" の欄で知らせ、候補がないときは「合う行き先が見つかりません」と出してください。',
  howTo: [
    'まず HTML の <datalist> で足りるかを考えます。<input list="..."> と <datalist> に候補を書くだけで、ブラウザが入力補完を出してくれます。ただし見た目は変えられず、読み仮名での検索や「ほか○件」の表示もできないので、作り込みたいときはこの見本のように自分で作ります。',
    '自分で作るときは、入力欄（role="combobox"）と候補の一覧（role="listbox"）の組にします。input イベントで少し待ってから候補を作り直し、keydown で矢印キー・Enter・Esc を受け持ちます。焦点は入力欄から動かさず、選んでいる候補の id を aria-activedescendant に入れるのが決まりです。候補をマウスで押したときに入力欄の焦点が外れないよう、pointerdown で preventDefault() しておきます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<label for="dest">行き先</label>
<div class="combo">
  <input id="dest" type="text" role="combobox" autocomplete="off"
    aria-autocomplete="list" aria-expanded="false" aria-controls="dest-list"
    placeholder="例: はこね、はかた">
  <ul id="dest-list" role="listbox" hidden></ul>
</div>
<p class="combo-status" role="status"></p>

<!-- 手軽に済ませるなら datalist だけでも動く -->
<!-- <input list="cities"><datalist id="cities"><option value="箱根"></datalist> -->`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.combo { position: relative; }
.combo input { width: 100%; height: 44px; padding: 0 12px; border: 1.5px solid #c9c7c0; border-radius: 10px; }
.combo input:focus { border-color: #4f73d9; outline: 3px solid rgb(79 115 217 / 0.2); }
.combo [role="listbox"] {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  z-index: 10;
  margin: 0;
  padding: 4px;
  list-style: none;
  background: #fff;
  border: 1px solid #e4e2dc;
  border-radius: 10px;
  box-shadow: 0 12px 24px -12px rgb(20 24 40 / 0.35);
}
.combo [role="option"] { min-height: 44px; padding: 10px 12px; border-radius: 6px; cursor: pointer; }
/* 矢印キー・マウスで今選んでいる候補 */
.combo [role="option"][aria-selected="true"] { background: #e8eefc; }`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const CITIES = [['箱根', 'はこね'], ['函館', 'はこだて'], ['博多', 'はかた'] /* … */];
const input = document.querySelector('#dest');
const list = document.querySelector('#dest-list');
const status = document.querySelector('.combo-status');
const MAX = {{rows:n}};
let hits = [];
let active = -1;
let timer;

const close = () => {
  list.hidden = true;
  active = -1;
  input.setAttribute('aria-expanded', 'false');
  input.removeAttribute('aria-activedescendant');
};
const setActive = (i) => {
  active = i;
  [...list.children].forEach((li, k) => li.setAttribute('aria-selected', k === i));
  input.setAttribute('aria-activedescendant', \`opt-\${i}\`);
};
const render = () => {
  // 候補を作り直すので、前の選択は外す
  active = -1;
  input.removeAttribute('aria-activedescendant');
  const q = input.value.trim();
  hits = q ? CITIES.filter(([n, r]) => n.includes(q) || r.startsWith(q)) : [];
  if (!hits.length) {
    close();
    status.textContent = q ? \`「\${q}」に合う行き先が見つかりません\` : '';
    return;
  }
  list.innerHTML = hits.slice(0, MAX)
    .map(([n, r], i) => \`<li role="option" id="opt-\${i}" aria-selected="false">\${n}（\${r}）</li>\`)
    .join('');
  list.hidden = false;
  input.setAttribute('aria-expanded', 'true');
  status.textContent = \`\${hits.length}件の候補があります\`;
};
const pick = (i) => {
  input.value = hits[i][0];
  close();
};

// 打つたびではなく、手が止まってから候補を出す
input.addEventListener('input', () => {
  clearTimeout(timer);
  timer = setTimeout(render, {{delay:n}});
});
input.addEventListener('keydown', (e) => {
  if (e.isComposing) return; // 日本語の変換中の Enter・矢印は横取りしない
  const n = list.children.length;
  if (e.key === 'ArrowDown') { e.preventDefault(); list.hidden ? render() : setActive((active + 1) % n); }
  if (e.key === 'ArrowUp' && !list.hidden) { e.preventDefault(); setActive(active <= 0 ? n - 1 : active - 1); }
  if (e.key === 'Enter' && active >= 0) { e.preventDefault(); pick(active); }
  if (e.key === 'Escape') list.hidden ? (input.value = '') : close();
});
input.addEventListener('blur', () => setTimeout(close, 120));
// 押した瞬間に入力欄の焦点が外れないようにする
list.addEventListener('pointerdown', (e) => e.preventDefault());
list.addEventListener('click', (e) => {
  const li = e.target.closest('[role="option"]');
  if (li) pick([...list.children].indexOf(li));
});`,
    },
  ],
  tune: [
    { key: 'delay', label: '候補を出すまでの待ち', min: 0, max: 600, step: 50, value: 150, unit: 'ms' },
    { key: 'rows', label: '表示する候補の数', min: 3, max: 8, step: 1, value: 5, unit: '' },
  ],
  cautions: [
    'ラベルを例文の代わりにしないでください。「行き先」の文字は入力欄の上に常に出し、例文（プレースホルダー）は「例: はこね」のような形のヒントにだけ使います。',
    '候補をサーバーに問い合わせる場合、打つたびに送ると、遅れて届いた古い答えが新しい答えを上書きすることがあります。少し待ってから送り、最後に送った問い合わせの答えだけを使います。',
    'スマホでは画面の下半分がキーボードで隠れます。候補は入力欄の真下に出し、表示する数を5件前後に抑えて、キーボードに隠れないようにします。',
    '日本語入力では、変換を確定する前（「はこ」の段階）にも input イベントが飛びます。読み仮名でも探せるようにしておくと、変換前から候補を出せて便利です。',
  ],
  similar: [
    { slug: 'dropdown-menu', diff: 'ドロップダウンメニューはボタンを押すと「操作」の一覧が出る部品です。オートコンプリートは文字を打って「値」を選ぶ入力欄です。' },
    { slug: 'chips', diff: 'チップは決まった条件を押して選ぶ部品です。選んだ値をチップにして並べる「タグ入力」は、オートコンプリートと組み合わせてよく使われます。' },
    { slug: 'date-picker', diff: 'デートピッカーも入力欄の下に選ぶための一覧（カレンダー）を出しますが、中身は日付専用で、文字を打って絞り込むものではありません。' },
  ],
  faq: [
    {
      q: 'オートコンプリートとセレクト（プルダウン）はどう使い分けますか？',
      a: '選択肢の数と、自由入力を許すかで分けます。選択肢が十数個までで一覧から選ばせたいならセレクト、数百個以上ある・一部を覚えていれば打って探せる・一覧にない言葉も入れてよい、ならオートコンプリートです。',
    },
    {
      q: 'HTMLの datalist だけではだめですか？',
      a: '簡単な入力補完なら datalist で十分です。ただし候補の見た目や並び順を変えられず、ブラウザによって出方も違い、読み仮名での検索や「候補が何件あるか」の案内もできません。見た目や操作をそろえたいときに、この記事のように自分で作ります。',
    },
    {
      q: 'aria-activedescendant は何のために付けるのですか？',
      a: '焦点を入力欄に置いたまま、「今どの候補を選んでいるか」を読み上げソフトに伝えるためです。焦点そのものを候補へ動かすと、続けて文字を打てなくなります。入力欄の aria-activedescendant に、選んでいる候補の id を入れます。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
