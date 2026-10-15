import type { Ugoki } from '../types';

export default {
  slug: 'exit-intent',
  no: 16,
  category: 'pointer',
  name: '離脱防止ポップアップ',
  en: 'Exit-intent popup',
  aka: ['離脱ポップアップ', 'エグジットインテント', '離脱防止モーダル', '帰る前ポップアップ'],
  mode: 'script',
  title: '離脱防止ポップアップとは？出し方の仕組みと押し付けない作り方',
  description:
    'マウスが画面の上へ出ていく「帰りそうな瞬間」に小窓を出す離脱防止ポップアップを見本で解説。dialog要素で作るコード、1回だけ出す工夫、スマホでの代わりの合図、嫌われないための注意点まで。',
  oneLine: 'マウスが画面の上へ出ていく瞬間に、1回だけ小窓が出る。',
  what: [
    'ページを読んでいた人が、タブを閉じようとしてマウスを画面の上端の外へ動かした瞬間に、クーポンや資料請求などの小窓（ポップアップ）を出す演出です。見本では、矢印が上端から出ていくと「お帰りの前に」の小窓が出ます。×・「今はいらない」・Escキーで閉じられ、そのあと何度上へ出ても、もう出てきません。',
    '読んでいる最中に割り込まず、「帰る」と決めた瞬間にだけ最後の提案を1回見せられるのが価値です。ただし相手は帰ろうとしている人なので、出し方を間違えるとサイトの印象を下げます。すぐ閉じられること、二度と出ないことが前提の演出です。',
  ],
  when: [
    'ネットショップで、カートに入れたまま帰ろうとする人に、送料無料や初回割引を一度だけ伝えたいとき',
    'BtoBのサービスサイトで、問い合わせまでは迷っている人に、資料のダウンロードを提案したいとき',
    'ブログやメディアで、記事を読み終えた人にメールマガジンやLINEの登録を案内したいとき',
    '宿・飲食店の予約ページで、空き状況やキャンペーンを最後に知らせたいとき',
  ],
  avoid: [
    '開いてすぐの人や、まだ数秒しか読んでいない人に出す（帰る理由を作るだけになる）',
    '問い合わせ・決済などの入力の途中（打ち込んだ内容への集中を壊す）',
    '閉じるボタンが小さい・見つからない作り、「割引はいりません（損します）」のような相手を責める文言',
    '何度閉じても出てくる作り',
  ],
  prompt:
    'LPに「離脱防止ポップアップ（exit-intent popup）」を付けてください。パソコンでは、マウスが画面の上端から外へ出たとき（document の mouseout で relatedTarget が無く clientY が0以下）に、dialog 要素を showModal() で開きます。スマホでは、半分以上読んだあとに素早く上へスクロールして戻したときを合図にします。ページを開いて10秒たつまでは出さず、1回出したら sessionStorage に記録して同じ訪問中は二度と出さないでください。×ボタン（44px四方・aria-label="閉じる"）、「今はいらない」、Escキー、背景のクリックで閉じられるようにし（dialog 自体は padding: 0 にして余白は内側の form に付け、小窓の内側の余白を押しても閉じないようにする）、背景の暗幕は濃さ {{dim:t}} にし、出るときは{{dur:t}}の ease-out で、{{rise:t}}下から少し縮んだ状態で浮かび上がらせます。prefers-reduced-motion: reduce のときは動きなしで表示してください。ライブラリは使わないでください。',
  howTo: [
    'パソコンでは、マウスがページの外へ出たことを mouseout（マウスが要素から出たときの合図）で受け取ります。行き先が無く（relatedTarget が null）、高さが画面の上端より上（clientY が0以下）なら、タブやアドレスバーへ向かった、つまり帰ろうとしていると判断します。',
    'スマホにはマウスがないので、代わりに「下まで読んだあと、勢いよく上へ戻した」ことを合図にします。小窓は dialog 要素の showModal() で開くと、背景の暗幕・Escキーで閉じる・小窓の外にTabで出ない、がブラウザの標準で手に入ります。1回出したら sessionStorage（そのタブを閉じるまで残る保存場所）に印を付け、二度と出しません。見本は枠の中に収めるため open 属性で出していますが、実際のサイトでは下のコードのとおり showModal() を使ってください。',
    '出方は控えめが正解です。0.25〜0.35秒で8pxほど下から浮かび上がらせると、「急に飛び出してきた」ではなく「そっと差し出された」印象になります。暗幕は0.4〜0.5くらいの濃さにすると小窓に目が向きつつ、後ろのページも透けて見え、閉じ込められた感じがしません。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<dialog class="exit-pop" aria-labelledby="exit-title">
  <form method="dialog">
    <button class="exit-x" aria-label="閉じる">×</button>
    <p class="exit-k">お帰りの前に</p>
    <h2 id="exit-title">初回限定 10%OFF クーポン</h2>
    <p>今日のご予約から使えます。会員登録はいりません。</p>
    <a class="exit-go" href="/coupon">クーポンを受け取る</a>
    <button class="exit-later">今はいらない</button>
  </form>
</dialog>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.exit-pop {
  width: min(92vw, 360px);
  padding: 0; /* 余白は form 側へ。小窓そのものを押したら必ず「暗幕を押した」ことになる */
  border: 0;
  border-radius: 16px;
  text-align: center;
}
.exit-pop form { padding: 28px 20px 12px; }
.exit-pop::backdrop { background: rgba(29, 37, 65, {{dim:n}}); } /* 暗幕の濃さ */
.exit-pop[open] { animation: exit-in {{dur}} ease-out; }
@keyframes exit-in {
  from { opacity: 0; transform: translateY({{rise}}) scale(0.96); }
}
.exit-x {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 44px;  /* 押しやすい大きさ */
  height: 44px;
  border: 0;
  background: none;
  font-size: 20px;
  cursor: pointer;
}
.exit-go {
  display: block;
  margin-top: 12px;
  padding: 12px;
  border-radius: 999px;
  background: #f06a35;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
}
.exit-later {
  min-height: 44px;
  border: 0;
  background: none;
  color: #5d6272;
  text-decoration: underline;
  cursor: pointer;
}
@media (prefers-reduced-motion: reduce) {
  .exit-pop[open] { animation: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const pop = document.querySelector('.exit-pop');
const KEY = 'exit-pop-shown';
const startedAt = Date.now();

const alreadyShown = () => {
  try { return sessionStorage.getItem(KEY) === '1'; } catch { return false; }
};

function openExitPop() {
  if (!pop || pop.open || alreadyShown()) return;
  if (Date.now() - startedAt < 10000) return; // 開いて10秒は出さない
  try { sessionStorage.setItem(KEY, '1'); } catch {}  // 1回出したら、もう出さない
  pop.showModal();
}

// パソコン: マウスが画面の上端から外へ出たら
document.addEventListener('mouseout', (e) => {
  if (!e.relatedTarget && e.clientY <= 0) openExitPop();
});

// スマホ: 半分以上読んだあと、勢いよく上へ戻したら
let lastY = window.scrollY;
let lastT = performance.now();
window.addEventListener('scroll', () => {
  const now = performance.now();
  const speed = (lastY - window.scrollY) / Math.max(1, now - lastT); // 上向きの速さ
  const read = lastY / (document.body.scrollHeight - innerHeight);
  if (speed > 1.5 && read > 0.5) openExitPop();
  lastY = window.scrollY;
  lastT = now;
}, { passive: true });

// 暗幕（小窓の外）を押しても閉じる。Escキーと form 内のボタンはブラウザが閉じてくれる
// dialog の padding を 0 にしてあるので、小窓の内側の余白を押しても閉じない
pop?.addEventListener('click', (e) => {
  if (e.target === pop) pop.close();
});`,
    },
  ],
  tune: [
    { key: 'dur', label: '出る速さ', min: 0.1, max: 0.8, step: 0.05, value: 0.3, unit: 's' },
    { key: 'rise', label: '浮かび上がる距離', min: 0, max: 40, step: 2, value: 8, unit: 'px' },
    { key: 'dim', label: '暗幕の濃さ', min: 0, max: 0.8, step: 0.05, value: 0.45, unit: '' },
  ],
  cautions: [
    'スマホにはマウスがないので、「上端から出ていく」という合図そのものがありません。上へ素早く戻した・戻るボタンの手前・一定時間たった、などで代わりにしますが、どれも推測なので外れることがあります。スマホで出すかどうかは慎重に決めてください。',
    'Googleは、スマホで本文を覆い隠す邪魔なポップアップ（intrusive interstitials）を、検索の評価で不利に扱うと公表しています。スマホでは画面全体を覆わない小さな帯にするなど、読む邪魔をしない形にしてください。',
    '押し付けがましさがいちばんの敵です。閉じるボタンは大きく分かりやすい場所に置き、閉じたら同じ訪問中は二度と出さない、出すのは1ページに1回だけ、を守ってください。',
    '小窓が開いている間は、キーボードの焦点が小窓の中に入り、閉じたら元の場所へ戻る必要があります。dialog 要素の showModal() を使えば、これがブラウザの標準で揃います。',
    'ページを開いた直後に出すと「何も読んでいないのに」と嫌われます。数秒〜十数秒は出さない、ある程度スクロールした人だけに出す、などの条件を付けてください。',
  ],
  similar: [
    {
      slug: 'toast',
      diff: 'トースト通知は画面の端に小さく出て、操作を止めずに自然に消えます。離脱防止ポップアップは画面の中央に出て、閉じるまで操作を止めます。',
    },
    {
      slug: 'back-to-top',
      diff: '上に戻るボタンもスクロールに合わせて出てくる部品ですが、読む人の役に立つための道具です。離脱防止ポップアップは、サイト側の提案を見せるための演出です。',
    },
  ],
  faq: [
    {
      q: '離脱防止ポップアップはSEOに悪影響がありますか？',
      a: 'パソコンで帰り際に出すだけなら、影響は小さいと考えられます。注意が要るのはスマホで、ページを開いた直後に本文を覆い隠すポップアップは、Googleが評価を下げる対象として挙げています。スマホでは小さな帯にするか、出さない選択も検討してください。',
    },
    {
      q: '離脱防止ポップアップはスマホでも出せますか？',
      a: 'マウスがないので、パソコンと同じ合図は使えません。素早く上へスクロールした、一定時間たった、などを代わりの合図にします。ただし誤って出やすいので、出す条件は厳しめにしておくのが無難です。',
    },
    {
      q: '何回まで出していいですか？',
      a: '同じ訪問中は1回までが目安です。閉じた人に何度も出すと、提案ではなく嫌がらせになります。sessionStorage や Cookie に「出した」印を残し、次に出すのは日を空けてからにしてください。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
