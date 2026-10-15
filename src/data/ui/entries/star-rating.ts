import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'star-rating',
  no: 23,
  category: 'input',
  name: '星評価',
  en: 'Star rating',
  aka: ['スターレーティング', '5段階評価', 'レビューの星', '評価ボタン'],
  mode: 'script',
  title: '星評価（5段階評価）をCSSとラジオボタンで作る｜表示用の星との違い',
  description:
    '星評価（スターレーティング）を触れる見本で解説。入力用の星と平均点を見せる表示用の星の違い、ラジオボタンを土台にした作り方、乗せたときの仮の塗り、星の数ごとの言葉、矢印キーと読み上げの決まりごとまでまとめました。',
  oneLine: '星を押して、1〜5の点数を付ける。',
  what: [
    '星を左から並べ、押した星までを塗ることで「何点か」を付けてもらう部品です。見本の「この宿の満足度」では、星の上にマウスを乗せると押したら何個になるかが薄く塗られ、押すと色が決まり、横に「満足」のような言葉が出ます。',
    '同じ星でも、上の「平均 4.3」は押せない表示用の星で、平均点を塗りの幅で見せているだけです。入力用の星は押せることが分かるよう、乗せたときの仮の塗りや押せる大きさが要ります。表示用は小さく、入力用は大きく、と見た目でも分けます。また、口コミの投稿フォームの中の星は「口コミを投稿する」を押すまで確定しない入力です。一方、記事の最後の「この記事は役に立ちましたか？」のような1回押すだけの星は、押した瞬間に送るのが自然です。',
    '中身は「1〜5の中から1つを選ぶラジオボタン」です。fieldset で囲み、星1つを1つのラジオボタンにすると、Tab で入り、左右の矢印キーで点数を変え、読み上げソフトには「星4つ（満足）、ラジオボタン、5項目中4番目」と伝わります。星の絵は aria-hidden にして、点数は文字で伝えます。',
  ],
  when: [
    '宿・飲食店・商品の口コミ投稿フォームで、満足度を付けてもらうとき',
    'アプリやサービスの満足度アンケートで、1問だけさっと答えてもらうとき',
    '記事やヘルプページの最後で「役に立ったか」を1回押すだけで集めたいとき',
    '一覧やカードで、平均の評価を小さく見せるとき（この場合は押せない表示用の星）',
  ],
  avoid: [
    '「どこが悪かったか」を知りたいのに星だけで済ませること（星は点数しか分からない。理由の選択肢か自由記入を添える）',
    '星の数を10個以上にすること（4と5の違いのように細かい差を付けられず、押し間違いも増える）',
    '見た目を星にしただけで、キーボードで選べない作り（div を並べてクリックだけで選ばせない）',
  ],
  prompt:
    '口コミ投稿フォームの満足度を「星評価（star rating）」で作ってください。HTMLは fieldset と legend（「この宿の満足度」）の中に、星{{count:t}}個ぶんのラジオボタンを並べ、それぞれ「星4つ（満足）」のような aria-label を付けてください。ラジオボタンは見えなくして、上に直径{{size:t}}の星のSVGを重ね、押せる範囲は44px以上にしてください。選んだ星までを{{color:t}}で塗り、マウスを乗せている間は、押したら何個になるかを薄い色で仮に塗ってください。横に「不満・やや不満・ふつう・満足・とても満足」の言葉を出してください。左右の矢印キーで点数を変えられ、焦点の枠線が見えるようにしてください。点数はフォームの「口コミを投稿する」を押したときに送ってください。',
  howTo: [
    '星評価の中身はラジオボタンの組です。value="1"〜"5" のラジオボタンを label で包んで並べ、fieldset と legend で「何の評価か」を示します。キーボードでの選び直し、必ず1つだけ選ばれる仕組み、フォームでの送信、読み上げがすべてHTMLだけでそろいます。',
    '見た目は、ラジオボタンを opacity: 0 にして、その上に星の SVG を重ねます。「選んだ星とその左側を塗る」には、選んだ番号を JavaScript で読み、その数までの星に印のクラスを付けるのが分かりやすい方法です。マウスを乗せたときも同じ仕組みで仮の塗りを出し、離れたら選んだ数に戻します。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<fieldset class="rating">
  <legend>この宿の満足度</legend>
  <label class="rating-star"><input type="radio" name="rating" value="1" aria-label="星1つ（不満）"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.83 5.73 6.32.92-4.57 4.46 1.08 6.3L12 17.24l-5.66 2.97 1.08-6.3L2.85 9.45l6.32-.92z"/></svg></label>
  <label class="rating-star"><input type="radio" name="rating" value="2" aria-label="星2つ（やや不満）"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.83 5.73 6.32.92-4.57 4.46 1.08 6.3L12 17.24l-5.66 2.97 1.08-6.3L2.85 9.45l6.32-.92z"/></svg></label>
  <!-- 星3〜5も同じ形で続ける -->
  <span class="rating-word" aria-hidden="true">星を選んでください</span>
</fieldset>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.rating { display: flex; align-items: center; flex-wrap: wrap; border: 0; padding: 0; }
.rating legend { width: 100%; margin-bottom: 4px; }
.rating-star {
  position: relative;
  display: grid;
  place-items: center;
  min-width: 44px; /* 押せる範囲 */
  min-height: 44px;
  cursor: pointer;
}
.rating-star svg {
  width: {{size}};
  height: {{size}};
  fill: #fff;
  stroke: #b9b6ae;
  stroke-width: 1.4;
  transition: fill 0.15s ease-out, transform 0.15s ease-out;
}
/* 本物のラジオボタンは見えなくするだけ */
.rating-star input { position: absolute; inset: 0; margin: 0; opacity: 0; cursor: pointer; }
.rating-star.is-fill svg { fill: {{color}}; stroke: {{color}}; }
/* 乗せている間の仮の塗り */
.rating-star.is-preview svg { fill: color-mix(in srgb, {{color}} 55%, #fff); stroke: {{color}}; }
.rating-star:hover svg { transform: scale(1.15); }
.rating-star:has(:focus-visible) { outline: 3px solid #4f73d9; outline-offset: -2px; border-radius: 8px; }

@media (prefers-reduced-motion: reduce) {
  .rating-star svg { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const stars = [...document.querySelectorAll('.rating-star')];
const word = document.querySelector('.rating-word');
const WORDS = ['不満', 'やや不満', 'ふつう', '満足', 'とても満足'];
let value = 0;

const paint = (n, preview = false) => {
  stars.forEach((s, i) => {
    s.classList.toggle('is-fill', !preview && i < n);
    s.classList.toggle('is-preview', preview && i < n);
  });
  word.textContent = n ? WORDS[n - 1] : '星を選んでください';
};

stars.forEach((s, i) => {
  const radio = s.querySelector('input');
  // 押す・矢印キーで選んだら確定
  radio.addEventListener('change', () => { value = i + 1; paint(value); });
  // 乗せている間は、押したら何個になるかを見せる
  s.addEventListener('pointerenter', () => paint(i + 1, true));
  s.addEventListener('pointerleave', () => paint(value));
});`,
    },
  ],
  tune: [
    { key: 'count', label: '星の数', min: 3, max: 10, step: 1, value: 5, unit: '' },
    { key: 'size', label: '星の大きさ', min: 16, max: 48, step: 2, value: 32, unit: 'px' },
    { key: 'color', type: 'color', label: '星の色', value: '#f5a623' },
  ],
  cautions: [
    '星の絵は小さくても、押せる範囲は1つ44px以上にします。星の数を増やすと横幅が足りなくなるので、つまみで10個にしたときの見え方を確かめてください。',
    '点数を言葉でも示します。「星3つ」が「ふつう」なのか「よい」なのかは人によって受け取り方が違うので、横に言葉を出すと付け方がそろいます。',
    '黄色い星は白い背景の上だと薄く見えます。塗っていない星にも灰色の線を付け、塗った星との差がはっきり分かるようにします。',
    '表示用の平均点の星には role="img" と「5点中4.3点」のような名前を付け、星の絵を1つずつ読み上げさせないようにします。',
  ],
  similar: [
    { slug: 'segmented-control', diff: 'セグメントコントロールも並んだ選択肢から1つを選ぶ部品ですが、選択肢どうしに大小の順番がありません。星評価は「多いほどよい」という順番がある点数です。' },
    { slug: 'range-slider', diff: 'スライダーでも点数は付けられますが、細かい値になり迷いやすくなります。5段階程度なら星の方が直感的です。' },
    { slug: 'badge', diff: 'バッジは「4.3」のような数を小さな印で知らせる表示です。一覧のカードで平均点を見せるだけなら、星よりバッジの方が場所をとりません。' },
  ],
  faq: [
    {
      q: '0.5刻み（半分の星）で評価してもらうことはできますか？',
      a: '作れますが、おすすめしません。半分の星を狙って押すのは指では難しく、選択肢が10個になるのと同じで迷いが増えます。入力は1〜5の整数にし、平均点の表示だけ「4.3」のように塗りの幅で細かく見せるのが一般的です。',
    },
    {
      q: '星評価は押した瞬間に送るべきですか？',
      a: '置き場所で決めます。口コミの投稿フォームのように文章も書いてもらう場合は、「投稿する」を押したときにまとめて送ります。「この記事は役に立ちましたか？」のように星だけで完結する場合は、押した瞬間に送って「ありがとうございました」と出すのが自然です。',
    },
    {
      q: '星をCSSだけで塗り分けられますか？',
      a: 'できます。星を右から左の順にHTMLへ並べて flex-direction: row-reverse で見た目だけ左右を入れ替え、「選んだ星とその後ろの兄弟（~）」を塗る方法が有名です。ただしHTMLの順番と見た目が逆になり、読み上げや矢印キーの向きが分かりにくくなるため、今は :has() か少しの JavaScript で塗る方が素直です。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
