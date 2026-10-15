import type { Ugoki } from '../types';

export default {
  slug: 'image-zoom',
  no: 10,
  category: 'pointer',
  name: 'ホバーで画像ズーム',
  en: 'Image zoom on hover',
  aka: ['画像ホバーズーム', 'サムネイル拡大', 'ホバーで拡大', 'ズームイン'],
  mode: 'pointer',
  title: 'ホバーで画像をズームするCSS｜枠からはみ出さない作り方と目安【見本】',
  description:
    'マウスを乗せると写真だけがじわっと大きくなる「ホバーで画像ズーム」を見本で解説。overflow: hiddenで枠からはみ出させないCSS、速さと倍率の目安、スマホでの注意点、AIへの指示文まで。',
  oneLine: '枠はそのままで、乗せた写真だけがじわっと大きくなる。',
  what: [
    '写真にマウスを乗せると、写真の枠の大きさは変わらないまま、中の絵だけが1割ほど拡大する演出です。見本では制作実績の3枚に矢印が乗るたび、その写真だけが寄って見えます。',
    '写真が主役のページで「この写真を押すと詳しく見られる」と伝えるのに向いています。カード全体が動く「浮き上がり」より落ち着いていて、並び方を崩さないのが長所です。',
  ],
  when: [
    '制作会社やカメラマンの実績一覧で、作品写真を押して詳しく見てほしいとき',
    'ネットショップの商品一覧で、写真を見ながら選ぶ人に手ざわりを出したいとき',
    'ブログやメディアの記事一覧で、サムネイル画像を押せると気づかせたいとき',
    '旅館・飲食店のサイトで、料理や客室の写真を少しでも魅力的に見せたいとき',
  ],
  avoid: [
    '写真の端に文字やロゴが入っている画像（拡大すると端が切れて読めなくなる）',
    '押しても何も起きない飾りの写真',
    '画質の低い小さな画像（拡大でぼやけが目立つ）',
  ],
  prompt:
    '画像一覧に「ホバーで画像ズーム（image zoom on hover）」を付けてください。画像を包む枠に overflow: hidden を付け、マウスを乗せたら中の img だけを transform: scale で{{scale:t}}倍にします。枠の大きさは変えないでください。時間は{{dur:t}}、ease-out。CSSだけで作り、:hover は @media (hover: hover) の中に書いて、スマホでは拡大しないでください。キーボード操作では :focus-visible で同じ拡大にし、prefers-reduced-motion: reduce のときは拡大せず少し暗くするだけにしてください。',
  howTo: [
    '画像を1枚の「窓」に入れるイメージで作ります。外側の枠に overflow: hidden（はみ出た部分を隠す指定）を付け、中の画像だけを transform: scale で大きくします。枠は動かないので、まわりの並びは崩れません。',
    '倍率は1.05〜1.15倍、時間は0.3〜0.4秒が目安です。大きくしすぎたり速すぎたりすると、写真が飛び出してくるように見えて落ち着きません。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<a class="work" href="/works/cafe">
  <span class="work-pic">
    <img src="cafe.jpg" alt="海辺のカフェの店内" width="400" height="300">
  </span>
  <span class="work-name">海辺のカフェ</span>
</a>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.work { display: block; color: inherit; text-decoration: none; }

/* 窓: はみ出た部分を隠す */
.work-pic {
  display: block;
  overflow: hidden;
  border-radius: 10px;
}
.work-pic img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: transform {{dur}} ease-out;
}

/* マウスのある端末だけ、乗せたら中の画像を拡大 */
@media (hover: hover) {
  .work:hover .work-pic img { transform: scale({{scale}}); }
}
/* キーボードで選んだときも */
.work:focus-visible { outline: none; }
.work:focus-visible .work-pic { outline: 2px solid #4f73d9; outline-offset: 2px; }
.work:focus-visible .work-pic img { transform: scale({{scale}}); }

/* 動きを減らす設定なら、拡大せず少し暗くするだけ */
@media (prefers-reduced-motion: reduce) {
  .work-pic img { transition: none; }
  .work:hover .work-pic img,
  .work:focus-visible .work-pic img { transform: none; filter: brightness(0.92); }
}`,
    },
  ],
  tune: [
    { key: 'scale', label: '拡大の倍率', min: 1, max: 1.5, step: 0.01, value: 1.1, unit: '' },
    { key: 'dur', label: '拡大の速さ', min: 0.1, max: 1.2, step: 0.05, value: 0.35, unit: 's' },
  ],
  cautions: [
    'スマホにはマウスがないので、乗せて拡大する場面がありません。タップするとすぐ次のページへ移るので、拡大は「マウスのある端末のおまけ」と考え、写真そのものを十分魅力的にしておきます。',
    '角丸が付いた枠で拡大すると、Safariで一瞬角が四角くはみ出ることがあります。枠に isolation: isolate か will-change: transform を足すと直ることが多いです。',
    '大きな画像を一覧に並べると表示が遅くなります。一覧用に小さく書き出した画像を使い、loading="lazy" と width・height を付けておいてください。',
    '拡大で端が切れる前提なので、写真の端に大事なもの（文字・人の顔）が来ない画像を選びます。',
  ],
  similar: [
    {
      slug: 'hover-lift',
      diff: '浮き上がりはカード全体が上へ持ち上がり、影が付きます。画像ズームは枠を動かさず、中の写真だけが寄ります。',
    },
    {
      slug: 'before-after',
      diff: 'ビフォーアフターは2枚の写真をつまみで見比べる部品です。画像ズームは1枚の写真に乗せたときの小さな反応です。',
    },
  ],
  faq: [
    {
      q: '画像を拡大すると枠からはみ出してしまいます。',
      a: '拡大する画像ではなく、その外側の枠に overflow: hidden を付けてください。画像そのものに付けても効きません。枠に角丸があるなら、角丸も枠の側に付けます。',
    },
    {
      q: 'ホバーで画像を拡大するのにJavaScriptは必要ですか？',
      a: 'いりません。transform: scale と transition、:hover だけで作れます。JavaScriptが要るのは、マウスの位置に合わせて拡大する場所を変える「虫めがね」のような作りにするときです。',
    },
    {
      q: '拡大したときに画像がぼやけるのはなぜですか？',
      a: '表示している大きさぎりぎりの画像を拡大しているためです。拡大率ぶん大きめの画像を用意するか、srcset で高解像度の画面用の画像を渡してください。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
