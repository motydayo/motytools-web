import type { Ugoki } from '../types';

export default {
  slug: 'lazy-loading',
  no: 18,
  category: 'load',
  name: '遅延読み込み',
  en: 'Lazy loading',
  aka: ['レイジーロード', '画像の遅延読み込み', 'lazy load', 'loading="lazy"'],
  mode: 'scroll',
  title: '画像の遅延読み込みとは？loading="lazy"の使い方とふわっと出す方法',
  description:
    '画像の遅延読み込み（lazy loading）を動く見本で解説。imgにloading="lazy"とwidth・heightを書く基本、灰色の場所取りからふわっと出すCSS、最初の画面の画像に付けてはいけない理由まで。',
  oneLine: '画面に近づいた画像だけを読み込み、灰色の場所からふわっと出す。',
  what: [
    'ページを開いた時点では、画面の外にある画像を読み込まずに後回しにし、スクロールして近づいてきたものから順に読み込む仕組みです。見本では、まだ読み込んでいない写真は灰色の場所取りになっていて、枠に近づくと少し遅れて絵がふわっと現れます。下の「読み込んだ写真」の数字が、スクロールに合わせて増えていくのが分かります。',
    'ねらいは演出よりも「速さ」です。最初に読み込む量が減るので、ページが早く表示され、スマホの通信量も節約できます。場所取りの箱を画像と同じ縦横比で先に用意しておくと、読み込んだ瞬間に文章がガタッとずれることもありません。',
  ],
  when: [
    '写真がたくさん並ぶギャラリー・作品集・施工事例のページで、最初の表示を速くしたいとき',
    'ネットショップの商品一覧で、下の方の商品画像まで一度に読み込みたくないとき',
    'ブログや記事の本文に、途中の図や写真がいくつも入っているとき',
    'YouTube や地図の埋め込みがページの下の方にあり、最初から読み込むと重いとき',
  ],
  avoid: [
    'ページを開いてすぐ見える画像（メインの写真やロゴ）。遅延させると、かえって表示が遅くなる',
    '画像が1〜2枚しかない短いページ（後回しにする量がほとんどなく、効果が出ない）',
    '印刷して使うページ（印刷するまで読み込まれていない画像が抜けることがある）',
  ],
  prompt:
    'ページ内の画像に「遅延読み込み（lazy loading）」を付けてください。最初の画面に見えるメイン画像以外の <img> に loading="lazy" と decoding="async" を付け、すべての <img> に実際の画像サイズの width と height を書いてレイアウトのずれを防いでください。CSSは width: 100%; height: auto; にします。画像を包む箱には {{ph}} の背景を敷いて場所取りにし、読み込みが終わった画像だけを{{fade:t}}かけて ease-out でフェードインさせてください。そのとき画像を scale({{zoom:n}}) から等倍へ少しだけ縮めて、ピントが合うように見せてください。prefers-reduced-motion が reduce の人にはフェードを付けないでください。',
  howTo: [
    '基本はHTMLだけで済みます。<img> に loading="lazy" を書くと、ブラウザが「画面に近づくまで読み込まない」を自動でやってくれます。昔は JavaScript でスクロールを見張って画像を差し替えていましたが、今は主要なブラウザすべてがこの属性に対応しています。必ず一緒に width と height（画像の元の幅と高さ）も書いてください。読み込み前から正しい縦横比で場所が空き、表示のずれを防げます。',
    '「灰色からふわっと出す」見た目を足したいときだけ、短い JavaScript を使います。まだ読み込みが終わっていない画像に印を付けて透明にしておき、load（読み込み完了）の合図で印を外して CSS の transition で浮かび上がらせます。なお場所取りの色は、写真全体の平均に近い色にすると、出てきたときの差が小さく自然に見えます。見本は動きを見やすくするため、JavaScript で「枠の40px手前に来たら0.6秒後に表示」と再現しています。本物の loading="lazy" はもっと手前（数百〜千数百px先）から読み込み始めるので、普通にスクロールすると灰色はほとんど見えません。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<!-- 最初の画面に見える画像には loading="lazy" を付けない -->
<img src="/img/hero.jpg" alt="湖と山の朝の景色" width="1200" height="630">

<!-- 下の方の画像だけ遅延させる。width と height は画像の元の大きさ -->
<figure class="photo">
  <img src="/img/lake.jpg" alt="朝もやの湖" width="800" height="500" loading="lazy" decoding="async">
</figure>
<figure class="photo">
  <img src="/img/ridge.jpg" alt="夕焼けの尾根" width="800" height="500" loading="lazy" decoding="async">
</figure>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `img {
  display: block;
  max-width: 100%;
  height: auto; /* width/height 属性を書いたら必ずセットで */
}

/* 灰色の場所取り（読み込み前に見える） */
.photo {
  margin: 0;
  background: {{ph}};
  border-radius: 8px;
  overflow: hidden;
}

/* まだ読み込み中の画像だけ透明にしておき、終わったらふわっと出す */
.photo img {
  transition: opacity {{fade}} ease-out, transform {{fade}} ease-out;
}
.photo img.is-waiting {
  opacity: 0;
  transform: scale({{zoom:n}});
}

@media (prefers-reduced-motion: reduce) {
  .photo img,
  .photo img.is-waiting { transition: none; transform: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript（ふわっと出したいときだけ）',
      code: `// 読み込みが終わっていない画像にだけ印を付け、終わったら外す
// （JavaScriptが動かなくても画像は普通に表示される）
document.querySelectorAll('.photo img').forEach((img) => {
  if (img.complete) return;
  img.classList.add('is-waiting');
  const show = () => img.classList.remove('is-waiting');
  img.addEventListener('load', show, { once: true });
  img.addEventListener('error', show, { once: true });
});`,
    },
  ],
  tune: [
    { key: 'fade', label: 'ふわっと出る速さ', min: 0, max: 1.2, step: 0.05, value: 0.4, unit: 's' },
    { key: 'zoom', label: '出る前の拡大', min: 1, max: 1.15, step: 0.01, value: 1.03, unit: '' },
    { key: 'ph', type: 'color', label: '場所取りの色', value: '#e9e7e1' },
  ],
  cautions: [
    'ページを開いてすぐ見える画像に loading="lazy" を付けると、読み込みが遅れて表示速度の評価（LCP＝いちばん大きな要素が見えるまでの時間）が悪くなります。付けるのは「最初の画面より下」の画像だけにしてください。',
    'width と height を書き忘れると、読み込んだ瞬間に画像の高さが生まれて、下の文章がガタッと押し下げられます。CSSで幅を決めている場合も、属性は元画像の大きさで書き、CSSで height: auto を指定してください。',
    '検索エンジンは loading="lazy" の画像も読み取れます。ただし JavaScript で src を後から入れる古い作り方（data-src など）だと、画像が読まれないことがあります。特別な理由がなければ属性だけの作り方にしてください。',
    'alt（画像の説明文）は遅延読み込みでも必要です。読み上げソフトを使う人には、読み込み前でも alt が伝わります。',
  ],
  similar: [
    {
      slug: 'skeleton',
      diff: 'スケルトンスクリーンは、文章やカードの形の灰色の箱を並べて「もうすぐ出ます」と伝える見せ方です。遅延読み込みの場所取りは、それを画像1枚ずつに使ったものと考えると分かりやすいです。',
    },
    {
      slug: 'fade-in',
      diff: 'スクロールでフェードインは、すでにあるものを見せ方として遅らせて出す演出です。遅延読み込みは、本当にまだ読み込んでいないものを必要になってから取りに行きます。',
    },
    {
      slug: 'infinite-scroll',
      diff: '無限スクロールは、下端まで来たら次の記事や商品そのものを足していく仕組みです。遅延読み込みは、すでにページにある画像の読み込みを遅らせるだけです。',
    },
  ],
  faq: [
    {
      q: 'loading="lazy" が効いていない気がします。',
      a: 'ブラウザは、画面のかなり手前（通信が速いと千数百px先）から読み込み始めるため、普通にスクロールしても灰色が見えないのは正常です。開発者ツールの「ネットワーク」で、ページを開いた時点で下の方の画像が読み込まれていなければ効いています。',
    },
    {
      q: '遅延読み込みはSEOに影響しますか？',
      a: '遅延読み込みそのもので順位が上がるわけではありませんが、表示が速くなる分、読む人の体験は良くなります。Googleも loading="lazy" の画像を読み取れます。ただし最初の画面の画像に付けると表示速度の評価が下がるので、そこだけは付けないでください。',
    },
    {
      q: '背景画像（CSSの background-image）も遅延読み込みできますか？',
      a: 'loading="lazy" は <img> と <iframe> にしか使えません。背景画像を遅らせたいときは、IntersectionObserver（要素が画面に入ったかを見張る仕組み）でクラスを付けてから背景を指定します。中身として意味のある写真なら、背景ではなく <img> にする方がおすすめです。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
