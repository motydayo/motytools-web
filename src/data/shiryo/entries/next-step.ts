import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'next-step',
  no: 100,
  category: 'teian',
  name: '問い合わせ・次の一歩型',
  en: 'Next step and contact',
  aka: ['お問い合わせスライド', '連絡先スライド', '次のステップ', 'ネクストアクション', 'CTAスライド', '最後のスライド'],
  mode: 'static',
  title: '資料の最後のスライドとは？問い合わせ先と次の一歩を示す作り方【見本つき】',
  description:
    '聞き手に次にしてほしい行動と、連絡先を示す「問い合わせ・次の一歩型」のスライドを見本で解説。流れの見せ方、連絡先の書き方、PowerPoint・Googleスライドでの作り方、AIにそのまま貼れる指示文とHTMLまでまとめました。',
  oneLine: '聞き手が次にすることと、連絡先を示す。',
  what: [
    '資料の最後に置いて、「この後、何をすればいいか」を伝える1枚の型です。見本では、左に「無料相談・お見積もり・導入スタート」の3つの流れを、いつ何が起きるかの目安つきで縦に並べています。右には、メール・電話・Webの連絡先を大きな文字で置き、QRコードの欄も添えています。1つ目の流れの丸だけアクセント色にして、「まずはここから」が伝わるようにしています。',
    '決まりは、聞き手にしてほしい行動を1つに絞り、そのやり方（連絡先）を同じスライドに置くことです。「ご不明な点はお問い合わせください」だけでは、何を・どこに・いつまでにすればいいのか分かりません。見本のように「まずは30分の無料相談」と最初の一歩を小さくして、そのあとの流れも見せると、動きやすくなります。',
  ],
  when: [
    '営業の提案や、サービスの紹介資料の最後に、お申し込みや相談につなげたいとき',
    'セミナーや説明会の最後に、参加者に次の行動を案内したいとき',
    '社内の新しい制度の説明で、申請の方法や窓口を示したいとき',
    '採用説明会などで、応募の方法と連絡先を伝えたいとき',
  ],
  avoid: [
    '質問を受け付ける時間を示したいとき（Q&A型にする）',
    '話の要点を振り返るだけのとき（まとめ型にする）',
    '手順を1つずつ丁寧に見せたいとき（操作手順型・フロー型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「問い合わせ・次の一歩型（next step and contact）」で作ってください。いちばん上に小さく「ご相談から導入までの流れ」、その下に見出し「まずは30分の無料相談から始めましょう」を1行で置きます。その下を左右に分けます。左側には、番号つきの丸（直径40pt）を縦に3つ並べ、丸を点線でつなぎます。1つ目の丸だけアクセント色、ほかは灰色にします。各項目は、太字22ptの名前、16ptの説明、15ptの目安の時期の順で、1「無料相談（30分）／今のお困りごとをお聞きします／お申し込みから3営業日以内」、2「お見積もり／費用と導入の時期をご提案します／相談の1週間後」、3「導入スタート／準備から運用まで伴走します／ご契約の2週間後」です。右側には、上にアクセント色の太い線を引いた角丸の枠を置き、見出し「お申し込み・お問い合わせ」（22pt太字）、その下に小さく「株式会社サンプル商会（例）　営業部」と書きます。枠の中に、「メール：info@example.com（24時間受付。翌営業日までにお返事します）」「電話：03-XXXX-XXXX（平日9時から18時）」「Web：https://example.com/soudan」を縦に並べ、メールと電話は24pt前後の太字にします。強調する連絡手段は「{{focus:t}}」にしてください（強調する行は背景を薄いアクセント色にして、左端に太い線を付け、文字をアクセント色にする）。枠の右には、点線の正方形の「QRコード」の欄を置きます。この欄は「{{qr:t}}」にします。色はアクセント色{{accent:t}}の1色だけで、ほかは白・灰色・黒にします。見出しは32〜36pt、連絡先は16pt以上、注記は12pt以上。最下部に「※ 連絡先は見本のダミーです。実際の資料では、届く宛先に書き換えてください。」と注記を入れてください。連絡先は私が書いたダミーのままにして、実在の会社名・電話番号・アドレスを作らないでください。',
  howTo: [
    'PowerPointでは、左の流れは「挿入」→「SmartArt」→「手順」の中の「縦方向の曲線リスト」や「基本ステップのプロセス」を選ぶと、番号の丸と文章をまとめて作れます（SmartArtは、図形の並びを自動で整える機能です）。自分で作るなら、「挿入」→「図形」→「楕円」を3つ縦に並べ、「図形の書式」→「配置」→「左右中央揃え」と「上下に整列」でそろえます。右の枠は、「四角形: 角を丸くする」の上に、細い四角形を重ねて太い線にします。QRコードは、「挿入」→「画像」で画像を貼り付けます。',
    'Googleスライドでは、「挿入」→「図形」→「図形」から楕円を選んで3つ並べ、「配置」→「均等に配置」→「縦方向」でそろえます。連絡先の枠は、角丸の四角形に、テキストボックスを重ねて作ります。メールアドレスやURLをリンクにしても、会場で映すだけなら押せないので、そのまま大きく書きます。配布するPDFにするときだけ、「挿入」→「リンク」で押せるようにします。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。連絡先は見本のダミー（example.com など）なので、実際の会社名・メールアドレス・電話番号に必ず書き換えてください。QRコードの欄は、スライドに画像（QRコード）を重ねる場所です。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-qr="{{qr}}">
  <p class="kicker">ご相談から導入までの流れ</p>
  <h1 class="title">まずは30分の無料相談から始めましょう</h1>

  <div class="body">
    <!-- 左: これからの流れ -->
    <ol class="steps">
      <li>
        <i class="num">1</i>
        <span class="st"><b>無料相談（30分）</b><span>今のお困りごとをお聞きします</span><em>お申し込みから3営業日以内</em></span>
      </li>
      <li>
        <i class="num">2</i>
        <span class="st"><b>お見積もり</b><span>費用と導入の時期をご提案します</span><em>相談の1週間後</em></span>
      </li>
      <li>
        <i class="num">3</i>
        <span class="st"><b>導入スタート</b><span>準備から運用まで伴走します</span><em>ご契約の2週間後</em></span>
      </li>
    </ol>

    <!-- 右: 連絡先（ダミー） -->
    <div class="contact">
      <span class="ct">お申し込み・お問い合わせ</span>
      <span class="co">株式会社サンプル商会（例）　営業部</span>
      <div class="cbody">
        <ul class="rows">
          <li class="r r-mail"><span class="k">メール</span><span class="v">info@example.com</span><span class="s">24時間受付。翌営業日までにお返事します</span></li>
          <li class="r r-phone"><span class="k">電話</span><span class="v">03-XXXX-XXXX</span><span class="s">平日9時から18時</span></li>
          <li class="r r-web"><span class="k">Web</span><span class="wv">https://example.com/soudan</span></li>
        </ul>
        <span class="qr"><span>QRコード</span></span>
      </div>
    </div>
  </div>

  <p class="note">※ 連絡先は見本のダミーです。実際の資料では、届く宛先に書き換えてください。</p>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* 幅960px×高さ540px（PowerPointの16:9と同じ比率） */
.slide {
  --accent: {{accent}};
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
.body { flex: 1; display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 36px; margin: 18px 0 10px; min-height: 0; }

/* 左: 流れ（丸を点線でつなぐ） */
.steps { position: relative; display: grid; grid-auto-rows: 1fr; margin: 0; padding: 0; list-style: none; }
.steps::before { content: ""; position: absolute; left: 19px; top: 30px; bottom: 30px; border-left: 2px dashed #c3c8d2; }
.steps li { display: flex; align-items: center; gap: 16px; }
.num { position: relative; flex: none; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: #5a6070; color: #fff; font-style: normal; font-size: 21px; font-weight: 800; }
.steps li:first-child .num { background: var(--accent); }
.st { display: flex; flex-direction: column; }
.st b { font-size: 22px; font-weight: 800; }
.st span { font-size: 16px; color: #5a6070; }
.st em { font-style: normal; font-size: 15px; font-weight: 700; }

/* 右: 連絡先 */
.contact { display: flex; flex-direction: column; padding: 16px 22px; border: 2px solid #e3e5ea; border-top: 5px solid var(--accent); border-radius: 12px; }
.ct { font-size: 22px; font-weight: 800; }
.co { margin-top: 2px; font-size: 15px; color: #5a6070; }
.cbody { flex: 1; display: flex; align-items: stretch; gap: 18px; margin-top: 8px; }
.rows { flex: 1; display: grid; grid-template-rows: 1.25fr 1fr 0.8fr; margin: 0; padding: 0; list-style: none; }
.r { display: flex; flex-direction: column; justify-content: center; padding: 0 10px; border-top: 1px solid #e3e5ea; border-radius: 6px; }
.k { font-size: 14px; font-weight: 700; color: #5a6070; }
.v { font-size: 24px; font-weight: 800; font-variant-numeric: tabular-nums; line-height: 1.2; }
.wv { font-size: 16px; font-weight: 700; word-break: break-all; line-height: 1.3; }
.s { font-size: 13px; color: #5a6070; }
.qr { flex: none; align-self: center; display: flex; align-items: center; justify-content: center; width: 96px; height: 96px; border: 2px dashed #c3c8d2; border-radius: 8px; font-size: 14px; font-weight: 700; color: #8a8f9c; text-align: center; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 強調する連絡手段（data-focus="mail" / "phone" / "none"）とQRコードの欄（data-qr="hide" なら消す） */
.slide[data-focus="mail"] .r-mail,
.slide[data-focus="phone"] .r-phone { background: color-mix(in srgb, var(--accent) 9%, #fff); box-shadow: inset 4px 0 var(--accent); }
.slide[data-focus="mail"] .r-mail .v,
.slide[data-focus="phone"] .r-phone .v { font-size: 24px; font-weight: 800; font-variant-numeric: tabular-nums; line-height: 1.2; }
.slide[data-qr="hide"] .qr { display: none; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する連絡手段',
      value: 'mail',
      options: [
        { value: 'mail', label: 'メールを強調' },
        { value: 'phone', label: '電話を強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    {
      key: 'qr',
      type: 'select',
      label: 'QRコードの欄',
      value: 'show',
      options: [
        { value: 'show', label: '欄を出す' },
        { value: 'hide', label: '欄を出さない' },
      ],
    },
  ],
  cautions: [
    '聞き手にしてほしい行動は、1つに絞ります。「資料請求も、相談も、申し込みも」と並べると、どれも選ばれません。最初の一歩を一番小さい行動（見本なら30分の無料相談）にして、そこから先の流れを見せます。',
    '連絡先は、会場で映しても読める大きさにします。見本はメールと電話を24pt前後にしています。小さな文字で細かく書くと、写真に撮る人しか読めません。メールとURLは、後ろの席でも読める長さに収めます。',
    '実際に届く連絡先かを、資料を出す前に確かめます。見本のexample.comや「03-XXXX-XXXX」はダミーです。書き換え忘れた資料が配られると、連絡が誰にも届かず、機会を逃します。',
    '連絡手段を、受け付け時間や返事の目安と一緒に書きます。「メール：いつでも／電話：平日9時〜18時」と書くと、聞き手が自分に合う方法を選べます。個人の携帯電話番号や個人のメールは書かないでください。',
  ],
  similar: [
    { slug: 'qa-slide', diff: 'Q&A型は、質問を受け付ける時間を示す型です。質疑応答のあとに、問い合わせ・次の一歩型を最後の1枚として続けると、流れがきれいになります。' },
    { slug: 'summary', diff: 'まとめ型は、話の要点を最後に箇条書きで振り返る型です。次の行動をお願いする前に、内容を確認してもらう1枚として使います。' },
    { slug: 'steps', diff: '操作手順型は、操作を番号つきの手順で見せる型です。次の一歩型の流れが「操作」の説明になるときは、別のスライドで詳しく見せます。' },
  ],
  faq: [
    {
      q: '資料の最後のスライドには、何を書けばよいですか？',
      a: '「聞き手に次にしてほしい行動」と「そのやり方（連絡先）」の2つです。「ご清聴ありがとうございました」だけで終えると、聞き手が動くきっかけが残りません。ありがとうの一言は、最後の1枚の中に小さく添えれば足ります。',
    },
    {
      q: '連絡先のスライドに、QRコードは必要ですか？',
      a: '会場で映す発表では、あると便利です。スマートフォンで読み取れば、メールアドレスやURLを打たずに済みます。ただし、QRコードが小さすぎると読み取れないため、スライドの右下などに十分な大きさ（スライドの高さの2割程度）で置き、読み取れるか事前に試します。',
    },
    {
      q: '問い合わせのスライドは、PowerPointでどう作るのが早いですか？',
      a: 'SmartArtの「手順」で左の流れを作り、右にテキストボックスで連絡先を置くのが早いです。自分で図形を並べるより、行の高さと間隔が自動でそろいます。連絡先はあとから変わりやすいので、スライドのひな形に連絡先だけを入れた最後の1枚を保存しておくと、使い回せます。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
