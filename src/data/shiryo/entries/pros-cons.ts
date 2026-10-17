import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'pros-cons',
  no: 22,
  category: 'kousei',
  name: 'メリット・注意点型',
  en: 'Pros and cons',
  aka: ['メリットデメリット', 'メリット・デメリット', 'ProsCons', '良い点と悪い点', '長所短所'],
  mode: 'static',
  title: 'メリット・デメリット表の作り方｜よい点と注意点を左右に分けるスライド【見本つき】',
  description:
    '1つの案のよい点と気をつける点を左右に分け、注意点には対策を添える「メリット・注意点型」のスライドを見本で解説。PowerPoint・Googleスライドでの作り方、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '1つの案について、よい点を左、気をつける点と対策を右に分けて見せる。',
  what: [
    '1つの案を、「得られること」と「気をつけること」に分けて左右に並べる型です。見本では「在宅勤務を週2日から始める案」について、左の枠に3つのメリット（通勤時間が減る・集中して進められる・採用で選ばれやすい）、右の枠に3つの注意点（雑談が減る・出社日がそろわない・仕事の様子が見えない）を置いています。左は淡いアクセント色の枠、右は灰色の枠で、役割の違いを見分けやすくしています。',
    'この型のよさは、案を「いいことずくめ」にも「悪いことだらけ」にも見せず、正直に判断材料を渡せることです。決まりごとは、注意点を隠さず、必ず対策を一言添えること。見本のように「注意点には先に手を打つ」と見出しに書くと、聞き手は安心して「やってみよう」と言いやすくなります。',
  ],
  when: [
    '新しい制度・ツール・働き方を、決裁者に提案するとき',
    '1つの案のリスクを、先回りして正直に伝え、対策も見せたいとき',
    '会議で「やるか、やらないか」の判断を仰ぐ前に、材料を整理するとき',
    '導入後の見直しで、よかったことと課題を振り返るとき',
  ],
  avoid: [
    '比べる案が2つ以上あるとき（2カラム比較型や選択肢比較表型にして、同じ項目で比べる）',
    'メリットとデメリットが5つ以上ずつあるとき（重要な3つに絞るか、リスク登録簿型で表にする）',
    '数字で効果を見せたいとき（メリットを文字で並べるより、数字インパクト型や棒グラフ型の方が説得力がある）',
  ],
  prompt:
    '16:9のスライドを1枚、「メリット・注意点型（pros and cons）」で作ってください。いちばん上に小さく「在宅勤務の導入案（週2日）」、その下に結論の見出し「在宅勤務は週2日から。注意点には先に手を打つ」を置きます。その下を左右2つの枠に分け、間は{{gap:t}}pt空けます。左の枠は「メリット」で、アクセント色{{accent:t}}の枠線と淡い色の背景、見出しの前にチェックの丸いアイコンを置いてください。中身は3つで、太字20ptの項目名とその下に灰色16ptの説明を付けます。「通勤時間が減る：往復1.5時間 × 週2日 ＝ 週3時間」「集中して進められる：資料づくりなど、静かな環境が要る仕事」「採用で選ばれやすい：働き方の選択肢が、求人の強みになる」。右の枠は「注意点と対策」で、灰色の枠線、見出しの前に三角の注意アイコンを置きます。中身は3つで、項目名・説明（灰色）に加えて、対策の行を付けます（対策の行は「{{fix:t}}」）。「雑談が減る：同じ部屋にいない日は、気軽な相談が減る／対策：週1回、全員の朝会を開く」「出社日がそろわない：会議や来客の日に、人が足りなくなる／対策：出社日を火・木に固定する」「仕事の様子が見えない：上司が進み具合を把握しにくい／対策：始業と終業を毎日チャットで報告する」。対策の行は、先頭の「対策」の2文字だけをアクセント色の太字にします。最下部に注記「※ 往復1.5時間は社員の平均。週3時間は1.5時間 × 2日。」を13ptで入れてください。色はアクセント色の1色だけで、ほかは白・灰色・黒にします。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「ホーム」→「新しいスライド」で「比較」のレイアウトを選ぶと、左右に見出しと本文の枠が並んだ状態から始められます。左の見出しを「メリット」、右の見出しを「注意点と対策」にして、本文はそれぞれ箇条書きにします。左右の枠の外側に「挿入」→「図形」→「四角形: 角を丸くする」を重ね、左だけアクセント色の枠線と淡い塗りにします。アイコンは「挿入」→「アイコン」で「チェック」「警告」と検索して入れると、色を文字と同じにそろえられます。',
    'Googleスライドでは、「スライド」→「レイアウトを適用」で、見出しの下に文字枠が2列並んだレイアウトを選びます。枠の色は、角丸四角形（「挿入」→「図形」→「図形」）を後ろに置いて付けます。アイコンは「挿入」→「特殊文字」でチェック（✓）や警告（⚠）の記号を入れるか、「挿入」→「図形」で丸と三角を描いて中に文字を入れます。注意点のあとの「対策」は、同じ段落の中に太字で書くと、一緒に読んでもらえます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。項目は <li> を1つ足すと増やせますが、3つを超えると文字が小さくなるので、重要な3つに絞ってください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-fix="{{fix}}">
  <p class="kicker">在宅勤務の導入案（週2日）</p>
  <h1 class="title">在宅勤務は週2日から。注意点には先に手を打つ</h1>

  <div class="cols">
    <div class="col pros">
      <p class="head">
        <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="currentColor"/><path d="M7 12.5l3.2 3.2L17 8.8" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        メリット
      </p>
      <ul>
        <li><b>通勤時間が減る</b><span>往復1.5時間 × 週2日 ＝ 週3時間</span></li>
        <li><b>集中して進められる</b><span>資料づくりなど、静かな環境が要る仕事</span></li>
        <li><b>採用で選ばれやすい</b><span>働き方の選択肢が、求人の強みになる</span></li>
      </ul>
    </div>

    <div class="col cons">
      <p class="head">
        <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M12 2.5L22.5 21h-21z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 9.5v5.5M12 17.6v.4" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/></svg>
        注意点と対策
      </p>
      <ul>
        <li><b>雑談が減る</b><span>同じ部屋にいない日は、気軽な相談が減る</span><span class="fix"><em>対策</em>週1回、全員の朝会を開く</span></li>
        <li><b>出社日がそろわない</b><span>会議や来客の日に、人が足りなくなる</span><span class="fix"><em>対策</em>出社日を火・木に固定する</span></li>
        <li><b>仕事の様子が見えない</b><span>上司が進み具合を把握しにくい</span><span class="fix"><em>対策</em>始業と終業を毎日チャットで報告する</span></li>
      </ul>
    </div>
  </div>

  <p class="note">※ 往復1.5時間は社員の平均。週3時間は1.5時間 × 2日。</p>
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

/* 左右の枠。項目の高さを左右でそろえる */
.cols { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: {{gap:n}}px; margin: 18px 0 10px; }
.col { display: flex; flex-direction: column; padding: 14px 24px 10px; border: 2px solid #e3e5ea; border-radius: 12px; }
.pros { border-color: var(--accent); background: color-mix(in srgb, var(--accent) 6%, #fff); }
.head { display: flex; align-items: center; gap: 10px; margin: 0; padding-bottom: 8px; font-size: 22px; font-weight: 800; }
.pros .head { color: var(--accent); }
.cons .head { color: #5a6070; }
ul { flex: 1; list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; }
li { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 1px; border-top: 1px solid #e3e5ea; }
li b { font-size: 20px; font-weight: 800; line-height: 1.3; }
li span { font-size: 16px; color: #5a6070; }
li .fix { color: #1f2430; font-weight: 700; }
.fix em { margin-right: 8px; font-style: normal; font-weight: 800; color: var(--accent); }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 対策の表示（data-fix="show" / "hide"） */
.slide[data-fix="hide"] .fix { display: none; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'fix',
      type: 'select',
      label: '対策の行',
      value: 'show',
      options: [
        { value: 'show', label: '出す' },
        { value: 'hide', label: '出さない' },
      ],
    },
    { key: 'gap', label: '左右の枠の間隔（pt）', min: 16, max: 64, step: 8, value: 32, unit: '' },
  ],
  cautions: [
    '注意点を隠したり、小さい文字にしたりしないでください。後から出てきた問題は、最初から言われていた問題の何倍も信用を落とします。左右の文字の大きさは同じにそろえます。',
    '注意点だけを並べて、対策を書かないのは危険です。聞き手は「だから反対」と受け取ります。注意点ごとに必ず、誰が・何をするかが分かる対策を一言添えてください。',
    '項目を数えて、左右の数をそろえる必要はありません。ただし、メリットが5つ、注意点が1つのように偏ると、不公平な資料に見えます。注意点が少ないときは、「ほかに大きなリスクは見つからなかった」と添えます。',
    '色を付けすぎないでください。メリットを緑、注意点を赤に塗ると、色の主張が強すぎて、読む前に結論が決まってしまいます。見本のように、メリット側だけをアクセント色にして、注意点は灰色にするのが落ち着きます。',
  ],
  similar: [
    { slug: 'two-column', diff: '2カラム比較型は、2つの案を同じ項目で並べて、どちらを選ぶかを見せる型です。メリット・注意点型は、1つの案の中身を「よい点」と「気をつける点」に分けます。' },
    { slug: 'option-table', diff: '選択肢比較表型は、3つ以上の案を表で比べる型です。1つの案を深く見せたいときは、メリット・注意点型にします。' },
    { slug: 'risk-register', diff: 'リスク登録簿型は、起こりうる問題とその影響・対策を表で細かく管理する型です。メリット・注意点型は、会議の判断用に主な3つだけを見せます。' },
  ],
  faq: [
    {
      q: 'メリット・デメリットの「デメリット」は「注意点」と書き換えた方がいいですか？',
      a: '提案の資料では「注意点」や「課題」と書く方が、柔らかく伝わります。「デメリット」は、その案を否定する言葉に聞こえるため、決裁者が身構えます。社内の報告でそのままの言葉で通じるなら、デメリットでも問題ありません。',
    },
    {
      q: 'メリット・注意点は、いくつ書けばいいですか？',
      a: '3つずつが目安です。2つだと説得力が足りず、4つ以上になると、1つ1つの文字が小さくなります。たくさん思いつくときは、「判断に効くもの」から3つ選び、残りは付録のページに回します。',
    },
    {
      q: 'Excelでメリット・デメリット表を作ってからスライドに貼れますか？',
      a: 'できます。2列の表を作ってコピーし、スライドに「貼り付け先のスタイルを使用」で貼ります。ただし、見本のような枠やアイコンの飾りはスライドの側で付け直す必要があります。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
