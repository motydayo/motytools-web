import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'pagination',
  no: 10,
  category: 'nav',
  name: 'ページネーション',
  en: 'Pagination',
  aka: ['ページ送り', 'ページャー', 'ページング', 'ページ番号リンク'],
  mode: 'script',
  title: 'ページネーションとは？無限スクロール・もっと見るとの違いと作り方',
  description:
    'ページネーション（ページ送り）を触れる見本で解説。無限スクロールや「もっと見る」ボタンとの使い分け、番号の省略（…）の決め方、aria-currentとリンクで作るHTML、スマホでの見せ方、SEOの注意、AIへの頼み方までまとめました。',
  oneLine: '長い一覧をページに分け、下の番号や「次へ」で行き来する。',
  what: [
    '検索結果や商品一覧のように件数が多いとき、一覧を「1ページ20件」などに分けて、下に「‹ 前へ 1 2 3 … 8 次へ ›」と番号を並べる部品です。見本では24件の宿を3件ずつ8ページに分けています。番号を押すとそのページへ移り、今のページは色を反転させて示します。端のページでは「前へ」「次へ」が薄くなり押せません。',
    '似た仕組みに、下までスクロールすると自動で続きが出る「無限スクロール」と、ボタンを押すと続きが足される「もっと見る」があります。ページネーションの強みは「全体の量が分かる」「同じページに戻ってこられる（URLが決まる）」「フッターにたどり着ける」の3つです。探し物をする一覧ではページネーション、眺めて楽しむ一覧では無限スクロール、その中間が「もっと見る」と考えると選びやすくなります。',
    '決まりごとは、全体を <nav aria-label="ページ送り"> で囲み、番号は <a href="?page=2"> のような本物のリンクにすること。今のページには aria-current="page" を付け、番号の数が多いときは先頭・末尾・今のページの前後だけを残して「…」で省きます。',
  ],
  when: [
    '通販・不動産・求人のように、条件で絞り込んだ一覧から目当ての1件を探すとき',
    '検索結果や管理画面の表のように、「3ページ目のあれ」と位置で覚えて戻ってきたいとき',
    'ブログやニュースの記事一覧で、古い記事にもリンクでたどり着けるようにしたいとき',
    '一覧の下にフッター（会社情報・問い合わせ）があり、そこまで確実にたどり着いてほしいとき',
  ],
  avoid: [
    'SNSのタイムラインや写真のように、探すより眺めて楽しむ一覧（無限スクロールの方が気持ちよく続けられる）',
    '全部で2〜3ページ分しかないとき（「もっと見る」ボタン1つか、全部並べた方が手間が少ない）',
    'スマホで番号を10個も並べるとき（押し間違える。前後1つずつと先頭・末尾だけに絞る）',
  ],
  prompt:
    '商品一覧の下に「ページネーション（pagination）」を作ってください。<nav aria-label="ページ送り"> の中に「‹ 前へ」「番号」「次へ ›」を並べ、番号は <a href="?page=2"> のような本物のリンクにしてください。今のページは aria-current="page" を付けて色を反転させ、最初と最後のページでは「前へ」「次へ」を押せない見た目にしてください。番号が多いときは先頭・末尾・今のページの前後1つだけを出し、間は「…」で省いてください。ボタンは高さと最小幅を{{size:t}}、角丸を{{radius:t}}、間隔を{{gap:t}}にし、スマホ（480px未満）では「前へ」「次へ」の文字を隠して矢印だけにしてください。各番号には「2ページ目」のような aria-label を付けてください。',
  howTo: [
    '番号は <button> ではなく <a href="?page=2"> のリンクで作ります。リンクなら検索エンジンが2ページ目以降もたどれ、利用者も新しいタブで開いたりURLを共有したりできます。今のページはリンクにせず（または href を外し）、aria-current="page" を付けて見た目を変えます。',
    '番号の省略は「先頭」「末尾」「今のページとその前後」を残し、間が空いたら「…」を入れる、という決まりで作ると、何ページあっても幅が一定になります。見本の JavaScript の pagesFor() がその計算です。サーバー側で一覧を作るサイトなら、同じ計算をテンプレートの中で行います。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（3ページ目を表示中・全8ページ）',
      code: `<nav class="pager" aria-label="ページ送り">
  <ul>
    <li><a href="?page=2" rel="prev" aria-label="前のページ">‹ <span class="word">前へ</span></a></li>
    <li><a href="?page=1" aria-label="1ページ目">1</a></li>
    <li><a href="?page=2" aria-label="2ページ目">2</a></li>
    <li><a aria-current="page" aria-label="3ページ目">3</a></li>
    <li><a href="?page=4" aria-label="4ページ目">4</a></li>
    <li><span class="gap" aria-hidden="true">…</span></li>
    <li><a href="?page=8" aria-label="8ページ目">8</a></li>
    <li><a href="?page=4" rel="next" aria-label="次のページ"><span class="word">次へ</span> ›</a></li>
  </ul>
</nav>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.pager ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: {{gap}};
  list-style: none;
  padding: 0;
}
.pager a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: {{size}};
  height: {{size}};
  padding: 0 8px;
  border: 1px solid #e4e2dc;
  border-radius: {{radius}};
  color: inherit;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  text-decoration: none;
  transition: background-color 0.15s ease-out;
}
.pager a[href]:hover { background: #f7f6f2; }
/* 今のページ */
.pager a[aria-current="page"] {
  background: #1d2541;
  border-color: #1d2541;
  color: #fff;
}
/* 端のページで押せない「前へ」「次へ」 */
.pager a:not([href]):not([aria-current]) { opacity: 0.4; }
.pager .gap { min-width: 16px; text-align: center; }

/* スマホでは文字を隠して矢印だけに */
@media (max-width: 479px) {
  .pager .word {
    position: absolute; width: 1px; height: 1px;
    overflow: hidden; clip-path: inset(50%); white-space: nowrap;
  }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript（番号の省略を計算する）',
      code: `// 表示する番号を決める: 先頭・末尾・今のページの前後 around 個。離れていれば「…」
function pagesFor(current, total, around = 1) {
  const out = [];
  for (let n = 1; n <= total; n++) {
    if (n === 1 || n === total || Math.abs(n - current) <= around) out.push(n);
    else if (out[out.length - 1] !== '…') out.push('…');
  }
  return out;
}

pagesFor(3, 8); // [1, 2, 3, 4, '…', 8]
pagesFor(6, 8); // [1, '…', 5, 6, 7, 8]`,
    },
  ],
  tune: [
    { key: 'size', label: 'ボタンの大きさ', min: 32, max: 52, step: 2, value: 44, unit: 'px' },
    { key: 'radius', label: '角丸', min: 0, max: 24, step: 2, value: 8, unit: 'px' },
    { key: 'gap', label: 'ボタンの間隔', min: 2, max: 12, step: 1, value: 6, unit: 'px' },
  ],
  cautions: [
    'スマホでは番号ボタンを44px四方より小さくしないでください。番号が並ぶ部品は押し間違いがいちばん起きやすい場所です。入りきらないなら、番号を減らします。',
    'JavaScript で一覧だけを差し替える作りにした場合は、URL（?page=3）も書き換え、一覧の見出しへ焦点を移します。そうしないと、ブラウザの「戻る」で1ページ目に戻されたり、読み上げで何が変わったか伝わらなかったりします。',
    '2ページ目以降のURLに <link rel="canonical"> で1ページ目を指定すると、2ページ目以降の商品が検索に載らなくなるおそれがあります。各ページは自分自身を指すのが基本です。',
    '並び替えや絞り込みを変えたら、1ページ目に戻します。5ページ目のまま条件を変えると「該当なし」に見える事故が起きます。',
  ],
  similar: [
    { slug: 'infinite-scroll', book: 'ugoki', diff: '無限スクロールは下までスクロールすると続きが自動で出ます。眺める一覧に向き、全体の量やフッターが見えにくくなる弱点があります。' },
    { slug: 'carousel', diff: 'カルーセルの下の点（ドット）もページ送りの一種ですが、数枚の画像を横に送る部品です。件数の多い一覧にはページネーションを使います。' },
    { slug: 'stepper', diff: 'ステッパーも番号が並びますが、申し込みなどの手順を順番に進むための部品で、好きな番号へ飛ぶものではありません。' },
  ],
  faq: [
    {
      q: 'ページネーション・無限スクロール・「もっと見る」はどれを選べばいいですか？',
      a: '目当ての1件を探す一覧（商品・物件・求人・検索結果）はページネーション、写真やSNSのように眺めて楽しむ一覧は無限スクロールが向きます。「もっと見る」ボタンはその中間で、続きを読むかどうかを利用者が決められ、フッターにもたどり着けます。迷ったら「もっと見る」が無難です。',
    },
    {
      q: 'ページネーションはSEOに影響しますか？',
      a: '番号が本物のリンク（<a href>）になっていれば、検索エンジンは2ページ目以降もたどれます。ボタンとJavaScriptだけで作ると、2ページ目以降の中身が見つけてもらえないことがあります。各ページのタイトルに「2ページ目」と入れておくと、検索結果で区別しやすくなります。',
    },
    {
      q: '1ページに何件ずつ表示するのがいいですか？',
      a: '決まった正解はありませんが、商品一覧なら20〜40件、検索結果なら10〜20件がよく使われます。画像が大きいほど件数を減らします。「表示件数を選べる」ようにする場合も、初期値は少なめにしてページの表示を速く保ちます。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
