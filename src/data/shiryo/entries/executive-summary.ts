import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'executive-summary',
  no: 25,
  category: 'kousei',
  name: 'エグゼクティブサマリー型',
  en: 'Executive summary',
  aka: ['エグゼクティブサマリー', '要約スライド', '全体のまとめ', '1枚要約', '概要スライド'],
  mode: 'static',
  title: 'エグゼクティブサマリーとは？1枚で結論を伝える書き方とスライドの作り方【テンプレート】',
  description:
    '資料全体の結論と要点を1枚に凝縮する「エグゼクティブサマリー型」のスライドを見本で解説。現状・提案・効果・お願いの並べ方、PowerPoint・Googleスライドでの作り方、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '資料全体の結論・根拠・お願いを1枚に凝縮し、ここだけで判断できるようにする。',
  what: [
    '長い資料の頭に置く、1枚の要約です。見本では「採用担当を2名増やし、手数料を年1,200万円減らす」という結論を見出しに書き、その下に「現状・提案・効果・お願い」の4つを縦に並べています。右には主な数字を3つ、カードにして置き、いちばん下の「お願い」の行だけを淡い色で塗って、決裁者に何をしてほしいのかを一目で示しています。',
    'この型のよさは、忙しい決裁者が、この1枚だけ読んでも判断できることです。決まりごとは、結論を先に書くこと、そして4〜5項目に絞ること。細かい根拠は後ろのスライドに回し、ここでは数字と「お願い」だけを載せます。資料の最初に置くのが原則で、書くのは資料が完成したあとです。',
  ],
  when: [
    '経営会議や取締役会に出す、10枚以上の提案資料の冒頭に置くとき',
    '稟議や予算申請の資料で、読む人が最初の1枚で判断できるようにしたいとき',
    '報告書や調査結果を、時間のない役員向けに要約して渡すとき',
    '社外の提案書で、先方の担当者が上司に回すときに使ってもらえる1枚をつけたいとき',
  ],
  avoid: [
    '資料全体が5枚以下のとき（要約を付けるほど長くない。結論を1メッセージ型で冒頭に置くだけで足りる）',
    '話の最後に要点を振り返りたいとき（まとめ型にする。エグゼクティブサマリーは最初に置く）',
    'まだ結論が決まっていない検討途中の資料のとき（先に課題・原因・解決型などで整理する）',
  ],
  prompt:
    '16:9のスライドを1枚、「エグゼクティブサマリー型（executive summary）」で作ってください。いちばん上に小さく「2027年度 採用強化計画（要約）」、その下に結論の見出し「採用担当を2名増やし、手数料を年1,200万円減らす」を置きます。その下を左右に分け、左に4行の表、右に数字のカードを{{fig:t}}にしてください。左の4行は、太字20ptの項目名と、17ptの本文の2列です。いちばん上の行の上には太い黒線、ほかの行の上には細い灰色の線を引き、項目名の列の幅は{{lab:t}}ptにします。中身は、現状：欠員が平均9人。採用24人のうち18人を紹介会社に頼り、手数料は年1,800万円／提案：採用担当を2名増やし、自社の求人サイトと社員紹介を強化。紹介会社経由は18人から6人へ／効果：手数料は年600万円に。増員の人件費1,000万円を引いても、年200万円のプラス。欠員は4人へ／お願い：10月の取締役会で、採用担当2名の増員枠を承認してください。最後の「お願い」の行だけ、アクセント色{{accent:t}}の線と淡い背景で目立たせ、本文を太字にします。右の数字は、灰色の角丸のカードを縦に3枚、「−1,200万円：紹介会社の手数料（年）」「9人 → 4人：欠員の平均」「+200万円：人件費を引いた差し引き（年）」とし、数字は太字30pt、説明は灰色14ptで、3枚目の数字だけアクセント色にします。最下部に注記「※ 手数料は1人あたり100万円で計算。採用人数は24人のまま。」を13ptで入れます。色はアクセント色の1色だけで、ほかは白・灰色・黒にします。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「ホーム」→「新しいスライド」で「タイトルのみ」を選び、見出しに結論の1文を入れます。左の4行は、「挿入」→「表」で2列×4行の表にして、罫線を「上罫線」だけ残すと、見本のような線だけの表になります。右のカードは、「挿入」→「図形」→「四角形: 角を丸くする」を3つ縦に並べ、「配置」→「上下に整列」で間隔をそろえます。「お願い」の行だけ、表のセルを選んで「テーブルデザイン」→「塗りつぶし」で淡い色にしてください。',
    'Googleスライドでは、「レイアウトを適用」から「タイトルのみ」を選び、「挿入」→「表」で2列×4行の表を作ります。表のセルを選び、ツールバーの枠線のボタンで線を上だけにして、「お願い」の行だけ背景色を付けます。右のカードは、角丸四角形（「挿入」→「図形」→「図形」）を3つ縦に並べて、「配置」→「均等に配置」→「縦方向」でそろえます。数字は、必ず本文のスライドの数字とひとつずつ見比べてください。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。項目は <div class="row"> を1つ足すと増やせますが、5行を超えると文字が小さくなります。右の数字の欄は、data-fig を hide にすると消えて、左の表が幅いっぱいになります。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-fig="{{fig}}">
  <p class="kicker">2027年度 採用強化計画（要約）</p>
  <h1 class="title">採用担当を2名増やし、手数料を年1,200万円減らす</h1>

  <div class="body">
    <div class="rows">
      <div class="row"><span class="k">現状</span><span class="v">欠員が平均9人。採用24人のうち18人を紹介会社に頼り、手数料は年1,800万円</span></div>
      <div class="row"><span class="k">提案</span><span class="v">採用担当を2名増やし、自社の求人サイトと社員紹介を強化。紹介会社経由は18人から6人へ</span></div>
      <div class="row"><span class="k">効果</span><span class="v">手数料は年600万円に。増員の人件費1,000万円を引いても、年200万円のプラス。欠員は4人へ</span></div>
      <div class="row ask"><span class="k">お願い</span><span class="v">10月の取締役会で、採用担当2名の増員枠を承認してください</span></div>
    </div>

    <div class="figs">
      <div class="fig"><span class="fv">−1,200万円</span><span class="fl">紹介会社の手数料（年）</span></div>
      <div class="fig"><span class="fv">9人 → 4人</span><span class="fl">欠員の平均</span></div>
      <div class="fig last"><span class="fv">+200万円</span><span class="fl">人件費を引いた差し引き（年）</span></div>
    </div>
  </div>

  <p class="note">※ 手数料は1人あたり100万円で計算。採用人数は24人のまま。</p>
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

.body { flex: 1; display: flex; gap: 28px; margin: 16px 0 8px; }

/* 左の4行。いちばん下の「お願い」だけ目立たせる */
.rows { flex: 1; display: flex; flex-direction: column; }
.row { flex: 1; display: grid; grid-template-columns: {{lab:n}}px 1fr; gap: 16px; align-items: center; padding: 0 12px; border-top: 1px solid #e3e5ea; }
.row:first-child { border-top: 3px solid #1f2430; }
.k { font-size: 20px; font-weight: 800; }
.v { font-size: 17px; line-height: 1.5; }
.ask { background: color-mix(in srgb, var(--accent) 8%, #fff); border-top-color: var(--accent); border-radius: 0 0 8px 8px; }
.ask .k { color: var(--accent); }
.ask .v { font-weight: 800; }

/* 右の数字のカード */
.figs { flex: 0 0 230px; display: flex; flex-direction: column; gap: 10px; }
.fig { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 0 18px; border-radius: 10px; background: #f3f4f7; }
.fv { font-size: 30px; font-weight: 800; font-variant-numeric: tabular-nums; line-height: 1.2; }
.fl { font-size: 14px; color: #5a6070; }
.fig.last .fv { color: var(--accent); }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 右の数字の欄（data-fig="show" / "hide"） */
.slide[data-fig="hide"] .figs { display: none; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'fig',
      type: 'select',
      label: '右の数字の欄',
      value: 'show',
      options: [
        { value: 'show', label: '出す' },
        { value: 'hide', label: '出さない' },
      ],
    },
    { key: 'lab', label: '項目名の列の幅（pt）', min: 72, max: 120, step: 8, value: 88, unit: '' },
  ],
  cautions: [
    '結論を後回しにしないでください。「背景」「目的」「経緯」から書き始めると、読む人は最後まで結論にたどり着かず、2行目で読むのをやめます。見出しにいきなり結論を書きます。',
    '本文のスライドにない数字を、サマリーに書かないでください。サマリーを先に書き、本文を後から直した結果、数字がずれている資料は、とても多いです。完成後に必ず見比べて直します。',
    '5項目を超えて詰めこまないでください。サマリーは「縮小コピー」ではなく「要点の抜き出し」です。見本の4項目（現状・提案・効果・お願い）が基本形で、足すなら「費用」くらいまでです。',
    '「お願い」を書き忘れないでください。読んだ人が、承認するのか、意見をくれるのか、何も要らないのかが分からないと、資料が宙に浮きます。いつまでに誰に何をしてほしいのかを、最後の行に書きます。',
  ],
  similar: [
    { slug: 'summary', diff: 'まとめ型は、話の最後に要点を箇条書きで振り返る型です。エグゼクティブサマリー型は、資料の最初に置いて、ここだけで判断できるようにします。' },
    { slug: 'one-message', diff: '1メッセージ型は、1文の結論だけを大きく見せる型です。エグゼクティブサマリー型は、結論に加えて現状・提案・効果・お願いを1枚に収めます。' },
    { slug: 'approval', diff: '決裁依頼型は、決めてほしいこと・費用・期限を1枚で示す型です。エグゼクティブサマリー型は、資料全体の要約で、決裁依頼はその中の「お願い」の一行です。' },
  ],
  faq: [
    {
      q: 'エグゼクティブサマリーは、いつ書けばいいですか？',
      a: '資料が完成してから、最後に書きます。先に書くと、本文を作る途中で結論や数字が変わったときに、ずれが出ます。書き終えたら、サマリーの数字と本文の数字を1つずつ見比べてください。',
    },
    {
      q: 'エグゼクティブサマリーの文字量はどれくらいですか？',
      a: 'スライド1枚に収まる量で、本文の文字は16pt以上にします。見本は、見出し1文＋4項目×1〜2文＋数字3つです。文章の報告書なら、A4で1ページ（800〜1,200字）が目安です。',
    },
    {
      q: 'AIに資料を渡して、エグゼクティブサマリーを作ってもらえますか？',
      a: '作れます。資料の全文を渡して、「現状・提案・効果・お願いの4項目で、見出しは結論の1文、数字は資料にあるものだけ」と頼みます。出てきたものは、数字と固有名詞を本文と必ず見比べて、足りない「お願い」を自分で書き足してください。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
