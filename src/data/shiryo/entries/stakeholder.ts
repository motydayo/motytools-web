import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'stakeholder',
  no: 73,
  category: 'keikaku',
  name: 'ステークホルダー型',
  en: 'Stakeholder map',
  aka: ['ステークホルダーマップ', '関係者マップ', '利害関係者の整理', '影響力・関心度マトリクス', 'パワー・インタレストグリッド'],
  mode: 'static',
  title: 'ステークホルダーマップとは？関係者を整理するスライドの作り方【見本・PowerPoint】',
  description:
    '関係者を影響力の大きさと関心の高さで位置づける「ステークホルダー型」のスライドを見本で解説。4つの領域の関わり方、丸の置き方、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '関係者を影響力と関心の高さで4つの領域に置き、関わり方を決める。',
  what: [
    '横に「関心の高さ」、縦に「影響力の大きさ」の軸を取り、プロジェクトの関係者を丸で置く型です。見本は社内システムの刷新で、右上の「重点的に連携」に経理部長と情報システム部、左上の「満足させておく」に社長と監査法人、右下の「情報を届ける」に営業部の現場、左下の「見守る」に取引先の担当者を置いています。右の列には、領域ごとの関わり方を書いています。重点の領域だけ色を付け、見出しに「最優先は経理部長と情報システム部」と結論を書いています。',
    'この型のよさは、関係者の数が多いときに、「誰にどれだけの手間をかけるか」を決められることです。全員に同じ頻度で説明すると、時間が足りなくなります。影響力が大きく関心も高い人には計画づくりから一緒に進め、影響力は大きいが関心が低い人には要所で報告する、というように、領域ごとに関わり方を変えます。丸は5〜8個までにし、個人名ではなく役職や部署名で書くのが決まりです。',
  ],
  when: [
    'プロジェクトの開始時に、関係者を洗い出して、誰とどう連絡を取るかを決めるとき',
    '社内の反対・賛成の人を整理して、根回しの順番を決めるとき',
    '新しい制度やシステムの導入で、説明会や連絡の優先順位を上司に示すとき',
    'プロジェクトの途中で、関係者の位置が変わったことを共有し、関わり方を見直すとき',
  ],
  avoid: [
    '優先順位を付けたいのが「関係者」ではなく「施策や課題」のとき（マトリクス型にする）',
    '関係者の責任の分担（誰が実行・承認するか）を決めたいとき（RACI責任分担型にする）',
    '組織の上下関係を見せたいとき（組織図型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「ステークホルダー型（stakeholder map）」で作ってください。いちばん上に小さく「社内システム刷新プロジェクトの関係者」、その下に結論の見出し「最優先は、経理部長と情報システム部」を置きます。その下の左の広い場所に、横軸の下に「関心の高さ（右ほど高い）」、縦軸の左に縦書きで「影響力（上ほど大きい）」の2×2の図を置きます。4つの領域の名前は、左上が「満足させておく」、右上が「重点的に連携」、左下が「見守る」、右下が「情報を届ける」で、それぞれの領域の隅に15pt前後の灰色の太字で書きます。関係者は丸で置き、丸の横に16pt以上の名前を書きます。丸の大きさは{{dot:t}}ptです。位置は、社長（関心40・影響92）、監査法人（関心28・影響58）、経理部長（関心76・影響80）、情報システム部（関心88・影響62）、営業部の現場（関心84・影響28）、取引先の担当者（関心22・影響18）です（数字は0〜100で、中心が50）。右の幅270pt前後の列には、4つの領域の関わり方を縦に並べ、それぞれ太字の領域名、灰色の関係者の名前、黒い関わり方の順に書いてください。重点的に連携は「経理部長・情報システム部」「計画づくりから一緒に進める」、満足させておくは「社長・監査法人」「要所で報告し、判断を仰ぐ」、情報を届けるは「営業部の現場」「変更点を早めに知らせる」、見守るは「取引先の担当者」「必要なときだけ連絡する」です。強調は「{{focus:t}}」にしてください（強調するときは、右上の領域をごく薄いアクセント色{{accent:t}}で塗って領域名もアクセント色にし、その中の丸（経理部長・情報システム部）をアクセント色で塗って名前を太字にし、右の列の「重点的に連携」の左線と領域名もアクセント色にする）。ほかの丸は灰色です。色はアクセント色1色だけで、ほかは白・灰色・黒にします。見出しは32〜36pt。最下部に「※ 位置は、プロジェクトメンバーの話し合いで決めた目安（それぞれ0〜100）。」と注記を入れてください。文言と数字は私が書いたものだけを使い、新しいものを足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「図形」→「四角形」で大きな正方形を置き、「挿入」→「図形」→「線」の直線を縦と横に1本ずつ引いて、4つの領域に分けます。軸の名前と領域の名前は「テキスト ボックス」で書き、縦軸の文字は、「図形の書式」→「文字の方向」→「縦書き」にします。関係者の丸は「楕円」で、位置は話し合いで決めた数字に合わせて置きます。数字をもとに点を置きたいときは、Excelで「散布図」を作り、PowerPointに貼る方法もありますが、名前のラベルを付ける手間があるため、丸と文字を置く方が早く作れます。',
    'Googleスライドでも作り方は同じです。「挿入」→「図形」→「図形」で四角と丸を置き、「挿入」→「線」で十字の線を引きます。丸の上に名前のテキストボックスを置き、丸と文字を選んで「配置」→「グループ化」でまとめると、位置を動かしやすくなります。右の列の説明は、「挿入」→「テキスト ボックス」で、領域ごとに1つずつ置きます。強調する領域だけ、四角の塗りつぶしを薄い色にします。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。丸の位置は、横を left（関心の高さ）、縦を bottom（影響力の大きさ）の%で決めています。関係者を動かすときは、この2つの数字を書き換えるだけで済みます。丸の大きさと強調は、つまみで切り替わります。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">社内システム刷新プロジェクトの関係者</p>
  <h1 class="title">最優先は、経理部長と情報システム部</h1>

  <div class="sh-body">
    <div class="sh-chart">
      <span class="sh-ylab" aria-hidden="true">影響力（上ほど大きい）</span>
      <div class="sh-plot">
        <div class="sh-q sh-q-tl"><span>満足させておく</span></div>
        <div class="sh-q sh-q-tr"><span>重点的に連携</span></div>
        <div class="sh-q sh-q-bl"><span>見守る</span></div>
        <div class="sh-q sh-q-br"><span>情報を届ける</span></div>
        <span class="sh-pt sh-r" style="left: 40%; bottom: 92%"><i></i><b>社長</b></span>
        <span class="sh-pt sh-r" style="left: 28%; bottom: 58%"><i></i><b>監査法人</b></span>
        <span class="sh-pt sh-r sh-key" style="left: 76%; bottom: 80%"><i></i><b>経理部長</b></span>
        <span class="sh-pt sh-l sh-key" style="left: 88%; bottom: 62%"><i></i><b>情報システム部</b></span>
        <span class="sh-pt sh-l" style="left: 84%; bottom: 28%"><i></i><b>営業部の現場</b></span>
        <span class="sh-pt sh-r" style="left: 22%; bottom: 18%"><i></i><b>取引先の担当者</b></span>
      </div>
      <span class="sh-xlab" aria-hidden="true">関心の高さ（右ほど高い）</span>
    </div>
    <div class="sh-list">
      <div class="sh-item sh-key"><b>重点的に連携</b><span>経理部長・情報システム部</span><em>計画づくりから一緒に進める</em></div>
      <div class="sh-item"><b>満足させておく</b><span>社長・監査法人</span><em>要所で報告し、判断を仰ぐ</em></div>
      <div class="sh-item"><b>情報を届ける</b><span>営業部の現場</span><em>変更点を早めに知らせる</em></div>
      <div class="sh-item"><b>見守る</b><span>取引先の担当者</span><em>必要なときだけ連絡する</em></div>
    </div>
  </div>

  <p class="note">※ 位置は、プロジェクトメンバーの話し合いで決めた目安（それぞれ0〜100）。</p>
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
.title { margin: 0; font-size: 34px; font-weight: 800; line-height: 1.3; }
.sh-body { flex: 1; min-height: 0; display: grid; grid-template-columns: minmax(0, 1fr) 270px; gap: 24px; margin: 14px 0 8px; }
.sh-chart { display: grid; grid-template-columns: 26px minmax(0, 1fr); grid-template-rows: minmax(0, 1fr) 26px; }
.sh-ylab { writing-mode: vertical-rl; text-align: center; align-self: center; font-size: 15px; font-weight: 800; color: #8a8f9c; }
.sh-xlab { grid-column: 2; padding-top: 4px; text-align: right; font-size: 15px; font-weight: 800; color: #8a8f9c; }
.sh-plot { --d: {{dot:n}}px; position: relative; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; border: 1.5px solid #c3c8d2; border-radius: 10px; }
.sh-q { padding: 8px 12px; border: 0 solid #e3e5ea; font-size: 15px; font-weight: 800; color: #8a8f9c; }
.sh-q-tl { border-width: 0 1.5px 1.5px 0; border-radius: 9px 0 0 0; }
.sh-q-tr { border-width: 0 0 1.5px 0; border-radius: 0 9px 0 0; text-align: right; }
.sh-q-bl { border-width: 0 1.5px 0 0; border-radius: 0 0 0 9px; display: flex; align-items: flex-end; }
.sh-q-br { border-radius: 0 0 9px 0; display: flex; align-items: flex-end; justify-content: flex-end; }
.sh-pt { position: absolute; display: flex; align-items: center; gap: 6px; white-space: nowrap; }
.sh-pt i { flex: none; width: var(--d); height: var(--d); border-radius: 50%; background: #5a6070; }
.sh-pt b { font-size: 16px; font-weight: 700; }
.sh-r { transform: translate(calc(var(--d) / -2), 50%); }
.sh-l { flex-direction: row-reverse; transform: translate(calc(-100% + var(--d) / 2), 50%); }
.sh-list { display: flex; flex-direction: column; justify-content: space-between; }
.sh-item { display: grid; gap: 1px; padding: 4px 0 4px 14px; border-left: 4px solid #e3e5ea; line-height: 1.35; }
.sh-item b { font-size: 17px; font-weight: 800; }
.sh-item span { font-size: 16px; color: #5a6070; }
.sh-item em { font-size: 16px; font-style: normal; color: #1f2430; }

/* 重点の領域を強調（data-focus="key"） */
.slide[data-focus="key"] .sh-q-tr { background: color-mix(in srgb, var(--accent) 9%, #fff); color: var(--accent); }
.slide[data-focus="key"] .sh-pt.sh-key i { background: var(--accent); }
.slide[data-focus="key"] .sh-pt.sh-key b { font-weight: 800; }
.slide[data-focus="key"] .sh-item.sh-key { border-left-color: var(--accent); }
.slide[data-focus="key"] .sh-item.sh-key b { color: var(--accent); }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する部分',
      value: 'key',
      options: [
        { value: 'key', label: '重点の領域を強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    { key: 'dot', label: '丸の大きさ', min: 10, max: 22, step: 2, value: 16, unit: '' },
  ],
  cautions: [
    '関係者の位置を、一人で決めないこと。位置は人によって違って見えます。プロジェクトのメンバーで話し合い、「関心は高い・低い」「影響は大きい・小さい」を合意してから置きます。話し合いの目安だと注記に書いておくと、あとで「なぜここなのか」と聞かれても説明できます。',
    '個人名ではなく、役職や部署名で書くこと。社内で共有する資料でも、特定の個人を「見守る」領域に置くと、本人の目に触れたときに角が立ちます。「経理部長」「営業部の現場」のように、役割で書きます。',
    '丸は5〜8個に絞ります。全員を載せようとすると、文字が重なって読めません。大勢の関係者は、「営業部の現場」のように1つのグループにまとめて、1つの丸で表します。',
    '図を作って終わりにしないこと。領域ごとの「関わり方」を右に書いて、はじめて使える資料になります。誰にどの頻度で何を伝えるのかを、1行ずつ書き添えます。',
  ],
  similar: [
    { slug: 'matrix', diff: 'マトリクス型（2×2）は、2つの軸で4つの箱に分けて位置づける型です。ステークホルダー型は、そのうち「関係者」を置くための専用の使い方で、軸は影響力と関心の高さに決まっています。' },
    { slug: 'raci', diff: 'RACI責任分担型は、作業ごとに「誰が実行・承認・相談・報告か」を表にする型です。ステークホルダー型は、作業の分担ではなく、関係者にどう関わるかを決めます。' },
    { slug: 'org-chart', diff: '組織図型は、部署や人の上下の関係を見せる型です。ステークホルダー型は、上下ではなく、影響力と関心の高さで位置づけます。' },
  ],
  faq: [
    {
      q: 'ステークホルダーとは何ですか？',
      a: 'プロジェクトや事業に関わる、利害のある人や組織のことで、「利害関係者」と訳されます。社内の部署・経営層・顧客・取引先・監査法人・地域住民などが含まれます。プロジェクトの成功は、関係者の協力に左右されるので、最初に洗い出して整理します。',
    },
    {
      q: 'ステークホルダーマップの4つの領域の名前は、決まっていますか？',
      a: '決まった言葉はありませんが、「重点的に連携（Manage closely）」「満足させておく（Keep satisfied）」「情報を届ける（Keep informed）」「見守る（Monitor）」の4つがよく使われます。自社で通じる言葉に直して構いません。',
    },
    {
      q: '関係者の位置は、プロジェクトの途中で変わりますか？',
      a: '変わります。たとえば、最初は関心が低かった社長が、費用が膨らんだ時点で関心を高めることがあります。節目ごとに図を見直し、位置が変わった関係者には、関わり方も変えます。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
