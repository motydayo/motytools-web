import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'drawer',
  no: 2,
  category: 'overlay',
  name: 'ドロワー',
  en: 'Navigation drawer',
  aka: ['ナビゲーションドロワー', 'サイドドロワー', 'スライドメニュー', 'オフキャンバスメニュー', 'side drawer'],
  mode: 'script',
  title: 'ドロワーメニューとは？作り方とモーダルとの違い｜HTML・CSSの見本つき',
  description:
    'ドロワー（ナビゲーションドロワー）を触れる見本で解説。ハンバーガーメニューやモーダルとの違い、<dialog>で作る方法、Escや暗幕で閉じる・焦点を戻す・スワイプで閉じるといった決まりごと、AIへの頼み方まで分かります。',
  oneLine: '画面の端からメニューの板が滑り出て、ページの上に重なる。',
  what: [
    '画面の端（多くは左）から、縦長の板を引き出しのように滑り出させる部品です。見本では左上の三本線のボタンを押すと、サイトのメニューが入った板が出てきて、後ろのページは暗くなって押せなくなります。×・暗幕・Escキー・左へのスワイプのどれでも閉じられ、閉じると焦点（キーボードで今どこを操作しているかの印）は三本線のボタンに戻ります。',
    'モーダルとの違いは「出る場所と中身」です。モーダルは画面の真ん中で「ひとつの判断」を求めるのに対し、ドロワーは端に張り付いて「どこへ行くか」を選ばせます。三本線のボタンそのものはハンバーガーメニューと呼ばれ、ドロワーはそのボタンで開く板の名前です。スマホでメニュー項目が横に並びきらないとき、画面を狭くせずに5〜10個の行き先をしまっておけるのが価値です。',
  ],
  when: [
    'スマホ表示で、ヘッダーに並べきれないサイトのメニュー（5〜10項目）をしまっておきたいとき',
    'ECサイトやメディアで、カテゴリーの一覧を片手で上から順に選んでもらいたいとき',
    '管理画面やWebアプリで、PCでは常に出している左のメニューを、スマホでは引き出し式に切り替えたいとき',
    '絞り込みの条件が多い一覧ページで、条件パネルを横から出して結果の上に重ねたいとき',
  ],
  avoid: [
    'PCの広い画面で、3〜5個しかないメニューを隠すとき（ヘッダーに並べた方が早く見つかる）',
    'いちばん使ってほしい行き先（予約・購入）をドロワーの中だけに置くとき（開かれないと見つけてもらえない）',
    '下に並べた方が親指で届くスマホの主要な切り替え（タブバーの方が向く）',
  ],
  prompt:
    'スマホ表示のサイトメニューを「ドロワー（navigation drawer）」で作ってください。ヘッダー左の三本線ボタン（aria-label・aria-expanded付き）で開き、HTMLの <dialog> と showModal() を使ってください。板は画面の左端に上から下まで張り付け、幅は{{width:t}}（画面幅の85%を超えない）、開くときは{{dur:t}}かけて左から滑り込ませ、出るときは減速（ease-out）にしてください。後ろには濃さ{{dim:t}}の暗幕を敷き、開いている間はページをスクロールさせないでください。閉じ方は「×ボタン」「暗幕を押す」「Escキー」の3つ。閉じたら焦点を三本線ボタンに戻し、今いるページの項目には aria-current="page" を付けてください。動きを減らす設定（prefers-reduced-motion）では滑らせずに表示してください。',
  howTo: [
    '中身はリンクの一覧なので <nav> で囲み、それを <dialog> に入れて showModal() で開きます。これだけで「後ろを押せなくする」「Escで閉じる」「閉じたら開いたボタンへ焦点を戻す」がそろいます。あとは CSS で <dialog> の置き場所を画面中央から左端に変え、transform: translateX(-100%)（左の外に隠す）から 0 へ滑らせます。',
    '開く瞬間の出発点は @starting-style で書き、閉じる動きは transition の allow-discrete で付けます。暗幕を押して閉じる動作は <dialog> に入っていないので数行の JavaScript で足します。このとき <dialog> 自体の内側余白を0にして中身を1枚の箱で包むと、「板の余白を押したら閉じてしまった」という事故を防げます。見本は枠の中に収めるため div で作っていますが、決まりごとは同じです。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<button type="button" class="menu-btn" aria-label="メニューを開く"
  aria-controls="drawer" aria-expanded="false">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
</button>

<dialog id="drawer" class="drawer" aria-label="メニュー">
  <div class="drawer-inner">
    <button type="button" class="drawer-x" aria-label="閉じる">×</button>
    <nav aria-label="メニュー">
      <a href="/" aria-current="page">ホーム</a>
      <a href="/stays/">宿をさがす</a>
      <a href="/features/">特集・読みもの</a>
      <a href="/bookings/">予約の確認</a>
      <a href="/help/">よくある質問</a>
    </nav>
  </div>
</dialog>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.drawer {
  /* 画面中央ではなく、左端に上から下まで */
  margin: 0;
  inset: 0 auto 0 0;
  width: min({{width}}, 85vw);
  max-width: none;
  height: 100dvh;
  max-height: none;
  padding: 0;
  border: 0;
  background: #fff;
  /* 閉じているときは左の外へ。閉じる動きは加速 */
  transform: translateX(-100%);
  transition: transform {{dur}} ease-in,
    overlay {{dur}} allow-discrete, display {{dur}} allow-discrete;
}
.drawer[open] {
  transform: translateX(0);
  transition-timing-function: ease-out;
}
@starting-style {
  .drawer[open] { transform: translateX(-100%); }
}
.drawer-inner { height: 100%; padding: 16px; }
.drawer nav a { display: flex; align-items: center; min-height: 44px; }

/* 後ろの暗幕も一緒にふわっと */
.drawer::backdrop {
  background: rgb(20 24 40 / 0);
  transition: background {{dur}},
    overlay {{dur}} allow-discrete, display {{dur}} allow-discrete;
}
.drawer[open]::backdrop { background: rgb(20 24 40 / {{dim:n}}); }
@starting-style {
  .drawer[open]::backdrop { background: rgb(20 24 40 / 0); }
}

/* 開いている間は後ろをスクロールさせない */
html:has(.drawer[open]) { overflow: hidden; }

@media (prefers-reduced-motion: reduce) {
  .drawer, .drawer::backdrop { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const drawer = document.querySelector('#drawer');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
  drawer.showModal(); // Escで閉じる・後ろを押せなくするは自動
  menuBtn.setAttribute('aria-expanded', 'true');
});
drawer.querySelector('.drawer-x').addEventListener('click', () => drawer.close());

// 暗幕（板の外）を押したら閉じる
drawer.addEventListener('click', (e) => {
  if (e.target === drawer) drawer.close();
});

// どの方法で閉じても、ボタンの状態を戻す（焦点は自動で戻る）
drawer.addEventListener('close', () => {
  menuBtn.setAttribute('aria-expanded', 'false');
});`,
    },
  ],
  tune: [
    { key: 'width', label: '板の幅', min: 200, max: 360, step: 10, value: 280, unit: 'px' },
    { key: 'dur', label: '出る速さ', min: 0.1, max: 0.6, step: 0.05, value: 0.3, unit: 's' },
    { key: 'dim', label: '暗幕の濃さ', min: 0, max: 0.8, step: 0.05, value: 0.4, unit: '' },
  ],
  cautions: [
    '板の幅は画面いっぱいにしないでください。右に暗幕が少し見えていると「ここを押せば戻れる」と分かります。スマホでは画面幅の80〜85%までが目安です。',
    '開いている間に後ろのページがスクロールすると、閉じたときに読んでいた場所がずれます。html:has(.drawer[open]) { overflow: hidden; } で止めておきます。',
    '三本線のボタンには aria-label で「メニューを開く」と名前を付け、aria-expanded で開閉の状態を伝えます。アイコンだけのボタンは、読み上げソフトには名前のない「ボタン」としか伝わりません。',
    'スマホでは左へのスワイプで閉じたくなる人が多いので、余裕があれば付けます。ただし画面の左端からのスワイプは、iPhoneでは「前のページに戻る」操作とぶつかるので、開く操作には使わない方が安全です。',
  ],
  similar: [
    { slug: 'modal', diff: 'モーダルは画面の真ん中に出て、ひとつの判断や入力を求める小窓です。ドロワーは端から出て、行き先を選ぶメニューを入れます。' },
    { slug: 'hamburger-menu', diff: 'ハンバーガーメニューは三本線のボタン（入口）と、それで開くメニューの組み合わせを指します。ドロワーは、開いた先に出てくる板の名前です。' },
    { slug: 'bottom-sheet', diff: 'ボトムシートは画面の下からせり上がる板です。並び替えや共有先のような、その場の選択肢を親指の届く位置に出すのに向きます。' },
  ],
  faq: [
    {
      q: 'ドロワーとハンバーガーメニューは同じものですか？',
      a: '違います。ハンバーガーメニューは三本線のアイコンのボタン（またはそれを使ったメニューの仕組み全体）を指し、ドロワーはそのボタンで開く、端から出てくる板を指します。三本線を押すとドロワーが開く、という組み合わせが多いため混同されがちです。AIに頼むときは「三本線ボタンで左からドロワーを開く」と両方書くと確実です。',
    },
    {
      q: 'ドロワーは左と右のどちらから出すべきですか？',
      a: 'サイト全体のメニューは左から出すのが一般的で、AndroidのMaterial Designもナビゲーションドロワーは左（右から左に読む言語では右）としています。右からは、カートや絞り込み条件のように「その画面の補助」を出すときによく使われます。同じサイトの中で向きを混ぜないことが大事です。',
    },
    {
      q: 'ドロワーを開いたとき、キーボードの焦点はどこに置けばいいですか？',
      a: '板の中の最初の項目（または×ボタン）に移し、閉じるまで板の外へ出ないようにします。閉じたら三本線のボタンに戻します。<dialog> を showModal() で開けば、この3つはほぼ自動でそろいます。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
