import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'customer-journey',
  no: 72,
  category: 'keikaku',
  name: 'カスタマージャーニー型',
  en: 'Customer journey map',
  aka: ['カスタマージャーニーマップ', '顧客体験マップ', 'お客さまの旅', '購買行動の流れ', '体験の流れ図'],
  mode: 'static',
  title: 'カスタマージャーニーマップとは？気持ちの曲線入りスライドの作り方【見本・テンプレート】',
  description:
    'お客さまの行動と気持ちの移り変わりを並べる「カスタマージャーニー型」のスライドを見本で解説。気持ちの曲線の描き方、改善策の置き方、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: 'お客さまの行動と気持ちを段階ごとに並べ、気持ちが下がる所を見つける。',
  what: [
    'お客さまが商品を知ってから使い続けるまでを、「気づく・比べる・買う・届くまで・使い続ける」の5つの段階に分けて横に並べる型です。縦には、お客さまの行動、接する場所（広告・サイト・メールなど）、気持ちの曲線、改善策の4段が重なっています。見本はオンラインでソファを買うお客さまの例です。気持ちの曲線がいちばん下がる「届くまで」の列にだけ色を付け、その下に「追跡と遅れの連絡」という改善策を置いています。',
    'この型のよさは、「どこでお客さまが離れるか・不安になるか」が、気持ちの曲線の谷として一目で見えることです。大切なのは、曲線を描いて終わりにせず、谷の段階に改善策を置くところまで書くことです。段階は4〜6つ、行は4段までに収めます。見本の気持ちは、購入者への聞き取りから作った5段階の目安で、根拠を注記に書きます。',
  ],
  when: [
    '新商品や新サービスの企画で、お客さまの行動と気持ちを関係者と共有するとき',
    'お客さまが離れる場面を見つけて、改善案を提案するとき',
    '広告・サイト・店舗・サポートなど、複数の部署がお客さまとの接点を持っているとき',
    'ペルソナ（想定するお客さま像）を作ったあと、その人の体験を具体的に描くとき',
  ],
  avoid: [
    '裏側の業務や仕組みまで描いて、改善の担当を決めたいとき（サービスブループリント型にする）',
    '時間の順ではなく、お客さまをタイプ別に分けて紹介したいとき（ペルソナ型にする）',
    '作業の期間や担当を管理したいとき（ガントチャート型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「カスタマージャーニー型（customer journey map）」で作ってください。いちばん上に小さく「オンラインでソファを買うお客さまの旅（30代・共働き世帯）」、その下に結論の見出し「気持ちが最も下がるのは、届くまでの不安」を置きます。その下に、横6列の表を置きます。左の1列は行の名前、右の5列は段階で、上に灰色の地に白い太字で「気づく」「比べる」「買う」「届くまで」「使い続ける」と並べます。行は上から「行動」「接点」「気持ち」「改善策」の4段です。行動は、SNSで見かける／口コミを比べる／注文する／配送日を待つ／組み立てて使う。接点は、SNS広告／公式サイト／注文画面／配送連絡メール／取扱説明書で、薄い灰色の地にします。気持ちの段は、5つの段階の真ん中を通る曲線を描いてください（点の高さは「気づく」3・「比べる」2・「買う」4・「届くまで」1・「使い続ける」5の5段階で、上ほど良い気持ち）。点の近くに、「気になる」「迷う」「楽しみ」「不安」「満足」と書きます。曲線は{{curve:t}}にしてください（灰色の太い線、点は白い丸）。改善策は、サイズ感の動画／比較表を用意／納期を先に表示／追跡と遅れの連絡／組み立て動画で、太字にします。強調は「{{focus:t}}」にしてください（強調するときは、「届くまで」の列全体をごく薄いアクセント色{{accent:t}}で塗り、段階名の地をアクセント色にし、曲線の「届くまで」の点と「不安」の文字をアクセント色にして、改善策の文字もアクセント色の太字にする）。色はアクセント色1色だけで、ほかは白・灰色・黒にします。見出しは32〜36pt、表の中の文字は16pt以上。最下部に「※ 気持ちの高さは、購入者10人への聞き取りから作った5段階の目安。」と注記を入れてください。文言と数字は私が書いたものだけを使い、新しいものを足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「表」で6列×4行（行の名前の列と5つの段階の列）に、段階名を入れる1行を足した表を作ります。段階名の行は塗りつぶしを灰色にして文字を白にします。気持ちの曲線は、表の中ではなく、表の上に重ねて描きます。いちばん手軽なのは「挿入」→「グラフ」→「折れ線」で5つの点のグラフを作り、グラフの線を右クリック→「データ系列の書式設定」→「線」の「スムージング」にチェックを入れて曲線にして、縦軸と目盛りを消し、表の気持ちの行に重ねる方法です。点の位置は、グラフの数値を直せば動かせます。',
    'Googleスライドでは、「挿入」→「表」で表を作り、段階名の行を灰色にします。気持ちの曲線は、「挿入」→「グラフ」→「折れ線」でスプレッドシートのグラフを作り、スライドに貼ります。グラフの種類で、線がなめらかに曲がる「平滑化した折れ線グラフ」を選ぶと曲線になります。数字を変えたときは、グラフの右上の「ソースを開く」で表計算を直し、スライドに戻って「更新」を押します。縦軸と目盛りは消して、表の「気持ち」の行に重ねます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。曲線は1枚の図（SVG）の中で、点の座標（横は段階の中心、縦は5段階の値）から計算しています。点の高さを変えたいときは、座標の縦の値を書き換えます（値が1つ上がると縦の位置が20上がります）。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-curve="{{curve}}">
  <p class="kicker">オンラインでソファを買うお客さまの旅（30代・共働き世帯）</p>
  <h1 class="title">気持ちが最も下がるのは、届くまでの不安</h1>

  <div class="cj-grid">
    <span class="cj-corner"></span>
    <span class="cj-st">気づく</span>
    <span class="cj-st">比べる</span>
    <span class="cj-st">買う</span>
    <span class="cj-st cj-c4">届くまで</span>
    <span class="cj-st">使い続ける</span>
    <span class="cj-rh">行動</span>
    <span class="cj-cell">SNSで見かける</span>
    <span class="cj-cell">口コミを比べる</span>
    <span class="cj-cell">注文する</span>
    <span class="cj-cell cj-c4">配送日を待つ</span>
    <span class="cj-cell">組み立てて使う</span>
    <span class="cj-rh">接点</span>
    <span class="cj-cell cj-soft">SNS広告</span>
    <span class="cj-cell cj-soft">公式サイト</span>
    <span class="cj-cell cj-soft">注文画面</span>
    <span class="cj-cell cj-c4 cj-soft">配送連絡メール</span>
    <span class="cj-cell cj-soft">取扱説明書</span>
    <span class="cj-rh cj-rh-feel"><b>気持ち</b><em>上ほど良い</em></span>
    <span class="cj-feel">
      <svg class="cj-svg" viewBox="0 0 748 120" role="img" aria-label="気持ちの変化。気になる、迷う、楽しみ、不安、満足の順で、届くまでが最も低い">
      <rect class="cj-hl" x="448.8" y="0" width="149.6" height="120" />
      <path class="cj-mid" d="M0 60 H748" />
      <path class="cj-curve cj-smooth" d="M74.8 60 C99.7 63.3 174.5 83.3 224.4 80 C274.3 76.7 324.1 36.7 374 40 C423.9 43.3 473.7 103.3 523.6 100 C573.5 96.7 648.3 33.3 673.2 20" />
      <path class="cj-curve cj-line" d="M74.8 60 L224.4 80 L374 40 L523.6 100 L673.2 20" />
      <circle class="cj-dot" cx="74.8" cy="60" r="7" />
      <text class="cj-word" x="74.8" y="46" text-anchor="middle">気になる</text>
      <circle class="cj-dot" cx="224.4" cy="80" r="7" />
      <text class="cj-word" x="224.4" y="66" text-anchor="middle">迷う</text>
      <circle class="cj-dot" cx="374" cy="40" r="7" />
      <text class="cj-word" x="374" y="26" text-anchor="middle">楽しみ</text>
      <circle class="cj-dot cj-low" cx="523.6" cy="100" r="9" />
      <text class="cj-word cj-low-t" x="523.6" y="86" text-anchor="middle">不安</text>
      <circle class="cj-dot" cx="673.2" cy="20" r="7" />
      <text class="cj-word" x="673.2" y="48" text-anchor="middle">満足</text>
      </svg>
    </span>
    <span class="cj-rh">改善策</span>
    <span class="cj-cell cj-fix">サイズ感の動画</span>
    <span class="cj-cell cj-fix">比較表を用意</span>
    <span class="cj-cell cj-fix">納期を先に表示</span>
    <span class="cj-cell cj-c4 cj-fix">追跡と遅れの連絡</span>
    <span class="cj-cell cj-fix">組み立て動画</span>
  </div>

  <p class="note">※ 気持ちの高さは、購入者10人への聞き取りから作った5段階の目安。</p>
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
.cj-grid { flex: 1; min-height: 0; display: grid; grid-template-columns: 100px repeat(5, minmax(0, 1fr)); grid-template-rows: 36px 58px 48px minmax(0, 1fr) 62px; margin: 12px 0 8px; }
.cj-st { display: grid; place-items: center; background: #5a6070; border-left: 2px solid #fff; color: #fff; font-size: 17px; font-weight: 800; }
.cj-rh { display: flex; flex-direction: column; justify-content: center; padding-left: 4px; border-top: 1.5px solid #e3e5ea; font-size: 16px; font-weight: 800; color: #5a6070; line-height: 1.3; }
.cj-rh-feel b { font-size: 16px; }
.cj-rh-feel em { font-size: 16px; font-style: normal; font-weight: 400; color: #8a8f9c; }
.cj-cell { display: grid; place-items: center; padding: 4px 8px; border-top: 1.5px solid #e3e5ea; font-size: 16px; line-height: 1.35; text-align: center; }
.cj-soft { background: #f3f4f7; }
.cj-fix { font-weight: 700; }
.cj-feel { grid-column: 2 / -1; border-top: 1.5px solid #e3e5ea; }
.cj-svg { display: block; width: 100%; height: 100%; }
.cj-svg text { font-family: inherit; }
.cj-hl { fill: var(--accent); fill-opacity: 0; }
.cj-mid { fill: none; stroke: #e3e5ea; stroke-width: 1.5; stroke-dasharray: 6 6; }
.cj-curve { fill: none; stroke: #5a6070; stroke-width: 3.5; stroke-linecap: round; stroke-linejoin: round; }
.cj-line { display: none; }
.cj-dot { fill: #fff; stroke: #5a6070; stroke-width: 3.5; }
.cj-word { font-size: 16px; font-weight: 700; fill: #5a6070; }

/* 線の形（data-curve="line" で折れ線） */
.slide[data-curve="line"] .cj-smooth { display: none; }
.slide[data-curve="line"] .cj-line { display: block; }

/* 気持ちが最も下がる段階を強調（data-focus="low"） */
.slide[data-focus="low"] .cj-st.cj-c4 { background: var(--accent); }
.slide[data-focus="low"] .cj-cell.cj-c4 { background: color-mix(in srgb, var(--accent) 8%, #fff); }
.slide[data-focus="low"] .cj-cell.cj-soft.cj-c4 { background: color-mix(in srgb, var(--accent) 12%, #f3f4f7); }
.slide[data-focus="low"] .cj-fix.cj-c4 { font-weight: 800; color: var(--accent); }
.slide[data-focus="low"] .cj-hl { fill-opacity: 0.08; }
.slide[data-focus="low"] .cj-low { stroke: var(--accent); fill: var(--accent); }
.slide[data-focus="low"] .cj-low-t { fill: var(--accent); font-weight: 800; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する部分',
      value: 'low',
      options: [
        { value: 'low', label: '気持ちが最も下がる段階を強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    {
      key: 'curve',
      type: 'select',
      label: '気持ちの線の形',
      value: 'smooth',
      options: [
        { value: 'smooth', label: 'なめらかな曲線' },
        { value: 'line', label: '折れ線' },
      ],
    },
  ],
  cautions: [
    '気持ちの曲線を、想像だけで描かないこと。聞き取りやアンケートの結果から作り、「購入者10人への聞き取り」のように根拠を注記に書きます。根拠がないと、「それはあなたの想像では」と言われて、改善策の説得力が落ちます。',
    '谷（気持ちが下がる所）に必ず改善策を置くこと。曲線を描いただけで終わると、「で、どうするのか」が残ります。見本のように、最も下がる段階の真下に具体策を1つ書き、その列だけ色を付けます。',
    '段階は4〜6つまで、行は4段までにします。段階を増やすと、1つのマスが狭くなって文字が小さくなります。行も「思い」「課題」などを増やしたくなりますが、スライドには結論に必要な行だけを残します。',
    '自社の都合の言葉ではなく、お客さまの言葉で書くこと。「認知」「比較検討」「購入」のような社内用語より、「気づく」「比べる」「買う」と、お客さま自身の動きで書く方が伝わります。',
  ],
  similar: [
    { slug: 'service-blueprint', diff: 'サービスブループリント型は、お客さまの行動に対して、会社側の表の対応と裏の業務を上下に重ねる型です。カスタマージャーニー型は、お客さまの気持ちと接点に絞った図です。' },
    { slug: 'persona', diff: 'ペルソナ型は、想定するお客さま像を1枚の人物像としてまとめる型です。カスタマージャーニー型は、そのお客さまの体験を、時間の順に追います。' },
    { slug: 'timeline', diff: 'タイムライン型は、出来事を時間の順に1本の線に並べる型です。カスタマージャーニー型は、同じ時間軸の上に、行動・場所・気持ち・改善策を重ねて見せます。' },
  ],
  faq: [
    {
      q: 'カスタマージャーニーマップとペルソナの関係は？',
      a: 'ペルソナは「想定するお客さま像」で、カスタマージャーニーマップは「そのお客さまが体験する流れ」です。ふつうは、先にペルソナを決めて（例:30代・共働き世帯）、そのお客さまの視点で、行動と気持ちの流れを描きます。',
    },
    {
      q: '気持ちの曲線は、PowerPointでどう描けばよいですか？',
      a: '「挿入」→「グラフ」→「折れ線」で5つの点のグラフを作ります。線を右クリックして「データ系列の書式設定」を開き、「線」の「スムージング」にチェックを入れると曲線になります。縦軸・横軸・目盛り線を消して、表の「気持ち」の行に重ねると、見本のようになります。',
    },
    {
      q: 'AIにカスタマージャーニーを頼むとき、気をつけることは？',
      a: '「お客さまの気持ち」をAIに作らせると、もっともらしいが根拠のない内容になりがちです。段階ごとの行動と気持ち、5段階の点数は自分で書いて渡し、AIには形（並べ方・強調・曲線の描き方）だけを任せると、実際の聞き取りと合った資料になります。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
