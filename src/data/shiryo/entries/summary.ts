import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'summary',
  no: 12,
  category: 'kousei',
  name: 'まとめ型',
  en: 'Summary slide',
  aka: ['まとめスライド', '要点の振り返り', '最後のスライド', 'おわりに', 'サマリー', '結びのスライド'],
  mode: 'static',
  title: 'まとめスライドとは？最後に要点を振り返る資料の作り方【見本・PowerPoint】',
  description:
    '話の要点を最後に3つに絞って振り返る「まとめ型」のスライドを見本で解説。書く内容の絞り方、聞き手へのお願いの添え方、PowerPointとGoogleスライドでの作り方、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '話の要点を3つに絞って振り返り、最後にお願いを1行で添える。',
  what: [
    '発表の最後に置いて、話の要点を3つに絞って振り返る型です。見本では「解約の7割は30日以内に起きている」「支援担当を3人置く」「解約率を1.9%から1.4%へ」の3点を、番号の丸と太い一文、その下の補足で並べています。いちばん下のアクセント色の帯は、聞き手にしてほしいお願い（ここでは増員の承認）を言い切る場所です。',
    'まとめの役目は、聞き手が会議室を出たあとに思い出せることを、3つ以内に絞ることです。決まりごとは、新しい話を足さないこと。まとめで初めて出る数字や話があると、聞き手が追いつけません。これまでのスライドに出た言葉を、そのまま短く再掲します。',
  ],
  when: [
    '発表や会議の最後に、要点をもう一度確認してから終わりたいとき',
    '長い資料の途中で、一区切りごとに要点を振り返りたいとき',
    '提案や稟議の最後に、「結局、何を決めてほしいか」を言い切りたいとき',
    '資料を読まない人にも、最後の1枚だけ見れば要点が分かるようにしたいとき',
  ],
  avoid: [
    '資料全体の結論と要点を、最初に示したいとき（エグゼクティブサマリー型にして、冒頭に置く）',
    '要点が1つだけのとき（1メッセージ型にして、言い切る）',
    '質疑応答や、連絡先を示したいとき（Q&A型や、問い合わせ・次の一歩型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「まとめ型（summary slide）」で作ってください。いちばん上に小さく「営業部会　まとめ」、その下に見出し「まとめ：来期は「続けてもらうこと」に力を入れます」を1行で置きます。その下に、要点を3つ、縦に並べてください。各行は、左に丸い印、右に太い一文（24pt）とその下の補足（16pt、灰色）です。印は「{{mark:t}}」にしてください。内容は、(1)「解約の7割は、使い始めの30日以内に起きている」補足「解約した212社のうち148社。最初の1か月が勝負です。」(2)「導入後30日の支援担当を、3人置く」補足「年間の費用は840万円（1人あたり年280万円）。」(3)「1年後に、解約率を1.9%から1.4%へ」補足「毎月の会議で、進み具合を確認します。」行と行の間は細い灰色の線で区切ります。いちばん下に、角の丸い帯を置き、「お願いの帯」は「{{ask:t}}」にしてください（表示する場合は、アクセント色{{accent:t}}で塗り、中に白い文字で、小さな札「お願い」と、「来週の経営会議で、支援担当3人の増員をご承認ください。」を22ptで書く。表示しない場合は、3つの丸い印をアクセント色にする）。色はアクセント色の1色だけで、ほかは白・灰色・黒です。数字は私が書いたものだけを使い、新しい数字や新しい話を足さないでください。',
  howTo: [
    'PowerPointでは、「ホーム」→「新しいスライド」から「タイトルとコンテンツ」のレイアウトを選び、見出しにまとめの題名を入れます。要点は、内容の枠に箇条書きで書く方法が手早いですが、見本のように丸い印を付けたいときは、「ホーム」→「段落番号」で1、2、3の番号を付け、番号の色を変えます。印を円にしたい場合は、「挿入」→「図形」→「楕円」と「テキスト ボックス」で別々に置き、「図形の書式」→「配置」で縦にそろえます。お願いの帯は、「挿入」→「図形」→「四角形: 角を丸くする」に文字を入れます。',
    'Googleスライドでも、「レイアウト」から「タイトルと本文」を選んで、本文に箇条書きを書きます。番号は、ツールバーの「番号付きリスト」ボタンで付けます。印を丸にしたいときは、「挿入」→「図形」→「図形」→「楕円」を置いて、中に番号を入れます。まとめは、スライド全体の締めなので、色や図形は増やさず、これまでのスライドと同じ書体・同じ色を使います。',
    'AIにHTMLでスライドを作ってもらう場合は、下のHTMLとCSSがそのまま1枚のスライドになります。要点は同じ形の行を並べているので、行を足す・消すときは、行の枠ごとコピーまたは削除してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-mark="{{mark}}" data-ask="{{ask}}">
  <p class="kicker">営業部会　まとめ</p>
  <h1 class="title">まとめ：来期は「続けてもらうこと」に力を入れます</h1>

  <div class="list">
    <div class="item">
      <span class="mark"><b>1</b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
      <span class="text"><span class="head">解約の7割は、使い始めの30日以内に起きている</span><span class="sub">解約した212社のうち148社。最初の1か月が勝負です。</span></span>
    </div>
    <div class="item">
      <span class="mark"><b>2</b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
      <span class="text"><span class="head">導入後30日の支援担当を、3人置く</span><span class="sub">年間の費用は840万円（1人あたり年280万円）。</span></span>
    </div>
    <div class="item">
      <span class="mark"><b>3</b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
      <span class="text"><span class="head">1年後に、解約率を1.9%から1.4%へ</span><span class="sub">毎月の会議で、進み具合を確認します。</span></span>
    </div>
  </div>

  <div class="ask">
    <span class="ask-label">お願い</span>
    <span class="ask-text">来週の経営会議で、支援担当3人の増員をご承認ください。</span>
  </div>
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
  font-size: 18px;
  line-height: 1.4;
}
.kicker { margin: 0 0 6px; font-size: 15px; font-weight: 700; letter-spacing: 0.04em; color: var(--accent); }
.title { margin: 0; font-size: 34px; font-weight: 800; line-height: 1.3; letter-spacing: 0.01em; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

.list { flex: 1; display: flex; flex-direction: column; justify-content: center; margin: 8px 0 12px; min-height: 0; }
.item { display: flex; align-items: center; gap: 20px; padding: 14px 0; border-bottom: 1px solid #e3e5ea; }
.item:last-child { border-bottom: 0; }
.mark { flex: none; display: grid; place-items: center; width: 48px; height: 48px; border-radius: 50%; background: #f3f4f7; color: #1f2430; font-size: 22px; font-weight: 800; font-variant-numeric: tabular-nums; }
.mark svg { display: none; width: 24px; height: 24px; }
.text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.head { font-size: 24px; font-weight: 800; line-height: 1.35; }
.sub { font-size: 16px; color: #5a6070; }
.ask { display: flex; align-items: center; gap: 18px; padding: 14px 24px; border-radius: 10px; background: var(--accent); color: #fff; }
.ask-label { padding: 2px 12px; border-radius: 999px; background: rgba(255, 255, 255, 0.22); font-size: 15px; font-weight: 800; letter-spacing: 0.08em; }
.ask-text { font-size: 22px; font-weight: 800; }

/* 印のしかた（つまみ: 印） */
.slide[data-mark="check"] .mark b { display: none; }
.slide[data-mark="check"] .mark svg { display: block; }

/* お願いの帯（つまみ: お願いの帯）。出さないときは、印をアクセント色にして色の置き場を残す */
.slide[data-ask="hide"] .ask { display: none; }
.slide[data-ask="hide"] .mark { background: var(--accent); color: #fff; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'mark',
      type: 'select',
      label: '印',
      value: 'num',
      options: [
        { value: 'num', label: '番号' },
        { value: 'check', label: 'チェック' },
      ],
    },
    {
      key: 'ask',
      type: 'select',
      label: 'お願いの帯',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '新しい話をまとめに足さないことです。まとめで初めて出る数字や用語があると、聞き手は「そんな話あった？」と戸惑います。これまでのスライドで見せたことだけを、短く再掲します。',
    '要点は3つ以内に絞ります。まとめに5つも6つも並べると、「結局どれが大事なの？」となり、まとめの役目を果たしません。全部を入れたい気持ちを抑えて、会議室を出たあとに覚えていてほしいものだけを残します。',
    '最後に、聞き手にしてほしいことを一文で書きます。「ご検討ください」のあいまいな言い方ではなく、見本のように「来週の経営会議で、3人の増員をご承認ください」と、いつ・何を決めてほしいかまで書きます。',
    '「ご清聴ありがとうございました」だけのスライドを、まとめの代わりにしないことです。お礼は口で言い、スライドには要点とお願いを残します。質疑応答の間も、そのスライドが映ったままになります。',
  ],
  similar: [
    { slug: 'executive-summary', diff: 'エグゼクティブサマリー型は、資料全体の結論と要点を冒頭で凝縮して見せる型です。まとめ型は、話を聞いたあとに、最後に振り返る型です。' },
    { slug: 'three-points', diff: '3ポイント並列型は、3つの要点を横に並べ、数字や説明まで添えて詳しく見せる型です。まとめ型は、すでに話したことを、短い一文で縦に並べます。' },
    { slug: 'next-step', diff: '問い合わせ・次の一歩型は、聞き手に次にしてほしい行動と連絡先を示す型です。まとめ型の最後のお願いを、さらに詳しく示すときに使います。' },
  ],
  faq: [
    {
      q: 'まとめのスライドには、何を書けばいいですか？',
      a: 'これまで話した内容から、聞き手に覚えて帰ってほしい要点を3つ以内に絞り、短い一文にして並べます。最後に、聞き手にしてほしいこと（決めてほしいこと、次にやってほしいこと）を一文で添えます。',
    },
    {
      q: 'まとめと、エグゼクティブサマリーの違いは何ですか？',
      a: 'エグゼクティブサマリーは、資料の冒頭に置いて、忙しい人が結論だけを先に読めるようにする要約です。まとめは、発表の最後に置いて、聞いた内容を振り返ってもらうための確認です。置く場所と役目が違います。',
    },
    {
      q: 'まとめのスライドは、何枚あればいいですか？',
      a: '1枚で十分です。発表が長い場合は、章の終わりごとに小さなまとめを入れる方法もありますが、最後のまとめは、全体で1枚にとどめます。まとめが2枚、3枚と続くと、聞き手が「まだ終わらないのか」と感じます。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
