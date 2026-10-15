import type { Ugoki } from '../types';

export default {
  slug: 'ripple',
  no: 13,
  category: 'pointer',
  name: 'リップルエフェクト',
  en: 'Ripple effect',
  aka: ['波紋エフェクト', 'クリックエフェクト', 'マテリアルリップル', 'タップの波紋'],
  mode: 'pointer',
  title: 'リップルエフェクトとは？押した所から波紋が広がるボタンの作り方',
  description:
    'ボタンを押した所から水の輪のような円が広がる「リップルエフェクト」を見本で解説。押した位置を測って円を出す短いJavaScript、キーボード操作への対応、AIに頼むときの指示文まで。',
  oneLine: '押した所から、水の輪のような円がふわっと広がって消える。',
  what: [
    'ボタンやリストを押すと、指やマウスで押したまさにその場所から円が広がり、薄くなって消える演出です。見本ではプランの行の左寄りを押すと左から、申し込みボタンの右寄りを押すと右から波紋が広がります。',
    '「ちゃんと押せた」という手ごたえを、押した場所と結びつけて返せるのが価値です。GoogleのMaterial Design（Androidの見た目の決まり）で広まったため、アプリのような画面と相性が良い演出です。',
  ],
  when: [
    'スマホで操作することが多い予約・注文の画面で、タップしたことをはっきり伝えたいとき',
    '料金プランや配送方法など、行を押して選ぶリストのとき',
    '管理画面やWebアプリで、ボタンを押してから結果が出るまでに少し間があるとき',
    'アプリと同じ手ざわりのWebページ（アプリの紹介ページ・Web版）にしたいとき',
  ],
  avoid: [
    '文章の中のリンク（行の中で円が広がると読みにくい）',
    '高級感や静けさを大事にするブランドサイト（アプリっぽい軽さが合わないことがある）',
    'ボタンを押すとすぐ別のページへ移る場合（波紋が見える前に画面が変わる）',
  ],
  prompt:
    'ボタンと選択リストに「リップルエフェクト（ripple effect）」を付けてください。押した位置（pointerdown の座標）を中心に円の span を作り、いちばん遠い角まで届く大きさから transform: scale(0) → scale(1) に広げながら opacity を0にします。円の色は白（不透明度 {{alpha:t}}）、時間は{{dur:t}}、ease-out。終わったら span を消してください。ボタンには position: relative と overflow: hidden を付けます。キーボードの Enter・スペースで押したときはボタンの中心から広げます。prefers-reduced-motion: reduce のときは波紋を出さないでください。ライブラリは使わないでください。',
  howTo: [
    '押されたら、押した位置を中心にした円（span）をボタンの中に1つ足します。円の大きさは、押した位置からいちばん遠い角までの距離の2倍にすると、どこを押してもボタン全体を覆えます。あとはCSSアニメーションで円を0から1倍に広げつつ透明にし、終わったら取り除きます。時間は0.4〜0.6秒が目安で、短すぎると広がる前に消えて「押した所から」が伝わらず、1秒を超えると次の操作を待たされているように感じます。',
    '円がボタンの外へはみ出さないよう、ボタンに overflow: hidden を付けます。押した位置は pointerdown（指やマウスが触れた瞬間）で取ると、指を離すのを待たずに反応できます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<button type="button" class="ripple-btn">このプランで申し込む</button>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.ripple-btn {
  position: relative;
  overflow: hidden;   /* 円をボタンの外に出さない */
  min-height: 48px;
  padding: 0 24px;
  border: 0;
  border-radius: 999px;
  background: #f06a35;
  color: #fff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}
.ripple-btn:focus-visible { outline: 2px solid #4f73d9; outline-offset: 2px; }

.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, {{alpha:n}}); /* 波紋の濃さ */
  transform: scale(0);
  pointer-events: none;
  animation: ripple {{dur}} ease-out forwards;
}
@keyframes ripple {
  to { transform: scale(1); opacity: 0; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `// x, y はボタンの左上からの位置
function ripple(el, x, y) {
  // 動きを減らす設定なら、波紋を出さない
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const r = el.getBoundingClientRect();
  // いちばん遠い角まで届く大きさ
  const size = Math.hypot(Math.max(x, r.width - x), Math.max(y, r.height - y)) * 2;
  const dot = document.createElement('span');
  dot.className = 'ripple';
  dot.style.cssText = \`width:\${size}px;height:\${size}px;left:\${x - size / 2}px;top:\${y - size / 2}px\`;
  el.appendChild(dot);
  dot.addEventListener('animationend', () => dot.remove());
}

document.querySelectorAll('.ripple-btn').forEach((btn) => {
  // マウス・タップは押した所から
  btn.addEventListener('pointerdown', (e) => {
    const r = btn.getBoundingClientRect();
    ripple(btn, e.clientX - r.left, e.clientY - r.top);
  });
  // キーボードは真ん中から（押しっぱなしの連続入力は無視）
  btn.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && !e.repeat) ripple(btn, btn.offsetWidth / 2, btn.offsetHeight / 2);
  });
});`,
    },
  ],
  tune: [
    { key: 'dur', label: '波紋が広がる時間', min: 0.2, max: 1.5, step: 0.05, value: 0.5, unit: 's' },
    { key: 'alpha', label: '波紋の濃さ', min: 0.1, max: 0.9, step: 0.05, value: 0.4, unit: '' },
  ],
  cautions: [
    'リップルはマウスでもタップでも同じように出せる、数少ない「スマホでも成立する」反応です。ただしタップ後すぐページが切り替わるボタンでは見えないので、画面が残るボタン（選択・送信中の表示があるもの）に向いています。',
    'ボタンに overflow: hidden を付けると、ボタンの外に出る影や吹き出しも切れます。影は box-shadow なら切れませんが、::after で作った飾りは切れるので確認してください。',
    'キーボードで押した場合は座標がありません。Enter・スペースのときはボタンの中心から広げると、マウスの人と同じ手ごたえになります。',
    '連打すると円が重なって増えます。アニメーションが終わったら必ず要素を消し、増え続けないようにしてください。',
  ],
  similar: [
    {
      slug: 'hover-lift',
      diff: '浮き上がりは「乗せたとき」の反応で、マウスのない端末では起きません。リップルは「押したとき」の反応なので、スマホでも見えます。',
    },
    {
      slug: 'magnetic-button',
      diff: 'マグネティックボタンは押す前にマウスへ寄ってきて、押したくさせる演出です。リップルは押したあとに「押せた」と返す演出です。',
    },
  ],
  faq: [
    {
      q: 'リップルエフェクトはCSSだけで作れますか？',
      a: 'ボタンの真ん中から広げるだけならCSSの :active と疑似要素で作れます。押した位置から広げるには座標が要るので、短いJavaScriptが必要です。',
    },
    {
      q: '波紋がボタンの外にはみ出します。',
      a: 'ボタンに position: relative と overflow: hidden を付けてください。position が無いと、円の位置の基準がボタンではなくページになってしまいます。',
    },
    {
      q: 'リップルとMaterial Designの関係は？',
      a: 'GoogleのMaterial Designが、押したことを伝える標準の反応として採用したことで広く知られるようになりました。Material UIなどの部品集を使うと最初から付いていますが、上のコードのように自分でも作れます。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
