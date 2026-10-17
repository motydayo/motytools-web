import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'timeline',
  no: 5,
  category: 'kousei',
  name: 'タイムライン型',
  en: 'Timeline',
  aka: ['年表', '時系列', '沿革', 'スケジュール図', '経緯の図'],
  mode: 'static',
  title: 'タイムライン型とは？出来事を時間順に並べるスライドの作り方【見本つき】',
  description:
    '出来事を時間の順に1本の線へ並べる「タイムライン型」のスライドを見本で解説。いまの位置の示し方、節目の絞り方、PowerPointとGoogleスライドでの作り方、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '出来事を時間の順に1本の線へ並べ、いまの位置を示す。',
  what: [
    '横に1本の線を引き、日付の順に節目を並べる型です。見本では新店舗のオープンまでを、出店契約・内装工事・スタッフ研修・試験営業・グランドオープンの5つの節目で示しています。各節目は「日付・点・名前・一言」の同じ形で、終わったものは黒い点、これからのものは白抜きの点、いまの位置は赤い目印です。最後のオープンだけをアクセント色で強調しています。',
    'この型のよさは、全体の流れと、いま自分たちがどこにいるかが同時に分かることです。決まりごとは、節目を5〜7つに絞ること。細かい作業まで並べると線がつぶれるので、会議で口に出す節目だけを残し、細かい作業は工程表（ガントチャート型）に任せます。',
  ],
  when: [
    'プロジェクトや新店舗のオープンまでの道のりを、関係者に共有したいとき',
    '会社や商品の沿革（これまでの歩み）を、1枚で見せたいとき',
    '事故やトラブルの経緯を、起きた順に並べて報告するとき',
    '「いまどこまで進んでいるか」を、節目の並びの中に示したいとき',
  ],
  avoid: [
    '節目が10個を超え、文字が読めない大きさになるとき（主な節目だけにするか、ロードマップ型で期や四半期ごとにまとめる）',
    '作業の期間の長さや重なりを見せたいとき（ガントチャート型にする）',
    '節目に前後関係はあるが、日付が決まっていないとき（フロー型にして、日付を外す）',
  ],
  prompt:
    '16:9のスライドを1枚、「タイムライン型（timeline）」で作ってください。いちばん上に小さく「新店舗オープンまでの流れ（2026年）」、その下に結論の見出し「ミナト珈琲 横浜店は、10月10日にオープンします」を置きます。その下に、横一本の太い線を引き、5つの節目を同じ間隔で並べてください。各節目は、線の上に日付、線の上に丸い点、線の下に名前と一言、の順です。内容は、4月20日「出店契約」横浜駅西口の物件を契約、6月1日「内装工事」約6週間。7月中旬に引き渡し、7月27日「スタッフ研修」新しく採用した8人が研修を開始、9月20日「試験営業」招待客100人で通し練習、10月10日「グランドオープン」初月の売上目標は900万円。終わった節目（最初の3つ）の点は黒く塗り、これからの2つは白抜きの点にします。いまの目印は「{{today:t}}」にしてください（表示する場合は、3つ目と4つ目の間に赤い縦の短い線と、その上に赤い文字で「いま 8/25」と書き、線も3つ目までを黒くする）。強調のしかたは「{{focus:t}}」にしてください（最後の節目の日付・名前・点をアクセント色にして点を大きくする）。色はアクセント色{{accent:t}}の1色と、注意を示す赤だけで、ほかは白・灰色・黒です。文字の大きさは、見出し32〜36pt、日付18pt、節目の名前20pt、一言16pt、注記13pt。最下部に「※ 間隔は日付に比例していません。いまは3つ目と4つ目の間です。」と入れてください。日付と数字は私が書いたものだけを使い、新しい予定を足さないでください。',
  howTo: [
    'PowerPointでいちばん手早いのは、「挿入」→「SmartArt」→「手順」の中にある「基本タイムライン」を選び、節目の文字を入れていく方法です。見本のように細かく整えたいときは、「挿入」→「図形」→「線」で横線を引き、太さを4pt、色を薄い灰色にします。節目の点は「挿入」→「図形」→「楕円」を、Shiftキーを押しながらドラッグして正円にし、5つ置きます。5つを選び「図形の書式」→「配置」→「左右に整列」で等間隔にします。日付と名前は「テキスト ボックス」を点の上下に置き、同じく整列させます。',
    'Googleスライドでは、「挿入」→「図表」→「タイムライン」を選ぶと、節目の並び方の型がいくつか出てきます。見本のように自分で作る場合は、「挿入」→「線」で横線を引き、「挿入」→「図形」→「図形」→「楕円」で点を5つ置いて、「配置」→「均等に配置」→「横方向」で間隔をそろえます。終わった節目と、これからの節目で点の塗りを変えるだけで、進み具合が伝わります。',
    'AIにHTMLでスライドを作ってもらう場合は、下のHTMLとCSSがそのまま1枚のスライドになります。節目は5列のグリッドで並べているので、文字を書き換えても点の位置はそろいます。節目の数を変えるときは、列の数（5）と線の長さの割合を一緒に直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-today="{{today}}">
  <p class="kicker">新店舗オープンまでの流れ（2026年）</p>
  <h1 class="title">ミナト珈琲 横浜店は、10月10日にオープンします</h1>

  <div class="track">
    <div class="inner">
      <span class="line"></span>
      <span class="done"></span>
      <span class="now"><b>いま 8/25</b><i></i></span>

      <div class="ev is-done"><span class="date">4月20日</span><span class="dot"></span><span class="head">出店契約</span><span class="body">横浜駅西口の物件を契約</span></div>
      <div class="ev is-done"><span class="date">6月1日</span><span class="dot"></span><span class="head">内装工事</span><span class="body">約6週間。7月中旬に引き渡し</span></div>
      <div class="ev is-done"><span class="date">7月27日</span><span class="dot"></span><span class="head">スタッフ研修</span><span class="body">新しく採用した8人が研修を開始</span></div>
      <div class="ev"><span class="date">9月20日</span><span class="dot"></span><span class="head">試験営業</span><span class="body">招待客100人で通し練習</span></div>
      <div class="ev"><span class="date">10月10日</span><span class="dot"></span><span class="head">グランドオープン</span><span class="body">初月の売上目標は900万円</span></div>
    </div>
  </div>

  <p class="note">※ 間隔は日付に比例していません。いまは3つ目と4つ目の間です。</p>
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

.track { flex: 1; display: flex; align-items: center; margin: 12px 0; min-height: 0; }
.inner { position: relative; width: 100%; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); }
/* 線は1つ目の中心から5つ目の中心まで。日付の行(34px)と点の行(24px)の真ん中に通す */
.line { position: absolute; left: 10%; right: 10%; top: 44px; height: 4px; border-radius: 2px; background: #e3e5ea; }
.done { position: absolute; left: 10%; width: 50%; top: 44px; height: 4px; border-radius: 2px; background: #1f2430; }
.now { position: absolute; left: 60%; top: 0; width: 0; }
.now b { position: absolute; left: 0; top: 4px; transform: translateX(-50%); white-space: nowrap; font-size: 15px; font-weight: 800; color: #d0453a; }
.now i { position: absolute; left: -1px; top: 32px; width: 2px; height: 32px; background: #d0453a; }
.ev { display: flex; flex-direction: column; align-items: center; padding: 0 8px; text-align: center; }
.date { height: 34px; display: flex; align-items: center; font-size: 18px; font-weight: 800; font-variant-numeric: tabular-nums; }
.dot { position: relative; z-index: 1; box-sizing: border-box; width: 24px; height: 24px; margin-bottom: 14px; border: 4px solid #8a8f9c; border-radius: 50%; background: #fff; }
.ev.is-done .dot { border-color: #1f2430; background: #1f2430; }
.head { font-size: 20px; font-weight: 800; line-height: 1.3; }
.body { margin-top: 6px; font-size: 16px; line-height: 1.5; color: #5a6070; }

/* いまの目印（つまみ: いまの目印）。出さないときは点をすべて同じ濃さにそろえる */
.slide[data-today="hide"] .now,
.slide[data-today="hide"] .done { display: none; }
.slide[data-today="hide"] .dot { border-color: #1f2430; background: #1f2430; }

/* 最後の節目を強調（つまみ: 強調） */
.slide[data-focus="last"] .ev:last-child .date,
.slide[data-focus="last"] .ev:last-child .head { color: var(--accent); }
.slide[data-focus="last"] .ev:last-child .dot { border-color: var(--accent); background: var(--accent); box-shadow: 0 0 0 6px color-mix(in srgb, var(--accent) 22%, #fff); }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調',
      value: 'last',
      options: [
        { value: 'last', label: '最後の節目を強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    {
      key: 'today',
      type: 'select',
      label: 'いまの目印',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '節目は5〜7つに絞ります。「資料を作る」「上司に見せる」のような細かい作業まで並べると、線がつぶれて文字が読めなくなります。会議で名前を呼ぶ節目だけを残します。',
    '間隔を日付に比例させるかどうかを決めておきます。比例させると本物の長さが伝わりますが、節目が近いと文字が重なります。見本のように等間隔にするときは、「間隔は日付に比例していません」と注記しておくと、長さを誤解されません。',
    '日付の書き方をそろえます。「4/20」「6月1日」「2026.7.27」のように混ぜると、読み手が引っかかります。年をまたぐ場合は、節目の日付に年を添えます。',
    '「いま」の位置を示さないと、過去の振り返りなのか、これからの予定なのかが分かりません。終わったものと、これからのものを点の塗りで分け、いまを赤などの目印で示します。',
  ],
  similar: [
    { slug: 'gantt', diff: 'ガントチャート型は、作業の期間の長さと重なりを横の棒で見せる型です。タイムライン型は、日付の1点に起きる節目を並べます。' },
    { slug: 'roadmap', diff: 'ロードマップ型は、年や四半期ごとの大まかな計画を見せる型です。タイムライン型は、日付がはっきりした節目を時間の順に並べます。' },
    { slug: 'milestone', diff: 'マイルストーン型は、節目の日と、その日に決まることを時間軸に並べる型です。タイムライン型は、出来事や経緯の流れそのものを見せます。' },
  ],
  faq: [
    {
      q: 'タイムラインとガントチャートの違いは何ですか？',
      a: 'タイムラインは「いつ何が起きるか」を点で並べる図で、ガントチャートは「いつからいつまで何をやるか」を棒で並べる図です。節目の流れを伝えたいならタイムライン、作業の重なりや期間の長さを管理したいならガントチャートを使います。',
    },
    {
      q: '縦向きのタイムラインにしてもいいですか？',
      a: '節目の説明が長いときや、スマホの画面で見せる資料では、縦向きのほうが読みやすくなります。ただし会議で映すスライドは横長なので、横向きの方が節目の数を多く並べられます。1つの資料の中では向きをそろえるのが基本です。',
    },
    {
      q: 'PowerPointやGoogleスライドでタイムラインを手早く作るには？',
      a: 'PowerPointは「挿入」→「SmartArt」→「手順」の「基本タイムライン」、Googleスライドは「挿入」→「図表」→「タイムライン」を使うと、型から始められます。色や位置を細かく整えたいときは、線と丸と文字を自分で置く方が早く直せます。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
