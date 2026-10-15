import type { Ugoki } from '../types';

export default {
  slug: 'cursor-follower',
  no: 11,
  category: 'pointer',
  name: 'マウスストーカー',
  en: 'Cursor follower',
  aka: ['カーソルストーカー', 'カーソル追従', 'カスタムカーソル', 'マウス追従'],
  mode: 'script',
  title: 'マウスストーカーとは？JavaScriptでの作り方と使いどころを見本で解説',
  description:
    'マウスの後ろを丸がついてくる「マウスストーカー」を動く見本で解説。少し遅れて追いかけるJavaScriptの書き方、リンクの上で大きくする工夫、スマホやアクセシビリティの注意点まで。',
  oneLine: 'マウスの後ろを、丸い輪が少し遅れて追いかけてくる。',
  what: [
    'マウスを動かすと、その後ろをオレンジの輪がすこし遅れてついてくる演出です。見本では、ボタンや写真の上に来ると輪が大きくなり、「ここは押せる」と知らせます。',
    '制作会社やブランドのサイトでよく見かける、遊び心と「作り込んでいる感じ」を出すための演出です。情報を伝えるための部品ではないので、ページの目的を邪魔しない範囲で使うのが前提です。',
  ],
  when: [
    'デザイン会社・映像制作会社など、作り込みそのものが実力の見本になるサイトのとき',
    'ブランドの世界観を見せる特設ページで、触る楽しさを足したいとき',
    '写真や作品を大きく並べたポートフォリオで、押せる場所を輪の大きさで知らせたいとき',
  ],
  avoid: [
    '申し込みフォームや料金表など、早く正確に操作してほしいページ',
    '病院・役所・金融など、信頼と分かりやすさが第一のサイト',
    '本物のマウスカーソルを消して輪だけにする作り（どこを指しているか分かりにくくなる）',
  ],
  prompt:
    'サイトに「マウスストーカー（cursor follower）」を付けてください。直径40px・線2pxの丸い輪を position: fixed で置き、pointer-events: none にします。マウスの位置へ requestAnimationFrame で毎フレーム16%ずつ近づけて、少し遅れてついてくるようにしてください。a や button の上では輪を1.8倍にして薄く塗ります。本物のカーソルは消さないでください。マウスのない端末（@media (pointer: fine) に当てはまらない端末）では輪を出さず、prefers-reduced-motion: reduce のときは遅れなしでマウスに重ねるだけにしてください。ライブラリは使わないでください。',
  howTo: [
    '輪を1つ置き、JavaScriptでマウスの位置を覚えておきます。毎フレーム（1秒に約60回）、輪の位置を「マウスまでの距離の16%」だけ近づけると、近いほどゆっくりになる、なめらかな追いかけ方になります。この「少しずつ近づける」計算が、遅れてついてくる感じの正体です。',
    'リンクやボタンの上に来たら輪にクラスを付けて大きくします。輪には pointer-events: none（クリックを素通りさせる指定）を付け、下にあるボタンを押せなくならないようにします。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（body の最後に置く）',
      code: `<div class="stalker" aria-hidden="true"></div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.stalker {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 40px;
  height: 40px;
  margin: -20px 0 0 -20px; /* 輪の中心をマウスに合わせる */
  border: 2px solid #f06a35;
  border-radius: 50%;
  pointer-events: none;     /* クリックを下の要素へ素通りさせる */
  opacity: 0;
  transition: opacity 0.2s ease-out, scale 0.2s ease-out, background-color 0.2s ease-out;
}
.stalker.is-on { opacity: 1; }
/* リンクやボタンの上では大きく */
.stalker.is-big { scale: 1.8; background-color: rgba(240, 106, 53, 0.16); }

/* マウスのない端末では出さない */
@media not all and (pointer: fine) {
  .stalker { display: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const stalker = document.querySelector('.stalker');
const fine = matchMedia('(pointer: fine)').matches;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (stalker && fine) {
  const goal = { x: 0, y: 0 };
  const now = { x: 0, y: 0 };
  let raf = 0;

  const tick = () => {
    const k = reduce ? 1 : 0.16; // 1回に近づく割合。小さいほどゆっくり
    now.x += (goal.x - now.x) * k;
    now.y += (goal.y - now.y) * k;
    stalker.style.transform = \`translate(\${now.x}px, \${now.y}px)\`;
    const far = Math.abs(goal.x - now.x) + Math.abs(goal.y - now.y) > 0.3;
    raf = far ? requestAnimationFrame(tick) : 0; // 止まったら計算もやめる
  };

  window.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    goal.x = e.clientX;
    goal.y = e.clientY;
    // 出てきた瞬間は、画面の左上から飛んでこないようにその場に置く
    if (!stalker.classList.contains('is-on')) { now.x = goal.x; now.y = goal.y; }
    stalker.classList.add('is-on');
    stalker.classList.toggle('is-big', !!e.target.closest('a, button'));
    if (!raf) raf = requestAnimationFrame(tick);
  });
  // マウスが画面の外へ出たら隠す
  document.documentElement.addEventListener('pointerleave', () => {
    stalker.classList.remove('is-on');
  });
}`,
    },
  ],
  cautions: [
    'スマホやタブレットにはマウスがないので、追いかける相手がいません。指で触っている間だけ出すこともできますが、指で隠れて見えないため、多くのサイトはスマホでは出しません。見本の枠では、タップした場所へ輪が追いかけていくようにしてあります。',
    '本物のカーソルを cursor: none で消して輪だけにすると、遅れのぶん「どこを押すのか」がずれて見え、押し間違いが起きます。本物のカーソルは残しておくのが安全です。',
    '輪に pointer-events: none を付け忘れると、輪がボタンの上にかぶさってクリックできなくなります。',
    '毎フレームの計算は軽いものですが、止まっているときまで回し続けると電池を使います。追いついたら requestAnimationFrame を止めてください。',
    '読み上げソフトには意味のない飾りなので、aria-hidden="true" を付けて読ませないようにします。',
  ],
  similar: [
    {
      slug: 'magnetic-button',
      diff: 'マグネティックボタンは、ボタンの方がマウスへ引き寄せられます。マウスストーカーは、マウスについてくる別の飾りが動きます。2つを組み合わせるサイトも多いです。',
    },
    {
      slug: 'hover-lift',
      diff: '浮き上がりは乗せたカードそのものが反応します。マウスストーカーは画面のどこにいても常にマウスについてきます。',
    },
  ],
  faq: [
    {
      q: 'マウスストーカーは重くなりませんか？',
      a: '輪を1つ動かすだけなら、ほとんど負担はありません。重くなるのは、top・left で位置を変えている場合や、輪にぼかし（filter: blur）を付けている場合です。位置は transform で動かし、追いついたら計算を止めてください。',
    },
    {
      q: 'スマホでマウスストーカーはどうなりますか？',
      a: 'マウスがないので、基本は出さないのが正解です。CSSの @media (pointer: fine) で、マウスのような細かく指せる道具がある端末だけに出せます。',
    },
    {
      q: 'マウスストーカーとカスタムカーソルの違いは？',
      a: 'カスタムカーソルは、本物のカーソルの絵そのものを差し替えることを指すのが一般的です。マウスストーカーは本物のカーソルはそのままに、別の飾りが後ろから追いかけてくる演出です。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
