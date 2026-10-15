import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'sticky-cta',
  no: 29,
  category: 'display',
  name: '追従CTAバー',
  en: 'Sticky CTA bar',
  aka: ['追従ボタン', '固定CTA', 'フローティングCTA', '下部固定バー', 'スティッキーCTA'],
  mode: 'scroll',
  title: 'スマホ下部に固定する追従CTAバーの作り方｜出すタイミングとCSS【見本】',
  description:
    'スクロールしても画面の下に付いてくる申し込みの帯「追従CTAバー」を動く見本で解説。出すときと引っ込めるときの決め方、position: fixedとIntersectionObserverでの作り方、似た部品との違いをまとめました。',
  oneLine: '最初のボタンを過ぎると、申し込みの帯が画面の下に付いてくる。',
  what: [
    'スクロールしても画面の下にくっついて離れない、申し込みや購入のための帯です（CTA は Call To Action の略で「行動を呼びかけるボタン」のこと）。見本では、最初の「空室を見る」ボタンを読み過ぎたあたりで、下から値段とボタンの帯がすっと出てきます。いちばん下の「ご予約はこちら」の欄が見えると、同じボタンが2つ並ばないように帯は引っ込みます。',
    '追従CTAバーの決まりごとは「出しっぱなしにしない」ことです。ページを開いた直後は本文のボタンが見えているので出さず、読み進めて押す場所が見えなくなってから出します。中身は値段などの判断材料1つとボタン1つに絞り、帯の高さは画面の1割程度に抑えます。帯の下に本文が隠れないよう、ページの下に帯の高さぶんの余白も空けます。',
    '動きの図鑑の「追従ヘッダー」は画面の上に付いてくるメニューの帯で、サイトの中を移動するためのものです。「上に戻るボタン」は右下の小さな丸で、ページの先頭へ戻るためのものです。追従CTAバーは、申し込み・購入という1つの行動へ誘うためだけの帯で、スマホの親指が届く画面下に置くのが基本です。',
  ],
  when: [
    'スマホで見られることが多いLPで、長い説明のどこからでも申し込めるようにしたいとき',
    'ECサイトの商品ページで、写真や説明を読み進めても「カートに入れる」を見失わせたくないとき',
    '旅館・ホテルのページで、値段と「空室を見る」をいつでも押せるようにしたいとき',
    'アプリのダウンロードや無料登録を、記事を読み終える前でも案内したいとき',
  ],
  avoid: [
    '記事・ブログなど、読むこと自体が目的のページ（ずっと居座る帯は読書の邪魔になる）',
    '画面の下にタブバーやチャットのボタンがすでにあるとき（下が混み合って押し間違える）',
    'ページを開いた瞬間から帯を出すとき（本文のボタンと二重になり、押し付けがましく見える）',
  ],
  prompt:
    'LPのスマホ表示に「追従CTAバー（sticky CTA bar）」を付けてください。画面の下に position: fixed で置く帯で、左に「1泊2食 15,000円〜」、右に「空室を見る」ボタンを並べてください。ページを開いた直後は隠しておき、{{show:t}}以上スクロールしたら{{dur:t}}かけて下からすべり出させ（ease-out）、ページ最後の申し込み欄が画面に入ったら引っ込めてください（判定は IntersectionObserver）。隠れている間は visibility: hidden にしてキーボードの焦点が行かないようにしてください。iPhoneのホームバーに重ならないよう env(safe-area-inset-bottom) の余白を入れ、帯の高さぶん body の下に余白を空けてください。動きを減らす設定（prefers-reduced-motion）の人には、すべらせずに表示してください。',
  howTo: [
    '帯は position: fixed で画面の下に置き、隠れているときは transform: translateY(100%) で帯の高さぶん下へずらしておきます。表示するときに transform を戻せば、下からすっと出てきます。visibility も一緒に切り替えると、隠れている帯のボタンにキーボードの焦点が行かなくなります。',
    '出すタイミングは、スクロール量（window.scrollY）で決めるのがいちばん簡単です。最初のボタンを過ぎるくらいの値にします。引っ込めるタイミングは、ページ最後の申し込み欄を IntersectionObserver で見張り、それが画面に入ったら隠します。見本は枠の中に収めるため position: sticky の台に乗せていますが、本番では下のコードのとおり position: fixed を使います。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<!-- ページの最後の申し込み欄 -->
<section id="reserve">
  <h2>ご予約はこちら</h2>
  <a href="/reserve" class="btn">空室を見る</a>
</section>

<!-- 追従CTAバー -->
<div class="sticky-cta" aria-hidden="true">
  <p><b>1泊2食 15,000円〜</b><small>大人1名・税込</small></p>
  <a href="/reserve" class="btn" tabindex="-1">空室を見る</a>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.sticky-cta {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 16px calc(10px + env(safe-area-inset-bottom));
  background: rgb(255 255 255 / 0.96);
  border-top: 1px solid #e4e2dc;
  /* 隠れているとき: 帯の高さぶん下へ（消えるときは加速） */
  transform: translateY(100%);
  visibility: hidden;
  transition: transform {{dur}} ease-in, visibility 0s linear {{dur}};
}
.sticky-cta.is-shown {
  transform: none;
  visibility: visible;
  transition: transform {{dur}} ease-out, visibility 0s;
}
.sticky-cta .btn { min-height: 44px; }
/* 帯の下に本文が隠れないように */
body { padding-bottom: 72px; }

@media (prefers-reduced-motion: reduce) {
  .sticky-cta, .sticky-cta.is-shown { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const bar = document.querySelector('.sticky-cta');
const barLink = bar.querySelector('a');
const final = document.querySelector('#reserve');
let finalInView = false;

function sync() {
  const show = window.scrollY > {{show:n}} && !finalInView;
  bar.classList.toggle('is-shown', show);
  // 隠れている間は読み上げ・焦点の対象から外す
  bar.setAttribute('aria-hidden', String(!show));
  barLink.tabIndex = show ? 0 : -1;
}

// 最後の申し込み欄が見えたら引っ込める
new IntersectionObserver(([e]) => {
  finalInView = e.isIntersecting;
  sync();
}).observe(final);

window.addEventListener('scroll', sync, { passive: true });
sync();`,
    },
  ],
  tune: [
    { key: 'show', label: '出るスクロール位置', min: 0, max: 800, step: 40, value: 400, unit: 'px' },
    { key: 'dur', label: '出る速さ', min: 0.1, max: 0.6, step: 0.05, value: 0.25, unit: 's' },
  ],
  cautions: [
    '帯の下に本文やフォームの送信ボタンが隠れないよう、ページの下に帯の高さぶんの余白を空けます。いちばん下まで読んでも最後の行が帯の裏、というのはよくある失敗です。',
    'iPhoneでは画面下のホームバーに帯が重なります。padding-bottom に env(safe-area-inset-bottom) を足し、meta viewport に viewport-fit=cover を指定します。',
    'スマホで入力欄を押してキーボードが出ると、固定した帯がキーボードの上に浮いて入力の邪魔になることがあります。フォームのあるページでは、入力中は帯を隠します。',
    '画面の下にはチャットのボタンや上に戻るボタンも置かれがちです。重なると押し間違えるので、追従CTAバーを出す間は他の浮いたボタンの位置をずらすか、出さないようにします。',
  ],
  similar: [
    { slug: 'sticky-header', book: 'ugoki', diff: '追従ヘッダーは画面の上に付いてくるメニューの帯で、サイト内の移動のためのものです。追従CTAバーは画面の下で、申し込みなど1つの行動だけを誘います。' },
    { slug: 'back-to-top', book: 'ugoki', diff: '上に戻るボタンは、右下に出る小さな丸で、ページの先頭へ戻るためのものです。出し方は似ていますが、役割は「移動」で、申し込みではありません。' },
    { slug: 'fab', diff: 'フローティングアクションボタンは、アプリの画面の右下に浮かぶ丸いボタンで「新しく作る」などの主な操作を置きます。追従CTAバーは横幅いっぱいの帯で、値段などの判断材料も一緒に見せます。' },
  ],
  faq: [
    {
      q: '追従CTAバーは申し込みを増やしますか？',
      a: '長いページで「申し込む場所を探す手間」が減るので、効果が出ることはよくあります。ただし必ず増えるとは限らず、出しっぱなしや中身の詰め込みすぎで逆効果になることもあります。出すタイミングと中身を変えて、実際の数字で比べてください。',
    },
    {
      q: 'パソコンの画面でも出すべきですか？',
      a: 'パソコンでは画面が広く、本文の横にボタンを置く余地もあるので、スマホだけに出すサイトが多いです。パソコンでも出す場合は、横幅いっぱいにせず、右下の小さな箱にするなど控えめにします。',
    },
    {
      q: 'position: fixed と sticky のどちらを使えばいいですか？',
      a: 'ページ全体の画面の下に付けるなら position: fixed が基本です。sticky は「親の箱の中だけ」でくっつくので、ページのある区間だけで付いてくる帯を作るときに使います。この図鑑の見本は枠の中に収めるため sticky を使っています。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
