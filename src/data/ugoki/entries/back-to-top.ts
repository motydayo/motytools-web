import type { Ugoki } from '../types';

export default {
  slug: 'back-to-top',
  no: 31,
  category: 'inform',
  name: '上に戻るボタン',
  en: 'Back to top button',
  aka: ['トップに戻るボタン', 'ページトップボタン', 'ページの先頭へ', 'スクロールトップ', 'TOPへ戻る'],
  mode: 'script',
  title: '上に戻るボタン（ページトップ）の作り方｜出し方と置き場所【見本】',
  description:
    'ある程度スクロールすると右下に出て、押すとページの先頭へなめらかに戻る「上に戻るボタン」を動く見本で解説。出すタイミング、position: fixedの置き場所、焦点の戻し方、スマホで邪魔にしない工夫、AIへの指示文までまとめました。',
  oneLine: '下まで読むと右下に丸いボタンが出て、押すとページの先頭へ戻る。',
  what: [
    'ページを下へ読み進めると、ある所から右下に上向き矢印の丸いボタンがふわっと現れます。押すと、ページの先頭までなめらかにスクロールして戻り、先頭に着くとボタンは消えます。',
    '縦に長いページを読み終わったあと、指で何度もはじいて上まで戻るのは手間です。このボタンがあれば1回で先頭のメニューや申し込みボタンに戻れます。最初から出しておくと読み始めの邪魔になるので、画面1つぶん以上スクロールしてから出すのがコツです。',
  ],
  when: [
    'ブログ記事やニュースなど、スマホで何画面ぶんもスクロールする長いページ',
    '商品が何十件も並ぶネットショップの一覧ページ',
    '縦に長いLPで、読み終わった人を先頭の申し込みボタンへ戻したいとき',
    '追従ヘッダーを付けていない長いページで、メニューへすぐ戻れるようにしたいとき',
  ],
  avoid: [
    '1〜2画面で読み終わる短いページ（出てくる前に読み終わる）',
    '右下にチャットの窓口や固定の申し込みボタンがあるとき（重なって押し間違える）',
    'どこまでも続く無限スクロールのページで、先頭に戻すと読んでいた位置が分からなくなるとき',
  ],
  prompt:
    'ページに「上に戻るボタン（back to top button）」を付けてください。画面の右下（右16px・下16px）に position: fixed で直径{{size:t}}の丸いボタンを置き、中は上向き矢印のSVGにして aria-label="ページの先頭へ戻る" を付けます。画面の高さの{{show:t}}以上スクロールしたら、下から12px浮き上がりながら{{dur:t}}で現れ、上に戻ったら同じくらいの速さで消えるようにしてください。隠れている間は visibility: hidden で焦点が入らないようにします。押したら window.scrollTo で先頭へなめらかに戻し、キーボードの焦点もページ先頭へ移してください。動きを減らす設定の人には瞬間移動で戻してください。ライブラリは使わないこと。',
  howTo: [
    'ボタンは position: fixed で画面の右下に置き、最初は透明＋visibility: hidden で隠しておきます。スクロールの量が画面の高さの6割を超えたらクラスを付けて表示します。スクロールのたびに呼ばれる処理なので、{ passive: true } を付けて軽くしておきます。',
    '押したら window.scrollTo({ top: 0, behavior: \'smooth\' }) で先頭へ戻します。見た目だけ戻しても、キーボードの焦点はページの下のボタンに残ったままです。先頭の要素（ページの見出しや「本文へスキップ」リンク）へ焦点を移すと、キーボードで操作する人も続きから迷わず進めます。見本は枠の中で動かすため position: sticky で右下に置いていますが、出し方と戻し方は同じです。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<body>
  <!-- 戻った先で焦点を受け取れるよう tabindex="-1" -->
  <h1 id="page-top" tabindex="-1">山の宿 ご案内</h1>
  …本文…

  <button type="button" class="to-top" aria-label="ページの先頭へ戻る">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  </button>
</body>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.to-top {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 50;
  display: grid;
  place-items: center;
  width: {{size}};
  height: {{size}};
  border: 0;
  border-radius: 50%;
  background: #1d2541;
  color: #fff;
  cursor: pointer;
  /* 隠れているとき（visibility で焦点も入らなくする） */
  opacity: 0;
  visibility: hidden;
  transform: translateY(12px);
  transition: opacity 0.2s ease-in, transform 0.2s ease-in, visibility 0s linear 0.2s;
}
.to-top.is-shown {
  opacity: 1;
  visibility: visible;
  transform: none;
  transition: opacity {{dur}} ease-out, transform {{dur}} ease-out, visibility 0s;
}
.to-top:hover { background: #4f73d9; }
.to-top:focus-visible { outline: 3px solid #f06a35; outline-offset: 2px; }
#page-top:focus { outline: none; }

@media (prefers-reduced-motion: reduce) {
  .to-top, .to-top.is-shown { transform: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const btn = document.querySelector('.to-top');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// 画面の高さの{{show:n}}%以上スクロールしたら出す
const sync = () => btn.classList.toggle('is-shown', scrollY > innerHeight * {{show:n}} / 100);
addEventListener('scroll', sync, { passive: true });
sync();

btn.addEventListener('click', () => {
  // 'auto' だと html の scroll-behavior: smooth に従ってしまうので 'instant' を使う
  scrollTo({ top: 0, behavior: reduce ? 'instant' : 'smooth' });
  // キーボードで操作する人のために、焦点も先頭へ移す
  document.getElementById('page-top').focus({ preventScroll: true });
});`,
    },
  ],
  tune: [
    { key: 'show', label: 'ボタンが出る位置（画面の高さに対して）', min: 20, max: 200, step: 10, value: 60, unit: '%' },
    { key: 'size', label: 'ボタンの大きさ', min: 36, max: 64, step: 4, value: 48, unit: 'px' },
    { key: 'dur', label: '出る速さ', min: 0.1, max: 0.6, step: 0.05, value: 0.25, unit: 's' },
  ],
  cautions: [
    'スマホでは右下が親指のよく通る場所です。ボタンが本文の文字やリンクに被り続けないよう、48px程度の大きさにとどめ、ページ下の固定ボタンやチャットの窓口と重ならない位置に置いてください。',
    'アイコンだけのボタンには aria-label で「ページの先頭へ戻る」などの名前を付けてください。付けないと、読み上げソフトでは「ボタン」としか読まれません。',
    '押して見た目だけ先頭に戻しても、キーボードの焦点はページの下に残ります。先頭の見出しに tabindex="-1" を付けて焦点を移しておくと、Tabキーで次に進んだときに迷いません。',
    'なめらかに戻る動きは、長いページだと数秒かかり、動きの苦手な人には負担になります。動きを減らす設定の人には behavior: \'instant\'（瞬間移動）にしてください。auto だと、html に scroll-behavior: smooth が書いてあるサイトではなめらかに動いてしまいます。',
  ],
  similar: [
    {
      slug: 'smooth-scroll',
      diff: 'スムーススクロールは、ページ内リンク全般の移動をなめらかにする演出です。上に戻るボタンはその代表的な使い道の1つで、出し入れのタイミングまで含めた部品です。',
    },
    {
      slug: 'sticky-header',
      diff: '追従ヘッダーはメニューを常に上に出しておく方法で、先頭へ戻らなくてもメニューが使えます。上に戻るボタンは、読み終わった人を先頭へ運ぶための部品です。',
    },
    {
      slug: 'progress-bar',
      diff: 'スクロールプログレスバーはどこまで読んだかを示すだけです。円形の進み具合の線を上に戻るボタンの周りに付けて、2つを1つにまとめるデザインもあります。',
    },
  ],
  faq: [
    {
      q: '上に戻るボタンはCSSだけで作れますか？',
      a: 'ページ内リンク（href="#top"）と html { scroll-behavior: smooth; } を使えば、押して先頭へ戻る部分はCSSだけで作れます。ただし「ある程度スクロールしたら出す」には、スクロール量を調べる短いJavaScriptが必要です。',
    },
    {
      q: '上に戻るボタンはいつから表示すればいいですか？',
      a: '画面の高さの半分〜1画面ぶんスクロールしたあたりが目安です。最初から出していると、読み始めの画面で本文に被って邪魔になります。',
    },
    {
      q: '上に戻るボタンはスマホでも必要ですか？',
      a: '長いページならスマホの方が役に立ちます。iPhoneは画面上端のステータスバーを押すと先頭に戻れますが、知らない人も多いからです。ただし、画面下に固定のボタンやタブがある場合は、重ならないよう位置を上げてください。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
