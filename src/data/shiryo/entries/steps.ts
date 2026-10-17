import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'steps',
  no: 83,
  category: 'teian',
  name: '操作手順型',
  en: 'Step-by-step instructions',
  aka: ['手順書', '操作ステップ', '使い方スライド', 'マニュアル風', 'ステップ解説'],
  mode: 'static',
  title: '操作手順スライドの作り方｜番号つきで使い方を見せるレイアウト【PowerPoint・Googleスライド】',
  description:
    '操作を番号つきの手順で見せる操作手順型のスライドを見本で解説。画面の絵と一言説明の組み合わせ方、手順の数の決め方、PowerPoint・Googleスライドでの作り方、AIへの指示文、HTMLとCSSまでまとめました。',
  oneLine: '操作を番号つきの手順に分け、画面の絵と一言を添える。',
  what: [
    '操作の順番に、番号の丸・小さな画面の絵・短い見出し・一言の説明をセットにして、横に4つ並べる型です。見本では、会計ソフトで請求書をPDFにして送る流れを、「請求を開く → 取引先を選ぶ → 金額と日付を入れる → PDFで送る」の4手順に分けています。押すボタンの場所には色を付け、手順が進むたびに画面の絵が変わることで、実際の操作がイメージできます。',
    'この型のよさは、読む人が自分の画面と見比べながら、1つずつ進められることです。決まりごとは、1つの手順に操作を1つだけ入れること、見出しを「〜を開く」「〜を押す」のように動詞で終えること、手順を3〜6つに絞ることです。それ以上多い操作は、スライドを分けます。',
  ],
  when: [
    '新しく入るソフトやシステムの使い方を、社内の人に説明するとき',
    '研修で、新入社員に業務の手順を覚えてもらうとき',
    'お客さま向けに、サービスの使い方や申し込みの流れを案内するとき',
    '手順書やマニュアルの要点を、会議で1枚にまとめて見せるとき',
  ],
  avoid: [
    '画面のどこに何があるかを説明したいとき（手順よりも画面の構造が主役なので、スクリーン注釈型にする）',
    '手順が10以上あり、1枚に入らないとき（大きな流れだけをフロー型で見せ、細かい手順は別のスライドか手順書に分ける）',
    '利用場面や気持ちの流れを伝えたいとき（ストーリーボード型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「操作手順型（step-by-step instructions）」で作ってください。いちばん上に小さく「会計ソフト「ソラ」の使い方」、その下に結論の見出し「請求書は4つの操作で、PDFにして送れる」を1行で置きます。その下に、同じ形のカードを4枚、左から右へ並べてください（白い背景に細い灰色の枠線、角丸）。各カードは、上に小さな画面の絵、その下に番号の丸（アクセント色{{accent:t}}・白い数字）と、太字の見出し（19pt以上）、灰色の一言の説明（15pt以上）を置きます。画面の絵は、押す場所だけをアクセント色にした簡単なイラストにしてください。1＝見出し「「請求」を開く」、説明「左のメニューから「請求」を選ぶ」（絵は左のメニューの「請求」が色付き）。2＝見出し「取引先を選ぶ」、説明「「新規作成」を押して、送り先を選ぶ」（絵は「新規作成」ボタンと、送り先の一覧）。3＝見出し「金額と日付を入れる」、説明「入力したら「確認」を押す」（絵は金額120,000円と日付2026/10/31の入力欄と「確認」ボタン）。4＝見出し「PDFで送る」、説明「内容を見て「PDFで送信」を押す」（絵は請求書と「PDFで送信」ボタンと「送信完了」）。並べ方は「{{layout:t}}」にしてください。画面の絵は「{{thumb:t}}」にしてください。色はアクセント色の1色と灰色だけにします。最下部に「※ 操作の画面は説明用のイメージ。」と注記（12pt以上）を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、まず「挿入」→「図形」→「四角形: 角を丸くする」でカードを1枚作り、その中に画面の絵・番号・文字を置きます。画面の絵は、実際のソフトの画面を撮って（Windowsは「Windowsキー＋Shift＋S」、Macは「Shift＋Command＋4」）貼り付け、押す場所に「図形」→「四角形」の枠線だけの図形を重ねると分かりやすくなります。1枚できたらコピーして4枚並べ、4つを選んで「図形の書式」→「配置」→「左右に整列」を押すと、間隔がそろいます。番号は「楕円」に数字を入れて作ります。',
    'Googleスライドでも「挿入」→「図形」→「図形」で角丸四角形を作ってコピーし、「配置」メニューでそろえます。手順の数が多い（5つ以上）ときは、カードを横に並べず、縦に1行ずつ「番号＋見出し＋説明」と並べるほうが、文字が大きく保てます。手順書の元の文章をスプレッドシートや文書にまとめておくと、あとで番号を振り直すのが楽です。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。画面の絵は灰色の仮の箱（pic）にしてあるので、ここを実際のスクリーンショット（img）に差し替えてください。手順を増やしたいときは、1枚ぶん（card）をコピーして、番号と文を書き換えます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-layout="{{layout}}" data-thumb="{{thumb}}">
  <p class="kicker">会計ソフト「ソラ」の使い方</p>
  <h1 class="title">請求書は4つの操作で、PDFにして送れる</h1>

  <div class="row">
    <!-- 絵に差し替える: <img src="step1.png" alt="「請求」を開く画面"> -->
    <div class="card">
      <div class="pic"></div>
      <div class="text"><span class="n">1</span><span class="copy"><span class="head">「請求」を開く</span><span class="desc">左のメニューから「請求」を選ぶ</span></span></div>
    </div>
    <div class="card">
      <div class="pic"></div>
      <div class="text"><span class="n">2</span><span class="copy"><span class="head">取引先を選ぶ</span><span class="desc">「新規作成」を押して、送り先を選ぶ</span></span></div>
    </div>
    <div class="card">
      <div class="pic"></div>
      <div class="text"><span class="n">3</span><span class="copy"><span class="head">金額と日付を入れる</span><span class="desc">入力したら「確認」を押す</span></span></div>
    </div>
    <div class="card">
      <div class="pic"></div>
      <div class="text"><span class="n">4</span><span class="copy"><span class="head">PDFで送る</span><span class="desc">内容を見て「PDFで送信」を押す</span></span></div>
    </div>
  </div>

  <p class="note">※ 操作の画面は説明用のイメージ。</p>
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
.kicker { margin: 0 0 6px; font-size: 15px; font-weight: 700; color: var(--accent); }
.title { margin: 0; font-size: 34px; font-weight: 800; }

.row { flex: 1; display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin: 20px 0 10px; align-content: start; }
.card { display: flex; flex-direction: column; gap: 12px; padding: 8px 8px 12px; border: 2px solid #e3e5ea; border-radius: 12px; }
/* 画面の絵の場所（仮）。img に差し替えるときは width: 100% を付ける */
.pic { aspect-ratio: 20 / 11; border-radius: 7px; background: #f3f4f7; }
.text { display: flex; align-items: flex-start; gap: 10px; padding: 0 6px; }
.n { flex: none; display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; background: var(--accent); color: #fff; font-size: 19px; font-weight: 800; line-height: 1; }
.copy { display: grid; gap: 3px; }
.head { font-size: 19px; font-weight: 800; line-height: 1.3; }
.desc { font-size: 15px; color: #5a6070; line-height: 1.45; }
.note { margin: auto 0 0; font-size: 13px; color: #8a8f9c; }

/* 2×2に並べる（data-layout="grid"） */
.slide[data-layout="grid"] .row { grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(2, 1fr); align-content: stretch; }
.slide[data-layout="grid"] .card { flex-direction: row; align-items: center; padding: 8px; }
.slide[data-layout="grid"] .pic { flex: none; width: 42%; }
.slide[data-layout="grid"] .text { flex: 1; }

/* 画面の絵を隠す（data-thumb="hide"） */
.slide[data-thumb="hide"] .pic { display: none; }
.slide[data-thumb="hide"] .card { justify-content: center; padding: 18px 14px; }
.slide[data-thumb="hide"]:not([data-layout="grid"]) .text { flex-direction: column; gap: 12px; }
.slide[data-thumb="hide"] .head { font-size: 22px; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'layout',
      type: 'select',
      label: '並べ方',
      value: 'row',
      options: [
        { value: 'row', label: '横に4つ' },
        { value: 'grid', label: '2×2の格子' },
      ],
    },
    {
      key: 'thumb',
      type: 'select',
      label: '画面の絵',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '1つの手順に、操作を1つだけ入れます。「メニューを開いて、取引先を選んで、金額を入れる」を1つにまとめると、どこでつまずいたのか分からなくなります。迷うところは、手順を分けます。',
    '画面のボタンの名前は、実際の画面の表記とそろえます。見本のように「確認」「PDFで送信」とカギ括弧で書き、画面の文字と1字も違えないこと。ソフトが更新されて名前が変わったら、スライドも直します。',
    '画面の絵は、押す場所だけに色を付けます。画面全体を細かく見せると、どこを押すのか分かりません。画像を使うときも、押す場所を枠や矢印で囲んで目立たせます。',
    '手順は3〜6つに絞ります。それ以上になる操作は、「準備」「入力」「送信」のように3つ前後のまとまりに分け、大きな流れをフロー型で見せてから、各まとまりの手順を別のスライドで説明します。',
  ],
  similar: [
    { slug: 'flow', diff: 'フロー型は、仕事の流れ全体を文字の箱と矢印でつなぐ型です。操作手順型は、1つの作業の中の操作を、画面の絵つきで順に教えます。' },
    { slug: 'screen-annotation', diff: 'スクリーン注釈型は、1枚の画面の部品に番号をふって説明する型です。操作手順型は、画面が変わっていく順番を見せます。' },
    { slug: 'checklist', diff: 'チェックリスト型は、確認する項目と済んだかどうかを並べる型です。操作手順型は、順番に操作してもらうことが目的です。' },
  ],
  faq: [
    {
      q: '操作手順のスライドは、手順を何個まで書けますか？',
      a: '3〜6個が見やすい目安です。7個以上になると、1つあたりの文字が小さくなって読めません。多い場合は、準備・入力・送信のように大きく3つに分け、それぞれを別のスライドにします。',
    },
    {
      q: 'マニュアルと操作手順スライドは何が違いますか？',
      a: 'マニュアルは、操作を読みながら手元で確かめるための文書で、細かい注意まで書きます。操作手順スライドは、会議や研修で説明しながら見せるための要約です。1つの手順を1文で言い切り、細かい注意は話して補います。',
    },
    {
      q: '画面のスクリーンショットは、そのまま載せてよいですか？',
      a: '自社のソフトなら載せられますが、画面に写った名前やメールアドレス、金額が本物の情報でないかを確認します。社外に出す資料では架空のデータに入れ替えます。他社のソフトの画面は利用規約で転載が禁止されていることがあるので、確かめてください。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
