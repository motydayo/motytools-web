import type { Ugoki } from '../types';

export default {
  slug: 'animated-gradient',
  no: 23,
  category: 'load',
  name: 'グラデーションアニメーション',
  en: 'Animated gradient',
  aka: ['動くグラデーション', 'グラデーション背景アニメーション', 'グラデーションが動く背景', 'gradient animation'],
  mode: 'loop',
  title: '動くグラデーション背景の作り方｜CSSだけのグラデーションアニメーション',
  description:
    '背景の色がゆっくり移り変わるグラデーションアニメーションを動く見本で解説。background-sizeとbackground-positionで作るCSS、白い文字を読みやすく保つ暗幕、重くしないための注意点、AIへの指示文まで。',
  oneLine: '大きな背景の色が、ゆっくり混ざり合いながら移り変わる。',
  what: [
    'ページ最上部の大きな背景（ヒーロー）に敷いたグラデーションが、ゆっくりと流れるように色を変え続ける演出です。見本では、紺・青・赤紫・オレンジの帯が8秒かけて左右に行き来し（速さと2つの色は下のつまみで変えられます）、その上に白い見出しと申し込みボタンが乗っています。',
    '写真やイラストを用意しなくても、ページの第一印象に「動き」と「明るさ」を出せるのが強みです。IT系のサービスやアプリの紹介ページでよく使われます。画像ファイルを使わないので読み込みも軽く済みます。色の移り変わりがゆっくりなので、主役の文章のじゃまをしにくい演出です。',
  ],
  when: [
    'アプリやWebサービスのLPで、写真を使わずに最初の画面を華やかにしたいとき',
    'イベントやキャンペーンの特設ページで、見出しの背景に勢いを出したいとき',
    '申し込みボタンや「新着」の帯など、小さな部品に控えめな動きを付けて目を引きたいとき',
    'ブランドカラーが複数あり、その色を全部使って印象づけたいとき',
  ],
  avoid: [
    '文章を長く読ませるページの本文の背景（色が動くと文字に集中できない）',
    '病院・法律事務所・お悔やみ関係など、落ち着きや信頼感を優先したいサイト',
    '色の明るさの差が大きいグラデーションの上に、細くて小さい文字を置く場合（場所によって読めなくなる）',
  ],
  prompt:
    'トップの大きな背景に「グラデーションアニメーション（animated gradient）」を付けてください。CSSだけで、linear-gradient(120deg, #1d2541, {{c1}}, {{c2}}, {{c1}}, #1d2541) を background-size: 300% 300% で敷き、@keyframes で background-position を 0% 50% から 100% 50% へ、片道{{dur:t}}・ease-in-out・無限・往復（alternate）で動かしてください。対応ブラウザでは @supports で linear-gradient(120deg in oklch, …) に切り替え、色の間がにごらないようにしてください。白い文字が読めるよう、上に rgba(20, 24, 45, {{dim:n}}) の暗幕を1枚重ねてください。prefers-reduced-motion が reduce の人にはアニメーションを止め、止まったグラデーションにしてください。',
  howTo: [
    'グラデーションそのものは動かせないので、「画面より大きなグラデーションを敷いて、見える位置を動かす」という考え方で作ります。background-size で背景を枠の3倍の大きさにし、@keyframes で background-position（背景のどの位置を見せるか）を左端から右端へ動かすと、色がゆっくり移り変わって見えます。',
    '同じ色を両端に置くと、行き来したときの色のつながりが自然になります。白い文字を乗せるときは、半透明の暗い膜を1枚重ねると、明るい色の部分でも文字が読みやすくなります。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<section class="hero">
  <h1>予定のすり合わせを、1日5分に。</h1>
  <a href="/signup" class="hero-btn">14日間 無料で試す</a>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.hero {
  position: relative;
  padding: 96px 24px;
  color: #fff;
  /* 色を並べた帯を3倍の大きさで敷き、見える位置を動かす */
  background: linear-gradient(120deg, #1d2541, {{c1}}, {{c2}}, {{c1}}, #1d2541);
  background-size: 300% 300%;
  animation: gradient-shift {{dur}} ease-in-out infinite alternate;
}
/* oklch で混ぜると、色の間が灰色ににごらない（対応ブラウザだけ） */
@supports (background: linear-gradient(in oklch, red, blue)) {
  .hero {
    background-image: linear-gradient(120deg in oklch, #1d2541, {{c1}}, {{c2}}, {{c1}}, #1d2541);
  }
}
@keyframes gradient-shift {
  from { background-position: 0% 50%; }
  to { background-position: 100% 50%; }
}

/* 白い文字が読めるよう、薄い暗幕を1枚かぶせる */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(20, 24, 45, {{dim:n}});
  pointer-events: none;
}
.hero > * {
  position: relative; /* 暗幕より手前に出す */
}

/* 動きを減らす設定なら、止まったグラデーションにする */
@media (prefers-reduced-motion: reduce) {
  .hero {
    animation: none;
    background-position: 30% 50%;
  }
}`,
    },
  ],
  tune: [
    { key: 'dur', label: '片道の時間', min: 2, max: 20, step: 1, value: 8, unit: 's' },
    { key: 'c1', type: 'color', label: '1つ目の色', value: '#4f73d9' },
    { key: 'c2', type: 'color', label: '2つ目の色', value: '#f06a35' },
    { key: 'dim', label: '暗幕の濃さ', min: 0, max: 0.6, step: 0.02, value: 0.28, unit: '' },
  ],
  cautions: [
    'background-position を動かす作りは、毎回背景を描き直すため、画面いっぱいの大きさだと古いスマホで電池を使いやすくなります。気になるときは、グラデーションを敷いた疑似要素を transform（GPUで処理しやすい動かし方）で動かす作りに変えると軽くなります。',
    '白い文字と明るい色（オレンジや黄色）の組み合わせは、文字が読みにくくなりがちです。暗幕を重ねる、文字を太く大きくするなどして、背景との明るさの差（コントラスト比）をしっかり確保してください。',
    '速すぎると落ち着かない印象になり、動きが苦手な人には負担になります。1往復で6〜15秒くらいのゆっくりした速さが目安です。',
    '色を増やしすぎると、まとまりのない印象になります。ブランドカラーを中心に、2〜3色に絞ると上品に見えます。2色の間が灰色ににごるときは、見本のコードのように in oklch（人の目の感じ方に近い混ぜ方）を指定してください。',
  ],
  similar: [
    {
      slug: 'floating',
      diff: 'ふわふわアニメーションは、画像や部品そのものを上下にゆっくり揺らす演出です。グラデーションアニメーションは背景の色だけが動き、形は動きません。',
    },
    {
      slug: 'marquee',
      diff: 'マーキーは文字やロゴの帯が横へ流れ続ける演出です。どちらも動き続けますが、グラデーションは背景として控えめに、マーキーは目を引く区切りとして使われます。',
    },
  ],
  faq: [
    {
      q: 'グラデーションが動きません。',
      a: 'background-size を100%より大きくしていないと、動かせる余白がないため見た目が変わりません。300% 300% のように大きくしているか確認してください。また、background という一括指定を後から書くと background-size が上書きされて消えるので、書く順番にも注意してください。',
    },
    {
      q: 'グラデーションの角度や色そのものを動かすことはできますか？',
      a: 'できます。CSSの @property で角度や色を「アニメーションできる変数」として登録すると、角度を回したり、色を少しずつ変えたりできます。今は主要なブラウザで使えますが、作りは少し複雑になるので、まずは見本の位置をずらす方法で十分です。',
    },
    {
      q: 'グラデーションアニメーションは表示速度に影響しますか？',
      a: '画像を使わないので、読み込みはむしろ軽くなります。ただし、動かしている間はブラウザが背景を描き直し続けるため、大きな範囲で使うと古い端末では電池の減りが早くなることがあります。範囲を必要な所だけにすると安心です。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
