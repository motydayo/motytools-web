import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'glossary',
  no: 21,
  category: 'kousei',
  name: '用語対照表型',
  en: 'Glossary table',
  aka: ['用語集スライド', '用語解説表', '用語一覧', '言葉の対応表', '用語と意味の表'],
  mode: 'static',
  title: '用語集スライドとは？用語と意味を表で並べる「用語対照表型」の作り方【PowerPoint】',
  description:
    '用語・意味・例の3列で言葉を並べる「用語対照表型」のスライドを見本で解説。表の列の決め方、読みやすい行の作り方、PowerPoint・Googleスライドでの手順、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '用語・意味・例の3列で、言葉を5つ前後まとめて整理する表。',
  what: [
    '用語と意味を、縦に並んだ行と横に並んだ列で対応させる表の型です。見本では、新入社員向けに経理でよく聞く5つの言葉（仕訳・稟議・按分・立替・締め日）を、左から「用語（よみ付き）」「意味」「例」の3列で並べています。表の最上段だけアクセント色の文字と線で区切り、各行は同じ高さにそろえて、行を縞模様にして視線が迷わないようにしています。',
    'この型のよさは、知らない人が一覧で調べられることです。決まりごとは、列を3つまでに絞り、用語は1行、意味は2行までに収めること。用語を並べすぎると文字が小さくなって読めないので、1枚に5〜6語までとし、それ以上は2枚に分けます。',
  ],
  when: [
    '新入社員や、他の部署の人に向けた研修で、専門用語をまとめて紹介するとき',
    '契約や制度の説明で、似た言葉の使い分けを一覧にしたいとき',
    'プロジェクトの最初に、関係者の間で言葉の意味をそろえておきたいとき',
    '資料の最後に、本文に出てきた略語や専門用語を付録としてまとめるとき',
  ],
  avoid: [
    '大事な用語が1つだけのとき（定義カード型にして、その1語を大きく言い切る）',
    '用語が10語以上あるとき（1枚に詰めずに、配布用の別資料にする）',
    '用語どうしを数字で比べたいとき（選択肢比較表型にして、項目ごとの値を並べる）',
  ],
  prompt:
    '16:9のスライドを1枚、「用語対照表型（glossary table）」で作ってください。いちばん上に小さく「新入社員のための経理の言葉」、その下に見出し「これだけ押さえる、経理の5つの言葉」を置きます。その下に、3列×5行の表を作ってください。最上段は列の名前「用語」「意味」「例」で、アクセント色{{accent:t}}の太字16ptとし、下に太さ3ptのアクセント色の線を引きます。「用語」の列は表全体の{{col:t}}の幅で、太字22ptの用語の下に灰色14ptのよみを置きます。行は、{{zebra:t}}にしてください。中身は、仕訳（しわけ）：お金の動きを「何に使い、どこから出したか」に分けて記録すること／例 文房具を現金で買う → 「消耗品費」と「現金」。稟議（りんぎ）：上司や関係する部署に書類を回して、承認をもらう手続き／例 10万円を超える購入は稟議書を出す。按分（あんぶん）：費用を、決まった割合で分けること／例 家賃を3つの部署で、人数に応じて分ける。立替（たてかえ）：会社のお金を、社員が先に自分で払っておくこと／例 出張の電車代を自分のICカードで払う。締め日（しめび）：その月の記録を区切る日／例 経費の提出は、毎月25日まで。「意味」と「例」は16pt、行の高さは5行とも同じにします。最下部に注記「※ 例は架空の社内ルール。」を13ptで入れます。色はアクセント色の1色だけで、ほかは白・灰色・黒にしてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「表」で3列×6行（見出し1行＋用語5行）の表を作ります。「テーブルデザイン」→「表のスタイル」で、見出し行だけ色が付くシンプルなスタイルを選び、「縞模様（行）」にチェックを入れると、縞模様になります。列の幅は、表の枠線をドラッグして決めます。用語の列だけ太字にして、行の高さをそろえるには、全部の行を選んで「レイアウト」→「行の高さをそろえる」を押します。セルの余白は「レイアウト」→「セルの余白」で広めにすると、窮屈になりません。',
    'Googleスライドでは、「挿入」→「表」で3×6の表を作ります。行の高さは、行の境目の線をドラッグして調整します。枠線は、表を選ぶとツールバーに出る「枠線の色」「枠線の太さ」のボタンで整えます。見出し行の背景は白、下の線だけをアクセント色にすると、すっきり見えます。縞模様は、偶数行を選んで背景を淡い灰色にして作ります。Googleスプレッドシートで作った用語集を、「コピー」→「貼り付け」で持ってくることもできます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。行は <div class="row"> を1つ足せば増やせますが、5行を超えると文字が小さくなるので、別のスライドに分けてください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-zebra="{{zebra}}">
  <p class="kicker">新入社員のための経理の言葉</p>
  <h1 class="title">これだけ押さえる、経理の5つの言葉</h1>

  <div class="table">
    <div class="row head"><span>用語</span><span>意味</span><span>例</span></div>
    <div class="row">
      <span class="term"><b>仕訳</b><small>しわけ</small></span>
      <span class="mean">お金の動きを「何に使い、どこから出したか」に分けて記録すること</span>
      <span class="ex">文房具を現金で買う → 「消耗品費」と「現金」</span>
    </div>
    <div class="row">
      <span class="term"><b>稟議</b><small>りんぎ</small></span>
      <span class="mean">上司や関係する部署に書類を回して、承認をもらう手続き</span>
      <span class="ex">10万円を超える購入は稟議書を出す</span>
    </div>
    <div class="row">
      <span class="term"><b>按分</b><small>あんぶん</small></span>
      <span class="mean">費用を、決まった割合で分けること</span>
      <span class="ex">家賃を3つの部署で、人数に応じて分ける</span>
    </div>
    <div class="row">
      <span class="term"><b>立替</b><small>たてかえ</small></span>
      <span class="mean">会社のお金を、社員が先に自分で払っておくこと</span>
      <span class="ex">出張の電車代を自分のICカードで払う</span>
    </div>
    <div class="row">
      <span class="term"><b>締め日</b><small>しめび</small></span>
      <span class="mean">その月の記録を区切る日</span>
      <span class="ex">経費の提出は、毎月25日まで</span>
    </div>
  </div>

  <p class="note">※ 例は架空の社内ルール。</p>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* 幅960px×高さ540px（PowerPointの16:9と同じ比率） */
.slide {
  --accent: {{accent}};
  box-sizing: border-box;
  width: 960px;
  height: 540px;
  padding: 44px 56px 40px;
  display: flex;
  flex-direction: column;
  background: #fff;
  color: #1f2430;
  font-family: "Hiragino Sans", "Noto Sans JP", sans-serif;
  line-height: 1.4;
}
.kicker { margin: 0 0 6px; font-size: 15px; font-weight: 700; letter-spacing: 0.04em; color: var(--accent); }
.title { margin: 0; font-size: 34px; font-weight: 800; }

/* 表。行の高さは全部同じ */
.table { flex: 1; display: flex; flex-direction: column; margin: 16px 0 8px; }
.row { flex: 1; display: grid; grid-template-columns: {{col}} 1.5fr 1fr; gap: 20px; align-items: center; padding: 0 16px; border-bottom: 1px solid #e3e5ea; }
.head { flex: 0 0 36px; border-bottom: 3px solid var(--accent); font-size: 16px; font-weight: 800; color: var(--accent); }
.term { display: flex; flex-direction: column; }
.term b { font-size: 22px; font-weight: 800; line-height: 1.25; }
.term small { font-size: 14px; color: #8a8f9c; }
.mean { font-size: 16px; line-height: 1.5; text-wrap: balance; }
.ex { font-size: 16px; line-height: 1.5; color: #5a6070; text-wrap: balance; }
.note { margin: auto 0 0; font-size: 13px; color: #8a8f9c; }

/* 行の見せ方（data-zebra="stripe" / "line"） */
.slide[data-zebra="stripe"] .row { border-bottom-color: transparent; }
.slide[data-zebra="stripe"] .row:nth-child(even) { background: #f3f4f7; }
.slide[data-zebra="stripe"] .head { background: none; border-bottom-color: var(--accent); }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'zebra',
      type: 'select',
      label: '行の見せ方',
      value: 'stripe',
      options: [
        { value: 'stripe', label: '1行おきに薄い灰色を敷く（縞模様）' },
        { value: 'line', label: '行の間に細い線を引く' },
      ],
    },
    { key: 'col', label: '用語の列の幅（表全体に対する%）', min: 16, max: 32, step: 4, value: 20, unit: '%' },
  ],
  cautions: [
    '1枚に詰めこみすぎないでください。用語が7つ以上になると、意味の文字が14pt以下になり、後ろの席から読めません。5〜6語を上限にして、余った分は次のスライドに回します。',
    '意味の書き方をそろえてください。ある行は「〜のこと」、ある行は「〜する手続き」、ある行は体言止めのように語尾がばらばらだと、読みにくく雑に見えます。全部「〜こと」や「〜手続き」に統一すると、表が整います。',
    '用語の並び順に意味を持たせてください。ばらばらに並べると探しにくいので、あいうえお順、出てくる順、大事な順のどれかを選んで、スライドの冒頭で「出てくる順です」と言い添えます。',
    '意味を、その言葉を使って説明しないでください。「按分とは、按分すること」のような説明は、知らない人には何も伝わりません。中学生でも分かる言葉に言い換えて、例を添えます。',
  ],
  similar: [
    { slug: 'definition', diff: '定義カード型は、大事な用語を1つに絞って大きく定義する型です。用語対照表型は、5〜6語をまとめて一覧にします。' },
    { slug: 'option-table', diff: '選択肢比較表型は、複数の案を同じ項目で比べて選ぶための表です。用語対照表型は、比べるのではなく、言葉の意味を引けるようにする表です。' },
    { slug: 'faq', diff: 'FAQ型は、質問と答えを並べる型です。用語対照表型は、「〇〇とは？」という質問が複数ある場面を、短く一覧にします。' },
  ],
  faq: [
    {
      q: '用語集に「よみ」は必要ですか？',
      a: '漢字の読みが分かりにくい言葉（仕訳、按分、稟議など）には付けるのがおすすめです。研修では読み方を知らないまま会議で聞いて、恥ずかしい思いをする人が多いからです。英字の略語なら、よみのかわりに正式名称を添えます。',
    },
    {
      q: '表の列は3つより増やしてもいいですか？',
      a: '4列までなら入りますが、4列目は文字が14pt以下になりがちです。「例」と「使う場面」のように似た列は1つにまとめると、読みやすくなります。どうしても情報を足したいなら、スライドを分けるか、用語ごとの定義カードにします。',
    },
    {
      q: 'Excelで作った用語集をPowerPointに貼る方法は？',
      a: 'Excelで範囲を選んでコピーし、PowerPointで貼り付けるときに「貼り付けのオプション」から「貼り付け先のスタイルを使用」を選ぶと、スライドの配色に合う表になります。「埋め込み」を選ぶと、表の中身をあとからExcelで編集できます。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
