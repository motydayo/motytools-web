import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'value-chain',
  no: 70,
  category: 'keikaku',
  name: '価値連鎖型',
  en: 'Value chain',
  aka: ['バリューチェーン', '価値連鎖', '事業の流れ図', '活動の連鎖', 'ポーターの価値連鎖'],
  mode: 'static',
  title: 'バリューチェーンとは？価値連鎖図をスライド1枚で見せる作り方【見本・PowerPoint】',
  description:
    '仕入れから販売までの活動のつながりを矢じり形で見せる「価値連鎖（バリューチェーン）型」を見本で解説。主な活動と支える活動の分け方、強みの示し方、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '仕入れから販売までの活動を並べ、どこで価値が生まれているかを見せる。',
  what: [
    '事業を「主な活動」と「支える活動」に分け、どこで価値が生まれ、どこで差がつくのかを見せる型です。見本では、果実ジャムを作る会社を取り上げています。下の段に「購買物流・製造・出荷物流・販売・営業・サービス」の5つの活動を矢じり形で並べ、上の段に「全般管理・人事・技術開発・調達」の4つの支える活動を横長の帯で重ね、右の矢印の先を「利益」にしています。見出しの結論に合わせ、「製造」と「販売・営業」の2つにだけ色を付けています。',
    '価値連鎖（バリューチェーン）は、経営学者のポーターが示した考え方です。使い方のこつは、全部の活動を同じ重さで書かないことです。活動ごとに「うちは何をしているか」を短く書き、その中で競合と差がつく活動だけを強調します。そうすると、「この会社の強みはここにある」と、聞き手が一目で理解できます。',
  ],
  when: [
    '自社の強みや弱みを、事業の流れに沿って整理して経営会議や社内に示すとき',
    '外部に委託する活動と、自社で持つ活動を分けて検討するとき',
    '新規事業の企画で、「どの活動で差をつけるか」を示したいとき',
    '競合との違いを、事業の流れのどこにあるかで説明するとき',
  ],
  avoid: [
    '業務の担当者ごとの手順を見せたいとき（スイムレーン型にする）',
    '作業を時間の順に細かく並べたいとき（フロー型・ガントチャート型にする）',
    'お客さまの目線で行動や気持ちを追いたいとき（カスタマージャーニー型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「価値連鎖型（value chain）」で作ってください。いちばん上に小さく「果実ジャム「みのり工房」の価値連鎖」、その下に結論の見出し「差がつくのは「製造」と「販売」の2か所」を置きます。その下の左の広い場所を上下2段に分けます。上の段は小さな灰色の見出し「支える活動」のあと、横長の薄い灰色の帯を4本、縦に並べてください。帯の左に太字の名前、右に灰色の説明を書きます（全般管理＝経営計画・経理・品質認証、人事・労務＝繁忙期の短期スタッフ育成、技術開発＝新レシピの開発（年12品）、調達＝契約農家18軒から直接仕入れ）。下の段は小さな灰色の見出し「主な活動（モノが顧客に届くまでの流れ）」のあと、5つの活動を左から右へ{{shape:t}}で並べます（矢じり形のときは、右が尖った形を少し重ねて並べ、四角形のときは、角丸の四角を少し離して並べる）。名前は白い太字で灰色の地に書きます。名前の下には灰色の説明を2行までで書いてください。購買物流＝農家から毎朝直送、製造＝小ロットの釜炊き・無添加、出荷物流＝冷蔵便で翌日届け、販売・営業＝直営店と通販で定価販売、サービス＝手紙で再購入を案内、の順です。2つの段の右には、黒い縦長の矢印形を置き、白い縦書きで「利益」と書いてください。強調は「{{focus:t}}」にしてください（強調するときは、「製造」と「販売・営業」の矢じりだけをアクセント色{{accent:t}}で塗り、その下の説明を太字の黒にする）。色はアクセント色1色だけで、ほかは白・灰色・黒にします。見出しは32〜36pt、活動の名前は17pt以上、説明は16pt以上。最下部に「※ 活動の分け方は、価値連鎖（バリューチェーン）の考え方による。」と注記を入れてください。文言は私が書いたものだけを使い、新しい項目を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「SmartArt」→「手順」の中にある「基本シェブロンプロセス」（矢じり形が横に並ぶ図）が、主な活動の段にそのまま使えます。文字を入れてから「変換」→「図形に変換」で普通の図形に戻すと、色を1つずつ変えられます。上の「支える活動」は、「挿入」→「図形」→「四角形: 角を丸くする」を横長に4本積み、全部を選んで「図形の書式」→「配置」→「左揃え」と「上下に整列」で整えます。右の「利益」の矢印は、「図形」→「矢印: 五角形」を縦長にして、「文字の方向」→「縦書き」にします。',
    'Googleスライドでは、「挿入」→「図形」→「矢印」の中にある「山形」や「五角形」を横に5つ並べ、「配置」→「均等に配置」→「横方向」でそろえます。支える活動の帯は角丸四角形を縦に4本置きます。強調する活動の矢じりだけ、塗りつぶしの色を変えます。活動の下の説明は、「挿入」→「テキスト ボックス」で、幅を矢じりにそろえて置きます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。矢じり形は clip-path（形を切り抜く指定）で作っています。形と強調は、data-shape と data-focus の値を書き換えるだけで切り替わります。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-shape="{{shape}}">
  <p class="kicker">果実ジャム「みのり工房」の価値連鎖</p>
  <h1 class="title">差がつくのは「製造」と「販売」の2か所</h1>

  <div class="vc-body">
    <div class="vc-main">
      <p class="vc-cap">支える活動</p>
      <div class="vc-support">
        <div class="vc-srow"><b>全般管理</b><span>経営計画・経理・品質認証</span></div>
        <div class="vc-srow"><b>人事・労務</b><span>繁忙期の短期スタッフ育成</span></div>
        <div class="vc-srow"><b>技術開発</b><span>新レシピの開発（年12品）</span></div>
        <div class="vc-srow"><b>調達</b><span>契約農家18軒から直接仕入れ</span></div>
      </div>
      <p class="vc-cap">主な活動（モノが顧客に届くまでの流れ）</p>
      <div class="vc-primary">
        <div class="vc-act"><span class="vc-chev">購買物流</span><p>農家から毎朝直送</p></div>
        <div class="vc-act vc-key"><span class="vc-chev">製造</span><p>小ロットの釜炊き・無添加</p></div>
        <div class="vc-act"><span class="vc-chev">出荷物流</span><p>冷蔵便で翌日届け</p></div>
        <div class="vc-act vc-key"><span class="vc-chev">販売・営業</span><p>直営店と通販で定価販売</p></div>
        <div class="vc-act"><span class="vc-chev">サービス</span><p>手紙で再購入を案内</p></div>
      </div>
    </div>
    <div class="vc-profit"><span>利益</span></div>
  </div>

  <p class="note">※ 活動の分け方は、価値連鎖（バリューチェーン）の考え方による。</p>
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
.vc-body { flex: 1; min-height: 0; display: grid; grid-template-columns: minmax(0, 1fr) 64px; margin: 12px 0 8px; }
.vc-main { display: flex; flex-direction: column; min-width: 0; padding-right: 6px; }
.vc-cap { margin: 0 0 4px; font-size: 15px; font-weight: 800; color: #8a8f9c; }
.vc-support { display: grid; gap: 5px; margin-bottom: 12px; }
.vc-srow { display: flex; align-items: center; gap: 14px; height: 30px; padding: 0 14px; border-radius: 8px; background: #f3f4f7; }
.vc-srow b { flex: none; width: 92px; font-size: 16px; font-weight: 800; }
.vc-srow span { font-size: 16px; color: #5a6070; white-space: nowrap; }
.vc-primary { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); }
.vc-chev { display: grid; place-items: center; height: 56px; padding: 0 20px 0 24px; background: #5a6070; color: #fff; font-size: 17px; font-weight: 800; text-align: center; clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%); }
.vc-act:first-child .vc-chev { padding-left: 14px; clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%); }
.vc-act + .vc-act .vc-chev { width: calc(100% + 14px); margin-left: -14px; }
.vc-act p { margin: 8px 8px 0 6px; font-size: 16px; line-height: 1.4; color: #5a6070; }
.vc-profit { display: grid; place-items: center; background: #1f2430; color: #fff; clip-path: polygon(0 0, 55% 0, 100% 50%, 55% 100%, 0 100%); }
.vc-profit span { writing-mode: vertical-rl; margin-right: 10px; font-size: 22px; font-weight: 800; letter-spacing: 0.2em; }

/* 強みの活動を強調（data-focus="key"） */
.slide[data-focus="key"] .vc-key .vc-chev { background: var(--accent); }
.slide[data-focus="key"] .vc-key p { color: #1f2430; font-weight: 700; }

/* 四角形にする（data-shape="box"） */
.slide[data-shape="box"] .vc-primary { gap: 8px; }
.slide[data-shape="box"] .vc-chev,
.slide[data-shape="box"] .vc-act:first-child .vc-chev,
.slide[data-shape="box"] .vc-act + .vc-act .vc-chev { width: auto; margin-left: 0; padding: 0 12px; border-radius: 10px; clip-path: none; }
.slide[data-shape="box"] .vc-profit { border-radius: 10px; clip-path: none; }
.slide[data-shape="box"] .vc-profit span { margin-right: 0; }
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
        { value: 'key', label: '強みの活動を強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    {
      key: 'shape',
      type: 'select',
      label: '主な活動の形',
      value: 'chevron',
      options: [
        { value: 'chevron', label: '矢じり形' },
        { value: 'box', label: '四角形' },
      ],
    },
  ],
  cautions: [
    '強調は強みの活動だけにすること。5つの活動の全部に色を付けると、どこで差がつくのかが分かりません。見本のように2つだけ選び、見出しにも「製造と販売」と書いて、図と結論をそろえます。',
    '活動の説明は「うちは何をしているか」を事実で書きます。「品質にこだわる」のような気持ちではなく、「小ロットの釜炊き・無添加」のように、競合と比べて違いが分かる事実を書きます。',
    '主な活動と支える活動を混ぜないこと。「製造」「販売」などの直接お客さまに届く活動は下の段、「人事」「経理」のように会社全体を支える活動は上の段です。混ぜると、どれが価値を生む流れか分かりません。',
    '業種に合わせて活動の名前を変えて構いません。ポーターの原型は製造業向けなので、サービス業なら「購買物流」を「仕入れ」、「製造」を「サービスの提供」のように置き換え、聞き手が自分の仕事に引きつけて読める言葉にします。',
  ],
  similar: [
    { slug: 'flow', diff: 'フロー型は、手順を矢印でつなぐ型です。価値連鎖型は、手順ではなく「どの活動で価値が生まれるか」を見せるので、支える活動と利益の矢印が付きます。' },
    { slug: 'swimlane', diff: 'スイムレーン型は、担当ごとの列に分けて業務の流れを描く型です。価値連鎖型は、担当者ではなく、事業全体の活動の種類で分けます。' },
    { slug: 'customer-journey', diff: 'カスタマージャーニー型は、お客さまの行動と気持ちを時間の順に並べる型です。価値連鎖型は、会社側の活動を並べます。' },
  ],
  faq: [
    {
      q: '価値連鎖（バリューチェーン）とサプライチェーンの違いは何ですか？',
      a: 'サプライチェーンは、原料の調達から消費者に届くまでの「モノの流れ」全体を指し、社外の会社も含みます。価値連鎖は、1つの会社の中の活動を並べ、どこで価値が生まれて利益になるかを見る考え方です。',
    },
    {
      q: '価値連鎖で見る「主活動」と「支援活動」は何ですか？',
      a: '主活動は、モノやサービスが直接お客さまに届くまでの流れです（購買物流・製造・出荷物流・販売とマーケティング・サービス）。支援活動は、それを支える会社全体の活動です（全般管理・人事・技術開発・調達）。見本は、この2つの段に分けています。',
    },
    {
      q: 'PowerPointでバリューチェーンの矢じり形を作るには？',
      a: '「挿入」→「SmartArt」→「手順」にある「基本シェブロンプロセス」が近い形です。または「挿入」→「図形」→「ブロック矢印」の中の「矢印: 山形」や「矢印: 五角形」を横に並べます。山形どうしを少し重ねて置くと、見本のようなつながった形になります。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
