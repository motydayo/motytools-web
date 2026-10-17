import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'pyramid',
  no: 7,
  category: 'kousei',
  name: 'ピラミッド型',
  en: 'Pyramid structure',
  aka: ['ピラミッドストラクチャー', 'ピラミッド構造', '結論と根拠', '三角形の図', '階層図'],
  mode: 'static',
  title: 'ピラミッド型とは？結論と根拠を積み上げて見せるスライドの作り方【見本つき】',
  description:
    '頂点に結論、下の段に根拠と事実を積む「ピラミッド型」のスライドを見本で解説。三角形の作り方、PowerPointとGoogleスライドでの描き方、結論から説明したい資料に使うコツ、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '頂点に結論、下の段に根拠と事実を積んで見せる。',
  what: [
    '三角形を3つの段に切り、いちばん上に結論、真ん中に根拠、いちばん下に事実を置く型です。見本では「法人向けの置き菓子サービスを、来期から始める」という結論を頂点に置き、その根拠を「需要がある・自社の強みが活きる・1年で投資を回収できる」の3つ、それを支える事実を同じ番号で下の段に並べています。三角形の右側に文を置くと、細い三角形の中に文字を詰め込まずに済みます。',
    'この型のよさは、「結論はこれ。なぜなら3つの理由があり、それぞれの裏づけがこの事実」という筋道が、上から下へ読むだけで分かることです。決まりごとは、下の段が上の段を必ず支えていること。根拠と事実を同じ番号でつなぐと、聞き手が「この数字は何の裏づけか」を迷いません。',
  ],
  when: [
    '提案や稟議で、結論とその理由を、筋道立てて示したいとき',
    '社長や上司に、「結論から先に」話し、質問されたら下の段を見せる形で説明したいとき',
    '企画書の要約として、結論・根拠・裏づけを1枚で見せたいとき',
    '論理の飛躍がないかを、自分で確かめながら資料を組み立てたいとき',
  ],
  avoid: [
    '根拠が1つだけで、段を分ける意味が無いとき（1メッセージ型で言い切り、根拠は注記にする）',
    '出来事が時間の順に進んでいくとき（タイムライン型やフロー型にする）',
    '部署や役職の上下関係を示したいとき（組織図型にする。ピラミッド型は「論理」の上下で、「立場」の上下ではありません）',
  ],
  prompt:
    '16:9のスライドを1枚、「ピラミッド型（pyramid structure）」で作ってください。いちばん上に小さく「新規事業の提案」、その下に見出し「法人向けの置き菓子サービスを、来期から始める」を1行で置きます。左側に、二等辺三角形を横の切れ目で3つの段（上から「結論」「根拠」「事実」）に分けたピラミッドを描き、各段の中に段の名前を書きます（段の名前は「{{label:t}}」）。段と段の間には、細い白い隙間を作ります。色の付け方は「{{focus:t}}」にしてください（頂点だけにする場合は、頂点だけをアクセント色{{accent:t}}で塗って文字を白にし、下の2段は薄い灰色で塗る。全部に付ける場合は、上から濃いアクセント色、中くらい、薄いの3段階にする）。ピラミッドの右側に、各段と同じ高さで文を置きます。結論の段には「置き菓子サービスを、来期から始める」を24ptの太字で。根拠の段には、番号の丸を付けて「1 需要がある」「2 自社の強みが活きる」「3 1年で投資を回収できる」を20ptの太字で。事実の段には、同じ番号の丸を付けて「1 取引先312社のうち128社（41%）が導入に関心あり」「2 全国42拠点の配送網で、追加の配送費はほぼ不要」「3 初期投資600万円は、月の粗利50万円で12か月で回収」を16ptで。最下部に注記「※ 需要は2026年6月の取引先アンケート（回答312社）。回収期間は試算。」を13ptで入れてください。色はアクセント色1色と灰色だけにします。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「SmartArt」→「ピラミッド」から「基本ピラミッド」を選ぶと、三角形が段に分かれた図が入ります。段の数は図の左に出る枠で増減できます。見本のように右側に文を置きたいときは、三角形の図の右に「挿入」→「テキスト ボックス」を段の数だけ並べ、各段の高さにそろえます。自分で描く場合は、「挿入」→「図形」→「二等辺三角形」を1つ置き、その上に白い細い線（「図形」→「線」、太さ6pt）を2本引いて段に切る方法が手早いです。',
    'Googleスライドには、ピラミッドの型が用意されていません。「挿入」→「図形」→「図形」→「二等辺三角形」で三角形を1つ描き、その上に、白い太めの線（色を白、太さを6pxほど）を2本引いて、3つの段に見せます。段の名前は、三角形の上に「テキスト ボックス」を重ねて入れます。右側の文は、段の高さに合わせて別のテキスト ボックスで置き、ツールバーの縦方向の配置のボタンで、文字を段の上下の真ん中に寄せます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のHTMLとCSSがそのまま1枚のスライドになります。三角形は、同じ高さの3つの行に台形を切り抜いて作っています。右側の文は同じ行に入っているので、文が増えても三角形と高さがずれません。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-label="{{label}}">
  <p class="kicker">新規事業の提案</p>
  <h1 class="title">法人向けの置き菓子サービスを、来期から始める</h1>

  <!-- 3つの段。左が三角形の一部、右が文 -->
  <div class="grid">
    <div class="row">
      <div class="shape l1"><span>結論</span></div>
      <div class="text"><span class="main">置き菓子サービスを、来期から始める</span></div>
    </div>
    <div class="row">
      <div class="shape l2"><span>根拠</span></div>
      <div class="text">
        <span class="item reason"><b class="n">1</b>需要がある</span>
        <span class="item reason"><b class="n">2</b>自社の強みが活きる</span>
        <span class="item reason"><b class="n">3</b>1年で投資を回収できる</span>
      </div>
    </div>
    <div class="row">
      <div class="shape l3"><span>事実</span></div>
      <div class="text">
        <span class="item fact"><b class="n">1</b>取引先312社のうち128社（41%）が導入に関心あり</span>
        <span class="item fact"><b class="n">2</b>全国42拠点の配送網で、追加の配送費はほぼ不要</span>
        <span class="item fact"><b class="n">3</b>初期投資600万円は、月の粗利50万円で12か月で回収</span>
      </div>
    </div>
  </div>

  <p class="note">※ 需要は2026年6月の取引先アンケート（回答312社）。回収期間は試算。</p>
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
  font-size: 18px;
  line-height: 1.4;
}
.kicker { margin: 0 0 6px; font-size: 15px; font-weight: 700; letter-spacing: 0.04em; color: var(--accent); }
.title { margin: 0; font-size: 34px; font-weight: 800; line-height: 1.3; letter-spacing: 0.01em; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

.grid { flex: 1; display: grid; grid-template-rows: repeat(3, minmax(0, 1fr)); row-gap: 6px; margin: 18px 0 10px; min-height: 0; }
.row { display: grid; grid-template-columns: 300px minmax(0, 1fr); column-gap: 28px; min-height: 0; }
/* 三角形を3段に切る。左右の端は、高さに対する割合で台形にする */
.shape { display: flex; align-items: center; justify-content: center; background: #e3e5ea; color: #5a6070; font-size: 18px; font-weight: 800; letter-spacing: 0.08em; }
.l1 { clip-path: polygon(50% 0, 50% 0, 66.07% 100%, 33.93% 100%); align-items: flex-end; padding-bottom: 12px; background: var(--accent); color: #fff; }
.l2 { clip-path: polygon(33.03% 0, 66.97% 0, 83.03% 100%, 16.97% 100%); }
.l3 { clip-path: polygon(16.06% 0, 83.94% 0, 100% 100%, 0 100%); }
.text { display: flex; flex-direction: column; justify-content: center; gap: 4px; padding-left: 24px; border-left: 1px solid #e3e5ea; min-width: 0; }
.main { font-size: 24px; font-weight: 800; line-height: 1.35; }
.item { display: flex; align-items: center; gap: 10px; line-height: 1.4; }
.reason { font-size: 20px; font-weight: 800; }
.fact { font-size: 16px; color: #5a6070; }
.n { flex: none; display: grid; place-items: center; width: 24px; height: 24px; border-radius: 50%; background: #f3f4f7; color: #5a6070; font-size: 14px; font-weight: 800; font-variant-numeric: tabular-nums; }

/* 色を付ける段（つまみ: 色を付ける段） */
.slide[data-focus="all"] .l2 { background: color-mix(in srgb, var(--accent) 62%, #fff); color: #fff; }
.slide[data-focus="all"] .l3 { background: color-mix(in srgb, var(--accent) 22%, #fff); color: #1f2430; }

/* 段の名前（つまみ: 段の名前） */
.slide[data-label="hide"] .shape span { display: none; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '色を付ける段',
      value: 'top',
      options: [
        { value: 'top', label: '頂点の結論だけ' },
        { value: 'all', label: '3つの段すべて（濃さを変える）' },
      ],
    },
    {
      key: 'label',
      type: 'select',
      label: '段の名前',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '上の段と下の段が、本当に「理由とその裏づけ」の関係になっているかを確かめます。「需要がある」の下に「当社には42拠点がある」を置くと、話がずれます。1つずつ「なぜそう言えるの？」と問い、その答えが下の段に書いてあるか見ます。',
    '根拠は3つ前後に絞ります。5つも6つも並べると、三角形の底が広がりすぎて、文字を小さくせざるを得ません。重要でないものは捨てるか、注記や別のスライドに回します。',
    '三角形の中に長い文を入れないことです。上の段は幅が狭く、文字が入りません。見本のように、三角形には段の名前だけを書き、文は右に置きます。',
    '「事実」の段に意見や見込みを書かないことです。数字・調査結果・実績のような、確認できるものだけを置きます。見込みの数字を使うときは、「試算」と注記します。',
  ],
  similar: [
    { slug: 'logic-tree', diff: 'ロジックツリー型は、課題や原因を枝分かれで分解していく型です。ピラミッド型は、結論から根拠、事実へと「なぜ」で掘り下げ、下から上へ支えます。' },
    { slug: 'claim-evidence', diff: '主張・根拠・示唆型は、言いたいこと・支える事実・その意味の3つを横に並べる型です。ピラミッド型は、段を積んで、複数の根拠を束ねます。' },
    { slug: 'executive-summary', diff: 'エグゼクティブサマリー型は、資料全体の結論と要点を文章でまとめる型です。ピラミッド型は、結論から事実への筋道を図で見せます。' },
  ],
  faq: [
    {
      q: 'ピラミッド型のスライドで、段は何段までが読みやすいですか？',
      a: '3段までが読みやすい目安です。結論・根拠・事実の3段なら、スライド1枚で筋道が追えます。4段以上に深く掘り下げる場合は、1枚に詰めず、根拠ごとに次のスライドに分けます。',
    },
    {
      q: 'ピラミッド・ストラクチャーとは何ですか？',
      a: '結論を頂点に置き、それを支える根拠、さらにその裏づけとなる事実を、下に積み上げて組み立てる考え方です。コンサルティングの現場で使われる考え方として知られていますが、会社の提案資料でも、そのまま使えます。',
    },
    {
      q: '階層を表す三角形の図と、何が違うのですか？',
      a: '見た目は似ていますが、意味が違います。階層を表す三角形は「上ほど偉い」「下ほど数が多い」など、立場や量の違いを示します。ピラミッド型のスライドは、論理の筋道を示すもので、上の段が結論、下の段がそれを支える理由です。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
