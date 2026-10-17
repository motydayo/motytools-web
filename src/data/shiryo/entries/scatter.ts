import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'scatter',
  no: 34,
  category: 'data',
  name: '散布図型',
  en: 'Scatter plot',
  aka: ['散布図', 'スキャッタープロット', '相関図', '相関グラフ', '2軸の点グラフ'],
  mode: 'static',
  title: '散布図とは？2つの数の関係を見せるスライドの作り方と見本【相関】',
  description:
    '広告費と新規顧客数など、2つの数の関係を点の散らばりで見せる「散布図型」のスライドを見本で解説。傾きの線の引き方、外れ値の見せ方、相関と因果の違い、PowerPoint・Googleスライドでの作り方、AIへの指示とHTMLまで。',
  oneLine: '2つの数の関係を、点の散らばりと傾きで見せる。',
  what: [
    '横軸に1つ目の数、縦軸に2つ目の数をとり、データ1件を1つの点として打つ型です。見本では15店舗の広告費（横）と新規顧客数（縦）を点で打ち、点の並びに沿って破線の傾きの線を引いています。右上がりに並んでいるので、「広告費が増えるほど新規顧客も増える」と読み取れ、右の列には「10万円増えると約25人増える」という傾きの意味を数字で書いています。',
    '散布図が答えるのは「2つの数に関係はあるか」という問いです。点が右上がりなら正の関係、右下がりなら負の関係、ばらばらなら関係なしです。傾きの線は、点からの距離がいちばん小さくなる直線（最小二乗法）をExcelなどに計算させます。外れた点は隠さずに、アクセント色で示して理由を書き添えると、資料の信頼が上がります。',
  ],
  when: [
    '広告費と売上、気温とアイスの売上など、2つの数に関係があるかを確かめた結果を見せたいとき',
    '店舗・営業担当・商品を1つずつの点にして、全体の中の位置と外れたものを見せたいとき',
    '「この施策に効果がありそうだ」という根拠を、グラフで会議に示したいとき',
  ],
  avoid: [
    '時間の流れに沿った変化を見せたいとき（折れ線推移型にする）',
    '大きさの比較だけをしたいとき（縦棒グラフ型・横棒ランキング型にする）',
    '点に「大きさ」という3つ目の数も加えたいとき（バブルチャート型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「散布図型（scatter plot）」で作ってください。いちばん上に小さく「店舗ごとの広告費と新規顧客数（15店舗）」、その下に結論の見出し「広告費が増えるほど、新規顧客も増える」を置きます。左の広い場所に散布図を置き、横軸は「広告費（万円／月）」で0から50まで10刻み、縦軸は「新規顧客（人／月）」で0から150まで50刻みにし、どちらも必ず0から始めてください。点は15店舗ぶんで、（広告費, 新規顧客）の組を順に（5,32）（8,41）（10,38）（13,55）（16,62）（18,58）（21,80）（24,76）（27,95）（30,102）（33,98）（37,121）（41,118）（46,139）（14,92）とします。点は直径{{dot:t}}pt前後の灰色の丸にし、最後の（14,92）の点だけアクセント色{{accent:t}}で少し大きくして、右上に「渋谷店」と「広告費が少なくても成果が高い」（2行に分け、傾きの線と重ねない）と書いてください。傾きの線は「{{trend:t}}」にして、表示するときは、15点から最小二乗法で計算した直線をアクセント色の破線で引きます。右側の細い列には「+25人」を52pt前後の太字・アクセント色で大きく置き、その下に「広告費を10万円増やしたときの、新規顧客の増え方の目安」、区切り線を挟んで「相関係数 0.94」と書いてください。目盛りの線は薄い灰色にします。見出しは32〜36pt、目盛りは14pt以上にしてください。下に「※ 2025年度の月平均。直線は15店舗のデータから計算。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「グラフ」→「散布図」→「散布図（マーカーのみ）」を選び、出てきた表のX列に広告費、Y列に新規顧客数を入れます。点を右クリックして「近似曲線の追加」を選び、種類を「線形近似」にすると、傾きの線が引けます。同じ画面で「グラフに数式を表示する」「R-2乗値を表示する」にチェックを入れると、傾きと当てはまりの強さが数字で分かります。軸の目盛りは、軸をダブルクリックして最小値が0になっているかを確かめます。強調したい1点は、点を2回クリックしてその点だけを選び、「書式」→「図形の塗りつぶし」で色を変えます。',
    'Googleスライドでは、散布図をスプレッドシートで作ります。スプレッドシートに2列のデータを入れ、「挿入」→「グラフ」→グラフエディタの「設定」→「グラフの種類」で「散布図」を選びます。「カスタマイズ」→「系列」で「トレンドライン」にチェックを入れると、傾きの線が引けます。できたら、スライドで「挿入」→「グラフ」→「スプレッドシートから」で貼り付けます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。点の位置は「広告費 ÷ 50」「新規顧客 ÷ 150」から計算した数字で書いてあります。値を変えるときは、点と傾きの線の座標をAIに計算し直してもらい、傾きの数字（+25人）も表計算ソフトで確かめてください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-trend="{{trend}}">
  <p class="kicker">店舗ごとの広告費と新規顧客数（15店舗）</p>
  <h1 class="title">広告費が増えるほど、新規顧客も増える</h1>

  <div class="body">
    <!-- 図は幅620×高さ332。横=広告費 ÷ 50、縦=新規顧客 ÷ 150 から計算した位置 -->
    <svg class="chart" viewBox="0 0 620 332">
      <text class="axis" x="0" y="14">新規顧客（人／月）</text>
      <line class="grid base" x1="54" x2="604" y1="282" y2="282" /><text class="tick" x="44" y="287" text-anchor="end">0</text>
      <line class="grid" x1="54" x2="604" y1="196.7" y2="196.7" /><text class="tick" x="44" y="201.7" text-anchor="end">50</text>
      <line class="grid" x1="54" x2="604" y1="111.3" y2="111.3" /><text class="tick" x="44" y="116.3" text-anchor="end">100</text>
      <line class="grid" x1="54" x2="604" y1="26" y2="26" /><text class="tick" x="44" y="31" text-anchor="end">150</text>
      <text class="tick" x="54" y="305" text-anchor="middle">0</text>
      <line class="grid" x1="164" x2="164" y1="26" y2="282" /><text class="tick" x="164" y="305" text-anchor="middle">10</text>
      <line class="grid" x1="274" x2="274" y1="26" y2="282" /><text class="tick" x="274" y="305" text-anchor="middle">20</text>
      <line class="grid" x1="384" x2="384" y1="26" y2="282" /><text class="tick" x="384" y="305" text-anchor="middle">30</text>
      <line class="grid" x1="494" x2="494" y1="26" y2="282" /><text class="tick" x="494" y="305" text-anchor="middle">40</text>
      <line class="grid" x1="604" x2="604" y1="26" y2="282" /><text class="tick" x="604" y="305" text-anchor="middle">50</text>
      <text class="axis" x="604" y="330" text-anchor="end">広告費（万円／月）</text>
      <!-- 傾きの線（15点から最小二乗法で計算） -->
      <line class="trend" x1="54" y1="240.4" x2="604" y2="31" />
      <circle class="dot" cx="109" cy="227.4" r="7" />
      <circle class="dot" cx="142" cy="212" r="7" />
      <circle class="dot" cx="164" cy="217.1" r="7" />
      <circle class="dot" cx="197" cy="188.1" r="7" />
      <circle class="dot" cx="230" cy="176.2" r="7" />
      <circle class="dot" cx="252" cy="183" r="7" />
      <circle class="dot" cx="285" cy="145.5" r="7" />
      <circle class="dot" cx="318" cy="152.3" r="7" />
      <circle class="dot" cx="351" cy="119.9" r="7" />
      <circle class="dot" cx="384" cy="107.9" r="7" />
      <circle class="dot" cx="417" cy="114.7" r="7" />
      <circle class="dot" cx="461" cy="75.5" r="7" />
      <circle class="dot" cx="505" cy="80.6" r="7" />
      <circle class="dot" cx="560" cy="44.8" r="7" />
      <circle class="dot star" cx="208" cy="125" r="10" />
      <text class="star-name" x="224" y="85">渋谷店</text>
      <text class="star-sub" x="224" y="103">広告費が少なくても</text>
      <text class="star-sub" x="224" y="121">成果が高い</text>
    </svg>

    <div class="side">
      <span class="big">+25人</span>
      <span class="big-label">広告費を10万円増やしたときの、新規顧客の増え方の目安</span>
      <span class="sub">相関係数 0.94</span>
    </div>
  </div>

  <p class="note">※ 2025年度の月平均。直線は15店舗のデータから計算。</p>
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
.body { flex: 1; display: flex; align-items: center; gap: 34px; margin: 12px 0 6px; min-height: 0; }
.chart { flex: 0 0 620px; display: block; width: 620px; height: auto; overflow: visible; }

.axis { font-size: 13px; fill: #8a8f9c; }
.tick { font-size: 14px; fill: #8a8f9c; }
.grid { stroke: #e3e5ea; stroke-width: 1; }
.grid.base { stroke: #8a8f9c; }
.dot { r: {{dot}}px; fill: #8a8f9c; fill-opacity: 0.8; stroke: #fff; stroke-width: 1.5; }
.dot.star { r: calc({{dot}}px * 1.4); fill: var(--accent); fill-opacity: 1; }
.trend { stroke: var(--accent); stroke-width: 2.5; stroke-dasharray: 8 6; stroke-linecap: round; }
.star-name { font-size: 17px; font-weight: 800; fill: var(--accent); }
.star-sub { font-size: 14px; fill: #5a6070; }

/* 傾きの線（data-trend="hide" なら消す） */
.slide[data-trend="hide"] .trend { display: none; }

.side { flex: 1; align-self: stretch; display: flex; flex-direction: column; justify-content: center; gap: 6px; padding-left: 24px; border-left: 1px solid #e3e5ea; }
.big { font-size: 52px; font-weight: 800; line-height: 1.05; color: var(--accent); }
.big-label { font-size: 15px; color: #5a6070; }
.sub { margin-top: 14px; padding-top: 12px; border-top: 1px solid #e3e5ea; font-size: 17px; font-weight: 800; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'trend',
      type: 'select',
      label: '傾きの線',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
    { key: 'dot', label: '点の大きさ', min: 5, max: 11, step: 1, value: 7, unit: '' },
  ],
  cautions: [
    '「関係がある」と「原因である」は別です。広告費と新規顧客が一緒に増えていても、広告のおかげとは限りません（人気の店舗が広告費も増やしているだけかもしれません）。見出しは「増えるほど〜も増える」と書き、「広告で増やせる」と言い切るのは別の根拠が要ります。',
    '外れた点を隠しません。1つだけ遠くにある点は、アクセント色で示して理由（少ない広告費で成果が高い）を一言添えると、資料が正直で、かつ有益になります。',
    '縦軸・横軸とも0から始めます。途中から始めると点の散らばりが拡大され、関係が実際より強く見えます。軸の名前と単位（万円／月、人／月）は必ず書きます。',
    '点が15個以下ならよいですが、数百点を超えると点が重なって見えなくなります。そのときは点を小さく半透明にするか、区間ごとの平均を棒で見せます。',
  ],
  similar: [
    { slug: 'bubble', diff: 'バブルチャート型は、散布図の点を円にして、円の大きさで3つ目の数（売上など）も見せる型です。' },
    { slug: 'line-chart', diff: '折れ線推移型は、横軸を時間にして推移を見せる型です。2つの数の関係ではなく、時間による変化を見せたいときに使います。' },
    { slug: 'matrix', diff: 'マトリクス型（2×2）は、2つの軸で4つの箱に分けて位置づける型です。正確な数ではなく、大まかな分類を示したいときに向きます。' },
  ],
  faq: [
    {
      q: '散布図と相関係数の見方を教えてください。',
      a: '点が右上がりに並べば正の相関、右下がりなら負の相関です。相関係数は、その関係の強さを−1から1で表す数で、0.9以上なら強い関係、0.5前後なら弱い関係、0に近ければほぼ関係なしの目安です。スライドでは、数字の横に「強い関係」のように言葉を添えると伝わります。',
    },
    {
      q: 'PowerPointの散布図に傾きの線を引くには？',
      a: '点を右クリックして「近似曲線の追加」を選び、「線形近似」を選びます。「グラフに数式を表示する」にチェックを入れると、傾き（広告費1万円あたりの増え方）が数字で出ます。',
    },
    {
      q: '散布図で外れ値はどう扱えばよいですか？',
      a: '削除せずに、アクセント色で示して理由を書き添えます。入力ミスなら直し、事情があるなら注記に書きます。外れ値を除いて傾きの線を引いた場合は、「1店舗を除く」のように、その旨を必ず注記します。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
