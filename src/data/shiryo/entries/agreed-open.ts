import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'agreed-open',
  no: 94,
  category: 'teian',
  name: '合意事項・未決事項型',
  en: 'Agreed and open items',
  aka: ['決定事項と未決事項', '議事録のまとめ', '合意事項', '未決事項', '決まったこと・決まっていないこと', '会議のまとめ'],
  mode: 'static',
  title: '決定事項と未決事項の書き方とは？会議のまとめを1枚にする資料の作り方【見本つき】',
  description:
    '会議で決まったことと、まだ決まっていないことを左右に分ける「合意事項・未決事項型」のスライドを見本で解説。担当と期限の書き方、PowerPoint・Googleスライドでの作り方、AIにそのまま貼れる指示文とHTMLまでまとめました。',
  oneLine: '決まったことと、まだ決まっていないことを左右に分ける。',
  what: [
    '左に「決まったこと」、右に「まだ決まっていないこと」を並べる型です。見本では新店舗のオープン準備会議のまとめとして、左にオープン日・店舗の広さ・開店時の人員の3つ、右にレジシステムの選定と開店記念の割引の2つを置いています。右の未決事項には、誰がいつまでに決めるかを、「担当」と「期限」で添えています。見出しには「決まった3点と、10月29日までに決める2点」と、件数と期限を書いています。',
    '決まりは、決まったことは短く言い切り、決まっていないことには担当者と期限を必ず付けることです。左には「何が決まったか」だけを書き、経緯は書きません。右は、何を決めるのか、選択肢は何か、誰がいつまでに決めるのかを書きます。担当者と期限のない未決事項は、次の会議までそのまま残ります。この型を会議の最後に見せれば、全員が同じ認識で終われます。',
  ],
  when: [
    '会議の終わりに、決まったことと宿題を全員で確認したいとき',
    '参加していない上司や関係者に、会議の結果を1枚で伝えたいとき',
    'プロジェクトの定例で、前回からの決定と、持ち越しになっていることを整理するとき',
    '取引先との打ち合わせで、合意したことと、検討中のことを分けて残したいとき',
  ],
  avoid: [
    '決まったことを、誰がいつまでにやるかという作業に落とすとき（アクション一覧型にする）',
    '未決事項の選択肢を詳しく比べたいとき（2カラム比較型・選択肢比較表型にする）',
    '議論の中身や経緯まで残したいとき（議事録を別に作り、スライドには結論だけを載せる）',
  ],
  prompt:
    '16:9のスライドを1枚、「合意事項・未決事項型（agreed and open items）」で作ってください。いちばん上に小さく「新店舗オープン準備会議の結果（10月15日）」、その下に結論の見出し「決まった3点と、10月29日までに決める2点」を1行で置きます。その下を左右2つの枠に分け、間を{{gap:t}}pt空けます。左の枠の見出しは「決まったこと」（チェックの丸のアイコン、右に「3件」）で、中に3項目を並べます。各項目は、小さな項目名（15pt）と、その下に太字24ptの内容で、「オープン日：2027年3月1日」「店舗の広さ：120㎡で契約する」「開店時の人員：6人体制」です。右の枠の見出しは「まだ決まっていないこと」（点線の丸の中に「?」のアイコン、右に「2件」）で、2項目を並べます。各項目は、項目名、内容の太字、そして「担当：○○　期限：○/○」の順で、「レジシステム：A社とB社のどちらにするか／担当 佐藤／期限 10/29」「開店記念の割引：割引の内容と予算をどうするか／担当 田中／期限 10/29」です。強調のしかたは「{{focus:t}}」にしてください（強調する枠は線を太くしてアクセント色にし、背景を薄いアクセント色にする）。色はアクセント色{{accent:t}}の1色だけで、ほかは白・灰色・黒にします。見出しは32〜36pt、枠の見出しは22pt、内容は20pt以上、担当と期限は15pt以上。最下部に「※ 未決事項は、次回の会議（10月29日）で決定する。」と注記を入れてください。内容は私が書いたものだけを使い、新しい項目を足さないでください。',
  howTo: [
    'PowerPointでは、「ホーム」→「新しいスライド」で「比較」のレイアウトを選ぶと、見出しの下に左右2つの枠が並んだ状態から始められます。左右の見出しの枠に「決まったこと」「まだ決まっていないこと」と入れ、その下の枠に項目を書きます。左のアイコンは「挿入」→「アイコン」で「チェックマーク」を探すか、「挿入」→「図形」の楕円に「✓」の文字を入れます。右の枠だけ、「図形の枠線」で太さ3pt・アクセント色にして、未決を目立たせます。担当と期限は、項目のすぐ下に小さな文字で並べます。',
    'Googleスライドでは、「スライド」→「レイアウトを適用」で、見出しの下に文字の枠が2列並んだレイアウトを選びます。または「挿入」→「表」で2列の表を作り、1行目を見出し、2行目以降に項目を入れる方法でもできます。右の未決事項の列に色を付けると、会議のあとに見直すべき場所がすぐ分かります。作ったあとで、スライドを共有して「コメント」で担当者に声をかけると、そのまま宿題の確認にも使えます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。項目を増やすときは、HTMLの「li」を足してください。枠の高さは中の項目数に合わせて自動で等分されますが、左右で件数が違っても構いません。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">新店舗オープン準備会議の結果（10月15日）</p>
  <h1 class="title">決まった3点と、10月29日までに決める2点</h1>

  <div class="cols">
    <div class="col agreed">
      <p class="head"><span class="icon">✓</span><span class="head-t">決まったこと</span><span class="count">3件</span></p>
      <ul>
        <li><span class="k">オープン日</span><span class="v">2027年3月1日</span></li>
        <li><span class="k">店舗の広さ</span><span class="v">120㎡で契約する</span></li>
        <li><span class="k">開店時の人員</span><span class="v">6人体制</span></li>
      </ul>
    </div>
    <div class="col open">
      <p class="head"><span class="icon">?</span><span class="head-t">まだ決まっていないこと</span><span class="count">2件</span></p>
      <ul>
        <li>
          <span class="k">レジシステム</span>
          <span class="v">A社とB社のどちらにするか</span>
          <span class="meta"><span>担当：<b>佐藤</b></span><span>期限：<b>10/29</b></span></span>
        </li>
        <li>
          <span class="k">開店記念の割引</span>
          <span class="v">割引の内容と予算をどうするか</span>
          <span class="meta"><span>担当：<b>田中</b></span><span>期限：<b>10/29</b></span></span>
        </li>
      </ul>
    </div>
  </div>

  <p class="note">※ 未決事項は、次回の会議（10月29日）で決定する。</p>
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

/* 左右の枠 */
.cols { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: {{gap:n}}px; margin: 22px 0 12px; min-height: 0; }
.col { display: flex; flex-direction: column; padding: 16px 22px 8px; border: 2px solid #e3e5ea; border-radius: 12px; }
.head { display: flex; align-items: center; gap: 10px; margin: 0; padding-bottom: 10px; border-bottom: 1px solid #e3e5ea; }
.icon { box-sizing: border-box; display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 50%; font-size: 18px; font-weight: 800; }
.agreed .icon { background: #5a6070; color: #fff; }
.open .icon { border: 2.5px dashed #5a6070; color: #5a6070; }
.head-t { font-size: 22px; font-weight: 800; }
.count { margin-left: auto; font-size: 16px; font-weight: 700; color: #5a6070; }
ul { flex: 1; display: grid; grid-auto-rows: 1fr; margin: 0; padding: 0; list-style: none; }
li { display: flex; flex-direction: column; justify-content: center; border-bottom: 1px solid #f3f4f7; }
li:last-child { border-bottom: 0; }
.k { font-size: 15px; color: #5a6070; }
.v { font-size: 24px; font-weight: 800; line-height: 1.3; }
.open .v { font-size: 21px; }
.meta { display: flex; gap: 20px; margin-top: 4px; font-size: 15px; color: #5a6070; }
.meta b { color: #1f2430; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 強調する側（data-focus="open" / "agreed" / "none"） */
.slide[data-focus="open"] .open,
.slide[data-focus="agreed"] .agreed { border: 3px solid var(--accent); background: color-mix(in srgb, var(--accent) 6%, #fff); }
.slide[data-focus="open"] .open .icon { border-color: var(--accent); color: var(--accent); }
.slide[data-focus="agreed"] .agreed .icon { background: var(--accent); }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する側',
      value: 'open',
      options: [
        { value: 'open', label: '未決事項を強調' },
        { value: 'agreed', label: '決まったことを強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    { key: 'gap', label: '左右の枠の間隔（pt）', min: 16, max: 64, step: 8, value: 32, unit: '' },
  ],
  cautions: [
    '未決事項には、必ず担当者と期限を付けます。「引き続き検討」だけで終えた未決事項は、次の会議でも「引き続き検討」になります。担当が決められないなら、決める人を決めることを、最初の未決事項にします。',
    '決まったことは、動詞で言い切る形で書きます。「検討する」「前向きに進める」は決まったことではありません。「2027年3月1日にオープンする」のように、あとから「そう決めた」と確認できる言い方にします。',
    '色で強調するのは、いま見てほしい側だけです。会議の終わりは未決を、あとで経緯を共有するときは決まったことを強調する、のように目的に合わせます。両方に色を付けると、目の止まる場所がなくなります。',
    '「決まった」と「未決」の境目があいまいな項目を、決まったことに入れないでください。後から「そんな話ではなかった」となる原因になります。迷ったら未決に置き、次回の確認事項にします。',
  ],
  similar: [
    { slug: 'action-list', diff: 'アクション一覧型は、誰が・何を・いつまでにやるかを表にする型です。決まったことを、実行する作業に落とすときに続けて使います。' },
    { slug: 'checklist', diff: 'チェックリスト型は、確認する項目と済んだかどうかを並べる型です。決まったかどうかではなく、作業が済んだかどうかを見せます。' },
    { slug: 'summary', diff: 'まとめ型は、話の要点を最後に箇条書きで振り返る型です。決定と未決を分けず、発表の内容を振り返りたいときに使います。' },
  ],
  faq: [
    {
      q: '合意事項と決定事項は、同じ意味ですか？',
      a: '会議の資料ではほぼ同じ意味で使われます。厳密には、決定事項は自社の中で決めたこと、合意事項は取引先など相手がいて双方が了承したことを指す場面が多いです。社外との打ち合わせの記録には「合意事項」、社内会議なら「決定事項」と使い分けると分かりやすくなります。',
    },
    {
      q: '未決事項は、いくつまで載せてよいですか？',
      a: '3つ以内が目安です。未決事項が多すぎると、会議の準備が足りなかったという印象になります。多いときは、いま決める必要があるものだけを載せ、残りは「今後検討する」の注記にまとめます。',
    },
    {
      q: '議事録の代わりに、このスライドで済ませてよいですか？',
      a: '代わりにはなりません。この型は結論だけを1枚にまとめたもので、議論の経緯や反対意見は載りません。会議の最後に画面に映して全員で確認し、そのまま議事録の冒頭に貼る、という使い方が向いています。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
