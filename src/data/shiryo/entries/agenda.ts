import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'agenda',
  no: 13,
  category: 'kousei',
  name: '目次型',
  en: 'Agenda slide',
  aka: ['アジェンダ', '目次スライド', '議題一覧', '本日の流れ', '進行表', 'もくじ'],
  mode: 'static',
  title: '目次スライド（アジェンダ）とは？話す順番を示す作り方【見本・PowerPoint】',
  description:
    'これから話す順番を示す「目次型（アジェンダ）」のスライドを見本で解説。項目の数の目安、所要時間の添え方、いま話している項目の示し方、PowerPointとGoogleスライドでの作り方、AIへの指示文、HTMLとCSSまで。',
  oneLine: 'これから話す順番を番号つきで並べ、所要時間を添える。',
  what: [
    'これから話す内容を、番号つきで順番に並べる型です。見本では営業部の定例会の議題を5つに分け、各項目の右に所要時間（10分・10分・20分・15分・5分）を添えています。いちばん下の帯は、60分全体を所要時間の比で5つに分けたもので、いま話している項目だけをアクセント色にしています。',
    '目次の役目は、聞き手が「今日はこの流れで進む」と見通しを持てることです。見通しがあると、聞き手は安心して話を聞け、司会者も時間配分を守りやすくなります。決まりごとは、項目を3〜6個に絞ることと、スライドの見出しと同じ言葉を使うこと。目次と本文で呼び方が違うと、聞き手が迷います。',
  ],
  when: [
    '会議や発表の始めに、全体の流れと時間配分を共有したいとき',
    '研修・セミナーで、午前・午後の進行を示したいとき',
    '長い資料の途中で、いまどの章を話しているかを聞き手に確認してもらいたいとき',
    '質疑応答の時間があることを、あらかじめ知らせたいとき',
  ],
  avoid: [
    '項目が7つ以上あり、文字が小さくなるとき（大きな章だけに絞り、細かい項目は各章の最初のスライドで示す）',
    '1分で終わる短い連絡のとき（目次を出す時間がむだになるので、1メッセージ型で始める）',
    '章の切り替わりのたびに、全体の流れを見せたいとき（章の扉に、いまの位置を示すセクション扉型を使う）',
  ],
  prompt:
    '16:9のスライドを1枚、「目次型（agenda slide）」で作ってください。いちばん上に小さく「営業部 定例会（2026年10月21日）」、その下に見出し「本日の議題：5つの話を60分で」を1行で置きます。その下に、5つの項目を縦に並べてください。各行は、左に番号の丸、中央に項目名（24ptの太字）、右に所要時間（24ptの太字、灰色）で、行と行の間は細い灰色の線で区切ります。内容は、1「前期の振り返り」10分、2「課題の整理」10分、3「新しい施策の提案」20分、4「質疑応答・意見交換」15分、5「決めたいこと・次の一歩」5分です。いま話している項目は「{{now:t}}」にしてください（強調する場合は、その行の背景を薄いアクセント色にし、左端にアクセント色の太い縦線を付け、番号の丸と時間の文字もアクセント色にする）。所要時間と下の帯は「{{time:t}}」にしてください（表示する場合は、いちばん下に60分全体を5つに分けた横の帯を置き、各区間の幅は所要時間の比にそろえ、区間の中に番号を書く。いま話している区間だけをアクセント色にし、帯の両端の下に「0分」「60分」と書く）。色はアクセント色{{accent:t}}の1色だけで、ほかは白・灰色・黒にします。文字の大きさは、見出し32〜36pt、項目名と時間24pt、番号18pt、「0分」「60分」は13ptです。時間は私が書いたものだけを使い、合計が60分になるようにしてください。',
  howTo: [
    'PowerPointでは、「ホーム」→「新しいスライド」で「タイトルとコンテンツ」を選び、内容の枠に項目を書き、「ホーム」→「段落番号」で番号を付けるのが手早い方法です。時間を右にそろえたいときは、項目名と時間の間にTabキーを入れ、ルーラー（「表示」→「ルーラー」）の右端に「右揃えタブ」を設定します。いまの位置を示すには、章ごとに同じ目次スライドを複製し、その章の行だけを色付きの図形で強調します。長い資料なら、「挿入」→「ズーム」→「セクション ズーム」で、目次の項目から各章へ飛ぶこともできます。',
    'Googleスライドでも、「レイアウト」から「タイトルと本文」を選び、本文の枠に番号付きリスト（ツールバーのボタン）で項目を書きます。時間を右にそろえたいときは、「挿入」→「表」で2列の表を作り、右の列を右揃えにして、表の線を消すと崩れません。各項目をその章のスライドにつなぎたいときは、文字を選んで「挿入」→「リンク」を押し、行き先に「このプレゼンテーションのスライド」を選びます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のHTMLとCSSがそのまま1枚のスライドになります。下の帯の幅は、所要時間（分）をそのまま比にしているので、時間を書き換えるときは、帯の数字（--m）と合計の60分を一緒に直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-now="{{now}}" data-time="{{time}}">
  <p class="kicker">営業部 定例会（2026年10月21日）</p>
  <h1 class="title">本日の議題：5つの話を60分で</h1>

  <div class="list">
    <div class="row i1"><span class="num">1</span><span class="head">前期の振り返り</span><span class="min">10<small>分</small></span></div>
    <div class="row i2"><span class="num">2</span><span class="head">課題の整理</span><span class="min">10<small>分</small></span></div>
    <div class="row i3"><span class="num">3</span><span class="head">新しい施策の提案</span><span class="min">20<small>分</small></span></div>
    <div class="row i4"><span class="num">4</span><span class="head">質疑応答・意見交換</span><span class="min">15<small>分</small></span></div>
    <div class="row i5"><span class="num">5</span><span class="head">決めたいこと・次の一歩</span><span class="min">5<small>分</small></span></div>
  </div>

  <!-- 60分を所要時間の比で分けた帯（--m が分。合計60） -->
  <div class="bar-wrap">
    <div class="bar">
      <span class="seg s1" style="--m: 10">1</span>
      <span class="seg s2" style="--m: 10">2</span>
      <span class="seg s3" style="--m: 20">3</span>
      <span class="seg s4" style="--m: 15">4</span>
      <span class="seg s5" style="--m: 5">5</span>
    </div>
    <div class="scale"><span>0分</span><span>60分</span></div>
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

.list { flex: 1; display: flex; flex-direction: column; justify-content: center; margin: 8px 0; min-height: 0; }
.row { display: grid; grid-template-columns: 40px minmax(0, 1fr) auto; align-items: center; column-gap: 18px; padding: 7px 14px; border-bottom: 1px solid #e3e5ea; }
.row:last-child { border-bottom: 0; }
.num { display: grid; place-items: center; width: 36px; height: 36px; border-radius: 50%; background: #f3f4f7; color: #5a6070; font-size: 18px; font-weight: 800; font-variant-numeric: tabular-nums; }
.head { font-size: 24px; font-weight: 800; line-height: 1.3; }
.min { font-size: 24px; font-weight: 800; font-variant-numeric: tabular-nums; color: #5a6070; }
.min small { margin-left: 2px; font-size: 16px; font-weight: 700; }
.bar-wrap { padding-bottom: 4px; }
.bar { display: flex; gap: 3px; }
.seg { flex: var(--m) 1 0; display: grid; place-items: center; height: 28px; border-radius: 4px; background: #e3e5ea; color: #5a6070; font-size: 15px; font-weight: 800; font-variant-numeric: tabular-nums; }
.scale { display: flex; justify-content: space-between; margin-top: 4px; font-size: 13px; color: #8a8f9c; }

/* いま話す項目（つまみ: いま話す項目） */
.slide[data-now="1"] .i1,
.slide[data-now="2"] .i2,
.slide[data-now="3"] .i3,
.slide[data-now="4"] .i4,
.slide[data-now="5"] .i5 { border-radius: 8px; border-bottom-color: transparent; background: color-mix(in srgb, var(--accent) 8%, #fff); box-shadow: inset 5px 0 0 var(--accent); }
.slide[data-now="1"] .i1 .num,
.slide[data-now="2"] .i2 .num,
.slide[data-now="3"] .i3 .num,
.slide[data-now="4"] .i4 .num,
.slide[data-now="5"] .i5 .num,
.slide[data-now="1"] .s1,
.slide[data-now="2"] .s2,
.slide[data-now="3"] .s3,
.slide[data-now="4"] .s4,
.slide[data-now="5"] .s5 { background: var(--accent); color: #fff; }
.slide[data-now="1"] .i1 .min,
.slide[data-now="2"] .i2 .min,
.slide[data-now="3"] .i3 .min,
.slide[data-now="4"] .i4 .min,
.slide[data-now="5"] .i5 .min { color: var(--accent); }

/* 所要時間と帯（つまみ: 所要時間） */
.slide[data-time="hide"] .min,
.slide[data-time="hide"] .bar-wrap { display: none; }
.slide[data-time="hide"] .row { grid-template-columns: 40px minmax(0, 1fr); }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'now',
      type: 'select',
      label: 'いま話す項目',
      value: '3',
      options: [
        { value: 'none', label: '強調しない' },
        { value: '1', label: '1番目' },
        { value: '2', label: '2番目' },
        { value: '3', label: '3番目' },
        { value: '4', label: '4番目' },
        { value: '5', label: '5番目' },
      ],
    },
    {
      key: 'time',
      type: 'select',
      label: '所要時間と帯',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '項目は3〜6個に絞ります。目次が1枚に収まらないときは、章の名前だけを並べ、細かい項目は各章の最初のスライドに回します。',
    '目次の言葉を、本文の見出しと完全に同じにします。目次では「課題の整理」なのに、本文の見出しが「現状分析」だと、聞き手は同じ話だと気づきません。',
    '所要時間は、合計が持ち時間とぴったり合うように書きます。「10分＋10分＋20分＋15分＋5分＝60分」と検算して、足りない・余る場合は、質疑応答の時間で調整します。',
    '「はじめに」「おわりに」のような中身のない項目を並べないことです。何を話すのか分かる言葉（「前期の振り返り」「決めたいこと」）にします。',
  ],
  similar: [
    { slug: 'section-divider', diff: 'セクション扉型は、章の切り替わりに置く1枚です。目次型は全体の流れを見せ、セクション扉型は「いまここから新しい章」と知らせます。' },
    { slug: 'title-slide', diff: 'タイトルスライドは、資料の題名・日付・発表者を示す表紙です。目次型は、表紙の次に置いて、話の流れを示します。' },
    { slug: 'checklist', diff: 'チェックリスト型は、確認する項目と、済んだかどうかを並べる型です。目次型は、これから話す順番を示します。' },
  ],
  faq: [
    {
      q: '目次とアジェンダは同じものですか？',
      a: 'どちらも、これから話す内容を順番に並べたものです。アジェンダは会議の「議題」を指すことが多く、時間配分や、話す人の名前が一緒に書かれます。目次は、資料の章の並びを指すことが多く、ページ番号を添える場合があります。スライドでは、どちらの言い方でも使えます。',
    },
    {
      q: '目次のスライドは、資料のどこに置けばいいですか？',
      a: '表紙の次の2枚目に置くのが一般的です。長い発表では、章が替わるたびに同じ目次を出して、いまの位置を色で示すと、聞き手が迷いません。短い発表では、目次を省いても構いません。',
    },
    {
      q: '目次に時間配分を入れるのは、なぜですか？',
      a: '聞き手が見通しを持てるうえに、司会者も時間を守りやすいからです。「質疑応答の時間が15分あります」と知らせておけば、途中で質問が出て話が脱線することも防げます。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
