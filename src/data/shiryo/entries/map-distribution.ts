import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'map-distribution',
  no: 49,
  category: 'data',
  name: '地図分布型',
  en: 'Tile map',
  aka: ['タイルマップ', '日本地図の色分け', '都道府県別の分布図', '階級区分図', 'エリア別の分布図'],
  mode: 'static',
  title: '地図分布型とは？都道府県ごとの数を地図で見せる作り方【PowerPoint】',
  description:
    '都道府県ごとの店舗数などを、地図の上の色の濃さで見せる「地図分布型」のスライドを見本で解説。同じ大きさの四角で並べる「タイルマップ」のメリット、色の段階の決め方、PowerPointでの作り方、AIへの指示文とHTMLのコードまでまとめました。',
  oneLine: '都道府県ごとの数を、地図の上の色の濃さで見せる。',
  what: [
    '都道府県などの地域ごとの数を、地図の上に色の濃さで見せる型です。見本は、実際の地図の形ではなく、47都道府県を同じ大きさの四角にして、おおよその位置に並べた「タイルマップ」です。ドラッグストアの店舗数を4段階の濃さで塗り分け、左上に凡例、右には「上位8都府県で54%」と大きく数字を置いて、見出しの結論と合わせています。',
    '実際の地図の形だと、面積の広い北海道が目立ち、小さな東京や大阪の色が見えなくなります。同じ大きさの四角にすれば、店舗や人が集まる都市部も、広い地方も、同じ重さで見えます。決まりごとは、色を1色の濃淡にすること、段階は4〜5つまでにして凡例を必ず付けること、位置を実際の地図から大きくずらさないことです。',
  ],
  when: [
    '店舗数・顧客数・売上などを、都道府県ごとに見せて、集中している地域と少ない地域を伝えたいとき',
    '出店計画や営業担当のエリアなど、「どこに多くて、どこが空白か」を議論したいとき',
    '全国の状況を1枚で、地方の人にも見てもらう説明会やサービス紹介で使いたいとき',
  ],
  avoid: [
    '市区町村など細かい地域で見せたいとき（実際の地図が必要なので、専用の地図ツールを使う）',
    '都道府県の順位が主題のとき（横棒ランキング型にする）',
    '数の差を正確に読ませたいとき（棒グラフや表にする。色の濃さでは細かい差が読めない）',
  ],
  prompt:
    '16:9のスライドを1枚、「地図分布型（tile map。都道府県を同じ大きさの四角で並べ、色の濃さで数を見せる地図）」で作ってください。いちばん上に小さく「ドラッグストア「ハレ薬局」の都道府県別の店舗数（2025年9月末・全国344店）」、その下に結論の見出し「店舗の54%は、上位8都府県に集まっている」を置きます。見出しの下の左側に、47都道府県を1つずつ同じ大きさの四角（角の丸みは{{r:t}}）にして、日本地図のおおよその位置に並べます（北海道を右上、沖縄を左下、東京・神奈川・千葉・埼玉を右の中ほど、大阪・兵庫・京都を中ほど、福岡を左の中ほど）。四角は、店舗数に応じてアクセント色{{accent:t}}の4段階の濃さで塗ります（1〜4店はいちばん薄く、5〜9店、10〜19店、20店以上はアクセント色そのもの）。主な都道府県の店舗数は、東京42、大阪28、神奈川24、愛知22、福岡20、埼玉18、千葉16、兵庫15、北海道14、静岡11、広島9、宮城8、京都8で、そのほかの都道府県は1〜7店です（合計344店）。四角の中の文字は「{{label:t}}」にし、14ptの太字、濃い四角では白い文字にします。地図の左上の空いた場所に、4段階の凡例（1〜4店、5〜9店、10〜19店、20店以上）を置いてください。右側の細い列には、「54%」を64pt前後の太字・アクセント色で大きく置き、その下に「上位8都府県に集まる店舗の割合」、区切り線を挟んで「185店 / 全国344店」、最後に「東京42店・大阪28店・神奈川24店」と書きます。立体・影・グラデーションは使いません。下に「※ 四角1つが1つの都道府県（位置は実際の地図を簡略にした配置）。色が濃いほど店舗数が多い。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「図形」から正方形を1つ描き、「図形の書式」→「サイズ」で高さと幅を同じ数字（見本なら35pt）にします。四角の中に都道府県名を入れ、コピーして47個並べ、「図形の書式」→「図形の塗りつぶし」で段階ごとの色にします。位置をそろえるには、複数の図形を選んで「配置」→「左揃え」「上下に整列」を使うと楽です。Microsoft 365のExcelには、「挿入」→「マップ」に実際の地図を色分けする「塗り分けマップ」があり、都道府県名と数字から作れます（インターネットにつながっている必要があります）。',
    'Googleスライドでは、「挿入」→「図形」から正方形を描いて、「書式オプション」で大きさを数字で入れ、コピーして並べます。色は図形の「塗りつぶしの色」から選びます。47個を1つずつ塗るのが大変なときは、先にスプレッドシートでセルを格子状に並べ、「表示形式」→「条件付き書式」の「カラースケール」で色を付けてから、スライドに貼る方法もあります。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。四角の位置は「列 × 37.5」「行 × 37.5」で決めた数値を書いています。店舗数を変えるときは、四角の色の段階（class の l1〜l4）と、中の数字、右の列の数字を一緒に直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-label="{{label}}">
  <p class="kicker">ドラッグストア「ハレ薬局」の都道府県別の店舗数（2025年9月末・全国344店）</p>
  <h1 class="title">店舗の54%は、上位8都府県に集まっている</h1>
  <div class="body">
    <div class="row">
      <svg class="svg" viewBox="0 0 486 338" role="img" aria-label="都道府県ごとの店舗数を色の濃さで表した地図">
        <g class="t l3">
          <rect class="tile" x="450" y="0" width="35" height="35" />
          <text class="nm" x="467.5" y="22.5" text-anchor="middle">北海</text>
          <text class="ct" x="467.5" y="22.5" text-anchor="middle">14</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="450" y="37.5" width="35" height="35" />
          <text class="nm" x="467.5" y="60" text-anchor="middle">青森</text>
          <text class="ct" x="467.5" y="60" text-anchor="middle">3</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="412.5" y="75" width="35" height="35" />
          <text class="nm" x="430" y="97.5" text-anchor="middle">秋田</text>
          <text class="ct" x="430" y="97.5" text-anchor="middle">2</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="450" y="75" width="35" height="35" />
          <text class="nm" x="467.5" y="97.5" text-anchor="middle">岩手</text>
          <text class="ct" x="467.5" y="97.5" text-anchor="middle">3</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="412.5" y="112.5" width="35" height="35" />
          <text class="nm" x="430" y="135" text-anchor="middle">山形</text>
          <text class="ct" x="430" y="135" text-anchor="middle">2</text>
        </g>
        <g class="t l2">
          <rect class="tile" x="450" y="112.5" width="35" height="35" />
          <text class="nm" x="467.5" y="135" text-anchor="middle">宮城</text>
          <text class="ct" x="467.5" y="135" text-anchor="middle">8</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="112.5" y="150" width="35" height="35" />
          <text class="nm" x="130" y="172.5" text-anchor="middle">島根</text>
          <text class="ct" x="130" y="172.5" text-anchor="middle">1</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="150" y="150" width="35" height="35" />
          <text class="nm" x="167.5" y="172.5" text-anchor="middle">鳥取</text>
          <text class="ct" x="167.5" y="172.5" text-anchor="middle">1</text>
        </g>
        <g class="t l3">
          <rect class="tile" x="187.5" y="150" width="35" height="35" />
          <text class="nm" x="205" y="172.5" text-anchor="middle">兵庫</text>
          <text class="ct" x="205" y="172.5" text-anchor="middle">15</text>
        </g>
        <g class="t l2">
          <rect class="tile" x="225" y="150" width="35" height="35" />
          <text class="nm" x="242.5" y="172.5" text-anchor="middle">京都</text>
          <text class="ct" x="242.5" y="172.5" text-anchor="middle">8</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="262.5" y="150" width="35" height="35" />
          <text class="nm" x="280" y="172.5" text-anchor="middle">福井</text>
          <text class="ct" x="280" y="172.5" text-anchor="middle">2</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="300" y="150" width="35" height="35" />
          <text class="nm" x="317.5" y="172.5" text-anchor="middle">石川</text>
          <text class="ct" x="317.5" y="172.5" text-anchor="middle">3</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="337.5" y="150" width="35" height="35" />
          <text class="nm" x="355" y="172.5" text-anchor="middle">富山</text>
          <text class="ct" x="355" y="172.5" text-anchor="middle">2</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="375" y="150" width="35" height="35" />
          <text class="nm" x="392.5" y="172.5" text-anchor="middle">新潟</text>
          <text class="ct" x="392.5" y="172.5" text-anchor="middle">4</text>
        </g>
        <g class="t l2">
          <rect class="tile" x="412.5" y="150" width="35" height="35" />
          <text class="nm" x="430" y="172.5" text-anchor="middle">福島</text>
          <text class="ct" x="430" y="172.5" text-anchor="middle">5</text>
        </g>
        <g class="t l4">
          <rect class="tile" x="37.5" y="187.5" width="35" height="35" />
          <text class="nm" x="55" y="210" text-anchor="middle">福岡</text>
          <text class="ct" x="55" y="210" text-anchor="middle">20</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="75" y="187.5" width="35" height="35" />
          <text class="nm" x="92.5" y="210" text-anchor="middle">山口</text>
          <text class="ct" x="92.5" y="210" text-anchor="middle">3</text>
        </g>
        <g class="t l2">
          <rect class="tile" x="112.5" y="187.5" width="35" height="35" />
          <text class="nm" x="130" y="210" text-anchor="middle">広島</text>
          <text class="ct" x="130" y="210" text-anchor="middle">9</text>
        </g>
        <g class="t l2">
          <rect class="tile" x="150" y="187.5" width="35" height="35" />
          <text class="nm" x="167.5" y="210" text-anchor="middle">岡山</text>
          <text class="ct" x="167.5" y="210" text-anchor="middle">6</text>
        </g>
        <g class="t l4">
          <rect class="tile" x="187.5" y="187.5" width="35" height="35" />
          <text class="nm" x="205" y="210" text-anchor="middle">大阪</text>
          <text class="ct" x="205" y="210" text-anchor="middle">28</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="225" y="187.5" width="35" height="35" />
          <text class="nm" x="242.5" y="210" text-anchor="middle">滋賀</text>
          <text class="ct" x="242.5" y="210" text-anchor="middle">4</text>
        </g>
        <g class="t l2">
          <rect class="tile" x="262.5" y="187.5" width="35" height="35" />
          <text class="nm" x="280" y="210" text-anchor="middle">岐阜</text>
          <text class="ct" x="280" y="210" text-anchor="middle">5</text>
        </g>
        <g class="t l2">
          <rect class="tile" x="300" y="187.5" width="35" height="35" />
          <text class="nm" x="317.5" y="210" text-anchor="middle">長野</text>
          <text class="ct" x="317.5" y="210" text-anchor="middle">5</text>
        </g>
        <g class="t l2">
          <rect class="tile" x="337.5" y="187.5" width="35" height="35" />
          <text class="nm" x="355" y="210" text-anchor="middle">群馬</text>
          <text class="ct" x="355" y="210" text-anchor="middle">5</text>
        </g>
        <g class="t l2">
          <rect class="tile" x="375" y="187.5" width="35" height="35" />
          <text class="nm" x="392.5" y="210" text-anchor="middle">栃木</text>
          <text class="ct" x="392.5" y="210" text-anchor="middle">5</text>
        </g>
        <g class="t l2">
          <rect class="tile" x="412.5" y="187.5" width="35" height="35" />
          <text class="nm" x="430" y="210" text-anchor="middle">茨城</text>
          <text class="ct" x="430" y="210" text-anchor="middle">7</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="0" y="225" width="35" height="35" />
          <text class="nm" x="17.5" y="247.5" text-anchor="middle">佐賀</text>
          <text class="ct" x="17.5" y="247.5" text-anchor="middle">2</text>
        </g>
        <g class="t l2">
          <rect class="tile" x="37.5" y="225" width="35" height="35" />
          <text class="nm" x="55" y="247.5" text-anchor="middle">熊本</text>
          <text class="ct" x="55" y="247.5" text-anchor="middle">5</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="75" y="225" width="35" height="35" />
          <text class="nm" x="92.5" y="247.5" text-anchor="middle">大分</text>
          <text class="ct" x="92.5" y="247.5" text-anchor="middle">3</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="187.5" y="225" width="35" height="35" />
          <text class="nm" x="205" y="247.5" text-anchor="middle">和歌</text>
          <text class="ct" x="205" y="247.5" text-anchor="middle">2</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="225" y="225" width="35" height="35" />
          <text class="nm" x="242.5" y="247.5" text-anchor="middle">奈良</text>
          <text class="ct" x="242.5" y="247.5" text-anchor="middle">3</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="262.5" y="225" width="35" height="35" />
          <text class="nm" x="280" y="247.5" text-anchor="middle">三重</text>
          <text class="ct" x="280" y="247.5" text-anchor="middle">4</text>
        </g>
        <g class="t l4">
          <rect class="tile" x="300" y="225" width="35" height="35" />
          <text class="nm" x="317.5" y="247.5" text-anchor="middle">愛知</text>
          <text class="ct" x="317.5" y="247.5" text-anchor="middle">22</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="337.5" y="225" width="35" height="35" />
          <text class="nm" x="355" y="247.5" text-anchor="middle">山梨</text>
          <text class="ct" x="355" y="247.5" text-anchor="middle">2</text>
        </g>
        <g class="t l3">
          <rect class="tile" x="375" y="225" width="35" height="35" />
          <text class="nm" x="392.5" y="247.5" text-anchor="middle">埼玉</text>
          <text class="ct" x="392.5" y="247.5" text-anchor="middle">18</text>
        </g>
        <g class="t l4">
          <rect class="tile" x="412.5" y="225" width="35" height="35" />
          <text class="nm" x="430" y="247.5" text-anchor="middle">東京</text>
          <text class="ct" x="430" y="247.5" text-anchor="middle">42</text>
        </g>
        <g class="t l3">
          <rect class="tile" x="450" y="225" width="35" height="35" />
          <text class="nm" x="467.5" y="247.5" text-anchor="middle">千葉</text>
          <text class="ct" x="467.5" y="247.5" text-anchor="middle">16</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="0" y="262.5" width="35" height="35" />
          <text class="nm" x="17.5" y="285" text-anchor="middle">長崎</text>
          <text class="ct" x="17.5" y="285" text-anchor="middle">3</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="37.5" y="262.5" width="35" height="35" />
          <text class="nm" x="55" y="285" text-anchor="middle">鹿児</text>
          <text class="ct" x="55" y="285" text-anchor="middle">3</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="75" y="262.5" width="35" height="35" />
          <text class="nm" x="92.5" y="285" text-anchor="middle">宮崎</text>
          <text class="ct" x="92.5" y="285" text-anchor="middle">2</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="112.5" y="262.5" width="35" height="35" />
          <text class="nm" x="130" y="285" text-anchor="middle">愛媛</text>
          <text class="ct" x="130" y="285" text-anchor="middle">3</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="150" y="262.5" width="35" height="35" />
          <text class="nm" x="167.5" y="285" text-anchor="middle">香川</text>
          <text class="ct" x="167.5" y="285" text-anchor="middle">3</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="187.5" y="262.5" width="35" height="35" />
          <text class="nm" x="205" y="285" text-anchor="middle">徳島</text>
          <text class="ct" x="205" y="285" text-anchor="middle">1</text>
        </g>
        <g class="t l3">
          <rect class="tile" x="375" y="262.5" width="35" height="35" />
          <text class="nm" x="392.5" y="285" text-anchor="middle">静岡</text>
          <text class="ct" x="392.5" y="285" text-anchor="middle">11</text>
        </g>
        <g class="t l4">
          <rect class="tile" x="412.5" y="262.5" width="35" height="35" />
          <text class="nm" x="430" y="285" text-anchor="middle">神奈</text>
          <text class="ct" x="430" y="285" text-anchor="middle">24</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="150" y="300" width="35" height="35" />
          <text class="nm" x="167.5" y="322.5" text-anchor="middle">高知</text>
          <text class="ct" x="167.5" y="322.5" text-anchor="middle">1</text>
        </g>
        <g class="t l1">
          <rect class="tile" x="0" y="300" width="35" height="35" />
          <text class="nm" x="17.5" y="322.5" text-anchor="middle">沖縄</text>
          <text class="ct" x="17.5" y="322.5" text-anchor="middle">4</text>
        </g>
        <text class="lg-t" x="0" y="16">都道府県ごとの店舗数</text>
        <rect class="tile chip l1" x="0" y="30" width="24" height="24" />
        <text class="lg" x="34" y="48">1〜4店</text>
        <rect class="tile chip l2" x="0" y="60" width="24" height="24" />
        <text class="lg" x="34" y="78">5〜9店</text>
        <rect class="tile chip l3" x="0" y="90" width="24" height="24" />
        <text class="lg" x="34" y="108">10〜19店</text>
        <rect class="tile chip l4" x="0" y="120" width="24" height="24" />
        <text class="lg" x="34" y="138">20店以上</text>
      </svg>
      <div class="side">
        <span class="big">54%</span>
        <span class="big-label">上位8都府県に集まる店舗の割合</span>
        <span class="sub">185店 / 全国344店</span>
        <span class="rank">東京42店・大阪28店・神奈川24店</span>
      </div>
    </div>
  </div>
  <p class="note">※ 四角1つが1つの都道府県（位置は実際の地図を簡略にした配置）。色が濃いほど店舗数が多い。</p>
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
.title { margin: 0; font-size: 34px; font-weight: 800; line-height: 1.3; }
.body { flex: 1; min-height: 0; margin: 18px 0 10px; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 四角1つが1つの都道府県。色の濃さは店舗数（1〜4店、5〜9店、10〜19店、20店以上の4段階）。座標は幅486×高さ338の中で数字で決めている */
.row { display: flex; gap: 32px; height: 100%; }
.svg { display: block; flex: 0 0 486px; width: 486px; height: 100%; overflow: visible; }
/*svg*/
.tile { rx: {{r}}px; stroke: none; }
.l1 .tile, .tile.l1 { fill: color-mix(in srgb, var(--accent) 14%, #fff); }
.l2 .tile, .tile.l2 { fill: color-mix(in srgb, var(--accent) 36%, #fff); }
.l3 .tile, .tile.l3 { fill: color-mix(in srgb, var(--accent) 66%, #fff); }
.l4 .tile, .tile.l4 { fill: var(--accent); }
.nm, .ct { display: none; font-size: 14px; font-weight: 700; fill: #1f2430; font-variant-numeric: tabular-nums; }
.l3 .nm, .l3 .ct, .l4 .nm, .l4 .ct { fill: #fff; }
.slide[data-label="name"] .nm { display: inline; }
.slide[data-label="count"] .ct { display: inline; }
.lg-t { font-size: 16px; font-weight: 700; fill: #5a6070; }
.lg { font-size: 16px; fill: #1f2430; }
/*end*/
.side { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: center; gap: 6px; padding-left: 28px; border-left: 1px solid #e3e5ea; }
.big { font-size: 64px; font-weight: 800; line-height: 1.05; color: var(--accent); font-variant-numeric: tabular-nums; letter-spacing: -0.01em; }
.big-label { font-size: 16px; color: #5a6070; }
.sub { margin-top: 14px; padding-top: 12px; border-top: 1px solid #e3e5ea; font-size: 22px; font-weight: 800; font-variant-numeric: tabular-nums; }
.rank { font-size: 16px; color: #5a6070; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'label',
      type: 'select',
      label: '四角の中の文字',
      value: 'name',
      options: [
        { value: 'name', label: '都道府県名' },
        { value: 'count', label: '店舗数' },
        { value: 'none', label: '文字なし' },
      ],
    },
    { key: 'r', label: '四角の角の丸み', min: 0, max: 10, step: 1, value: 4, unit: '' },
  ],
  cautions: [
    '色は1色の濃淡にします。赤・青・緑の多色で塗り分けると、色の違いが「種類の違い」に見えて、数の大小が伝わりません。段階は4〜5つまでにして、必ず凡例を付けます。',
    '色の段階の境目（5店、10店、20店）は、聞き手が覚えやすい数字にします。段階ごとの都道府県の数がほとんど同じ数になるように決めると、色の差がはっきり出ます。境目は凡例に書きます。',
    '位置は実際の地図から大きくずらさないようにします。見本は、北海道を右上、沖縄を左下とし、東京の近くに埼玉・千葉・神奈川を置いています。四角の位置がでたらめだと、「どこが集中しているか」が地理として伝わりません。',
    '色の濃さでは、細かい数の差は読めません。「東京が42店で大阪が28店」のような正確な数字は、右の列や表で書きます。見本は、上位3つの都府県と、割合の数字を右に書いています。',
  ],
  similar: [
    { slug: 'heatmap', diff: 'ヒートマップ型は、表の数の大小を色の濃さで見せる型です。地図分布型は、行と列の代わりに、地図上の位置に並べて見せます。地理的な集中を見せたいときに向きます。' },
    { slug: 'ranking-bar', diff: '横棒ランキング型は、項目を大きい順に横棒で並べる型です。順位と数字を正確に読ませたいときに向きます。地図分布型は、地域の偏り方を見せます。' },
    { slug: 'bubble', diff: 'バブルチャート型は、円の大きさで3つ目の数を見せる型です。地図の上に円を置くのではなく、2つの数の関係を見せたいときに使います。' },
  ],
  faq: [
    {
      q: 'タイルマップとは何ですか？',
      a: '都道府県などの地域を、同じ大きさの四角（タイル）にして、おおよその位置に並べた地図です。実際の面積に引きずられないので、小さな地域（東京・大阪など）も同じ重さで見え、色の濃さで数の大小を比べられます。',
    },
    {
      q: '日本地図の色分けはPowerPointで作れますか？',
      a: '図形の四角を並べて色を付ける方法なら、PowerPointでもGoogleスライドでも作れます。Microsoft 365のExcelなら、「挿入」→「マップ」の「塗り分けマップ」で、実際の地図の形の色分けも作れます。',
    },
    {
      q: '地図の色は何段階に分けるのがよいですか？',
      a: '4〜5段階が目安です。段階が多すぎると色の違いが見分けにくく、少なすぎると差が出ません。境目の数字は凡例に書き、覚えやすい切りのいい数字にします。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
