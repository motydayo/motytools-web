import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'sparkline-table',
  no: 46,
  category: 'data',
  name: 'スパークライン表型',
  en: 'Sparkline table',
  aka: ['スパークライン', 'スパークライン付き表', 'ミニグラフ付き表', 'セル内グラフ', '推移つきの表'],
  mode: 'static',
  title: 'スパークライン表とは？表の各行に小さな推移の線を添える作り方【Excel】',
  description:
    '商品ごとの売上などの表の各行に、文字ほどの小さな折れ線を添える「スパークライン表型」のスライドを見本で解説。目盛りの決まり、色の使い方、Excel・スプレッドシートでの作り方、AIへの指示文とHTMLのコードまでまとめました。',
  oneLine: '表の各行に、小さな推移の線を添えて数字と形を一緒に見せる。',
  what: [
    '商品名・売上・前月比などの数字を表で見せながら、各行の右端に12か月の推移を小さな折れ線で添える型です。見本では、コーヒー通販の6商品を直近月の売上の大きい順に並べ、毎月増えているドリップバッグの行だけに薄い色を敷いて、線と数字をアクセント色にしています。数字は正確に読め、推移の形（夏に山がある、年末に山がある、右上がり）もひと目で分かります。',
    '決まりごとは、線を飾りに留めて、数字を主役にすることです。小さな線には目盛りがないので、各行を最小〜最大の幅に合わせて描き、「行どうしでは高さを比べられない」と注記に書きます。強調する行は1つに絞り、最新の点にだけ印を付けると、「今どこにいるか」が伝わります。',
  ],
  when: [
    '商品・店舗・部署ごとの数字を表で見せつつ、1年ぶんなどの推移の形も一緒に見せたいとき',
    '定例会議の資料で、数字の一覧に「傾向」を添えて、目を引く行を決めたいとき',
    '項目が6〜12行あり、グラフを項目ごとに作ると場所が足りないとき',
  ],
  avoid: [
    '行どうしの値の大きさを、線の高さで比べさせたいとき（同じ目盛りで並べるスモールマルチプル型にする）',
    '1つの項目の推移を、日付や値まで読み取らせたいとき（折れ線推移型にする）',
    '行が15を超えるとき（上位・下位だけに絞るか、ヒートマップ型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「スパークライン表型（sparkline table。表の各行に小さな折れ線を添える型）」で作ってください。いちばん上に小さく「コーヒー通販「豆ごよみ」の商品別売上（昨年11月〜今年10月）」、その下に結論の見出し「ドリップバッグだけが、1年間ずっと毎月増えている」を置きます。見出しの下に、6行の表を置きます。列は左から「商品」「直近月の売上」「前月比」「12か月の推移」の4つで、見出しの行の下に太い線、各行の下に薄い線を引きます。行は直近月の売上の大きい順に、コーヒー豆（定番）が505万円・前月比+0.6%、ドリップバッグが380万円・前月比+8.6%、紅茶ギフトが210万円・前月比+31.3%、豆の定期便が122万円・前月比−2.4%、水出しコーヒーが120万円・前月比−36.8%、マグカップが66万円・前月比−5.7%です。12か月の推移（昨年11月〜今年10月）の月ごとの値は、コーヒー豆が500・498・502・505・500・497・503・506・501・504・502・505、ドリップバッグが200・210・215・230・240・255・270・290・310・330・350・380、紅茶ギフトが180・420・200・150・140・150・160・150・140・150・160・210、豆の定期便が90・95・100・98・105・110・108・115・120・118・125・122、水出しコーヒーが60・55・58・70・95・150・240・310・330・280・190・120、マグカップが70・150・60・55・50・52・55・58・60・62・70・66です。商品名は18pt・太字、売上は22pt・太字（右そろえ）、前月比は18pt・太字にします。推移の線は{{w:t}}の太さで、各行の最小〜最大の幅に合わせて描きます。線の印は「{{marker:t}}」にしてください。毎月増えているドリップバッグの行の強調は「{{hl:t}}」にし、強調するときは、その行に薄いアクセント色{{accent:t}}を敷いて、商品名・前月比・線をアクセント色にします。ほかの行の線は濃い灰色にします。立体・影・グラデーションは使いません。下に「※ 単位は万円（税抜）。推移の線は行ごとに最小〜最大の幅に合わせて描いているため、線の高さは行どうしでは比べられません。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'Excelでは、推移の数字（12か月ぶんのセル）を表の横に並べておき、線を出したいセルを選んで「挿入」→「スパークライン」→「折れ線」を押します。「データ範囲」に12か月ぶんのセル、「場所の範囲」に線を出したいセルを指定すると、各行に小さな折れ線が入ります。出てきた「スパークライン」タブで、「マーカー」の「最後のポイント」や「頂点（山）」「頂点（谷）」にチェックを入れると、印が付きます。PowerPointには専用の機能がないので、Excelの表を「貼り付けのオプション」で図として貼り付けるか、見本のように行ごとに折れ線を描きます。',
    'Googleスライドでは、まずスプレッドシートで、線を出したいセルに =SPARKLINE(B2:M2) のように、12か月ぶんのセルを指定した式を入れます。表の範囲をコピーして、スライドに「リンクなしで貼り付け」（または画像として貼り付け）すると、小さな線ごとスライドに入ります。見本のような行の強調は、スライド側でその行に四角形を重ねて、薄い色を付けて背面に送ると作れます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。推移の線は、各行の最小〜最大の幅に合わせて、高さ26に収まるように計算した数値を書いているので、数字を変えるときは、線と印の位置を一緒に直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-hl="{{hl}}" data-marker="{{marker}}">
  <p class="kicker">コーヒー通販「豆ごよみ」の商品別売上（昨年11月〜今年10月）</p>
  <h1 class="title">ドリップバッグだけが、1年間ずっと毎月増えている</h1>
  <div class="body">
    <div class="tbl">
      <div class="hd"><span>商品</span><span class="r">直近月の売上</span><span class="r">前月比</span><span class="tr">12か月の推移</span></div>
      <div class="rw x">
        <span class="nm">コーヒー豆（定番）</span>
        <span class="v">505</span>
        <span class="c pos">+0.6%</span>
        <svg class="spark" viewBox="0 0 300 38" aria-hidden="true">
          <polyline class="ln" points="8,23.33 33.82,29.11 59.64,17.56 85.45,8.89 111.27,23.33 137.09,32 162.91,14.67 188.73,6 214.55,20.44 240.36,11.78 266.18,17.56 292,8.89" />
          <circle class="m mlast" cx="292" cy="8.89" r="4.5" />
          <circle class="m mmax" cx="188.73" cy="6" r="4" />
          <circle class="m mmin" cx="137.09" cy="32" r="4" />
        </svg>
      </div>
      <div class="rw hot">
        <span class="nm">ドリップバッグ</span>
        <span class="v">380</span>
        <span class="c pos">+8.6%</span>
        <svg class="spark" viewBox="0 0 300 38" aria-hidden="true">
          <polyline class="ln" points="8,32 33.82,30.56 59.64,29.83 85.45,27.67 111.27,26.22 137.09,24.06 162.91,21.89 188.73,19 214.55,16.11 240.36,13.22 266.18,10.33 292,6" />
          <circle class="m mlast" cx="292" cy="6" r="4.5" />
          <circle class="m mmax" cx="292" cy="6" r="4" />
          <circle class="m mmin" cx="8" cy="32" r="4" />
        </svg>
      </div>
      <div class="rw x">
        <span class="nm">紅茶ギフト</span>
        <span class="v">210</span>
        <span class="c pos">+31.3%</span>
        <svg class="spark" viewBox="0 0 300 38" aria-hidden="true">
          <polyline class="ln" points="8,28.29 33.82,6 59.64,26.43 85.45,31.07 111.27,32 137.09,31.07 162.91,30.14 188.73,31.07 214.55,32 240.36,31.07 266.18,30.14 292,25.5" />
          <circle class="m mlast" cx="292" cy="25.5" r="4.5" />
          <circle class="m mmax" cx="33.82" cy="6" r="4" />
          <circle class="m mmin" cx="111.27" cy="32" r="4" />
        </svg>
      </div>
      <div class="rw x">
        <span class="nm">豆の定期便</span>
        <span class="v">122</span>
        <span class="c neg">−2.4%</span>
        <svg class="spark" viewBox="0 0 300 38" aria-hidden="true">
          <polyline class="ln" points="8,32 33.82,28.29 59.64,24.57 85.45,26.06 111.27,20.86 137.09,17.14 162.91,18.63 188.73,13.43 214.55,9.71 240.36,11.2 266.18,6 292,8.23" />
          <circle class="m mlast" cx="292" cy="8.23" r="4.5" />
          <circle class="m mmax" cx="266.18" cy="6" r="4" />
          <circle class="m mmin" cx="8" cy="32" r="4" />
        </svg>
      </div>
      <div class="rw x">
        <span class="nm">水出しコーヒー</span>
        <span class="v">120</span>
        <span class="c neg">−36.8%</span>
        <svg class="spark" viewBox="0 0 300 38" aria-hidden="true">
          <polyline class="ln" points="8,31.53 33.82,32 59.64,31.72 85.45,30.58 111.27,28.22 137.09,23.02 162.91,14.51 188.73,7.89 214.55,6 240.36,10.73 266.18,19.24 292,25.85" />
          <circle class="m mlast" cx="292" cy="25.85" r="4.5" />
          <circle class="m mmax" cx="214.55" cy="6" r="4" />
          <circle class="m mmin" cx="33.82" cy="32" r="4" />
        </svg>
      </div>
      <div class="rw x">
        <span class="nm">マグカップ</span>
        <span class="v">66</span>
        <span class="c neg">−5.7%</span>
        <svg class="spark" viewBox="0 0 300 38" aria-hidden="true">
          <polyline class="ln" points="8,26.8 33.82,6 59.64,29.4 85.45,30.7 111.27,32 137.09,31.48 162.91,30.7 188.73,29.92 214.55,29.4 240.36,28.88 266.18,26.8 292,27.84" />
          <circle class="m mlast" cx="292" cy="27.84" r="4.5" />
          <circle class="m mmax" cx="33.82" cy="6" r="4" />
          <circle class="m mmin" cx="111.27" cy="32" r="4" />
        </svg>
      </div>
    </div>
  </div>
  <p class="note">※ 単位は万円（税抜）。推移の線は行ごとに最小〜最大の幅に合わせて描いているため、線の高さは行どうしでは比べられません。</p>
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

/* 表は 商品名・直近月の売上・前月比・推移の4列。推移の線は各行の最小〜最大に合わせて 幅300×高さ38 の中に描く */
.tbl { display: flex; flex-direction: column; height: 100%; }
.hd, .rw { display: grid; grid-template-columns: 260px 150px 130px 1fr; align-items: center; padding: 0 12px; }
.hd { height: 38px; border-bottom: 2px solid #1f2430; font-size: 15px; font-weight: 700; color: #5a6070; }
.rw { flex: 1; border-bottom: 1px solid #e3e5ea; }
.r { text-align: right; }
.tr { padding-left: 36px; }
.nm { font-size: 18px; font-weight: 700; }
.v { text-align: right; font-size: 22px; font-weight: 800; font-variant-numeric: tabular-nums; }
.c { text-align: right; font-size: 18px; font-weight: 800; font-variant-numeric: tabular-nums; color: #5a6070; }
.spark { display: block; width: 300px; height: 38px; margin-left: 36px; overflow: visible; }
/*svg*/
.ln { fill: none; stroke: #5a6070; stroke-width: {{w}}; stroke-linejoin: round; stroke-linecap: round; }
.m { display: none; fill: #5a6070; }
.rw.hot .ln { stroke: var(--accent); }
.rw.hot .m { fill: var(--accent); }
.slide[data-marker="last"] .mlast { display: inline; }
.slide[data-marker="range"] .mmax,
.slide[data-marker="range"] .mmin { display: inline; }
/*end*/
/* 強調する行（data-hl="on" で、毎月増えている商品の行に薄い色を敷く） */
.slide[data-hl="on"] .rw.hot { background: color-mix(in srgb, var(--accent) 9%, #fff); }
.slide[data-hl="on"] .rw.hot .nm,
.slide[data-hl="on"] .rw.hot .c { color: var(--accent); }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'hl',
      type: 'select',
      label: '強調する行',
      value: 'on',
      options: [
        { value: 'on', label: '毎月増えている行に色を敷く' },
        { value: 'off', label: '強調しない' },
      ],
    },
    {
      key: 'marker',
      type: 'select',
      label: '線の印',
      value: 'last',
      options: [
        { value: 'last', label: '最新の月に点を打つ' },
        { value: 'range', label: '最大と最小に点を打つ' },
        { value: 'none', label: '点を打たない' },
      ],
    },
    { key: 'w', label: '線の太さ', min: 1.5, max: 4, step: 0.5, value: 2.5, unit: 'px' },
  ],
  cautions: [
    '線の高さを、行どうしで比べさせないようにします。小さな線は各行の最小〜最大に合わせて描くので、売上が505万円の行と66万円の行でも、同じ高さに見えます。そのことを注記に書き、金額は左の数字で読んでもらいます。',
    '強調する行は1つだけにします。全部の行に色や印を付けると、どの行を見ればいいのか分からなくなります。見本のように、見出しの結論に合う1行だけを選びます。',
    '線に目盛りや数字を付けようとしないでください。小さな線は「形」を見せるもので、値の読み取りは表の数字が担当します。値まで読ませたい項目は、別のスライドで大きな折れ線にします。',
    '期間と並び順を決めて書きます。見本の「昨年11月〜今年10月」のように期間を書き、行は直近月の売上の大きい順など、理由のある順に並べます。バラバラだと、表の読み方が人によって変わります。',
  ],
  similar: [
    { slug: 'small-multiples', diff: 'スモールマルチプル型は、同じ目盛りの小さなグラフを並べて、形と大きさの両方を比べる型です。スパークライン表型は、表の数字を主役にして、線は形だけを添えます。' },
    { slug: 'line-chart', diff: '折れ線推移型は、1つの項目（または少数の項目）の推移を大きな折れ線で読ませる型です。値や時期まで読み取らせたいときに向きます。' },
    { slug: 'heatmap', diff: 'ヒートマップ型は、表の数の大小を色の濃さで見せる型です。行も列も多い大きな表では、小さな線を並べるより色で見せる方が収まります。' },
  ],
  faq: [
    {
      q: 'スパークラインとは何ですか？',
      a: '表のセルの中に収まる、目盛りのない小さな折れ線（または棒）のグラフです。数字の横に添えて、推移の形を見せるために使います。ExcelやGoogleスプレッドシートに専用の機能があります。',
    },
    {
      q: 'スパークラインはExcelでどう作りますか？',
      a: '推移のセルを選び、「挿入」→「スパークライン」→「折れ線」を押して、データ範囲と場所の範囲を指定します。「スパークライン」タブで、最後のポイントや頂点（山・谷）に印を付けられます。Googleスプレッドシートでは =SPARKLINE(範囲) の式で作れます。',
    },
    {
      q: 'スパークラインの縦の目盛りは、行ごとに変えてよいですか？',
      a: '行ごとに最小〜最大に合わせるのが一般的で、推移の形が見やすくなります。ただし、行どうしの大きさは比べられなくなるので、見本のように注記で伝えます。行どうしの大きさも比べたいときは、全行で同じ目盛りにそろえます。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
