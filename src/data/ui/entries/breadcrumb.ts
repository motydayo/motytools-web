import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'breadcrumb',
  no: 9,
  category: 'nav',
  name: 'パンくずリスト',
  en: 'Breadcrumbs',
  aka: ['パンくず', 'ブレッドクラム', 'パンくずナビ', 'トピックパス'],
  mode: 'script',
  title: 'パンくずリストとは？HTMLの書き方と構造化データ・SEOの基本【見本つき】',
  description:
    'パンくずリストを触れる見本で解説。今いるページまでの階層を示す仕組み、<nav>と<ol>を使ったHTML、区切り記号のCSS、Googleに伝える構造化データ（BreadcrumbList）、スマホでの見せ方までまとめました。',
  oneLine: 'ページの上に「ホーム › 一覧 › 今のページ」と現在地までの道すじを出す。',
  what: [
    'サイトの中で「今どこにいるか」を、トップページからの階層の並びで示す部品です。童話『ヘンゼルとグレーテル』で、帰り道が分かるようにパンくずを落としていった話から名前がつきました。見本では宿の詳細ページの上に「ホーム › 宿をさがす › 長野県 › 山の宿 ひかり」と出ています。「長野県」を押すと県の一覧へ上がり、パンくずも1段短くなります。',
    '大事なのは、パンくずが「通ってきた順番（閲覧履歴）」ではなく「サイトの階層」を示すことです。検索から詳細ページに直接来た人でも、ひとつ上の一覧へすぐ移れます。ブラウザの「戻る」では検索結果に戻ってしまう場面で、サイトの中に留まってもらう道になります。',
    '決まりごとは、全体を <nav aria-label="パンくずリスト"> で囲み、順番のある並びなので <ol> で書くこと。最後の段は今いるページなのでリンクにせず、aria-current="page" を付けます。区切りの「›」は飾りなので CSS で描き、読み上げでは読ませません。',
  ],
  when: [
    '通販サイトで「ホーム › 家電 › 冷蔵庫 › 商品名」のように、カテゴリが2段以上あるとき',
    '旅行・不動産・求人のように「地域 › 市区町村 › 物件」と、絞り込んだ一覧から詳細へ入る作りのとき',
    'ヘルプセンターやブログで、記事がカテゴリに分かれているとき',
    '検索から詳細ページに直接来た人に、同じ種類のほかのページも見てほしいとき',
  ],
  avoid: [
    'トップと数ページしかない1〜2段の小さなサイト（「ホーム › 今のページ」だけになり、場所を取るだけ）',
    'LP（1枚で完結する販売ページ）のように、ほかのページへ移ってほしくないとき',
    '手順に沿って進む申し込みフォーム（階層ではなく順番なので、ステッパーを使う）',
  ],
  prompt:
    '商品ページの上部に「パンくずリスト（breadcrumbs）」を作ってください。<nav aria-label="パンくずリスト"> の中に <ol> で「ホーム › 家電 › 冷蔵庫 › 商品名」のように階層を並べ、最後の段（今いるページ）はリンクにせず aria-current="page" を付けてください。区切り記号は{{sep:t}}を CSS の ::before で描き、読み上げでは読まないようにし、記号の左右の間隔は{{gap:t}}にしてください。文字の大きさは{{size:t}}、リンクは押しやすいよう上下に余白をとって高さ44px以上にしてください。スマホで1行に収まらないときは折り返さずに横スクロールにし、最後の段が見えるようにしてください。あわせて、同じ階層を Google に伝える構造化データ（JSON-LD の BreadcrumbList）も出力してください。',
  howTo: [
    'HTMLは <nav> の中に <ol> を置き、1段ずつ <li> に入れます。上の段は <a> のリンクにし、最後の段だけリンクにせず aria-current="page" を付けます。これで読み上げソフトでは「パンくずリスト、ナビゲーション、4項目のリスト」と構造ごと伝わり、最後が今いるページだと分かります。',
    '区切り記号は li + li::before で描きます。content: "›" / ""; のように「/ ""」を足すと、記号は表示されても読み上げでは読まれません。さらに、同じ階層を JSON-LD（ページに埋め込むデータの書き方）の BreadcrumbList で書いておくと、Google が階層を理解する手がかりになります。検索結果にサイト内の位置として表示されることもありますが、出るかどうかは Google が決めます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<nav class="crumbs" aria-label="パンくずリスト">
  <ol>
    <li><a href="/">ホーム</a></li>
    <li><a href="/stays/">宿をさがす</a></li>
    <li><a href="/stays/nagano/">長野県</a></li>
    <li><span aria-current="page">山の宿 ひかり</span></li>
  </ol>
</nav>

<!-- 同じ階層を Google に伝える構造化データ -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://example.com/" },
    { "@type": "ListItem", "position": 2, "name": "宿をさがす", "item": "https://example.com/stays/" },
    { "@type": "ListItem", "position": 3, "name": "長野県", "item": "https://example.com/stays/nagano/" },
    { "@type": "ListItem", "position": 4, "name": "山の宿 ひかり" }
  ]
}
</script>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.crumbs ol {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: {{size}};
  /* 狭い画面では折り返さず横スクロール */
  white-space: nowrap;
  overflow-x: auto;
}
.crumbs li { display: flex; align-items: center; }
/* 区切り記号（「/ ""」で読み上げでは読まない） */
.crumbs li + li::before {
  content: {{sep}} / "";
  margin-inline: {{gap}};
  color: #9aa0ad;
}
/* 押せる高さを44px確保 */
.crumbs a,
.crumbs [aria-current] {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
}
.crumbs [aria-current] { font-weight: 700; }`,
    },
    {
      lang: 'js',
      label: 'JavaScript（任意）',
      code: `// スマホで横にあふれたとき、最後の段（今いるページ）が見えるよう右端へ送る
document.querySelectorAll('.crumbs ol').forEach((ol) => {
  ol.scrollLeft = ol.scrollWidth;
});`,
    },
  ],
  tune: [
    {
      key: 'sep',
      type: 'select',
      label: '区切り記号',
      value: '"›"',
      options: [
        { value: '"›"', label: '›（山かっこ）' },
        { value: '"/"', label: '/（スラッシュ）' },
        { value: '">"', label: '>（不等号）' },
      ],
    },
    { key: 'gap', label: '区切りの左右の間隔', min: 4, max: 16, step: 1, value: 8, unit: 'px' },
    { key: 'size', label: '文字の大きさ', min: 11, max: 16, step: 1, value: 13, unit: 'px' },
  ],
  cautions: [
    '最後の段（今いるページ）をリンクにすると、押しても同じページが開くだけで迷わせます。文字だけにして aria-current="page" を付けます。',
    '区切り記号を「ホーム > 家電」のように HTML の文字として書くと、読み上げで「大なり」と毎回読まれます。CSS で描いて読ませないようにします。',
    '構造化データ（BreadcrumbList）は、画面に出ているパンくずと中身をそろえます。画面にない階層を書くと、Google の指針に反するおそれがあります。',
    'パンくずの文字は小さくしがちですが、スマホでは押し間違いが増えます。文字は小さくても、上下の余白で押せる高さを44px確保します。',
  ],
  similar: [
    { slug: 'stepper', diff: 'ステッパーは申し込みなど「順番に進む手順」のどこにいるかを示します。パンくずは「サイトの階層」のどこにいるかを示します。' },
    { slug: 'scrollspy', book: 'ugoki', diff: 'スクロールスパイは1ページの中の目次で、今読んでいる見出しを示します。パンくずはサイト全体の中での位置を示します。' },
    { slug: 'sidebar', diff: 'サイドバーは同じ階層の行き先を縦に並べて常に見せます。パンくずは上の階層へ戻る道だけを1行で示します。' },
  ],
  faq: [
    {
      q: 'パンくずリストはSEOに効果がありますか？',
      a: '検索順位を直接上げるものではありませんが、Google がサイトの階層を理解する手がかりになります。BreadcrumbList の構造化データを添えると、検索結果に「サイト名 › カテゴリ」のような位置が出ることもあります（出るかどうかは Google 次第で、スマホでは出ない場合が多くなっています）。それより確かな効果は、詳細ページから一覧へ移りやすくなり、サイトの中を見て回ってもらいやすくなることです。',
    },
    {
      q: 'パンくずリストはページのどこに置けばいいですか？',
      a: 'ヘッダーの下、ページの見出し（h1）の上が定番です。利用者は「ここはどこか」をページの最初に確かめるからです。ページの最下部にも置くサイトがありますが、その場合も上に1つあるのが基本です。',
    },
    {
      q: 'スマホでパンくずリストが長くて2行になってしまいます。',
      a: '折り返さずに横スクロールにして、最後の段が見えるよう右端へ送っておくのが一つの方法です。もう一つは、スマホだけ「‹ 長野県」のように1つ上の段だけを出す方法です。どちらでも、構造化データは全部の段を書いておきます。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
