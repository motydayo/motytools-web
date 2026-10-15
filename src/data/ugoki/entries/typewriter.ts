import type { Ugoki } from '../types';

export default {
  slug: 'typewriter',
  no: 26,
  category: 'inform',
  name: 'タイプライター',
  en: 'Typewriter effect',
  aka: ['タイピングアニメーション', '1文字ずつ表示', '文字送り', 'テキストタイピング'],
  mode: 'script',
  title: 'タイプライター風に1文字ずつ表示する作り方｜JSとCSS【見本】',
  description:
    '見出しの文字を1文字ずつ打ち出すタイプライター演出を動く見本で解説。打って消して次の言葉に切り替える作り方、点滅する縦棒（キャレット）、読み上げソフトへの配慮、AIに頼むときの指示文までまとめました。',
  oneLine: '見出しの文字が、キーボードで打つように1文字ずつ現れる。',
  what: [
    'トップの大見出しの後半が、1文字ずつ打ち出されては消え、「もっと手軽に。」「スマホひとつで。」「24時間いつでも。」と入れ替わります。打っている位置には縦棒（キャレット）が付き、止まっている間だけ点滅します。',
    '文字が増えていく間、人は自然と最後まで読もうとします。そのため、言い切りたい一言や、サービスの強みを順番に見せたい場面で目を留めてもらいやすくなります。一方で読み終わるまで時間がかかるので、使うのはページの顔になる短い一文に絞るのがコツです。',
  ],
  when: [
    'トップページの大見出しで、サービスの強みを2〜4個、順番に見せたいとき',
    'AIチャットや検索サービスの紹介で、「打ち込んでいる」様子そのものを見せたいとき',
    'エンジニア向けの製品やポートフォリオで、コマンドを打つような雰囲気を出したいとき',
    'イベントの告知ページで、日付やキャッチコピーを1つずつ印象づけたいとき',
  ],
  avoid: [
    '説明文や本文など長い文（読み終わるまで待たされ、読む速さを奪う）',
    '申し込み方法・料金・注意事項など、すぐ読めないと困る情報',
    '1ページに何か所も入れること（どこを読めばいいか分からなくなる）',
  ],
  prompt:
    'トップの見出しを「タイプライター（typewriter effect）」にしてください。「旅の予約を、」は固定し、その後ろに「もっと手軽に。」「スマホひとつで。」「24時間いつでも。」を順番に1文字0.11秒で打ち出し、1.7秒止めてから1文字0.045秒で消して次へ進み、最後まで行ったら最初に戻してください。打っている位置には幅3pxの縦棒を付け、止まっている間だけ1秒間隔で点滅させます。JavaScriptはライブラリなしで、読み上げソフトには3つの言葉をまとめた全文を渡し、動きを減らす設定の人には最初の言葉を止めたまま表示してください。',
  howTo: [
    'JavaScriptで文字列を1文字ずつ切り出し、少し待っては表示する文字を1つ増やす、を繰り返します。日本語や絵文字を正しく1文字ずつ区切るため、文字列は [...text] のように配列にしてから扱います。消すときは逆に1文字ずつ減らし、打つより速くするとテンポよく見えます。',
    '縦棒はCSSの ::after で作り、animation の steps(1) でパッと消えてパッと付く点滅にします。打っている最中は点滅を止めると、本物の入力欄らしく見えます。読み上げソフトが1文字ずつ読まないよう、動く文字には aria-hidden="true" を付け、全文は見えない文字で渡します。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<h1 class="hero-title">
  <!-- 読み上げソフトには全文を渡す -->
  <span class="visually-hidden">旅の予約を、もっと手軽に。スマホひとつで。24時間いつでも。</span>
  <span aria-hidden="true">旅の予約を、<br><span class="typed">もっと手軽に。</span></span>
</h1>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.hero-title { min-height: 2.7em; } /* 文字が増えても下の要素を押し下げない */
.typed { white-space: nowrap; }

/* 打っている位置の縦棒 */
.typed::after {
  content: '';
  display: inline-block;
  width: 3px;
  height: 0.95em;
  margin-left: 4px;
  vertical-align: -0.1em;
  background: currentColor;
  animation: blink 1s steps(1) infinite;
}
.typed.is-typing::after { animation: none; } /* 打っている間は点滅しない */
@keyframes blink { 50% { opacity: 0; } }

.visually-hidden {
  position: absolute; width: 1px; height: 1px;
  overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  .typed::after { animation: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const el = document.querySelector('.typed');
const words = ['もっと手軽に。', 'スマホひとつで。', '24時間いつでも。'];
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function loop() {
  for (let n = 0; ; n = (n + 1) % words.length) {
    const chars = [...words[n]]; // 1文字ずつに分ける
    el.classList.add('is-typing');
    for (let i = 1; i <= chars.length; i++) {
      el.textContent = chars.slice(0, i).join('');
      await wait(110);
    }
    el.classList.remove('is-typing');
    await wait(1700);
    el.classList.add('is-typing');
    for (let i = chars.length - 1; i >= 0; i--) {
      el.textContent = chars.slice(0, i).join('');
      await wait(45);
    }
    await wait(300);
  }
}

// 動きを減らす設定の人には、最初の言葉を止めたまま見せる
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) loop();`,
    },
  ],
  cautions: [
    '文字が増えるたびに見出しの幅や行数が変わると、下のボタンや本文が上下に揺れます。見出しに min-height を付けるか、いちばん長い言葉が入る幅を確保してください。',
    '読み上げソフトは書き換わるたびに途中の文字を読むことがあります。動く部分は aria-hidden="true" にし、全文を見えない文字で渡してください。',
    '打ち終わるまで意味が分からない文は、読む人を待たせます。1つの言葉は10文字前後までにして、最初の言葉だけで意味が通るようにしておくと安心です。',
    '永遠に打ち続ける演出は、目の端で動き続けて本文を読む邪魔になります。動きを減らす設定の人には止め、気になるなら3周したら止めるのも手です。',
  ],
  similar: [
    {
      slug: 'count-up',
      diff: 'カウントアップは数字の値を0から増やしていく演出です。タイプライターは文字を1文字ずつ足していく演出で、言葉そのものを印象づけたいときに使います。',
    },
    {
      slug: 'fade-in',
      diff: 'スクロールでフェードインは文章のかたまりがまとめて現れます。タイプライターは1文字ずつ現れるので時間がかかり、短い見出し向きです。',
    },
  ],
  faq: [
    {
      q: 'タイプライター演出はCSSだけで作れますか？',
      a: '1つの決まった文を打つだけなら、CSSの steps() と width のアニメーションで作れます。ただし英数字が混じるなど文字の幅がそろわない文では切れ目がずれやすく、言葉を入れ替えるには JavaScript が必要です。入れ替えたいならこの記事のJavaScript版が確実です。',
    },
    {
      q: 'タイプライターで表示した文字はSEOで読まれますか？',
      a: 'HTMLに最初の言葉や全文を書いておけば読まれます。HTMLを空にしてJavaScriptだけで文字を入れると、検索エンジンや共有カードに見出しが出ないことがあるので避けてください。',
    },
    {
      q: '文字の速さはどれくらいがちょうどいいですか？',
      a: '日本語なら1文字0.08〜0.15秒が読みやすい目安です。消すときは打つ速さの半分以下にするとテンポが出ます。打ち終わってから次に進むまでは1.5〜2秒ほど止めて、読む時間を作ってください。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
