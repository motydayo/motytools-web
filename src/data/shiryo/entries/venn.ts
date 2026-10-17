import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'venn',
  no: 68,
  category: 'keikaku',
  name: 'ベン図型',
  en: 'Venn diagram',
  aka: ['ベン図', '3つの円の重なり', '集合の図', '重なり図', 'オーバーラップ図'],
  mode: 'static',
  title: 'ベン図とは？重なる部分を見せるスライドの作り方【PowerPoint・見本】',
  description:
    '複数の円を重ねて「共通する部分」を見せる「ベン図型」のスライドを見本で解説。2つ・3つの円の使い分け、重なりの強調のしかた、PowerPoint・Googleスライドでの作り方（円の透明度）、AIへの指示文とHTMLまでまとめました。',
  oneLine: '円を重ねて、共通する部分（狙い目）がどこかを一目で示す。',
  what: [
    '2つか3つの円を重ね、「重なる部分」に意味を持たせる型です。見本では、地域の工務店が新サービスを考えるときの3つの視点、「自社の強み」「お客さまの困りごと」「競合が手薄なところ」を3つの円にしています。3つがすべて重なる中央を「狙い目」として濃く塗り、そこに入るのが「小さな修繕の無料診断と年1回の点検」だと、右の列で説明しています。',
    'ベン図のよさは、「これとこれが同時に当てはまるもの」を、文章を使わずに示せることです。円の中の文字は名前だけにして、中身の説明は円の外に書くのが決まりです。円の中に長い文字を入れると、重なった部分で文字が読めなくなります。円は3つまでにして、塗りは透明にし、重なると色が濃くなるようにします。',
  ],
  when: [
    '新しい事業やサービスの狙いを、「自社の強み・お客さまのニーズ・競合の状況」が重なる所として説明するとき',
    '2つの部署や2つのサービスで、共通する部分と違う部分を見せたいとき',
    '商品が複数の条件を同時に満たすことを、ひと目で伝えたいとき（例: 安い・早い・安全）',
    '採用や人材の資料で、スキル・経験・希望が重なる人物像を示すとき',
  ],
  avoid: [
    '円が4つ以上になるとき（重なる部分が多すぎて読めない。マトリクス型や表で見せる）',
    '重なる部分に入る要素の数が多いとき（円の外に書く文字が増えすぎる。選択肢比較表型にする）',
    '大きさや割合の違いを正確に見せたいとき（円の面積は読み取りにくいので、棒グラフや円グラフ型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「ベン図型（Venn diagram）」で作ってください。いちばん上に小さく「新サービスの狙い所（地域の工務店）」、その下に結論の見出し「3つが重なる「小さな修繕の診断」を狙う」を置きます。左の広い場所に、同じ大きさの円を3つ、三角形の頂点の位置に半分ずつ重ねて置いてください（上の左に「自社の強み」、上の右に「お客さまの困りごと」、下の真ん中に「競合が手薄なところ」）。円の文字は17pt前後の太字で、名前だけを円の重ならない部分に書きます。円の塗りは「{{fill:t}}」にしてください（薄く塗るときは、アクセント色{{accent:t}}の透明度を高くして、重なると色が濃くなるようにする。どちらも円の輪郭線はアクセント色）。3つが重なる中央には「狙い目」と書きます。強調は「{{focus:t}}」にしてください（強調するときは、3つが重なる中央の部分だけをアクセント色で濃く塗る）。右の幅の狭い列には、細い縦の区切り線のあとに4つの項目を縦に並べ、それぞれ小さな円の印、太字の名前、灰色の説明を置いてください。1つ目は「自社の強み」「施工の技術・地元の信頼」、2つ目は「お客さまの困りごと」「誰に頼むか迷う・費用が見えない」、3つ目は「競合が手薄なところ」「小さな修繕は大手が断る」、4つ目は「重なる部分 ＝ 狙い目」「小さな修繕の無料診断＋年1回点検」です。色はアクセント色1色だけで、ほかは白・灰色・黒にします。見出しは32〜36pt、説明は16pt以上。最下部に「※ 3つの円が重なる部分は、自社・お客さま・競合の状況が同時にそろう領域。」と注記を入れてください。文言は私が書いたものだけを使い、新しい項目を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「図形」→「楕円」を選び、Shiftキーを押しながらドラッグして正円を描きます。同じ大きさの円を3つコピーして置き、1つずつ右クリック→「図形の書式設定」→「塗りつぶし」→「塗りつぶし（単色）」で色を選び、「透明度」を70〜80%にします。透明にすると、重なった部分が自然に濃くなります。3つが重なる部分は、そこだけ別の図形を重ねることもできますが、「図形の書式」→「図形の結合」→「重なり抽出」で、3つの円の共通部分だけの図形を作ると、自由に色を付けられます。円の中の文字は円の中に直接書かず、「テキスト ボックス」で重ならない部分に置くと、位置を調整しやすくなります。早く作りたいときは、「挿入」→「SmartArt」→「関係」の中にある「基本ベン図」などを使い、文字を入れてから「変換」→「図形に変換」で普通の図形に戻します。',
    'Googleスライドでは、「挿入」→「図形」→「図形」→「楕円」で円を描き、Shiftキーを押しながらドラッグすると正円になります。円を選び、ツールバーの塗りつぶしの色から「カスタム」を選ぶと、色のあとに透明度のつまみが出るので、半透明にします。円の外側の説明は、「挿入」→「テキスト ボックス」で置きます。3つの円と文字は、全部を選んで「配置」→「グループ化」でまとめておくと、ずれません。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。ベン図は1枚の図（SVG）で、円の中心と半径を数字で決めています。3つが重なる部分は、3つの円弧で囲んだ形を別に描いているので、円の位置を動かしたときは、その形も描き直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-fill="{{fill}}" data-focus="{{focus}}">
  <p class="kicker">新サービスの狙い所（地域の工務店）</p>
  <h1 class="title">3つが重なる「小さな修繕の診断」を狙う</h1>

  <svg class="vn-svg" viewBox="0 0 848 320" role="img" aria-label="自社の強み、お客さまの困りごと、競合が手薄なところの3つの円が重なる部分に、狙い目があることを示すベン図">
    <!-- 3つの円（半径104） -->
    <circle class="vn-circle" cx="272" cy="106" r="104" />
    <circle class="vn-circle" cx="392" cy="106" r="104" />
    <circle class="vn-circle" cx="332" cy="208" r="104" />
    <!-- 3つが重なる部分（3つの円弧で囲んだ形） -->
    <path class="vn-core" d="M332 190.94 A104 104 0 0 0 375.7 113.6 A104 104 0 0 0 288.3 113.6 A104 104 0 0 0 332 190.94 Z" />

    <text class="vn-name" x="229" y="84" text-anchor="middle">自社の</text>
    <text class="vn-name" x="229" y="106" text-anchor="middle">強み</text>
    <text class="vn-name" x="435" y="84" text-anchor="middle">お客さまの</text>
    <text class="vn-name" x="435" y="106" text-anchor="middle">困りごと</text>
    <text class="vn-name" x="332" y="268" text-anchor="middle">競合が</text>
    <text class="vn-name" x="332" y="290" text-anchor="middle">手薄なところ</text>
    <text class="vn-core-t" x="332" y="146" text-anchor="middle">狙い目</text>

    <!-- 右の説明 -->
    <path class="vn-divider" d="M520 6 V312" />
    <g class="vn-rows">
      <circle class="vn-sw" cx="556" cy="20" r="9" />
      <text class="vn-row-t" x="580" y="26">自社の強み</text>
      <text class="vn-row-d" x="580" y="52">施工の技術・地元の信頼</text>
      <circle class="vn-sw" cx="556" cy="98" r="9" />
      <text class="vn-row-t" x="580" y="104">お客さまの困りごと</text>
      <text class="vn-row-d" x="580" y="130">誰に頼むか迷う・費用が見えない</text>
      <circle class="vn-sw" cx="556" cy="176" r="9" />
      <text class="vn-row-t" x="580" y="182">競合が手薄なところ</text>
      <text class="vn-row-d" x="580" y="208">小さな修繕は大手が断る</text>
      <circle class="vn-sw vn-sw-core" cx="556" cy="254" r="9" />
      <text class="vn-row-t" x="580" y="260">重なる部分 ＝ 狙い目</text>
      <text class="vn-row-d" x="580" y="286">小さな修繕の無料診断＋年1回点検</text>
    </g>
  </svg>

  <p class="note">※ 3つの円が重なる部分は、自社・お客さま・競合の状況が同時にそろう領域。</p>
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
.vn-svg { display: block; flex: 1; min-height: 0; width: 100%; margin: 8px 0 4px; }
.vn-svg text { font-family: inherit; }
.vn-circle { fill: var(--accent); fill-opacity: 0.14; stroke: var(--accent); stroke-width: 2.5; }
.vn-core { fill: var(--accent); fill-opacity: 0; }
.vn-name { font-size: 17px; font-weight: 800; fill: #1f2430; }
.vn-core-t { font-size: 16px; font-weight: 800; fill: #1f2430; }
.vn-divider { fill: none; stroke: #e3e5ea; stroke-width: 1.5; }
.vn-row-t { font-size: 18px; font-weight: 800; fill: #1f2430; }
.vn-row-d { font-size: 16px; fill: #5a6070; }
.vn-sw { fill: var(--accent); fill-opacity: 0.14; stroke: var(--accent); stroke-width: 2.5; }
.vn-sw-core { fill-opacity: 0.55; }

/* 円は線だけ（data-fill="line"） */
.slide[data-fill="line"] .vn-circle,
.slide[data-fill="line"] .vn-sw { fill-opacity: 0; }
.slide[data-fill="line"] .vn-sw-core { fill-opacity: 0.55; }

/* 重なりを強調（data-focus="center"） */
.slide[data-focus="center"] .vn-core { fill-opacity: 0.5; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'fill',
      type: 'select',
      label: '円の塗り',
      value: 'tint',
      options: [
        { value: 'tint', label: '薄く塗る' },
        { value: 'line', label: '線だけ' },
      ],
    },
    {
      key: 'focus',
      type: 'select',
      label: '強調する部分',
      value: 'center',
      options: [
        { value: 'center', label: '3つの重なりを強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
  ],
  cautions: [
    '円の中に長い文字を入れないこと。円の中は2〜6文字の名前だけにして、中身の説明は円の外に書きます。見本のように右の列に書くと、円が重なっても文字が読めます。',
    '円は透明に塗ること。不透明の円を重ねると、後ろの円が隠れて、重なりが見えません。PowerPointもGoogleスライドも「透明度」で半透明にできます。輪郭線をはっきり引くと、薄い色でも円の範囲が分かります。',
    '円の大きさに意味を持たせないこと。円が大きいと「数が多い」と読まれてしまいます。大きさが違うことに意味があるときは、必ず理由を書きます。意味がなければ、全部同じ大きさにそろえます。',
    '重なる部分が「本当に狙い目」だと言える根拠を、円の外に書きます。「3つの視点が重なるのでよい」と図だけで見せると、「それは何か」と聞かれます。見本のように、重なる部分に入る具体的な案を1つ書いて、結論につなげます。',
  ],
  similar: [
    { slug: 'matrix', diff: 'マトリクス型（2×2）は、2つの軸で4つの箱に分ける型です。ベン図型は、軸ではなく「当てはまるかどうか」の重なりを見せます。' },
    { slug: 'hub-spoke', diff: 'ハブ＆スポーク型は、中心と周りの要素を放射状につなぐ型です。ベン図型は、要素どうしが重なる部分に意味があるときに使います。' },
    { slug: 'option-table', diff: '選択肢比較表型は、3つ以上の案を表で比べる型です。重なる部分に入る案が多いときは、ベン図よりこちらの方が読みやすくなります。' },
  ],
  faq: [
    {
      q: 'ベン図の円は、2つと3つのどちらがよいですか？',
      a: '話す内容が2つの比べ合いなら2つ、「3つの条件が同時にそろう所」を見せたいなら3つです。3つにすると、円の中が7つの部分に分かれるので、見せたい部分を1か所に決めて、そこだけ色を濃くします。4つ以上は、重なりが読めなくなるのでおすすめしません。',
    },
    {
      q: 'PowerPointでベン図の重なり部分だけに色を付ける方法は？',
      a: '円を選んでから、「図形の書式」→「図形の結合」→「重なり抽出」を使うと、選んだ図形の共通部分だけの新しい図形ができます。この図形に好きな色を付けて、元の円の上に重ねます。元の円は消さずにコピーしておき、結合は別のコピーに対して行います。',
    },
    {
      q: 'ベン図とマトリクス図は何が違いますか？',
      a: 'ベン図は、「ものがどの集まりに入るか」を円の重なりで見せます。マトリクス図は、2つの軸（例: 影響の大きさと実現のしやすさ）で、ものの位置を4つの箱に分けます。共通する部分を見せたいならベン図、優先順位を付けたいならマトリクスです。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
