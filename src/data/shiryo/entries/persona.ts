import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'persona',
  no: 85,
  category: 'teian',
  name: 'ペルソナ型',
  en: 'Persona',
  aka: ['ペルソナ', '顧客像', 'ターゲット像', 'ユーザー像', '想定顧客'],
  mode: 'static',
  title: 'ペルソナとは？お客さまの人物像を1枚にまとめるスライドの作り方【見本】',
  description:
    '想定するお客さま1人の人物像を、属性・目的・困りごと・使う場面にまとめるペルソナ型のスライドを見本で解説。実在のデータから作るコツ、PowerPoint・Googleスライドでの作り方、AIへの指示文、HTMLまでまとめました。',
  oneLine: '想定するお客さま1人の人物像を、目的と困りごとで描く。',
  what: [
    '左に人物のカード（名前・年齢・仕事・家族・住まいなど）、右に「目的」「困りごと」「使う場面」の3段、下にその人の「ひとこと」を置く型です。見本では、献立アプリを使う共働きの34歳「ミサキさん」を、1人の人物として描いています。人物の絵は顔のない中立のイラストです。見出しには、その人を一言でいうとどんな人かを書きます。',
    'ペルソナは、「お客さま全体」ではなく「具体的なたった1人」を想像するために使います。「30代の女性」より「平日の夕食に追われる34歳」のほうが、機能や言葉を決めるときの判断が早くなります。決まりごとは、人物像を実在のデータや聞き取りから作ること、年齢などの属性より「目的と困りごと」を主役にすること、1枚につき1人にすることです。',
  ],
  when: [
    '新しいサービスやアプリを企画するとき、誰のために作るかをチームで共有したいとき',
    '広告・LP（ランディングページ）・営業トークの言葉を、想定するお客さまに合わせて決めたいとき',
    '提案書で、お客さまの課題をどれだけ理解しているかを見せたいとき',
    '機能の優先順位でもめたときに、「ミサキさんならどうか」と立ち戻る基準にしたいとき',
  ],
  avoid: [
    '実際のお客さまの声や数字をそのまま見せたいとき（インタビュー抜粋型か顧客の声＋成果型にする）',
    'お客さまの行動と気持ちを時間の流れで見せたいとき（カスタマージャーニー型にする）',
    '複数の関係者を、影響力と関心の高さで整理したいとき（ステークホルダー型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「ペルソナ型（persona）」で作ってください。いちばん上に小さく「献立アプリ「こんだて帳」の想定するお客さま」、その下に結論の見出し「平日の夕食づくりに追われる、共働きの34歳」を1行で置きます。見出しの下を左右に分けてください。左は白い角丸のカードで、上に丸い人物の絵（顔のない中立のイラスト・写真は使わない・淡いアクセント色の丸の中に、灰色の頭とアクセント色の肩）、その右に小さな札「ペルソナ（仮名）」と名前「ミサキさん」（28pt程度・太字）を置き、その下に「34歳・会社員（メーカーの営業企画）」を灰色で書きます。カードの下部に細い線を引き、属性の表を置きます。家族＝夫と5歳の子、住まい＝横浜市・賃貸、帰宅＝平日19時ごろ、スマホ＝毎日2時間ほど。属性の欄は「{{attr:t}}」にしてください。右は、薄い灰色の角丸の横長の帯を3段重ね、各段の左に太字のラベル（アクセント色{{accent:t}}・18pt以上）、右に2行の箇条書き（18pt以上）を置きます。1段目「目的」＝平日の夕食を30分以内に済ませたい／子どもが食べる野菜を切らしたくない。2段目「困りごと」＝毎日の献立を考えるのが負担／買い物が2回に分かれてしまう。3段目「使う場面」＝通勤電車（18時ごろ）で献立を決める／スーパーで買い忘れを確かめる。いちばん下に、左にアクセント色の太い縦線を引いた薄いアクセント色の帯を置き、「「献立を考える時間が、いちばんもったいない。」」（20pt程度・太字）と書きます。この帯は「{{quote:t}}」にしてください。最下部に「※ 想定する人物像。実在の人物ではなく、数字は当社の想定。」と注記（13pt）を入れてください。数字と人物像は私が書いたものだけを使い、新しい情報を足さないでください。',
  howTo: [
    'PowerPointでは、左のカードを「挿入」→「図形」→「四角形: 角を丸くする」で作り、人物の絵は「挿入」→「アイコン」から「人物」を選ぶと、顔のない中立の絵が入ります。写真を使うと「実在の誰か」に見えてしまうので、似顔絵や素材写真は避けます。属性の表は「挿入」→「表」で2列×4行にし、罫線を細い灰色の横線だけにします。右の3段は、横長の角丸四角形を3つ重ね、「図形の書式」→「配置」→「上下に整列」でそろえます。',
    'Googleスライドでも、「挿入」→「図形」→「図形」で角丸四角形を作り、人物の絵は「挿入」→「図形」の円と、半円に近い形を組み合わせて描くか、アイコン素材を貼ります。実際のお客さまへのインタビュー結果や、会員データの集計は、スプレッドシートにまとめておき、ペルソナの「目的」と「困りごと」には、その中でいちばん多かった声を選んで書きます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。人物の絵はSVGで書いてあり、色はアクセント色（--accent）に連動します。人物の名前・属性・3つの段の文章を書き換えるだけで、別のペルソナに流用できます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-quote="{{quote}}" data-attr="{{attr}}">
  <p class="kicker">献立アプリ「こんだて帳」の想定するお客さま</p>
  <h1 class="title">平日の夕食づくりに追われる、共働きの34歳</h1>

  <div class="main">
    <div class="card">
      <div class="top">
        <!-- 顔のない中立の人物イラスト -->
        <svg class="avatar" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" class="avatar-bg" />
          <circle cx="50" cy="40" r="17" fill="#c3c8d2" />
          <path d="M18 92C18 70 32 61 50 61C68 61 82 70 82 92C72 98 28 98 18 92Z" class="avatar-body" />
        </svg>
        <span class="who"><span class="tag">ペルソナ（仮名）</span><span class="name">ミサキさん</span></span>
      </div>
      <span class="sub">34歳・会社員（メーカーの営業企画）</span>
      <dl class="attrs">
        <div><dt>家族</dt><dd>夫と5歳の子</dd></div>
        <div><dt>住まい</dt><dd>横浜市・賃貸</dd></div>
        <div><dt>帰宅</dt><dd>平日19時ごろ</dd></div>
        <div><dt>スマホ</dt><dd>毎日2時間ほど</dd></div>
      </dl>
    </div>

    <div class="blocks">
      <div class="block"><span class="label">目的</span><ul><li>平日の夕食を30分以内に済ませたい</li><li>子どもが食べる野菜を切らしたくない</li></ul></div>
      <div class="block"><span class="label">困りごと</span><ul><li>毎日の献立を考えるのが負担</li><li>買い物が2回に分かれてしまう</li></ul></div>
      <div class="block"><span class="label">使う場面</span><ul><li>通勤電車（18時ごろ）で献立を決める</li><li>スーパーで買い忘れを確かめる</li></ul></div>
    </div>
  </div>

  <p class="quote">「献立を考える時間が、いちばんもったいない。」</p>
  <p class="note">※ 想定する人物像。実在の人物ではなく、数字は当社の想定。</p>
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

.main { flex: 1; display: grid; grid-template-columns: 300px 1fr; gap: 16px; margin: 16px 0 10px; min-height: 0; }

/* 左: 人物のカード */
.card { display: flex; flex-direction: column; gap: 8px; padding: 14px 18px; border: 2px solid #e3e5ea; border-radius: 12px; }
.top { display: flex; align-items: center; gap: 14px; }
.avatar { flex: none; width: 76px; height: 76px; }
.avatar-bg { fill: color-mix(in srgb, var(--accent) 16%, #fff); }
.avatar-body { fill: var(--accent); }
.who { display: grid; gap: 3px; }
.tag { justify-self: start; padding: 1px 10px; border-radius: 999px; background: #f3f4f7; color: #5a6070; font-size: 13px; font-weight: 800; }
.name { font-size: 28px; font-weight: 800; line-height: 1.15; }
.sub { font-size: 15px; color: #5a6070; line-height: 1.45; }
.attrs { display: grid; gap: 4px; margin: auto 0 0; padding-top: 8px; border-top: 1px solid #e3e5ea; }
.attrs div { display: flex; gap: 12px; }
.attrs dt { flex: none; width: 56px; font-size: 15px; font-weight: 700; color: #8a8f9c; }
.attrs dd { margin: 0; font-size: 16px; font-weight: 700; }
.slide[data-attr="hide"] .attrs { display: none; }

/* 右: 3つの観点 */
.blocks { display: grid; grid-template-rows: repeat(3, 1fr); gap: 10px; }
.block { display: flex; align-items: center; gap: 18px; padding: 8px 20px; border-radius: 12px; background: #f3f4f7; }
.label { flex: none; width: 86px; font-size: 18px; font-weight: 800; color: var(--accent); }
.block ul { display: grid; gap: 4px; margin: 0; padding: 0; list-style: none; }
.block li { position: relative; padding-left: 16px; font-size: 18px; font-weight: 700; }
.block li::before { content: ""; position: absolute; left: 0; top: 0.55em; width: 7px; height: 7px; border-radius: 50%; background: #c3c8d2; }

/* ひとこと */
.quote { margin: 0 0 8px; padding: 8px 22px; border-left: 5px solid var(--accent); border-radius: 0 10px 10px 0; background: color-mix(in srgb, var(--accent) 7%, #fff); font-size: 20px; font-weight: 800; }
.slide[data-quote="hide"] .quote { display: none; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'quote',
      type: 'select',
      label: 'ひとことの帯',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
    {
      key: 'attr',
      type: 'select',
      label: '属性の欄',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '想像だけで人物を作らないこと。「30代の働く女性は忙しいはず」という思い込みで作ると、現実のお客さまとずれます。お客さまへのインタビュー、アンケート、問い合わせの内容など、実際のデータから共通点を拾って作ります。',
    '年齢・年収・住所などの属性ばかりを詳しく書かないこと。大事なのは「何をしたくて、何に困っているか」です。属性は3〜4項目にとどめ、右側の目的と困りごとを大きく見せます。',
    '1枚のスライドに、1人だけを描きます。「ミサキさんもケンタさんもハルさんも…」と3人以上を詰め込むと、誰のためのサービスか分からなくなります。複数作るなら、1人ずつ別のスライドにして、いちばん大事な人を最初に置きます。',
    '人物の絵は、顔写真や有名人に似た絵を使わないこと。素材写真を使うと、実在の誰かと取り違えられたり、写真の権利で問題になったりします。この見本のような顔のないイラストにするのが安全です。',
  ],
  similar: [
    { slug: 'customer-journey', diff: 'カスタマージャーニー型は、お客さまの行動と気持ちの移り変わりを、段階ごとの表にする型です。ペルソナ型は、その前提となる「誰のための話か」を1人の人物像で示します。' },
    { slug: 'interview', diff: 'インタビュー抜粋型は、聞き取りで出た声を、そのまま抜き出して並べる型です。ペルソナ型は、いくつもの声から共通点をまとめて、1人の人物像に仕立てます。' },
    { slug: 'stakeholder', diff: 'ステークホルダー型は、関係者を影響力と関心の高さで整理する型です。ペルソナ型は、お客さまとして想定する1人の人物の中身を描きます。' },
  ],
  faq: [
    {
      q: 'ペルソナとターゲットは何が違いますか？',
      a: 'ターゲットは「30代の共働き世帯」のように、狙う層をグループとして示す言い方です。ペルソナは、そのグループの中の「具体的なたった1人」で、名前・仕事・困りごとまで決めます。ターゲットは広く、ペルソナは細かく人物を描きます。',
    },
    {
      q: 'ペルソナは何人作ればよいですか？',
      a: 'まず1人です。最初から3人も5人も作ると、誰を優先するのかが決まらず、結局ぼやけた企画になります。いちばん大事なお客さま1人で企画を進め、必要になってから2人目を作ります。',
    },
    {
      q: 'ペルソナの顔写真は入れたほうがよいですか？',
      a: '入れないほうが安全です。素材写真だと、実在の誰かに似てしまったり、写真の権利の問題が出たりします。見本のような顔のないイラストや、シンプルなアイコンにして、名前と暮らしぶりで人物をイメージしてもらいます。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
