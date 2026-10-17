import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'stacked-bar',
  no: 29,
  category: 'data',
  name: '積み上げ棒型',
  en: 'Stacked bar chart',
  aka: ['積み上げ棒グラフ', '積上げグラフ', '内訳つき棒グラフ', '構成グラフ', 'スタックドバー'],
  mode: 'static',
  title: '積み上げ棒グラフとは？合計と内訳を同時に見せるスライドの作り方と見本',
  description:
    '1本の棒に事業別などの内訳を積み重ねる「積み上げ棒型」のスライドを見本で解説。合計を棒の上に書く理由、強調する内訳を1つに絞るコツ、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '合計の大きさと、その内訳の変化を1本の棒で同時に見せる。',
  what: [
    '横に年度を並べ、1本の棒を内訳ごとに色分けして積み重ねた型です。見本では2022〜2025年度の売上高を、法人向け・個人向け・海外の3つの内訳で積んでいます。棒全体の高さが合計の売上高で、棒の上に合計を書き、海外の段だけにアクセント色を付けて「海外の伸びで25.5億円に」という見出しの結論につなげています。',
    '決まりは、積む順番を全部の棒でそろえることと、強調する内訳を1つに絞ることです。いちばん下の段は土台になって比べやすいので、「合計の伸び」を見せたいときは大きくて安定した内訳を、「伸びている内訳」を見せたいときは、いちばん上に積んで色を付けます。各段の数字と、棒の上の合計の両方を書くと、聞き手が暗算しなくて済みます。',
  ],
  when: [
    '売上高を事業別・商品別・地域別などに分けて、合計の伸びと内訳の変化を一緒に見せたいとき',
    '費用の内訳（人件費・広告費・外注費など）が年々どう変わったかを説明したいとき',
    '「合計は増えたが、その中身は何が増えたのか」を会議で説明したいとき',
  ],
  avoid: [
    '内訳の割合の違いだけを比べたいとき（合計の長さがそろう100%積み上げ型にする）',
    '内訳が6つ以上あり、段が細くて数字を読めないとき（上位3〜4つと「その他」にまとめる）',
    '内訳の一つひとつの大きさを正確に比べたいとき（上に積んだ段は土台がずれるので、グループ化した縦棒グラフ型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「積み上げ棒型（stacked column chart）」で作ってください。いちばん上に小さく「事業別の売上高（2022〜2025年度）」、その下に結論の見出し「海外事業の伸びで売上は25.5億円に」を置きます。左の広い場所に積み上げ縦棒グラフを置き、横に2022〜2025年度の4本を並べます。各棒は下から順に「法人向け」「個人向け」「海外」を積み、値（億円）は2022年度が8.6・5.2・2.6、2023年度が9.9・5.6・3.7、2024年度が11.2・5.9・5.2、2025年度が12.5・6.1・6.9です。縦の目盛りは0から30まで5刻みにし、必ず0から始めてください。段の高さは値にきっちり比例させ、各段の中に値を書き、棒の上には合計（16.4・19.2・22.3・25.5）を太字で書きます。右端の棒の横には、段の名前を直接書き、凡例は付けません。色は「{{focus:t}}」にして、色を付ける段はアクセント色{{accent:t}}、ほかの段は灰色にします。棒の太さは1本ぶんの幅の{{bar:t}}にします。右側の細い列には「2.7倍」を52pt前後の太字・アクセント色で大きく置き、その下に「海外事業の売上（2022年度比）」、区切り線を挟んで「全体は1.6倍」と書いてください。見出しは32〜36pt、目盛りと年度は14pt以上。下に「※ 全社の売上高（税抜）。段の数字は事業ごとの売上高。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「グラフ」→「縦棒」→「積み上げ縦棒」を選び、出てきた表に年度（行）と内訳（列）の値を入れます。合計は表に入れずに、棒の上に「テキストボックス」で重ねるか、表に「合計」の列を足して、その系列を「折れ線」にして線と点を消し、ラベルだけ上に出す方法があります。段ごとの色は、段を1回クリックで同じ内訳が全部、もう1回で1つだけ選ばれるので、「書式」→「図形の塗りつぶし」で変えます。「グラフ要素を追加」→「データラベル」→「中央」で段の中に数字を出します。',
    'Googleスライドでは、「挿入」→「グラフ」→「縦棒」で入れてから、右上の︙（その他）→「ソースを開く」でスプレッドシートを開き、値を入れます。グラフの編集画面の「設定」→「グラフの種類」から「積み上げ縦棒グラフ」を選びます。「カスタマイズ」→「系列」で内訳ごとの色とデータラベルを設定し、直したらスライドに戻って「更新」を押します。合計の数字は、スライド上のテキストボックスで棒の上に重ねるのが手早い方法です。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。各段の高さは「その段の値 ÷ 棒の合計」、棒の高さは「合計 ÷ 目盛りの最大（30）」で決めているので、値を変えるときは合計と目盛りの最大も一緒に見直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">事業別の売上高（2022〜2025年度）</p>
  <h1 class="title">海外事業の伸びで売上は25.5億円に</h1>

  <div class="body">
    <div class="chart">
      <!-- 目盛り（--v は値。0から30まで） -->
      <div class="y">
        <span class="unit">（億円）</span>
        <span style="--v: 0">0</span><span style="--v: 5">5</span><span style="--v: 10">10</span><span style="--v: 15">15</span>
        <span style="--v: 20">20</span><span style="--v: 25">25</span><span style="--v: 30">30</span>
      </div>
      <div class="plot">
        <!-- 棒1本 = .slot（--v は合計）。段は下から 法人向け・個人向け・海外 の順 -->
        <div class="cols">
          <div class="slot" style="--v: 16.4">
            <span class="total">16.4</span>
            <div class="stack">
              <span class="seg s1" style="--v: 8.6; --t: 16.4"><b>8.6</b></span>
              <span class="seg s2" style="--v: 5.2; --t: 16.4"><b>5.2</b></span>
              <span class="seg s3" style="--v: 2.6; --t: 16.4"><b>2.6</b></span>
            </div>
          </div>
          <div class="slot" style="--v: 19.2">
            <span class="total">19.2</span>
            <div class="stack">
              <span class="seg s1" style="--v: 9.9; --t: 19.2"><b>9.9</b></span>
              <span class="seg s2" style="--v: 5.6; --t: 19.2"><b>5.6</b></span>
              <span class="seg s3" style="--v: 3.7; --t: 19.2"><b>3.7</b></span>
            </div>
          </div>
          <div class="slot" style="--v: 22.3">
            <span class="total">22.3</span>
            <div class="stack">
              <span class="seg s1" style="--v: 11.2; --t: 22.3"><b>11.2</b></span>
              <span class="seg s2" style="--v: 5.9; --t: 22.3"><b>5.9</b></span>
              <span class="seg s3" style="--v: 5.2; --t: 22.3"><b>5.2</b></span>
            </div>
          </div>
          <div class="slot" style="--v: 25.5">
            <span class="total">25.5</span>
            <div class="stack">
              <span class="seg s1" style="--v: 12.5; --t: 25.5"><b>12.5</b><em class="name">法人向け</em></span>
              <span class="seg s2" style="--v: 6.1; --t: 25.5"><b>6.1</b><em class="name">個人向け</em></span>
              <span class="seg s3" style="--v: 6.9; --t: 25.5"><b>6.9</b><em class="name">海外</em></span>
            </div>
          </div>
        </div>
      </div>
      <div class="x"><span>2022年度</span><span>2023年度</span><span>2024年度</span><span>2025年度</span></div>
    </div>

    <div class="side">
      <span class="big">2.7倍</span>
      <span class="big-label">海外事業の売上（2022年度比）</span>
      <span class="sub">全体は1.6倍</span>
    </div>
  </div>

  <p class="note">※ 全社の売上高（税抜）。段の数字は事業ごとの売上高。</p>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* 幅960px×高さ540px（PowerPointの16:9と同じ比率） */
.slide {
  --accent: {{accent}};
  --c1: #b4bac6; --c2: #dfe2e8; --c3: var(--accent); /* 下の段から順の色 */
  --max: 30; /* 目盛りの最大。棒の高さ = 合計 ÷ 最大 */
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
.body { flex: 1; display: flex; gap: 34px; margin: 16px 0 10px; min-height: 0; }

.chart { flex: 1; display: grid; grid-template-columns: 48px 1fr; grid-template-rows: 1fr 30px; padding: 28px 76px 0 0; min-width: 0; }
.y, .plot { position: relative; }
.y span { position: absolute; right: 10px; bottom: calc(var(--v) / var(--max) * 100%); transform: translateY(50%); font-size: 14px; color: #8a8f9c; }
.y .unit { bottom: 100%; left: 0; right: auto; transform: none; margin-bottom: 8px; font-size: 13px; white-space: nowrap; }
.plot {
  box-shadow: inset 0 1px #e3e5ea, inset 0 -1px #8a8f9c;
  background: repeating-linear-gradient(to top, #e3e5ea 0 1px, transparent 1px calc(100% / 6));
}
.cols { position: absolute; inset: 0; display: flex; }
.slot { position: relative; flex: 1; display: flex; justify-content: center; align-items: flex-end; }
.stack { width: {{bar}}; height: calc(var(--v) / var(--max) * 100%); display: flex; flex-direction: column-reverse; }
.seg {
  position: relative; display: flex; align-items: center; justify-content: center;
  height: calc(var(--v) / var(--t) * 100%);
  box-shadow: inset 0 1.5px #fff;
  font-size: 15px; font-variant-numeric: tabular-nums;
}
.seg b { font-weight: 700; }
.s1 { background: var(--c1); }
.s2 { background: var(--c2); }
.s3 { background: var(--c3); color: #fff; }
.name { position: absolute; left: calc(100% + 10px); top: 50%; transform: translateY(-50%); font-style: normal; font-size: 15px; font-weight: 700; color: #5a6070; white-space: nowrap; }
.s3 .name { color: var(--accent); }
.total { position: absolute; left: 0; right: 0; bottom: calc(var(--v) / var(--max) * 100%); padding-bottom: 5px; text-align: center; font-size: 19px; font-weight: 800; }
.x { grid-column: 2; display: flex; align-items: flex-end; }
.x span { flex: 1; text-align: center; font-size: 15px; color: #5a6070; }

/* 色を付ける内訳（data-focus="tint" なら3つとも同じ色の濃淡） */
.slide[data-focus="tint"] { --c1: color-mix(in srgb, var(--accent) 22%, #fff); --c2: color-mix(in srgb, var(--accent) 50%, #fff); }

.side { flex: 0 0 176px; display: flex; flex-direction: column; justify-content: center; gap: 6px; padding-left: 24px; border-left: 1px solid #e3e5ea; }
.big { font-size: 52px; font-weight: 800; line-height: 1.05; color: var(--accent); }
.big-label { font-size: 16px; color: #5a6070; }
.sub { margin-top: 14px; padding-top: 12px; border-top: 1px solid #e3e5ea; font-size: 20px; font-weight: 800; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '色を付ける内訳',
      value: 'abroad',
      options: [
        { value: 'abroad', label: '海外の段だけ色を付ける' },
        { value: 'tint', label: '3つとも同じ色の濃淡' },
      ],
    },
    { key: 'bar', label: '棒の太さ', min: 30, max: 80, step: 2, value: 56, unit: '%' },
  ],
  cautions: [
    '積む順番を、全部の棒でそろえます。年によって段の順番が入れ替わると、聞き手は色を探し直すことになり、増減が読めません。',
    '強調する内訳は1つだけにして、ほかは灰色にします。3つの内訳に3色を付けると、どこを見ればよいか分からなくなります。強調するのは、いちばん上か、いちばん下の段にすると変化が追いやすくなります。',
    '下の段が伸び縮みすると、その上に積んだ段まで一緒に上下するので、上の段が増えたのか減ったのか見分けにくくなります。内訳の増減を正確に比べたい段は、いちばん下に置くか、積み上げをやめて棒を並べます。',
    '合計を棒の上に書きます。段の数字だけだと、聞き手が頭の中で足し算をすることになります。逆に、段が細くて数字が入らないときは、無理に入れずに注記か別の表にします。',
  ],
  similar: [
    { slug: 'percent-stacked', diff: '100%積み上げ型は、どの棒も同じ長さにして内訳の「割合」だけを比べる型です。合計の大きさが違っても、中身の配分の変化を見せたいときに使います。' },
    { slug: 'bar-chart', diff: '縦棒グラフ型は、内訳を分けずに合計だけを棒で並べる型です。内訳が不要なときは、こちらの方がすっきりします。' },
    { slug: 'waterfall', diff: 'ウォーターフォール型は、増えた要因と減った要因を順に積み上げて、最初から最後への変化を説明する型です。' },
  ],
  faq: [
    {
      q: '積み上げ棒グラフと100%積み上げ棒グラフの違いは何ですか？',
      a: '積み上げ棒は棒の高さが合計そのもので、合計の伸びと内訳の両方を見せます。100%積み上げは、どの棒も同じ長さ（100%）にそろえ、内訳の割合の違いだけを見せます。合計の大きさを伝える必要があるかどうかで選びます。',
    },
    {
      q: 'PowerPointの積み上げ棒グラフに合計を表示するには？',
      a: '表に「合計」の列を足し、その系列だけグラフの種類を「折れ線」に変えて、線と点を消します。ラベルを「上」に出すと、棒の上に合計が表示されます。手早く済ませるなら、棒の上にテキストボックスを置いて数字を手で書く方法もあります。',
    },
    {
      q: '積み上げ棒グラフは何段まで積めますか？',
      a: 'スライドでは3〜4段が読みやすい上限です。それ以上になると色の区別がつかず、細い段の数字も読めません。上位の内訳だけを分けて、残りは「その他」にまとめます。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
