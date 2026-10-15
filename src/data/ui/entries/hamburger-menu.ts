import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'hamburger-menu',
  no: 8,
  category: 'nav',
  name: 'ハンバーガーメニュー',
  en: 'Hamburger menu',
  aka: ['三本線メニュー', 'ハンバーガーアイコン', 'メニューボタン', 'ナビゲーションメニュー'],
  mode: 'script',
  title: 'ハンバーガーメニューとは？CSSでの作り方と×に変わる動き【見本つき】',
  description:
    'ハンバーガーメニュー（三本線のメニューボタン）を触れる見本で解説。ドロワーとの違い、三本線が×に変わる動きのCSS、aria-expandedやEscキーなどの決まりごと、スマホとパソコンでの出し分け、AIへの頼み方までまとめました。',
  oneLine: '三本線のボタンを押すと×に変わり、隠れていたメニューが出る。',
  what: [
    '画面の隅に置いた「三本線のボタン」と、それを押すと出てくるメニューの組み合わせを、ハンバーガーメニューと呼びます。三本線がパンと具を重ねたハンバーガーに見えることからついた名前です。見本では右上の三本線を押すと線が×に変わり、ヘッダーの下からメニューが出ます。もう一度押すか、Escキーで閉じます。',
    'よく混同されるのがドロワーです。ハンバーガーは「ボタン（入口）」の名前で、ドロワーは「画面の端から引き出す板（出てくるもの）」の名前です。ハンバーガーを押してドロワーが出るサイトもあれば、見本のようにヘッダーの下へ広がるサイトもあります。AIに頼むときは「ハンバーガーボタンで、右から出るドロワーを開く」のように、入口と出てくるものを分けて書くと伝わります。',
    '決まりごとは3つです。ボタンに aria-expanded（開いているかどうか）と「メニューを開く」のような読み上げ用の名前を付ける。押せる範囲は44px四方以上にする。Escキーで閉じ、閉じたら焦点をボタンに戻す。狭い画面でメニューを隠してすっきりさせる代わりに、「どこに何があるか」が見えなくなる部品だということも覚えておきます。',
  ],
  when: [
    'スマホ表示で、ヘッダーに5つ以上のメニューを並べきれないとき',
    '店舗・会社のサイトのように、ページの数は多いが毎回すべてを行き来するわけではないとき',
    'LPで、本文とお申し込みボタンに集中してほしく、メニューは控えめにしたいとき',
    'パソコンでは横並びのメニューを出し、狭い画面だけ三本線にまとめたいとき',
  ],
  avoid: [
    'パソコンの広い画面で、横に並べられる3〜4個のメニューまで隠すとき（押さないと中身が分からず、使われにくくなる）',
    'アプリのように主な行き先が3〜5個で頻繁に行き来するとき（下のタブバーの方が1回で届く）',
    '「お申し込み」「カート」のような最重要の行き先を、メニューの中にしまうとき（ヘッダーに直接出す）',
  ],
  prompt:
    'サイトのヘッダーに「ハンバーガーメニュー（hamburger menu）」を作ってください。画面幅768px未満では右上に三本線のボタンを出し、768px以上ではメニューを横並びで表示してください。ボタンは <button> で、押せる範囲は44px四方、線の太さは{{line:t}}、線と線の間隔は{{gap:t}}にしてください。押すと{{dur:t}}かけて三本線が×に変わり（上下の線を45度回転・真ん中を消す）、ヘッダーの下に全面のメニューが同じ速さで減速しながら出るようにしてください。ボタンには aria-expanded と aria-controls、開閉に合わせて「メニューを開く／閉じる」の aria-label を付け、メニューは <nav aria-label="メインメニュー"> にしてください。Escキーで閉じて焦点をボタンへ戻し、開いている間は後ろのページをスクロールさせないでください。動きを減らす設定（prefers-reduced-motion）では変形を省いてください。',
  howTo: [
    'ボタンは必ず <button> で作り、中に三本の線（span）を入れます。線は position: absolute で重ね、上下の線を transform: translateY でずらして三本線にします。開いた状態（aria-expanded="true"）では、上下の線を中央へ戻して45度・-45度に回し、真ん中の線を透明にすると×になります。見た目の状態を aria-expanded に結びつけておくと、見た目と読み上げがずれません。',
    'メニューは閉じている間 hidden 属性で隠し、ボタンを押したら外します。開閉の JavaScript は aria-expanded・hidden・aria-label を切り替えるだけです。見本は枠の中に収めるため absolute で出していますが、本番では position: fixed でヘッダーの下を覆います。パソコン幅ではメディアクエリで三本線を隠し、メニューを横並びで常に表示します。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<header class="site-header">
  <a href="/" class="brand">SORA</a>
  <button type="button" class="menu-btn"
    aria-expanded="false" aria-controls="site-menu" aria-label="メニューを開く">
    <span class="bar"></span><span class="bar"></span><span class="bar"></span>
  </button>
  <nav id="site-menu" class="site-menu" aria-label="メインメニュー">
    <ul>
      <li><a href="/menu/">メニュー</a></li>
      <li><a href="/shops/">お店の場所</a></li>
      <li><a href="/hours/">営業時間</a></li>
      <li><a href="/shop/">オンラインショップ</a></li>
    </ul>
  </nav>
</header>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.site-header {
  position: sticky; top: 0; z-index: 50;
  display: flex; align-items: center; justify-content: space-between;
  height: 56px; padding: 0 16px; background: #fff;
}
/* 三本線のボタン（押せる範囲は44px四方） */
.menu-btn {
  position: relative; width: 44px; height: 44px;
  border: 0; background: none; cursor: pointer;
}
.bar {
  position: absolute; left: 11px; right: 11px; top: 50%;
  height: {{line}}; margin-top: calc({{line}} / -2);
  border-radius: 99px; background: currentColor;
  transition: transform {{dur}} ease-out, opacity {{dur}} ease-out;
}
.bar:nth-child(1) { transform: translateY(calc(-1 * ({{gap}} + {{line}}))); }
.bar:nth-child(3) { transform: translateY(calc({{gap}} + {{line}})); }
/* 開いたら × に */
.menu-btn[aria-expanded="true"] .bar:nth-child(1) { transform: rotate(45deg); }
.menu-btn[aria-expanded="true"] .bar:nth-child(2) { opacity: 0; }
.menu-btn[aria-expanded="true"] .bar:nth-child(3) { transform: rotate(-45deg); }

/* スマホ: ヘッダーの下を覆う全面メニュー */
@media (max-width: 767px) {
  .site-menu {
    position: fixed; inset: 56px 0 0; padding: 8px 16px;
    background: #fff; overflow-y: auto;
    transition: opacity {{dur}} ease-out, transform {{dur}} ease-out, visibility {{dur}};
  }
  .site-menu[hidden] { display: block; visibility: hidden; opacity: 0; transform: translateY(-8px); }
  .site-menu a { display: flex; align-items: center; min-height: 48px; }
  body:has(.menu-btn[aria-expanded="true"]) { overflow: hidden; }
}
/* パソコン: 三本線を隠して横並び */
@media (min-width: 768px) {
  .menu-btn { display: none; }
  .site-menu[hidden] { display: block; }
  .site-menu ul { display: flex; gap: 24px; }
}
@media (prefers-reduced-motion: reduce) {
  .bar, .site-menu { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('site-menu');
const mq = matchMedia('(max-width: 767px)');

const setOpen = (open) => {
  btn.setAttribute('aria-expanded', String(open));
  btn.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  menu.hidden = !open;
};

// 最初は閉じておく（パソコン幅では CSS で常に表示される）
setOpen(false);
btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));

// Esc で閉じて、焦点をボタンへ戻す
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
    setOpen(false);
    btn.focus();
  }
});
// パソコン幅に広げたら開いた状態をリセット
mq.addEventListener('change', () => setOpen(false));`,
    },
  ],
  tune: [
    { key: 'line', label: '線の太さ', min: 1, max: 4, step: 0.5, value: 2, unit: 'px' },
    { key: 'gap', label: '線の間隔', min: 3, max: 9, step: 1, value: 5, unit: 'px' },
    { key: 'dur', label: '変形の速さ', min: 0.1, max: 0.6, step: 0.05, value: 0.25, unit: 's' },
  ],
  cautions: [
    '三本線だけでは「メニュー」と気づかない人もいます。高齢の利用者が多いサイトでは、線の下に「メニュー」と小さく文字を添えると押されやすくなります。',
    'アイコンだけのボタンには文字がないので、aria-label で「メニューを開く」と名前を付けます。付け忘れると、読み上げソフトでは「ボタン」としか読まれません。',
    '全面メニューを開いている間に後ろのページがスクロールすると、閉じたときに位置がずれます。body:has(...) { overflow: hidden; } で止めておきます。',
    '開いたメニューの項目を押したら閉じます。同じページ内の見出しへ飛ぶリンク（#〜）だと、メニューが開いたままで飛んだ先が隠れる、という事故がよく起きます。',
  ],
  similar: [
    { slug: 'drawer', diff: 'ドロワーは画面の端から引き出す板そのものの名前です。ハンバーガーは入口のボタンの名前で、押した先がドロワーのこともあります。' },
    { slug: 'bottom-nav', diff: 'タブバーは主な行き先を画面の下に常に並べておく部品です。行き先が3〜5個で頻繁に行き来するなら、隠すハンバーガーより1回で届きます。' },
    { slug: 'mega-menu', diff: 'メガメニューはパソコンの広い画面で、たくさんの行き先を列に分けて一度に見せる部品です。狭い画面ではハンバーガーの中に畳むのが普通です。' },
  ],
  faq: [
    {
      q: 'ハンバーガーメニューとドロワーメニューは同じものですか？',
      a: '指しているものが違います。ハンバーガーは三本線のボタン（入口）の名前で、ドロワーは画面の端から引き出す板（出てくるもの）の名前です。日常では「ハンバーガーを押して出るドロワー」をまとめてハンバーガーメニューと呼ぶことが多いので、頼むときは両方を書くと確実です。',
    },
    {
      q: 'パソコンでもハンバーガーメニューにしていいですか？',
      a: 'メニューが3〜5個なら、パソコンでは横に並べた方が使われやすくなります。隠すと、押してみるまで何があるか分からないからです。デザインの都合で隠す場合も、お申し込みやカートなど大事な行き先だけはヘッダーに出しておきます。',
    },
    {
      q: '三本線を×に変える動きはJavaScriptが必要ですか？',
      a: '動き自体はCSSだけで作れます。JavaScriptがするのは、ボタンの aria-expanded を true／false に切り替えることだけです。CSS側で [aria-expanded="true"] のときの線の形を書いておけば、開閉と見た目が自動でそろいます。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
