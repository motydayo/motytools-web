import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'hub-spoke',
  no: 63,
  category: 'keikaku',
  name: 'ハブ＆スポーク型',
  en: 'Hub and spoke diagram',
  aka: ['ハブアンドスポーク', 'ハブ＆スポーク図', '放射状の図', '中心と周りの図', '連携図', 'スター型の図'],
  mode: 'static',
  title:
    'ハブ＆スポーク図とは？中心と周りのつながりを見せる資料の作り方【見本つき】',
  description:
    '中心と周りの要素のつながりを放射状に見せる「ハブ＆スポーク型」のスライドを見本で解説。周りの置き方、数字の添え方、PowerPointとGoogleスライドでの作り方、AIにそのまま貼れる指示文とHTMLまでまとめました。',
  oneLine: '中心と周りの要素のつながりを、放射状に見せる。',
  what: [
    '中心に1つの主役を置き、周りの要素を円形に並べて、線で結ぶ型です。自転車の車輪のように、中心がハブ（軸）、線がスポーク（輻）です。見本ではお客さま相談センターを中心に、6つの社内部門を周りに置いています。中心はアクセント色の円、周りは白地の箱にして、各箱には部門名・扱う内容・月あたりの件数を書き、いちばん件数の多い配送センターの枠と数字だけをアクセント色にしています。',
    'ハブ＆スポーク型のよさは、「窓口が1つで、そこから多方面に広がっている」構造が一目で伝わることです。決まりごとは、周りの要素を4〜8個にすること、中心は1つだけにすること、周りの箱の大きさをそろえることです。線に意味がある場合（件数・頻度など）は、箱の中に数字で書き、周りの数字の合計が中心の数字と合っていることを検算します。',
  ],
  when: [
    '窓口・本部・共通基盤など、1つの中心が複数の部門や拠点とつながる構造を見せたいとき',
    '部署をまたぐ連携で、どこが調整役かを示したいとき',
    '1つの商品やサービスを軸に、関わる人や企業を並べて見せたいとき',
    '窓口を1つにまとめる提案で、現状の「あちこちに散らばった連絡」と対比させたいとき',
  ],
  avoid: [
    '周りの要素どうしにも関係があるとき（ネットワーク図や依存関係ネットワーク型にする）',
    '作業の順番や流れを見せたいとき（フロー型にする）',
    '上下の関係や序列を見せたいとき（組織図型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「ハブ＆スポーク型（hub and spoke diagram）」で作ってください。いちばん上に小さく「お客さま相談センターと社内6部門のつながり」、その下に結論の見出し「月1,200件の相談を、窓口1つで6部門へつなぐ」を置きます。その下の中央に、アクセント色{{accent:t}}で塗った円を1つ置き、中に白文字で「お客さま」「相談センター」（太字19pt）、その下に16ptで「月1,200件」と書きます。円の周りに、6つの白い角丸の箱（灰色の枠）を、上から時計回りに等しい角度で置いてください。箱は中心の円から、灰色の線（太さ{{line:t}}pt）で結びます。箱の中は、左上に部門名（太字18pt）、右上に件数（太字20pt）、その下に16ptで内容を書きます。箱は、上＝配送センター（配送遅れの確認・420件）、右上＝営業部（契約・解約の相談・240件）、右下＝経理部（請求・返金の確認・180件）、下＝情報システム部（ログインの不具合・160件）、左下＝商品開発部（不具合の報告・90件）、左上＝店舗（来店予約の調整・110件）です。最も多い部門は「{{focus:t}}」にしてください（強調するときは、配送センターの箱の枠を太いアクセント色にし、件数の数字もアクセント色にする）。色はアクセント色の1色と灰色だけ。見出しは32〜36pt。最下部に「※ 件数は2026年度上期の月平均。太字の数字は、その部門へ回した相談の件数。」と注記を入れてください。部門と数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、中心の円は「挿入」→「図形」→「楕円」、周りの箱は「四角形: 角を丸くする」で作ります。手早く作るなら、「挿入」→「SmartArt」から、中心と周りに要素が広がる形（「関連」の中の放射状の図）を選ぶと、要素が自動で並びます。見本のように箱の中に部門名と件数を入れたいときは、図形で作ります。線は「挿入」→「図形」→「直線」を、中心から各箱に引き、最後に「配置」→「背面へ移動」で図形の後ろに回します。',
    'Googleスライドでも、「挿入」→「図形」→「図形」で円と角丸四角形を作り、「挿入」→「線」→「線」で結びます。周りの箱を等間隔で円形に並べるのは手作業だと難しいので、まず上・右上・右下・下・左下・左上の6か所に薄い目印を置き、箱の中心を合わせてから目印を消すと、きれいにそろいます。周りの要素が9個を超えるときは、中心を2つに分けるか、関係の近い要素をまとめて数を減らします。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。図は1つのSVG（図形を描く仕組み）で、周りの箱は中心から60度ずつの位置の座標で置いています。数を変えるときは、360度を要素の数で割った角度で置き直します。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">お客さま相談センターと社内6部門のつながり</p>
  <h1 class="title">月1,200件の相談を、窓口1つで6部門へつなぐ</h1>
  <div class="hs-diagram">
    <svg viewBox="0 0 848 340" role="img" aria-label="お客さま相談センターを中心に、6つの社内部門へ相談をつなぐ図">
      <g class="hs-lines">
        <path d="M424 170 L424 40" />
        <path d="M424 170 L683.8 105" />
        <path d="M424 170 L683.8 235" />
        <path d="M424 170 L424 300" />
        <path d="M424 170 L164.2 235" />
        <path d="M424 170 L164.2 105" />
      </g>
      <g class="hs-sat is-top">
        <rect x="306" y="7" width="236" height="66" rx="12" />
        <text class="hs-n" x="322" y="36">配送センター</text>
        <text class="hs-c" x="526" y="36" text-anchor="end">420件</text>
        <text class="hs-s" x="322" y="60">配送遅れの確認</text>
      </g>
      <g class="hs-sat">
        <rect x="565.8" y="72" width="236" height="66" rx="12" />
        <text class="hs-n" x="581.8" y="101">営業部</text>
        <text class="hs-c" x="785.8" y="101" text-anchor="end">240件</text>
        <text class="hs-s" x="581.8" y="125">契約・解約の相談</text>
      </g>
      <g class="hs-sat">
        <rect x="565.8" y="202" width="236" height="66" rx="12" />
        <text class="hs-n" x="581.8" y="231">経理部</text>
        <text class="hs-c" x="785.8" y="231" text-anchor="end">180件</text>
        <text class="hs-s" x="581.8" y="255">請求・返金の確認</text>
      </g>
      <g class="hs-sat">
        <rect x="306" y="267" width="236" height="66" rx="12" />
        <text class="hs-n" x="322" y="296">情報システム部</text>
        <text class="hs-c" x="526" y="296" text-anchor="end">160件</text>
        <text class="hs-s" x="322" y="320">ログインの不具合</text>
      </g>
      <g class="hs-sat">
        <rect x="46.2" y="202" width="236" height="66" rx="12" />
        <text class="hs-n" x="62.2" y="231">商品開発部</text>
        <text class="hs-c" x="266.2" y="231" text-anchor="end">90件</text>
        <text class="hs-s" x="62.2" y="255">不具合の報告</text>
      </g>
      <g class="hs-sat">
        <rect x="46.2" y="72" width="236" height="66" rx="12" />
        <text class="hs-n" x="62.2" y="101">店舗</text>
        <text class="hs-c" x="266.2" y="101" text-anchor="end">110件</text>
        <text class="hs-s" x="62.2" y="125">来店予約の調整</text>
      </g>
      <circle class="hs-hub" cx="424" cy="170" r="66" />
      <text class="hs-hub-t" x="424" y="154" text-anchor="middle">お客さま</text>
      <text class="hs-hub-t" x="424" y="178" text-anchor="middle">相談センター</text>
      <text class="hs-hub-s" x="424" y="206" text-anchor="middle">月1,200件</text>
    </svg>
  </div>
  <p class="note">※ 件数は2026年度上期の月平均。太字の数字は、その部門へ回した相談の件数。</p>
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
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

.hs-diagram { position: relative; flex: 1; margin: 12px 0 8px; min-height: 0; }
.hs-diagram svg { position: absolute; inset: 0; width: 100%; height: 100%; }
/* 図の中の寸法は、viewBox（幅848）の数字そのまま */
.hs-lines path { fill: none; stroke: #c3c8d2; stroke-width: {{line}}; }
.hs-sat rect { fill: #fff; stroke: #c3c8d2; stroke-width: 2; }
.hs-n { font-size: 18px; font-weight: 800; fill: #1f2430; }
.hs-c { font-size: 20px; font-weight: 800; fill: #5a6070; font-variant-numeric: tabular-nums; }
.hs-s { font-size: 16px; fill: #5a6070; }
.hs-hub { fill: var(--accent); }
.hs-hub-t { font-size: 19px; font-weight: 800; fill: #fff; }
.hs-hub-s { font-size: 16px; font-weight: 700; fill: #fff; }
/* 最も多い部門（data-focus="top"） */
.slide[data-focus="top"] .hs-sat.is-top rect { stroke: var(--accent); stroke-width: 3; }
.slide[data-focus="top"] .hs-sat.is-top .hs-c { fill: var(--accent); }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '最も多い部門',
      value: 'top',
      options: [
        { value: 'top', label: '強調する' },
        { value: 'none', label: '強調しない' },
      ],
    },
    { key: 'line', label: '線の太さ（pt）', min: 2, max: 8, step: 1, value: 3, unit: '' },
  ],
  cautions: [
    '周りの要素を9個以上にしないようにします。箱が小さくなり、文字が読めなくなります。多いときは、似た要素をまとめて6〜8個にします。',
    '線の太さや長さで意味を持たせるときは、それを必ず注記に書きます。何も書かないと、線が太い・長いことに何か意味があると受け取られます。意味がなければ、全部同じ太さ・同じ長さにそろえます。',
    '周りの数字を載せるなら、合計が中心の数字と合っているか検算します。見本なら、420＋240＋180＋160＋90＋110＝1,200件です。',
    '中心を強調して、周りを控えめにします。周りの箱にまで濃い色を使うと、中心が目立たなくなり、「何が軸なのか」が伝わりません。強調するのは中心と、話したい1か所だけです。',
  ],
  similar: [
    { slug: 'system-diagram', diff: 'システム構成型は、領域に分けて部品とデータの流れを見せる型です。ハブ＆スポーク型は、中心と周りの関係を放射状に見せます。' },
    { slug: 'stakeholder', diff: 'ステークホルダー型は、関係者を影響の大きさと関心の高さで位置づける型です。ハブ＆スポーク型は、中心との接続を見せます。' },
    { slug: 'dependency', diff: '依存関係ネットワーク型は、要素どうしの「これが済まないとあれができない」を線でつなぐ型です。ハブ＆スポーク型は、すべての線が中心に集まります。' },
  ],
  faq: [
    {
      q: 'ハブ＆スポークとは何ですか？',
      a: '自転車の車輪のように、中心（ハブ）から周りへ線（スポーク）が伸びる形のことです。もとは航空会社が、中心の空港から各地の空港へ路線を広げる仕組みを指す言葉で、いまは窓口が1つで多方面に広がる構造を表すのに使われます。',
    },
    {
      q: 'PowerPointでハブ＆スポークの図を作るにはどうしますか？',
      a: '最も手早いのは、「挿入」→「SmartArt」から、中心と周りに要素が広がる放射状の図を選ぶ方法です。見た目を細かく整えたいときは、楕円と角丸四角形を自分で置いて、直線で結びます。',
    },
    {
      q: '周りの要素は何個までにすべきですか？',
      a: '4〜8個が見やすい範囲です。見本のように6個にすると、60度ずつきれいに並びます。9個以上になると箱が小さくなるので、似た要素をまとめて数を減らします。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
