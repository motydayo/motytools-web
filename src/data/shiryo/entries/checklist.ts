import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'checklist',
  no: 59,
  category: 'keikaku',
  name: 'チェックリスト型',
  en: 'Checklist',
  aka: ['チェックリスト', '確認表', '確認項目一覧', 'チェック表', '進捗チェック', 'やることリスト'],
  mode: 'static',
  title:
    'チェックリストの資料の作り方とは？済み・未完了をひと目で見せる【見本つき】',
  description:
    '確認項目と済んだかどうかを並べる「チェックリスト型」のスライドを見本で解説。済みの見せ方、残りの数の示し方、PowerPointとGoogleスライドでの作り方、AIにそのまま貼れる指示文とHTMLのコードまでまとめました。',
  oneLine: '確認する項目と、済んだかどうかを一覧にして並べる。',
  what: [
    '左に確認する項目を縦に並べ、先頭の四角に「済んだら色を付けてチェックを入れる」型です。見本では新入社員の受け入れ準備8項目を、項目名・担当・期限の順に並べています。済んだ5項目は四角をアクセント色で塗ってチェックを入れ、文字を薄くしています。右側には「5 / 8」の大きな数字と棒を置き、全体の進み具合と残り3項目が一目で分かるようにしています。',
    'チェックリスト型のよさは、「何が済んでいて、何が残っているか」を会議の場で数秒で共有できることです。決まりごとは、項目の言い方を「〇〇の締結」「〇〇の手配」のように済んだかどうか判断できる形でそろえることと、全体の数（8つ中5つ）を数字で添えることです。項目は10個前後までにして、それ以上はグループに分けます。',
  ],
  when: [
    '入社・引っ越し・イベント当日など、期日までに準備する項目の進み具合を共有するとき',
    'システムの切り替えやリリース前に、確認が済んだ項目を関係者にそろえて見せるとき',
    '監査や審査の前に、提出する書類の用意状況を報告するとき',
    '手順の抜け漏れを防ぐために、確認項目そのものを配るとき',
  ],
  avoid: [
    '項目が20個を超えるとき（グループに分けてスライドを分けるか、表計算ソフトの一覧を配る）',
    '作業の途中の段階まで見せたいとき（カンバン型にする）',
    '誰が責任を持つかを見せたいとき（RACI責任分担型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「チェックリスト型（checklist）」で作ってください。いちばん上に小さく「新入社員 受け入れ準備チェックリスト（4月1日入社）」、その下に結論の見出し「入社日まであと5日。未完了は3項目」を置きます。左の広い部分に、8行のリストを置いてください。各行は、先頭に角丸の四角（チェック欄）、次に項目名（太字18pt）、担当、期限の順で、行の間は細い灰色の線で区切ります。上に小さく（14pt）「確認する項目」「担当」「期限」と見出しを付けます。行は、済み＝「雇用契約書の締結」（総務・3/10）、「社会保険の加入手続き」（総務・3/18）、「PC・アカウントの準備」（情シス・3/20）、「座席と入館証の手配」（総務・3/24）、「配属先への事前連絡」（人事・3/25）、未完了＝「初日のスケジュール作成」（人事・3/27）、「メンター面談の設定」（配属先・3/30）、「歓迎ランチの予約」（配属先・3/31）の順です。済みの行は、チェック欄をアクセント色{{accent:t}}で塗りつぶして白いチェックマークを入れ、未完了の行は灰色の枠だけの空の四角にします。済みの項目は「{{done:t}}」にしてください（文字を薄くするときは、済みの行の文字を灰色にして細くする）。期限の列は「{{due:t}}」にしてください。右側には縦の細い線で区切って、大きな数字「5 / 8」（5は64ptでアクセント色）、その下に「確認が済んだ項目」、その下に5÷8の長さを塗った進み具合の棒、いちばん下に区切り線を引いて「残り3項目」と太字20ptで書きます。色はアクセント色の1色と灰色だけ。見出しは32〜36pt。最下部に「※ 今日は3月27日。期限は準備を終える日。」と注記を入れてください。数字と日付は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「表」で4列×9行の表を作り、1行目を見出し、2行目以降を項目にします。1列目のチェック欄は「挿入」→「図形」→「四角形: 角を丸くする」を小さく作って各行に置き、済みの行だけ塗りつぶして、白い「✓」の文字（「挿入」→「記号と特殊文字」）を重ねます。文字を打つだけなら、1列目にチェックボックスの記号「☑」と「☐」を入れる方法もあります。進み具合の棒は、灰色の長方形の上に、5/8の長さにした色付きの長方形を重ねます。',
    'Googleスライドでも「挿入」→「表」で同じ形を作れます。チェック欄は、「挿入」→「特殊文字」で「チェック」と検索すると、チェック入りの四角が見つかります。図形で作る場合は角丸四角形を複製して使います。項目が増えて行が細くなりすぎる場合は、2列に分けず、スライドを分けます。済みの項目を薄く、未完了を濃くしておくと、残りに目が向きます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。行は同じ形のまま並んでいるので、項目を直すときは1行ずつ書き換えます。進み具合の棒は、済んだ数÷全体の数から出した%（width）を指定しています。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-done="{{done}}" data-due="{{due}}">
  <p class="kicker">新入社員 受け入れ準備チェックリスト（4月1日入社）</p>
  <h1 class="title">入社日まであと5日。未完了は3項目</h1>
  <div class="ck-body">
    <div class="ck-list">
      <div class="ck-row ck-head"><span></span><span>確認する項目</span><span>担当</span><span class="ck-due">期限</span></div>
      <div class="ck-row is-done"><span class="ck-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" /></svg></span><span class="ck-name">雇用契約書の締結</span><span class="ck-who">総務</span><span class="ck-due">3/10</span></div>
      <div class="ck-row is-done"><span class="ck-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" /></svg></span><span class="ck-name">社会保険の加入手続き</span><span class="ck-who">総務</span><span class="ck-due">3/18</span></div>
      <div class="ck-row is-done"><span class="ck-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" /></svg></span><span class="ck-name">PC・アカウントの準備</span><span class="ck-who">情シス</span><span class="ck-due">3/20</span></div>
      <div class="ck-row is-done"><span class="ck-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" /></svg></span><span class="ck-name">座席と入館証の手配</span><span class="ck-who">総務</span><span class="ck-due">3/24</span></div>
      <div class="ck-row is-done"><span class="ck-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" /></svg></span><span class="ck-name">配属先への事前連絡</span><span class="ck-who">人事</span><span class="ck-due">3/25</span></div>
      <div class="ck-row"><span class="ck-box"></span><span class="ck-name">初日のスケジュール作成</span><span class="ck-who">人事</span><span class="ck-due">3/27</span></div>
      <div class="ck-row"><span class="ck-box"></span><span class="ck-name">メンター面談の設定</span><span class="ck-who">配属先</span><span class="ck-due">3/30</span></div>
      <div class="ck-row"><span class="ck-box"></span><span class="ck-name">歓迎ランチの予約</span><span class="ck-who">配属先</span><span class="ck-due">3/31</span></div>
    </div>
    <div class="ck-side">
      <span class="ck-big"><b>5</b> / 8</span>
      <span class="ck-big-label">確認が済んだ項目</span>
      <span class="ck-meter"><i style="width: 62.5%"></i></span>
      <span class="ck-rest">残り3項目</span>
    </div>
  </div>
  <p class="note">※ 今日は3月27日。期限は準備を終える日。</p>
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
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

.ck-body { flex: 1; display: flex; gap: 36px; margin: 14px 0 10px; min-height: 0; }
.ck-list { flex: 1; display: flex; flex-direction: column; min-width: 0; }
.ck-row { flex: 1; display: grid; grid-template-columns: 30px 1fr 72px auto; align-items: center; gap: 12px; padding: 0 4px; border-bottom: 1px solid #e3e5ea; font-size: 18px; }
.ck-row:last-child { border-bottom: 0; }
.ck-head { flex: 0 0 28px; font-size: 14px; font-weight: 700; color: #8a8f9c; }
.ck-box { display: grid; place-items: center; width: 26px; height: 26px; border: 2px solid #c3c8d2; border-radius: 6px; color: #fff; }
.ck-box svg { width: 18px; height: 18px; }
.ck-row.is-done .ck-box { border-color: var(--accent); background: var(--accent); }
.ck-name { font-weight: 700; }
.ck-who { font-size: 16px; color: #5a6070; }
.ck-due { min-width: 48px; font-size: 16px; color: #5a6070; font-variant-numeric: tabular-nums; text-align: right; }
.ck-head .ck-due { font-size: 14px; color: #8a8f9c; }
.slide[data-done="fade"] .ck-row.is-done .ck-name,
.slide[data-done="fade"] .ck-row.is-done .ck-who,
.slide[data-done="fade"] .ck-row.is-done .ck-due { color: #8a8f9c; font-weight: 500; }
.slide[data-due="hide"] .ck-due { display: none; }
/* 右の進み具合 */
.ck-side { flex: 0 0 200px; display: flex; flex-direction: column; justify-content: center; gap: 8px; padding-left: 28px; border-left: 1px solid #e3e5ea; }
.ck-big { font-size: 28px; font-weight: 800; color: #8a8f9c; font-variant-numeric: tabular-nums; line-height: 1.1; }
.ck-big b { font-size: 64px; color: var(--accent); }
.ck-big-label { font-size: 16px; color: #5a6070; }
.ck-meter { display: block; height: 10px; margin-top: 6px; border-radius: 999px; background: #e3e5ea; overflow: hidden; }
.ck-meter i { display: block; height: 100%; background: var(--accent); }
.ck-rest { margin-top: 12px; padding-top: 12px; border-top: 1px solid #e3e5ea; font-size: 20px; font-weight: 800; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'done',
      type: 'select',
      label: '済みの項目',
      value: 'fade',
      options: [
        { value: 'fade', label: '文字を薄くする' },
        { value: 'normal', label: 'そのまま見せる' },
      ],
    },
    {
      key: 'due',
      type: 'select',
      label: '期限の列',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '項目を「済んだかどうか」が判断できる書き方にします。「PCの準備」だけだと、何ができたら済みなのかが人によって違います。「PC・アカウントの準備」のように、成果物が分かる言い方に統一します。',
    '済みと未完了を、色だけで見分けさせないようにします。印刷が白黒だったり、色が見えにくい人がいたりするためです。見本のように、済みは「塗りつぶし＋チェックマーク」、未完了は「空の枠」と形でも違いが分かるようにします。',
    '全体の数（8つ中5つ）を書かずにリストだけ見せると、聞き手は自分で数え始めます。右側などに「5 / 8」と大きく置き、残りの数も一緒に書いておきます。',
    '期限が今日の項目や過ぎた項目をそのまま並べないようにします。遅れているものがあれば、その行だけ期限を赤字にするか、見出しに「1項目が期限切れ」と書いて、見落とされないようにします。',
  ],
  similar: [
    { slug: 'kanban', diff: 'カンバン型は、作業を進み具合の列に並べる型です。チェックリスト型は「済んだか・まだか」の2択で見せるので、確認項目向けです。' },
    { slug: 'action-list', diff: 'アクション一覧型は、誰が・何を・いつまでにやるかを表にする型です。チェックリスト型は、済んだかどうかの確認が中心です。' },
    { slug: 'raci', diff: 'RACI責任分担型は、作業ごとに誰が何の役割かを表にする型です。チェックリスト型は役割ではなく、進み具合を見せます。' },
  ],
  faq: [
    {
      q: 'PowerPointでチェックボックスを入れるにはどうしますか？',
      a: '文字で入れる方法は、「挿入」→「記号と特殊文字」から「☐」と「☑」を選ぶやり方です。見た目をそろえたいときは、角丸四角形を小さく作り、済みの行だけ色を塗って白いチェックを重ねると、印刷しても崩れません。',
    },
    {
      q: 'チェックリストはスライドに何項目まで載せられますか？',
      a: '10項目前後が読める限度です。それ以上ある場合は、「準備」「当日」「事後」などのグループに分けてスライドを分けるか、スライドには残っている項目だけを載せ、全項目は別の資料で配ります。',
    },
    {
      q: 'チェックリストとToDoリストは何が違いますか？',
      a: 'ToDoリストは「これからやること」の一覧で、チェックリストは「抜けなく確認すること」の一覧です。ToDoは担当や期限が中心になり、チェックリストは「全部で何項目のうち、いくつ済んだか」が中心になります。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
