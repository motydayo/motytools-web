import type { Ugoki } from '../types';

export default {
  slug: 'infinite-scroll',
  no: 19,
  category: 'load',
  name: '無限スクロール',
  en: 'Infinite scroll',
  aka: ['オートページャー', '自動読み込み', 'エンドレススクロール', '続きを自動で読み込む'],
  mode: 'scroll',
  title: '無限スクロールの作り方と弱点｜ページ送り・もっと見るとの使い分け',
  description:
    '下端まで読むと続きが自動で足される無限スクロールを動く見本で解説。IntersectionObserverでの作り方、フッターに届かない・戻ると位置を失う弱点、ページ送りや「もっと見る」ボタンとの使い分けまで正直にまとめました。',
  oneLine: '一覧の下端まで来ると「読み込み中」が出て、続きが自動で足される。',
  what: [
    '記事や商品の一覧を下へ読み進め、いちばん下に近づくと「続きを読み込み中」が出て、次の何件かが自動で足される仕組みです。ページ番号を押さなくても読み続けられます。見本では最初に5件、下端に来るたびに4件ずつ増え、すべて出し切ると「すべての記事を表示しました」とフッターが現れます。上の「表示中 ○件」で増えていく様子が分かります。',
    'SNSのタイムラインや写真共有サービスのように、「特に目的なく眺め続ける」使い方と相性のよい作りです。その反面、フッター（会社情報や問い合わせ先）に届きにくい、別のページへ行って戻ると読んでいた位置を失う、といった弱点があります。目的のものを探すページでは、ページ送りや「もっと見る」ボタンの方が向いていることも多いです。',
  ],
  when: [
    'SNSやニュースアプリのように、新しい順の投稿を気軽に眺め続けてもらうタイムラインのとき',
    '写真・イラスト・作品の一覧で、比べるより「次々に見る」楽しさを大事にしたいとき',
    'スマホが中心のサービスで、小さなページ番号を押させたくないとき',
    'フッターに大事な情報が無く、一覧そのものが画面の主役のとき',
  ],
  avoid: [
    'フッターに会社情報・問い合わせ・規約など、たどり着いてほしい情報があるページ',
    'ネットショップの検索結果など、商品を比べて「さっきの3ページ目のあれ」に戻りたくなるページ',
    '件数が少ない一覧（20件程度なら最初から全部出す方が早い）',
    '検索エンジンに2ページ目以降もきちんと読ませたいブログの記事一覧（作り方によっては読まれない）',
  ],
  prompt:
    '記事一覧に「無限スクロール（infinite scroll）」を付けてください。一覧の下に「次の10件を見る」というふつうのリンク（/news/page/2/）を置き、JavaScriptが動くときだけ IntersectionObserver でそのリンクを見張り、画面の下端から300px手前に来たら次のページのHTMLを fetch で取得して、記事だけを一覧の末尾に足してください。読み込み中は「続きを読み込み中」を表示し、最後のページでは「すべて表示しました」に変えて見張りをやめてください。足すたびに history.replaceState でURLを今のページ番号に更新し、prefers-reduced-motion が reduce の人には追加時のアニメーションを付けないでください。',
  howTo: [
    '一覧の最後に「見張り役」の要素を置き、IntersectionObserver（要素が画面に入ったかをブラウザが知らせてくれる仕組み）で見張ります。見張り役が見えたら次のページを読み込み、記事を一覧の末尾に足します。スクロール量を毎回計算するより軽く、スマホでも安定します。',
    'おすすめは「もっと見る」リンクを見張り役にする作り方です。JavaScriptが動かない環境や検索エンジンにはふつうのページ送りとして働き、動く環境では自動で続きが足されます。次のページはサーバーが返す普通のHTMLをそのまま取ってきて、記事の部分だけを取り出して足すので、特別な仕組み（データ専用の窓口）を新しく作らなくても済みます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（1ページ目と2ページ目以降で同じ形）',
      code: `<ul class="feed">
  <li class="feed-item"><a href="/news/101/">紅葉が見ごろの露天風呂 5選</a></li>
  <li class="feed-item"><a href="/news/100/">日帰りで行ける高原の牧場</a></li>
  <!-- …このページの10件… -->
</ul>

<!-- 見張り役。JavaScriptが動かなければ、ふつうのページ送りとして使える -->
<div class="feed-more" aria-live="polite">
  <a class="feed-next" href="/news/page/2/">次の10件を見る</a>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.feed-more {
  min-height: 64px;
  display: grid;
  place-items: center;
}
/* 足された記事は、下から少し持ち上げて出す */
.feed-item.is-new {
  animation: feed-in 0.35s ease-out both;
}
@keyframes feed-in {
  from { opacity: 0; transform: translateY(12px); }
}
@media (prefers-reduced-motion: reduce) {
  .feed-item.is-new { animation: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const feed = document.querySelector('.feed');
const more = document.querySelector('.feed-more');
let busy = false;

const loadNext = async () => {
  const next = more.querySelector('.feed-next');
  if (busy || !next) return;
  busy = true;
  more.textContent = '続きを読み込み中';
  try {
    const html = await (await fetch(next.href)).text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    // 次のページの記事を、今の一覧の末尾に足す
    doc.querySelectorAll('.feed-item').forEach((li) => {
      li.classList.add('is-new');
      feed.append(li);
    });
    history.replaceState(null, '', next.href); // 戻ったときのためにURLを今の位置に
    const newer = doc.querySelector('.feed-next');
    if (newer) {
      more.replaceChildren(newer); // 次のページへのリンクに差し替え
      io.unobserve(more); // まだ見張り役が見えていたら、続けてもう一度読み込む
      io.observe(more);
    } else {
      more.textContent = 'すべて表示しました';
      io.disconnect();
    }
  } catch {
    more.replaceChildren(next); // 失敗したらリンクを戻し、押して再試行できるように
  }
  busy = false;
};

// 下端の300px手前に来たら読み込む
const io = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) loadNext();
}, { rootMargin: '0px 0px 300px 0px' });
io.observe(more);`,
    },
  ],
  cautions: [
    'フッターに届かなくなります。会社情報・問い合わせ・規約のリンクは、ヘッダーのメニューにも置くか、一覧の横に固定してください。数ページ分を自動で足したら「もっと見る」ボタンに切り替える作り方もよく使われます。',
    '記事を開いて「戻る」を押すと、一覧が1ページ目からに戻り、読んでいた位置を失いがちです。URLをページ番号に合わせて更新し、戻ったときにそのページから表示できるようにしておくなどの対策を入れてください。',
    '何百件も足し続けると、ページが重くなって操作がもたつきます。特にスマホでは、件数に上限を設けるか、画像に遅延読み込みを付けてください。',
    '読み上げソフトやキーボードで操作する人には、続きが足されたことが伝わりにくいです。見張り役に aria-live（変化を読み上げてもらう指定）を付け、「続きを読み込み中」「すべて表示しました」を文字で示してください。',
    '検索エンジンはスクロールしないので、JavaScriptだけで続きを足す作りだと2ページ目以降が読まれないことがあります。見本のコードのように、ふつうのページ送りのリンクを土台にしておくと安全です。',
  ],
  similar: [
    {
      slug: 'lazy-loading',
      diff: '遅延読み込みは、すでにページにある画像の読み込みを後回しにするだけです。無限スクロールは、ページに無かった記事や商品そのものを取ってきて足します。',
    },
    {
      slug: 'back-to-top',
      diff: '「上に戻る」ボタンは、長くなった一覧の先頭へ一気に戻るための部品です。無限スクロールでは一覧が長くなり続けるので、組み合わせて使われることがよくあります。',
    },
  ],
  faq: [
    {
      q: '無限スクロールとページ送り、「もっと見る」ボタンはどう使い分けますか？',
      a: '眺めること自体が目的のタイムラインや作品一覧は無限スクロール、商品を比べたり後で戻ったりする検索結果はページ送りが向いています。その間が「もっと見る」ボタンで、読む人が自分のタイミングで続きを出せ、フッターにも届けます。迷ったら「もっと見る」ボタンが無難です。',
    },
    {
      q: '無限スクロールはSEOに不利ですか？',
      a: 'JavaScriptだけで続きを足す作りだと、検索エンジンが2ページ目以降の記事を見つけにくくなります。各ページに個別のURL（/page/2/ など）を用意し、ふつうのリンクでもたどれるようにしておけば問題ありません。',
    },
    {
      q: 'スクロールしても続きが読み込まれません。',
      a: '見張り役の要素の高さが0だと、画面に入ったと判定されないことがあります。min-height を付けてください。また、一覧がページ全体ではなく内側の箱でスクロールしている場合は、IntersectionObserver の root にその箱を指定する必要があります。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
