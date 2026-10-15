import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'toggle-switch',
  no: 16,
  category: 'input',
  name: 'トグルスイッチ',
  en: 'Toggle switch',
  aka: ['トグル', 'スイッチ', 'オンオフスイッチ', 'トグルボタン'],
  mode: 'script',
  title: 'トグルスイッチとチェックボックスの使い分け｜CSSでの作り方【見本】',
  description:
    'トグルスイッチを触れる見本で解説。チェックボックスとの使い分け（押した瞬間に反映か、送信で反映か）、role="switch"を付けたチェックボックスとCSSで作る方法、キーボード操作と読み上げの決まりをまとめました。',
  oneLine: '押した瞬間にオンとオフが切り替わり、そのまま反映される。',
  what: [
    '電気のスイッチのように、押すたびにオンとオフが入れ替わる部品です。見本の「通知の設定」では、スイッチを押した瞬間に丸い玉が反対側へ動き、色が変わり、下に「オフにしました」と出ます。保存ボタンはありません。押したことがそのまま設定になります。',
    'いちばん大事な約束は「押したら、すぐ効く」ことです。ここがチェックボックスとの違いで、チェックボックスは印を付けただけでは何も起きず、「送信する」を押して初めて反映されます（見本の下の「くらべてみる」で試せます）。そのため、フォームの中で「同意する」「メールでも受け取る」のように後でまとめて送る項目にはチェックボックス、設定画面のように1つずつ即座に効かせる項目にはトグルスイッチ、と使い分けます。',
    '決まりごととして、キーボードでは Tab で焦点を当て、Space キーで切り替えます。読み上げソフトには「スイッチ」という役割と「オン／オフ」の状態が伝わる必要があり、HTML では <input type="checkbox"> に role="switch" を付けるだけで両方がそろいます。スイッチの横には必ず「何のスイッチか」の文字を置き、label で結びつけます。',
  ],
  when: [
    'アプリやマイページの設定画面で、通知・自動再生・ダークモードなどを1つずつすぐに切り替えたいとき',
    '一覧の各行に「公開する／しない」「在庫あり／なし」を置き、押したらそのまま保存したいとき',
    'お店の管理画面で、営業中・受付停止のような「今の状態」を切り替えるとき',
  ],
  avoid: [
    'フォームの途中で「送信する」ボタンを押すまで反映しない項目（チェックボックスにする。押した瞬間に効くと思わせてしまう）',
    '「規約に同意する」のような確認の印（スイッチを入れる感覚ではないので、チェックボックスが自然）',
    'オンとオフ以外の選択肢が3つ以上あるとき（セグメントコントロールかラジオボタンにする）',
    '切り替えると取り消せない操作（アカウント削除など。確認を挟むボタンにする）',
  ],
  prompt:
    '設定画面の通知のオン・オフを「トグルスイッチ（toggle switch）」で作ってください。HTMLは <input type="checkbox" role="switch"> を label で包み、項目名を常に表示してください。見た目はCSSだけで作り、スイッチの幅は{{w:t}}、高さは幅の0.6倍、つまみ（丸）は{{dur:t}}かけて減速しながら左右に動かし、オンのときの色は{{on:t}}にしてください。押せる範囲は行全体にし、高さ44px以上にしてください。切り替えた瞬間に設定を保存し（保存ボタンは置かない）、結果を role="status" の欄で「オフにしました」と知らせてください。キーボードの Space で切り替えられ、焦点の枠線が見えるようにしてください。動きを減らす設定（prefers-reduced-motion）の人には動きなしで切り替えてください。',
  howTo: [
    'HTML の <input type="checkbox"> に role="switch" を付けたものが土台です。クリック・Space キーでの切り替え、label との結びつき、フォームへの値の送信がすべて最初から入っていて、role="switch" で読み上げソフトに「スイッチ、オン」と伝わります。div で一から作ると、これらを全部自分で書くことになります。',
    '見た目は CSS で作ります。appearance: none でブラウザの四角い印を消し、入れ物を細長い角丸に、::before で白い丸を描きます。:checked のときに色を変え、丸を transform で右へ動かせば完成です。JavaScript は「切り替わったら保存する」部分だけに使います。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<label class="switch-row">
  <span>新着メッセージ</span>
  <input type="checkbox" role="switch" class="switch" name="notify-message" checked>
</label>
<label class="switch-row">
  <span>セールのお知らせ</span>
  <input type="checkbox" role="switch" class="switch" name="notify-sale">
</label>
<p class="switch-status" role="status"></p>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.switch-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 56px; /* 行全体が押せる */
  cursor: pointer;
}
.switch {
  --w: {{w}};
  --h: calc(var(--w) * 0.6);
  position: relative;
  width: var(--w);
  height: var(--h);
  margin: 0;
  border-radius: 999px;
  background: #c9c7c0;
  appearance: none; /* ブラウザの四角い印を消す */
  cursor: pointer;
  transition: background-color {{dur}} ease-out;
}
/* 白い丸（つまみ） */
.switch::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: calc(var(--h) - 6px);
  height: calc(var(--h) - 6px);
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.3);
  transition: transform {{dur}} ease-out;
}
.switch:checked { background: {{on}}; }
.switch:checked::before { transform: translateX(calc(var(--w) - var(--h))); }
.switch:focus-visible { outline: 3px solid #4f73d9; outline-offset: 2px; }

@media (prefers-reduced-motion: reduce) {
  .switch, .switch::before { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const status = document.querySelector('.switch-status');

document.querySelectorAll('.switch').forEach((sw) => {
  sw.addEventListener('change', async () => {
    const label = sw.closest('label').textContent.trim();
    try {
      // 押した瞬間に保存する（保存ボタンは置かない）
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [sw.name]: sw.checked }),
      });
      if (!res.ok) throw new Error(res.status); // 通信できてもサーバーが失敗を返したとき
      status.textContent = \`「\${label}」を\${sw.checked ? 'オン' : 'オフ'}にしました\`;
    } catch {
      sw.checked = !sw.checked; // 失敗したら元に戻して知らせる
      status.textContent = '保存できませんでした。通信状態を確かめてください';
    }
  });
});`,
    },
  ],
  tune: [
    { key: 'w', label: 'スイッチの幅', min: 32, max: 64, step: 2, value: 44, unit: 'px' },
    { key: 'dur', label: '切り替えの速さ', min: 0.05, max: 0.5, step: 0.05, value: 0.2, unit: 's' },
    { key: 'on', type: 'color', label: 'オンの色', value: '#2e9d5e' },
  ],
  cautions: [
    '色だけでオン・オフを見分けさせないでください。丸の位置（右がオン）は広く共有された約束なので左右を逆にしないこと、色の見分けにくい人のために、オンの色と灰色の明るさに差をつけることが大切です。',
    'スイッチだけでなく、項目名を含めた行全体を押せるようにします。スイッチの見た目は小さくても、押せる範囲は高さ44px以上にします。',
    '保存に失敗したときは、スイッチを元の位置に戻し、その理由を表示します。見た目だけオンのまま実際は保存されていない、という状態がいちばん困ります。',
    'role="switch" を付けないと、読み上げソフトには「チェックボックス、チェックあり」と伝わります。動きに問題はありませんが、スイッチとして伝えたいなら付けます。',
  ],
  similar: [
    { slug: 'segmented-control', diff: 'セグメントコントロールは2〜5個の選択肢から1つを選ぶ横並びのボタンです。オン・オフではなく「週・月・年」のような並列の選択肢ならこちらです。' },
    { slug: 'chips', diff: 'チップは絞り込みの条件を1つずつオン・オフする小さな札です。設定ではなく「一覧を絞る条件」を複数選ぶときに使います。' },
    { slug: 'tab-indicator', book: 'ugoki', diff: 'タブは表示する中身そのものを切り替える部品です。スイッチは設定の状態を切り替え、画面の中身は変えません。' },
  ],
  faq: [
    {
      q: 'トグルスイッチとチェックボックスはどう使い分けますか？',
      a: '「押した瞬間に効くか」で分けます。押すとすぐ設定が変わるならトグルスイッチ、フォームの中で印を付けておき「送信する」でまとめて反映するならチェックボックスです。迷ったら、横に保存ボタンがあるかを考えてください。保存ボタンがあるならチェックボックスです。',
    },
    {
      q: 'HTMLにスイッチ専用の部品はありますか？',
      a: 'Safari では <input type="checkbox" switch> と書くと標準のスイッチの見た目になりますが、ほかのブラウザでは普通のチェックボックスのままです。今は role="switch" を付けたチェックボックスを CSS で整える方法が、どのブラウザでも同じように動いて確実です。',
    },
    {
      q: 'スイッチの横に「オン」「オフ」と文字を書いた方がいいですか？',
      a: '基本は不要で、「何をオンにするか」が分かる項目名の方が大切です。ただし色の見分けがつきにくい配色や、オン・オフの取り違えが大きな問題になる場面（公開・非公開など）では、状態を文字でも添えると安心です。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
