import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'recommend',
  no: 24,
  category: 'kousei',
  name: '推奨案強調型',
  en: 'Recommended option highlight',
  aka: ['おすすめ案', '推奨プラン強調', '提案の結論', '推奨案', '3案から1つを推す'],
  mode: 'static',
  title: '推奨案の見せ方｜複数案から1つを大きく示すスライドの作り方【PowerPoint・見本つき】',
  description:
    '複数の案のうち、推奨を1つだけ大きく見せる「推奨案強調型」のスライドを見本で解説。選ぶ理由の書き方、ほかの案の控えめな見せ方、PowerPoint・Googleスライドでの手順、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '3つの案のうち、推奨する1つだけを大きく見せ、選ぶ理由を添える。',
  what: [
    '複数の案を並べながら、推奨する1つだけを大きく、ほかを小さく見せる型です。見本では、本社オフィスの移転先3案のうち、案2「駅前の新ビル」のカードを幅いっぱいに広げ、「推奨」の札と、月額賃料（月95万円）、選ぶ理由3つを載せています。案1と案3は灰色の小さなカードにして、名前・賃料・一言の説明だけを置いています。',
    'この型のよさは、「結局どれがいいの？」という聞き手の疑問に、迷わず答えられることです。決まりごとは、推奨案の弱い点を隠さないこと。見本では「現在地より月15万円（年180万円）高い」と推奨案のいちばん弱い点を、大きなカードの中に正直に書いています。ほかの案は、選ばなかった理由を一言で示します。',
  ],
  when: [
    '複数の案を検討した結果を、決裁者に報告して「この案でいきたい」と求めるとき',
    '見積もりを比べた結果、どの業者に頼むかを提案するとき',
    'お客さまに料金プランを案内して、おすすめのプランを示すとき',
    '比較表を見せたあとで、結論のスライドとして推奨案を改めて強調したいとき',
  ],
  avoid: [
    '案どうしの違いを項目ごとに細かく比べたいとき（選択肢比較表型にして、表で見せる）',
    '案が2つだけのとき（2カラム比較型にして、推奨する側の枠を太くする）',
    '推奨案がまだ決まっていないとき（比較表を見せて、会議で議論してもらう）',
  ],
  prompt:
    '16:9のスライドを1枚、「推奨案強調型（recommended option highlight）」で作ってください。いちばん上に小さく「本社オフィスの移転先（3案）」、その下に結論の見出し「移転先は案2「駅前の新ビル」を推奨します」を置きます。その下に、横に3枚のカードを並べます。推奨の案2のカードはほかの案の{{scale:t}}倍の幅で、いちばん背の高いカードとし、アクセント色{{accent:t}}の太さ3ptの枠線、淡いアクセント色の背景、右上に「推奨」の札を付けます。推奨案の位置は「{{pos:t}}」にします。案2のカードの中身は、案番号「案2」、名前「駅前の新ビル」を太字26pt、賃料「月95万円」を太字40ptのアクセント色、「選ぶ理由」の見出しに続けて、チェックの丸いアイコンつきで3つ（席が足りる（48席 → 72席）／採用に効く（駅から徒歩3分）／取引先に近い（3社が同じ沿線））を太字18pt、いちばん下に灰色16ptで「現在地より月15万円（年180万円）高い」。案1は「現在地で更新」「月80万円」「移転費用はかからないが、手狭（48席で62人）」、案3は「郊外の戸建て」「月60万円」「最も安いが、通勤が不便で退職者が出る恐れ」で、灰色の小さいカードに、名前20pt、賃料26pt、説明16ptで置いてください。最下部に注記「※ 賃料は共益費込み。席数は、現在地は48席・新ビルは72席。」を13ptで入れます。色はアクセント色の1色だけで、ほかは白・灰色・黒にします。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「図形」→「四角形: 角を丸くする」で3枚のカードを描きます。推奨案だけ、幅を広く、高さも高くして、「図形の書式」→「図形の枠線」でアクセント色・太さ3ptにし、淡い塗りにします。ほかの案は、枠線を灰色、塗りを薄い灰色にして小さくします。「推奨」の札は、角丸の小さな四角形を、カードの右上の縁にまたがるように重ねます。3枚を選んで「配置」→「上下中央揃え」を押すと、小さいカードが推奨カードの縦の真ん中に並びます。',
    'Googleスライドでは、「挿入」→「図形」→「図形」から角丸四角形を3つ描き、推奨だけ大きくします。カード内の文字は、図形に直接入力せず、テキストボックスを重ねると、行間や余白を細かく直せます。チェックのアイコンは、「挿入」→「特殊文字」で「チェック」と検索して入れるか、小さな円に「✓」を入れて作ります。3つのカードを選び、メニューの「配置」にある、縦方向の位置をそろえる項目から「真ん中」を選んでそろえます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。推奨案の位置は data-pos で、推奨案の幅は flex の数字（1.8）で調整できます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-pos="{{pos}}">
  <p class="kicker">本社オフィスの移転先（3案）</p>
  <h1 class="title">移転先は案2「駅前の新ビル」を推奨します</h1>

  <div class="row">
    <div class="card small">
      <span class="no">案1</span>
      <span class="name">現在地で更新</span>
      <span class="rent">月80万円</span>
      <span class="memo">移転費用はかからないが、手狭（48席で62人）</span>
    </div>

    <div class="card big">
      <span class="badge">推奨</span>
      <span class="no">案2</span>
      <span class="name">駅前の新ビル</span>
      <span class="rent">月95万円</span>
      <span class="rh">選ぶ理由</span>
      <ul class="reasons">
        <li><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="currentColor"/><path d="M7 12.5l3.2 3.2L17 8.8" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>席が足りる（48席 → 72席）</li>
        <li><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="currentColor"/><path d="M7 12.5l3.2 3.2L17 8.8" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>採用に効く（駅から徒歩3分）</li>
        <li><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="currentColor"/><path d="M7 12.5l3.2 3.2L17 8.8" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>取引先に近い（3社が同じ沿線）</li>
      </ul>
      <span class="cost">現在地より月15万円（年180万円）高い</span>
    </div>

    <div class="card small">
      <span class="no">案3</span>
      <span class="name">郊外の戸建て</span>
      <span class="rent">月60万円</span>
      <span class="memo">最も安いが、通勤が不便で退職者が出る恐れ</span>
    </div>
  </div>

  <p class="note">※ 賃料は共益費込み。席数は、現在地は48席・新ビルは72席。</p>
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
.kicker { margin: 0 0 6px; font-size: 15px; font-weight: 700; letter-spacing: 0.04em; color: var(--accent); }
.title { margin: 0; font-size: 34px; font-weight: 800; }

/* 3枚のカード。推奨だけ幅が広く、背も高い */
.row { flex: 1; display: flex; gap: 20px; margin: 22px 0 8px; }
.card { position: relative; display: flex; flex-direction: column; min-width: 0; border-radius: 14px; }
.small { flex: 1 1 0; align-self: center; gap: 4px; padding: 18px 20px; border: 2px solid #e3e5ea; background: #f3f4f7; }
.big { flex: {{scale:n}} 1 0; gap: 4px; padding: 18px 26px 14px; border: 3px solid var(--accent); background: color-mix(in srgb, var(--accent) 6%, #fff); }
.no { font-size: 14px; font-weight: 800; color: #5a6070; }
.name { font-size: 20px; font-weight: 800; line-height: 1.3; }
.rent { font-size: 26px; font-weight: 800; font-variant-numeric: tabular-nums; color: #5a6070; }
.memo { margin-top: 6px; font-size: 16px; line-height: 1.5; color: #5a6070; }

/* 推奨案の中身 */
.big .no { color: var(--accent); }
.big .name { font-size: 26px; }
.big .rent { font-size: 40px; line-height: 1.1; color: var(--accent); }
.badge { position: absolute; top: -14px; right: 24px; padding: 3px 16px; border-radius: 999px; background: var(--accent); color: #fff; font-size: 16px; font-weight: 800; }
.rh { margin-top: 8px; padding-top: 8px; border-top: 1px solid #e3e5ea; font-size: 14px; font-weight: 800; color: #5a6070; }
.reasons { list-style: none; margin: 4px 0 0; padding: 0; display: flex; flex-direction: column; gap: 6px; }
.reasons li { display: flex; align-items: center; gap: 10px; font-size: 18px; font-weight: 800; }
.reasons svg { flex: none; color: var(--accent); }
.cost { margin-top: auto; padding-top: 6px; font-size: 16px; color: #5a6070; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 推奨案の位置（data-pos="center" / "left"） */
.slide[data-pos="left"] .big { order: -1; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'pos',
      type: 'select',
      label: '推奨案の位置',
      value: 'center',
      options: [
        { value: 'center', label: '真ん中に置く' },
        { value: 'left', label: '左端に置く' },
      ],
    },
    { key: 'scale', label: '推奨案の幅（ほかの案の何倍か）', min: 1.4, max: 2.2, step: 0.2, value: 1.8, unit: '' },
  ],
  cautions: [
    '推奨案の弱い点を隠さないでください。見本のように「月15万円高い」と、いちばん弱い点を自分から書いておくと、質問される前に安心を与えられ、信頼が増します。',
    'ほかの案を、推奨案のかませ犬にしないでください。「案1は問題だらけ」と書くと、検討が雑に見えます。選ばなかった理由は、事実を一言（手狭、通勤が不便など）で述べます。',
    '理由は3つまでに絞ります。5つ6つと並べると、どれが決め手なのか分からず、かえって弱く見えます。数字や事実で言い切れるものから選びます。',
    '推奨案を目立たせるために、色を何色も使わないでください。大きさ・枠線の太さ・アクセント色の1色だけで、十分に主役になります。',
  ],
  similar: [
    { slug: 'option-table', diff: '選択肢比較表型は、全部の案を同じ大きさで項目ごとに比べる型です。推奨案強調型は、比べたあとの結論として、推奨を1つ前に出します。' },
    { slug: 'two-column', diff: '2カラム比較型は、案が2つのときに左右に並べて比べる型です。3つ以上の案から1つを推すときは、推奨案強調型にします。' },
    { slug: 'pricing', diff: '価格プラン型は、料金プランを並べておすすめを示す型で、お客さまに向けた案内に使います。推奨案強調型は、社内の意思決定で案を選ぶための資料です。' },
  ],
  faq: [
    {
      q: '推奨案は真ん中と左端のどちらに置くのがいいですか？',
      a: '真ん中に置くと、左右の小さなカードに挟まれて、視線が自然と集まります。左端に置くと、読み始めの位置で目に入ります。資料の中で位置をそろえるのが大切です。迷ったら真ん中にします。',
    },
    {
      q: '推奨案強調型は、比較表の前と後のどちらに置きますか？',
      a: '比較表のあとに置くのが基本です。先に表で全部の案を公平に見せ、そのあとで「その中から、この案を推します」と結論を出すと、聞き手が納得しやすくなります。時間のない決裁者向けなら、先にこの1枚を出して、比較表を後ろに付ける方法もあります。',
    },
    {
      q: 'AIに推奨案を決めてもらってもいいですか？',
      a: '判断材料の整理は任せられますが、最終的に何を推奨するかは、自分で決めてください。AIに選ばせるときも、「費用より採用を優先する」のように、重視する順番を先に伝えます。出てきた理由が事実と合っているかの確認も欠かせません。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
