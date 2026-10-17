import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'hypothesis',
  no: 78,
  category: 'teian',
  name: '仮説・検証・学び型',
  en: 'Hypothesis, test and learning',
  aka: ['仮説検証', '実験結果の報告', 'ABテストの報告', '試行結果まとめ', '検証レポート'],
  mode: 'static',
  title: '仮説・検証・学びとは？試した結果と分かったことを1枚で報告する資料の作り方【見本つき】',
  description:
    '仮説の下に「試したこと」「結果」「分かったこと」を矢印でつなぐ仮説・検証・学び型のスライドを見本で解説。ABテスト報告にも使える作り方を、PowerPoint・Googleスライドの手順、AIへの指示文、HTMLとCSSまでまとめました。',
  oneLine: '試す前の仮説、試したこと、結果、分かったことを順に並べる。',
  what: [
    'いちばん上に「仮説」を帯で置き、その下に「試したこと → 結果 → 分かったこと」の3つの枠を矢印でつなぐ型です。見本では、ネットショップの送料無料のラインを5,000円から4,000円に下げたときの実験を扱っています。結果の枠では、A案とB案の数字を同じ項目で左右に並べ、いちばん知りたい「訪問1人あたり売上」だけをアクセント色で大きくしています。',
    '「やってみた」だけの報告と違い、先に仮説を書いておくので、結果が出たときに「当たったのか外れたのか」を聞き手が自分で判断できます。決まりごとは2つあります。結果の数字は仮説で言っていた指標と同じものにすること。そして「分かったこと」には、結果の言い換えではなく、次にどうするかまで書くことです。',
  ],
  when: [
    'ABテストや試験導入の結果を、上司やチームに報告するとき',
    '新しい施策を小さく試したあと、本格的にやるかどうかを決めてもらう会議のとき',
    '失敗した施策でも、そこから分かったことを残して次につなげたいとき（外れた仮説も立派な成果になる）',
    '社内の勉強会や振り返りで、取り組みの経過を「仮説から学びまで」の流れで共有するとき',
  ],
  avoid: [
    '試した結果が1つの数字だけで、仮説も無いとき（数字インパクト型で1つの数字を見せる方が伝わる）',
    '何を試したかより、決めてほしいことが主役のとき（決裁依頼型にする）',
    '原因を突き止める話が中心のとき（課題・原因・解決型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「仮説・検証・学び型（hypothesis, test and learning）」で作ってください。いちばん上に小さく「ネットショップ「ことのは窯」の送料実験」、その下に結論の見出し「送料無料のラインを下げると、売上は増えた」を1行で置きます。その下に、薄い灰色の横長の帯を置き、黒い丸い札「仮説」と、文「送料無料を4,000円以上に下げれば、購入率が上がり売上も増える」を入れてください。帯の下に、矢印でつないだ3つの枠を横に並べます。1つ目の枠「試したこと」：見出し「訪れた人を半分ずつに分けて比べた」、要点「A案：5,000円以上で送料無料（従来）」「B案：4,000円以上で送料無料」「2026年9月1〜14日・各約1万2,000人」。2つ目の枠「結果」：見出しは付けず、A案とB案の2列の小さな表にします。購入率＝A案2.8%・B案3.4%、客単価＝A案6,200円・B案5,900円、訪問1人あたり売上＝A案174円・B案201円。B案の数字は太く、いちばん下の行だけ大きくしてアクセント色{{accent:t}}にします。3つ目の枠「分かったこと」：見出し「客単価は下がったが、購入率の伸びが上回った」、要点「訪問1人あたり売上は約16%増」「次は送料無料を3,000円以上にして試す」。強調する枠は「{{focus:t}}」にしてください（強調する枠は線を太くしてアクセント色にし、ラベルを塗りつぶす）。枠の角の丸みは{{radius:t}}pt程度にします。文字の大きさは、見出し32〜36pt、枠の見出し20pt以上、要点15pt以上、注記12pt以上。最下部に「※ 訪問1人あたり売上＝購入率×客単価（円未満は四捨五入）。A案・B案とも同じ期間に同時に実施。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「図形」→「四角形: 角を丸くする」で仮説の帯と3つの枠を作り、「図形の書式」→「配置」→「上下に整列」「左右に整列」で等間隔にそろえます。枠のあいだの矢印は「挿入」→「図形」→「矢印: 右」か、「矢印: 山形」です。結果の枠の中の表は、枠とは別に「挿入」→「表」で3列×4行を作って重ねると、数字の桁がそろいます。強調する枠だけ「図形の枠線」を太さ3pt・アクセント色に変え、ラベルの図形を塗りつぶしにします。',
    'Googleスライドでも、「挿入」→「図形」→「図形」から角丸四角形と右向きの矢印を置き、「配置」メニューで揃えます。結果の枠の中は「挿入」→「表」で小さな表を作ります。数字の列を選んで右揃えにするのを忘れないでください。ABテストの結果が多いときは、スプレッドシートで表を作ってからスライドに貼り付けると、数字を直すのが楽です。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。3つの枠は同じ形のかたまりなので、「分かったこと」の要点を増やしたいときは、1行ぶん（span）をコピーするだけで足せます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">ネットショップ「ことのは窯」の送料実験</p>
  <h1 class="title">送料無料のラインを下げると、売上は増えた</h1>

  <div class="hypo">
    <span class="pill">仮説</span>
    <span>送料無料を4,000円以上に下げれば、購入率が上がり売上も増える</span>
  </div>

  <div class="flow">
    <div class="card">
      <span class="label">試したこと</span>
      <span class="head">訪れた人を半分ずつに分けて比べた</span>
      <ul class="points">
        <li>A案：5,000円以上で送料無料（従来）</li>
        <li>B案：4,000円以上で送料無料</li>
        <li>2026年9月1〜14日・各約1万2,000人</li>
      </ul>
    </div>
    <span class="arrow">→</span>
    <div class="card result">
      <span class="label">結果</span>
      <div class="cols"><span></span><span>A案</span><span>B案</span></div>
      <div class="r"><span class="k">購入率</span><span class="a">2.8%</span><b class="b">3.4%</b></div>
      <div class="r"><span class="k">客単価</span><span class="a">6,200円</span><b class="b">5,900円</b></div>
      <div class="r main"><span class="k">訪問1人あたり売上</span><span class="a">174円</span><b class="b">201円</b></div>
    </div>
    <span class="arrow">→</span>
    <div class="card learn">
      <span class="label">分かったこと</span>
      <span class="head">客単価は下がったが、購入率の伸びが上回った</span>
      <ul class="points">
        <li>訪問1人あたり売上は約16%増</li>
        <li>次は送料無料を3,000円以上にして試す</li>
      </ul>
    </div>
  </div>

  <p class="note">※ 訪問1人あたり売上＝購入率×客単価（円未満は四捨五入）。A案・B案とも同じ期間に同時に実施。</p>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* 幅960px×高さ540px（PowerPointの16:9と同じ比率） */
.slide {
  --accent: {{accent}};
  --radius: {{radius}}px;
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

.hypo { display: flex; align-items: center; gap: 14px; margin-top: 16px; padding: 12px 20px; border-radius: var(--radius); background: #f3f4f7; font-size: 19px; font-weight: 700; }
.pill { padding: 2px 14px; border-radius: 999px; background: #1f2430; color: #fff; font-size: 15px; font-weight: 800; white-space: nowrap; }

.flow { flex: 1; display: grid; grid-template-columns: 1fr 24px 1.25fr 24px 1fr; margin: 14px 0 10px; }
.arrow { align-self: center; text-align: center; color: #8a8f9c; font-size: 26px; font-weight: 800; }
.card { display: flex; flex-direction: column; gap: 8px; padding: 12px 16px; border: 2px solid #e3e5ea; border-radius: var(--radius); }
.label { align-self: flex-start; padding: 2px 12px; border-radius: 999px; background: #f3f4f7; color: #5a6070; font-size: 15px; font-weight: 800; }
.head { font-size: 20px; font-weight: 800; line-height: 1.35; }
.points { display: grid; gap: 4px; margin: auto 0 0; padding: 8px 0 0; border-top: 1px solid #e3e5ea; list-style: none; font-size: 15px; color: #5a6070; }

/* 結果の小さな表 */
.cols, .r { display: grid; grid-template-columns: 1fr 88px 88px; align-items: center; }
.cols { font-size: 14px; font-weight: 800; color: #8a8f9c; text-align: right; }
.r { flex: 1; border-top: 1px solid #e3e5ea; }
.k { font-size: 15px; color: #5a6070; }
.a, .b { font-size: 19px; font-weight: 800; text-align: right; }
.a { color: #5a6070; }
.main .b { font-size: 24px; color: var(--accent); }

.note { margin: auto 0 0; font-size: 13px; color: #8a8f9c; }

/* 強調する枠（data-focus="learn" か "result"） */
.slide[data-focus="learn"] .learn,
.slide[data-focus="result"] .result { border-width: 3px; border-color: var(--accent); background: color-mix(in srgb, var(--accent) 6%, #fff); }
.slide[data-focus="learn"] .learn .label,
.slide[data-focus="result"] .result .label { background: var(--accent); color: #fff; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する枠',
      value: 'learn',
      options: [
        { value: 'learn', label: '分かったことを強調' },
        { value: 'result', label: '結果を強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    { key: 'radius', label: '枠の角の丸み（pt）', min: 0, max: 24, step: 4, value: 12, unit: '' },
  ],
  cautions: [
    '仮説は、実験のあとに書き直さないこと。結果を見てから「こうなると思っていた」と書き換えると、報告の信用が落ちます。外れた仮説も、そのまま載せたほうが「分かったこと」に重みが出ます。',
    '結果の数字は、A案とB案を同じ項目・同じ単位・同じ並びで置きます。片方だけ円、片方だけ件のように物差しが違うと比べられません。数字が多いときは、仮説で言っていた指標1つだけを大きくします（見本の「訪問1人あたり売上」）。',
    '「分かったこと」を結果の言い換えで終わらせないこと。「購入率が上がった」は結果であって、学びではありません。「客単価の下がりより購入率の伸びが大きいので、送料無料のラインを下げる価値がある」と、なぜそう言えるかと次の一手まで書きます。',
    '試した人数・期間・条件を、必ず「試したこと」に入れます。条件が書かれていない結果は、偶然かもしれないと疑われます。数日だけ、数十人だけの結果は、そう書いたうえで「まず傾向を見た」という位置づけにします。',
  ],
  similar: [
    { slug: 'problem-solution', diff: '課題・原因・解決型は、すでに起きている困りごとの原因をたどって解決策を示す型です。仮説・検証・学び型は、解決策が効くかどうかを試した結果と、そこから分かったことを報告します。' },
    { slug: 'before-after', diff: 'Before／After型は、変化の前後を並べて結果を見せる型です。仮説・検証・学び型は、結果に加えて、なぜ試したか（仮説）と、そこから何を学んだかまで入れます。' },
    { slug: 'claim-evidence', diff: '主張・根拠・示唆型は、言いたいことを事実で裏づけて意味を伝える型です。仮説・検証・学び型は、自分たちで試した実験の経過と結果を時間の順に見せます。' },
  ],
  faq: [
    {
      q: '仮説・検証の「仮説」とは何ですか？',
      a: '「こうすれば、こうなるはず」という、まだ確かめていない予想のことです。たとえば「送料無料のラインを下げれば購入率が上がるはず」。仮説を先に書いておくことで、実験の結果が当たりか外れかをはっきり判断できます。',
    },
    {
      q: 'ABテストの結果報告は、どんな順番で書けばよいですか？',
      a: '仮説、試した方法（A案とB案の違い・人数・期間）、結果（同じ指標でA案とB案の数字）、分かったことと次の一手、の順番です。この順番がそのままこの型の並びです。結果だけを先に出すより、聞き手が納得しやすくなります。',
    },
    {
      q: '仮説が外れた場合もこの型で報告してよいですか？',
      a: 'はい、むしろ向いています。「外れた」という結果と、そこから分かったこと（たとえば「値下げより、配送の早さのほうが効いていた」）を書けば、同じ失敗を繰り返さない資料になります。強調するのは「結果」の枠にすると、事実が先に伝わります。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
