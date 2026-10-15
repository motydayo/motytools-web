import type { Ugoki } from '../types';

export default {
  slug: 'floating',
  no: 24,
  category: 'load',
  name: 'ふわふわアニメーション',
  en: 'Floating animation',
  aka: ['ふわふわ浮く動き', 'フローティングアニメーション', '浮遊アニメーション', '上下にゆらゆら動く'],
  mode: 'loop',
  title: 'ふわふわ浮くアニメーションをCSSで｜上下にゆっくり揺らす作り方と見本',
  description:
    '画像やアイコンが上下にゆっくり揺れ続けるふわふわアニメーションを動く見本で解説。@keyframesとtransformだけの作り方、影を一緒に動かして浮いて見せるコツ、いくつも並べるときのずらし方、動きを減らす設定への配慮まで分かります。',
  oneLine: 'スマホの画像や吹き出しが、宙に浮いたように上下にゆらゆら揺れる。',
  what: [
    'アプリの画面やイラスト、吹き出しなどが、その場で上下に少しだけ、ゆっくり揺れ続ける演出です。見本では、スマホの画面が3秒ほどかけて10px浮いては戻り、足元の影も浮くのに合わせて小さく薄くなります。まわりの「予約が確定しました」「4.8」の吹き出しは、少しずつタイミングをずらして揺れています。',
    '止まった画像よりも「生きている」「軽やか」な印象になり、ページの主役の画像に自然と目が向きます。動きの幅が小さくゆっくりなので、マーキーのように目を奪いすぎず、文章のじゃまもしにくい演出です。',
  ],
  when: [
    'アプリの紹介ページで、スマホの画面の画像をいちばん目立たせたいとき',
    'キャラクターやイラストに、ちょっとした生き生き感を出したいとき',
    '「レビュー4.8」「導入100社」などの小さな吹き出しを、主役の画像のまわりに散らして見せたいとき',
    'お問い合わせのボタンやチャットの入口を、控えめに目立たせたいとき',
  ],
  avoid: [
    '文章のすぐ横や中に置く場合（読んでいる文字の視界の端でずっと動いて、気が散る）',
    '1画面にたくさんの要素をばらばらに揺らす（落ち着かず、安っぽい印象になる）',
    'ボタンそのものを大きく揺らす（押そうとした場所がずれ、押し間違いの原因になる）',
  ],
  prompt:
    'トップのスマホの画像に「ふわふわアニメーション（floating animation）」を付けてください。CSSだけで、@keyframes で transform: translateY(0) → translateY(-10px) → translateY(0) を3.2秒・ease-in-out・無限に繰り返してください。画像の下に楕円の影を置き、浮いたときに scaleX(0.78)・不透明度0.55になるよう同じ速さで動かしてください。まわりの吹き出し2つは animation-delay を -1.1秒・-2.2秒にずらして揺らしてください。prefers-reduced-motion が reduce の人にはアニメーションを止めてください。',
  howTo: [
    '@keyframes で「途中で上へ10px移動し、また戻る」動きを作り、infinite（無限）で繰り返すだけです。動かすのは transform: translateY（上下の移動）にします。top や margin を動かすより処理が軽く、まわりのレイアウトも崩れません。行き来する動きなので、緩急は ease-in-out（ゆっくり動き出して、ゆっくり止まる）が自然です。',
    '本当に浮いて見せるコツは、足元の影も一緒に動かすことです。浮いたときに影を小さく薄くすると、地面から離れた感じが出ます。いくつも揺らすときは、animation-delay にマイナスの値を入れてタイミングをずらすと、そろって動く不自然さが消えます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="float-stage">
  <img class="float" src="/img/app-screen.png" alt="アプリの予約画面" width="260" height="520">
  <span class="float-shadow" aria-hidden="true"></span>
  <span class="float badge">予約が確定しました</span>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.float-stage {
  position: relative;
  display: grid;
  justify-items: center;
}
.float-stage img {
  max-width: 100%;
  height: auto;
}

/* 上へ10px、3.2秒で1往復。ゆっくり動き出してゆっくり止まる */
.float {
  animation: float 3.2s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* 影は、浮いたときに小さく薄くなる */
.float-shadow {
  width: 180px;
  height: 16px;
  margin-top: 12px;
  border-radius: 50%;
  background: rgba(29, 37, 65, 0.22);
  filter: blur(4px);
  animation: float-shadow 3.2s ease-in-out infinite;
}
@keyframes float-shadow {
  0%, 100% { transform: scaleX(1); opacity: 1; }
  50% { transform: scaleX(0.78); opacity: 0.55; }
}

/* 吹き出しは、タイミングと速さを少しずらす */
.badge {
  position: absolute;
  top: 15%;
  left: 0;
  padding: 6px 12px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 10px 22px -12px rgba(29, 37, 65, 0.5);
  animation-delay: -1.1s;
  animation-duration: 3.8s;
}

/* 動きを減らす設定なら止める */
@media (prefers-reduced-motion: reduce) {
  .float,
  .float-shadow {
    animation: none;
  }
}`,
    },
  ],
  cautions: [
    '動く幅は5〜15px、1往復は2〜5秒くらいが目安です。幅が大きい・速いと、「ふわふわ」ではなく「ぴょんぴょん」した落ち着かない動きになります。',
    '1画面で揺らすのは、主役の1つとその周りの小物くらいまでにしてください。ずっと動き続けるものが多いと、目が疲れ、どこを見ればいいか分からなくなります。',
    '動き続けるので、動きが苦手な人への配慮は必須です。prefers-reduced-motion で止めても、絵として成り立つ配置にしておいてください。',
    'ボタンやリンクを揺らすと、押そうとした瞬間に位置がずれて押し間違いが起きます。揺らすのは、押さない画像や飾りにとどめてください。',
  ],
  similar: [
    {
      slug: 'hover-lift',
      diff: 'ホバーで浮き上がるは、マウスを乗せたときだけ1回浮く「操作への反応」です。ふわふわアニメーションは、何もしなくてもずっと揺れ続けます。',
    },
    {
      slug: 'animated-gradient',
      diff: 'グラデーションアニメーションは背景の色が移り変わる演出です。ふわふわは形のある画像や部品そのものを動かします。組み合わせると、にぎやかになりすぎることがあります。',
    },
  ],
  faq: [
    {
      q: 'ふわふわアニメーションがカクカクします。',
      a: 'top や margin を動かしていると、毎回レイアウトを計算し直すため、カクつきやすくなります。transform: translateY で動かしてください。また、緩急が linear（等速）だと、折り返しの瞬間が硬く見えます。ease-in-out にすると自然になります。',
    },
    {
      q: '複数の要素をバラバラに揺らすにはどうすればいいですか？',
      a: '同じアニメーションを使い、要素ごとに animation-delay と animation-duration を少しずつ変えます。delay にマイナスの値（-1.1s など）を入れると、ページを開いた瞬間から「途中から」動き出すので、最初の一瞬に全部が同時に動く不自然さもありません。',
    },
    {
      q: 'スマホで電池を使いませんか？',
      a: 'transform だけを動かす作りなら、処理はとても軽く、心配はほとんどありません。気になる場合は、画面の外にあるときは animation-play-state: paused で止める作りにすると、さらに安心です。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
