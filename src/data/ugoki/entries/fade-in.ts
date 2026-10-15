import type { Ugoki } from '../types';

export default {
  slug: 'fade-in',
  no: 2,
  category: 'scroll',
  name: 'スクロールでフェードイン',
  en: 'Fade-in on scroll',
  aka: ['フェードイン', 'スクロールアニメーション', 'ふわっと表示', 'スクロール連動フェード', 'reveal on scroll'],
  mode: 'scroll',
  title: 'スクロールでふわっと出るフェードインの作り方｜CSSとJS数行【見本】',
  description:
    'スクロールして画面に入った要素をふわっと表示する「フェードイン」を動く見本で解説。IntersectionObserverとCSSだけの作り方、カードを順番に出すコツ、出しすぎの注意点、AIへの指示文まで。',
  oneLine: '画面に入った見出しやカードが、下からふわっと現れる。',
  what: [
    'ページを読み進めて、見出しや写真が画面に入ったときに、透明な状態から少し下からふわっと現れる演出です。LPや会社サイトでよく見かける代表的なスクロールの演出で、「スクロールアニメーション」とだけ呼ばれることもあります。',
    '見本では、3枚のカードが0.1秒ずつずれて順番に現れます。全部が同時に出るより目が左から右へ自然に流れ、「ここから新しい話が始まる」と伝わります。動きは16px・0.5秒と控えめにしているので、読む邪魔になりません。',
  ],
  when: [
    'LP（紹介ページ）で、特長・料金・お客さまの声などの区切りごとに注目を集めたいとき',
    'サービスの特長を3つ並べたカードを、順番に読んでほしいとき',
    '実績の写真やロゴを並べた一覧に、少しだけ動きを足して上質に見せたいとき',
    '採用ページやブランドサイトで、読み進める楽しさを出したいとき',
  ],
  avoid: [
    '本文の段落1つ1つにまで付けるとき（読むたびに待たされ、かえって読みにくい）',
    'ネットショップの商品一覧や検索結果など、早く見比べたい画面',
    '1画面目の見出しやボタン（いちばん大事な所が一瞬見えず、表示が遅く感じる）',
  ],
  prompt:
    'セクションの見出しとカードに「スクロールでフェードイン（fade-in on scroll）」を付けてください。最初は opacity: 0 で16px下にずらしておき、画面の下から10%入ったら0.5秒の ease-out で元の位置に表示してください。横に並ぶカードは0.1秒ずつ遅らせて順番に出してください。判定は IntersectionObserver で行い、一度表示したら監視をやめてください。ライブラリは使わないでください。prefers-reduced-motion: reduce の人には最初から表示し、JavaScriptが動かない環境でも内容が見えるようにしてください。',
  howTo: [
    'CSSで「透明で少し下にある状態」と「表示された状態（.is-in）」の2つを用意し、transition で間をつなぎます。どちらの状態にするかは、IntersectionObserver（要素が画面に入ったかを教えてくれるブラウザの仕組み）で判断してクラスを付けるだけです。scroll イベントで位置を計算し続けるより軽く、書く量も少なくて済みます。',
    '隠す指定は、JavaScriptが動いたとき（html に .js が付いたとき）だけ効くようにしておくと、読み込みに失敗しても中身が消えたままになりません。見本では何度でも見られるよう、画面の下へ戻ると隠し直していますが、実際のサイトでは一度出したら終わりにするのが一般的です。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<script>document.documentElement.classList.add('js');</script>

<section>
  <h2 class="reveal">選ばれる3つの理由</h2>
  <div class="cards">
    <div class="card reveal">朝食つき</div>
    <div class="card reveal">駅から5分</div>
    <div class="card reveal">星がきれい</div>
  </div>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* JavaScriptが動いたときだけ隠す（失敗しても中身は見える） */
.js .reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.js .reveal.is-in {
  opacity: 1;
  transform: none;
}
/* 横に並ぶカードは少しずつ遅らせる */
.cards .reveal:nth-child(2) { transition-delay: 0.1s; }
.cards .reveal:nth-child(3) { transition-delay: 0.2s; }

/* 「動きを減らす」設定の人には最初から表示する */
@media (prefers-reduced-motion: reduce) {
  .js .reveal { opacity: 1; transform: none; transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-in');
    io.unobserve(entry.target); // 一度出したら監視をやめる
  });
}, { rootMargin: '0px 0px -10% 0px' }); // 画面の下から10%入ったら

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));`,
    },
  ],
  cautions: [
    '1画面目に見えている要素まで隠すと、ページを開いた瞬間に一瞬空っぽに見え、表示が遅いと感じさせます。1画面目は最初から表示しておくのが無難です。',
    '隠す指定をCSSだけで書くと、JavaScriptの読み込みに失敗したとき中身が消えたままになります。見本のように .js クラスが付いたときだけ隠してください。',
    'ページ内リンクや検索結果の「この部分へ移動」で飛んだ先が、まだ透明のまま見えることがあります。rootMargin を広めにする、見出しには付けないなどで避けられます。',
    '動く距離を大きく（50px以上）したり、時間を長く（1秒以上）したりすると、待たされている感じが強くなります。16〜24px、0.3〜0.5秒程度がおすすめです。',
  ],
  similar: [
    {
      slug: 'parallax',
      diff: 'パララックスはスクロールしている間ずっと、量に合わせて動き続けます。フェードインは画面に入ったときに一度だけ現れて、あとは止まります。',
    },
    {
      slug: 'highlighter',
      diff: 'マーカーアニメーションも画面に入ったときに動きますが、変わるのは文字の下の蛍光ペンの線だけです。要素そのものは最初から見えています。',
    },
    {
      slug: 'lazy-loading',
      diff: '遅延読み込みは、画像を画面に近づいてから読み込んで表示を速くする仕組みです。見た目の演出ではなく、読み込みの順番を変えるものです。',
    },
  ],
  faq: [
    {
      q: 'スクロールでフェードインはCSSだけで作れますか？',
      a: '新しいブラウザでは animation-timeline: view() という指定でCSSだけでも作れます。ただし、まだ対応していないブラウザがあるため、今は IntersectionObserver で数行のJavaScriptを書く方法が確実です。',
    },
    {
      q: 'フェードインはSEOに影響しますか？',
      a: '文字がHTMLに書いてあれば、透明にしていても検索エンジンは読み取れます。注意したいのは表示速度と体験の方で、1画面目の大事な見出しまで遅れて出すと、読む人が待たされます。1画面目には付けないのがおすすめです。',
    },
    {
      q: 'AOS.jsなどのライブラリを使うのと何が違いますか？',
      a: '見た目はほぼ同じです。ライブラリは種類の多い動きを簡単に付けられる一方、読み込むファイルが増えます。フェードインだけなら、この記事のコード（JavaScript約10行）で足ります。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
