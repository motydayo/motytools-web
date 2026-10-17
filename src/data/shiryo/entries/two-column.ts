import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'two-column',
  no: 3,
  category: 'kousei',
  name: '2カラム比較型',
  en: 'Two-column comparison',
  aka: ['左右比較', '2案比較', '比較スライド', '2列レイアウト', '対比'],
  mode: 'static',
  title: '2カラム比較型とは？2つの案を左右に並べて選んでもらう資料の作り方【見本つき】',
  description:
    '2つの案を左右に並べ、同じ項目で比べる「2カラム比較型」のスライドを見本で解説。推奨案の強調のしかた、PowerPoint・Googleスライドでの作り方、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '2つの案を左右に並べ、同じ項目で比べて推奨案を示す。',
  what: [
    'スライドを左右2つの枠に分け、案Aと案Bを同じ項目・同じ順番で並べる型です。見本では会計ソフトの乗り換え先2つを「月額費用・導入期間・銀行との連携・サポート」の4項目で比べ、推奨する案Bの枠だけを色の付いた太い線と「推奨」の札で目立たせています。いちばん上の見出しには、比べた結果の結論を1文で書きます。',
    'この型のよさは、聞き手が左右を行き来するだけで違いが分かることです。項目の順番と高さがそろっているので、「月額は右が安い」「サポートは右が手厚い」と目で横に追えます。その代わり、比べるのは2つまで。3つ以上になったら表の型に切り替えます。',
  ],
  when: [
    '2つの候補（ソフト・業者・料金プランなど）から1つを選んでもらう会議の資料をつくるとき',
    '上司や取引先に「なぜこちらを選ぶのか」を1枚で説明したいとき',
    '自社の商品と他社の商品の違いを、同じ物差しで見せたいとき',
    '今のやり方と新しいやり方を、費用や手間の項目ごとに並べて見せたいとき',
  ],
  avoid: [
    '選択肢が3つ以上あるとき（左右では収まらないので、選択肢比較表型にする）',
    '比べる項目が7つ以上あり、文字を小さくしないと入らないとき',
    '片方が明らかに劣っていて、比べる意味が薄いとき（結論だけを1メッセージ型で伝える方が早い）',
  ],
  prompt:
    '16:9のスライドを1枚、「2カラム比較型（two-column comparison）」で作ってください。いちばん上に小さく「会計ソフトの乗り換え」、その下に結論の見出し「案Bを推奨：年18万円安く、1か月早く使える」を1行で置きます。その下を左右2つの枠に分け、左に案A「クラウド会計 ミドリ」、右に案B「会計クラウド ソラ」を置いてください。両方の枠に同じ4項目（月額費用・導入期間・銀行との連携・サポート）を同じ順番・同じ高さで並べ、項目名は小さく灰色、値は太く大きくします。値は左が「4万円・4か月・3行・メールのみ」、右が「2.5万円・3か月・12行・電話・チャット」です。強調のしかたは「{{focus:t}}」にしてください（強調する枠は線を太くしてアクセント色にし、「推奨」の札を付ける）。色はアクセント色{{accent:t}}の1色だけで、ほかは白・灰色・黒にします。左右の枠の間は{{gap:t}}pt空けます。文字の大きさは、見出し32〜36pt、値24pt以上、項目名16pt以上、注記12pt以上。最下部に「※ 月額は税抜・30人で使う場合。導入期間は契約から本番切り替えまで。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「ホーム」→「新しいスライド」で「比較」のレイアウトを選ぶと、見出しの下に左右2つの枠が並んだ状態から始められます。見出しには結論の1文を入れます。左右の中身は、それぞれ「挿入」→「表」で2列×4行の表にすると、行の高さが左右でそろいます。2つの表を両方選んで「図形の書式」→「配置」→「上揃え」を押し、大きさも同じにしてください。推奨する側だけ、外側に角の丸い四角形（「挿入」→「図形」→「四角形: 角を丸くする」）を重ね、「図形の枠線」で太さ3pt・アクセント色にします。',
    'Googleスライドでは、「スライド」→「レイアウトを適用」で、見出しの下に文字の枠が2列並んだレイアウトを選びます。表は「挿入」→「表」→2×4で作り、両方を選んで「配置」→「均等に配置」→「横方向」で間隔をそろえます。色を付けるのは推奨する案の枠と「推奨」の札だけにし、ほかは灰色で描くと強調が効きます。',
    'AIにHTMLでスライドを作ってもらう場合（Claudeのアーティファクトなど）は、下のHTMLとCSSがそのまま1枚のスライドになります。幅960px・高さ540pxで、PowerPointの16:9（960pt×540pt）と同じ比率です。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">会計ソフトの乗り換え</p>
  <h1 class="title">案Bを推奨：年18万円安く、1か月早く使える</h1>

  <div class="cols">
    <div class="col col-left">
      <p class="head"><span class="tag">案A</span>クラウド会計 ミドリ<span class="badge">推奨</span></p>
      <dl>
        <div><dt>月額費用</dt><dd>4万円</dd></div>
        <div><dt>導入期間</dt><dd>4か月</dd></div>
        <div><dt>銀行との連携</dt><dd>3行</dd></div>
        <div><dt>サポート</dt><dd>メールのみ</dd></div>
      </dl>
    </div>
    <div class="col col-right">
      <p class="head"><span class="tag">案B</span>会計クラウド ソラ<span class="badge">推奨</span></p>
      <dl>
        <div><dt>月額費用</dt><dd>2.5万円</dd></div>
        <div><dt>導入期間</dt><dd>3か月</dd></div>
        <div><dt>銀行との連携</dt><dd>12行</dd></div>
        <div><dt>サポート</dt><dd>電話・チャット</dd></div>
      </dl>
    </div>
  </div>

  <p class="note">※ 月額は税抜・30人で使う場合。導入期間は契約から本番切り替えまで。</p>
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

/* 左右の枠。項目の順番と高さをそろえる */
.cols {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: {{gap:n}}px;
  margin: 24px 0 14px;
}
.col { display: flex; flex-direction: column; padding: 18px 24px; border: 2px solid #e3e5ea; border-radius: 12px; }
.head { display: flex; align-items: center; gap: 10px; margin: 0; padding-bottom: 12px; border-bottom: 1px solid #e3e5ea; font-size: 22px; font-weight: 800; }
.tag { padding: 2px 10px; border-radius: 6px; background: #f3f4f7; color: #5a6070; font-size: 15px; }
.badge { display: none; margin-left: auto; padding: 3px 12px; border-radius: 999px; background: var(--accent); color: #fff; font-size: 14px; }
dl { flex: 1; display: grid; grid-template-rows: repeat(4, 1fr); margin: 0; }
dl div { display: flex; align-items: baseline; justify-content: space-between; padding-top: 10px; border-bottom: 1px solid #f3f4f7; }
dl div:last-child { border-bottom: 0; }
dt { font-size: 16px; color: #5a6070; }
dd { margin: 0; font-size: 26px; font-weight: 800; font-variant-numeric: tabular-nums; }
.note { margin: auto 0 0; font-size: 13px; color: #8a8f9c; }

/* 強調する案（data-focus="right" / "left" / "none"） */
.slide[data-focus="right"] .col-right,
.slide[data-focus="left"] .col-left {
  border: 3px solid var(--accent);
  background: color-mix(in srgb, var(--accent) 6%, #fff);
}
.slide[data-focus="right"] .col-right .badge,
.slide[data-focus="left"] .col-left .badge { display: inline-block; }
.slide[data-focus="right"] .col-right .tag,
.slide[data-focus="left"] .col-left .tag { background: var(--accent); color: #fff; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する案',
      value: 'right',
      options: [
        { value: 'right', label: '右の案Bを強調' },
        { value: 'left', label: '左の案Aを強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    { key: 'gap', label: '左右の枠の間隔（pt）', min: 16, max: 96, step: 8, value: 40, unit: '' },
  ],
  cautions: [
    '左右で項目の順番・言い回し・単位をそろえます。左が「月額」で右が「年額」のようにずれると、聞き手が頭の中で計算し直すことになり、比べる意味がなくなります。',
    '色を付けるのは推奨する側だけです。両方に別々の色を付けると、どちらを選んでほしいのかが伝わりません。強調しないで公平に見せたいときは、両方とも灰色にします。',
    '推奨する案に都合のいい項目だけを並べると、あとで質問されたときに信用を失います。推奨する案の弱い点（見本なら「初めて使うソフトで慣れが要る」など）も、同じ項目か注記で正直に書いておきます。',
    '左右の枠の間が狭いと1つの表に見え、広すぎると別々の話に見えます。幅960ptのスライドなら32〜56ptが目安です。',
  ],
  similar: [
    { slug: 'option-table', diff: '選択肢比較表型は、3つ以上の案を表にして比べる型です。2つなら2カラム比較型の方が大きな文字で見せられます。' },
    { slug: 'before-after', diff: 'Before／After型は、同じものの「前」と「後」を左右に並べる型です。2カラム比較型は、別々の2つの案を比べて1つを選んでもらうために使います。' },
    { slug: 'pros-cons', diff: 'メリット・注意点型は、1つの案のよい点と気をつける点を左右に分ける型です。比べる相手がいないときはこちらを使います。' },
  ],
  faq: [
    {
      q: '推奨する案は左と右のどちらに置けばいいですか？',
      a: '右に置くのが一般的です。人は左から右へ読むので、最後に目が止まる右側に推奨案を置くと「比べた結果こちら」という流れになります。ただし、資料の中で今のやり方を左、新しい案を右と決めたなら、全ページでその並びを守る方が大切です。',
    },
    {
      q: '2カラムと2段組みは同じものですか？',
      a: '違います。2段組みは、新聞のように1つの長い文章を2列に流し込む組み方です。2カラム比較型は、左右に別々のものを置き、同じ項目を横にそろえて比べるための型です。',
    },
    {
      q: 'PowerPointの「比較」レイアウトを使えば2カラム比較型になりますか？',
      a: '入れ物としては近い形になります。ただし「比較」レイアウトは見出しと文字の枠が左右に並ぶだけなので、項目の高さを左右でそろえる、推奨する側だけに色を付ける、といった中身の作り込みは自分で加える必要があります。表を左右に置くと、高さがそろって作りやすくなります。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
