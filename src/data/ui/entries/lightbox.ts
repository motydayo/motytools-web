import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'lightbox',
  no: 7,
  category: 'overlay',
  name: 'ライトボックス',
  en: 'Lightbox',
  aka: ['画像ビューア', '写真の拡大表示', 'イメージポップアップ', 'lightbox gallery', 'フォトギャラリー'],
  mode: 'script',
  title: '押すと画像が拡大するライトボックスの作り方｜dialogで作る【見本】',
  description:
    'ライトボックス（画像の拡大表示）を触れる見本で解説。モーダルやカルーセルとの違い、<dialog>で作る方法、小さな写真の位置から拡大する動き、←→キー・スワイプ・Escの決まりごと、AIへの頼み方まで分かります。',
  oneLine: '小さな写真を押すと、暗い背景の上にその写真が大きく広がる。',
  what: [
    '一覧に並んだ小さな写真を押すと、画面を暗くしてその写真を大きく見せる部品です。見本では2枚目の写真を押すと、その場所から写真が拡大して画面いっぱいに広がり、右の矢印で次の写真へ送れます。×・暗い背景を押す・Escキーで閉じると、写真は元の小さな位置へ縮んで戻ります。キーボードでは←→で前後に送れ、スマホでは左右のスワイプで送れます。',
    'ライトボックスはモーダルの一種で、「写真を大きく見る」ことに役割を絞ったものです。カルーセルとの違いは、カルーセルがページの中で写真を横に送るのに対し、ライトボックスはページの上に重ねて1枚を大きく見せることです。一覧は小さな写真で軽く保ち、見たい人だけが大きく見られる。宿・不動産・料理・作品集のように「写真で決める」ページで、ページを移動させずに細部まで見てもらえるのが価値です。',
  ],
  when: [
    '宿や不動産のページで、部屋や設備の写真を大きく見比べてもらいたいとき',
    'ネットショップの商品ページで、生地や細部の写真を拡大して見せたいとき',
    'デザイナーや写真家の作品集で、一覧は小さく、1枚ずつは大きく見せたいとき',
    'ブログやマニュアルの中の図・スクリーンショットを、押したら読める大きさで見せたいとき',
  ],
  avoid: [
    '写真が1〜2枚しかなく、最初から十分な大きさで載せられるとき（押す手間が増えるだけ）',
    '写真の中の文字を読まないと先へ進めない内容（本文にも文字で書く）',
    'スマホで拡大の操作（2本指で広げる）を止めてしまう作り（大きくしても細部が見えない）',
  ],
  prompt:
    '宿の写真の一覧に「ライトボックス（lightbox）」を付けてください。小さな写真はそれぞれ大きな画像へのリンク（<a href>）にしておき、JavaScriptが動くときだけ、押すとHTMLの <dialog> と showModal() で大きく表示してください。背景は濃さ{{dim:t}}の黒、写真は画面幅の{{size:t}}まで（縦は画面に収まる大きさ）で、下に説明文、上に「2 / 6」のような枚数を出してください。開くときは押した小さな写真の位置と大きさから{{dur:t}}かけて拡大し、閉じるときは今見ている写真の小さな位置へ縮めて戻してください。前後の矢印ボタン・←→キー・左右のスワイプで送れるようにし、×・背景を押す・Escキーで閉じ、閉じたら今見ていた写真の小さな版へ焦点を戻してください。動きを減らす設定（prefers-reduced-motion）では拡大の動きをなくしてください。',
  howTo: [
    '小さな写真は、それぞれ大きな画像へのリンクにしておきます。JavaScriptが読み込まれなくても、押せば大きな画像が開くので、誰でも写真を見られます。JavaScriptが動くときだけリンクの移動を止め、<dialog> を showModal() で開きます。これで後ろを押せなくする・Escで閉じる・暗い背景（::backdrop）がそろいます。',
    '「押した写真から広がる」動きは FLIP という手法で作ります。最初（小さな写真）と最後（大きな写真）の位置と大きさを測り、その差を transform で打ち消した状態から 0 へ戻すだけです。閉じるときは同じ動きを逆に再生してから close() します。Escキーでも縮む動きを見せたいときは、cancel イベントで標準の閉じ方を止めて自分で閉じます。見本は枠の中に収めるため div で作っていますが、動きの仕組みは同じです。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<!-- JavaScript が無くても、リンクで大きな画像が開く -->
<ul class="gallery">
  <li>
    <a href="/img/view-1-large.jpg" data-caption="客室からの眺め（朝）">
      <img src="/img/view-1-thumb.jpg" alt="客室からの眺め（朝）"
        width="320" height="200" loading="lazy">
    </a>
  </li>
  <!-- …写真の数だけ繰り返す… -->
</ul>

<dialog class="lightbox" aria-label="写真">
  <div class="lb-inner">
    <p class="lb-count" aria-live="polite"></p>
    <button type="button" class="lb-close" aria-label="閉じる">×</button>
    <figure>
      <img class="lb-img" alt="">
      <figcaption class="lb-cap"></figcaption>
    </figure>
    <button type="button" class="lb-prev" aria-label="前の写真">‹</button>
    <button type="button" class="lb-next" aria-label="次の写真">›</button>
  </div>
</dialog>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.gallery img { width: 100%; height: auto; }

.lightbox {
  /* 画面いっぱいの透明な箱にして、中央に写真を置く */
  width: 100vw;
  height: 100dvh;
  max-width: none;
  max-height: none;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  color: #fff;
}
.lightbox::backdrop {
  background: rgb(10 12 20 / {{dim:n}});
  transition: opacity {{dur}} ease-out;
}
@starting-style {
  .lightbox[open]::backdrop { opacity: 0; }
}
.lb-inner {
  position: relative;
  display: grid;
  place-items: center;
  height: 100%;
  padding: 56px 16px 24px;
}
.lightbox figure { margin: 0; }
.lb-img {
  display: block;
  max-width: min({{size:n}}vw, 1200px);
  max-height: calc(100dvh - 140px);
  width: auto;
  height: auto;
  transform-origin: top left; /* 拡大の動きの基準点 */
}
.lb-count { position: absolute; top: 16px; left: 16px; }
.lb-close { position: absolute; top: 4px; right: 4px; width: 48px; height: 48px; }
.lb-prev, .lb-next { position: absolute; top: 50%; width: 48px; height: 48px; }
.lb-prev { left: 8px; }
.lb-next { right: 8px; }

html:has(.lightbox[open]) { overflow: hidden; }`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const links = [...document.querySelectorAll('.gallery a')];
const box = document.querySelector('.lightbox');
const img = box.querySelector('.lb-img');
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
let cur = 0;

const show = async (i) => {
  cur = (i + links.length) % links.length;
  const a = links[cur];
  img.src = a.href;
  img.alt = a.querySelector('img').alt;
  box.querySelector('.lb-cap').textContent = a.dataset.caption;
  box.querySelector('.lb-count').textContent = \`\${cur + 1} / \${links.length}\`;
  new Image().src = links[(cur + 1) % links.length].href; // 次を先読み
  await img.decode().catch(() => {});
};

// 小さな写真の位置と大きさから拡大する（reverse で縮めて戻す）
const zoom = (reverse = false) => {
  if (reduce.matches) return Promise.resolve();
  const a = links[cur].querySelector('img').getBoundingClientRect();
  const b = img.getBoundingClientRect();
  const kf = [
    { transform: \`translate(\${a.left - b.left}px, \${a.top - b.top}px) scale(\${a.width / b.width})\` },
    { transform: 'none' },
  ];
  return img.animate(reverse ? kf.reverse() : kf, {
    duration: {{dur:n}} * 1000,
    easing: reverse ? 'ease-in' : 'ease-out',
  }).finished;
};

const close = async () => {
  await zoom(true).catch(() => {});
  box.close();
  links[cur].focus(); // 今見ていた写真へ焦点を戻す
};

links.forEach((a, i) => a.addEventListener('click', async (e) => {
  e.preventDefault();
  await show(i);
  box.showModal();
  zoom();
}));

box.querySelector('.lb-close').addEventListener('click', close);
box.querySelector('.lb-prev').addEventListener('click', () => show(cur - 1));
box.querySelector('.lb-next').addEventListener('click', () => show(cur + 1));
// 写真の外を押したら閉じる
box.addEventListener('click', (e) => {
  if (e.target === box || e.target.classList.contains('lb-inner')) close();
});
// Esc でも縮む動きを見せてから閉じる
box.addEventListener('cancel', (e) => {
  e.preventDefault();
  close();
});
box.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') show(cur - 1);
  if (e.key === 'ArrowRight') show(cur + 1);
});
// 左右のスワイプで前後へ
let sx = 0;
box.addEventListener('pointerdown', (e) => {
  if (e.isPrimary) sx = e.clientX; // 1本目の指だけを見る
});
box.addEventListener('pointerup', (e) => {
  if (!e.isPrimary) return;
  const dx = e.clientX - sx;
  if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1));
});`,
    },
  ],
  tune: [
    { key: 'dim', label: '背景の暗さ', min: 0.5, max: 0.95, step: 0.05, value: 0.85, unit: '' },
    { key: 'dur', label: '拡大の速さ', min: 0.15, max: 0.6, step: 0.05, value: 0.3, unit: 's' },
    { key: 'size', label: '写真の大きさ（画面幅に対して）', min: 60, max: 100, step: 5, value: 90, unit: '%' },
  ],
  cautions: [
    '一覧の小さな写真には小さな画像を、ライトボックスには大きな画像を、と2種類用意します。大きな画像を一覧で縮めて使うと、ページの表示が大幅に遅くなります。一覧の画像には loading="lazy" と width・height を付けます。',
    '小さな写真にも大きな写真にも、何が写っているかを alt に書きます。アイコンだけの矢印や×のボタンには aria-label で「次の写真」「閉じる」と名前を付け、「2 / 6」のような枚数は aria-live で読み上げさせます。',
    'スマホでは、写真を2本指で広げて細部を見たい人がいます。拡大を止める設定（user-scalable=no など）は入れず、スワイプの判定も1本指のときだけにします。',
    '閉じたときの焦点は、開いたときの写真ではなく「最後に見ていた写真」の小さな版へ戻します。3枚送ってから閉じたのに1枚目へ戻ると、キーボードの人は自分の位置を見失います。',
  ],
  similar: [
    { slug: 'modal', diff: 'モーダルは確認や入力のための小窓です。ライトボックスはモーダルの仕組みを使い、写真を大きく見せることに役割を絞ったものです。' },
    { slug: 'carousel', diff: 'カルーセルはページの中で写真やカードを横に送る部品です。ライトボックスはページの上に重ねて、1枚を大きく見せます。' },
    { slug: 'image-zoom', book: 'ugoki', diff: 'ホバーで画像ズームは、マウスを乗せた写真が枠の中で少し大きくなる演出です。「押せば大きく見られる」という合図として、ライトボックスと組み合わせてよく使われます。' },
  ],
  faq: [
    {
      q: 'ライトボックスとモーダルは何が違いますか？',
      a: 'ライトボックスはモーダルの一種です。後ろを暗くして操作を止める仕組みは同じですが、中身が「大きな写真」に決まっていて、前後に送る・枚数を出す・写真の位置から拡大する、といった写真向けの決まりごとが加わります。',
    },
    {
      q: 'ライトボックスはライブラリを使わずに作れますか？',
      a: '作れます。<dialog> と showModal() で表示の土台を作り、拡大の動きは Web Animations API（element.animate）で数行書けば十分です。ピンチでの拡大縮小や動画の再生まで必要なら、専用のライブラリを検討します。',
    },
    {
      q: 'ライトボックスの中の写真はSEOに影響しますか？',
      a: '大きな画像へのふつうのリンク（<a href>）にしておけば、検索エンジンも画像の場所をたどれます。JavaScriptでしか大きな画像の場所が分からない作りにすると、画像検索に出にくくなることがあります。alt の説明もしっかり書きます。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
