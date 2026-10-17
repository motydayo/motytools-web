import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'waterfall',
  no: 38,
  category: 'data',
  name: 'ウォーターフォール型',
  en: 'Waterfall chart',
  aka: ['ウォーターフォールチャート', '滝グラフ', '増減要因グラフ', '利益増減分析', 'ブリッジチャート'],
  mode: 'static',
  title: 'ウォーターフォールチャートとは？増減の要因を伝えるスライドの作り方と見本',
  description:
    '前期から今期への営業利益の増減を、要因ごとに階段状に積み上げる「ウォーターフォール型」のスライドを見本で解説。始点と終点の置き方、増減の色分け、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまで。',
  oneLine: '始めの数から終わりの数まで、増減の要因を順に積み上げて説明する。',
  what: [
    '最初の数と最後の数を両端の太い棒で置き、その間に「何がどれだけ増やし、何がどれだけ減らしたか」を、浮かんだ棒で順につないだ型です（滝のように見えるので滝グラフとも呼ばれます）。見本では前期12.0億円から今期13.6億円への営業利益の変化を、売上の増加（+6.5）、原価の上昇（−3.2）、人件費（−2.1）、広告費（−1.4）、為替の影響（+1.8）の5つの要因で説明しています。',
    '決まりは、棒の位置を「その前までの合計」の続きから始めることと、始点と終点の合計が合っていることです。見本では 12.0＋6.5−3.2−2.1−1.4＋1.8＝13.6 になっています。増える棒だけをアクセント色にして、減る棒は灰色にすると、「何が利益を押し上げたか」が色だけで読めます。',
  ],
  when: [
    '前期と今期の利益・売上・コストの差を、要因別に分けて経営会議で説明したいとき',
    '予算と実績の差が、どの項目から来たかを見せたいとき',
    '在庫・人数・顧客数が期間の中で「増えた分」「減った分」を経て、どう変わったかを説明したいとき',
  ],
  avoid: [
    '要因が10個を超え、棒が細くなって名前が読めないとき（大きい要因だけ残し、残りは「その他」にまとめる）',
    '要因を比べるだけで、始点から終点への流れが要らないとき（横棒ランキング型にする）',
    '複数の年度を並べて、それぞれの変化を見せたいとき（積み上げ棒型や縦棒グラフ型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「ウォーターフォール型（waterfall chart）」で作ってください。いちばん上に小さく「営業利益の増減要因（前期→今期）」、その下に結論の見出し「営業利益は12.0億円から13.6億円へ」を置きます。左の広い場所に縦向きのウォーターフォールチャートを置き、横に7本の棒を並べます。左から順に「前期の利益」12.0（合計の棒）、「売上の増加」+6.5、「原価の上昇」−3.2、「人件費」−2.1、「広告費」−1.4、「為替の影響」+1.8、「今期の利益」13.6（合計の棒）です（単位は億円）。増減の棒は、直前の棒が終わった高さから始まるように浮かせて描き、縦の目盛りは0から20まで5刻みにして、必ず0から始めてください。棒の高さは値にきっちり比例させ、各棒の上に値を書きます（増加は「+」、減少は「−」を付ける）。色は、合計の棒を濃い灰色、増加の棒をアクセント色{{accent:t}}、減少の棒を薄い灰色にします。棒の太さは1本ぶんの幅の{{bar:t}}にします。棒どうしをつなぐ細い破線は「{{connector:t}}」にしてください。右側の細い列には「+1.6億円」を42pt前後の太字・アクセント色で置き、その下に「前期からの増加額」、区切り線を挟んで「売上の増加が +6.5」と書きます。見出しは32〜36pt、目盛りと要因名は14pt以上にしてください。下に「※ 営業利益（単位: 億円）。為替の影響は円安による海外売上の換算差。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「グラフ」→「ウォーターフォール」を選び、出てきた表に要因と増減の値（増えるものはプラス、減るものはマイナス）を、最初と最後も含めて入れます。最初の棒と最後の棒をそれぞれ1回クリックで全体、もう1回でその1本だけが選ばれた状態にして、右クリックから「合計として設定」を選ぶと、浮かんだ棒ではなく0から立つ合計の棒になります。増加・減少・合計の色は、凡例の四角を選んで「書式」→「図形の塗りつぶし」で変えます。古いバージョンでウォーターフォールが無いときは、「積み上げ縦棒」の下の段を白（塗りなし）にして浮かせる方法があります。',
    'Googleスライドでは、ウォーターフォールをスプレッドシートで作ります。「要因」と「増減の値」の2列を作り、「挿入」→「グラフ」→グラフエディタの「設定」→「グラフの種類」で「ウォーターフォール」を選びます。「カスタマイズ」→「系列」に、最初の値を合計の棒（小計）として扱う設定と、途中や最後に合計の棒を足す設定があるので、最初と最後が0から立つ合計の棒になるようにします。できたら、スライドで「挿入」→「グラフ」→「スプレッドシートから」で貼り付けます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。各棒は「どこから（下の位置）」と「どれだけ（高さ）」の2つの数字で置いてあり、位置は「その前までの合計」から決めています。値を変えるときは、合計が合うか（始点＋増減の合計＝終点）をAIに検算してもらってください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-connector="{{connector}}">
  <p class="kicker">営業利益の増減要因（前期→今期）</p>
  <h1 class="title">営業利益は12.0億円から13.6億円へ</h1>

  <div class="body">
    <div class="chart">
      <!-- 目盛り（--v は値。0から20まで） -->
      <div class="y">
        <span class="unit">（億円）</span>
        <span style="--v: 0">0</span><span style="--v: 5">5</span><span style="--v: 10">10</span><span style="--v: 15">15</span><span style="--v: 20">20</span>
      </div>
      <div class="plot">
        <!-- 棒1本 = .slot。--lo は棒の下の位置、--h は高さ、--end は棒が終わったあとの合計 -->
        <div class="cols">
          <div class="slot total" style="--lo: 0; --h: 12; --end: 12"><i class="link"></i><span class="bar"></span><span class="val">12.0</span></div>
          <div class="slot up" style="--lo: 12; --h: 6.5; --end: 18.5"><i class="link"></i><span class="bar"></span><span class="val">+6.5</span></div>
          <div class="slot down" style="--lo: 15.3; --h: 3.2; --end: 15.3"><i class="link"></i><span class="bar"></span><span class="val">−3.2</span></div>
          <div class="slot down" style="--lo: 13.2; --h: 2.1; --end: 13.2"><i class="link"></i><span class="bar"></span><span class="val">−2.1</span></div>
          <div class="slot down" style="--lo: 11.8; --h: 1.4; --end: 11.8"><i class="link"></i><span class="bar"></span><span class="val">−1.4</span></div>
          <div class="slot up" style="--lo: 11.8; --h: 1.8; --end: 13.6"><i class="link"></i><span class="bar"></span><span class="val">+1.8</span></div>
          <div class="slot total" style="--lo: 0; --h: 13.6; --end: 13.6"><span class="bar"></span><span class="val">13.6</span></div>
        </div>
      </div>
      <div class="x"><span>前期の利益</span><span>売上の増加</span><span>原価の上昇</span><span>人件費</span><span>広告費</span><span>為替の影響</span><span>今期の利益</span></div>
    </div>

    <div class="side">
      <span class="big">+1.6億円</span>
      <span class="big-label">前期からの増加額</span>
      <span class="sub">売上の増加が +6.5</span>
    </div>
  </div>

  <p class="note">※ 営業利益（単位: 億円）。為替の影響は円安による海外売上の換算差。</p>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* 幅960px×高さ540px（PowerPointの16:9と同じ比率） */
.slide {
  --accent: {{accent}};
  --max: 20; /* 目盛りの最大。棒の位置・高さ = 値 ÷ 最大 */
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
.body { flex: 1; display: flex; gap: 30px; margin: 16px 0 10px; min-height: 0; }

.chart { flex: 1; display: grid; grid-template-columns: 40px 1fr; grid-template-rows: 1fr 34px; padding-top: 28px; min-width: 0; }
.y, .plot { position: relative; }
.y span { position: absolute; right: 8px; bottom: calc(var(--v) / var(--max) * 100%); transform: translateY(50%); font-size: 14px; color: #8a8f9c; }
.y .unit { bottom: 100%; left: 0; right: auto; transform: none; margin-bottom: 8px; font-size: 13px; white-space: nowrap; }
.plot {
  box-shadow: inset 0 1px #e3e5ea, inset 0 -1px #8a8f9c;
  background: repeating-linear-gradient(to top, #e3e5ea 0 1px, transparent 1px 25%);
}
.cols { position: absolute; inset: 0; display: flex; }
.slot { position: relative; flex: 1; }
.bar {
  position: absolute;
  left: calc((100% - {{bar}}) / 2);
  width: {{bar}};
  bottom: calc(var(--lo) / var(--max) * 100%);
  height: calc(var(--h) / var(--max) * 100%);
  border-radius: 3px;
  background: #c3c8d2; /* 減少 */
}
.slot.total .bar { background: #5a6070; }
.slot.up .bar { background: var(--accent); }
.val {
  position: absolute; left: 0; right: 0;
  bottom: calc((var(--lo) + var(--h)) / var(--max) * 100%);
  padding-bottom: 5px; text-align: center;
  font-size: 18px; font-weight: 800; color: #5a6070; font-variant-numeric: tabular-nums;
}
.slot.up .val { color: var(--accent); }
.slot.total .val { color: #1f2430; }
/* 棒どうしをつなぐ線（その棒が終わったあとの合計の高さ） */
.link {
  position: absolute;
  left: calc(50% + {{bar}} / 2);
  width: calc(100% - {{bar}});
  bottom: calc(var(--end) / var(--max) * 100%);
  border-top: 1.5px dashed #8a8f9c;
}
.slide[data-connector="hide"] .link { display: none; }
.x { grid-column: 2; display: flex; align-items: flex-end; }
.x span { flex: 1; text-align: center; font-size: 15px; color: #5a6070; line-height: 1.25; }

.side { flex: 0 0 176px; display: flex; flex-direction: column; justify-content: center; gap: 6px; padding-left: 24px; border-left: 1px solid #e3e5ea; }
.big { font-size: 42px; font-weight: 800; line-height: 1.1; color: var(--accent); white-space: nowrap; }
.big-label { font-size: 16px; color: #5a6070; }
.sub { margin-top: 14px; padding-top: 12px; border-top: 1px solid #e3e5ea; font-size: 18px; font-weight: 800; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'connector',
      type: 'select',
      label: '棒をつなぐ線',
      value: 'show',
      options: [
        { value: 'show', label: '破線でつなぐ' },
        { value: 'hide', label: 'つながない' },
      ],
    },
    { key: 'bar', label: '棒の太さ', min: 40, max: 80, step: 2, value: 56, unit: '%' },
  ],
  cautions: [
    '始点と終点の数を、増減の合計と必ず一致させます。12.0に増減を足していって13.6にならないと、「この資料は数字が合っていない」と見抜かれ、他のページまで疑われます。作ったら電卓で足し直します。',
    '増加と減少を、色だけでなく符号（+と−）でも示します。白黒で印刷されたり、色の見分けにくい人が見たりしても、増えたのか減ったのかが分かります。',
    '要因は、大きい順にするか、意味のある順（売上→原価→経費など）に並べます。ばらばらに並べると、どれが効いたのかが伝わりません。小さい要因は「その他」にまとめます。',
    '目盛りは0から始めます。始点・終点の棒の高さが実際の大きさを表すので、途中から始めると、増減が実際より大きく見えます。差を強調したいなら、増減の棒に数字を大きく書きます。',
  ],
  similar: [
    { slug: 'stacked-bar', diff: '積み上げ棒型は、1本の棒の中身を内訳で積む型です。要因の足し算・引き算ではなく、同じ時点の内訳を見せたいときに使います。' },
    { slug: 'target-actual', diff: '目標・実績型は、目標に対する実績の達成度を見せる型です。要因の分解が要らず、達成したかどうかだけを見せたいときに使います。' },
    { slug: 'bar-chart', diff: '縦棒グラフ型は、年度ごとの数を棒で並べる型です。始点から終点への「途中経過」ではなく、数そのものを比べたいときに使います。' },
  ],
  faq: [
    {
      q: 'ウォーターフォールチャートとは何ですか？',
      a: '最初の数から最後の数まで、途中の増減を階段のように積み上げて見せる図です。滝のように見えるので、この名前が付きました。利益や在庫、人数など、「増えた分」と「減った分」の積み重ねで結果が決まる数字の説明に使います。',
    },
    {
      q: 'PowerPointでウォーターフォールチャートが見つからないときは？',
      a: 'ウォーターフォールのグラフは、PowerPoint 2016以降（Microsoft 365を含む）で使えます。それより古いバージョンには入っていません。「積み上げ縦棒」で下の段を「塗りなし」にして上の段を浮かせるか、スプレッドシートで作ったグラフを貼り付けます。AIにHTMLで作らせて画像として貼る方法もあります。',
    },
    {
      q: 'ウォーターフォールで最初と最後の棒を合計にするには？',
      a: 'PowerPointでは、その棒を2回クリックして1本だけ選び、右クリックの「合計として設定」を選びます。設定すると、浮かんだ棒ではなく、0から立った棒になります。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
