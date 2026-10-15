import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'bottom-nav',
  no: 11,
  category: 'nav',
  name: 'タブバー（ボトムナビゲーション）',
  en: 'Bottom navigation bar',
  aka: ['タブバー', 'ボトムナビゲーション', 'ボトムナビ', '下部メニュー', 'フッターナビ'],
  mode: 'script',
  title: 'タブバー（ボトムナビゲーション）とは？タブとの違いとCSSでの作り方',
  description:
    'スマホの画面下に主な行き先を並べるタブバー（ボトムナビゲーション）を触れる見本で解説。画面内のタブやハンバーガーメニューとの違い、項目数の目安、iPhoneのホームバーを避ける指定まで、作り方と頼み方をまとめました。',
  oneLine: 'スマホの画面の下に、主な行き先を3〜5個いつも並べておくバー。',
  what: [
    'アプリやスマホ向けサイトの画面の下に、「ホーム・さがす・予約・マイページ」のような主な行き先をアイコンと短い名前で並べ、いつでも1回で移れるようにする部品です。iPhoneでは「タブバー」、Android（Material Design）では「ボトムナビゲーション」と呼ばれます。見本では下の4つを押すと画面が切り替わり、今いる場所は色とアイコンの後ろの淡い丸で示されます。',
    'よく混同されるのが、画面の中の「タブ」です。タブ（tablist）は同じページの中で表示を切り替える部品で、たとえば商品ページの「説明・レビュー・Q&A」です。タブバーはアプリの「区画そのもの」を移動するナビゲーションで、押すとURLや画面がまるごと変わります。ハンバーガーメニューとの違いは「隠さない」こと。行き先が常に見えているので、よく使う3〜5か所の行き来がいちばん速くなります。',
    '決まりごとは、項目を3〜5個にすること（2つならタブ、6つ以上ならほかの方法へ）、アイコンだけでなく名前を添えること、今の場所に aria-current="page" を付けること、押せる大きさを44px以上にすること。iPhoneのホームバー（画面下の横線）と重ならないよう、余白を足すことも欠かせません。',
  ],
  when: [
    '予約・通販・SNSのように、利用者が「ホーム・検索・履歴・マイページ」を何度も行き来するスマホ向けのサービス',
    'ホーム画面に追加して使うWebアプリ（PWA）で、アプリと同じ操作感にしたいとき',
    '片手で操作されることが多く、親指の届く画面下に主な行き先を置きたいとき',
    'ハンバーガーメニューの中の項目のうち、よく押される3〜5個を表に出したいとき',
  ],
  avoid: [
    'パソコンの広い画面（下に横長のバーは間延びする。上のメニューかサイドバーに切り替える）',
    '会社案内やLPのように、行き来より上から読み進めてもらうページ',
    '「お申し込み」のような1つの行動を押してほしいだけの画面（追従CTAバーの方が向く）',
    '項目が6個以上あるとき（文字が詰まって押し間違える。残りは「その他」やマイページへまとめる）',
  ],
  prompt:
    'スマホ向けの画面に「タブバー（bottom navigation bar）」を作ってください。画面の下端に position: fixed で固定し、「ホーム・さがす・予約・マイページ」の4項目を、アイコン（{{icon:t}}の大きさのSVG）と短い名前の縦並びで均等に並べてください。バーの高さは{{height:t}}にし、iPhoneのホームバーと重ならないよう padding-bottom に env(safe-area-inset-bottom) を足してください。<nav aria-label="メイン"> の中に <a> で並べ、今いる画面には aria-current="page" を付けて、文字とアイコンを{{color:t}}にし、アイコンの後ろに淡い丸を敷いてください（色だけに頼らない）。各項目の押せる範囲は44px以上にし、ページの最後の内容がバーに隠れないよう body の下に同じ高さの余白をとってください。画面幅768px以上ではタブバーを隠してください。',
  howTo: [
    'HTMLは <nav> の中に <a> を4つ並べ、それぞれに飾りのアイコン（aria-hidden="true"）と名前の文字を入れます。今の画面のリンクに aria-current="page" を付けておけば、CSS の [aria-current="page"] で色を変えられ、読み上げでも「現在のページ」と伝わります。',
    'バーは position: fixed; bottom: 0 で画面下に固定し、高さに env(safe-area-inset-bottom)（iPhoneのホームバーの分の余白）を足します。この値を使うには、<meta name="viewport"> に viewport-fit=cover が必要です。固定したバーの下に本文が潜り込むので、body にも同じ高さの padding-bottom を付けます。見本は枠の中に収めるため、グリッドの最下段に置いています。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<!-- head の viewport に viewport-fit=cover を付ける -->
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">

<nav class="tabbar" aria-label="メイン">
  <a href="/" aria-current="page">
    <svg aria-hidden="true" viewBox="0 0 24 24"><!-- 家のアイコン --></svg>
    <span>ホーム</span>
  </a>
  <a href="/search/">
    <svg aria-hidden="true" viewBox="0 0 24 24"><!-- 虫めがね --></svg>
    <span>さがす</span>
  </a>
  <a href="/trips/">
    <svg aria-hidden="true" viewBox="0 0 24 24"><!-- カレンダー --></svg>
    <span>予約</span>
  </a>
  <a href="/me/">
    <svg aria-hidden="true" viewBox="0 0 24 24"><!-- 人 --></svg>
    <span>マイページ</span>
  </a>
</nav>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 40;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* iPhoneのホームバーの分だけ下に余白を足す（余白も高さに含める） */
  box-sizing: border-box;
  height: calc({{height}} + env(safe-area-inset-bottom));
  padding-bottom: env(safe-area-inset-bottom);
  background: #fff;
  border-top: 1px solid #e4e2dc;
}
.tabbar a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  min-height: 44px;
  color: #5d6272;
  font-size: 10px;
  font-weight: 700;
  text-decoration: none;
}
.tabbar svg {
  width: {{icon}};
  height: {{icon}};
  padding: 3px 14px;
  box-sizing: content-box;
  border-radius: 999px;
  stroke: currentColor;
  fill: none;
  transition: background-color 0.2s ease-out;
}
/* 今いる場所: 色＋アイコンの後ろの淡い丸 */
.tabbar a[aria-current="page"] { color: {{color}}; }
.tabbar a[aria-current="page"] svg {
  background: color-mix(in srgb, {{color}} 14%, transparent);
}
/* 最後の内容がバーに隠れないように */
body { padding-bottom: calc({{height}} + env(safe-area-inset-bottom)); }

/* パソコンでは隠す（上のメニューかサイドバーを出す） */
@media (min-width: 768px) {
  .tabbar { display: none; }
  body { padding-bottom: 0; }
}`,
    },
  ],
  tune: [
    { key: 'height', label: 'バーの高さ', min: 48, max: 80, step: 2, value: 64, unit: 'px' },
    { key: 'icon', label: 'アイコンの大きさ', min: 18, max: 30, step: 1, value: 24, unit: 'px' },
    { key: 'color', type: 'color', label: '今いる場所の色', value: '#f06a35' },
  ],
  cautions: [
    'アイコンだけで名前を消すと、「このマークは何？」と押して確かめる人が増えます。名前は短くても必ず添えます（4文字前後が目安）。',
    '画面の下に固定する部品は、FABや追従CTAバー、Cookieの同意バナーと場所を取り合います。重なる場合は、ほかの部品をタブバーの上に置きます。',
    'スマホのブラウザでは、スクロールで下のツールバーが出たり消えたりします。bottom: 0 で固定していれば追従しますが、高さを 100vh で計算した部品があるとずれるので、100dvh を使います。',
    'タブを押したときに、その画面の一番上へ戻すか、前に見ていた位置を保つかを決めておきます。アプリでは「今いるタブをもう一度押すと一番上へ戻る」が定番です。',
  ],
  similar: [
    { slug: 'tab-indicator', book: 'ugoki', diff: 'タブ（下線がスライドする切り替え）は同じページの中で表示を切り替えます。タブバーはアプリの区画そのものを移動するナビゲーションです。' },
    { slug: 'hamburger-menu', diff: 'ハンバーガーメニューは行き先をしまっておき、押すと出します。タブバーは主な行き先を隠さず、いつでも1回で届くようにします。' },
    { slug: 'sticky-cta', diff: '追従CTAバーも画面の下に貼りつきますが、中身は「お申し込み」のような1つの行動です。タブバーは複数の行き先を切り替えます。' },
  ],
  faq: [
    {
      q: 'タブバーとボトムナビゲーションは違うものですか？',
      a: '同じ部品を指しています。iPhone（Appleのデザイン指針）では「タブバー」、Android（Googleの Material Design）では「ボトムナビゲーション」「ナビゲーションバー」と呼びます。AIに頼むときは「bottom navigation bar」と書くと確実に伝わります。',
    },
    {
      q: 'タブバーの項目はいくつまでがいいですか？',
      a: '3〜5個です。2個ならタブやセグメントコントロールで足り、6個以上になると1つあたりの幅が狭くなって名前が切れ、押し間違いが増えます。入りきらない項目は「マイページ」や「その他」の中にまとめます。',
    },
    {
      q: 'iPhoneでタブバーがホームバー（画面下の線）と重なってしまいます。',
      a: '<meta name="viewport"> に viewport-fit=cover を付けたうえで、バーの padding-bottom に env(safe-area-inset-bottom) を足します。これでホームバーのある端末だけ、その分の余白が自動で入ります。高さも同じ分だけ足しておくと、アイコンの位置がずれません。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
