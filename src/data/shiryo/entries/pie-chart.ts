import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'pie-chart',
  no: 31,
  category: 'data',
  name: '円グラフ型',
  en: 'Pie chart',
  aka: ['円グラフ', 'パイチャート', '構成比グラフ', '割合グラフ', 'シェアの円グラフ'],
  mode: 'static',
  title: '円グラフとは？割合を伝えるスライドの作り方と見本【PowerPoint】',
  description:
    '問い合わせの種類別など、全体に占める割合を円で見せる「円グラフ型」のスライドを見本で解説。12時から時計回りに大きい順に並べる決まり、項目を5つ以内にするコツ、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまで。',
  oneLine: '全体を100%として、項目ごとの割合を円の切れ目で見せる。',
  what: [
    '円全体を100%として、項目ごとの割合を扇形の大きさで見せる型です。見本では年間1,240件の問い合わせを、使い方・料金・請求・不具合など5つの種類に分けています。12時の位置から時計回りに大きい順に並べ、いちばん大きい「使い方」だけにアクセント色を付け、右の凡例には割合を大きな数字で書いています。',
    '円グラフが得意なのは「全体の中で、この項目が大きいか小さいか」という大づかみの比較です。決まりは、項目を5つ以内にすること、12時から時計回りに大きい順に並べること、割合の合計を100%にすることです。扇形の角度は正確に比べにくいので、数字は必ず書きます。',
  ],
  when: [
    '売上・問い合わせ・アンケートの回答など、1つの全体の中の内訳を一目で見せたいとき',
    '「半分以上が〜」「6割が〜」のように、大きな項目の存在感を印象づけたいとき',
    '項目が3〜5個で、割合の差がはっきりしているデータを見せるとき',
  ],
  avoid: [
    '項目が6つ以上あり、細い扇形が増えて見分けがつかないとき（横棒ランキング型にする）',
    '割合が近い項目どうし（たとえば23%と25%）の違いを比べたいとき（横棒ランキング型にする）',
    '複数のグループで割合を並べて比べたいとき（100%積み上げ型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「円グラフ型（pie chart）」で作ってください。いちばん上に小さく「問い合わせの種類別の割合（2025年度）」、その下に結論の見出し「問い合わせの6割超が使い方と料金・請求」を置きます。左に円グラフを置き、右に凡例を縦に並べます。割合は、使い方38%・料金・請求24%・不具合18%・契約の変更12%・その他8%（合計100%）で、12時の位置から時計回りにこの順に並べてください。扇形の間には細い白い隙間を入れます。色は「{{focus:t}}」にして、色を付ける切れ目はアクセント色{{accent:t}}、それ以外は濃さの違う灰色にします。円の大きさは、用意した場所の{{size:t}}にします。右の凡例は、色見本・項目名・割合の順に1行ずつ置き、割合は32pt前後の太字にします。立体・影・グラデーションは使わず、見出しは32〜36pt、項目名は20pt以上にしてください。下に「※ 2025年度の問い合わせ1,240件の内訳。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「グラフ」→「円」→「円」を選び、出てきた表に項目と割合を入れます。表の並びを大きい順にしておくと、12時から時計回りに大きい順になります。「グラフ要素を追加」→「データラベル」で扇形に割合を出し、「データラベルの書式設定」で「パーセンテージ」にチェックを入れます。凡例の代わりに項目名を直接ラベルに出すと、目の往復がなくなります。色は、扇形を1回クリックで全体、もう1回でその1つだけが選ばれるので、「書式」→「図形の塗りつぶし」で変えます。',
    'Googleスライドでは、「挿入」→「グラフ」→「円」でサンプルを入れ、右上の︙（その他）→「ソースを開く」でスプレッドシートに項目と割合を入れます。グラフの編集画面の「カスタマイズ」→「円グラフ」で「ラベルを表示」を割合にし、「系列」で扇形ごとの色を設定します。直したらスライドに戻り、グラフの「更新」を押します。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。円は「半径75の円を太さ150の線で描く」作りで、円周を100と数えて、割合をそのまま線の長さにしています。割合を変えるときは、各扇形の「長さ」と「位置」の2つの数字を直してもらってください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">問い合わせの種類別の割合（2025年度）</p>
  <h1 class="title">問い合わせの6割超が使い方と料金・請求</h1>

  <div class="body">
    <div class="pie">
      <!-- 円周を100として、stroke-dasharray=「長さ 残り」、stroke-dashoffset=「−始まりの位置」。12時から時計回り -->
      <svg viewBox="0 0 340 340" class="svg">
        <g transform="rotate(-90 170 170)">
          <circle class="s1" cx="170" cy="170" r="75" pathLength="100" stroke-dasharray="37.4 62.6" stroke-dashoffset="-0.3" />
          <circle class="s2" cx="170" cy="170" r="75" pathLength="100" stroke-dasharray="23.4 76.6" stroke-dashoffset="-38.3" />
          <circle class="s3" cx="170" cy="170" r="75" pathLength="100" stroke-dasharray="17.4 82.6" stroke-dashoffset="-62.3" />
          <circle class="s4" cx="170" cy="170" r="75" pathLength="100" stroke-dasharray="11.4 88.6" stroke-dashoffset="-80.3" />
          <circle class="s5" cx="170" cy="170" r="75" pathLength="100" stroke-dasharray="7.4 92.6" stroke-dashoffset="-92.3" />
        </g>
      </svg>
    </div>

    <div class="legend">
      <div class="item"><i class="sw s1"></i><span class="label">使い方</span><span class="pct">38<small>%</small></span></div>
      <div class="item"><i class="sw s2"></i><span class="label">料金・請求</span><span class="pct">24<small>%</small></span></div>
      <div class="item"><i class="sw s3"></i><span class="label">不具合</span><span class="pct">18<small>%</small></span></div>
      <div class="item"><i class="sw s4"></i><span class="label">契約の変更</span><span class="pct">12<small>%</small></span></div>
      <div class="item"><i class="sw s5"></i><span class="label">その他</span><span class="pct">8<small>%</small></span></div>
    </div>
  </div>

  <p class="note">※ 2025年度の問い合わせ1,240件の内訳。</p>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* 幅960px×高さ540px（PowerPointの16:9と同じ比率） */
.slide {
  --accent: {{accent}};
  --c1: var(--accent); --c2: #9aa0ac; --c3: #b9bec9; --c4: #d0d4dc; --c5: #e1e4ea; /* 大きい順の色 */
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
.body { flex: 1; display: flex; align-items: center; gap: 56px; margin: 12px 0 6px; min-height: 0; }

.pie { flex: 0 0 312px; height: 312px; display: flex; align-items: center; justify-content: center; margin-left: 24px; }
.svg { display: block; width: {{size}}; height: auto; }
.svg circle { fill: none; stroke-width: 150; } /* 半径75の円を太さ150の線で描くと、塗りつぶした円になる */
.svg .s1 { stroke: var(--c1); } .svg .s2 { stroke: var(--c2); } .svg .s3 { stroke: var(--c3); }
.svg .s4 { stroke: var(--c4); } .svg .s5 { stroke: var(--c5); }

.legend { flex: 1; display: flex; flex-direction: column; border-top: 1px solid #e3e5ea; }
.item { display: flex; align-items: center; gap: 14px; padding: 10px 0; border-bottom: 1px solid #e3e5ea; }
.sw { display: block; width: 18px; height: 18px; border-radius: 4px; }
.sw.s1 { background: var(--c1); } .sw.s2 { background: var(--c2); } .sw.s3 { background: var(--c3); }
.sw.s4 { background: var(--c4); } .sw.s5 { background: var(--c5); }
.label { flex: 1; font-size: 20px; font-weight: 700; }
.pct { font-size: 32px; font-weight: 800; line-height: 1.1; font-variant-numeric: tabular-nums; }
.pct small { margin-left: 2px; font-size: 18px; font-weight: 700; color: #5a6070; }
.item:first-child .pct { color: var(--accent); }

/* 色を付ける切れ目（data-focus="top2" なら上位2つ） */
.slide[data-focus="top2"] { --c2: color-mix(in srgb, var(--accent) 50%, #fff); }
.slide[data-focus="top2"] .item:nth-child(2) .pct { color: var(--accent); }

.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '色を付ける切れ目',
      value: 'top1',
      options: [
        { value: 'top1', label: '最大の1つだけ色を付ける' },
        { value: 'top2', label: '上位2つに色を付ける' },
      ],
    },
    { key: 'size', label: '円の大きさ', min: 70, max: 100, step: 5, value: 100, unit: '%' },
  ],
  cautions: [
    '項目は5つ以内にします。8つも9つも切れ目があると、細い扇形が増えて色の区別がつかず、凡例と円の間を目が行き来します。小さい項目は「その他」にまとめます。',
    '12時の位置から時計回りに、大きい順に並べます。順番がばらばらだと、どれが最大かを探すことになります。「その他」は大きさに関係なく最後に置きます。',
    '数字を必ず書きます。人の目は扇形の角度や面積を正確に比べるのが苦手で、24%と18%は並べても差が分かりません。割合を大きな数字で見せ、円は「全体の中の感覚」を伝える役にします。',
    '立体（3D）の円や、一部をずらして飛び出させた円は使いません。手前の扇形が実際より大きく見え、割合の印象がゆがみます。割合の合計が100%になっているかも、作ったあとに必ず確かめます。',
  ],
  similar: [
    { slug: 'donut', diff: 'ドーナツ内訳型は、円の真ん中をくり抜き、中央に合計を置く型です。割合に加えて「全体の大きさ」も一緒に見せたいときに向きます。' },
    { slug: 'ranking-bar', diff: '横棒ランキング型は、項目を大きい順に横棒で並べる型です。割合が近い項目の差まで読ませたいときや、項目が多いときに向きます。' },
    { slug: 'percent-stacked', diff: '100%積み上げ型は、割合の帯を複数並べて比べる型です。年代別・年度別など、グループごとの配分の違いを見せたいときに使います。' },
  ],
  faq: [
    {
      q: '円グラフは何項目までがよいですか？',
      a: '5項目以内が目安です。割合が小さい項目は「その他」にまとめます。それでも項目が多く、割合が近いときは、円グラフより横棒グラフの方が読みやすくなります。',
    },
    {
      q: '円グラフは12時の位置から始めるのですか？',
      a: '一般的にはそうします。真上（12時）から時計回りに大きい順に並べると、最大の項目が右上に来て、聞き手が自然に読み始められます。PowerPointでは「データ系列の書式設定」の「最初のスライスの角度」が0度になっていれば12時から始まります。',
    },
    {
      q: '円グラフにするか棒グラフにするか迷ったら？',
      a: '「全体の何割か」だけを伝えたいなら円、「どれが大きいか」を順に比べたいなら棒にします。割合の差が小さい、項目が多い、グループを並べて比べる、のどれかに当てはまるなら、棒の方が正確に伝わります。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
