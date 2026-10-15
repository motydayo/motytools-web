import type { Ugoki } from '../types';

export default {
  slug: 'magnetic-button',
  no: 12,
  category: 'pointer',
  name: 'マグネティックボタン',
  en: 'Magnetic button',
  aka: ['磁石ボタン', '吸い寄せボタン', 'マグネットボタン', 'マグネットホバー'],
  mode: 'script',
  title: 'マグネティックボタンの作り方｜マウスに吸い寄せられる動きをJSで',
  description:
    'マウスを近づけるとボタンが磁石のように吸い寄せられる「マグネティックボタン」を見本で解説。効く範囲と寄る強さの決め方、20行ほどのJavaScript、スマホとキーボードでの扱いまで。',
  oneLine: 'マウスを近づけると、ボタンが磁石のように吸い寄せられる。',
  what: [
    'ボタンのまわりにマウスが近づくと、ボタンがマウスの方へ少しずれて「吸い寄せられる」演出です。見本の点線の範囲が吸い寄せの効く場所で、その中でマウスを回すとボタンがついてきます。範囲の外へ出ると、ゆっくり元の位置に戻ります。',
    '大事なボタン1つに「押してほしい」という気配を足せるのが価値です。動きの量はマウスとのずれの3割ほどにとどめるので、押そうとしたボタンが逃げることはありません。',
  ],
  when: [
    'LPの最後の「申し込む」「相談を予約する」など、ページで一番押してほしいボタン1つに使うとき',
    '制作会社やブランドのサイトで、操作の手ざわりにこだわりを見せたいとき',
    'トップページのヒーロー（最初の大きな見出し部分）にある、次へ進むボタンに使うとき',
  ],
  avoid: [
    'ボタンがたくさん並ぶ画面（全部が寄ってくると落ち着かず、押し間違いも増える）',
    'フォームの送信ボタンなど、正確に押すことが何より大事な場所',
    '小さなボタン（寄る量が大きく感じられ、逃げるように見える）',
  ],
  prompt:
    '一番大事なボタン1つを「マグネティックボタン（magnetic button）」にしてください。マウスがボタンの中心から110px以内に入ったら、マウスとのずれの35%だけ transform: translate でボタンをマウスの方へ動かし、中の文字はさらに15%ずらして立体感を出します。範囲の外に出たら0.35秒の ease-out で元の位置へ戻してください。JavaScriptは pointermove だけで、ライブラリは使わないでください。マウスのない端末（pointer: fine でない端末）と prefers-reduced-motion: reduce のときは動かさないでください。',
  howTo: [
    'マウスが動くたびに、ボタンの中心とマウスとの距離を計算します。距離が決めた範囲（ここでは110px）より近ければ、そのずれに0.35を掛けた分だけボタンを transform で動かします。掛ける数を小さくすると控えめに、大きくすると強く吸い寄せられます。',
    '動き始めは0.15秒ですばやく、戻るときは0.35秒でゆっくりにすると、磁石から離れたような余韻が出ます。中心の位置はボタンをずらす前の場所で測るのがコツで、ここでは親の箱の中心を使っています。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="magnet">
  <a class="mag-btn" href="/reserve">
    <span class="mag-text">相談を予約する</span>
  </a>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.magnet { display: inline-block; padding: 40px; } /* 吸い寄せが効く余白 */
.mag-btn {
  display: inline-flex;
  align-items: center;
  min-height: 48px;
  padding: 0 28px;
  border-radius: 999px;
  background: #1d2541;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.35s ease-out; /* 戻るときはゆっくり */
}
.mag-text { display: block; transition: transform 0.35s ease-out; }
.mag-btn.is-pull,
.mag-btn.is-pull .mag-text { transition-duration: 0.15s; } /* 寄るときはすばやく */
.mag-btn:focus-visible { outline: 2px solid #4f73d9; outline-offset: 3px; }`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const RANGE = 110; // ボタンの中心からこの距離（px）以内で吸い寄せる
const POWER = 0.35; // ずれの何割だけ寄るか

const ok = matchMedia('(pointer: fine)').matches &&
  !matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('.magnet').forEach((box) => {
  const btn = box.querySelector('.mag-btn');
  const text = box.querySelector('.mag-text');
  if (!ok || !btn) return;

  const release = () => {
    btn.classList.remove('is-pull');
    btn.style.transform = '';
    text.style.transform = '';
  };

  window.addEventListener('pointermove', (e) => {
    // ボタンは動くので、動かない親の箱の中心で測る
    const r = box.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    if (Math.hypot(dx, dy) > RANGE) return release();
    btn.classList.add('is-pull');
    btn.style.transform = \`translate(\${dx * POWER}px, \${dy * POWER}px)\`;
    text.style.transform = \`translate(\${dx * 0.15}px, \${dy * 0.15}px)\`;
  });
  document.documentElement.addEventListener('pointerleave', release);
});`,
    },
  ],
  cautions: [
    'スマホにはマウスがないので、近づける操作そのものがありません。指で押した瞬間に少し寄せることはできますが、押す場所がずれて見えるため、スマホでは動かさないのが基本です。見本の枠ではタップした場所へ寄るようにしてあります。',
    '寄る量を大きくしすぎると、押そうとしたボタンが逃げていくように感じます。ずれの3〜4割、動くのは最大でも30〜40px程度に抑えてください。',
    'キーボードで操作する人には、この動きは起きません。:focus-visible の枠線をはっきり付けて、どこが選ばれているかを示してください。',
    'ページ全体で pointermove を見張るので、ボタンが多いと計算も増えます。付けるのは本当に押してほしいボタン1〜2個にとどめます。',
  ],
  similar: [
    {
      slug: 'cursor-follower',
      diff: 'マウスストーカーは、マウスの後ろを飾りがついてきます。マグネティックボタンは、ボタンそのものがマウスの方へ寄ってきます。',
    },
    {
      slug: 'hover-lift',
      diff: '浮き上がりは乗せたときに真上へ少し動くだけです。マグネティックボタンは、マウスの位置に合わせて上下左右どちらへも寄ります。',
    },
  ],
  faq: [
    {
      q: 'マグネティックボタンはライブラリなしで作れますか？',
      a: '作れます。マウスとボタンの中心との距離を測って、その一部だけ transform で動かすだけなので、20行ほどのJavaScriptで足ります。GSAPなどのアニメーション用ライブラリを使う作例も多いですが、必須ではありません。',
    },
    {
      q: 'ボタンがガタガタ震えてしまいます。',
      a: 'ずらしたあとのボタンの位置を中心として測っているのが原因です。中心は、動かない親の箱で測ってください。動くボタン自身の getBoundingClientRect() を使うと、動くたびに中心がずれて震えます。',
    },
    {
      q: 'マグネティックボタンでクリック率は上がりますか？',
      a: '上がるとは言い切れません。目を引く効果はありますが、ボタンの文言・置き場所・色の方がずっと大きく影響します。演出は仕上げとして付け、効果を見たいなら付けた版と付けない版で比べてください。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
