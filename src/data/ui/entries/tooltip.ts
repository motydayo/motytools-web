import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'tooltip',
  no: 4,
  category: 'overlay',
  name: 'ツールチップ',
  en: 'Tooltip',
  aka: ['ツールヒント', '吹き出し', 'ホバーヒント', 'hint'],
  mode: 'pointer',
  title: 'ツールチップの作り方｜CSSで出す吹き出しとポップオーバーとの違い',
  description:
    'ツールチップを触れる見本で解説。ポップオーバーとの違い、マウスでもキーボードでも出す・Escで消せる・少し待ってから出すといった決まりごと、role="tooltip"の付け方、CSSのコードとAIへの頼み方まで分かります。',
  oneLine: 'マウスを乗せると、短い説明が吹き出しで出て、離すと消える。',
  what: [
    'ボタンなどにマウスを乗せたり、キーボードで焦点（今どこを操作しているかの印）を当てたりしたとき、そのすぐそばに短い説明を吹き出しで出す部品です。見本では写真の右下のアイコンに乗せると「お気に入りに追加」「共有する」と名前が出て、料金の横のiマークでは補足の説明が出ます。少し待ってから出し、離れると消え、Escキーでもすぐ消せます。',
    'ツールチップの中身は「読むだけの短い文」です。リンクやボタンは入れません。押せるものを入れたいならポップオーバー、操作の一覧ならドロップダウンメニューの役割です。また、マウスを乗せるという操作はスマホにはないので、大事な情報をツールチップの中だけに隠してはいけません。アイコンの名前のように「分かる人には要らない、迷った人にだけ要る」一言を添えるのが価値です。',
  ],
  when: [
    'アイコンだけのボタン（共有・印刷・お気に入りなど）に、名前を添えたいとき',
    '料金や項目名の横の小さなiマークに、1文の補足（税・手数料・条件）を添えたいとき',
    '管理画面やエディターの道具の並びで、ボタンの名前とショートカットキーを見せたいとき',
    'グラフの点や棒に乗せたとき、その値を出したいとき',
  ],
  avoid: [
    '利用者が必ず読むべき注意や条件（スマホでは乗せられないので、見落とされる）',
    'リンクやボタンを入れたいとき（中で押せる部品はポップオーバーにする）',
    '文字の書いてあるボタンに、同じ言葉を繰り返すとき（邪魔になるだけ）',
  ],
  prompt:
    'アイコンだけのボタンに「ツールチップ（tooltip）」を付けてください。マウスを乗せたとき、またはキーボードで焦点が来たときに、ボタンの上{{gap:t}}の位置へ黒い小さな吹き出しを出してください。出るまでに{{delay:t}}待ち、{{dur:t}}かけてふわっと出し、離れたら消してください。吹き出しには role="tooltip" を付け、アイコンだけのボタンは aria-labelledby で吹き出しの文を名前にし、補足説明の場合は aria-describedby で結びつけてください。マウスで吹き出しの上に移っても消えないこと、Escキーで消せることも守ってください。中にリンクやボタンは入れず、CSSを中心に、JavaScriptはEscの処理だけにしてください。動きを減らす設定（prefers-reduced-motion）では位置を動かさずに出してください。',
  howTo: [
    'ボタンと吹き出しを1つの箱（position: relative）に入れ、吹き出しは position: absolute でボタンの上に置きます。普段は opacity: 0 と visibility: hidden で隠し、箱に :hover（マウスが乗った）か :has(:focus-visible)（キーボードで焦点が来た）が付いたら見せます。transition-delay で「出るまでの待ち時間」を付けると、マウスが通り過ぎただけで吹き出しがちらつくのを防げます。',
    '吹き出しには role="tooltip" を付け、ボタンと id で結びつけます。アイコンだけのボタンなら aria-labelledby（吹き出しの文がボタンの名前になる）、文字のあるボタンへの補足なら aria-describedby（名前のあとに読まれる）です。Escキーで消せることはアクセシビリティの基準（WCAG 1.4.13）で求められているので、そこだけ数行の JavaScript を足します。HTMLにも吹き出しの仕組み（popover="hint"）が加わりつつありますが、まだ一部のブラウザだけなので、今はこの作り方が確実です。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<!-- アイコンだけのボタン: 吹き出しの文がボタンの名前になる -->
<span class="tip-wrap">
  <button type="button" class="icon-btn" aria-labelledby="tip-share">
    <svg width="20" height="20" aria-hidden="true">…</svg>
  </button>
  <span role="tooltip" id="tip-share" class="tip">共有する</span>
</span>

<!-- 補足説明: ボタンの名前のあとに読まれる -->
<span class="tip-wrap">
  <button type="button" class="info-btn" aria-label="料金について"
    aria-describedby="tip-tax">i</button>
  <span role="tooltip" id="tip-tax" class="tip">
    入湯税150円は別途、現地でお支払いください
  </span>
</span>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.tip-wrap { position: relative; display: inline-flex; }

.tip {
  position: absolute;
  bottom: calc(100% + {{gap}});
  left: 50%;
  z-index: 10;
  max-width: 240px;
  width: max-content;
  padding: 4px 8px;
  border-radius: 6px;
  background: #1f2433;
  color: #fff;
  font-size: 12px;
  /* 普段は隠す。消えるときは待たずに */
  opacity: 0;
  visibility: hidden;
  translate: -50% 4px;
  transition: opacity {{dur}} ease-in, translate {{dur}} ease-in,
    visibility 0s linear {{dur}};
}
/* ボタンとのすき間に見えない橋をかけ、吹き出しへ移っても消えないように */
.tip::before {
  content: '';
  position: absolute;
  inset: 100% 0 auto;
  height: {{gap}};
}

/* 乗せた・キーボードで焦点が来たら、{{delay}} 待ってから出す */
.tip-wrap:hover .tip,
.tip-wrap:has(:focus-visible) .tip {
  opacity: 1;
  visibility: visible;
  translate: -50% 0;
  transition: opacity {{dur}} ease-out {{delay}},
    translate {{dur}} ease-out {{delay}}, visibility 0s linear {{delay}};
}
/* Esc で消したら、離れるまで出さない */
.tip-wrap.is-dismissed .tip { opacity: 0; visibility: hidden; transition: none; }

@media (prefers-reduced-motion: reduce) {
  .tip { translate: -50% 0; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `// Esc キーで、出ている吹き出しを消す
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  document
    .querySelectorAll('.tip-wrap:hover, .tip-wrap:has(:focus-visible)')
    .forEach((w) => w.classList.add('is-dismissed'));
});

// マウスや焦点が離れたら、また出せるように戻す
document.querySelectorAll('.tip-wrap').forEach((w) => {
  w.addEventListener('pointerleave', () => w.classList.remove('is-dismissed'));
  w.addEventListener('focusout', () => w.classList.remove('is-dismissed'));
});`,
    },
  ],
  tune: [
    { key: 'delay', label: '出るまでの待ち時間', min: 0, max: 1000, step: 50, value: 300, unit: 'ms' },
    { key: 'gap', label: 'ボタンとの距離', min: 2, max: 20, step: 1, value: 8, unit: 'px' },
    { key: 'dur', label: '出る速さ', min: 0.05, max: 0.4, step: 0.05, value: 0.15, unit: 's' },
  ],
  cautions: [
    'スマホにはマウスを乗せる操作がありません。ツールチップの中身は「なくても使える補足」にとどめ、条件や注意のように必ず読んでほしい文は、最初から画面に書いておきます。',
    '出るまでの待ち時間が0だと、マウスが通り過ぎただけで吹き出しがちらつきます。逆に1秒近く待たせると、出る前に諦められます。200〜500ミリ秒が目安です。',
    'マウスで吹き出しの上に移ったら消えないこと、Escキーで消せること、自分から消えないこと。この3つは WCAG 1.4.13（乗せると出る中身の基準）で求められています。',
    '画面の端にあるボタンでは、吹き出しが画面の外にはみ出すことがあります。端に近いボタンだけ左寄せ・右寄せにするか、上下の向きを変えて調整します。',
  ],
  similar: [
    { slug: 'popover', diff: 'ポップオーバーは押して開き、中にボタンやリンクを置ける小窓です。ツールチップは乗せるだけで出て、読むだけの短い文しか入れません。' },
    { slug: 'dropdown-menu', diff: 'ドロップダウンメニューは押すと操作の一覧が開く部品です。ツールチップは操作を持たず、ボタンの名前や補足を見せるだけです。' },
    { slug: 'underline', book: 'ugoki', diff: '下線アニメーションはリンクに乗せたときに線を引いて「押せる」ことを伝える演出です。ツールチップは乗せたものが「何か」を言葉で伝えます。' },
  ],
  faq: [
    {
      q: 'ツールチップとポップオーバーの違いは何ですか？',
      a: 'ツールチップはマウスを乗せる・焦点を当てるだけで出て、短い文を読ませるだけの部品です。ポップオーバーはボタンを押して開き、中に入力欄やリンクなど押せるものを置けます。中で何かを押させたいなら、ポップオーバーを選びます。',
    },
    {
      q: 'title属性でツールチップを出すのではだめですか？',
      a: 'おすすめしません。title属性の吹き出しは、キーボードの焦点では出ず、スマホでも出ず、出るまでの時間や見た目も変えられません。読み上げソフトでの扱いもまちまちです。role="tooltip" の要素を自分で置く方が、誰にでも同じように伝わります。',
    },
    {
      q: 'スマホではツールチップをどう扱えばいいですか？',
      a: 'タップで開いて、もう一度タップするか外を押すと閉じる「トグルチップ」にするのが一般的です。ただしアイコンだけのボタンの名前は、スマホでは見る手段がなくなるので、アイコンの下に小さく文字を添える方が親切な場合もあります。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
