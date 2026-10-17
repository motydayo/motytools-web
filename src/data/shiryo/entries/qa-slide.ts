import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'qa-slide',
  no: 99,
  category: 'teian',
  name: 'Q&A型',
  en: 'Q&A',
  aka: ['質疑応答スライド', 'Q&Aスライド', '質問タイム', '質疑応答', 'ご質問はありますか', '最後のスライド'],
  mode: 'static',
  title: '質疑応答のスライドとは？Q&Aの時間を示す最後の1枚の作り方【見本つき】',
  description:
    '発表の最後に、質問を受け付ける時間を示す「Q&A型」のスライドを見本で解説。質問の出し方と本日のポイントの添え方、PowerPoint・Googleスライドでの作り方、AIにそのまま貼れる指示文とHTMLまでまとめました。',
  oneLine: '質問を受け付ける時間と、質問の出し方を示す。',
  what: [
    '発表の最後に映して、聞き手の質問を受け付ける1枚の型です。見本では、左に大きな「Q&A」の文字を置き、右に質問の出し方を3つ（その場で声をかける・チャットに書き込む・あとからメールで送る）並べています。下の帯には「本日お伝えしたこと」を3つ載せ、質問を考えている間も、発表の要点が見えるようにしています。見出しには「ご質問をどうぞ（質疑応答 10分）」と、時間を書いています。',
    '決まりは、質問の時間（何分か）と、質問の出し方を書くことです。「ご質問はありますか？」だけを映すと、聞き手は手を挙げにくいものです。出し方を複数用意すると、声に出しにくい人も質問できます。質問が出ない時間を減らすために、本日のポイントを帯で添えておくと、聞き手が思い出しやすくなります。',
  ],
  when: [
    '社内の報告会やプレゼンの最後に、質疑応答の時間を取るとき',
    'オンライン会議や説明会で、質問を受ける方法を伝えたいとき',
    '営業の提案の最後に、お客さまが気軽に質問できるようにしたいとき',
    'セミナーや勉強会で、後日の質問の送り先も示しておきたいとき',
  ],
  avoid: [
    '用意した質問と答えを先に見せたいとき（FAQ型にする）',
    '聞き手に次に取ってほしい行動を伝えたいとき（問い合わせ・次の一歩型にする）',
    '話の要点を振り返るだけのとき（まとめ型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「Q&A型（Q&A slide）」で作ってください。いちばん上に小さく「新店舗オープン計画のご説明」、その下に見出し「ご質問をどうぞ（質疑応答 10分）」を1行で置きます。その下を左右に分けます。左側は、薄いアクセント色の角丸の枠の中央に、大きな「Q&A」の文字（太字、アクセント色）を置きます。文字の大きさは{{size:t}}ptにしてください。右側には、小さく「質問の出し方」と書き、番号つきの3項目を縦に並べます。内容は、1「その場で声をかける／手を挙げて、そのままご質問ください」、2「チャットに書き込む／オンラインの方は、チャット欄へ」、3「あとからメールで送る／questions@example.com」です。項目名は太字21pt、補足は15ptにします。下に、薄い灰色の横長の帯を置き、左に「本日お伝えしたこと」、右に3つの短い文を横に並べ、各文の左にアクセント色の縦線を付けます。文は「オープンは3月1日」「開店は6人体制」「未決の2点は10月29日」です。この帯は「{{recap:t}}」にしてください。色はアクセント色{{accent:t}}の1色だけで、ほかは白・灰色・黒にします。見出しは32〜36pt、帯の文は17pt以上、注記は12pt以上。最下部に「※ 時間内に答えきれなかった質問は、後日メールでお答えします。」と注記を入れてください。メールアドレスは「questions@example.com」のままにして、実在のアドレスを作らないでください。内容は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「ホーム」→「新しいスライド」で「タイトルのみ」を選び、見出しに質疑応答の一文を入れます。大きな「Q&A」は、「挿入」→「図形」→「四角形: 角を丸くする」を置き、図形の中に文字を入力して、文字の大きさを140pt前後にします。右の3項目は、「挿入」→「表」で2列×3行にするか、番号の丸と文字を並べます。下の帯は、「挿入」→「図形」→「四角形」の横長を薄い灰色で塗り、中にテキストを3つ並べます。',
    'Googleスライドでは、「挿入」→「図形」→「図形」から角丸の四角形を選び、中に「Q&A」と入力します。文字の大きさは、ツールバーの文字サイズ欄に数字を直接入れます。右の項目は、「挿入」→「テキストボックス」を3つ並べ、「配置」→「均等に配置」→「縦方向」でそろえます。メールアドレスは、リンクにしてもスライドの上では押せないので、そのまま文字で大きく書きます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。「Q&A」の文字の大きさは、CSSの「--size」を変えます。メールアドレスは見本ではダミー（example.com）なので、実際の連絡先に必ず書き換えてください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-recap="{{recap}}">
  <p class="kicker">新店舗オープン計画のご説明</p>
  <h1 class="title">ご質問をどうぞ（質疑応答 10分）</h1>

  <div class="main">
    <div class="big"><span>Q&amp;A</span></div>
    <div class="ways">
      <span class="ways-t">質問の出し方</span>
      <ol>
        <li><i>1</i><span class="w"><b>その場で声をかける</b><small>手を挙げて、そのままご質問ください</small></span></li>
        <li><i>2</i><span class="w"><b>チャットに書き込む</b><small>オンラインの方は、チャット欄へ</small></span></li>
        <li><i>3</i><span class="w"><b>あとからメールで送る</b><small>questions@example.com</small></span></li>
      </ol>
    </div>
  </div>

  <div class="recap">
    <span class="recap-t">本日お伝えしたこと</span>
    <ul>
      <li>オープンは3月1日</li>
      <li>開店は6人体制</li>
      <li>未決の2点は10月29日</li>
    </ul>
  </div>

  <p class="note">※ 時間内に答えきれなかった質問は、後日メールでお答えします。</p>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* 幅960px×高さ540px（PowerPointの16:9と同じ比率） */
.slide {
  --accent: {{accent}};
  --size: {{size:n}}px; /* Q&Aの文字の大きさ */
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
.title { margin: 0; font-size: 34px; font-weight: 800; }
.main { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin: 14px 0 12px; min-height: 0; }

/* 左: 大きな Q&A */
.big { display: flex; align-items: center; justify-content: center; border-radius: 14px; background: color-mix(in srgb, var(--accent) 7%, #fff); }
.big span { font-size: var(--size); font-weight: 800; line-height: 1; letter-spacing: -0.02em; color: var(--accent); }

/* 右: 質問の出し方 */
.ways { display: flex; flex-direction: column; }
.ways-t { padding-bottom: 6px; border-bottom: 1px solid #e3e5ea; font-size: 15px; font-weight: 700; color: #5a6070; }
ol { flex: 1; display: grid; grid-auto-rows: 1fr; margin: 0; padding: 0; list-style: none; }
li { display: flex; align-items: center; gap: 14px; border-bottom: 1px solid #f3f4f7; }
.ways li:last-child { border-bottom: 0; }
li i { flex: none; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 50%; background: #5a6070; color: #fff; font-style: normal; font-size: 17px; font-weight: 800; }
.w { display: flex; flex-direction: column; }
.w b { font-size: 21px; font-weight: 800; }
.w small { font-size: 15px; color: #5a6070; }

/* 下: 本日のポイントの帯 */
.recap { display: flex; align-items: center; gap: 20px; margin-bottom: 10px; padding: 12px 20px; border-radius: 10px; background: #f3f4f7; }
.recap-t { flex: none; font-size: 15px; font-weight: 700; color: #5a6070; }
.recap ul { flex: 1; display: flex; gap: 20px; margin: 0; padding: 0; list-style: none; }
.recap li { flex: 1; display: block; padding-left: 12px; border-left: 3px solid var(--accent); border-bottom: 0; font-size: 17px; font-weight: 700; line-height: 1.35; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 本日のポイントの帯（data-recap="hide" なら消す） */
.slide[data-recap="hide"] .recap { display: none; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    { key: 'size', label: 'Q&Aの文字の大きさ（pt）', min: 100, max: 180, step: 20, value: 140, unit: '' },
    {
      key: 'recap',
      type: 'select',
      label: '本日のポイントの帯',
      value: 'show',
      options: [
        { value: 'show', label: '帯を出す' },
        { value: 'hide', label: '帯を出さない' },
      ],
    },
  ],
  cautions: [
    '質問の時間（何分か）を、見出しに書きます。時間が分からないと、聞き手は「長くなると悪い」と遠慮して手を挙げません。終了時刻まで書くと、さらに質問しやすくなります。',
    '質問の出し方を、2つ以上用意します。会議室の中で手を挙げるのが苦手な人や、オンラインの参加者のために、チャットやメールなどの別の窓口を置くと、質問が増えます。',
    '「Q&A」のスライドに、発表と無関係な装飾を足さないでください。質問に答えている間、このスライドは映したままになります。本日のポイントのような、答えの助けになる内容だけを小さく添えます。',
    'メールアドレスや連絡先は、実際に届く宛先かを確かめます。見本はダミーのアドレス（example.com）です。そのまま使うと、質問が誰にも届きません。',
  ],
  similar: [
    { slug: 'faq', diff: 'FAQ型は、よく聞かれる質問に先に答えを用意して見せる型です。Q&A型は、聞き手の質問を受け付ける時間を示す型で、発表の最後に使います。' },
    { slug: 'next-step', diff: '問い合わせ・次の一歩型は、聞き手に次にしてほしい行動と連絡先を示す型です。質疑応答のあとに続けて、最後の1枚として使います。' },
    { slug: 'summary', diff: 'まとめ型は、話の要点を最後に箇条書きで振り返る型です。質疑応答の前に置いて、聞き手が質問を考えやすくします。' },
  ],
  faq: [
    {
      q: 'Q&Aのスライドには、何を書けばよいですか？',
      a: '「ご質問をどうぞ」という呼びかけ、質疑応答の時間（何分か）、質問の出し方（口頭・チャット・メールなど）の3つがあれば足ります。発表の要点を帯で添えると、聞き手が質問を考えやすくなります。',
    },
    {
      q: '質疑応答のスライドは、最後に置くのが正解ですか？',
      a: '多くの場合は最後ですが、まとめのスライドの次に置くのが基本です。「まとめ」→「Q&A」→「問い合わせ・次の一歩」の順にすると、質問に答えたあとで、聞き手に次の行動をお願いする流れになります。質問が出ないまま終わらないよう、時間を区切って示します。',
    },
    {
      q: 'Q&Aのスライドを、PowerPointで素早く作るにはどうしますか？',
      a: '「タイトルのみ」のレイアウトに、見出しと大きな「Q&A」の図形を置くだけで形になります。右に質問の出し方を3行で書けば完成です。この型は何度も使うので、一度作ったらスライドのひな形として保存しておくと便利です。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
