import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'claim-evidence',
  no: 79,
  category: 'teian',
  name: '主張・根拠・示唆型',
  en: 'Claim, evidence and implication',
  aka: ['主張と根拠', '結論・根拠・示唆', 'So What', 'ファクトと示唆', '根拠つきの提案'],
  mode: 'static',
  title: '主張・根拠・示唆とは？事実で裏づけて「だから何か」まで伝えるスライドの作り方【見本つき】',
  description:
    '見出しの主張を3つの事実で裏づけ、下の帯で「だから何をすべきか」を示す主張・根拠・示唆型のスライドを見本で解説。PowerPointとGoogleスライドでの作り方、AIへの指示文、HTMLとCSSまでまとめました。',
  oneLine: '言いたいことを、3つの事実で裏づけ、その意味まで示す。',
  what: [
    '見出しに「主張」（言いたいこと）を1文で書き、その下に3つの「根拠」（数字つきの事実）を横に並べ、いちばん下の帯に「示唆」（だから何をすべきか）を置く型です。見本では、夜間の電話窓口をチャット中心に切り替えてよい、という主張を、割合・対応時間・満足度の3つの数字で支えています。根拠のカードには出典（どの調査の数字か）を小さく添えます。',
    '聞き手が知りたいのは、数字そのものより「その数字から何が言えるのか」です。根拠だけを並べて終わると「で、どうするの？」と聞かれます。決まりごとは、根拠を3つまでに絞ること、そして示唆を「事実の言い換え」ではなく「次にとれる行動や得られる効果」で書くことです。',
  ],
  when: [
    '調査・分析の結果を報告するときに、数字の羅列ではなく結論から先に伝えたいとき',
    '提案書で、「なぜこの方針がよいのか」を事実で裏づけたいとき',
    '上司から「根拠は？」「だから何？」と聞かれそうな主張を、先回りして1枚にまとめたいとき',
    '長い資料の途中で、1つの論点の結論を整理して区切りをつけたいとき',
  ],
  avoid: [
    '根拠が1つしかなく、補強する事実が無いとき（数字インパクト型で1つの数字を大きく見せる方が力強い）',
    '2つの案を比べて選んでもらうとき（2カラム比較型にする）',
    '資料全体の結論と要点を1枚にまとめたいとき（エグゼクティブサマリー型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「主張・根拠・示唆型（claim, evidence and implication）」で作ってください。いちばん上に小さく「夜間の問い合わせ窓口（18〜21時）の見直し」、その下に主張の見出し「夜間の電話窓口は、チャット中心に切り替えてよい」を1行で置きます。その下に黒い丸い札「根拠」を置き、札の下に同じ大きさのカードを3枚横に並べてください（白い背景に細い灰色の枠線、角丸）。カードの中は、上から大きな数字（44pt以上・太字）、説明（17pt以上）、小さな出典（12pt以上・灰色）の順です。1枚目＝78%、「夜間の問い合わせのうち、チャットで届いた割合」、出典「問い合わせ管理表（7〜9月・1,240件）」。2枚目＝9分、「チャット1件の対応時間（電話は18分）」、出典「対応記録（7〜9月）」。3枚目＝4.4点、「チャット対応の満足度（電話は4.3点）」、出典「対応後アンケート（5点満点）」。出典は「{{source:t}}」にしてください。3枚のカードの下に小さな下向きの矢印を置き、その下に横長の帯を置きます。帯の左に黒い札「示唆」、右に大きな文「同じ人数のまま、夜間にさばける件数を約2倍にできる」（24pt以上）と、その下に小さく「次の一手：11月から夜間の電話を予約制にする」。帯は「{{focus:t}}」にしてください（強調するときは、帯をアクセント色{{accent:t}}で塗りつぶし、文字を白にする。強調しないときは薄い灰色の帯）。色はアクセント色の1色だけです。最下部に「※ 件数・時間・満足度は2026年7〜9月の実績。約2倍＝電話18分÷チャット9分。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、見出しに主張を入れ、その下に「挿入」→「図形」→「四角形: 角を丸くする」を3つ並べて根拠のカードにします。3つを選んで「図形の書式」→「配置」→「左右に整列」を押すと、間隔がそろいます。カードの中の数字・説明・出典は、1つのテキストボックスに改行で入れ、数字の行だけ大きくすると、後からカードを増やすときも崩れません。示唆の帯は横長の角丸四角形で作り、塗りつぶしをアクセント色、文字を白にします。',
    'Googleスライドでも、「挿入」→「図形」→「図形」から角丸四角形を3つ置き、「配置」メニューで横の間隔をそろえます。数字だけ文字サイズを大きくし、出典は小さく灰色にします。根拠の数字が表やグラフから来ているときは、スプレッドシートでまとめた元の表を別のスライドや資料にして、この1枚には3つの数字だけを写すと、会議で質問されても答えやすくなります。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。根拠のカードは3枚が同じ形の繰り返しです。数字・説明・出典を書き換えるだけで、別の主張に流用できます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-source="{{source}}">
  <p class="kicker">夜間の問い合わせ窓口（18〜21時）の見直し</p>
  <h1 class="title">夜間の電話窓口は、チャット中心に切り替えてよい</h1>

  <div class="body">
    <span class="pill">根拠</span>
    <div class="cards">
      <div class="ev">
        <span class="num">78<small>%</small></span>
        <span class="text">夜間の問い合わせのうち、チャットで届いた割合</span>
        <span class="src">問い合わせ管理表（7〜9月・1,240件）</span>
      </div>
      <div class="ev">
        <span class="num">9<small>分</small></span>
        <span class="text">チャット1件の対応時間（電話は18分）</span>
        <span class="src">対応記録（7〜9月）</span>
      </div>
      <div class="ev">
        <span class="num">4.4<small>点</small></span>
        <span class="text">チャット対応の満足度（電話は4.3点）</span>
        <span class="src">対応後アンケート（5点満点）</span>
      </div>
    </div>

    <span class="down">↓</span>

    <div class="imp">
      <span class="pill">示唆</span>
      <span class="imp-text">同じ人数のまま、夜間にさばける件数を約2倍にできる</span>
      <span class="imp-sub">次の一手：11月から夜間の電話を予約制にする</span>
    </div>
  </div>

  <p class="note">※ 件数・時間・満足度は2026年7〜9月の実績。約2倍＝電話18分÷チャット9分。</p>
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

.body { flex: 1; display: flex; flex-direction: column; margin: 14px 0 10px; }
.pill { align-self: flex-start; padding: 2px 14px; border-radius: 999px; background: #1f2430; color: #fff; font-size: 15px; font-weight: 800; }

/* 根拠の3枚 */
.cards { flex: 1; display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 8px; }
.ev { display: flex; flex-direction: column; padding: 10px 18px; border: 2px solid #e3e5ea; border-radius: 12px; }
.num { font-size: 46px; font-weight: 800; line-height: 1.1; }
.num small { margin-left: 2px; font-size: 22px; color: #5a6070; }
.text { margin-top: 2px; font-size: 17px; font-weight: 700; }
.src { margin-top: auto; padding-top: 6px; font-size: 13px; color: #8a8f9c; }
.slide[data-source="hide"] .src { display: none; }

.down { height: 26px; text-align: center; color: #8a8f9c; font-size: 22px; line-height: 26px; }

/* 示唆の帯 */
.imp { display: grid; grid-template-columns: auto 1fr; align-items: center; column-gap: 16px; padding: 10px 22px; border-radius: 12px; background: #f3f4f7; }
.imp .pill { grid-row: 1 / 3; }
.imp-text { font-size: 25px; font-weight: 800; line-height: 1.3; }
.imp-sub { font-size: 16px; font-weight: 700; color: #5a6070; }
.slide[data-focus="implication"] .imp { background: var(--accent); }
.slide[data-focus="implication"] .imp-text { color: #fff; }
.slide[data-focus="implication"] .imp-sub { color: rgba(255, 255, 255, 0.9); }
.slide[data-focus="implication"] .imp .pill { background: #fff; color: var(--accent); }

.note { margin: auto 0 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '示唆の帯',
      value: 'implication',
      options: [
        { value: 'implication', label: '色で強調する' },
        { value: 'none', label: '強調しない' },
      ],
    },
    {
      key: 'source',
      type: 'select',
      label: '根拠の出典',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '根拠は3つまでにします。5つも6つも並べると、どれが決め手なのか分からなくなり、かえって弱く見えます。強い順に3つ選び、残りは補足の資料に回します。',
    '根拠には、必ず出典（調査名・期間・件数）を添えます。出典の無い数字は「その場で作った数字」と疑われます。数字が少ない期間や件数で出ている場合は、そのことも注記に書きます。',
    '示唆を、根拠の繰り返しにしないこと。「チャットの満足度が高い」は事実で、示唆ではありません。「だから夜間はチャット中心にすれば、同じ人数で約2倍さばける」のように、事実から導いた行動や効果を書きます。',
    '主張と根拠がかみ合っているかを見直します。主張が「切り替えてよい」なのに、根拠が「電話にも良い点がある」という内容だと、聞き手は混乱します。根拠はすべて主張の方向を支える事実だけにします。',
  ],
  similar: [
    { slug: 'executive-summary', diff: 'エグゼクティブサマリー型は、資料全体の結論と要点を1枚に凝縮する型です。主張・根拠・示唆型は、1つの論点について事実で裏づけ、その意味まで伝えます。' },
    { slug: 'pyramid', diff: 'ピラミッド型は、頂点の結論を何段もの根拠で積み上げる型です。主張・根拠・示唆型は、根拠を1段（3つ）に絞り、示唆で締めます。' },
    { slug: 'hypothesis', diff: '仮説・検証・学び型は、自分たちで試した結果の報告です。主張・根拠・示唆型は、すでにある事実やデータから結論を導きます。' },
  ],
  faq: [
    {
      q: '「示唆（しさ）」とは、スライドでは何を書けばよいですか？',
      a: '示唆とは「その事実から言えること」「だから何をすべきか」です。英語では「So What（だから何？）」とも言います。根拠の数字を読んだ聞き手が最後に知りたいのは、自分が次に何をすればよいかなので、そこを1文で書きます。',
    },
    {
      q: '結論を先に言う資料の型は、ほかにもありますか？',
      a: '結論を頂点に根拠を段で積むピラミッド型、資料全体の結論を1枚に凝縮するエグゼクティブサマリー型があります。1つの論点を、数字で裏づけて示唆まで言い切りたいときは、この主張・根拠・示唆型が向いています。',
    },
    {
      q: '根拠の数字は、グラフにしたほうがよいですか？',
      a: '3つの数字を大きく見せるだけなら、グラフにしないほうが伝わります。数字の推移や比較そのものが主役のときは、棒グラフや折れ線のスライドを別に作り、この型では要点の数字だけを写します。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
