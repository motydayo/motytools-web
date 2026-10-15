import type { Ugoki } from '../types';

export default {
  slug: 'sticky-header',
  no: 3,
  category: 'scroll',
  name: '追従ヘッダー',
  en: 'Sticky header',
  aka: ['固定ヘッダー', 'スティッキーヘッダー', 'ヘッダー固定', '追尾ヘッダー'],
  mode: 'scroll',
  title: '追従ヘッダーとは？CSSだけの作り方と使いどころ【見本つき】',
  description:
    '追従ヘッダー（固定ヘッダー）を動く見本で解説。CSSのposition: stickyだけで作る方法、影を付けて浮かせるコツ、スマホで画面を狭くしない工夫、AIに頼むときの指示文までまとめました。',
  oneLine: 'スクロールしても、メニューが画面の上にくっついてくる。',
  what: [
    'ページを下へ読み進めても、ロゴ・メニュー・申し込みボタンが並んだ帯（ヘッダー）が画面の上端に残り続ける演出です。どこまで読んでも、別のページへ移る入口と申し込みの入口が目の前にあります。',
    '見本では、スクロールを始めた瞬間にヘッダーの下に薄い影が付きます。影があると「本文の上に浮いている帯」だと一目で分かり、本文と重なって読みにくくなるのを防げます。',
  ],
  when: [
    '縦に長いLP（紹介ページ）で、どこを読んでいても「申し込む」ボタンを押せるようにしたいとき',
    'ページ数が多い会社サイトやお店のサイトで、いつでもメニューから別のページへ移れるようにしたいとき',
    'ネットショップで、カートや検索窓を常に見せておきたいとき',
    '管理画面やツールで、保存ボタンや切り替えタブを画面外に逃がしたくないとき',
  ],
  avoid: [
    '1画面で読み終わる短いページ（くっつく意味がなく、ただ画面が狭くなる）',
    'ヘッダーが2段・3段と高いとき（スマホでは本文の見える範囲が半分近くまで減る）',
    '画面いっぱいの写真や動画を見せたいページ（帯が絵の上に被り続ける）',
  ],
  prompt:
    'ヘッダーを「追従ヘッダー（sticky header）」にしてください。画面上端への固定はCSSの position: sticky; top: 0; だけで行い、JavaScriptでスクロール量を監視して position: fixed に切り替える古い作り方はしないでください。少しでもスクロールしたら、ヘッダーの下に薄い影（box-shadow）を0.2秒かけて付けて、本文の上に浮いていることが分かるようにしてください（影の付け外しだけは短いJavaScriptで構いません）。ヘッダーの高さはスマホで56px以内に収め、z-indexは本文より上にしてください。ページ内リンクで飛んだ見出しがヘッダーの下に隠れないよう、scroll-margin-top も設定してください。影の付け外しは小さな変化なので、動きを減らす設定（prefers-reduced-motion）の人にもそのままで構いません。',
  howTo: [
    '作り方はCSSの2行だけです。ヘッダーに position: sticky と top: 0 を指定すると、スクロールしてヘッダーが画面の上端に来たところで止まり、そこから先はくっついて動かなくなります。昔は JavaScript でスクロール量を見張って position: fixed に切り替えていましたが、今はその必要がありません。',
    '影は「くっついたあと」だけに付けたいので、ここだけ短いJavaScriptを使います。スクロール量が0より大きいかどうかでクラスを付け外しし、CSSの transition で影をふわっと出します。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<header class="site-header">
  <a href="/" class="logo">SAMPLE</a>
  <nav>
    <a href="#feature">特長</a>
    <a href="#price">料金</a>
    <a href="#faq">FAQ</a>
  </nav>
  <a href="/signup" class="cta">無料で試す</a>
</header>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.site-header {
  position: sticky; /* 上端に来たらくっつく */
  top: 0;
  z-index: 10;      /* 本文より手前に出す */
  height: 56px;
  background: #fff;
  transition: box-shadow 0.2s ease-out;
}

/* スクロールしたら影を付けて「浮いている」ことを見せる */
.site-header.is-stuck {
  box-shadow: 0 6px 16px -8px rgba(0, 0, 0, 0.3);
}

/* ページ内リンクで飛んだ見出しがヘッダーに隠れないように */
:target,
h2[id] {
  scroll-margin-top: 72px;
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript（影を付けたいときだけ）',
      code: `const header = document.querySelector('.site-header');
const sync = () => header.classList.toggle('is-stuck', window.scrollY > 4);
window.addEventListener('scroll', sync, { passive: true });
sync();`,
    },
  ],
  cautions: [
    '親要素に overflow: hidden が付いていると、position: sticky は効きません。「くっつかない」ときはまず親を疑ってください。',
    'スマホでは画面の縦の長さが貴重です。ヘッダーは56px程度までに抑え、下へスクロールしている間は隠し、上へ戻したときだけ出す作り方（隠れるヘッダー）も検討してください。',
    'ページ内リンク（目次など）で飛ぶと、見出しがヘッダーの裏に隠れます。scroll-margin-top をヘッダーの高さより少し大きく指定してください。',
    'ヘッダーの中にフォーカスできる要素（リンク・ボタン）が多すぎると、キーボードで操作する人が毎回それを通過することになります。先頭に「本文へスキップ」のリンクを置くと親切です。',
  ],
  similar: [
    {
      slug: 'pinning',
      diff: 'ピン留めは「ある区間だけ」要素を止めて、その間に中身を切り替える演出です。追従ヘッダーはページの最後までずっとくっつきます。',
    },
    {
      slug: 'back-to-top',
      diff: '「上に戻る」ボタンも画面に残る部品ですが、出てくるのはある程度スクロールしてからで、置き場所は右下です。役割は先頭へ戻ることだけです。',
    },
  ],
  faq: [
    {
      q: '追従ヘッダーと固定ヘッダーは同じものですか？',
      a: 'ほぼ同じ意味で使われます。厳密には、最初から画面上端に貼り付ける作り方（position: fixed）を「固定」、スクロールで上端に来てからくっつく作り方（position: sticky）を「追従」と呼び分けることもあります。見た目の違いはほとんどありません。',
    },
    {
      q: 'position: sticky が効かないのはなぜですか？',
      a: 'いちばん多い原因は、親要素のどれかに overflow: hidden（または auto・scroll）が付いていることです。ほかに、top の指定を忘れている、親要素の高さがヘッダーと同じしかない、という場合も効きません。',
    },
    {
      q: '追従ヘッダーはSEOに影響しますか？',
      a: '検索順位に直接の影響はありません。ただし、スマホでヘッダーが高すぎて本文が読みにくいと、読む人の満足度が下がります。高さを抑え、ページ内リンクの見出しが隠れないようにしておけば問題ありません。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
