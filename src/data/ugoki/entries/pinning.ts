import type { Ugoki } from '../types';

export default {
  slug: 'pinning',
  no: 4,
  category: 'scroll',
  name: 'ピン留め',
  en: 'Pinning',
  aka: ['スクロール固定', 'ピン留めスクロール', 'スティッキーセクション', 'scroll pin', 'sticky scroll'],
  mode: 'scroll',
  title: 'ピン留め（スクロール固定）とは？position: stickyでの作り方【見本】',
  description:
    'スクロール中、ある区間だけ画面を止めて中身をSTEP 01→02→03と切り替える「ピン留め」を動く見本で解説。position: stickyと短いJavaScriptでの作り方、区間の長さの決め方、AIへの指示文まで。',
  oneLine: 'ある区間だけ画面が止まり、その間に中身が切り替わる。',
  what: [
    'スクロールしているのに、ある区間だけパネルが画面に貼り付いたように止まり、その間に中身が「STEP 01 → 02 → 03」と切り替わっていく演出です。区間を抜けると、パネルはまた普通に流れていきます。',
    '見本では、ご予約の流れを3つのステップで見せています。左の丸い目盛りが「いま何番目か」を、点線の枠が「止まっている範囲」を表しています。普通に縦へ並べると流し読みされがちな手順も、1画面に1つずつ出すことで、順番どおりに読んでもらえます。',
  ],
  when: [
    'サービスの使い方や申し込みの流れを、STEP 1・2・3の順に見せたいとき',
    'アプリやツールの画面を固定したまま、説明文だけを切り替えて機能を紹介したいとき',
    '商品の特長を1つずつ大きく見せる、新商品の特設ページを作るとき',
    'ビフォー・アフターや年表など、同じ場所で変化を見せたいとき',
  ],
  avoid: [
    '内容が1〜2個しかないとき（止める意味がなく、スクロールが空回りしているように感じる）',
    'スマホで、固定するパネルに文字が多いとき（画面に収まらず、下が切れて読めない）',
    '料金表や規約など、自分のペースで行き来して読みたい情報',
  ],
  prompt:
    'ご予約の流れのセクションを「ピン留め（pinning）」にしてください。セクション全体の高さを画面3つ分（300vh）にし、中のパネルを position: sticky; top: 0; height: 100vh; で区間の間だけ画面に固定してください。区間をどこまで進んだか（0〜1）をスクロール量から計算し、3等分してSTEP 01・02・03の中身を切り替えてください。切り替えは0.3秒の ease-out で、下から16pxふわっと出します。いま何番目かが分かる目盛りも付けてください。ライブラリ（GSAPなど）は使わないでください。prefers-reduced-motion: reduce の人には、動かさずに中身だけ切り替えてください。',
  howTo: [
    '「止める」部分はCSSだけで作れます。外側の区間を画面3つ分の高さにして、中のパネルに position: sticky と top: 0 を付けます。sticky（くっつく指定）は親の範囲の中でだけ効くので、区間を抜けるとパネルは自然に流れていきます。区間を長くするほど、長く止まります。',
    '中身の切り替えだけJavaScriptを使います。区間の上端がどれだけ画面の上へ過ぎたかを測り、区間の長さで割って「進み具合（0〜1）」を出します。それをステップの数で区切って、表示するものにクラスを付けます。昔はGSAPなどのライブラリで作るのが定番でしたが、この程度なら20行ほどで書けます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<section class="pin-sec">
  <div class="pin">
    <div class="step is-on">
      <p class="step-no">STEP 01</p>
      <h3>日にちを選ぶ</h3>
      <p>カレンダーから空いている日を選びます。</p>
    </div>
    <div class="step" aria-hidden="true">
      <p class="step-no">STEP 02</p>
      <h3>お部屋を選ぶ</h3>
      <p>人数に合うお部屋とプランを選びます。</p>
    </div>
    <div class="step" aria-hidden="true">
      <p class="step-no">STEP 03</p>
      <h3>予約を確定</h3>
      <p>確認メールが届いたら完了です。</p>
    </div>
  </div>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* 区間の長さ＝止めておくスクロール量（ここでは画面3つ分） */
.pin-sec {
  height: 300vh;
}
/* 区間の中にいる間だけ、画面の上端に止まる */
.pin {
  position: sticky;
  top: 0;
  height: 100vh;
  display: grid;
  place-items: center;
}
/* ステップは同じ場所に重ねておき、.is-on だけ見せる */
.step {
  grid-area: 1 / 1;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}
.step.is-on {
  opacity: 1;
  transform: none;
}
.step-no { font-weight: 800; color: #f06a35; }

@media (prefers-reduced-motion: reduce) {
  .step { transform: none; transition: opacity 0.15s linear; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const sec = document.querySelector('.pin-sec');
const steps = [...sec.querySelectorAll('.step')];

function update() {
  // 区間をどこまで進んだか（0〜1）
  const top = sec.getBoundingClientRect().top;
  const range = sec.offsetHeight - window.innerHeight;
  const p = Math.min(1, Math.max(0, -top / range));
  const idx = Math.min(steps.length - 1, Math.floor(p * steps.length));
  steps.forEach((s, i) => {
    s.classList.toggle('is-on', i === idx);
    s.setAttribute('aria-hidden', String(i !== idx));
  });
}

window.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
update();`,
    },
  ],
  cautions: [
    '親要素のどこかに overflow: hidden（auto・scroll も）が付いていると、position: sticky は効かず、パネルが止まりません。止まらないときはまず親を疑ってください。',
    'スマホではアドレスバーの出し入れで画面の高さが変わり、100vh だとパネルの下が切れることがあります。100svh（いちばん小さいときの画面の高さ）を使うと安定します。',
    'スクロールしても見た目が進まない時間が長いと、「壊れている」と思われがちです。区間はステップ1つにつき画面1つ分を目安にし、目盛りや「1 / 3」の表示で進んでいることを見せてください。',
    '見えていないステップには aria-hidden="true" を付け、読み上げソフトが3つ同時に読まないようにしてください。',
  ],
  similar: [
    {
      slug: 'sticky-header',
      diff: '追従ヘッダーはページの最後までずっと上端にくっつきます。ピン留めは「ある区間だけ」止めて、その間に中身を切り替えます。',
    },
    {
      slug: 'horizontal-scroll',
      diff: '横スクロールもピン留めの一種で、止めている間に中身を横へ流します。ピン留めは中身を同じ場所で入れ替えます。',
    },
    {
      slug: 'scroll-snap',
      diff: 'スクロールスナップは画面1つ分ずつピタッと止めますが、画面ごと次へ移ります。ピン留めはパネルは動かさず、中身だけが変わります。',
    },
  ],
  faq: [
    {
      q: 'ピン留めはGSAPなどのライブラリがないと作れませんか？',
      a: '作れます。止める部分は position: sticky だけで、中身の切り替えも20行ほどのJavaScriptで済みます。複雑な動きを何か所も組み合わせるときは、GSAPの ScrollTrigger などを使うと管理しやすくなります。',
    },
    {
      q: 'position: sticky で止まらないのはなぜですか？',
      a: 'いちばん多い原因は、親要素に overflow: hidden などが付いていることです。ほかに、top の指定を忘れている、外側の区間の高さがパネルと同じしかない（止める余白がない）場合も止まりません。',
    },
    {
      q: 'スマホでもピン留めは使えますか？',
      a: '使えます。ただし画面が小さいので、固定するパネルの中身は短くしてください。高さは 100vh ではなく 100svh を使うと、アドレスバーの出し入れで下が切れるのを防げます。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
