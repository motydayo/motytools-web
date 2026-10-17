import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'action-list',
  no: 95,
  category: 'teian',
  name: 'アクション一覧型',
  en: 'Action list',
  aka: ['アクションアイテム', 'アクションプラン', 'TODO一覧', 'タスク一覧', '宿題一覧', '担当と期限の表'],
  mode: 'static',
  title: 'アクション一覧とは？誰が・何を・いつまでにを表にする資料の作り方【見本つき】',
  description:
    '誰が・何を・いつまでにやるかを表にする「アクション一覧型」のスライドを見本で解説。状態の記号と文字の付け方、期限切れの見せ方、PowerPoint・Googleスライドでの作り方、AIにそのまま貼れる指示文とHTMLまでまとめました。',
  oneLine: '誰が・何を・いつまでにやるかを、状態つきで表にする。',
  what: [
    '1行に1つの作業を書き、「やること・担当・期限・状態」を横に並べる表の型です。見本では新店舗のオープン準備の6つの作業を並べ、状態を「完了・進行中・未着手・期限切れ」の4つの記号と文字で示しています。期限を過ぎた1件は赤で表し、見出しにも「6件のうち2件が完了、1件が期限を過ぎている」と、現状を一文で書いています。',
    '決まりは、1つの作業に担当者を1人、期限を1つに絞ることです。「営業部で」「できるだけ早く」では、誰も動きません。状態は色だけでなく、記号と文字を必ず添えます。期限が近い順や、状態の順に並べると、会議の最初に「いまどこが止まっているか」から話せます。',
  ],
  when: [
    '会議で決まったことを、実行する作業に分けて担当と期限を決めるとき',
    '定例会議で、前回の宿題の進み具合を全員で確認するとき',
    'プロジェクトの現状を、遅れの有無も含めて上司に報告するとき',
    '取引先との打ち合わせのあとで、お互いの宿題を確認するとき',
  ],
  avoid: [
    '作業の期間の重なりや順番を見せたいとき（ガントチャート型にする）',
    '作業の数が15件を超えるとき（重要なものに絞るか、表計算ソフトの一覧を別に配る）',
    '済んだかどうかを確認するだけで、担当や期限は要らないとき（チェックリスト型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「アクション一覧型（action list）」で作ってください。いちばん上に小さく「新店舗オープン準備のアクション一覧（10月17日時点）」、その下に結論の見出し「6件のうち2件が完了、1件が期限を過ぎている」を1行で置きます。その下に、表を置きます。列は左から「No・やること・担当・期限・状態」で、見出しの行は下に濃い線を引き、各行の下は薄い線にします。行の内容は、1「見積書を3社から集める・佐藤・10/10・完了」、2「店舗の図面を契約先に送る・田中・10/12・完了」、3「レジ2社のデモ日程を調整する・鈴木・10/16・期限切れ」、4「開店記念の割引案を作る・田中・10/29・進行中」、5「採用面接の日程を決める・高橋・10/31・進行中」、6「近隣への挨拶状を印刷する・佐藤・11/10・未着手」です。状態は、記号と文字をセットにします（完了＝チェック入りの丸、進行中＝半分塗った丸、未着手＝空の丸、期限切れ＝「!」入りの丸）。期限を過ぎた行の見せ方は「{{late:t}}」にしてください。強調する担当者は「{{who:t}}」にします（強調するときは、その担当者の行の背景を薄いアクセント色にして、左端に太い線を付ける）。色はアクセント色{{accent:t}}と、期限切れの赤だけを使い、ほかは白・灰色・黒にします。見出しは32〜36pt、やることは20pt前後の太字、担当・期限・状態は18pt以上。最下部に「※ 状態は10月17日時点。期限を過ぎた作業は赤で示す。」と注記を入れてください。内容は私が書いたものだけを使い、新しい作業を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「表」で5列×7行（見出しの行を含む）の表を作ります。「テーブルデザイン」→「罫線」を使い、見出しの行の下に太い線、各行の下に薄い線だけを残して、縦線と外枠は消します。状態の記号は、「挿入」→「記号と特殊文字」から「●」「◐」「○」を探して文字として入れると、色も文字と一緒に変えられます。期限を過ぎた行だけ、状態の文字を赤にします。強調する担当者の行は、行を選んで「テーブルデザイン」→「塗りつぶし」で薄い色を付けます。',
    'Googleスライドでは、「挿入」→「表」で5列×7行の表を作り、表を選んで「表のプロパティ」（右クリックのメニュー）から枠線の色と太さを設定します。表の中は、1行を選んで「塗りつぶしの色」で背景を変えられます。作業の件数が多いときは、先にGoogleスプレッドシートで一覧を作り、スライドへは「挿入」→「グラフ」ではなく、表を貼り付ける形で持ってくると、更新が楽です。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。行を増やすときは、HTMLの行を足し、CSSの「grid-template-rows」は使っていないので、そのまま高さが等分されます。あまり増やしすぎると文字が小さくなるので、7行を上限の目安にしてください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-late="{{late}}" data-who="{{who}}">
  <p class="kicker">新店舗オープン準備のアクション一覧（10月17日時点）</p>
  <h1 class="title">6件のうち2件が完了、1件が期限を過ぎている</h1>

  <div class="table">
    <div class="head"><span>No</span><span>やること</span><span>担当</span><span>期限</span><span>状態</span></div>
    <div class="row done" data-who="sato"><span class="no">1</span><span class="t">見積書を3社から集める</span><span>佐藤</span><span class="due">10/10</span><span class="st">完了</span></div>
    <div class="row done" data-who="tanaka"><span class="no">2</span><span class="t">店舗の図面を契約先に送る</span><span>田中</span><span class="due">10/12</span><span class="st">完了</span></div>
    <div class="row late" data-who="suzuki"><span class="no">3</span><span class="t">レジ2社のデモ日程を調整する</span><span>鈴木</span><span class="due">10/16</span><span class="st">期限切れ</span></div>
    <div class="row doing" data-who="tanaka"><span class="no">4</span><span class="t">開店記念の割引案を作る</span><span>田中</span><span class="due">10/29</span><span class="st">進行中</span></div>
    <div class="row doing" data-who="takahashi"><span class="no">5</span><span class="t">採用面接の日程を決める</span><span>高橋</span><span class="due">10/31</span><span class="st">進行中</span></div>
    <div class="row todo" data-who="sato"><span class="no">6</span><span class="t">近隣への挨拶状を印刷する</span><span>佐藤</span><span class="due">11/10</span><span class="st">未着手</span></div>
  </div>

  <p class="note">※ 状態は10月17日時点。期限を過ぎた作業は赤で示す。</p>
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

/* 表。列は No / やること / 担当 / 期限 / 状態 */
.table { flex: 1; display: flex; flex-direction: column; margin: 14px 0 8px; }
.head, .row { display: grid; grid-template-columns: 48px 1fr 96px 96px 150px; align-items: center; }
.head { padding-bottom: 6px; border-bottom: 2px solid #1f2430; font-size: 14px; font-weight: 700; color: #5a6070; }
.head span:first-child, .no { padding-left: 10px; }
.row { flex: 1; border-bottom: 1px solid #e3e5ea; font-size: 19px; }
.no { font-size: 16px; color: #8a8f9c; }
.t { padding-right: 12px; font-size: 20px; font-weight: 700; }
.due { font-variant-numeric: tabular-nums; }
.st { font-size: 18px; font-weight: 700; }
.st::before { margin-right: 8px; font-size: 20px; }
.done .st { color: #5a6070; } .done .st::before { content: "✔"; }
.doing .st { color: var(--accent); } .doing .st::before { content: "◐"; }
.todo .st { color: #8a8f9c; } .todo .st::before { content: "○"; }
.late .st { color: #d0453a; } .late .st::before { content: "!"; display: inline-block; width: 22px; height: 22px; border-radius: 50%; background: #d0453a; color: #fff; text-align: center; font-size: 16px; line-height: 22px; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 期限を過ぎた行（data-late="red" なら期限を赤にする。"plain" なら状態の赤をやめる） */
.slide[data-late="red"] .late .due { color: #d0453a; font-weight: 800; }
.slide[data-late="plain"] .late .st { color: #1f2430; }

/* 強調する担当者（data-who="sato" / "tanaka" / "none"） */
.slide[data-who="sato"] .row[data-who="sato"],
.slide[data-who="tanaka"] .row[data-who="tanaka"] { background: color-mix(in srgb, var(--accent) 9%, #fff); box-shadow: inset 4px 0 var(--accent); }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'who',
      type: 'select',
      label: '強調する担当者',
      value: 'none',
      options: [
        { value: 'none', label: '強調しない' },
        { value: 'sato', label: '佐藤の行を強調' },
        { value: 'tanaka', label: '田中の行を強調' },
      ],
    },
    {
      key: 'late',
      type: 'select',
      label: '期限を過ぎた行',
      value: 'red',
      options: [
        { value: 'red', label: '期限を赤で目立たせる' },
        { value: 'plain', label: '赤くしない' },
      ],
    },
  ],
  cautions: [
    '担当は1人にします。「営業部」「全員」「A課とB課」と書いた作業は、誰も自分のこととして受け取りません。共同の作業でも、まとめ役の名前を1人書きます。',
    '期限は日付で書きます。「今週中」「早めに」では、遅れたかどうかを判断できません。会議の資料で日付を書くときは、月と日だけで足ります（年をまたぐときは年も書く）。',
    '状態は、色だけで区別しないでください。白黒で印刷したときや、色の見分けにくい人には、赤と緑の違いが伝わりません。見本のように記号と文字をセットにします。',
    'やることは、「進める」「検討する」ではなく、終わったかどうかが分かる言い方で書きます。「見積書を3社から集める」なら、3社そろった時点で完了と言えます。完了の条件があいまいな作業は、いつまでも進行中のままになります。',
  ],
  similar: [
    { slug: 'agreed-open', diff: '合意事項・未決事項型は、決まったことと決まっていないことを分ける型です。会議の結論を整理する場面で使い、そのあとに、実行する作業をアクション一覧型で並べます。' },
    { slug: 'checklist', diff: 'チェックリスト型は、確認する項目と済んだかどうかを並べる型です。担当や期限を決める必要がない、確認作業に向いています。' },
    { slug: 'kanban', diff: 'カンバン型は、作業を「未着手・作業中・完了」の列に並べる型です。状態ごとの件数をひと目で見せたいときに向いています。' },
  ],
  faq: [
    {
      q: 'アクションアイテムとは何ですか？',
      a: '会議で決まったことを実行するために、誰かが担当する具体的な作業のことです。「アクション」は行動、「アイテム」は項目の意味です。日本の職場では「宿題」「TODO」とも呼ばれます。担当と期限が付いて、はじめてアクションアイテムになります。',
    },
    {
      q: 'アクション一覧は、PowerPointとExcelのどちらで管理するのがよいですか？',
      a: '日々の管理は、更新しやすいExcelやGoogleスプレッドシートが向いています。PowerPointのスライドは、会議で状況を見せるための「ある時点の写し」と考えてください。スプレッドシートの表から必要な行だけをスライドに貼ると、更新の手間が減ります。',
    },
    {
      q: '期限を過ぎた作業は、スライドでどう扱えばよいですか？',
      a: '隠さずに、赤などで目立たせて、会議の最初に話題にします。見出しにも件数を書いておくと、状況が一目で伝わります。遅れの理由と、新しい期限を、その場で決めて表に書き直します。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
