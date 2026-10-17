import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'testimonial',
  no: 87,
  category: 'teian',
  name: '顧客の声＋成果型',
  en: 'Testimonial with results',
  aka: ['導入事例', 'お客さまの声', 'お客様の声', '推薦コメント', '成果つきの声'],
  mode: 'static',
  title: '顧客の声と成果を並べる導入事例スライドの作り方【PowerPoint・Googleスライド・見本つき】',
  description:
    'お客さまの言葉を左に、数字の成果を右に並べる顧客の声＋成果型のスライドを見本で解説。声と数字のそろえ方、削減率の出し方、PowerPoint・Googleスライドでの作り方、AIへの指示文、HTMLとCSSまでまとめました。',
  oneLine: 'お客さまの言葉と、導入前後の数字の成果を並べる。',
  what: [
    '左にお客さまの言葉を大きく置き、右に「導入前 → 導入後」の数字を3つ並べる型です。見本では、請求書の電子化サービスを導入した食品卸の事例を、「発行にかかる時間」「郵送・印刷の費用」「間違い」の3つの数字で見せています。声は気持ち、数字は事実を担当し、どちらか1つだけでは足りない説得力を2つで補い合います。',
    '声だけだと「感想にすぎない」と思われ、数字だけだと「自分には関係ない」と思われます。2つを並べると、「数字の裏に、こういう人の実感がある」と伝わります。決まりごとは、声の中身と数字を同じ話題でそろえること（見本は「時間」の話）、数字は導入の前後を同じ条件で比べること、会社名や人物は掲載の許可を取ることです。',
  ],
  when: [
    '営業資料や提案書に、導入事例として1社を紹介するとき',
    'サービス紹介の資料で、「実際に使ったお客さまの声」を信用の材料にしたいとき',
    '社内で新しい仕組みの成果を報告し、現場の感想と数字をいっしょに見せたいとき',
    'ホームページやパンフレットに載せる事例を、スライドの形で先に整理したいとき',
  ],
  avoid: [
    '数字の成果が出ていないとき（声だけを見せるなら、インタビュー抜粋型にする）',
    '複数の事例を同じ項目で比べたいとき（ケース横断比較型にする）',
    '1つの事例を写真・課題・成果の流れで詳しく紹介したいとき（事例紹介カード型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「顧客の声＋成果型（testimonial with results）」で作ってください。いちばん上に小さく「みなと食品株式会社（食品卸・従業員120名）の導入事例」、その下に結論の見出し「請求書の発行は、月16時間から2時間になった」を1行で置きます。その下を左右に分けてください。左は、薄いアクセント色{{accent:t}}の背景の角丸のカードで、上にアクセント色の大きな「 「 」、その下にお客さまの言葉「毎月、請求書の印刷と封入だけで丸2日かかっていました。今は2時間で終わり、本来の仕事に戻れています。」（22pt程度・太字）、カードの下部に細い線を引いて「総務部 課長 岡田様（仮名）」（17pt・太字）と、その下に灰色で「請求書電子化サービス「ペーパーいらず」を2026年4月に導入」（14pt以上）を置きます。右は、小さなラベル「導入前後の変化（月あたり）」の下に、白い角丸の横長の帯を3段重ねてください。各段は、上に灰色の項目名（16pt以上）、その下に「導入前の数字（灰色・24pt程度）→ 導入後の数字（アクセント色・36pt程度・太字）」、右端に減った割合の札を置きます。1段目＝請求書の発行にかかる時間：16時間 → 2時間、約88%減。2段目＝郵送・印刷の費用：3.5万円 → 0.5万円、約86%減。3段目＝宛先・金額の間違い：6件 → 1件、約83%減。引用を置く場所は「{{side:t}}」にしてください。減った割合の札は「{{rate:t}}」にしてください。最下部に「※ 導入前は2026年1〜3月、導入後は同年7〜9月の月平均。減った割合は四捨五入。」と注記（12pt以上）を入れてください。会社名・人物名・数字は私が書いたものだけを使い、新しいものを足さないでください。',
  howTo: [
    'PowerPointでは、左の声のカードを「挿入」→「図形」→「四角形: 角を丸くする」で作り、塗りつぶしを薄いアクセント色にします。声の文は図形の中に直接入力し、行間を「ホーム」→「行間」で1.5〜1.6倍にすると、長い文も読みやすくなります。右の3段は、白い角丸四角形を3つ重ね、「図形の書式」→「配置」→「上下に整列」で等間隔にします。導入前の数字は灰色、導入後の数字だけをアクセント色の太字にして、矢印は「挿入」→「図形」→「矢印: 右」です。',
    'Googleスライドでも「挿入」→「図形」→「図形」で角丸四角形を作り、右の3段を「配置」メニューでそろえます。減った割合は、元の数字から計算します（見本の例では、16時間から2時間で、14時間減。14÷16＝87.5%で、四捨五入して約88%）。数字の元データはスプレッドシートに残し、「導入前・導入後・減った割合」の3列で計算式を入れておくと、数字の間違いを防げます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。数字の段は同じ形の繰り返しなので、指標を増やしたいときは1段ぶん（row）をコピーして書き換えます。引用を右に置くかどうかは、data-side の1か所で切り替えられます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-side="{{side}}" data-rate="{{rate}}">
  <p class="kicker">みなと食品株式会社（食品卸・従業員120名）の導入事例</p>
  <h1 class="title">請求書の発行は、月16時間から2時間になった</h1>

  <div class="main">
    <div class="quote">
      <span class="mark">「</span>
      <span class="text">毎月、請求書の印刷と封入だけで丸2日かかっていました。今は2時間で終わり、本来の仕事に戻れています。</span>
      <span class="who">
        <span class="name">総務部 課長 岡田様（仮名）</span>
        <span class="sub">請求書電子化サービス「ペーパーいらず」を2026年4月に導入</span>
      </span>
    </div>

    <div class="res">
      <span class="reslabel">導入前後の変化（月あたり）</span>
      <div class="row">
        <span class="rl">請求書の発行にかかる時間</span>
        <span class="nums"><span class="before">16時間</span><span class="arrow">→</span><b class="after">2時間</b></span>
        <span class="rate">約88%減</span>
      </div>
      <div class="row">
        <span class="rl">郵送・印刷の費用</span>
        <span class="nums"><span class="before">3.5万円</span><span class="arrow">→</span><b class="after">0.5万円</b></span>
        <span class="rate">約86%減</span>
      </div>
      <div class="row">
        <span class="rl">宛先・金額の間違い</span>
        <span class="nums"><span class="before">6件</span><span class="arrow">→</span><b class="after">1件</b></span>
        <span class="rate">約83%減</span>
      </div>
    </div>
  </div>

  <p class="note">※ 導入前は2026年1〜3月、導入後は同年7〜9月の月平均。減った割合は四捨五入。</p>
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

.main { flex: 1; display: grid; grid-template-columns: 1fr 1.12fr; gap: 20px; margin: 18px 0 10px; min-height: 0; }

/* 左: お客さまの言葉 */
.quote { display: flex; flex-direction: column; gap: 14px; padding: 22px 24px 18px; border-radius: 14px; background: color-mix(in srgb, var(--accent) 7%, #fff); }
.mark { font-size: 54px; font-weight: 800; line-height: 0.6; color: var(--accent); }
.text { font-size: 22px; font-weight: 800; line-height: 1.65; }
.who { display: grid; gap: 2px; margin-top: auto; padding-top: 10px; border-top: 1px solid color-mix(in srgb, var(--accent) 25%, #fff); }
.name { font-size: 17px; font-weight: 800; }
.sub { font-size: 14px; color: #5a6070; line-height: 1.45; }
.slide[data-side="right"] .quote { order: 2; }

/* 右: 数字の成果 */
.res { display: grid; grid-template-rows: auto repeat(3, 1fr); gap: 8px; }
.reslabel { font-size: 15px; font-weight: 800; color: #5a6070; }
.row { display: grid; grid-template-columns: 1fr auto; column-gap: 12px; align-content: center; padding: 6px 18px; border: 2px solid #e3e5ea; border-radius: 12px; }
.rl { grid-column: 1 / -1; font-size: 16px; font-weight: 700; color: #5a6070; }
.nums { display: inline-flex; align-items: center; gap: 10px; }
.before { font-size: 24px; font-weight: 800; color: #8a8f9c; }
.arrow { color: #8a8f9c; font-size: 22px; }
.after { font-size: 36px; font-weight: 800; line-height: 1.15; color: var(--accent); }
.rate { align-self: center; justify-self: end; padding: 3px 12px; border-radius: 999px; background: #f3f4f7; font-size: 16px; font-weight: 800; white-space: nowrap; }
.slide[data-rate="hide"] .rate { display: none; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'side',
      type: 'select',
      label: '引用を置く場所',
      value: 'left',
      options: [
        { value: 'left', label: '左' },
        { value: 'right', label: '右' },
      ],
    },
    {
      key: 'rate',
      type: 'select',
      label: '減った割合の札',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '声と数字を、同じ話題にそろえます。声が「使いやすい」で、数字が「費用が3割減った」だと、2つがつながって見えません。声の中に数字と同じ話題（見本は「2日かかっていた→2時間」）を入れて、数字が声を裏づけるようにします。',
    '導入の前後は、同じ条件で比べます。導入前は忙しい月、導入後は暇な月で比べると、数字が実際より良く見えて、後から指摘されます。見本のように、どの期間の平均かを注記に書きます。',
    '会社名・肩書き・人物の名前を載せるときは、必ず掲載の許可を取ります。許可が取れない場合は、「食品卸・従業員120名」のように業種と規模だけにします。許可を取る前の下書きでは、見本のように（仮名）と書いておきます。',
    '数字は3つまでです。5つも6つも並べると、どれが主役か分かりません。いちばん聞き手に響く数字を1つ決め、見出しにも入れておきます（見本は発行時間）。減った割合は元の数字から必ず計算し、手で書き写さないようにします。',
  ],
  similar: [
    { slug: 'interview', diff: 'インタビュー抜粋型は、聞き取りで出た複数の声を並べて傾向を見せる型です。顧客の声＋成果型は、1社の声と数字をセットにして、導入の効果を示します。' },
    { slug: 'case-card', diff: '事例紹介カード型は、1つの事例を写真・課題・成果のカードにまとめる型です。顧客の声＋成果型は、お客さまの言葉と数字の対応を主役にします。' },
    { slug: 'case-compare', diff: 'ケース横断比較型は、複数の事例を同じ項目の表で比べる型です。顧客の声＋成果型は、1社の事例を声と数字で深く見せます。' },
  ],
  faq: [
    {
      q: '導入事例のスライドには何を載せればよいですか？',
      a: '最低限、お客さまの会社名（または業種と規模）、導入の目的、お客さまの言葉、導入前後の数字の3つです。見本のように、声と数字を並べた1枚があると、営業資料の中でいちばん読まれる部分になります。',
    },
    {
      q: '成果の数字が良くないときは、どうすればよいですか？',
      a: '数字を盛らず、数字以外の成果（作業の負担が減った、社内の理解が進んだなど）を声で見せます。数字が小さいときは、割合ではなく実際の時間や件数（例：月2時間の短縮）で示すほうが、誠実で伝わります。',
    },
    {
      q: 'お客さまの声は、どこまで編集してよいですか？',
      a: '言葉づかいを整える程度にとどめ、意味を変えないことが前提です。長い発言を短くするときは、本人に確認をとります。編集したことを注記に書き、本人の了解を得てから掲載してください。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
