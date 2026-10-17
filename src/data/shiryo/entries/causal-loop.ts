import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'causal-loop',
  no: 67,
  category: 'keikaku',
  name: '因果ループ型',
  en: 'Causal loop diagram',
  aka: ['因果ループ図', '悪循環の図', '好循環の図', 'フィードバックループ', 'ループ図'],
  mode: 'static',
  title: '因果ループ図とは？悪循環・好循環を1枚で見せるスライドの作り方【見本・書き方】',
  description:
    '原因と結果がぐるぐる影響し合う様子を輪で見せる「因果ループ型」のスライドを見本で解説。矢印の＋と−の意味、強化ループ（R）、断ち切る場所の示し方、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '原因と結果が輪になって影響し合う様子を見せ、悪循環を断つ場所を示す。',
  what: [
    '要素を矢印の輪でつなぎ、「これが増えると、あれが増える」を矢印ごとに記号で書く型です。見本では「残業が増える→疲れがたまる→ミス・手戻りが増える→仕事の量が増える→（また）残業が増える」という悪循環を、時計回りの4つの箱と矢印で描いています。矢印の上の「＋」は、根元が増えると先も増えるという印です。輪の真ん中の「R」は、回るほど大きくなる輪（強化ループ）を表します。',
    'この型の価値は、「一直線の原因と結果」では説明できない問題を説明できることです。悪循環は、どこか1か所を断たないと止まりません。そこで、輪のうち手を打てる1か所に印を付け、右に「断ち切るなら何をするか」を書きます。箱の数は4〜6個までが目安です。それ以上だと矢印が交差して読めなくなります。',
  ],
  when: [
    '残業・クレーム・離職など、放っておくと悪化し続ける問題の仕組みを説明するとき',
    '口コミが増えて客が増え、さらに口コミが増える、といった好循環を、事業の強みとして見せるとき',
    '対策の提案で、「この1か所を直せば全体が止まる」と手を打つ場所を示したいとき',
    '新しい施策が他にどう波及するか、影響の連鎖を関係者と考えるとき',
  ],
  avoid: [
    '原因から結果へ一方向に流れるだけのとき（フィッシュボーン型、課題・原因・解決型にする）',
    '作業の順番を示したいだけのとき（フロー型にする。矢印が輪になっても、「繰り返す手順」なら循環サイクル型）',
    '要素が7つ以上になるとき（主な輪1つに絞り、残りは別のスライドに分ける）',
  ],
  prompt:
    '16:9のスライドを1枚、「因果ループ型（causal loop diagram）」で作ってください。いちばん上に小さく「長時間労働の悪循環（営業事務チーム）」、その下に結論の見出し「残業は、放っておくとさらに残業を生む」を置きます。左の広い場所に、白地・黒い枠の角丸の箱を4つ、長方形の四隅に置いてください。左上は「残業が増える」、右上は「疲れがたまる」、右下は「ミス・手戻りが増える」、左下は「仕事の量が増える」です。箱を時計回りに灰色の矢印でつなぎ（左上→右上→右下→左下→左上）、矢印の太さは{{arrow:t}}ptにします。各矢印の真ん中に、白い丸の中に「＋」を書いた印を置いてください。輪の中央には灰色の丸を置き、大きな「R」と、その下に「強化ループ」と書きます。右側の幅の狭い列には、上に灰色の枠で「読み方」（「＋」の印の説明「一方が増えると、もう一方も増える」と「R ＝ 回るほど大きくなる輪」）、下に白い枠で「断ち切るなら」「ミス・手戻りを減らす」（21pt前後の太字）「確認の手順を決めて、同じミスを繰り返さない」を置きます。断ち切る場所の印は「{{cut:t}}」にしてください（表示するときは、右下の「ミス・手戻りが増える」の箱の枠と、そこから左下へ向かう矢印の上の斜め線2本と、右下の「断ち切るなら」の枠と見出しを、アクセント色{{accent:t}}にする）。色はアクセント色1色だけで、ほかは白・灰色・黒にします。見出しは32〜36pt、箱の文字は18pt以上。最下部に「※ 矢印の根元が増えると、矢印の先も増える関係を「＋」で示した。」と注記を入れてください。文言は私が書いたものだけを使い、新しい要素を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「図形」→「四角形: 角を丸くする」を4つ、長方形の四隅に置きます。4つを選んで「図形の書式」→「配置」で「左右に整列」「上下に整列」を使うと、きれいな長方形の配置になります。箱の間は「挿入」→「図形」の「線」の仲間にある、先に矢じりが付いた線（曲がった形もあります）でつなぎ、線を選んで「図形の書式」→「図形の枠線」→「太さ」で3pt前後にします。「＋」は楕円（「図形」→「楕円」）に文字を入れ、矢印の上に重ねます。早く形にしたいときは、「挿入」→「SmartArt」→「循環」から、矢印で輪になる図を選んで箱の文字を入れ替える方法もあります。',
    'Googleスライドでは、「挿入」→「図形」→「図形」で角丸四角形を4つ置き、「挿入」→「線」→「矢印」でつなぎます。「＋」の印は、「図形」→「図形」の楕円に文字を入れます。矢印の太さと色は、ツールバーの「枠線の太さ」「枠線の色」で変えます。図が崩れないように、全部を選んで「配置」→「グループ化」をしておくと、位置を動かすときに安心です。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。輪は1枚の図（SVG）の中の箱と矢印で描いていて、位置は数字で決めています。箱を増やすときは、矢印と「＋」の印も1組ずつ足してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-cut="{{cut}}">
  <p class="kicker">長時間労働の悪循環（営業事務チーム）</p>
  <h1 class="title">残業は、放っておくとさらに残業を生む</h1>

  <svg class="cl-svg" viewBox="0 0 848 320" role="img" aria-label="残業が増えると疲れがたまり、ミスや手戻りが増え、仕事の量が増えて、さらに残業が増える悪循環の図">
    <!-- 矢印（時計回り） -->
    <g class="cl-arrows">
      <path d="M210 60 H320" />
      <path d="M425 90 V220" />
      <path d="M330 260 H220" />
      <path d="M115 230 V100" />
    </g>
    <g class="cl-heads">
      <polygon points="330,60 316,52 316,68" />
      <polygon points="425,230 417,216 433,216" />
      <polygon points="210,260 224,252 224,268" />
      <polygon points="115,90 107,104 123,104" />
    </g>

    <!-- 要素 -->
    <g class="cl-node">
      <rect x="20" y="30" width="190" height="60" rx="12" />
      <text x="115" y="67" text-anchor="middle">残業が増える</text>
    </g>
    <g class="cl-node">
      <rect x="330" y="30" width="190" height="60" rx="12" />
      <text x="425" y="67" text-anchor="middle">疲れがたまる</text>
    </g>
    <g class="cl-node cl-cutnode">
      <rect x="330" y="230" width="190" height="60" rx="12" />
      <text x="425" y="267" text-anchor="middle">ミス・手戻りが増える</text>
    </g>
    <g class="cl-node">
      <rect x="20" y="230" width="190" height="60" rx="12" />
      <text x="115" y="267" text-anchor="middle">仕事の量が増える</text>
    </g>

    <!-- 矢印ごとの「＋」 -->
    <g class="cl-plus">
      <circle cx="270" cy="60" r="15" /><text x="270" y="68" text-anchor="middle">+</text>
      <circle cx="425" cy="160" r="15" /><text x="425" y="168" text-anchor="middle">+</text>
      <circle cx="270" cy="260" r="15" /><text x="270" y="268" text-anchor="middle">+</text>
      <circle cx="115" cy="160" r="15" /><text x="115" y="168" text-anchor="middle">+</text>
    </g>

    <!-- 輪の中央: 強化ループ -->
    <g class="cl-r">
      <circle cx="270" cy="160" r="54" />
      <text class="cl-r-big" x="270" y="160" text-anchor="middle">R</text>
      <text class="cl-r-sub" x="270" y="186" text-anchor="middle">強化ループ</text>
    </g>

    <!-- 断ち切る場所の印 -->
    <g class="cl-cutmark">
      <path d="M296 243 L310 277" />
      <path d="M308 243 L322 277" />
    </g>

    <!-- 右の説明 -->
    <g class="cl-card">
      <rect x="580" y="20" width="268" height="140" rx="12" />
      <text class="cl-card-h" x="600" y="48">読み方</text>
      <circle class="cl-legend" cx="613" cy="82" r="13" /><text class="cl-legend-t" x="613" y="89" text-anchor="middle">+</text>
      <text class="cl-card-t" x="637" y="80">一方が増えると、</text>
      <text class="cl-card-t" x="637" y="102">もう一方も増える</text>
      <text class="cl-card-t" x="600" y="140">R ＝ 回るほど大きくなる輪</text>
    </g>
    <g class="cl-cutcard">
      <rect x="580" y="176" width="268" height="124" rx="12" />
      <text class="cl-card-h cl-cut-h" x="600" y="204">断ち切るなら</text>
      <text class="cl-cut-t" x="600" y="234">ミス・手戻りを減らす</text>
      <text class="cl-card-t" x="600" y="264">確認の手順を決めて、</text>
      <text class="cl-card-t" x="600" y="286">同じミスを繰り返さない</text>
    </g>
  </svg>

  <p class="note">※ 矢印の根元が増えると、矢印の先も増える関係を「＋」で示した。</p>
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
.cl-svg { display: block; flex: 1; min-height: 0; width: 100%; margin: 8px 0 4px; }
.cl-svg text { font-family: inherit; }
.cl-arrows { fill: none; stroke: #5a6070; stroke-width: {{arrow:n}}; stroke-linecap: round; }
.cl-heads { fill: #5a6070; }
.cl-node rect { fill: #fff; stroke: #1f2430; stroke-width: 2.5; }
.cl-node text { font-size: 18px; font-weight: 800; fill: #1f2430; }
.cl-plus circle { fill: #fff; stroke: #8a8f9c; stroke-width: 2; }
.cl-plus text { font-size: 22px; font-weight: 800; fill: #1f2430; }
.cl-r circle { fill: #f3f4f7; stroke: #c3c8d2; stroke-width: 2; }
.cl-r-big { font-size: 36px; font-weight: 800; fill: #1f2430; }
.cl-r-sub { font-size: 16px; font-weight: 700; fill: #5a6070; }
.cl-cutmark { display: none; fill: none; stroke: var(--accent); stroke-width: 4; stroke-linecap: round; }
.cl-card rect { fill: #f3f4f7; }
.cl-card-h { font-size: 15px; font-weight: 800; fill: #5a6070; }
.cl-card-t { font-size: 16px; fill: #1f2430; }
.cl-legend { fill: #fff; stroke: #8a8f9c; stroke-width: 2; }
.cl-legend-t { font-size: 20px; font-weight: 800; fill: #1f2430; }
.cl-cutcard rect { fill: #fff; stroke: #c3c8d2; stroke-width: 2; }
.cl-cut-t { font-size: 21px; font-weight: 800; fill: #1f2430; }

/* 断ち切る場所の印（data-cut="show"） */
.slide[data-cut="show"] .cl-cutmark { display: block; }
.slide[data-cut="show"] .cl-cutnode rect { stroke: var(--accent); stroke-width: 4; }
.slide[data-cut="show"] .cl-cutcard rect { stroke: var(--accent); stroke-width: 3; fill: color-mix(in srgb, var(--accent) 6%, #fff); }
.slide[data-cut="show"] .cl-cut-h { fill: var(--accent); }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'cut',
      type: 'select',
      label: '断ち切る場所の印',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
    { key: 'arrow', label: '矢印の太さ', min: 2, max: 5, step: 0.5, value: 3, unit: '' },
  ],
  cautions: [
    '矢印の「＋」と「−」を必ず書くこと。「＋」は根元が増えると先も増える、「−」は根元が増えると先は減る、という意味です。記号がないと、聞き手は矢印を「次の手順」と読んでしまい、輪の意味が伝わりません。',
    '要素の名前は「増える」「減る」と動きのある言い方でそろえます。「残業」だけだと増えるのか減るのか分からないので、「残業が増える」のように、数が増減できる言葉にします。',
    '輪の中で止める場所を1か所だけ決めること。全部の箱に色を付けて「全部直しましょう」と言うと、何から手を付けるか決まりません。手を打てる1か所を選び、その対策を右に書きます。',
    '矢印の数は輪を一周できる最小限にします。「疲れがたまる→仕事の量が増える」のような近道の矢印を足していくと、線が交差して読めなくなります。細かい関係は別のスライドに分けましょう。',
  ],
  similar: [
    { slug: 'cycle', diff: '循環サイクル型は、PDCAのように「繰り返す手順」を輪で見せる型です。因果ループ型は、手順ではなく、増えると増えるという影響の連鎖を表します。' },
    { slug: 'fishbone', diff: 'フィッシュボーン型は、結果に効く原因を一方向で洗い出す型です。因果ループ型は、結果がまた原因に戻ってくる悪循環・好循環を見せる型です。' },
    { slug: 'problem-solution', diff: '課題・原因・解決型は、原因を1つ挙げて解決策につなぐ型です。原因と結果が循環していて、1つの原因に絞れないときに因果ループ型へ切り替えます。' },
  ],
  faq: [
    {
      q: '因果ループ図の「R」と「B」は何ですか？',
      a: 'Rは強化ループ（Reinforcing）で、回るほど変化が大きくなる輪です。悪循環と好循環がこれにあたります。Bはバランスループ（Balancing）で、変化を打ち消して元に戻す輪です。見本のように悪循環を説明するときは、Rだけで十分です。',
    },
    {
      q: '悪循環と好循環は、同じ図で書けますか？',
      a: '書けます。矢印の「＋」や「−」を付けた輪で、同じ描き方です。見出しに「悪循環」と書けば悪い面、「好循環」と書けば良い面の図になります。好循環は、事業の強み（口コミが増える→お客さまが増える→口コミが増える）を見せるときに使えます。',
    },
    {
      q: 'PowerPointで輪になった矢印はどう描けばよいですか？',
      a: '曲線の矢印は形をそろえにくいので、箱を長方形の四隅に置き、まっすぐな矢印でつなぐ方がきれいに収まります。曲線にしたいときは、「挿入」→「図形」→「矢印: 曲線」を使いますが、丸い輪に近づけるには手間がかかります。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
