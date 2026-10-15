import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'dropdown-menu',
  no: 6,
  category: 'overlay',
  name: 'ドロップダウンメニュー',
  en: 'Dropdown menu',
  aka: ['プルダウンメニュー', 'メニューボタン', 'ケバブメニュー', 'コンテキストメニュー', 'menu button'],
  mode: 'script',
  title: 'ドロップダウンメニューの作り方｜セレクトボックスとの違いとキーボード操作',
  description:
    'ドロップダウンメニュー（メニューボタン）を触れる見本で解説。セレクトボックスやポップオーバーとの違い、矢印キーで移動・Escで閉じるといったキーボードの決まり、role="menu"の付け方とコピーできるコードまで分かります。',
  oneLine: 'ボタンを押すと、すぐ下に操作の一覧が開き、選ぶと実行される。',
  what: [
    'ボタンを押すと、そのすぐ下に「できること」の一覧を開く部品です。見本では予約カードの「予約の操作」を押すと、変更・領収書・カレンダーに追加・キャンセルの4つが開き、選ぶとすぐ実行されて一覧は閉じます。キーボードでは、ボタンでEnterを押すと開いて最初の項目に焦点（今どこを操作しているかの印）が移り、↑↓で移動、Enterで実行、Escで閉じてボタンに戻ります。',
    '似た見た目のセレクトボックス（<select>）は「値を選んで入力する」部品で、選んだ値が欄に残ります。ドロップダウンメニューは「操作を選んで実行する」部品で、選んでも何も残りません。この違いで、作り方も読み上げの役割（role）も変わります。1件ごとの操作がたくさんあるとき、画面にボタンを並べずに済み、カードや表の行をすっきり保てるのが価値です。',
  ],
  when: [
    '予約・注文・ファイルの一覧で、1件ごとの「変更・複製・削除」をまとめたいとき',
    'ヘッダーのアカウント名から、設定・お知らせ・ログアウトを選ばせたいとき',
    '管理画面の表で、行ごとの操作を右端の「⋯」ボタンにしまいたいとき',
    'エディターの道具の並びで、使う頻度の低い操作を「その他」にまとめたいとき',
  ],
  avoid: [
    '入力欄として値を1つ選ばせるとき（それはセレクトボックス。<select> を使う）',
    'いちばん使われる操作をメニューの中に隠すとき（よく使う1つはボタンとして外に出す）',
    'サイトの行き先（リンク）を並べるだけのとき（role="menu" ではなく、ふつうのリンクの一覧を開閉する）',
  ],
  prompt:
    '予約カードの右上に「ドロップダウンメニュー（menu button）」を作ってください。ボタンには aria-haspopup="menu" と aria-expanded を付け、押すとすぐ下に右端をそろえて role="menu" の一覧を開き、項目は role="menuitem" にしてください。項目は「予約内容を変更・領収書を表示・カレンダーに追加」、区切り線のあとに赤字で「予約をキャンセル」。1行の高さは{{itemh:t}}、角丸は{{radius:t}}、開くときは{{dur:t}}かけて少し縮んだ状態から減速して出してください。キーボードは WAI-ARIA の menu button の決まりどおり、Enter・Space・↓で開いて最初の項目へ、↑で開いて最後の項目へ、一覧の中は↑↓で移動（端で折り返す）、Home・Endで先頭・末尾、Enterで実行、Escで閉じてボタンへ焦点を戻す、Tabで閉じる、にしてください。外を押しても閉じ、動きを減らす設定（prefers-reduced-motion）では動かさずに開いてください。',
  howTo: [
    'HTMLにはドロップダウンメニュー専用の要素がないので、ボタン（<button>）と一覧（<ul role="menu">）で組みます。ボタンには aria-haspopup="menu"（押すとメニューが開く）と aria-expanded（今開いているか）を付け、項目は role="menuitem" と tabindex="-1" にします。tabindex="-1" にするのは、Tabキーでは項目を1つずつ渡り歩かず、矢印キーで動かす決まりだからです。',
    '開閉と矢印キーの処理は JavaScript で書きます。開いたら最初の項目に focus() し、↑↓で前後の項目へ、Escで閉じてボタンへ焦点を戻します。一覧はボタンと同じ箱（position: relative）の中に position: absolute で置くと、スクロールしてもボタンの下から離れません。親の要素に overflow: hidden があって一覧が切れてしまうときは、popover 属性で一番上の層に出す作り方に切り替えます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="menu-wrap">
  <button type="button" class="menu-btn" id="manage-btn"
    aria-haspopup="menu" aria-expanded="false" aria-controls="manage-menu">
    予約の操作
  </button>
  <ul class="menu" id="manage-menu" role="menu" aria-labelledby="manage-btn" hidden>
    <li role="none"><button type="button" role="menuitem" tabindex="-1">予約内容を変更</button></li>
    <li role="none"><button type="button" role="menuitem" tabindex="-1">領収書を表示</button></li>
    <li role="none"><button type="button" role="menuitem" tabindex="-1">カレンダーに追加</button></li>
    <li role="separator"></li>
    <li role="none"><button type="button" role="menuitem" tabindex="-1" class="danger">予約をキャンセル</button></li>
  </ul>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.menu-wrap { position: relative; display: inline-block; }

.menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0; /* ボタンの右端にそろえる */
  z-index: 20;
  min-width: 220px;
  margin: 0;
  padding: 6px;
  list-style: none;
  border: 1px solid #e4e2dc;
  border-radius: {{radius}};
  background: #fff;
  box-shadow: 0 16px 40px -12px rgb(20 24 40 / 0.35);
  transform-origin: top right;
  transition: opacity {{dur}} ease-out, transform {{dur}} ease-out;
}
/* 開いた瞬間の出発点（少し縮んで透明） */
@starting-style {
  .menu:not([hidden]) { opacity: 0; transform: scale(0.96) translateY(-4px); }
}

[role='menuitem'] {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: {{itemh}};
  padding: 0 12px;
  border: 0;
  border-radius: 6px;
  background: none;
  font: inherit;
  text-align: left;
}
[role='menuitem']:hover,
[role='menuitem']:focus-visible {
  background: #f2f0ea;
  outline: 2px solid #4f73d9;
  outline-offset: -2px;
}
[role='menuitem']:hover:not(:focus-visible) { outline: none; }
[role='menuitem'].danger { color: #c4321f; }
[role='separator'] { height: 1px; margin: 4px 6px; background: #e4e2dc; }

@media (prefers-reduced-motion: reduce) {
  .menu { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('#manage-menu');
const items = [...menu.querySelectorAll('[role="menuitem"]')];

const open = (index = 0) => {
  menu.hidden = false;
  btn.setAttribute('aria-expanded', 'true');
  items.at(index).focus();
};
const close = (refocus = true) => {
  menu.hidden = true;
  btn.setAttribute('aria-expanded', 'false');
  if (refocus) btn.focus();
};
// 端まで行ったら反対の端へ折り返す
const move = (i) => items.at(i % items.length).focus();

// クリック・Enter・Space は click になる
btn.addEventListener('click', () => (menu.hidden ? open(0) : close()));
btn.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    open(e.key === 'ArrowDown' ? 0 : -1);
  }
});

menu.addEventListener('keydown', (e) => {
  const i = items.indexOf(document.activeElement);
  const to = { ArrowDown: i + 1, ArrowUp: i - 1, Home: 0, End: -1 }[e.key];
  if (to !== undefined) {
    e.preventDefault();
    move(to);
  } else if (e.key === 'Escape') close();
  else if (e.key === 'Tab') close(false);
});

menu.addEventListener('click', (e) => {
  const item = e.target.closest('[role="menuitem"]');
  if (!item) return;
  close();
  // ここで項目ごとの処理をする
});

// 外を押したら閉じる
document.addEventListener('pointerdown', (e) => {
  if (!menu.hidden && !menu.parentElement.contains(e.target)) close(false);
});`,
    },
  ],
  tune: [
    { key: 'dur', label: '開く速さ', min: 0.1, max: 0.4, step: 0.05, value: 0.15, unit: 's' },
    { key: 'itemh', label: '1行の高さ', min: 32, max: 56, step: 2, value: 44, unit: 'px' },
    { key: 'radius', label: '角の丸み', min: 0, max: 16, step: 2, value: 10, unit: 'px' },
  ],
  cautions: [
    '1行の高さは44px以上にします。PCだけを考えて32px前後にすると、スマホでは隣の項目を押し間違えます。取り消せない項目（キャンセル・削除）は区切り線で離し、赤字にします。',
    'role="menu" を付けると、読み上げソフトは「矢印キーで操作するメニュー」として扱います。付けたのに矢印キーで動かないと、かえって使えなくなります。キーボードの処理まで作れないなら、role を付けずにボタンの一覧を開閉するだけの方が安全です。',
    'サイトの行き先を並べるナビゲーションには role="menu" を使いません。リンクの一覧を開閉する「ディスクロージャー（開閉ボタン）」として作り、Tabキーで1つずつ移れるようにします。',
    '「⋯」だけのボタンには aria-label で「予約の操作」のような名前を付けます。項目の名前は「領収書」より「領収書を表示」と、押すと何が起きるかが分かる動詞にします。',
  ],
  similar: [
    { slug: 'popover', diff: 'ポップオーバーはボタンのそばに開く自由な小窓で、入力欄や説明を入れられます。ドロップダウンメニューは操作の一覧に絞り、矢印キーで選ぶ決まりがあります。' },
    { slug: 'bottom-sheet', diff: 'ボトムシートは画面の下から出る板です。スマホでは、同じ操作の一覧をドロップダウンではなくボトムシートで出すこともよくあります。' },
    { slug: 'tooltip', diff: 'ツールチップは乗せると名前や説明が出るだけで、押せる項目は持ちません。' },
  ],
  faq: [
    {
      q: 'ドロップダウンメニューとセレクトボックス（プルダウン）の違いは何ですか？',
      a: 'セレクトボックス（<select>）は「値を1つ選んで入力する」部品で、選んだ値が欄に残り、フォームと一緒に送られます。ドロップダウンメニューは「操作を選んで実行する」部品で、選んでも値は残りません。都道府県を選ぶなら<select>、「複製・削除」を選ぶならドロップダウンメニューです。',
    },
    {
      q: 'ドロップダウンメニューのキーボード操作の決まりは？',
      a: 'WAI-ARIAの決まり（menu button）では、ボタンでEnter・Space・↓を押すと開いて最初の項目へ、↑なら最後の項目へ移ります。一覧の中は↑↓で移動、Home・Endで先頭と末尾、Enterで実行、Escで閉じてボタンに戻ります。Tabキーを押したら閉じて次の要素へ進みます。',
    },
    {
      q: 'マウスを乗せただけで開くメニューにしてもいいですか？',
      a: 'おすすめしません。乗せるだけで開くメニューは、スマホでは開けず、マウスでも斜めに動かしたときに閉じてしまいがちです。押して開く作りにすれば、マウス・タップ・キーボードのどれでも同じように使えます。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
