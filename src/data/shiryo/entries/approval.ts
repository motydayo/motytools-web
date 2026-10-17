import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'approval',
  no: 96,
  category: 'teian',
  name: '決裁依頼型',
  en: 'Approval request',
  aka: ['決裁依頼', '稟議書', '承認依頼', '決裁のお願い', '稟議スライド', '承認申請'],
  mode: 'static',
  title: '決裁依頼のスライドとは？決めてほしいこと・費用・期限を1枚で示す作り方【見本つき】',
  description:
    '決めてほしいこと・費用・期限を1枚で示す「決裁依頼型」のスライドを見本で解説。承認欄の置き方、理由の書き方、決裁されやすい見せ方、PowerPoint・Googleスライドでの作り方、AIにそのまま貼れる指示文とHTMLまでまとめました。',
  oneLine: '決めてほしいこと・費用・期限を1枚で示す。',
  what: [
    '「何を決めてほしいか」「いくらかかるか」「いつまでに決めてほしいか」の3つを、左側に大きく並べる型です。見本では倉庫管理システムの導入を依頼する1枚として、左に依頼の内容、費用480万円、期限11月7日を置き、右に導入したい理由を3つと承認欄を置いています。見出しも「480万円を、11月7日までにご決裁ください」と、頼みごとをそのまま書いています。',
    '決まりは、依頼の内容を最初の見出しで言い切ることと、費用と期限を大きな文字にすることです。決裁をする人は、中身を読む前にまず「何を、いくらで、いつまでに」を知りたいからです。理由は3つまでに絞り、短い言葉で書きます。詳しい根拠は、前後のスライド（ROI試算型やコスト内訳型）に回します。',
  ],
  when: [
    '上司や役員に、購入・契約・採用・出張などの承認をお願いするとき',
    '会議の最後に、「この件を承認してください」と決めてもらうとき',
    '稟議書に添える、1枚の要約として使うとき',
    'お客さまに、見積もりの承認と発注の期限をお願いするとき',
  ],
  avoid: [
    '複数の案から選んでもらうとき（推奨案強調型・2カラム比較型で案を比べてから依頼する）',
    '費用の中身や、元が取れる根拠を説明するとき（コスト内訳型・ROI試算型にする）',
    '依頼ではなく、決まったことの共有だけをするとき（合意事項・未決事項型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「決裁依頼型（approval request）」で作ってください。いちばん上に小さく「物流部からの決裁のお願い（10月17日）」、その下に見出し「480万円の導入を、11月7日までにご決裁ください」を置きます。その下を左右に分けます。左側には、角丸の枠を縦に3つ置きます。1つ目は小さく「決めてほしいこと」、その下に太字24ptで「倉庫管理システム「ロジノート」の導入」。2つ目は小さく「費用」、その下に「480万円」（数字は46pt前後の太字）、さらに小さく「初期費用350万円＋初年度の運用費130万円」。3つ目は小さく「ご決裁の期限」、その下に「11月7日まで」（数字は46pt前後の太字）、さらに小さく「発注先の見積価格は11月末まで有効」。右側には、薄い灰色の枠で「導入したい理由」を、番号つきで3つ並べます。「出荷ミスが月12件から2件に減る見込み」「棚卸し作業が3日から半日になる」「現行システムの保守が2027年3月に終了」です。右側の下には「承認欄」として、「起案・課長・部長・本部長」の4つの枠を横に並べます（起案の枠だけ「山田」と書き、ほかは空）。強調する項目は「{{focus:t}}」にしてください（強調する枠は線を太くしてアクセント色にし、大きな数字もアクセント色にする）。承認欄は「{{stamp:t}}」にします。色はアクセント色{{accent:t}}の1色だけで、ほかは白・灰色・黒にします。見出しは30〜34pt、項目名は14pt以上、理由は18pt以上、注記は12pt以上。最下部に「※ 費用は税抜。出荷ミスと作業時間は、他社の導入例と1か月の試用結果から試算。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「ホーム」→「新しいスライド」で「タイトルのみ」を選び、見出しに依頼の一文を入れます。左の3つの枠は、「挿入」→「図形」→「四角形: 角を丸くする」を3つ作って縦に並べ、「図形の書式」→「配置」→「左右中央揃え」と「上下に整列」でそろえます。費用と期限の数字は、枠の中のテキストで、フォントサイズを46pt前後にします。承認欄は「挿入」→「表」で2行×4列の表を作り、上の行に「起案・課長・部長・本部長」、下の行を空欄にして、行の高さを大きくします。',
    'Googleスライドでも手順はほぼ同じです。「挿入」→「図形」→「図形」から角丸の四角形を選んで3つ並べ、「配置」→「均等に配置」→「縦方向」で間隔をそろえます。承認欄は「挿入」→「表」で2行×4列にします。会社に決まった稟議書の様式がある場合は、そちらの承認欄に合わせて、この1枚は「要約」として添えると使いやすくなります。色を付けるのは、費用か期限の1つだけにします。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。幅960px・高さ540pxで、PowerPointの16:9と同じ比率です。承認欄を使わない会社では、HTMLのその部分を消すと、理由の枠が下まで広がります。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-stamp="{{stamp}}">
  <p class="kicker">物流部からの決裁のお願い（10月17日）</p>
  <h1 class="title">480万円の導入を、11月7日までにご決裁ください</h1>

  <div class="body">
    <!-- 左: 依頼の中身 -->
    <div class="left">
      <div class="card ask">
        <span class="label">決めてほしいこと</span>
        <span class="ask-v">倉庫管理システム「ロジノート」の導入</span>
      </div>
      <div class="card cost">
        <span class="label">費用</span>
        <span class="big"><b>480</b>万円</span>
        <span class="sub">初期費用350万円＋初年度の運用費130万円</span>
      </div>
      <div class="card due">
        <span class="label">ご決裁の期限</span>
        <span class="big"><b>11月7日</b>まで</span>
        <span class="sub">発注先の見積価格は11月末まで有効</span>
      </div>
    </div>

    <!-- 右: 理由と承認欄 -->
    <div class="right">
      <div class="reasons">
        <span class="label">導入したい理由</span>
        <ol>
          <li><i>1</i><span>出荷ミスが月12件から2件に減る見込み</span></li>
          <li><i>2</i><span>棚卸し作業が3日から半日になる</span></li>
          <li><i>3</i><span>現行システムの保守が2027年3月に終了</span></li>
        </ol>
      </div>
      <div class="stamps">
        <span class="label">承認欄</span>
        <div class="boxes">
          <span class="box"><span class="box-h">起案</span><span class="box-b">山田</span></span>
          <span class="box"><span class="box-h">課長</span><span class="box-b"></span></span>
          <span class="box"><span class="box-h">部長</span><span class="box-b"></span></span>
          <span class="box"><span class="box-h">本部長</span><span class="box-b"></span></span>
        </div>
      </div>
    </div>
  </div>

  <p class="note">※ 費用は税抜。出荷ミスと作業時間は、他社の導入例と1か月の試用結果から試算。</p>
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
.title { margin: 0; font-size: 34px; font-weight: 800; line-height: 1.3; }
.body { flex: 1; display: grid; grid-template-columns: 1.12fr 1fr; gap: 28px; margin: 16px 0 10px; min-height: 0; }

/* 左: 3つの枠 */
.left { display: grid; grid-template-rows: 0.9fr 1.15fr 1.05fr; gap: 10px; }
.card { display: flex; flex-direction: column; justify-content: center; padding: 0 20px; border: 2px solid #e3e5ea; border-radius: 10px; }
.label { font-size: 14px; font-weight: 700; color: #5a6070; letter-spacing: 0.04em; }
.ask-v { font-size: 24px; font-weight: 800; line-height: 1.3; }
.big { font-size: 24px; font-weight: 800; line-height: 1.1; font-variant-numeric: tabular-nums; }
.big b { margin-right: 2px; font-size: 46px; }
.sub { font-size: 15px; color: #5a6070; }

/* 右: 理由と承認欄 */
.right { display: flex; flex-direction: column; gap: 10px; }
.reasons { flex: 1; display: flex; flex-direction: column; padding: 14px 20px; border-radius: 10px; background: #f3f4f7; }
ol { flex: 1; display: grid; grid-auto-rows: 1fr; margin: 4px 0 0; padding: 0; list-style: none; }
li { display: flex; align-items: center; gap: 12px; font-size: 18px; font-weight: 700; line-height: 1.35; }
li i { flex: none; display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: #5a6070; color: #fff; font-style: normal; font-size: 15px; font-weight: 800; }
.boxes { display: grid; grid-template-columns: repeat(4, 1fr); margin-top: 4px; border: 1.5px solid #8a8f9c; }
.box { display: flex; flex-direction: column; border-left: 1.5px solid #8a8f9c; }
.box:first-child { border-left: 0; }
.box-h { padding: 2px 0; background: #f3f4f7; border-bottom: 1.5px solid #8a8f9c; text-align: center; font-size: 14px; font-weight: 700; }
.box-b { height: 50px; display: flex; align-items: center; justify-content: center; font-size: 15px; color: #5a6070; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 強調する項目（data-focus="cost" / "due" / "none"）と承認欄（data-stamp="show" / "hide"） */
.slide[data-focus="cost"] .cost,
.slide[data-focus="due"] .due { border: 3px solid var(--accent); background: color-mix(in srgb, var(--accent) 6%, #fff); }
.slide[data-focus="cost"] .cost :is(.big, .label),
.slide[data-focus="due"] .due :is(.big, .label) { color: var(--accent); }
.slide[data-stamp="hide"] .stamps { display: none; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する項目',
      value: 'due',
      options: [
        { value: 'due', label: '期限を強調' },
        { value: 'cost', label: '費用を強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    {
      key: 'stamp',
      type: 'select',
      label: '承認欄',
      value: 'show',
      options: [
        { value: 'show', label: '承認欄を出す' },
        { value: 'hide', label: '承認欄を出さない' },
      ],
    },
  ],
  cautions: [
    '依頼の内容は、見出しで言い切ります。「ご検討ください」「ご確認ください」では、承認がほしいのか、意見がほしいのかが分かりません。「ご決裁ください」「承認をお願いします」と、頼みごとをはっきり書きます。',
    '費用には、初期費用だけでなく、毎年かかる費用も書きます。見本のように内訳を一行添えれば、あとから「運用費が入っていなかった」と言われません。総額と、その内訳の数字が合っているか（350＋130＝480）、出す前に必ず検算します。',
    '期限には、その日までに決める理由も一緒に書きます。「11月7日まで」だけでは、急がせているように見えます。見本の「発注先の見積価格は11月末まで有効」のように、事実を一言添えると、納得してもらえます。',
    '決裁されなかった場合に何が起きるかも、理由の中に入れておきます。見本の「現行システムの保守が2027年3月に終了」のように、やらないリスクが書いてあると、決裁する側が判断しやすくなります。',
  ],
  similar: [
    { slug: 'roi', diff: 'ROI試算型は、かけるお金と戻ってくるお金を比べる型です。決裁依頼型の前に置いて「元が取れる」根拠を見せると、承認されやすくなります。' },
    { slug: 'recommend', diff: '推奨案強調型は、複数の案のうち推奨を1つ大きく示す型です。案を比べてもらう段階で使い、決裁依頼型は案が決まった最後の依頼で使います。' },
    { slug: 'agreed-open', diff: '合意事項・未決事項型は、決まったことと決まっていないことを分ける型です。決裁をお願いするのではなく、会議の結論を共有するときに使います。' },
  ],
  faq: [
    {
      q: '稟議書と決裁依頼のスライドは、何が違いますか？',
      a: '稟議書は、会社が決めた様式で、承認の記録として残す正式な文書です。決裁依頼のスライドは、会議や面談で口頭で説明するときの要約です。スライドで合意を得たあとに、稟議書を回す、という流れで使い分けるのが一般的です。',
    },
    {
      q: '決裁依頼のスライドに、承認欄は必要ですか？',
      a: '承認の記録を残す会社なら、あると便利です。会議で説明して、その場で押印やサインをもらうことができます。承認の記録を別の仕組み（ワークフローシステムなど）で残している会社では、承認欄は外して、理由の欄を広く使う方が読みやすくなります。',
    },
    {
      q: '決裁依頼のスライドで、理由はいくつ書けばよいですか？',
      a: '3つまでです。理由が多いと、決裁する人は「弱い理由を並べて補っている」と感じます。いちばん強い理由を最初に置き、「やらなかった場合に起きること」を最後に1つ入れると、判断しやすい構成になります。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
