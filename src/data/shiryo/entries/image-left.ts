import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'image-left',
  no: 15,
  category: 'kousei',
  name: '左図右文型',
  en: 'Image left, text right',
  aka: ['左写真右文章', '写真と説明', '画像＋テキスト', '図と文章の2分割', '左画像右テキスト'],
  mode: 'static',
  title: '左図右文型とは？写真と説明文を左右に並べるスライドの作り方【PowerPoint・Googleスライド】',
  description:
    '左に写真や図、右に見出しと説明を置く「左図右文型」のスライドを見本で解説。写真の大きさと位置の決め方、PowerPoint・Googleスライドでの作り方、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '左に写真や図、右に見出しと3つの説明を置く、いちばん定番の配置。',
  what: [
    'スライドの左半分に写真や図を置き、右半分に見出しと説明を並べる型です。見本では、パン屋の店頭でタブレットを使う場面の絵を左にスライドの端から端まで大きく敷き、右に結論の見出し「朝の発注作業が、1日40分から10分に」と、変わった点を3つ、番号つきで並べています。いちばん下には数字の条件を書いた注記を置いています。',
    'この型のよさは、写真で「どんな場面の話か」を先に見せ、文字で「何がどう変わったか」を補えることです。決まりごとは、写真の幅をスライドの4割前後にして、文字側を読みやすい行の長さに保つこと。写真は端まで広げた方が資料らしく見え、文字側は4〜5行の見出しと3つの説明に収めると窮屈になりません。',
  ],
  when: [
    '導入事例や取り組みを、現場の写真つきで紹介するとき',
    '製品・サービスの画面や外観を見せながら、特長を3つ説明するとき',
    '店舗・工場・オフィスなど、場所のようすを見せたうえで話を始めたいとき',
    '資料の中で、文字だけのスライドが続いて単調になるのを避けたいとき',
  ],
  avoid: [
    '説明したい項目が5つ以上あるとき（右側に入りきらない。項目を絞るか、3ポイント並列型にする）',
    '写真が暗い・小さい・ぼやけていて、見せる意味が薄いとき（文字だけの1メッセージ型の方が伝わる）',
    '写真に文字を重ねたいとき（全面写真＋帯型にして、帯の上に文字を置く）',
  ],
  prompt:
    '16:9のスライドを1枚、「左図右文型（image left, text right）」で作ってください。スライド全体を左右に分け、{{side:t}}にします。写真側はスライドの端から端まで（上下左右に余白なし）敷き、幅はスライド全体の{{img:t}}とします。写真は「パン屋の店頭で、カウンターの上のタブレットを使う場面」のものを入れ（今は仮の絵でかまいません）、左下に小さく「写真はイメージ」と添えてください。文字側は、いちばん上に小さく「ベーカリーの店頭業務」、その下に見出し「朝の発注作業が、1日40分から10分に」を太字32pt前後で置きます。その下に、番号つきの説明を3つ縦に並べてください。番号はアクセント色{{accent:t}}の角丸の四角に白い数字を入れ、右に太字20ptの項目名、その下に灰色16ptの説明文を置きます。中身は、1「紙の発注書をやめた：店長が閉店後に、タブレットで数を入力する」、2「売れ残りが見える：前日の残りが画面に出るので、作りすぎを防げる」、3「工場へすぐ届く：入力するとその場で届き、朝5時の仕込みに間に合う」です。最下部に注記「※ 3店舗の平均（2026年6月）。1日あたりの発注作業の時間。」を13ptで入れます。色はアクセント色の1色だけで、ほかは白・灰色・黒にしてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「ホーム」→「新しいスライド」で「コンテンツとタイトル」や「2つのコンテンツ」のレイアウトを選ぶと、左右に枠が並んだ状態から始められます。写真は「挿入」→「画像」で入れ、枠いっぱいに広げて、はみ出した部分は「図の形式」→「トリミング」で切り落とします。端まで広げたいときは、写真をスライドの左端・上端・下端にぴったり合わせ（「図の形式」→「配置」→「左揃え」「上揃え」）、高さを540ptにしてください。右側の文字は、見出しと説明を別のテキストボックスにすると位置を細かく調整できます。',
    'Googleスライドでは、「スライド」→「レイアウトを適用」で、見出しと本文の枠があるレイアウトを選び、左に「挿入」→「画像」で写真を入れます。写真を選んで「画像をトリミング」を押すと、枠の形に切り抜けます。端までぴったり広げるときは、画像を選んだまま「配置」→「中央揃え」ではなく「左揃え」「上揃え」を使い、高さを540ptにしてください。番号つきの説明は、「挿入」→「図形」から角丸四角形を3つ置き、白い数字を入れて作ります。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。写真の部分は<svg>の絵で代用しているので、実際の写真に替えるときは、<svg>から</svg>までを<img src="写真のファイル名" alt="写真の説明">に置き換えてください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-side="{{side}}">
  <div class="photo">
<svg viewBox="0 0 420 540" preserveAspectRatio="xMidYMid slice" role="img" aria-label="パン屋の店頭で、カウンターの上のタブレットを操作する場面のイメージ" xmlns="http://www.w3.org/2000/svg">
  <rect width="420" height="540" fill="#efe3d0"/>
  <rect y="330" width="420" height="40" fill="#e3d2b8"/>
  <path d="M210 0v44" stroke="#6b5a48" stroke-width="3"/>
  <path d="M170 44h80a40 28 0 0 1-80 0z" fill="#f2c66d"/>
  <rect x="24" y="118" width="372" height="10" rx="3" fill="#b98a5a"/>
  <rect x="24" y="228" width="372" height="10" rx="3" fill="#b98a5a"/>
  <g fill="#d9a15f"><ellipse cx="70" cy="104" rx="34" ry="14"/><ellipse cx="150" cy="106" rx="30" ry="12"/><ellipse cx="236" cy="104" rx="36" ry="14"/><ellipse cx="322" cy="106" rx="32" ry="12"/></g>
  <g fill="#c98a45"><ellipse cx="96" cy="214" rx="30" ry="13"/><ellipse cx="176" cy="212" rx="34" ry="14"/><ellipse cx="270" cy="214" rx="30" ry="12"/><ellipse cx="344" cy="212" rx="28" ry="12"/></g>
  <g stroke="#a56f32" stroke-width="3" stroke-linecap="round"><path d="M56 100l8 8M72 98l8 8M222 100l8 8M240 98l8 8M160 208l8 8M178 206l8 8"/></g>
  <rect y="372" width="420" height="168" fill="#8a5a3a"/>
  <rect y="360" width="420" height="16" fill="#a9744c"/>
  <path d="M168 360l8-34h48l8 34z" fill="#3a3f4c"/>
  <rect x="104" y="196" width="212" height="136" rx="12" fill="#2b2f3a"/>
  <rect x="114" y="206" width="192" height="116" rx="4" fill="#f7f7f4"/>
  <rect x="124" y="216" width="80" height="10" rx="3" fill="#2b2f3a"/>
  <g fill="#d9dce3"><rect x="124" y="242" width="172" height="18" rx="3"/><rect x="124" y="268" width="172" height="18" rx="3"/><rect x="124" y="294" width="172" height="18" rx="3"/></g>
  <g fill="#d9a15f"><circle cx="136" cy="251" r="5"/><circle cx="136" cy="277" r="5"/><circle cx="136" cy="303" r="5"/></g>
  <g fill="#8a8f9c"><rect x="150" y="248" width="70" height="6" rx="2"/><rect x="150" y="274" width="58" height="6" rx="2"/><rect x="150" y="300" width="80" height="6" rx="2"/></g>
  <g fill="#2b2f3a"><rect x="262" y="246" width="26" height="10" rx="3"/><rect x="262" y="272" width="26" height="10" rx="3"/><rect x="262" y="298" width="26" height="10" rx="3"/></g>
  <ellipse cx="352" cy="352" rx="46" ry="12" fill="#6e4528"/>
  <g fill="#d9a15f"><ellipse cx="334" cy="338" rx="22" ry="14"/><ellipse cx="368" cy="340" rx="22" ry="14"/></g>
  <ellipse cx="60" cy="356" rx="36" ry="9" fill="#f7f1e6"/>
  <ellipse cx="60" cy="346" rx="30" ry="12" fill="#c98a45"/>
</svg>
    <span class="cap">写真はイメージ</span>
  </div>

  <div class="text">
    <p class="kicker">ベーカリーの店頭業務</p>
    <h1 class="title">朝の発注作業が、1日40分から10分に</h1>
    <ol class="points">
      <li><span class="no">1</span><span class="body"><b>紙の発注書をやめた</b><span>店長が閉店後に、タブレットで数を入力する</span></span></li>
      <li><span class="no">2</span><span class="body"><b>売れ残りが見える</b><span>前日の残りが画面に出るので、作りすぎを防げる</span></span></li>
      <li><span class="no">3</span><span class="body"><b>工場へすぐ届く</b><span>入力するとその場で届き、朝5時の仕込みに間に合う</span></span></li>
    </ol>
    <p class="note">※ 3店舗の平均（2026年6月）。1日あたりの発注作業の時間。</p>
  </div>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* 幅960px×高さ540px（PowerPointの16:9と同じ比率） */
.slide {
  --accent: {{accent}};
  position: relative;
  box-sizing: border-box;
  width: 960px;
  height: 540px;
  display: grid;
  grid-template-columns: {{img}} 1fr;
  background: #fff;
  color: #1f2430;
  font-family: "Hiragino Sans", "Noto Sans JP", sans-serif;
  line-height: 1.4;
  overflow: hidden;
}

/* 写真。端から端まで敷く */
.photo { position: relative; overflow: hidden; background: #efe3d0; }
.photo svg, .photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; }
.cap { position: absolute; left: 14px; bottom: 14px; padding: 3px 10px; border-radius: 999px; background: rgba(31, 36, 48, 0.62); color: #fff; font-size: 13px; }

/* 文字側 */
.text { display: flex; flex-direction: column; min-width: 0; padding: 44px 56px 40px 48px; }
.kicker { margin: 0 0 6px; font-size: 15px; font-weight: 700; letter-spacing: 0.04em; color: var(--accent); }
.title { margin: 0; font-size: 32px; font-weight: 800; line-height: 1.3; text-wrap: balance; }
.points { list-style: none; margin: 26px 0 0; padding: 0; display: flex; flex-direction: column; gap: 18px; }
.points li { display: flex; gap: 14px; align-items: flex-start; }
.no { flex: none; display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--accent); color: #fff; font-size: 16px; font-weight: 800; }
.body { display: flex; flex-direction: column; gap: 2px; }
.body b { font-size: 20px; font-weight: 800; }
.body span { font-size: 16px; color: #5a6070; line-height: 1.5; }
.note { margin: auto 0 0; padding-right: 32px; font-size: 13px; color: #8a8f9c; }

/* 写真の位置（data-side="left" / "right"） */
.slide[data-side="right"] { grid-template-columns: 1fr {{img}}; }
.slide[data-side="right"] .photo { order: 2; }
.slide[data-side="right"] .text { padding: 44px 48px 40px 56px; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'side',
      type: 'select',
      label: '写真の位置',
      value: 'left',
      options: [
        { value: 'left', label: '写真を左、文字を右' },
        { value: 'right', label: '写真を右、文字を左' },
      ],
    },
    { key: 'img', label: '写真の幅（スライド全体に対する%）', min: 36, max: 56, step: 4, value: 44, unit: '%' },
  ],
  cautions: [
    '写真を小さな枠に入れて余白で囲むと、資料が弱く見えます。写真は上下と端まで広げ、はみ出す部分はトリミングで切り落とします。引き伸ばして縦横の比率を変えるのは厳禁です。人の顔が楕円になります。',
    '写真の中身と見出しがずれないようにしてください。「発注作業が短くなった」という見出しの横に、店舗の外観写真を置いても、何を見ればいいのか分かりません。画面や作業中の手元など、見出しの根拠になる絵を選びます。',
    '右側に説明を詰め込まないでください。見本のように3項目・1項目2行までが限界です。それ以上は文字が小さくなって、遠くから見える写真のよさが活きません。',
    'フリー素材の写真は、作者名の表示が必要なものがあります。会社の資料に使うときは、利用規約を確かめ、必要なら「写真はイメージ」の横に出典を小さく書いてください。',
  ],
  similar: [
    { slug: 'full-photo', diff: '全面写真＋帯型は、写真をスライド全体に敷いて、帯の上に一言だけ置く型です。左図右文型は写真を半分に収め、説明の文章を並べられます。' },
    { slug: 'case-card', diff: '事例紹介カード型は、写真・課題・成果を1つのカードにまとめる型です。左図右文型は、写真と説明が左右に分かれているだけで、「課題」「成果」のような決まった項目はありません。' },
    { slug: 'three-points', diff: '3ポイント並列型は、要点3つを横に同じ大きさで並べます。左図右文型の3つの説明は、写真の補足として縦に並べるものです。' },
  ],
  faq: [
    {
      q: '写真は左と右のどちらに置けばいいですか？',
      a: '資料の中で位置をそろえるのが一番大事です。迷うなら左に置きます。人は左から読み始めるので、写真で場面を知ってから右の説明を読む流れになります。ただし、写真が右向きの人物なら、人物が文字の方を向く側に置くと自然です。',
    },
    {
      q: '写真と文字の比率はどのくらいがいいですか？',
      a: '写真が4割前後、文字が6割前後が目安です。写真を半分以上にすると文字側が狭くなり、見出しが3行にもなりがちです。逆に3割を切ると、写真が小さすぎて何が写っているのか分かりません。',
    },
    {
      q: 'PowerPointで写真をスライドの端までぴったり広げるには？',
      a: '写真を選んで「図の形式」→「サイズ」で高さを540pt、幅を決めた値に直し、「配置」→「左揃え」「上揃え」でスライドの端に寄せます。縦横の比率が崩れるときは、先に「トリミング」で比率を整えてから大きさを変えてください。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
