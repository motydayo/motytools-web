import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'sidebar',
  no: 15,
  category: 'nav',
  name: 'サイドバー',
  en: 'Sidebar navigation',
  aka: ['サイドナビ', 'サイドメニュー', '左メニュー', 'ナビゲーションレール', '折りたたみサイドバー'],
  mode: 'script',
  title: '管理画面のサイドバー（左メニュー）の作り方｜アイコンだけに畳む方法',
  description:
    '管理画面やWebアプリの左にいつも出ているサイドバーを触れる見本で解説。ドロワーとの違い、アイコンだけの細い帯に畳む作り、読み上げへの伝え方、画面幅に応じた切り替え、AIへの頼み方までまとめました。',
  oneLine: '画面の左にいつも出ている縦のメニュー。畳むとアイコンだけの細い帯になる。',
  what: [
    '管理画面やWebアプリの左側に、「ダッシュボード・予約・お客さま・売上・設定」のような行き先を縦に並べ、いつでも見える状態にしておく部品です。見本では項目を押すと右の画面が切り替わり、今いる場所は地の色と左の印で示されます。上のボタンを押すと、アイコンだけの細い帯（ナビゲーションレール）に畳まれ、右の作業スペースが広がります。',
    'ドロワーとの違いは「最初から出ているかどうか」です。ドロワーは普段は隠れていて、ボタンを押すと画面の端から引き出され、中身の上に重なります。サイドバーは画面の一部として常に場所をとり、中身と並んで表示されます。そのため、行き先が多くても一目で見渡せ、何度も行き来する管理画面や業務ツールに向きます。見本も、狭い枠では最初から畳み、広げると中身の上に重ねて（ドロワーのように）出します。',
    '決まりごとは、メニューを <nav aria-label="管理メニュー"> で囲み、今のページのリンクに aria-current="page" を付けること。畳むボタンには aria-expanded を付け、「メニューを畳む／広げる」と名前を切り替えます。畳んだときも項目の名前は消さず、読み上げには伝わるようにし、マウスを乗せたら名前が出るようにしておきます。',
  ],
  when: [
    '予約管理・在庫管理・会計ソフトのような管理画面で、5〜10個の機能を何度も行き来するとき',
    'ドキュメントやヘルプのサイトで、章の目次を左に出したまま本文を読んでもらうとき',
    'メール・チャット・タスク管理のように、フォルダやチャンネルを切り替えながら使うWebアプリ',
    '表やグラフを広く見せたい画面で、メニューを必要に応じて細く畳めるようにしたいとき',
  ],
  avoid: [
    'スマホの狭い画面（サイドバーで横幅の半分以上が埋まる。ドロワーかタブバーに切り替える）',
    'LPや会社案内のように、上から順に読んでもらうページ（横に並ぶメニューが読む流れを散らす）',
    '行き先が3〜4個しかない小さなサイト（上のヘッダーに横並びで足りる）',
  ],
  prompt:
    '管理画面の左に「サイドバー（sidebar navigation）」を作ってください。幅は{{width:t}}で、上に「畳むボタン」、その下に <nav aria-label="管理メニュー"> で「ダッシュボード・予約・お客さま・売上・設定」をアイコン＋名前のリンクで縦に並べてください。今いるページのリンクには aria-current="page" を付け、地の色と左端の線で示してください。畳むボタンは <button aria-expanded aria-controls> にし、押すとアイコンだけの幅{{rail:t}}に{{dur:t}}かけて縮め、右の作業スペースが同じ速さで広がるようにしてください。畳んだときも項目名は読み上げで伝わるよう残し、title 属性で名前が出るようにしてください。畳んだ状態は localStorage に保存してください。画面幅768px未満ではサイドバーを隠し、ハンバーガーボタンで開くドロワーに切り替えてください。各項目の高さは44px以上にしてください。',
  howTo: [
    '画面全体を CSS グリッドで「サイドバーの列」と「作業スペースの列」に分けます。grid-template-columns を「220px 1fr」と「64px 1fr」で切り替え、grid-template-columns に transition を付けると、畳む・広げるがなめらかに動きます。サイドバーは position: sticky; top: 0; height: 100dvh にすると、作業スペースだけがスクロールします。',
    '畳んだときは名前の文字を display: none で消さず、透明にして幅の外へ追い出します。こうすると読み上げソフトには名前が残り、アイコンだけでも何のリンクか伝わります。畳んだかどうかは localStorage に覚えておき、次に開いたときも同じ状態で表示します。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="layout">
  <aside class="sidebar">
    <button type="button" class="collapse-btn"
      aria-expanded="true" aria-controls="admin-nav" aria-label="メニューを畳む">
      <svg aria-hidden="true" viewBox="0 0 24 24"><!-- パネルのアイコン --></svg>
    </button>
    <nav id="admin-nav" aria-label="管理メニュー">
      <ul>
        <li><a href="/admin/" aria-current="page" title="ダッシュボード">
          <svg aria-hidden="true" viewBox="0 0 24 24"><!-- アイコン --></svg>
          <span class="label">ダッシュボード</span></a></li>
        <li><a href="/admin/bookings/" title="予約">
          <svg aria-hidden="true" viewBox="0 0 24 24"></svg>
          <span class="label">予約</span></a></li>
        <li><a href="/admin/guests/" title="お客さま">
          <svg aria-hidden="true" viewBox="0 0 24 24"></svg>
          <span class="label">お客さま</span></a></li>
      </ul>
    </nav>
  </aside>
  <main class="content">…</main>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.layout {
  display: grid;
  grid-template-columns: {{width}} 1fr;
  min-height: 100dvh;
  transition: grid-template-columns {{dur}} ease-out;
}
.layout.is-collapsed { grid-template-columns: {{rail}} 1fr; }

.sidebar {
  position: sticky;
  top: 0;
  height: 100dvh;
  overflow-x: hidden;
  overflow-y: auto; /* 項目が多くても下まで届くように */
  padding: 8px;
  background: #1d2541;
  color: #c4cbe3;
}
.sidebar ul { list-style: none; margin: 0; padding: 0; }
.sidebar a {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  padding: 0 14px;
  border-radius: 10px;
  color: inherit;
  text-decoration: none;
  white-space: nowrap;
}
.sidebar svg { flex: none; width: 20px; height: 20px; }
/* 今のページ */
.sidebar a[aria-current="page"] {
  background: rgb(255 255 255 / 0.14);
  color: #fff;
  box-shadow: inset 3px 0 0 #f06a35;
}
/* 畳んだら名前は透明に（読み上げには残る） */
.label { transition: opacity {{dur}} ease-out; }
.is-collapsed .label { opacity: 0; }

/* スマホ: サイドバーを隠してドロワーに切り替える */
@media (max-width: 767px) {
  .layout, .layout.is-collapsed { grid-template-columns: 1fr; }
  .sidebar { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .layout, .label { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const layout = document.querySelector('.layout');
const btn = document.querySelector('.collapse-btn');

const setCollapsed = (collapsed) => {
  layout.classList.toggle('is-collapsed', collapsed);
  btn.setAttribute('aria-expanded', String(!collapsed));
  btn.setAttribute('aria-label', collapsed ? 'メニューを広げる' : 'メニューを畳む');
  try { localStorage.setItem('sidebar-collapsed', collapsed ? '1' : '0'); } catch {}
};

// 前回の状態を復元
let saved = null;
try { saved = localStorage.getItem('sidebar-collapsed'); } catch {}
setCollapsed(saved === '1');

btn.addEventListener('click', () => {
  setCollapsed(!layout.classList.contains('is-collapsed'));
});`,
    },
  ],
  tune: [
    { key: 'width', label: '広げたときの幅', min: 180, max: 280, step: 4, value: 220, unit: 'px' },
    { key: 'rail', label: '畳んだときの幅', min: 56, max: 80, step: 4, value: 64, unit: 'px' },
    { key: 'dur', label: '開閉の速さ', min: 0.1, max: 0.5, step: 0.05, value: 0.25, unit: 's' },
  ],
  cautions: [
    '畳んだときに名前を display: none で消すと、読み上げソフトではアイコンだけの名前のないリンクになります。透明にするか、visually-hidden（見えないが読まれる指定）にして名前を残します。',
    'アイコンだけの細い帯では、どれが何か覚えるまで迷います。マウスを乗せると名前が出るようにし（title やツールチップ）、初めての人には広げた状態で見せます。',
    'サイドバーの項目が増えて画面の高さを超えると、下の項目に届きません。サイドバー自体に overflow-y: auto を付け、作業スペースとは別にスクロールできるようにします。',
    'スマホではサイドバーをそのまま縮めず、ハンバーガーボタンで開くドロワーへ切り替えます。同じリンクの一覧を使い回すと、行き先の管理が一か所で済みます。',
  ],
  similar: [
    { slug: 'drawer', diff: 'ドロワーは普段は隠れていて、押すと画面の端から中身の上に重なって出ます。サイドバーは最初から画面の一部として中身と並んでいます。' },
    { slug: 'scrollspy', book: 'ugoki', diff: 'スクロールスパイは、サイドバーに置いた目次のうち今読んでいる見出しを光らせる演出です。ドキュメントのサイトでよく組み合わせます。' },
    { slug: 'bottom-nav', diff: 'タブバーはスマホの下に3〜5個の行き先を並べます。広い画面ではサイドバー、スマホではタブバーと、同じ行き先を画面幅で出し分けるのが定番です。' },
  ],
  faq: [
    {
      q: 'サイドバーとドロワーはどう使い分けますか？',
      a: '画面の広さと使う頻度で決めます。パソコンの広い画面で何度も行き来するならサイドバーを常に出しておき、スマホのように狭い画面では隠しておけるドロワーにします。1つのサービスの中で、画面幅に応じて切り替えるのが一般的です。',
    },
    {
      q: 'サイドバーの幅はどのくらいがいいですか？',
      a: '広げたときは200〜260px、畳んだとき（アイコンだけ）は56〜72pxがよく使われます。いちばん長い項目名が1行に収まり、それでも作業スペースが狭くならない幅にします。項目名が長いなら、幅を広げるより名前を短くします。',
    },
    {
      q: 'サイドバーは左と右のどちらに置くべきですか？',
      a: '行き先のメニューなら左が基本です。日本語や英語のように左から右へ読む言語では、目が最初に向かう左に入口があると探しやすいからです。右側は、選んだ項目の詳細や関連情報（ページ内の目次・広告など）を置く場所として使われます。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
