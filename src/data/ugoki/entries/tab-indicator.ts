import type { Ugoki } from '../types';

export default {
  slug: 'tab-indicator',
  no: 32,
  category: 'inform',
  name: 'タブの下線スライド',
  en: 'Sliding tab indicator',
  aka: ['タブ切り替えアニメーション', 'タブの下線アニメーション', 'スライドするタブ', 'タブインジケーター', 'タブUI'],
  mode: 'script',
  title: 'タブ切り替えで下線がスライドする作り方｜キーボード対応つき【見本】',
  description:
    'タブを押すと下線がすべるように移動するタブ切り替えを、動く見本で解説。role="tablist"などの正しい書き方、左右の矢印キーでの操作、transformで下線を動かすCSSとJavaScript、AIへの指示文までまとめました。',
  oneLine: 'タブを押すと、下線がすっと横へすべって選んだタブの下に移る。',
  what: [
    '「宿泊」「日帰り」「貸切風呂」「体験」のタブを押すと、オレンジの下線が今のタブから押したタブまで横にすべって移り、下の中身が切り替わります。下線は文字の長さに合わせて幅も変わります。詳細ページの見本では、タブに焦点を当てて左右の矢印キーでも切り替えられます。',
    '下線がパッと消えてパッと出るより、すべって移ると「どこからどこへ切り替わったか」が目で追えます。今どのタブを見ているかがはっきりするので、似た中身が並ぶ料金プランや商品の種類を切り替える画面で迷いにくくなります。',
  ],
  when: [
    '料金プランや商品の種類を、同じ場所で切り替えて見せたいとき',
    '会社概要の「沿革・役員・拠点」のように、同じ重さの情報をまとめたいとき',
    '管理画面やアプリで、「すべて・未読・保存済み」などの表示を絞り込むとき',
    'ログインと新規登録のように、2つの入力欄をひとつの場所で切り替えたいとき',
  ],
  avoid: [
    '中身を見比べたい情報（タブだと一度に1つしか見えない。表や横並びにする）',
    'タブが6個以上ある、または名前が長いとき（スマホで折り返したり横にはみ出したりする）',
    '別のページへ移るリンクの並び（それはタブではなくナビゲーション。role="tab" を付けない）',
  ],
  prompt:
    'プランの切り替えを「下線がスライドするタブ（sliding tab indicator）」にしてください。タブは role="tablist" の中に role="tab" の button を並べ、中身は role="tabpanel" にして aria-selected・aria-controls・aria-labelledby で結び付けます。下線は tablist の中に1本だけ置き、選んだタブの offsetLeft と offsetWidth に合わせて transform: translateX と width を0.25秒の減速（ease-out）で動かしてください。左右の矢印キーで隣のタブへ（端では反対側へ回る）、Home と End で端のタブへ移り、選んでいないタブは tabindex="-1" にします。画面幅が変わったら下線を付け直し、動きを減らす設定の人には下線を動かさず切り替えてください。ライブラリは使わないこと。',
  howTo: [
    '下線はタブごとに付けるのではなく、タブの並び全体に1本だけ置きます。選んだタブの左端の位置（offsetLeft）と幅（offsetWidth）をJavaScriptで読み、下線の transform: translateX() と width に入れます。CSSの transition を付けておけば、値が変わるだけでなめらかにすべります。left ではなく transform で動かすのは、ブラウザが描き直す範囲が少なく、動きがカクつきにくいからです。',
    'タブには決まった書き方があります。role="tablist"・role="tab"・role="tabpanel" を付け、選んだタブに aria-selected="true" を付けると、読み上げソフトが「タブ、4個中1個目、選択済み」のように伝えてくれます。キーボードでは、Tabキーでタブの並びに入り、左右の矢印キーでタブを移る、というのが共通の約束です。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="tabs" role="tablist" aria-label="プランの種類">
  <button type="button" role="tab" id="tab-1" aria-selected="true" aria-controls="panel-1">宿泊</button>
  <button type="button" role="tab" id="tab-2" aria-selected="false" aria-controls="panel-2" tabindex="-1">日帰り</button>
  <button type="button" role="tab" id="tab-3" aria-selected="false" aria-controls="panel-3" tabindex="-1">貸切風呂</button>
  <i class="tab-bar" aria-hidden="true"></i>
</div>
<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">1泊2食つきプラン 12,000円〜</div>
<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>日帰り入浴とランチ 2,800円</div>
<div role="tabpanel" id="panel-3" aria-labelledby="tab-3" hidden>貸切露天風呂 50分 3,300円</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.tabs {
  position: relative;
  display: flex;
  border-bottom: 1px solid #e4e2dc;
}
.tabs [role='tab'] {
  flex: 1;
  min-height: 44px;
  border: 0;
  background: none;
  font: inherit;
  font-weight: 700;
  color: #5d6272;
  cursor: pointer;
}
.tabs [role='tab'][aria-selected='true'] { color: #f06a35; }
.tabs [role='tab']:focus-visible { outline: 2px solid #4f73d9; outline-offset: -2px; }

/* 下線は1本だけ。位置と幅をJavaScriptで入れる */
.tab-bar {
  position: absolute;
  left: 0;
  bottom: -1px;
  height: 3px;
  background: #f06a35;
}
.tabs.is-ready .tab-bar {
  transition: transform 0.25s ease-out, width 0.25s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .tabs.is-ready .tab-bar { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const list = document.querySelector('.tabs');
const tabs = [...list.querySelectorAll('[role="tab"]')];
const bar = list.querySelector('.tab-bar');
let cur = 0;

function moveBar() {
  const t = tabs[cur];
  bar.style.transform = \`translateX(\${t.offsetLeft}px)\`;
  bar.style.width = \`\${t.offsetWidth}px\`;
}

function select(i, focus = false) {
  cur = i;
  tabs.forEach((t, j) => {
    const on = i === j;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
  });
  moveBar();
  if (focus) tabs[i].focus();
}

tabs.forEach((t, i) => t.addEventListener('click', () => select(i)));

// 左右の矢印キーで隣へ、Home / End で端へ
list.addEventListener('keydown', (e) => {
  const n = tabs.length;
  const next = { ArrowRight: cur + 1, ArrowLeft: cur - 1, Home: 0, End: n - 1 }[e.key];
  if (next === undefined) return;
  e.preventDefault();
  select((next + n) % n, true);
});

// 幅が変わったら付け直す（このときは動かさない）
new ResizeObserver(() => {
  list.classList.remove('is-ready');
  moveBar();
  requestAnimationFrame(() => list.classList.add('is-ready'));
}).observe(list);`,
    },
  ],
  cautions: [
    '下線の位置は文字の大きさや画面の幅で変わります。最初の表示・画面の回転・フォントの読み込み後に付け直さないと、下線がタブからずれます。ResizeObserver（要素の大きさの変化を教えてくれる仕組み）で見張ると確実です。',
    'タブを div や a で作ると、キーボードで選べず読み上げソフトにもタブと伝わりません。button に role="tab" を付け、aria-selected と aria-controls をそろえてください。',
    '選んでいないタブに tabindex="-1" を付け忘れると、Tabキーで全部のタブを1つずつ通ることになり、中身にたどり着くまでが長くなります。タブの間は矢印キーで移るのが約束です。',
    '別のページへ移るメニューに role="tab" を付けないでください。読み上げソフトの人は「ページの中で切り替わる」と思って操作するので、ページが変わると混乱します。',
  ],
  similar: [
    {
      slug: 'underline',
      diff: '下線アニメーションは、リンクにマウスを乗せたときにその文字の下に線を引く演出です。タブの下線スライドは、1本の線が選んだタブの間を移動して現在地を示します。',
    },
    {
      slug: 'accordion',
      diff: 'アコーディオンは縦に並んだ項目をそれぞれ開け閉めし、複数を同時に開くこともできます。タブは同じ場所で中身を入れ替え、常に1つだけを見せます。',
    },
  ],
  faq: [
    {
      q: 'タブの下線スライドはCSSだけで作れますか？',
      a: 'タブの数と幅が決まっていれば、:has() と transform を組み合わせてCSSだけで作る方法もあります。ただし、タブの幅が文字の長さで変わる場合や、矢印キーで操作できるようにするには JavaScript が必要です。この記事のコードは両方に対応しています。',
    },
    {
      q: '下線が最初の表示でずれる・アニメーションしてしまうのはなぜですか？',
      a: '下線の位置を計算する前に transition が効いていると、0の位置からすべってくるように見えます。最初の位置を入れてから transition を有効にしてください（この記事のコードの is-ready クラスがその役目です）。フォントの読み込みで文字幅が変わった場合も付け直しが必要です。',
    },
    {
      q: 'タブの中身はSEOで評価されますか？',
      a: 'HTMLに書かれていれば、隠れているタブの中身も検索エンジンは読み取れます。ただし、ページの主題になる大事な情報を隠れたタブにだけ置くのは避け、最初に見えるタブに入れておくと安心です。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
