import type { Ugoki } from '../types';

export default {
  slug: 'scrollspy',
  no: 29,
  category: 'inform',
  name: 'スクロールスパイ（目次の現在地）',
  en: 'Scrollspy',
  aka: ['目次の現在地表示', '目次ハイライト', '現在地ハイライト', 'アクティブな目次', 'スクロール連動目次'],
  mode: 'scroll',
  title: 'スクロールスパイとは？目次の現在地を光らせる作り方【見本つき】',
  description:
    'スクロールに合わせて目次の「今読んでいる項目」を光らせるスクロールスパイを動く見本で解説。IntersectionObserverでの作り方、スマホで横並びの帯にする工夫、aria-currentでの読み上げ対応まで。',
  oneLine: '読み進めると、目次の「今いる見出し」に印が移っていく。',
  what: [
    '「山の宿 ご利用ガイド」を下へ読み進めると、左の目次で今読んでいる見出しの文字が濃くなり、左にオレンジの線が付きます。「チェックイン」から「お部屋」「お食事」へと、印がスクロールに合わせて移っていきます。目次を押すと、その見出しまでなめらかに移動します。',
    '長いページでは「今どのあたりにいて、あとどれくらいあるか」が分からなくなりがちです。目次に現在地が出ていれば、地図の「現在地」のように全体の中の位置がつかめ、読みたい場所へもすぐ移れます。狭い画面では、目次が上にくっつく横並びの帯に変わり、今の項目が帯の中央へ送られます。',
  ],
  when: [
    'ブログ記事や解説ページなど、見出しが5つ以上ある長い記事に目次を付けるとき',
    'サービスの使い方ガイドやヘルプページで、項目を行き来しながら読んでもらうとき',
    '1ページに「特長・料金・事例・よくある質問」が並ぶ縦長のLPで、上のメニューに現在地を出したいとき',
    '利用規約や仕様書など、条文や章が多い文書を読ませるとき',
  ],
  avoid: [
    '見出しが2〜3個しかない短いページ（目次そのものがいらない）',
    '区画ごとの長さがばらばらで、数行しかない見出しが続くページ（印が一瞬で飛んで落ち着かない）',
    '目次を固定するとスマホで本文がほとんど見えなくなるとき（横並びの帯にするか、目次をたたむ）',
  ],
  prompt:
    '記事の目次を「スクロールスパイ（scrollspy）」にしてください。パソコンでは目次を本文の左に置いて position: sticky で追従させ、スマホ（幅640px以下）では本文の上にくっつく横スクロールの帯にしてください。IntersectionObserver の rootMargin で画面の下側を判定から外し、画面の上から{{line:t}}の範囲に入っている区画のうち最も下のものを現在地にします。現在地の項目には aria-current="true" を付け、文字を太く・左に色の線を{{speed:t}}で出してください。目次を押したら scroll-behavior: smooth でその見出しへ移動し、見出しには scroll-margin-top を指定して固定ヘッダーに隠れないようにすること。動きを減らす設定の人にはスクロールを瞬間移動にしてください。',
  howTo: [
    '「今どの見出しを読んでいるか」は IntersectionObserver（要素が画面に入ったかを教えてくれる仕組み）で調べます。rootMargin で画面の下65%を判定から外すと、「画面の上から35%の帯」に入った区画だけが報告されます。帯に入っている区画のうち、いちばん下のものを現在地にすれば、見出しが帯をくぐった瞬間に印が移ります。',
    'スクロールのたびに全部の見出しの位置を計算する古いやり方と違い、変化があったときだけ呼ばれるので軽く動きます。目次はページ内リンク（href="#..."）にしておけば、押したときの移動はCSSの scroll-behavior: smooth だけで済みます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="layout">
  <nav class="toc" aria-label="このページの目次">
    <ol>
      <li><a href="#checkin">チェックイン</a></li>
      <li><a href="#room">お部屋</a></li>
      <li><a href="#meal">お食事</a></li>
      <li><a href="#access">アクセス</a></li>
    </ol>
  </nav>
  <main>
    <section id="checkin"><h2>チェックイン</h2><p>…</p></section>
    <section id="room"><h2>お部屋</h2><p>…</p></section>
    <section id="meal"><h2>お食事</h2><p>…</p></section>
    <section id="access"><h2>アクセス</h2><p>…</p></section>
  </main>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `html { scroll-behavior: smooth; }
section { scroll-margin-top: 72px; } /* 固定ヘッダーに隠れないように */

.layout { display: grid; grid-template-columns: 180px 1fr; gap: 32px; }
.toc { position: sticky; top: 72px; align-self: start; }
.toc ol { list-style: none; margin: 0; padding: 0; border-left: 2px solid #e4e2dc; }
.toc a {
  position: relative;
  display: block;
  padding: 8px 12px;
  color: #5d6272;
  text-decoration: none;
  transition: color {{speed}} ease-out;
}
/* 今いる場所の印 */
.toc a::before {
  content: '';
  position: absolute;
  left: -2px; top: 4px; bottom: 4px;
  width: 2px;
  background: #f06a35;
  transform: scaleY(0);
  transition: transform {{speed}} ease-out;
}
.toc a[aria-current='true'] { color: #1f2433; font-weight: 700; }
.toc a[aria-current='true']::before { transform: scaleY(1); }

/* スマホ: 上にくっつく横並びの帯 */
@media (max-width: 640px) {
  .layout { display: block; }
  .toc { top: 0; z-index: 5; background: #fff; overflow-x: auto; }
  .toc ol { display: flex; gap: 6px; padding: 8px 12px; border: 0; }
  .toc a { white-space: nowrap; border-radius: 999px; padding: 4px 12px; }
  .toc a::before { display: none; }
  .toc a[aria-current='true'] { background: #1d2541; color: #fff; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .toc a, .toc a::before { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const links = [...document.querySelectorAll('.toc a')];
const sections = links.map((a) => document.querySelector(a.getAttribute('href')));
const inBand = new Set();
const LINE = {{line:n}}; // 画面の上から何%の線で切り替えるか

function setActive(i) {
  links.forEach((a, j) => {
    if (i === j) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
  });
}

// 画面の上から LINE% の帯に入っている区画を数える
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => (e.isIntersecting ? inBand.add(e.target) : inBand.delete(e.target)));
  const hit = sections.filter((s) => inBand.has(s));
  if (hit.length) setActive(sections.indexOf(hit[hit.length - 1]));
}, { rootMargin: \`0px 0px -\${100 - LINE}% 0px\` });

sections.forEach((s) => io.observe(s));

// いちばん下まで来たら最後の項目にする（最後の区画が短くても届くように）
addEventListener('scroll', () => {
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) {
    setActive(sections.length - 1);
  }
}, { passive: true });`,
    },
  ],
  tune: [
    { key: 'line', label: '切り替わる線（画面の上から）', min: 10, max: 90, step: 5, value: 35, unit: '%' },
    { key: 'speed', label: '印が出る速さ', min: 0, max: 0.6, step: 0.05, value: 0.2, unit: 's' },
  ],
  cautions: [
    '最後の区画が短いと、ページのいちばん下までスクロールしても帯に届かず、最後の項目が光りません。下端に来たら最後の項目にする処理を入れるか、最後の区画に余白を足してください。',
    '親要素に overflow: hidden が付いていると、目次の position: sticky が効きません。目次が付いてこないときは、まず親を疑ってください。',
    '現在地は色だけでなく、太字や線など形でも示してください。色の見分けがつきにくい人にも伝わります。読み上げソフト向けには aria-current="true" を付けます。',
    '固定ヘッダーがあるページでは、目次から飛んだ見出しがヘッダーの裏に隠れます。見出しの区画に scroll-margin-top をヘッダーの高さより少し大きく付けてください。',
  ],
  similar: [
    {
      slug: 'progress-bar',
      diff: 'スクロールプログレスバーは、ページ全体のうちどれだけ読んだかを1本の棒で示します。スクロールスパイは、今読んでいるのがどの見出しかを目次の中で示します。',
    },
    {
      slug: 'smooth-scroll',
      diff: 'スムーススクロールは、ページ内リンクで飛ぶときの移動をなめらかにする演出です。スクロールスパイの目次と組み合わせて使うことがよくあります。',
    },
    {
      slug: 'sticky-header',
      diff: '追従ヘッダーはメニューの帯を上に固定するだけです。メニューの各項目に「今いる区画」の印を付けると、スクロールスパイにもなります。',
    },
  ],
  faq: [
    {
      q: 'スクロールスパイはBootstrapがないと作れませんか？',
      a: 'いいえ。Bootstrapにも同じ名前の部品がありますが、IntersectionObserver を使えば20行ほどのJavaScriptで作れます。この記事のコードはライブラリなしでそのまま動きます。',
    },
    {
      q: '目次の現在地がずれる・1つ前の項目のまま変わらないのはなぜですか？',
      a: '判定する帯の位置が合っていないことが多いです。rootMargin の下側のマイナスを減らす（-65%→-50%）と帯が広がって早めに、増やす（-65%→-80%）と遅めに切り替わります。固定ヘッダーがある場合は、上側にもヘッダーの高さ分のマイナスを指定してください。',
    },
    {
      q: 'スマホでは目次をどう見せればいいですか？',
      a: '横に並べた帯を本文の上にくっつけ、今の項目を帯の中央へ送るのが見やすい方法です。項目が多いなら、上にくっつく「目次」ボタンを押すと開く形にして、本文の見える範囲を広く保ってください。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
