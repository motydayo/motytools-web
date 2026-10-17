import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'layer',
  no: 69,
  category: 'keikaku',
  name: 'レイヤー構造型',
  en: 'Layered structure',
  aka: ['階層構造図', '積み重ね図', '層構造', '3層構造', 'アーキテクチャ図'],
  mode: 'static',
  title: 'レイヤー構造とは？層の積み重ねを1枚で見せるスライドの作り方【見本・PowerPoint】',
  description:
    '上下に積み重なる層の関係を見せる「レイヤー構造型」のスライドを見本で解説。層の数と役割の決め方、強調する層の選び方、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '上下に積み重なる層を並べ、どの層が何を支えているかを見せる。',
  what: [
    '横長の帯を上から下へ積み重ね、層ごとに「名前・役割・具体例」を書く型です。見本では、ホテルの宿泊予約システムを「利用する層」「業務の層」「データの層」「基盤の層」の4段に分けています。上の層ほどお客さまに近く、下の層ほどシステムの奥にあります。右の矢印は、その向きを示しています。1か所だけ色を付けた「業務の層」は、見出しの話の中心になる層です。',
    'レイヤー構造のよさは、「どの層の話をしているのか」を聞き手と揃えられることです。「画面を直したい」と「データを入れ替えたい」は違う層の話なので、費用も期間も関わる人も違います。層の数は3〜5段までにし、「上の層は下の層に頼って動く」という決まりを守って並べます。層の名前は、同じ種類の言葉でそろえます。',
  ],
  when: [
    'システムやサービスの仕組みを、非エンジニアの上司や取引先に説明するとき',
    '「どの層の話か」をはっきりさせて、費用や担当の線引きをしたいとき',
    '事業の土台（人・仕組み・資金）と、お客さまに見える価値の関係を見せるとき',
    'ネットワークやセキュリティなど、層ごとの対策を整理して見せるとき',
  ],
  avoid: [
    '要素の上下ではなく、時間の順番を見せたいとき（フロー型・タイムライン型にする）',
    '要素の数が多く、層ではなく部品どうしのつながりが大事なとき（システム構成型にする）',
    '結論を頂点に、根拠を積み上げて見せたいとき（ピラミッド型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「レイヤー構造型（layered structure）」で作ってください。いちばん上に小さく「宿泊予約システムの構成」、その下に結論の見出し「ホテルの予約システムは、4つの層で動いている」を置きます。その下に、横長の角丸の帯を4段、上から順に縦に積み重ねてください（帯の間隔は{{gap:t}}pt）。各帯は白地・灰色の枠で、左から順に、番号の丸（灰色）、層の名前（21pt前後の太字）と役割（16pt・灰色）を縦に2行、具体例を丸いラベルで横に3つ並べます。1段目は「利用する層」「画面を通じて使う」、例は「予約サイト」「フロントの画面」「スマホアプリ」。2段目は「業務の層」「仕事のルールを処理する」、例は「空室の確認」「料金の計算」「予約の確定」。3段目は「データの層」「情報をためて取り出す」、例は「顧客台帳」「客室マスタ」「予約データ」。4段目は「基盤の層」「全体を動かす土台」、例は「サーバー」「ネットワーク」「セキュリティ」です。帯の右に細い列を作り、上に「お客さま側」、下に「システム側」と書き、その間に下向きの灰色の矢印を引いてください。強調は「{{focus:t}}」にしてください（強調する層は、枠を太くしてアクセント色{{accent:t}}にし、番号の丸もアクセント色にして、背景をごく薄いアクセント色にする。ほかの層は白地のまま）。色はアクセント色1色だけで、ほかは白・灰色・黒にします。見出しは32〜36pt。最下部に「※ 上の層は、下の層に頼って動く。下の層を変えると、上の層にも影響が出る。」と注記を入れてください。文言は私が書いたものだけを使い、新しい項目を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「図形」→「四角形: 角を丸くする」を4つ、縦に積んで置きます。4つを選んで「図形の書式」→「配置」→「上下に整列」「左右中央揃え」を押すと、間隔と幅がそろいます。層の名前と役割は帯の中に直接書き、具体例は「四角形: 角を丸くする」の小さな図形（角丸の度合いを最大にすると丸いラベルになる）を並べます。早く作りたいときは、「挿入」→「SmartArt」→「リスト」から、横長の帯が縦に積まれる図（「縦方向リスト」など）を選び、文字を入れ替えてから「変換」→「図形に変換」で普通の図形に戻します。',
    'Googleスライドでは、「挿入」→「図形」→「図形」から角丸四角形を4つ置き、全部を選んで「配置」→「均等に配置」→「縦方向」で間隔をそろえます。具体例のラベルは、小さな角丸四角形を並べ、選んで「配置」→「均等に配置」→「横方向」でそろえます。強調する層だけ、枠線の色と太さ（3pt）を変えます。層のまとまりごとに「配置」→「グループ化」をしておくと、動かすときにずれません。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。層は4つの横長の枠として積んでいて、強調する層は data-focus の値で切り替わります。層を足したいときは、枠を1つ複製して、番号と文字を書き換えてください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">宿泊予約システムの構成</p>
  <h1 class="title">ホテルの予約システムは、4つの層で動いている</h1>

  <div class="ly-body">
    <div class="ly-stack">
      <div class="ly-row">
        <i class="ly-no">1</i>
        <span class="ly-name"><b>利用する層</b><em>画面を通じて使う</em></span>
        <span class="ly-eg"><span>予約サイト</span><span>フロントの画面</span><span>スマホアプリ</span></span>
      </div>
      <div class="ly-row ly-logic">
        <i class="ly-no">2</i>
        <span class="ly-name"><b>業務の層</b><em>仕事のルールを処理する</em></span>
        <span class="ly-eg"><span>空室の確認</span><span>料金の計算</span><span>予約の確定</span></span>
      </div>
      <div class="ly-row ly-data">
        <i class="ly-no">3</i>
        <span class="ly-name"><b>データの層</b><em>情報をためて取り出す</em></span>
        <span class="ly-eg"><span>顧客台帳</span><span>客室マスタ</span><span>予約データ</span></span>
      </div>
      <div class="ly-row">
        <i class="ly-no">4</i>
        <span class="ly-name"><b>基盤の層</b><em>全体を動かす土台</em></span>
        <span class="ly-eg"><span>サーバー</span><span>ネットワーク</span><span>セキュリティ</span></span>
      </div>
    </div>
    <div class="ly-axis" aria-hidden="true">
      <span>お客さま側</span>
      <svg viewBox="0 0 24 200" preserveAspectRatio="none" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4 V194 M5 184 L12 195 L19 184" /></svg>
      <span>システム側</span>
    </div>
  </div>

  <p class="note">※ 上の層は、下の層に頼って動く。下の層を変えると、上の層にも影響が出る。</p>
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
.ly-body { flex: 1; min-height: 0; display: grid; grid-template-columns: minmax(0, 1fr) 96px; gap: 20px; margin: 16px 0 8px; }
.ly-stack { display: flex; flex-direction: column; gap: {{gap:n}}px; min-height: 0; }
.ly-row { flex: 1; display: grid; grid-template-columns: 36px 230px minmax(0, 1fr); align-items: center; gap: 16px; padding: 0 20px; border: 2px solid #e3e5ea; border-radius: 12px; background: #fff; }
.ly-no { display: grid; place-items: center; width: 36px; height: 36px; border-radius: 50%; background: #5a6070; color: #fff; font-size: 18px; font-weight: 800; font-style: normal; font-variant-numeric: tabular-nums; }
.ly-name { display: grid; gap: 2px; line-height: 1.3; }
.ly-name b { font-size: 21px; font-weight: 800; }
.ly-name em { font-size: 16px; font-style: normal; color: #5a6070; }
.ly-eg { display: flex; flex-wrap: wrap; gap: 8px; }
.ly-eg span { padding: 4px 12px; border: 1.5px solid #c3c8d2; border-radius: 999px; font-size: 16px; color: #5a6070; background: #fff; }
.ly-axis { display: grid; grid-template-rows: auto minmax(0, 1fr) auto; justify-items: center; gap: 8px; padding: 6px 0; color: #8a8f9c; font-size: 15px; font-weight: 700; text-align: center; }
.ly-axis svg { width: 24px; height: 100%; }

/* 強調する層（data-focus="logic" / "data"） */
.slide[data-focus="logic"] .ly-logic,
.slide[data-focus="data"] .ly-data { border: 3px solid var(--accent); background: color-mix(in srgb, var(--accent) 6%, #fff); }
.slide[data-focus="logic"] .ly-logic .ly-no,
.slide[data-focus="data"] .ly-data .ly-no { background: var(--accent); }
.slide[data-focus="logic"] .ly-logic .ly-eg span,
.slide[data-focus="data"] .ly-data .ly-eg span { border-color: var(--accent); color: #1f2430; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する層',
      value: 'logic',
      options: [
        { value: 'logic', label: '業務の層を強調' },
        { value: 'data', label: 'データの層を強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    { key: 'gap', label: '層の間隔', min: 0, max: 20, step: 2, value: 10, unit: '' },
  ],
  cautions: [
    '層の分け方を、1つの基準にそろえること。見本は「お客さまに近い順」です。「担当部署」と「技術の種類」を混ぜて分けると、どの層に何を入れるか迷い、聞き手も混乱します。何で分けたのかを一言で言えるか確かめます。',
    '層の数は3〜5段に収めます。6段以上になると、帯が細くなって文字が読めません。細かい層は1つにまとめ、詳しい説明は別のスライドに回します。',
    '「上の層は下の層に頼る」向きを守ること。たとえば画面（上）が基盤（下）を使うのは自然ですが、下の層が上の層に頼る矢印を描くと、構造の図ではなくなります。向きを示す矢印を1本添えておくと、迷いません。',
    '具体例は、聞き手が知っている言葉で書きます。「APIゲートウェイ」のような専門用語を並べても伝わりません。「予約の確定」「料金の計算」のように、その仕事をしている人が使う言葉にします。',
  ],
  similar: [
    { slug: 'pyramid', diff: 'ピラミッド型は、頂点の結論を、下の段の根拠で支える型です。レイヤー構造型は、機能や役割ごとの層の上下関係を見せ、結論は含みません。' },
    { slug: 'system-diagram', diff: 'システム構成型は、部品とデータの流れを矢印でつないだ図です。レイヤー構造型は、流れではなく、積み重なりの関係を見せます。' },
    { slug: 'hub-spoke', diff: 'ハブ＆スポーク型は、中心と周りの要素のつながりを放射状に見せる型です。レイヤー構造型は、上下に支え合う関係に向いています。' },
  ],
  faq: [
    {
      q: '3層構造や4層構造の「層」は、どう分ければよいですか？',
      a: 'システムでは、「画面（利用する層）・業務のルール（業務の層）・データの保存（データの層）」の3つに分けるのが基本で、それを動かす土台（基盤の層）を加えると4層になります。会社の仕組みなら「経営・事業・現場」のように、自分たちの仕事で通じる言葉で3〜5段に分けます。',
    },
    {
      q: 'PowerPointのSmartArtでレイヤー構造を作れますか？',
      a: '「挿入」→「SmartArt」→「リスト」の中に、横長の帯が積み重なる図があります。まずこれに文字を入れ、あとで「変換」→「図形に変換」を押して普通の図形にすると、層ごとに色や大きさを自由に直せます。',
    },
    {
      q: 'レイヤー構造とピラミッドの違いは何ですか？',
      a: 'ピラミッドは、上に結論、下に根拠という「論理の積み上げ」を表し、上に行くほど細くなります。レイヤー構造は、役割ごとの層が「上の層は下の層に頼る」関係で積み重なる図で、帯の幅は全部そろえます。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
