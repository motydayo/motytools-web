import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'milestone',
  no: 53,
  category: 'keikaku',
  name: 'マイルストーン型',
  en: 'Milestone chart',
  aka: ['マイルストーン', '節目の表', '重要日程', 'マイルストーンチャート', 'キーデート', '主要日程'],
  mode: 'static',
  title:
    'マイルストーンとは？節目の日だけを並べる資料の作り方【見本つき】',
  description:
    '期間ではなく「節目の日」だけを時間軸に並べる「マイルストーン型」のスライドを見本で解説。日数に比例した置き方、次の節目の強調、PowerPointとGoogleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '節目の日と、その日に決まることだけを時間軸に並べる。',
  what: [
    '1本の横線を時間軸にして、その上に「節目の日」だけをひし形で置く型です。見本では新しい店のオープンまでの5つの節目（契約・内装設計・工事・採用・オープン）を、日付と「その日に決まること」と一緒に並べています。済んだ節目は灰色、次の節目だけアクセント色で大きく示し、「あと19日」の札を付けています。札は軸の上と下に交互に置いて、隣り合う札がぶつからないようにしています。',
    'マイルストーンのよさは、細かい作業を全部省いて、「この日までに何が決まっていればよいか」だけを見せられることです。聞き手は作業の中身ではなく、守るべき日付に集中できます。決まりごとは、節目の間隔を日数に比例させて置くことと、節目は5〜7個までにすることです。間隔をそろえて等間隔に置くと、日付の近さ遠さが嘘になります。',
  ],
  when: [
    'プロジェクトの全体像を経営層に見せ、「いつ何を判断してもらうか」を共有したいとき',
    '新店舗・新商品・システム切り替えなどの、守るべき日付を関係者に伝えたいとき',
    '進み具合の報告で、済んだ節目と次の節目を示したいとき',
    '細かい工程表を見せる必要はなく、重要な日付だけ押さえたいとき',
  ],
  avoid: [
    '作業の長さや重なりを見せたいとき（ガントチャート型にする）',
    '節目が10個を超えるとき（ロードマップ型で期間ごとにまとめる）',
    '過去の出来事を順に紹介したいとき（タイムライン型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「マイルストーン型（milestone chart）」で作ってください。いちばん上に小さく「新店舗「横浜みなとみらい店」オープンまでの節目」、その下に結論の見出し「次の節目は12月20日、内装設計の確定」を置きます。スライドの中央に太い横線を1本引いて時間軸にし、その上に5つのひし形を、日付に比例した間隔で置いてください（11/15を左端、3/28を右端とし、12/20・2/10・3/1がその間に入る）。節目と補足は、1つ目＝11/15「物件の契約」（賃貸契約を結ぶ）、2つ目＝12/20「内装設計の確定」（図面と見積を承認）、3つ目＝2/10「工事の完了」（店舗の引き渡し）、4つ目＝3/1「採用の完了」（スタッフ8名が決定）、5つ目＝3/28「オープン」（横浜みなとみらい店）です。札（日付を太字24pt、題を太字18pt、補足を16pt）は、1・3・5つ目を軸の上、2・4つ目を軸の下に置き、ひし形との間に細い線を引きます。1つ目は済んだ節目なので灰色で塗りつぶし、軸も11/15から今日（12/1）の位置まで濃い灰色にします。強調は「{{focus:t}}」にしてください（次の節目だけ色を付けるときは、12/20のひし形を大きくアクセント色{{accent:t}}にし、日付も同じ色にして、日付の横に赤い札で「あと19日」と書く）。軸の太さは{{axis:t}}pt、アクセント色は{{accent:t}}の1色だけにしてください。見出しは32〜36pt。最下部に「※ 横軸は日数に比例。今日は12月1日。」と注記を入れます。日付と数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「図形」→「直線」で横線を1本引き、太さは「図形の書式」→「図形の枠線」→「太さ」で変えます。節目は「図形」→「ひし形」を線の上に置き、その上下に「テキストボックス」で日付と題を書きます。間隔を日数に比例させるコツは、先に定規がわりの表を作ることです。左端から右端の日数を数え、「1日あたり何ミリか」を決めて、日付×その値の位置にひし形を置きます。位置が決まったら、札を上下交互に置くと重なりません。',
    'Googleスライドでも同じ手順で、「挿入」→「線」→「線」と「挿入」→「図形」→「図形」から作ります。位置をそろえるときは、図形を選んで上の「配置」メニューのそろえる機能が使えます。済んだ節目は灰色、次の節目だけアクセント色にすると、いまどこにいるのかが伝わります。節目が増えたら、軸を2段に折り返すより、スライドを分けた方が読めます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。ひし形と札は、軸の左端からの位置（left のパーセント）で置いているので、日付が変わったときはこの数字を書き換えます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">新店舗「横浜みなとみらい店」オープンまでの節目</p>
  <h1 class="title">次の節目は12月20日、内装設計の確定</h1>
  <div class="ms-stage">
    <span class="ms-axis"></span>
    <span class="ms-axis-done" style="left: 10.02%; width: 9.62%"></span>
    <span class="ms-dia is-done" style="left: 10.02%"></span>
    <span class="ms-item ms-up is-done" style="left: 10.02%"><b class="ms-date">11/15</b><span class="ms-name">物件の契約</span><span class="ms-sub">賃貸契約を結ぶ</span></span>
    <span class="ms-dia is-next" style="left: 31.06%"></span>
    <span class="ms-item ms-down is-next" style="left: 31.06%"><b class="ms-date">12/20<em class="ms-tag">あと19日</em></b><span class="ms-name">内装設計の確定</span><span class="ms-sub">図面と見積を承認</span></span>
    <span class="ms-dia is-later" style="left: 62.32%"></span>
    <span class="ms-item ms-up is-later" style="left: 62.32%"><b class="ms-date">2/10</b><span class="ms-name">工事の完了</span><span class="ms-sub">店舗の引き渡し</span></span>
    <span class="ms-dia is-later" style="left: 73.75%"></span>
    <span class="ms-item ms-down is-later" style="left: 73.75%"><b class="ms-date">3/1</b><span class="ms-name">採用の完了</span><span class="ms-sub">スタッフ8名が決定</span></span>
    <span class="ms-dia is-last" style="left: 89.98%"></span>
    <span class="ms-item ms-up is-last" style="left: 89.98%"><b class="ms-date">3/28</b><span class="ms-name">オープン</span><span class="ms-sub">横浜みなとみらい店</span></span>
  </div>
  <p class="note">※ 横軸は日数に比例。今日は12月1日。</p>
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
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

.ms-stage { position: relative; flex: 1; margin: 6px 0 4px; min-height: 0; }
.ms-axis,
.ms-axis-done { position: absolute; top: 50%; height: {{axis:n}}px; transform: translateY(-50%); border-radius: 999px; }
.ms-axis { left: 0; right: 0; background: #e3e5ea; }
.ms-axis-done { background: #8a8f9c; }
/* 節目のひし形 */
.ms-dia {
  position: absolute;
  top: 50%;
  width: 20px;
  height: 20px;
  background: #fff;
  border: 3px solid #8a8f9c;
  transform: translate(-50%, -50%) rotate(45deg);
}
.ms-dia.is-done { background: #8a8f9c; }
.ms-dia.is-last { background: #1f2430; border-color: #1f2430; }
/* 札は上下に交互。軸との間に細い線（::after）を引く */
.ms-item { position: absolute; width: 170px; display: flex; flex-direction: column; align-items: center; text-align: center; transform: translateX(-50%); }
.ms-up { bottom: calc(50% + 34px); }
.ms-down { top: calc(50% + 34px); }
.ms-item::after { content: ""; position: absolute; left: 50%; width: 2px; height: 12px; margin-left: -1px; background: #c3c8d2; }
.ms-up::after { bottom: -14px; }
.ms-down::after { top: -14px; }
.ms-date { display: inline-flex; align-items: center; gap: 8px; font-size: 24px; font-weight: 800; font-variant-numeric: tabular-nums; line-height: 1.3; }
.ms-tag { padding: 0 10px; border-radius: 999px; background: #d0453a; color: #fff; font-size: 14px; font-style: normal; line-height: 22px; white-space: nowrap; }
.ms-name { font-size: 18px; font-weight: 800; line-height: 1.35; }
.ms-sub { font-size: 16px; color: #5a6070; line-height: 1.4; }
.ms-item.is-done .ms-date,
.ms-item.is-done .ms-name { color: #8a8f9c; }
/* 次の節目だけ色を付ける（data-focus="next"） */
.slide[data-focus="next"] .ms-dia.is-next { width: 28px; height: 28px; background: var(--accent); border-color: var(--accent); }
.slide[data-focus="next"] .ms-item.is-next .ms-date { color: var(--accent); }
.slide[data-focus="none"] .ms-tag { display: none; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する節目',
      value: 'next',
      options: [
        { value: 'next', label: '次の節目だけ色を付ける' },
        { value: 'none', label: '強調しない' },
      ],
    },
    { key: 'axis', label: '軸の太さ（pt）', min: 2, max: 8, step: 1, value: 4, unit: '' },
  ],
  cautions: [
    '節目の間隔を等しく置かないようにします。11月15日→12月20日（35日）と2月10日→3月1日（19日）が同じ間隔に見えると、日程の余裕について聞き手が間違った印象を持ちます。軸は日数に比例させます。',
    '「作業」と「節目」を混ぜないようにします。節目は「契約が済んだ」「設計が決まった」のように、終わった状態で書きます。「内装工事」のような作業名を並べると、ガントチャートとの区別がつかなくなります。',
    '札を全部同じ側に置くと、間隔が近い節目の文字が重なります。上下に交互に置き、それでも重なる場合は札の補足を短くします。',
    '次の節目を示さずに全部同じ見た目にすると、「で、いまはどこ？」と聞かれます。済んだものは灰色、次の1つだけ色を付けて、見出しに「次の節目は〇月〇日」と書いておくと一言で伝わります。',
  ],
  similar: [
    { slug: 'gantt', diff: 'ガントチャート型は、作業ごとの期間と重なりを横の棒で見せる型です。マイルストーン型は期間を省き、節目の日だけを見せます。' },
    { slug: 'roadmap', diff: 'ロードマップ型は、年や四半期の単位で大まかな計画をテーマ別に並べる型です。日付よりも方向と順番を見せたいときに向きます。' },
    { slug: 'timeline', diff: 'タイムライン型は、出来事を時間の順に並べる型です。過去の経緯にも使え、節目の日数に比例させる決まりはありません。' },
  ],
  faq: [
    {
      q: 'マイルストーンとは何ですか？',
      a: 'プロジェクトの途中に置く「節目」のことです。もとは街道に置かれた距離を示す石のことで、「ここまで来た」と確かめる目印になります。「設計の承認」「テストの完了」のように、終わった状態で書くのがこつです。',
    },
    {
      q: 'マイルストーンとガントチャートはどう使い分けますか？',
      a: '経営層や取引先には、守るべき日付だけを見せるマイルストーン、現場の進行管理には作業の長さと重なりを見せるガントチャートを使います。同じ計画を、見せる相手によって2枚に描き分けるのがふつうです。',
    },
    {
      q: 'PowerPointでマイルストーンの図を作る機能はありますか？',
      a: '専用の機能はありません。直線とひし形と文字の枠を組み合わせて作ります。SmartArt（図表を組み立てる機能）の「基本タイムライン」でも作れますが、間隔が日数に比例しないので、日付の近さを見せたいときは自分で置く方が確実です。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
