import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'gantt',
  no: 52,
  category: 'keikaku',
  name: 'ガントチャート型',
  en: 'Gantt chart',
  aka: ['工程表', 'スケジュール表', '線表', 'バーチャート工程表', 'WBSの線表'],
  mode: 'static',
  title: 'ガントチャートとは？工程表をスライド1枚で見せる作り方【PowerPoint・Googleスライド】',
  description:
    '作業を縦に並べ、期間を横の棒で示す「ガントチャート型」のスライドを見本で解説。今日の線・進み具合の塗り・節目（マイルストーン）の入れ方、PowerPointとGoogleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '作業を縦に並べ、いつからいつまでかを横の棒で示す工程表。',
  what: [
    '左に作業の名前を縦に並べ、右の横長の時間軸に「いつからいつまでやるか」を棒で引く型です。見本では新しいアプリの公開までの5つの作業を、4月から9月まで半月刻みで並べています。赤い点線が今日（7月1日）、棒の濃い部分が終わった作業の割合、いちばん下のひし形が公開日という節目です。',
    'ガントチャートのよさは、作業の重なりと順番がひと目で分かることです。「デザインと開発が5月後半から重なっている」「テストは開発の終わりと半月だけ重なる」といった関係が、文章で説明しなくても伝わります。スライドでは細かい作業を全部並べず、会議で話す粒度の5〜8行に絞るのがこつです。',
  ],
  when: [
    'プロジェクトの始まりに、全体の流れと公開日までの道のりを関係者に共有したいとき',
    '定例会議で「今どこまで進んでいて、遅れはないか」を報告するとき',
    'イベント・引っ越し・システムの入れ替えなど、いくつかの作業が重なりながら進む予定を見せたいとき',
    '提案書で「契約から何か月で使えるようになるか」を示したいとき',
  ],
  avoid: [
    '作業が20行を超え、スライドでは文字が読めない大きさになるとき（細かい工程表は別の資料として配り、スライドには主な作業だけを載せる）',
    '日付よりも順番だけが大事で、期間を見せる必要がないとき（フロー型の方がすっきりする）',
    '何年もかかる長い計画を大まかに見せたいとき（ロードマップ型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「ガントチャート型（Gantt chart）」で作ってください。いちばん上に小さく「新アプリ「ハレノート」公開までの工程」、その下に結論の見出し「9月30日の公開に向け、予定どおり進行中」を置きます。その下に工程表を置き、左の列に作業名、右に4月〜9月の時間軸（1か月を半月ずつ2マスに分け、全部で12マス）を並べ、月の境目に細い灰色の縦線を引いてください。作業と期間は、要件定義＝4月前半〜5月前半、デザイン＝5月前半〜6月前半、開発＝5月後半〜8月前半、テスト＝8月前半〜9月前半、公開準備＝9月前半〜9月後半です。棒はアクセント色{{accent:t}}の角が少し丸い横長の棒にします。進み具合の塗りは「{{progress:t}}」にしてください（表示するときは、棒全体を薄いアクセント色にし、終わった割合だけを濃く塗って、棒の右に数字を書く。要件定義100%・デザイン100%・開発60%・テスト0%・公開準備0%）。今日の線は「{{today:t}}」にしてください（表示するときは、7月1日の位置に赤い点線の縦線を引き、上に「今日 7/1」と書く）。いちばん下の行は「公開」として、9月30日の位置に黒いひし形を置き、「9/30」と添えます。作業名は18pt以上、月は15pt以上、見出しは32〜36pt。最下部に「※ 1マスは半月。濃い部分は終わった作業の割合（7月1日時点）。」と注記を入れてください。予定は私が書いたものだけを使ってください。',
  howTo: [
    'PowerPointでは、まず「挿入」→「表」で13列×7行の表を作り、1列目を作業名、残りの12列を半月ずつのマスにします（1行目は月の名前で、2マスずつ「セルの結合」）。表の罫線は月の境目の縦線だけを残して薄い灰色にします。棒は表のセルを塗るのではなく、「挿入」→「図形」→「四角形: 角を丸くする」を表の上に重ねて置くと、長さを後から直しやすくなります。進み具合は、同じ棒を2本重ね、下を薄い色・上を濃い色にして上の棒の長さで表します。今日の線は「図形」→「直線」を「図形の枠線」→「実線/点線」で点線にし、節目は「図形」→「ひし形」です。',
    'Googleスライドでも作り方は同じで、「挿入」→「表」でマス目を作り、「挿入」→「図形」→「図形」から角丸四角形とひし形を重ねます。棒を置くときは「表示」→「スナップ」→「ガイドにスナップ」をオンにすると、マスの線にそろえやすくなります。作業が多いときや日付が毎週変わるときは、Excelやスプレッドシートのガントチャートのテンプレートで作り、スライドには必要な行だけを図として貼る方が手早く直せます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。棒は「何マス目から何マス目まで」（grid-column）で置いているので、予定が変わったら数字を書き換えるだけで直せます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-today="{{today}}" data-progress="{{progress}}">
  <p class="kicker">新アプリ「ハレノート」公開までの工程</p>
  <h1 class="title">9月30日の公開に向け、予定どおり進行中</h1>

  <!-- 1列目が作業名、2〜13列目が4月〜9月の半月ずつ（12マス） -->
  <div class="table">
    <span class="month" style="grid-column: 2 / span 2">4月</span>
    <span class="month" style="grid-column: 4 / span 2">5月</span>
    <span class="month" style="grid-column: 6 / span 2">6月</span>
    <span class="month" style="grid-column: 8 / span 2">7月</span>
    <span class="month" style="grid-column: 10 / span 2">8月</span>
    <span class="month" style="grid-column: 12 / span 2">9月</span>

    <div class="lines"><span class="today"><b>今日 7/1</b></span></div>

    <!-- 棒は「始まりのマス+1 / 終わりのマス+2」。--p は進み具合（%） -->
    <span class="name" style="grid-row: 2">要件定義</span>
    <span class="cell" style="grid-row: 2; grid-column: 2 / 5; --p: 100"><span class="bar"><i></i></span><span class="pct">100%</span></span>
    <span class="name" style="grid-row: 3">デザイン</span>
    <span class="cell" style="grid-row: 3; grid-column: 4 / 7; --p: 100"><span class="bar"><i></i></span><span class="pct">100%</span></span>
    <span class="name" style="grid-row: 4">開発</span>
    <span class="cell" style="grid-row: 4; grid-column: 5 / 11; --p: 60"><span class="bar"><i></i></span><span class="pct">60%</span></span>
    <span class="name" style="grid-row: 5">テスト</span>
    <span class="cell" style="grid-row: 5; grid-column: 10 / 13; --p: 0"><span class="bar"><i></i></span><span class="pct">0%</span></span>
    <span class="name" style="grid-row: 6">公開準備</span>
    <span class="cell" style="grid-row: 6; grid-column: 12 / 14; --p: 0"><span class="bar"><i></i></span><span class="pct">0%</span></span>

    <span class="name ms-name" style="grid-row: 7">公開</span>
    <span class="ms" style="grid-row: 7; grid-column: 13"><i></i><b>9/30</b></span>
  </div>

  <p class="note">※ 1マスは半月。濃い部分は終わった作業の割合（7月1日時点）。</p>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* 幅960px×高さ540px（PowerPointの16:9と同じ比率） */
.slide {
  --accent: {{accent}};
  --today: 6; /* 今日の位置（12マス中の何マス目の終わりか） */
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

.table {
  flex: 1;
  display: grid;
  grid-template-columns: 150px repeat(12, minmax(0, 1fr));
  grid-template-rows: 40px;
  grid-auto-rows: 1fr;
  margin: 18px 0 10px;
}
.month { grid-row: 1; align-self: end; padding: 0 0 8px 8px; border-left: 1px solid #e3e5ea; font-size: 15px; font-weight: 700; color: #5a6070; }
.name { grid-column: 1; align-self: center; font-size: 18px; font-weight: 700; }
.ms-name { color: #5a6070; }

/* 月の境目の線と今日の線 */
.lines {
  grid-row: 2 / 8;
  grid-column: 2 / -1;
  position: relative;
  border-top: 1px solid #e3e5ea;
  box-shadow: inset -1px 0 #e3e5ea;
  background: linear-gradient(to right, #e3e5ea 1px, transparent 1px) 0 0 / calc(100% / 6) 100%;
}
.today { position: absolute; top: -40px; bottom: 0; left: calc(var(--today) / 12 * 100%); border-left: 2px dashed #d0453a; }
.today b { position: absolute; top: 0; right: 4px; padding: 0 8px; border-radius: 4px; background: #d0453a; color: #fff; font-size: 13px; line-height: 22px; white-space: nowrap; }
.slide[data-today="hide"] .today { display: none; }

/* 作業の棒 */
.cell { position: relative; z-index: 1; display: flex; align-items: center; padding: 0 2px; }
.bar { position: relative; width: 100%; height: 24px; border-radius: 5px; background: var(--accent); overflow: hidden; }
.bar i { display: none; position: absolute; inset: 0 auto 0 0; width: calc(var(--p) * 1%); background: var(--accent); }
.pct { display: none; position: absolute; left: calc(100% + 8px); font-size: 14px; font-weight: 700; color: #5a6070; white-space: nowrap; }
/* 進み具合（data-progress="on"）: 棒は薄く、終わった割合だけ濃く */
.slide[data-progress="on"] .bar { background: color-mix(in srgb, var(--accent) 22%, #fff); }
.slide[data-progress="on"] .bar i,
.slide[data-progress="on"] .pct { display: block; }

/* 節目（マイルストーン）のひし形 */
.ms { position: relative; z-index: 1; align-self: center; justify-self: end; height: 24px; }
.ms i { position: absolute; top: 50%; right: 0; width: 18px; height: 18px; background: #1f2430; transform: translate(50%, -50%) rotate(45deg); }
.ms b { position: absolute; top: 50%; right: 18px; transform: translateY(-50%); font-size: 16px; white-space: nowrap; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'progress',
      type: 'select',
      label: '進み具合の塗り',
      value: 'on',
      options: [
        { value: 'on', label: '表示する' },
        { value: 'off', label: '表示しない' },
      ],
    },
    {
      key: 'today',
      type: 'select',
      label: '今日の線',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '時間の刻みは、全体の長さに合わせて1種類に決めます。半年なら半月か1か月、1か月なら1週間か1日。刻みが細かすぎると棒が細切れになり、スライドでは読めません。',
    '作業名は「何をするか」が分かる短い言葉にし、行は5〜8行に絞ります。担当者や細かい作業まで載せたい場合は、表計算ソフトの工程表を別に配り、スライドには主な作業だけを載せます。',
    '報告の資料では、今日の線と進み具合がないと「予定」なのか「実績」なのかが分かりません。予定どおりか遅れているかを見出しに1文で書き、遅れている作業だけ色を変える（赤など）と伝わります。',
    '棒を何色にも塗り分けないようにします。作業ごとに色を変えると、どれが大事なのか分からなくなります。色は1色にして、強調したい作業や遅れだけ別の色にします。',
  ],
  similar: [
    { slug: 'roadmap', diff: 'ロードマップ型は、年や四半期の単位で大まかな方向と目標を並べる型です。ガントチャート型は、作業ごとの期間と重なりを日付の精度で見せます。' },
    { slug: 'milestone', diff: 'マイルストーン型は、期間ではなく「節目の日」だけを時間軸に並べる型です。作業の長さより、いつまでに何が決まるかを見せたいときに使います。' },
    { slug: 'timeline', diff: 'タイムライン型は、出来事を時間の順に1本の線の上に並べる型です。過去の経緯や沿革を見せるのに向き、作業の重なりは表せません。' },
  ],
  faq: [
    {
      q: 'ガントチャートとWBSは何が違いますか？',
      a: 'WBS（作業分解構成図。プロジェクトの作業を細かく分けて一覧にしたもの）は「何をやるか」の一覧で、ガントチャートは「それをいつやるか」を棒で示した表です。ふつうはWBSで作業を洗い出してから、その作業をガントチャートに並べます。',
    },
    {
      q: 'PowerPointにガントチャートを作る機能はありますか？',
      a: '専用の機能はありません。表と図形（角丸四角形）を組み合わせて作るか、Excelでガントチャートを作って貼り付けます。SmartArt（図表を組み立てる機能）のタイムラインは出来事を並べるだけで、期間の長さを棒で表せないので、表と図形で作るのが確実です。',
    },
    {
      q: '工程表と線表とガントチャートは同じものですか？',
      a: 'ほぼ同じものを指します。工程表は予定を示す表全般の呼び名で、そのうち横棒で期間を示すものを線表やガントチャートと呼びます。建設業では「バーチャート工程表」と呼ぶことも多く、AIに頼むときは「ガントチャート（Gantt chart）」と書くと確実です。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
