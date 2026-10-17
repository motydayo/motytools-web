import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'heatmap',
  no: 36,
  category: 'data',
  name: 'ヒートマップ型',
  en: 'Heatmap',
  aka: ['ヒートマップ', '色の濃淡表', 'カラースケール表', '曜日×時間帯の表', 'ヒートマップ表'],
  mode: 'static',
  title: 'ヒートマップとは？数の大小を色の濃さで見せる表の作り方と見本【Excel】',
  description:
    '曜日×時間帯の来店者数など、表の数を色の濃さで塗り分ける「ヒートマップ型」のスライドを見本で解説。色の濃淡を1色にする理由、数字を残すコツ、Excel・PowerPoint・Googleスライドでの作り方、AIへの指示とHTMLまで。',
  oneLine: '表の数の大小を、色の濃さで一目で見せる。',
  what: [
    '行と列の表に数字を並べ、その大きさに応じてマスの色を濃くした型です。見本では、カフェの曜日（行）×時間帯（列）の来店者数を塗り分けています。一番濃い土曜12〜14時台（98人）にだけ枠を付け、「来店のピークは土日の12〜14時台」という見出しの結論が、色の固まりだけで読み取れます。右の列には最大値を数字で書いています。',
    '決まりは、色を1色の濃淡だけにすることと、マスの中に数字を残すことです。濃い・薄いは直感で分かりますが、「いくつか」までは色から読めません。見本の下の色の帯（少ない〜多い）も、凡例として必ず付けます。行と列の並びは、時間や曜日のように決まった順にします。',
  ],
  when: [
    '曜日×時間帯、店舗×月など、2つの切り口の表の中で「山」がどこにあるかを見せたいとき',
    '数字の表が大きく、全部読まなくても「濃いところ」だけ目に入れてほしいとき',
    '人員配置・混雑・アクセスなどの、時間による偏りを説明するとき',
  ],
  avoid: [
    '数字を正確に比べさせたいとき（色の差は読み取りにくい。数字を表にして強調する）',
    '推移（時間による変化）だけを見せたいとき（折れ線推移型にする）',
    '行や列が20を超え、マスが小さくて数字を読めなくなるとき（まとめて粗い区切りにする）',
  ],
  prompt:
    '16:9のスライドを1枚、「ヒートマップ型（heatmap）」で作ってください。いちばん上に小さく「曜日×時間帯の来店者数（カフェ・1日平均）」、その下に結論の見出し「来店のピークは土日の12〜14時台」を置きます。左の広い場所に表を置き、行は上から月・火・水・木・金・土・日の7行、列は左から「8〜10時」「10〜12時」「12〜14時」「14〜16時」「16〜18時」「18〜20時」の6列にします。マスの中の数字（人）は、月が22・31・64・28・25・18、火が20・29・61・30・27・19、水が24・33・66・29・26・20、木が21・30・63・27・28・21、金が26・38・79・36・41・44、土が35・72・98・81・66・52、日が31・68・92・74・58・33です。マスの色はアクセント色{{accent:t}}の濃淡だけで塗り、数字が大きいほど濃く（最大98を100%、0を白とし、値に比例させる）、小さいほど薄くします。最大のマス（土曜12〜14時台の98）には黒い枠を付けてください。マスの数字は「{{numbers:t}}」にして、濃いマスでは白い文字にします。マスの間隔は{{gap:t}}pt前後にします。表の下には、「少ない」から「多い」までの色の帯を凡例として付けます。右側の細い列には「98人」を60pt前後の太字・アクセント色で大きく置き、その下に「土曜12〜14時台の来店者数（最多）」、区切り線を挟んで「月〜木の昼は 61〜66人」と書いてください。見出しは32〜36pt、数字と曜日は18pt、時間帯は15pt以上にしてください。下に「※ 2025年4〜9月の営業日の平均。単位は人。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'ExcelやPowerPointでは、いちばん手軽なのは表に「色の濃淡」を付ける方法です。Excelで表を作り、数字の範囲を選んで「ホーム」→「条件付き書式」→「カラースケール」から、白から1色へ変わる2色の組み合わせを選ぶと、数字の大きさに応じて自動で塗り分けられます。そのまま範囲をコピーして、PowerPointに「貼り付け」→「図」で貼ると、スライドになります。PowerPoint内で作るなら「挿入」→「表」で表を作り、マスを選んで「テーブルデザイン」→「塗りつぶし」で1つずつ色を付けます。',
    'Googleスライドでは、スプレッドシートで作ります。数字の範囲を選んで「表示形式」→「条件付き書式」→「カラースケール」を選び、最小値を白、最大値をアクセント色にします。範囲をコピーして、スライドに貼り付けます（貼るときの選択肢は「リンクしない」にすると、スライドの中で固定されます）。色を塗り分けるだけなら、スライドの表でマスを選び、「塗りつぶしの色」を1つずつ変えます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。色の濃さは「値 ÷ 最大値（98）」から自動で決まる書き方になっているので、数字を変えるときは各マスの「--v」の数字を直し、最大値を変えたときはCSSの「98」も直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-numbers="{{numbers}}">
  <p class="kicker">曜日×時間帯の来店者数（カフェ・1日平均）</p>
  <h1 class="title">来店のピークは土日の12〜14時台</h1>

  <div class="body">
    <div class="chart">
      <!-- 表。--v は来店者数（人）。色の濃さ = 値 ÷ 98。濃いマスには dark、最大のマスには max を付ける -->
      <div class="grid">
        <span></span>
        <span class="col">8〜10時</span><span class="col">10〜12時</span><span class="col">12〜14時</span>
        <span class="col">14〜16時</span><span class="col">16〜18時</span><span class="col">18〜20時</span>
        <span class="day">月</span><span class="cell" style="--v: 22">22</span><span class="cell" style="--v: 31">31</span><span class="cell dark" style="--v: 64">64</span><span class="cell" style="--v: 28">28</span><span class="cell" style="--v: 25">25</span><span class="cell" style="--v: 18">18</span>
        <span class="day">火</span><span class="cell" style="--v: 20">20</span><span class="cell" style="--v: 29">29</span><span class="cell dark" style="--v: 61">61</span><span class="cell" style="--v: 30">30</span><span class="cell" style="--v: 27">27</span><span class="cell" style="--v: 19">19</span>
        <span class="day">水</span><span class="cell" style="--v: 24">24</span><span class="cell" style="--v: 33">33</span><span class="cell dark" style="--v: 66">66</span><span class="cell" style="--v: 29">29</span><span class="cell" style="--v: 26">26</span><span class="cell" style="--v: 20">20</span>
        <span class="day">木</span><span class="cell" style="--v: 21">21</span><span class="cell" style="--v: 30">30</span><span class="cell dark" style="--v: 63">63</span><span class="cell" style="--v: 27">27</span><span class="cell" style="--v: 28">28</span><span class="cell" style="--v: 21">21</span>
        <span class="day">金</span><span class="cell" style="--v: 26">26</span><span class="cell" style="--v: 38">38</span><span class="cell dark" style="--v: 79">79</span><span class="cell" style="--v: 36">36</span><span class="cell" style="--v: 41">41</span><span class="cell" style="--v: 44">44</span>
        <span class="day">土</span><span class="cell" style="--v: 35">35</span><span class="cell dark" style="--v: 72">72</span><span class="cell dark max" style="--v: 98">98</span><span class="cell dark" style="--v: 81">81</span><span class="cell dark" style="--v: 66">66</span><span class="cell" style="--v: 52">52</span>
        <span class="day">日</span><span class="cell" style="--v: 31">31</span><span class="cell dark" style="--v: 68">68</span><span class="cell dark" style="--v: 92">92</span><span class="cell dark" style="--v: 74">74</span><span class="cell dark" style="--v: 58">58</span><span class="cell" style="--v: 33">33</span>
      </div>
      <div class="scale"><span>少ない</span><i class="bar"></i><span>多い</span></div>
    </div>

    <div class="side">
      <span class="big">98人</span>
      <span class="big-label">土曜12〜14時台の来店者数（最多）</span>
      <span class="sub">月〜木の昼は 61〜66人</span>
    </div>
  </div>

  <p class="note">※ 2025年4〜9月の営業日の平均。単位は人。</p>
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
.body { flex: 1; display: flex; gap: 36px; margin: 14px 0 8px; min-height: 0; }

.chart { flex: 1; display: flex; flex-direction: column; min-width: 0; }
.grid {
  flex: 1; display: grid;
  grid-template-columns: 40px repeat(6, minmax(0, 1fr));
  grid-template-rows: 34px repeat(7, minmax(0, 1fr));
  gap: {{gap}}px;
  min-height: 0;
}
.col { align-self: end; padding-bottom: 6px; text-align: center; font-size: 15px; font-weight: 700; color: #5a6070; white-space: nowrap; }
.day { align-self: center; font-size: 18px; font-weight: 700; }
.cell {
  display: flex; align-items: center; justify-content: center;
  border-radius: 4px;
  /* 色の濃さ = 値 ÷ 最大値（98）。アクセント色を白と混ぜる割合で決める */
  background: color-mix(in srgb, var(--accent) calc(var(--v) / 98 * 100%), #fff);
  font-size: 18px; font-weight: 700; color: #1f2430; font-variant-numeric: tabular-nums;
}
.cell.dark { color: #fff; }
.cell.max { outline: 3px solid #1f2430; outline-offset: -1px; }

/* マスの数字（data-numbers="hide" なら数字を消して色だけにする） */
.slide[data-numbers="hide"] .cell { color: transparent; }

.scale { display: flex; align-items: center; justify-content: flex-end; gap: 10px; height: 26px; margin-top: 6px; font-size: 14px; color: #5a6070; }
.bar { display: block; width: 160px; height: 12px; border-radius: 3px; background: linear-gradient(to right, #fff, var(--accent)); }

.side { flex: 0 0 216px; display: flex; flex-direction: column; justify-content: center; gap: 6px; padding-left: 20px; border-left: 1px solid #e3e5ea; }
.big { font-size: 60px; font-weight: 800; line-height: 1.05; color: var(--accent); }
.big-label { font-size: 16px; color: #5a6070; }
.sub { margin-top: 14px; padding-top: 12px; border-top: 1px solid #e3e5ea; font-size: 16px; font-weight: 800; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'numbers',
      type: 'select',
      label: 'マスの数字',
      value: 'show',
      options: [
        { value: 'show', label: '数字を書く' },
        { value: 'hide', label: '書かない（色だけ）' },
      ],
    },
    { key: 'gap', label: 'マスの間隔', min: 0, max: 8, step: 1, value: 3, unit: '' },
  ],
  cautions: [
    '色は1色の濃淡だけにします。赤・黄・緑の信号色を使うと、色そのものに「良い・悪い」の意味が付いてしまい、単なる多い少ないを見せたいのに評価に見えます。色の見分けにくい人にも不親切です。',
    'マスの中に数字を残します。色だけだと「だいたい」しか分からず、会議で「ここはいくつ？」と聞かれて答えられません。数字が入らないほど細かい表は、スライドではなく配布資料にします。',
    '濃さの基準（何が最大の色か）を、凡例の帯で示します。「少ない〜多い」の帯がないと、聞き手は薄いマスが「少ない」のか「ほぼゼロ」なのか分かりません。',
    '行と列を、曜日や時間のように自然な順に並べます。大きい順に並べ替えると、表としての読み方が崩れます。目立たせたいところは、並べ替えではなく枠で示します。',
  ],
  similar: [
    { slug: 'cohort', diff: 'コホート分析型は、始めた時期ごとの「続き具合」を表で比べる型で、ヒートマップの色づけがよく使われます。継続率を見せたいときはこちらです。' },
    { slug: 'option-table', diff: '選択肢比較表型は、案を表で比べる型です。数の大小ではなく、各案の特徴や可否を文字で比べたいときに使います。' },
    { slug: 'map-distribution', diff: '地図分布型は、地域ごとの数を地図の上の色の濃さで見せる型です。場所の位置関係が大切なときに使います。' },
  ],
  faq: [
    {
      q: 'Excelでヒートマップを作るには？',
      a: '数字の範囲を選んで、「ホーム」→「条件付き書式」→「カラースケール」から、2色の組み合わせ（白から1色など）を選びます。数字の大きさに応じて自動で塗り分けられます。色が気に入らないときは、「条件付き書式」→「ルールの管理」から色を変えられます。',
    },
    {
      q: 'ヒートマップの色は何色がよいですか？',
      a: '資料のアクセント色1色の濃淡がおすすめです。白から濃い色へ変わるので、濃いほど大きいと直感で伝わります。信号色（赤黄緑）は評価の意味が付くので、良し悪しを表すときだけにします。',
    },
    {
      q: 'ヒートマップをスライドに貼るときのコツは？',
      a: 'マスの数字が15pt以上で読める大きさに、行と列の数を絞ります。目安は7行×6列くらいまでです。ExcelからPowerPointに貼るときは「図」として貼ると、表示が崩れません。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
