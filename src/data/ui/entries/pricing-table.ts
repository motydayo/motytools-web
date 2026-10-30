import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'pricing-table',
  no: 27,
  category: 'display',
  name: '料金表',
  en: 'Pricing table',
  aka: ['料金プラン表', 'プラン比較表', '価格表', 'プライシングテーブル', '料金比較'],
  mode: 'script',
  title: '料金表（プラン比較）のデザイン｜おすすめの目立たせ方とCSS【見本】',
  description:
    'サービスの料金プランを並べる料金表を触れる見本で解説。おすすめプランを1つだけ目立たせる方法、機能を同じ行にそろえて比べやすくするコツ、月払い・年払いの切り替えをCSSだけで作る方法、AIへの指示文までまとめました。',
  oneLine: 'プランを横に並べ、同じ行で比べられるようにして1つを勧める。',
  what: [
    'サービスのプランを横に並べて、値段と中身を見比べてもらう部品です。見本では「フリー」「スタンダード」「プロ」の3つを並べ、真ん中のスタンダードに「いちばん人気」の札・色付きのふち・少し大きめの表示・塗りのボタンを集めて、迷った人の行き先を示しています。上の「年払い」を押すと、全プランの値段が月あたりの金額に切り替わり、年に一括で払う金額も下に出ます。',
    '料金表の決まりごとは「比べやすさ」と「勧めるのは1つだけ」です。機能はどのプランでも同じ順番・同じ行に並べ、含まれないものも消さずに「—」で残します。行がずれていたり、プランごとに書き方が違ったりすると、利用者は表を往復して数えることになります。おすすめの印は1枚だけに付けます。全部が目立つと、どれも目立たなくなります。',
    '似た部品との違いも知っておきましょう。カルーセルのように1枚ずつ送る形にすると、プランを同時に見られず比べられなくなるので、スマホでは縦に積むのが基本です。機能の数が多い場合は、カードの下に「すべての機能を比べる」表（行が機能・列がプランの表）を別に置きます。',
  ],
  when: [
    'SaaS・アプリ・会員サービスの料金ページで、2〜4つのプランを見比べてもらいたいとき',
    '教室・ジム・サロンのコースを、回数や時間の違いで並べたいとき',
    '月払いと年払いがあり、年払いのお得さをはっきり見せたいとき',
    'LPの終盤で、「どれを選べばいいか」を一目で決めてもらいたいとき',
  ],
  avoid: [
    'プランが5つ以上あるとき（横に並びきらず、比べる負担が大きい。まず数を絞る）',
    '見積もりが必要で値段を出せないサービス（「お問い合わせ」だらけの表は信用されにくい）',
    '年払いの月あたり金額だけを大きく見せ、実際に払う総額を隠すとき（不信感や苦情につながる）',
  ],
  prompt:
    'サービスの料金ページに「料金表（pricing table）」を作ってください。フリー・スタンダード・プロの3プランを横に並べ、スマホ幅では縦に積んでください。各カードは、プラン名・誰向けかの一言・値段・ボタン・機能の一覧の順にし、機能はどのプランでも同じ順番・同じ行にそろえ、含まれない機能は消さずに「—」と「含まれません」の読み上げ用の文で残してください。おすすめのスタンダードだけ、{{color:t}}の2pxのふち、上に「いちばん人気」の札（契約数などの裏付けが無いなら「おすすめ」にする）、塗りのボタン、{{pop:t}}倍の大きさで目立たせ、ほかのボタンは枠線だけにしてください。月払い・年払いの切り替えをラジオボタンで作り、年払いでは月あたりの金額と年の総額を両方表示してください。',
  howTo: [
    'カードの並べ方は CSS Grid で、横に3列、狭い画面では1列にします。機能の行を全プランでそろえるには、同じ配列から同じ順番で書き出すのが確実です。手で書くとどこかで行がずれます。おすすめのカードには、ふちの色・上の札・塗りのボタン・transform: scale() での少しの拡大を「まとめて」付けます。どれか1つだけだと、見落とされやすいからです。',
    '月払い・年払いの切り替えは、JavaScriptなしでも作れます。2つのラジオボタンを置き、両方の値段を書いておいて、:has(#yearly:checked) で表示を入れ替えます。ラジオボタンなので、キーボードの矢印キーでの切り替えと、読み上げソフトへの「選択中」の伝達が最初から付いてきます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<section class="pricing">
  <fieldset class="billing">
    <legend class="sr-only">支払い方法</legend>
    <label><input type="radio" name="billing" id="monthly" checked> 月払い</label>
    <label><input type="radio" name="billing" id="yearly"> 年払い（2か月分お得）</label>
  </fieldset>

  <div class="plans">
    <article class="plan">
      <h3>フリー</h3>
      <p class="price">0円<small>/月（税込）</small></p>
      <a href="/signup" class="btn-outline">無料ではじめる</a>
      <ul>
        <li>予約の受付 月30件</li>
        <li class="off">— 売上レポート<span class="sr-only">（含まれません）</span></li>
      </ul>
    </article>

    <article class="plan is-rec">
      <!-- 「いちばん人気」は契約数などの裏付けがあるときだけ。無ければ「おすすめ」 -->
      <p class="pop">いちばん人気</p>
      <h3>スタンダード</h3>
      <p class="price">
        <span class="m">1,500円</span><span class="y">1,250円</span><small>/月（税込）</small>
      </p>
      <p class="note y">年15,000円を一括払い</p>
      <a href="/signup?plan=standard" class="btn-primary">14日間無料で試す</a>
      <ul>
        <li>予約の受付 無制限</li>
        <li>売上レポート</li>
      </ul>
    </article>
    <!-- プロも同じ並びで -->
  </div>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.plans {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: start;
  gap: 16px;
}
@media (max-width: 640px) {
  .plans { grid-template-columns: 1fr; }
}
.plan {
  position: relative;
  padding: 24px 20px;
  border: 1px solid #e4e2dc;
  border-radius: 16px;
}
/* おすすめは1枚だけ。色・札・大きさをまとめて */
.plan.is-rec {
  border: 2px solid {{color}};
  transform: scale({{pop:n}});
}
.pop {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 2px 12px;
  border-radius: 999px;
  background: {{color}};
  color: #fff;
  font-size: 12px;
  font-weight: 700;
}
.btn-primary { background: {{color}}; color: #fff; }
.plan .off { color: #9a9ca5; }

/* 見えないが読み上げられる文字 */
.sr-only {
  position: absolute; width: 1px; height: 1px;
  overflow: hidden; clip-path: inset(50%); white-space: nowrap;
}

/* 月払い・年払いの切り替え（JavaScriptなし） */
.y { display: none; }
.pricing:has(#yearly:checked) .y { display: inline; }
.pricing:has(#yearly:checked) .m { display: none; }
.pricing:has(#yearly:checked) .note.y { display: block; }`,
    },
  ],
  tune: [
    { key: 'pop', label: 'おすすめの大きさ', min: 1, max: 1.1, step: 0.01, value: 1.04, unit: '' },
    { key: 'color', type: 'color', label: 'おすすめの色', value: '#3d5fc4' },
  ],
  cautions: [
    '年払いの「月あたり」の金額を見せるときは、実際に払う年の総額も同じカードに書きます。小さな数字だけ見せて請求で驚かせると、解約と苦情のもとになります。個人向けのサービスは、税込の総額で表示します（消費税法の「総額表示」の決まり）。事業者向けで税抜にする場合も「税抜」とはっきり書きます。',
    '「いちばん人気」の札は、契約数などの実績の裏付けがあるときだけ付けます。根拠の無い「人気No.1」のような表示は、景品表示法で問題になるおそれがあります。裏付けが無いなら「おすすめ」と書きます。',
    'スマホで縦に積むと、3枚目のプランは画面のずっと下になります。プラン名と値段だけの短い一覧や、「すべての機能を比べる」表を下に置くなど、比べる手段を残してください。',
    '「—」や灰色の文字だけでは、読み上げソフトに「含まれない」ことが伝わりません。見えない文で「含まれません」と添えます。チェックの印も色だけに頼らず形で区別します。',
    'おすすめを大きく見せすぎると（1.1倍以上など）、隣のカードと重なったり、文字がにじんだりします。わずかな差で十分に伝わります。',
  ],
  similar: [
    { slug: 'segmented-control', diff: 'セグメントコントロールは、月払い・年払いのような少ない選択肢から1つを選ぶ部品です。料金表の上の切り替えによく使われます。' },
    { slug: 'carousel', diff: 'カルーセルは1枚ずつ送って見せる部品です。プランを入れると同時に見られず比べにくくなるので、料金表には向きません。' },
    { slug: 'hover-lift', book: 'ugoki', diff: 'ホバーで浮き上がる演出は、マウスを乗せたカードを少し持ち上げて「押せる」ことを伝えます。料金表のカードに添える程度なら相性がよい演出です。' },
  ],
  faq: [
    {
      q: '料金プランはいくつ並べるのがいいですか？',
      a: '3つがいちばん多く使われ、選びやすい数です。2つだと比べる軸が少なく、4つを超えると横に並びきらずに比べる負担が大きくなります。プランが多い場合は、まず対象の人ごとに分けて数を絞ることを検討してください。',
    },
    {
      q: 'おすすめのプランは真ん中に置くべきですか？',
      a: '多くのサービスが真ん中に置いています。両側のプランと比べたときに「ちょうどいい」と感じやすく、視線も集まりやすい位置だからです。ただし大事なのは位置より、本当にいちばん多くの人に合うプランを勧めることです。',
    },
    {
      q: '値段の数字はどう見せれば読みやすいですか？',
      a: '数字は大きく太く、単位（円・/月）は小さく添えます。font-variant-numeric: tabular-nums で数字の幅をそろえると、カードを横に並べたときに見比べやすくなります。年払いは「月あたり」と「年の総額」を両方書きます。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
