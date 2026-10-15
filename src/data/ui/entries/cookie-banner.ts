import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'cookie-banner',
  no: 30,
  category: 'display',
  name: 'Cookie同意バナー',
  en: 'Cookie consent banner',
  aka: ['クッキーバナー', 'Cookie同意ポップアップ', '同意管理', 'クッキー同意', 'CMP'],
  mode: 'script',
  title: 'Cookie同意バナーの作り方｜拒否も同じ手間で選べるデザイン【見本】',
  description:
    'サイトを開くと下に出る「Cookie同意バナー」を触れる見本で解説。「すべて拒否」を「すべて許可」と同じ見た目・同じ手間で並べる理由、項目ごとの選択、あとから変えられる入口、同意の前に計測を始めない作り方までまとめました。',
  oneLine: 'Cookieを使ってよいかを尋ね、許可も拒否も同じ手間で選べる帯。',
  what: [
    'サイトを開いたときに画面の下に出て、分析や広告のためのCookie（ブラウザに保存される小さな記録）を使ってよいかを尋ねる部品です。見本では「すべて拒否」と「すべて許可」を同じ色・同じ大きさで並べ、「項目を選ぶ」を押すと、分析と広告を1つずつオン・オフできます。選ぶと帯は下へ消え、ページ下の「Cookieの設定」からいつでも開き直せます。',
    'Cookie同意バナーでいちばん大事な決まりごとは、拒否も許可と同じ手間で選べることです。「すべて許可」だけを目立つ色にして、拒否は小さな文字のリンクや2画面先に隠す作りは、利用者を誘導するデザイン（ダークパターン）として、ヨーロッパのGDPR（EUの個人データ保護の規則）の考え方や各国の当局の指針で問題視されています。項目のスイッチは最初はオフにし、同意する前に計測や広告のタグを読み込まないことも大切です。',
    'モーダルとは違い、バナーはページを閉じ込めません。後ろの文章は普通に読めて、答えを後回しにもできます。必要な対応は国・地域や事業の内容によって変わるため、この記事は一般的な作り方の指針です。実際の運用では、対象の地域の規則や専門家の意見を確かめてください。',
  ],
  when: [
    'アクセス解析や広告のタグを入れていて、ヨーロッパなど同意が求められる地域の人も訪れるサイト',
    'ECサイトやメディアで、広告の効果測定やリターゲティング（再訪問を促す広告）を使っているとき',
    '利用者に「どんな情報を何に使うか」をはっきり伝え、選んでもらいたいとき',
  ],
  avoid: [
    '必須のCookieしか使っていないのに、形だけのバナーを出すとき（その場合は告知のページで足りることが多い）',
    '画面全体を覆って、答えるまでページを読めなくするとき（同意を急かす作りと受け取られやすい）',
    '「許可」だけを目立たせ、「拒否」を探さないと見つからない場所に置くとき',
  ],
  prompt:
    'サイトに「Cookie同意バナー（cookie consent banner）」を作ってください。画面の下に出る帯で、最大幅は{{width:t}}、出入りは{{dur:t}}で下からすべらせてください。文は「サイトの改善と広告の効果測定のためにCookieを使います」とし、詳しい説明のページへのリンクを付けてください。ボタンは「すべて拒否」「すべて許可」を同じ色・同じ大きさ・同じ1回のクリックで選べるように並べ、どちらかだけを目立たせないでください。「項目を選ぶ」で、必須（常にオン）・分析・広告をスイッチで選べる画面を出し、分析と広告は最初はオフにしてください。選んだ内容は保存し、同意があるまで分析や広告のスクリプトを読み込まないでください。ページ下に「Cookieの設定」のリンクを置き、いつでも変えられるようにしてください。画面全体を覆わず、キーボードだけで操作でき、動きを減らす設定（prefers-reduced-motion）では動きなしにしてください。',
  howTo: [
    'バナーは画面の下に position: fixed で置く普通の箱で、モーダルにはしません。ボタンは「すべて拒否」と「すべて許可」を同じクラスで作り、見た目の差をなくします。細かく選ぶ画面は、スイッチの役割を持たせたチェックボックス（role="switch"）で作ると、キーボード操作と読み上げへの対応が最初から付いてきます。',
    '大切なのは見た目よりも順番です。ページを開いたらまず保存済みの選択を読み、まだ答えていない人にだけバナーを出します。分析や広告のスクリプトは、同意を確かめてから JavaScript で読み込みます。HTMLに直接書いておくと、バナーで何を選んでも最初から動いてしまいます。実際の運用では、選んだ日時を記録したり、同意管理のツール（CMP）を使ったりすることも多いです。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<section class="cookie" role="region" aria-label="Cookieの設定" hidden>
  <p><b>Cookieの使用について</b></p>
  <p>サイトの改善と広告の効果測定のためにCookieを使います。
     必須のもの以外は、使うかどうかを選べます。<a href="/privacy">詳しく</a></p>

  <fieldset class="cookie-cats" hidden>
    <legend>項目を選ぶ</legend>
    <label><input type="checkbox" checked disabled> 必須（常にオン）</label>
    <label><input type="checkbox" role="switch" name="stats"> 分析</label>
    <label><input type="checkbox" role="switch" name="ads"> 広告</label>
  </fieldset>

  <div class="cookie-btns">
    <button type="button" class="cookie-btn" data-choice="none">すべて拒否</button>
    <button type="button" class="cookie-btn" data-choice="all">すべて許可</button>
    <button type="button" class="cookie-more">項目を選ぶ</button>
  </div>
</section>

<!-- ページ下: いつでも変えられる入口 -->
<button type="button" class="cookie-open">Cookieの設定</button>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.cookie {
  position: fixed;
  bottom: 12px;
  left: 12px;
  z-index: 100;
  width: min(calc(100% - 24px), {{width}});
  padding: 16px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 16px 40px -16px rgb(29 37 65 / 0.45);
  animation: cookie-in {{dur}} ease-out;
}
@keyframes cookie-in {
  from { opacity: 0; transform: translateY(calc(100% + 16px)); }
}
.cookie-btns { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
/* 拒否と許可は同じ見た目にする */
.cookie-btn {
  flex: 1 1 120px;
  min-height: 44px;
  border: 0;
  border-radius: 999px;
  background: #1d2541;
  color: #fff;
  font-weight: 700;
}
.cookie-more {
  min-height: 44px;
  border: 0;
  background: none;
  text-decoration: underline;
}

@media (prefers-reduced-motion: reduce) {
  .cookie { animation: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const KEY = 'cookie-consent';
const banner = document.querySelector('.cookie');
const cats = banner.querySelector('.cookie-cats');

// 同意があるときだけ、分析や広告のスクリプトを読み込む
function apply(c) {
  if (c.stats) loadScript('https://example.com/analytics.js');
  if (c.ads) loadScript('https://example.com/ads.js');
}
function loadScript(src) {
  const s = document.createElement('script');
  s.src = src;
  s.async = true;
  document.head.append(s);
}
function save(c) {
  const before = JSON.parse(localStorage.getItem(KEY) || 'null');
  localStorage.setItem(KEY, JSON.stringify({ ...c, at: Date.now() }));
  banner.hidden = true;
  // 一度許可したものを取り消したら、読み込み済みのタグを止めるため再読み込みする
  if (before && ((before.stats && !c.stats) || (before.ads && !c.ads))) location.reload();
  else apply(c);
}

banner.addEventListener('click', (e) => {
  const choice = e.target.dataset.choice;
  if (choice) save({ stats: choice === 'all', ads: choice === 'all' });
  if (e.target.matches('.cookie-more')) {
    if (cats.hidden) { cats.hidden = false; e.target.textContent = '選んだ内容で保存'; }
    else save({ stats: cats.elements.stats.checked, ads: cats.elements.ads.checked });
  }
});
document.querySelector('.cookie-open')
  .addEventListener('click', () => { banner.hidden = false; });

// まだ答えていない人にだけ出す
const saved = JSON.parse(localStorage.getItem(KEY) || 'null');
if (saved) apply(saved); else banner.hidden = false;`,
    },
  ],
  tune: [
    { key: 'width', label: 'バナーの幅', min: 280, max: 720, step: 20, value: 720, unit: 'px' },
    { key: 'dur', label: '出入りの速さ', min: 0.1, max: 0.6, step: 0.05, value: 0.3, unit: 's' },
  ],
  cautions: [
    '同意する前に分析や広告のタグを動かさないでください。バナーだけ付けても、HTMLに直接書いたタグはページを開いた瞬間に動きます。タグ管理ツールを使う場合も、同意の状態を見て読み込むように設定します。',
    '「許可」だけを色付きの大きなボタンにし、「拒否」を灰色の小さな文字にするのは避けます。GDPRの考え方では、同意は自由に与えられ、拒否や撤回も同じくらい簡単であるべきとされています。',
    '一度選んだあとも、ページ下などの決まった場所から設定を開き直せるようにします。撤回の手段がないと、同意を取り直すこともできません。',
    'スマホでは、バナーが画面の半分以上を覆うと本文が読めません。文を短くし、ボタンは並べて、高さを抑えます。',
    '必要な対応は、国・地域や業種、使うツールによって変わります。日本でも、外部へ情報を送るタグについて利用者への通知や公表を求める規則があります。この記事は一般的な作り方の指針として読み、実際の運用は専門家に確かめてください。',
  ],
  similar: [
    { slug: 'modal', diff: 'モーダルは閉じるまで後ろのページを操作させない小窓です。Cookie同意バナーはページを閉じ込めず、読みながら後で答えられる帯にするのが基本です。' },
    { slug: 'toast', book: 'ugoki', diff: 'トースト通知は数秒で消えるお知らせです。Cookie同意バナーは利用者が答えるまで消えず、答えをはっきり選んでもらいます。' },
    { slug: 'sticky-cta', diff: '追従CTAバーも画面の下に出る帯ですが、申し込みを誘うためのものです。同じ画面に両方を出すと下が混み合うので、同意が済むまでは追従CTAバーを控えます。' },
  ],
  faq: [
    {
      q: 'Cookie同意バナーに「すべて拒否」のボタンは必要ですか？',
      a: 'ヨーロッパのGDPRの考え方や各国の当局の指針では、拒否を許可と同じくらい簡単にすることが求められる傾向にあり、最初の画面に「すべて拒否」を置くのが一般的になっています。対象の地域によって求められることは違うので、運用前に確かめてください。',
    },
    {
      q: '日本のサイトでもCookie同意バナーは必要ですか？',
      a: 'サイトの内容や使っているツール、ヨーロッパなどから訪れる人がいるかによって変わります。日本でも、外部のサービスへ利用者の情報を送るタグについて、利用者への通知や公表を求める規則（電気通信事業法の外部送信規律。対象になる事業者は限られます）があります。必要かどうかは、使っているタグを洗い出したうえで専門家に確かめるのが確実です。',
    },
    {
      q: 'バナーで「拒否」を選んだら、どのCookieが使えますか？',
      a: 'ログインの状態を保つ、カートの中身を覚える、といったサイトの動作に欠かせない「必須」のものだけを使うのが一般的です。アクセス解析や広告のためのものは、拒否された場合は読み込みません。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
