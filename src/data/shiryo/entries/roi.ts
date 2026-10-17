import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'roi',
  no: 91,
  category: 'teian',
  name: 'ROI試算型',
  en: 'ROI estimate',
  aka: ['ROI', '投資対効果', '費用対効果', '投資回収', '回収期間', 'ペイバック'],
  mode: 'static',
  title: 'ROI試算とは？投資対効果を1枚で見せるスライドの作り方【PowerPoint・見本つき】',
  description:
    'かけるお金と戻ってくるお金を比べて「いつ元が取れるか」を見せる「ROI試算型」のスライドを見本で解説。回収期間の出し方、累計の棒グラフの描き方、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: 'かけるお金と戻るお金を比べ、元が取れる時期を示す。',
  what: [
    '左に「かける費用」と「戻ってくる効果」の計算を縦に並べ、右に累計の収支を棒で見せる型です。見本では予約管理システムの導入について、最初に600万円をかけ、毎年300万円の効果から運用費60万円を引いた240万円が積み上がる様子を描いています。棒は0の線から下に伸びる赤字の期間が、年を追うごとに短くなり、3年後に黒字（+120万円）へ変わります。左下の枠には「元が取れるのは2.5年後」を大きく置いています。',
    'ROI（アールオーアイ）は、投資に対してどれだけ戻ってくるかを表す言葉で、日本語では「投資対効果」や「費用対効果」と呼びます。決まりは、計算の式を省かず見せることです。「毎年の効果」の中身（見本では作業時間の削減と予約の取りこぼしの減少）と、運用費を引いた「純効果」まで書いておくと、聞き手が自分で検算できて、数字が信用されます。',
  ],
  when: [
    '新しいシステム・設備・外注の導入を、稟議や予算会議で承認してもらうとき',
    '投資の候補が複数あり、元が取れるまでの期間で比べたいとき',
    '経営層に「いつ黒字になるか」を、1枚で説明したいとき',
    '導入後に、試算と実績を並べて振り返る土台にしたいとき',
  ],
  avoid: [
    '効果の金額を、根拠のある数字で出せないとき（定性的なよい点を並べるメリット・注意点型にする）',
    '費用の中身を細かく説明したいとき（コスト内訳型にする）',
    '複数の案を同じ項目で比べて1つを選んでもらうとき（2カラム比較型・選択肢比較表型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「ROI試算型（ROI estimate）」で作ってください。いちばん上に小さく「予約管理システム導入のROI試算（3年間）」、その下に結論の見出し「導入費は2.5年で回収でき、3年後には120万円の黒字」を1行で置きます。左側に縦に4行の計算を置き、「最初にかける費用 −600万円」「毎年戻ってくる効果 +300万円（作業時間120＋取りこぼし減180）」「毎年かかる運用費 −60万円」、線を太くして「1年あたりの純効果 +240万円」とします。その下に枠を作り、「元が取れるのは」「2.5年後」（40pt以上の太字・アクセント色）「3年間のROI +20%」と書きます。右側には、累計の収支を表す縦棒グラフを置いてください。横に「導入時・1年後・2年後・3年後」の4本、値は順に −600・−360・−120・+120（万円）です。縦の目盛りは−800から200まで200刻みで、0の線を太くし、棒は0の線から上下に値に比例した長さで伸ばします。各棒の先に値を書いてください。棒の色は「{{highlight:t}}」にして、色を付ける棒はアクセント色{{accent:t}}、それ以外は薄い灰色にします。棒の太さは1本ぶんの幅の{{bar:t}}にします。立体・影・グラデーションは使いません。見出しは32〜36pt、金額は24pt前後の太字、項目名は17pt以上。最下部に「※ 作業時間の削減＝年480時間×時給2,500円。金額は税抜。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、右のグラフは「挿入」→「グラフ」→「縦棒」→「集合縦棒」で作ります。表に4年分の累計（−600、−360、−120、120）を入れると、マイナスの棒は0の線から下に伸びます。0の線は、縦軸の目盛りを右クリック→「軸の書式設定」で、軸の「最小値」を−800、「最大値」を200にして、横軸の線を濃くします。伝えたい棒だけ色を変えるには、棒を2回クリックして1本だけ選び、「図形の塗りつぶし」で色を付けます。左の計算は「挿入」→「表」で2列×4行にし、罫線は下線だけにします。',
    'Googleスライドでは、「挿入」→「グラフ」→「縦棒」で作り、スプレッドシートに累計を入れて「更新」を押します。縦軸の範囲は、グラフの編集画面の「カスタマイズ」→「縦軸」で最小値と最大値を決めます。1本だけ色を変えるときは、「系列」の中の「データポイントの書式設定」で年を追加します。計算の式は、図形の四角ではなく「挿入」→「表」で作ると、金額の位置がそろいます。「元が取れるのは2.5年後」の枠だけ、角丸の四角にアクセント色の線を付けます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。棒の長さは「値 ÷ 目盛りの幅（1000）」で決めているので、値を変えるときは目盛りの範囲も見直してください。回収期間は「最初の費用 ÷ 1年あたりの純効果」で出しています（600 ÷ 240＝2.5年）。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-highlight="{{highlight}}">
  <p class="kicker">予約管理システム導入のROI試算（3年間）</p>
  <h1 class="title">導入費は2.5年で回収でき、3年後には120万円の黒字</h1>

  <div class="body">
    <!-- 左: 計算の式 -->
    <div class="calc">
      <div class="line"><span class="lab">最初にかける費用</span><span class="amt">−600<small>万円</small></span></div>
      <div class="line"><span class="lab">毎年戻ってくる効果<em>作業時間120＋取りこぼし減180</em></span><span class="amt">+300<small>万円</small></span></div>
      <div class="line"><span class="lab">毎年かかる運用費</span><span class="amt">−60<small>万円</small></span></div>
      <div class="line net"><span class="lab">1年あたりの純効果</span><span class="amt">+240<small>万円</small></span></div>
      <div class="result">
        <span class="result-lab">元が取れるのは</span>
        <span class="result-num">2.5年後</span>
        <span class="result-sub">3年間のROI +20%</span>
      </div>
    </div>

    <!-- 右: 累計の収支。--p は0の線の位置、--h は棒の長さ（どちらも目盛り全体に対する%） -->
    <div class="chart">
      <p class="chart-title">累計の収支（万円）</p>
      <div class="grid">
        <div class="y">
          <span style="--p: 0">−800</span><span style="--p: 20">−600</span><span style="--p: 40">−400</span>
          <span style="--p: 60">−200</span><span style="--p: 80">0</span><span style="--p: 100">200</span>
        </div>
        <div class="plot">
          <div class="slot"><span class="bar" style="--p: 20; --h: 60"></span><span class="val" style="--p: 20">−600</span></div>
          <div class="slot"><span class="bar" style="--p: 44; --h: 36"></span><span class="val" style="--p: 44">−360</span></div>
          <div class="slot"><span class="bar" style="--p: 68; --h: 12"></span><span class="val" style="--p: 68">−120</span></div>
          <div class="slot plus"><span class="bar" style="--p: 80; --h: 12"></span><span class="val" style="--p: 80; --h: 12">+120</span></div>
        </div>
        <div class="x"><span>導入時</span><span>1年後</span><span>2年後</span><span>3年後</span></div>
      </div>
    </div>
  </div>

  <p class="note">※ 作業時間の削減＝年480時間×時給2,500円。金額は税抜。</p>
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
.body { flex: 1; display: flex; gap: 36px; margin: 16px 0 10px; min-height: 0; }

/* 左: 計算の式 */
.calc { flex: 0 0 340px; display: flex; flex-direction: column; }
.line { flex: 1; display: flex; align-items: center; justify-content: space-between; gap: 10px; border-bottom: 1px solid #e3e5ea; }
.lab { display: flex; flex-direction: column; font-size: 17px; font-weight: 700; }
.lab em { font-style: normal; font-size: 13px; font-weight: 400; color: #5a6070; }
.amt { font-size: 26px; font-weight: 800; font-variant-numeric: tabular-nums; white-space: nowrap; }
.amt small { margin-left: 2px; font-size: 15px; font-weight: 700; color: #5a6070; }
.net { border-bottom: 2px solid #1f2430; }
.result { display: flex; flex-direction: column; margin-top: 10px; padding: 10px 16px; border: 2px solid var(--accent); border-radius: 10px; background: color-mix(in srgb, var(--accent) 8%, #fff); }
.result-lab { font-size: 15px; color: #5a6070; }
.result-num { font-size: 44px; font-weight: 800; line-height: 1.1; color: var(--accent); }
.result-sub { font-size: 16px; font-weight: 700; }

/* 右: 累計の棒。目盛りは−800〜200（幅1000）。位置 = (値 + 800) ÷ 1000 */
.chart { flex: 1; display: flex; flex-direction: column; }
.chart-title { margin: 0 0 6px; font-size: 15px; font-weight: 700; color: #5a6070; }
.grid { flex: 1; display: grid; grid-template-columns: 48px 1fr; grid-template-rows: 1fr 28px; }
.y, .plot { position: relative; }
.y span { position: absolute; right: 8px; bottom: calc(var(--p) * 1%); transform: translateY(50%); font-size: 14px; color: #8a8f9c; }
.plot {
  display: flex;
  background: repeating-linear-gradient(to top, #e3e5ea 0 1px, transparent 1px 20%);
  box-shadow: inset 0 1px #e3e5ea;
}
/* 0の線（下から80%の位置） */
.plot::before { content: ""; position: absolute; left: 0; right: 0; bottom: 80%; height: 2px; background: #8a8f9c; z-index: 1; }
.slot { position: relative; flex: 1; }
.bar { position: absolute; left: 50%; bottom: calc(var(--p) * 1%); width: {{bar}}; height: calc(var(--h) * 1%); margin-left: calc({{bar}} / -2); border-radius: 0 0 4px 4px; background: #c3c8d2; }
.val { position: absolute; left: 0; right: 0; bottom: calc(var(--p) * 1% - 30px); text-align: center; font-size: 20px; font-weight: 800; color: #5a6070; }
.plus .bar { border-radius: 4px 4px 0 0; }
.plus .val { bottom: calc((var(--p) + var(--h)) * 1% + 6px); font-size: 24px; color: #1f2430; }
.x { grid-column: 2; display: flex; align-items: flex-end; }
.x span { flex: 1; text-align: center; font-size: 15px; color: #5a6070; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 色を付ける棒（data-highlight="last" なら黒字になった年だけ、"all" なら全部） */
.slide[data-highlight="last"] .plus .bar { background: var(--accent); }
.slide[data-highlight="last"] .plus .val { color: var(--accent); }
.slide[data-highlight="all"] .bar { background: var(--accent); }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'highlight',
      type: 'select',
      label: '色を付ける棒',
      value: 'last',
      options: [
        { value: 'last', label: '黒字になった年だけ色を付ける' },
        { value: 'all', label: 'すべて同じ色' },
      ],
    },
    { key: 'bar', label: '棒の太さ', min: 30, max: 80, step: 2, value: 52, unit: '%' },
  ],
  cautions: [
    '効果の数字は、根拠を一言添えます。「業務が効率化される」だけでは検算できません。見本のように「年480時間×時給2,500円」と式の形で書くと、聞き手が自分で確かめられ、疑う余地が減ります。',
    '費用は、最初にかかる分と毎年かかる分を分けて書きます。運用費・保守費・更新費を落とすと、回収期間が実際より短く見えてしまいます。後で費用が増えたと分かると、試算全体が信用されなくなります。',
    '効果は控えめに見積もり、うまくいったときの数字は別に添えます。一番よいケースだけを載せると、実績が下回ったときに「約束が違う」となります。「保守的に見ても」と書ける数字にしておくと、承認されやすくなります。',
    '黒字・赤字を色だけで分けません。見本のように0の線を太くし、マイナスの値には「−」を付けます。印刷して白黒になっても読めるようにするためです。',
  ],
  similar: [
    { slug: 'cost-breakdown', diff: 'コスト内訳型は、費用の合計が何にいくらかかるのかを分けて見せる型です。ROI試算型の「かける費用」の中身を説明したいときに添えます。' },
    { slug: 'approval', diff: '決裁依頼型は、決めてほしいこと・費用・期限を1枚で示す型です。ROI試算型で「元が取れる」ことを示したあと、承認をお願いする最後の1枚に使います。' },
    { slug: 'target-actual', diff: '目標・実績型は、目標に対する実績の達成度を見せる型です。導入後に、試算した効果が実際にどれだけ出たかを振り返るときに使います。' },
  ],
  faq: [
    {
      q: 'ROIはどうやって計算しますか？',
      a: '（効果の合計 − 費用の合計）÷ 費用の合計 で出し、%で書きます。見本の3年間なら、効果の累計900万円から運用費の累計180万円を引いた720万円が戻り、そこから最初の費用600万円を引いた120万円が利益です。120 ÷ 600 ＝ 20%となります。期間を決めて書かないと比べられないので、「3年間のROI」のように期間を付けます。',
    },
    {
      q: '回収期間とROIは、どちらを載せればよいですか？',
      a: '両方を載せるのがおすすめです。回収期間は「何年で元が取れるか」が直感的で、経営層に刺さります。ROIは、別の投資案と同じ物差しで比べられます。見本のように、回収期間を大きく、ROIを小さく添える形が使いやすいです。',
    },
    {
      q: 'ROIの資料をPowerPointで作るとき、何から始めればよいですか？',
      a: '先にExcelやGoogleスプレッドシートで、費用と効果を年ごとに並べた表を作ります。累計の行を足すと、元が取れる年が見えてきます。表ができたら、スライドには左に計算の式、右に累計の棒を置きます。AIに頼むときも、この表の数字を渡すと、新しい数字を作られずに済みます。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
