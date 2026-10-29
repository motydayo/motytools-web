# motytools.com 記事点検の報告（2026年10月）

点検日: 2026-10-29。点検だけで、記事のファイルは書き換えていません。

## 結論（3行）

1. 全346本を1本ずつ読み、450件の直したい点を見つけました（重い7件・中くらい101件・軽い342件）。計算例はほぼすべて検算して合っており、記事の土台はしっかりしています。
2. 先に直すべきは、法律や決まりに触れる書き方です（月謝のカード手数料の上乗せ、「ネットの最安値」の範囲、動物を譲るときの届出、処分情報の残し方と転載）。あわせて、そのまま貼ると止まるコード（スライダー）と、自社アプリと分かりにくい紹介文も先に直します。
3. 次に、アプリの紹介ページに無い機能を書いている所、税金の説明の抜けを直します。そのあと、ほぼ同じ中身の記事の統合と、長すぎる題名・同じ型の説明文の手直しを進めると、検索結果での見え方が良くなります。

## 点検のしかた

- 対象: 使い方ガイド122本、動きの図鑑32本と英語版32本、UI部品の図鑑30本と英語版30本、資料レイアウトの図鑑100本。資料レイアウトの図鑑のうち53本は公開日がまだ来ていませんが、これから公開されるので一緒に読みました。
- 1本ずつ全文を読みました。照らし合わせたのは、記事の中のほかの箇所、アプリの台帳と紹介ページ、記事ごとの設計メモ、執筆ルール、公的な出典です。計算例は検算しました。
- 題名・説明文の長さと重複、記事の中のリンク切れは、手元でサイトを組み立てて機械で調べました。
- **本番サイト（https://motytools.com/）は、この点検の環境からは開けませんでした**（ネットのつなぎ先が制限されているため）。そのため、本番の表示と手元の写しの差は確かめていません。官公庁やアプリストアのページも直接は開けず、ウェブ検索の結果で確かめました。確かめきれなかったものは「要確認」としています。
- 安全マップ（/anzen/ で始まるページ）は別の仕組みで配信されていて、手元の写しに含まれません。そのため、記事からのリンクが生きているかは確かめていません（要確認）。それ以外の記事の中のリンクに、切れているものはありませんでした。
- 広告: サイト全体で Google の自動広告を使っています。記事の中に紹介料が入るリンクや「PR」が要るリンクは、1本もありませんでした。
- 細かな1件ずつの記録は `findings.json` にあります（記事・場所・根拠・直し方・確かさ）。

## 直す順の上位20件

| 順 | 重さ | 記事 | 何が問題か | 直し方 | 確かさ |
|---|---|---|---|---|---|
| 1 | 高 | [月謝の集金方法](https://motytools.com/guide/gessha-shukin-houhou/) | カード決済の手数料を「保護者に上乗せする方法もある」と書いています。カード払いの人だけに手数料を上乗せすることは、多くのカード会社の加盟店規約で禁じられています（国民生活センターの説明）。 | 上乗せの案を消し、「手数料は月謝全体の値決めの中で考える」書き方にする。 | 確実 |
| 2 | 高 | [バーコードで最安値アプリ比較](https://motytools.com/guide/barcode-saiyasune-app/) ほか2本（ドラッグストアの価格比較・単価比較のFAQ） | 説明文と冒頭で「ネットの最安値がわかる」と書いていますが、実際に比べるのは楽天市場とYahoo!ショッピングの本体価格だけです（同じ記事の121行目）。送料やほかの通販は含みません。範囲を書かずに「最安値」と言うと、景品表示法で実際より良く見せる表示と受け取られるおそれがあります。 | 「楽天市場とYahoo!ショッピングの中で、本体価格がいちばん安い店」と範囲を書く。題名・説明文・FAQもそろえる。 | 要確認 |
| 3 | 高 | [爬虫類の譲渡と引き継ぎ](https://motytools.com/guide/hachurui-joto-hikitsugi/)、[爬虫類のSNS](https://motytools.com/guide/hachurui-sns/) | 動物愛護管理法の説明が、営利の「第一種動物取扱業」だけです。営利でなくても、一定数以上（爬虫類は10頭以上など）を譲るときに届出が要る「第二種動物取扱業」が抜けています。記事は「無償譲渡の扱いは書かれていない」と書いています。 | 環境省の第二種動物取扱業の案内を出典に、届出が要る条件を1段落足す。 | 確実 |
| 4 | 高 | [食中毒の情報の調べ方](https://motytools.com/guide/shokuchudoku-joho/)、[行政処分の調べ方](https://motytools.com/guide/gyosei-shobun-shirabekata/) | 自治体が掲載期間を決めて消す食中毒の処分記録を、アプリでは「期間後も店名つきで残す」と書いています。残す期間の上限がありません。行政処分の記事は逆に「掲載期間が過ぎた処分は載らない」と書いていて、2本の説明が食い違っています。 | アプリでの残し方（いつまで・どう表示するか）を1つに決め、2本の記事を同じ説明にそろえる。 | 要確認 |
| 5 | 高 | [行政処分の調べ方](https://motytools.com/guide/gyosei-shobun-shirabekata/) | 国の検索サイトの「無断で転載・改変はできない」を紹介した同じ記事で、アプリが同じ処分を要約して載せると書いています。転載してよい根拠が記事にも紹介ページにもありません。 | 利用条件を公開元で確かめ、根拠（許可や利用規約の該当箇所）を書くか、要約の説明を改める。 | 要確認 |
| 6 | 高 | [スライダー（UI部品）](https://motytools.com/ui/range-slider/)、英語版 | コード例が、どこにも定義されていない命令（updateResults）を呼んでいます。読み込み直後に必ず動く部分なので、そのまま貼ると止まります。 | 例として短い関数を足すか、呼び出しを「ここで絞り込みを更新」というコメントにする。 | 確実 |
| 7 | 中 | [TikTokのレシピ保存](https://motytools.com/guide/tiktok-recipe-hozon/)・[YouTubeのレシピ保存](https://motytools.com/guide/youtube-recipe-hozon/)、ピッと期限の7本のFAQ | 前の2本は「motytoolsが作っている」とだけあり、「このサイトの運営者」「自社」という言葉が記事に1回もありません。ピッと期限の7本は、FAQの答えが「ピッと期限というiPhoneアプリでは」と、他人の物のような書き方です。FAQは検索結果に単独で出ることがあるので、ステマ規制の点で弱くなります。 | 「このサイトの運営者が作っているアプリ」と明記する。FAQの答えにも「自社アプリの」を入れる。 | 確実 |
| 8 | 中 | [ハンドメイド販売サイト比較](https://motytools.com/guide/handmade-hanbai-site-hikaku/) ほか7本、[レシピ保存アプリ比較](https://motytools.com/guide/recipe-hozon-app-hikaku/) ほか5本、[日用品のまとめ買い](https://motytools.com/guide/nichiyouhin-matomegai/)・[単価比較](https://motytools.com/guide/tanka-hikaku-keisan/) | アプリの紹介ページと台帳に無い機能や無料の範囲を、できることとして書いています（「販路は自分で追加する分だけ2件まで」「レシピを書き出す」「本文を貼り付けて取り込む」「セット品は1個あたりの値段も出す」など）。比較表で自社の長所として載せている物もあります。 | アプリで確かめ、本当にある機能は紹介ページにも書く。無ければ記事から消す。 | 要確認 |
| 9 | 中 | [ハンドメイドの確定申告はいくらから](https://motytools.com/guide/handmade-kakuteishinkoku-ikurakara/) | 学生の子が稼いだときの親の控除で、令和7年分から始まった「特定親族特別控除」に触れていません。そのため、基準を少し超えると控除が全部無くなるように読めます。 | 国税庁の案内を出典に、控除が段階的に減る仕組みを書き足す。 | 確実 |
| 10 | 中 | [月謝値上げのお知らせ](https://motytools.com/guide/gessha-neage-oshirase/)、[ピアノの月謝の相場](https://motytools.com/guide/piano-gessha-souba/) | 消費税の免税を「売上1,000万円以下」だけで説明しています。インボイスに登録している人は、売上に関係なく消費税を納める点が抜けています。 | 「インボイスの登録をしている人は売上にかかわらず課税事業者」と1文足す。 | 確実 |
| 11 | 中 | [不動産所得の経費](https://motytools.com/guide/fudousan-shotoku-keihi/) | 10万円未満の備品を消耗品にする扱いと、20万円未満を3年で経費にする特例を、条件なしで書いています。2022年4月以後に取得して貸付けに使う資産は、原則として対象外になりました（主要な業務として行う貸付けは除く）。 | 国税庁の説明で確かめ、対象外になる場合を書き足すか、税務署・税理士への確認をすすめる。 | 要確認 |
| 12 | 中 | [冷凍保存の期限](https://motytools.com/guide/reitou-hozon-kigen/)・[余り野菜レシピ](https://motytools.com/guide/amari-yasai-recipe/)、[調味料の開封後の期限](https://motytools.com/guide/chomiryo-kaifugo-kigen/)、[買いすぎ防止](https://motytools.com/guide/kaisugi-boushi/) | 冷凍した野菜の目安が、記事の中と記事どうしで1週間・3週間・1か月と食い違っています。しょうゆ（ふつうの容器）の開封後の目安「冷蔵で約2か月」は、メーカーの回答を引いた記事の「約1か月」と合いません（要確認）。牛乳の使い切り策に冷凍を挙げていますが、農林水産省は牛乳を家庭での冷凍に向かない食品に挙げています。 | 目安を1つの出典にそろえる。しょうゆはメーカーの公式回答で確かめる。牛乳の冷凍の案は消す。 | 確実（しょうゆは要確認） |
| 13 | 中 | 資料レイアウトの図鑑: [ROI](https://motytools.com/shiryo/roi/)・[主張と根拠](https://motytools.com/shiryo/claim-evidence/)・[KPI一覧](https://motytools.com/shiryo/kpi-dashboard/)・[ガントチャート](https://motytools.com/shiryo/gantt/)・[問いかけ](https://motytools.com/shiryo/question/)・[目標と実績](https://motytools.com/shiryo/target-actual/) | 計算や筋の誤りがあります。ROI は自分で示した式どおりなら約15.4%なのに20%と書いています。「約2倍にできる」は記事の数字で計算すると約1.2倍です。KPI一覧では、解約率の注意が逆の意味になっています。ガントチャートは「テストは開発が終わってから」と書きながら、見本では予定が重なっています。問いかけの型は「はい・いいえで終わらない問いに」と決めながら、見本がはい・いいえで答えられる問いです。目標と実績は、2本目の目盛りをそろえる手順が抜けています。 | 各記事の数字・見本・説明を1つにそろえる（直し方は findings.json に1件ずつ）。 | 確実 |
| 14 | 中 | UI部品の図鑑: [ポップアップ画面](https://motytools.com/ui/modal/)・[入力の候補](https://motytools.com/ui/autocomplete/)・[サイドバー](https://motytools.com/ui/sidebar/)、動きの図鑑: [流れる文字](https://motytools.com/ugoki/marquee/)、英語版: [Cookieの同意](https://motytools.com/en/ui/cookie-banner/) | コード例に不具合があります。ポップアップ画面は、開き直してEscで閉じると前回の「予約する」の処理がもう一度動きます。入力の候補は、選んだあと文字を足すと見えない候補が決まったり、止まったりします。サイドバーは、スマホ幅でメニューが消えたままになります。流れる文字は、記事が求める停止ボタンがコードにありません。Cookieの同意は、一度許可したあとに取り消しても、読み込み済みの分が止まりません。 | 各コードに数行足す（直し方は findings.json に1件ずつ）。 | 確実 |
| 15 | 中 | [ポップオーバー](https://motytools.com/ui/popover/) と英語版、英語版の[パララックス](https://motytools.com/en/motion/parallax/)、[ページ遷移](https://motytools.com/ugoki/page-transition/)、[パンくず](https://motytools.com/ui/breadcrumb/) | ブラウザの対応の書き方が古くなっています。ポップオーバーの位置合わせは、2026年1月から主要ブラウザすべてで使えます。スクロールに合わせた動き（animation-timeline）は Safari 26 でも使えます。スマホの検索結果のパンくずは、2025年1月から表示されなくなりました。 | 2026年10月時点の対応状況に書き直し、確かめた日を添える。 | 確実 |
| 16 | 中 | [料金表（UI部品）](https://motytools.com/ui/pricing-table/)、[料金表（資料）](https://motytools.com/shiryo/pricing/)、[導入事例カード](https://motytools.com/shiryo/case-card/)、[引用](https://motytools.com/shiryo/quote/) | 読者に勧める作り方の中に、法律の面で危ういものがあります。「税込か税抜かもはっきり書く」は、消費者向けに義務の総額表示と食い違います。「いちばん人気」の札は、裏付けが要ることに触れていません。資料の見本の架空のサービス名が、実在の予約アプリと同じ名前です。事例カードのFAQは、社名を伏せれば数字は許可なしで載せられるように読めます。引用のFAQは、著作権法の引用の条件（自分の文が主・引用部分を区別）が抜けています。 | 総額表示・No.1表示の注意を1文ずつ足す。見本の名前を実在しない名前に変える。FAQを同じ記事の注意書きにそろえる。 | 確実 |
| 17 | 中 | [不審者情報のメール](https://motytools.com/guide/fushinsha-joho-mail/)、[犯罪発生マップ](https://motytools.com/guide/hanzai-hassei-map/) | 県の一覧で9県が「確認中」のままです。このうち5県は、サイト内の別の記事に配信や地図があると書かれています。犯罪発生マップの一覧には大阪府がありません。 | 確認中の県を調べて埋める。大阪府を足す。 | 確実（大阪は要確認） |
| 18 | 中 | ほぼ同じ中身の記事の組（下の一覧） | 同じ例・同じ表・同じ段落が2本以上に出ています。読者には同じ話の繰り返しに見え、検索でも1本に絞られやすくなります。 | 片方に統合し、残す記事から文中リンクを張る（新しい記事は作らない）。 | 確実 |
| 19 | 中 | 資料レイアウトの図鑑の題名（公開済み47本のうち40本）、英語版の図鑑の題名（62本のうち31本） | 日本語の題名は検索結果で全角30〜35字ほどで切れます。資料の図鑑は多くが36〜57字あり、末尾の【PowerPoint・Googleスライド】などが見えません。英語版は、末尾の「 \| motytools」を含めると60字を超えるものが31本、除いても超えるものが19本あります。 | 検索される言葉を前に置き、日本語は全角35字、英語は60字以内に縮める（案は findings.json に1件ずつ）。 | 確実 |
| 20 | 中 | 図鑑全体の説明文 | 説明文が同じ型にそろいすぎています。UI部品の図鑑は30本中28本が「〜を触れる見本で解説。」で始まります。資料の図鑑は100本とも「…AIへの指示文とHTMLまでまとめました」で終わります。検索結果で並ぶと見分けがつきません。 | 1本ごとに、その記事でしか分からないこと（数字・場面・違い）を前半に書く。 | 確実 |

### 18. ほぼ同じ中身の記事の組

| 統合先の候補 | 重なる記事 | 重なっている所 |
|---|---|---|
| [handmade-genka-keisan](https://motytools.com/guide/handmade-genka-keisan/) | [accessory-genka-keisan](https://motytools.com/guide/accessory-genka-keisan/) | 同じピアスの原価の表。部品の単価も38円と42.18円で食い違う |
| [handmade-nedan-kimekata](https://motytools.com/guide/handmade-nedan-kimekata/) | [handmade-rieki-ritsu](https://motytools.com/guide/handmade-rieki-ritsu/) | 同じ1,880円のピアスの例 |
| [instagram-recipe-hozon](https://motytools.com/guide/instagram-recipe-hozon/) | [instagram-hozon-seiri](https://motytools.com/guide/instagram-hozon-seiri/) | 保存の手順と探せない理由。前者は本文約1,600字と短い |
| [yachin-kanri-app-hikaku](https://motytools.com/guide/yachin-kanri-app-hikaku/) | [yachin-kanri-excel-app](https://motytools.com/guide/yachin-kanri-excel-app/) | 後者は約1,600字で、大半がアプリの操作説明 |
| [yachin-kanrihyo-template](https://motytools.com/guide/yachin-kanrihyo-template/) | [yachin-nyukin-kakunin](https://motytools.com/guide/yachin-nyukin-kakunin/) | 入金確認表の列と色付けの設定 |
| [rolling-stock-kanri](https://motytools.com/guide/rolling-stock-kanri/) | [hijoushoku-kigen-kanri](https://motytools.com/guide/hijoushoku-kigen-kanri/) | 期限一覧の表と年月表示の説明 |
| [amarimono-recipe-kantan](https://motytools.com/guide/amarimono-recipe-kantan/) | [amari-yasai-recipe](https://motytools.com/guide/amari-yasai-recipe/)・[arumono-ryori-kotsu](https://motytools.com/guide/arumono-ryori-kotsu/)・[amarimono-gohan-recipe](https://motytools.com/guide/amarimono-gohan-recipe/) | 汁物・炒め物の分量表、チャーハン |
| [kondate-app-hikaku](https://motytools.com/guide/kondate-app-hikaku/) | [reizoko-amarimono-app](https://motytools.com/guide/reizoko-amarimono-app/) | 他社アプリの紹介文 |
| [reizoko-zaiko-kanri](https://motytools.com/guide/reizoko-zaiko-kanri/) | [kaisugi-boushi](https://motytools.com/guide/kaisugi-boushi/) | 在庫を減らす習慣 |
| [memo-shukan](https://motytools.com/guide/memo-shukan/) | [memo-wasure-boushi](https://motytools.com/guide/memo-wasure-boushi/) | 置き場所を1つ・週1回の見直し |
| [rakuten-yahoo-hikaku](https://motytools.com/guide/rakuten-yahoo-hikaku/) | [rakuten-saiyasune](https://motytools.com/guide/rakuten-saiyasune/) | 並べ替え・送料・ポイントの手順 |
| [drugstore-kakaku-hikaku](https://motytools.com/guide/drugstore-kakaku-hikaku/) | [nichiyouhin-matomegai](https://motytools.com/guide/nichiyouhin-matomegai/) | 店の安さのタイプ分けの表 |
| [barcode-saiyasune-app](https://motytools.com/guide/barcode-saiyasune-app/) | [kakaku-hikaku-site](https://motytools.com/guide/kakaku-hikaku-site/) | 価格比較アプリの説明 |
| [tsugakuro-anzen-tenken](https://motytools.com/guide/tsugakuro-anzen-tenken/) | [kodomo-bouhan-tsugakuro](https://motytools.com/guide/kodomo-bouhan-tsugakuro/) | 子ども110番・防犯ブザーの説明 |
| [hachurui-shiiku-kiroku-app](https://motytools.com/guide/hachurui-shiiku-kiroku-app/) | [hachurui-shiiku-note](https://motytools.com/guide/hachurui-shiiku-note/) | 紙・表計算・アプリの比較 |
| 資料: [dependency](https://motytools.com/shiryo/dependency/) | [branch-merge](https://motytools.com/shiryo/branch-merge/) | 「クリティカルパスとは」のFAQと別名 |
| 資料: [matrix](https://motytools.com/shiryo/matrix/) | [priority](https://motytools.com/shiryo/priority/) | どちらも「効果と手間」の見本 |
| 資料: [recommend](https://motytools.com/shiryo/recommend/) | [pricing](https://motytools.com/shiryo/pricing/)・[option-table](https://motytools.com/shiryo/option-table/) | 3案を並べて1つに札を付ける同じ見た目 |

ほかに、楽天のポイント（SPU）の同じ段落が4本に、消費者庁の同じ調査の数字が4本に出ています。片方だけに残し、もう片方からはリンクにすると読みやすくなります。


## 種類ごとの件数

| 種類 | 件数 |
|---|---|
| 誤り | 192 |
| 古い | 26 |
| 広告リンク | 21 |
| 日本語 | 59 |
| 薄い重複 | 56 |
| 法令リスク | 23 |
| 検索の見え方 | 73 |

重さ: 高 7件・中 101件・低 342件。うち「要確認」（この点検では確かめきれず、公式の出典や実機で確かめてから直すもの）は 116件。

## 記事ごとの一覧

「高・中・低」はその記事の指摘の件数です。0件の記事も、読んで確かめた点を「ひとこと」に残しています。似た問題を1本にまとめて記録した場合は、ほかの記事の件数には入っていません（ひとことに書いてあります）。

### 使い方ガイド（/guide/）　122本

| 記事 | アプリ | 高 | 中 | 低 | ひとこと |
|---|---|---|---|---|---|
| [accessory-genka-keisan](https://motytools.com/guide/accessory-genka-keisan/) | つくログ | 0 | 1 | 0 | 計算例（106.6円・1,680円・1,750円等）は検算で正しい。原価計算記事とほぼ同じ例で重複 |
| [amari-yasai-recipe](https://motytools.com/guide/amari-yasai-recipe/) | あるものレシピ | 0 | 1 | 1 | 炒め物の手順の順番が逆。分量表が他2本と重複。冷凍の目安は農水省の出典つきで断定なし |
| [amarimono-gohan-recipe](https://motytools.com/guide/amarimono-gohan-recipe/) | あるものレシピ | 0 | 2 | 1 | FAQ『まとまりやすく』が逆の意味。チャーハン分量がkantanと不一致。セレウス菌は出典どおり |
| [amarimono-pasta](https://motytools.com/guide/amarimono-pasta/) | あるものレシピ | 0 | 0 | 2 | ゆで汁の説明が前後で矛盾、kantanへのリンク文言がずれ。分量・塩1%は検算済み |
| [amarimono-recipe-kantan](https://motytools.com/guide/amarimono-recipe-kantan/) | あるものレシピ | 0 | 0 | 1 | FAQの炒め物の味付けが本文表と不一致。75℃1分・自社明記・リンク先は問題なし |
| [arumono-ryori-kotsu](https://motytools.com/guide/arumono-ryori-kotsu/) | あるものレシピ | 0 | 1 | 2 | 『調味料21品』はLPに無い。主役の選び方がkondate-reizokoと重複、食感の例が不自然 |
| [ballpython-esa-hindo](https://motytools.com/guide/ballpython-esa-hindo/) | うちの爬虫類 | 0 | 1 | 1 | 記録例の1,240gの成体にホッパーは餌サイズの基準と矛盾。間隔の検算・受診案内はよい |
| [barcode-saiyasune-app](https://motytools.com/guide/barcode-saiyasune-app/) | ピッと最安 | 1 | 1 | 2 | 「ネットの最安値」の範囲が不明確、表とdescriptionが不一致。自社明記・並び順はOK |
| [bouhan-app-hikaku](https://motytools.com/guide/bouhan-app-hikaku/) | まちの安全マップ | 0 | 0 | 0 | 問題なし。比較表の確認日・自社を最後・弱点の明記・県警アプリの説明を確認 |
| [captio-kawari](https://motytools.com/guide/captio-kawari/) | メモびゅん | 0 | 0 | 2 | 料金表記は正しい。出典リンク無し、ショートカットの通数無制限が言い過ぎ |
| [chintai-shushi-keisan](https://motytools.com/guide/chintai-shushi-keisan/) | 大家ノート | 0 | 0 | 0 | 問題なし。ローン返済額・利子・元本、空室と修繕の4ケース、所得と手残りの差、簡便法31年を検算 |
| [chomiryo-kaifugo-kigen](https://motytools.com/guide/chomiryo-kaifugo-kigen/) | ピッと期限 | 0 | 2 | 1 | しょうゆ通常容器『約2か月』は二次情報の約1か月と食い違い要確認。FAQに自社明記なし。日付計算は正しい |
| [creema-tesuryo-keisan](https://motytools.com/guide/creema-tesuryo-keisan/) | つくログ | 0 | 0 | 2 | 改定前後の表と早見表を全行検算し正しい。確認日あり。titleが36字と長め、出典がhttp |
| [drugstore-kakaku-hikaku](https://motytools.com/guide/drugstore-kakaku-hikaku/) | ピッと最安 | 0 | 1 | 4 | 計算は正しい。出典リンク無し、トクバイの古い数字、nichiyouhinと重複 |
| [fudousan-shotoku-chobo](https://motytools.com/guide/fudousan-shotoku-chobo/) | 大家ノート | 0 | 0 | 2 | 青色控除が令和9年分の改正に未対応。比較表が確定申告記事と重複。SUMIF例は検算一致 |
| [fudousan-shotoku-keihi](https://motytools.com/guide/fudousan-shotoku-keihi/) | 大家ノート | 0 | 1 | 0 | 10万円未満・一括償却に2022年の貸付資産除外が無い。修繕費の基準・保存期間は正しい |
| [furikae-lesson-rule](https://motytools.com/guide/furikae-lesson-rule/) | レッスン手帳 | 0 | 0 | 0 | 問題なし。特定継続的役務提供の条件（5万円・2か月）とアプリの手順を確認 |
| [furikae-mail-bunrei](https://motytools.com/guide/furikae-mail-bunrei/) | レッスン手帳 | 0 | 0 | 1 | アプリの手順の段落が振替ルール記事とほぼ同文。文例は自作で問題なし |
| [fushinsha-joho-mail](https://motytools.com/guide/fushinsha-joho-mail/) | まちの安全マップ | 0 | 1 | 1 | 県警メール一覧で9県が確認中のまま（秋田・高知などは他記事で判明）。千葉の出典が市のページ |
| [fushinsha-joho-map](https://motytools.com/guide/fushinsha-joho-map/) | まちの安全マップ | 0 | 1 | 1 | 27都道府県の内訳がLP・設計書に無い。県警マップ表が犯罪発生マップ記事とほぼ重複 |
| [genka-shokyaku-fudousan](https://motytools.com/guide/genka-shokyaku-fudousan/) | 大家ノート | 0 | 0 | 0 | 問題なし。耐用年数表・償却率、簡便法3例、例2の15年目179,999円とツールの値を検算 |
| [gessha-hiwari-keisan](https://motytools.com/guide/gessha-hiwari-keisan/) | レッスン手帳 | 0 | 0 | 1 | ツールの「初日を含める」を案内せず1を足すと説明。曜日と日割り3例は検算一致 |
| [gessha-kakuteishinkoku](https://motytools.com/guide/gessha-kakuteishinkoku/) | レッスン手帳 | 0 | 0 | 1 | 青色控除が令和9年分の改正に未対応。20万円基準、基本通達36-8、按分の説明は正しい |
| [gessha-kanri-app](https://motytools.com/guide/gessha-kanri-app/) | レッスン手帳 | 0 | 0 | 2 | 比較表の五十音順が誤り、「最も大きいのは振替」の断定。手数料5,600円は検算一致 |
| [gessha-kanrihyo-excel](https://motytools.com/guide/gessha-kanrihyo-excel/) | レッスン手帳 | 0 | 0 | 1 | 言い回し1件のみ。条件付き書式と合計の式をサンプル3人で検算し一致 |
| [gessha-mibarai-saisoku](https://motytools.com/guide/gessha-mibarai-saisoku/) | レッスン手帳 | 0 | 0 | 1 | 文例の言い回し1件。少額訴訟60万円・年10回、法テラスの番号と受付時間は正しい |
| [gessha-neage-oshirase](https://motytools.com/guide/gessha-neage-oshirase/) | レッスン手帳 | 0 | 1 | 2 | 免税の説明にインボイスの例外が無い。文例の「突然」のお詫びが本文と矛盾 |
| [gessha-shukin-houhou](https://motytools.com/guide/gessha-shukin-houhou/) | レッスン手帳 | 1 | 0 | 0 | カード手数料を保護者に上乗せする案内が加盟店規約に触れるおそれ。手数料表の全セルを検算し一致 |
| [gyosei-shobun-shirabekata](https://motytools.com/guide/gyosei-shobun-shirabekata/) | まちの安全マップ | 1 | 1 | 0 | 国交省サイトの転載禁止を紹介しつつアプリが要約掲載と書く。掲載期間の扱いが食中毒記事と逆 |
| [hachurui-joto-hikitsugi](https://motytools.com/guide/hachurui-joto-hikitsugi/) | うちの爬虫類 | 1 | 0 | 1 | 動物愛護管理法の遺棄罰則・特定動物は正確。第二種動物取扱業（非営利の譲渡）の説明が欠落 |
| [hachurui-shiiku-kiroku-app](https://motytools.com/guide/hachurui-shiiku-kiroku-app/) | うちの爬虫類 | 0 | 0 | 2 | 自社の温湿度記録を設計書に反して比較表に記載。他社の確認日・自社最後は守れている |
| [hachurui-shiiku-note](https://motytools.com/guide/hachurui-shiiku-note/) | うちの爬虫類 | 0 | 1 | 1 | 紙・エクセル・アプリの比較が記録アプリ比較記事と重複。公開範囲の選択などLPに無い仕様 |
| [hachurui-sns](https://motytools.com/guide/hachurui-sns/) | うちの爬虫類 | 0 | 0 | 0 | 問題なし（第二種動物取扱業の欠落は譲渡記事の指摘に含めた）。通報理由はガイドラインと一致 |
| [hachurui-taiju-sokutei](https://motytools.com/guide/hachurui-taiju-sokutei/) | うちの爬虫類 | 0 | 0 | 1 | 最小単位の%表・硬貨の重さを検算し正しい。体重記事とアプリ紹介文・手順が重複 |
| [handmade-genka-keisan](https://motytools.com/guide/handmade-genka-keisan/) | つくログ | 0 | 0 | 0 | 問題なし。42.18円・4.93円・112.96円を検算、最終仕入原価法と自社明記を確認 |
| [handmade-hanbai-site-hikaku](https://motytools.com/guide/handmade-hanbai-site-hikaku/) | つくログ | 0 | 1 | 0 | 4販路の手取り表・境目・イベント31.7%は検算で正しい。無料の販路数がLPと違う |
| [handmade-kakuteishinkoku-ikurakara](https://motytools.com/guide/handmade-kakuteishinkoku-ikurakara/) | つくログ | 0 | 1 | 1 | 20万円基準・58万/62万円・計算例は正しい。学生の欄で特定親族特別控除が抜けている |
| [handmade-keihi](https://motytools.com/guide/handmade-keihi/) | つくログ | 0 | 0 | 2 | 按分・売上原価80,000円は正しい。少額減価償却の旧基準が抜け、計算例が確定申告記事と重複 |
| [handmade-nedan-kimekata](https://motytools.com/guide/handmade-nedan-kimekata/) | つくログ | 0 | 0 | 0 | 問題なし。1,880円・倍率表・販路別表・BASE73円を検算、確認日と自社明記あり |
| [handmade-rieki-ritsu](https://motytools.com/guide/handmade-rieki-ritsu/) | つくログ | 0 | 1 | 1 | 利益率・時給・13,320円を検算し正しい。値段の決め方と同じ例で重複、:31の指示語が不明確 |
| [handmade-tanaoroshi](https://motytools.com/guide/handmade-tanaoroshi/) | つくログ | 0 | 0 | 0 | 問題なし。5,397円・7,278円・112,722円を検算、評価方法と保存年数を確認 |
| [handmade-uriage-kanri](https://motytools.com/guide/handmade-uriage-kanri/) | つくログ | 0 | 0 | 1 | 数式と3行の例・月合計3,123円を検算し正しい。『8列』と表の13列が食い違う |
| [handmade-zaiko-kanri](https://motytools.com/guide/handmade-zaiko-kanri/) | つくログ | 0 | 0 | 2 | SUMIFS式は正しい。他社アプリの開発元に個人名、比較表の並びが五十音順でない |
| [hanzai-hassei-map](https://motytools.com/guide/hanzai-hassei-map/) | まちの安全マップ | 0 | 1 | 0 | 大阪府が一覧に無い（副語に大阪、他記事で府警の防犯マップに言及）。断定回避・出典はよい |
| [hijoushoku-kigen-kanri](https://motytools.com/guide/hijoushoku-kigen-kanri/) | ピッと期限 | 0 | 2 | 1 | rolling-stock-kanriと大きく重複、FAQに自社明記なし、リンク漏れ。寄付条件は出典どおり |
| [hikkoshi-chian-shirabekata](https://motytools.com/guide/hikkoshi-chian-shirabekata/) | まちの安全マップ | 0 | 0 | 1 | 人口あたり件数の例を検算し正しい。アプリの交通事故が2024年データであることが書かれていない |
| [idea-memo-app](https://motytools.com/guide/idea-memo-app/) | メモびゅん | 0 | 1 | 2 | 料金は正しい。Obsidianのパソコン欄が不正確、表とdescriptionが不一致 |
| [instagram-hozon-seiri](https://motytools.com/guide/instagram-hozon-seiri/) | レシピスクラップ | 0 | 1 | 1 | 手順は条件つき。インスタ保存記事と重複、共同コレクション250人に出典なし |
| [instagram-recipe-comment](https://motytools.com/guide/instagram-recipe-comment/) | レシピスクラップ | 0 | 0 | 1 | 冒頭で答え、推測を推測と明記。固定コメントの出典が2020年の報道 |
| [instagram-recipe-hozon](https://motytools.com/guide/instagram-recipe-hozon/) | レシピスクラップ | 0 | 1 | 1 | 自社明記・料金はLPどおり。本文が約1,600字と薄く操作の確認日なし、誘導ブロックが自社明記より前 |
| [instagram-recipe-insatsu](https://motytools.com/guide/instagram-recipe-insatsu/) | レシピスクラップ | 0 | 0 | 0 | 問題なし。ネットプリント料金・有効期限に確認日、印刷機能が無いことと著作権の注意を明記 |
| [instagram-recipe-kensaku](https://motytools.com/guide/instagram-recipe-kensaku/) | レシピスクラップ | 0 | 0 | 1 | 検索手順は条件つき。取り込み範囲の説明がコメント欄記事と食い違う |
| [iphone-memo-pc-kyoyu](https://motytools.com/guide/iphone-memo-pc-kyoyu/) | メモびゅん | 0 | 1 | 2 | 料金は正しい。Gmail同期の見出しに答えていない、Windowsの言い方、出典リンク無し |
| [iphone-onsei-memo](https://motytools.com/guide/iphone-onsei-memo/) | メモびゅん | 0 | 1 | 1 | 料金は正しい。句読点の表が英語コマンドの訳に見え日本語での結果が未確認、出典リンク無し |
| [jan-code-kensaku](https://motytools.com/guide/jan-code-kensaku/) | ピッと最安 | 0 | 0 | 1 | チェックデジット検算・桁の内訳・20〜29・書籍JANは正しい。GTINの言い方が要確認 |
| [jibun-ate-mail-furiwake](https://motytools.com/guide/jibun-ate-mail-furiwake/) | メモびゅん | 0 | 0 | 3 | 料金は正しい。署名変更がProかどうかLPと食い違う、出典リンク無し |
| [jibun-ate-mail-todokanai](https://motytools.com/guide/jibun-ate-mail-todokanai/) | メモびゅん | 0 | 2 | 0 | 料金は正しい。Outlook.comの迷惑メール保存日数が古い可能性、公式ヘルプへのリンク無し |
| [jibun-line-memo-hikaku](https://motytools.com/guide/jibun-line-memo-hikaku/) | メモびゅん | 0 | 0 | 1 | 料金は正しい。「確認できなかったので書かない」が3か所で薄い、リンク無し |
| [jibun-ni-mail-iphone](https://motytools.com/guide/jibun-ni-mail-iphone/) | メモびゅん | 0 | 0 | 2 | 料金は正しい。署名変更がPro機能の可能性、ショートカット・コピー送信が他記事と重複 |
| [jishu-kanri-ooya](https://motytools.com/guide/jishu-kanri-ooya/) | 大家ノート | 0 | 0 | 2 | LPに無い「カスタム期日」を記載。原状回復に2020年改正民法の説明が無い |
| [kaisugi-boushi](https://motytools.com/guide/kaisugi-boushi/) | ピッと期限 | 0 | 3 | 2 | 牛乳の冷凍提案が農水省の不向き食品と衝突。FAQに自社明記なし、調査の文言が他記事と不一致、リンク漏れ2件 |
| [kakaku-hikaku-site](https://motytools.com/guide/kakaku-hikaku-site/) | ピッと最安 | 0 | 1 | 1 | barcode-saiyasune-appと重複、箇条書きの常体混在。自社明記・測定値は他記事と一致 |
| [keiyaku-koushin-kanri](https://motytools.com/guide/keiyaku-koushin-kanri/) | 大家ノート | 0 | 0 | 1 | 定期借家の書面要件が2022年改正前の書き方。26・28・32条と最高裁判決は正しい |
| [kodomo-bouhan-tsugakuro](https://motytools.com/guide/kodomo-bouhan-tsugakuro/) | まちの安全マップ | 0 | 1 | 0 | いかのおすし等は正確。子ども110番・防犯ブザー・警視庁の助言が点検チェックリスト記事とほぼ同文 |
| [koegake-jian](https://motytools.com/guide/koegake-jian/) | まちの安全マップ | 0 | 0 | 1 | 個人を疑わない注意が丁寧。島根県警の例示をほぼそのまま列挙し引用の形になっていない |
| [kondate-app-hikaku](https://motytools.com/guide/kondate-app-hikaku/) | あるものレシピ | 0 | 1 | 0 | 他社紹介がreizoko-amarimono-appと重複、あるもんでに出典・確認日なし。自社は表の最後で公平 |
| [kondate-reizoko](https://motytools.com/guide/kondate-reizoko/) | あるものレシピ | 0 | 1 | 0 | 献立例Aが『記載の食材だけでそろう』と言いながら大葉が要る。手順と自社明記は問題なし |
| [koutsujiko-tashuu](https://motytools.com/guide/koutsujiko-tashuu/) | まちの安全マップ | 0 | 0 | 1 | 令和6年の件数・死者数は警察庁発表と一致。出典が犯罪被害者白書の孫引き |
| [leopa-dappi](https://motytools.com/guide/leopa-dappi/) | うちの爬虫類 | 0 | 0 | 1 | 日付の間隔計算を検算し正しい。受診目安あり。温湿度の記録を設計書に反して記載 |
| [leopa-esa-hindo](https://motytools.com/guide/leopa-esa-hindo/) | うちの爬虫類 | 0 | 0 | 1 | 頻度の幅はVCAと一致、増減率を検算し正しい。PetMDの出典リンク先が不一致の疑い |
| [leopa-esa-tabenai](https://motytools.com/guide/leopa-esa-tabenai/) | うちの爬虫類 | 0 | 0 | 1 | 断定を避け受診目安が具体的。温湿度記録・質問カテゴリなどLPに無い仕様を記載 |
| [leopa-jumyou](https://motytools.com/guide/leopa-jumyou/) | うちの爬虫類 | 0 | 0 | 1 | 寿命の幅と出典は妥当。自社機能を評価する一文が浮いている |
| [leopa-sanran](https://motytools.com/guide/leopa-sanran/) | うちの爬虫類 | 0 | 0 | 1 | 体重減少率を検算し正しい、卵詰まりの受診目安あり。『健康メモ』がLPに無い |
| [leopa-taiju-meyasu](https://motytools.com/guide/leopa-taiju-meyasu/) | うちの爬虫類 | 0 | 0 | 2 | 増減率の検算は正しい。2か月の体重下限12gの根拠が出典の表に見当たらない。0.1g入力はLPに無い |
| [lesson-kiroku-karte](https://motytools.com/guide/lesson-kiroku-karte/) | レッスン手帳 | 0 | 0 | 0 | 問題なし。5項目の例・続け方・PDFの説明とLP（PremiumでカルテPDF）の一致を確認 |
| [memo-mail-okuru-iphone](https://motytools.com/guide/memo-mail-okuru-iphone/) | メモびゅん | 0 | 0 | 2 | 料金は正しい。Markdown書き出しの対応iOS未記載、他記事と手順が重複 |
| [memo-shukan](https://motytools.com/guide/memo-shukan/) | メモびゅん | 0 | 1 | 0 | 料金は正しい。memo-wasure-boushiとほぼ同じ中身（統合候補） |
| [memo-wasure-boushi](https://motytools.com/guide/memo-wasure-boushi/) | メモびゅん | 0 | 1 | 1 | 料金は正しく、メモびゅんのリマインダー機能は書いていない。memo-shukanと重複、断定表現1件 |
| [minne-tesuryo-keisan](https://motytools.com/guide/minne-tesuryo-keisan/) | つくログ | 0 | 0 | 1 | 手数料表・振込額5,946円・早見表を全行検算。確認日・出典あり。検算1か所の小数表記違い |
| [net-tento-kakaku](https://motytools.com/guide/net-tento-kakaku/) | ピッと最安 | 0 | 1 | 1 | 計算例とSPU18.5倍は正しい。2019〜2020年の古い出典、ポイント段落の重複 |
| [net-yasuku-kau](https://motytools.com/guide/net-yasuku-kau/) | ピッと最安 | 0 | 1 | 0 | 計算・39ショップ・最終確認画面・相談先は正しい。他記事との段落重複 |
| [nichiyouhin-matomegai](https://motytools.com/guide/nichiyouhin-matomegai/) | ピッと最安 | 0 | 2 | 1 | 単価計算はすべて一致。LPに無い「1個あたり表示」、drugstoreと重複 |
| [nokorimono-remake](https://motytools.com/guide/nokorimono-remake/) | あるものレシピ | 0 | 0 | 1 | 芽胞の説明が不正確なだけ。ウェルシュ菌・再加熱75℃・保存の注意は出典どおりで断定なし |
| [obsidian-iphone-memo](https://motytools.com/guide/obsidian-iphone-memo/) | メモびゅん | 0 | 0 | 2 | 料金は正しい。導入と本文の食い違い、出典リンク無し・実機未確認 |
| [ooya-kakuteishinkoku](https://motytools.com/guide/ooya-kakuteishinkoku/) | 大家ノート | 0 | 0 | 1 | 青色控除が令和9年分の改正に未対応。2物件の集計表と20万円基準は正しい |
| [piano-gessha-souba](https://motytools.com/guide/piano-gessha-souba/) | レッスン手帳 | 0 | 0 | 2 | 消費税にインボイスの例外が無い、「全国平均」の言い切り。単価の計算は検算一致 |
| [rakuten-saiyasune](https://motytools.com/guide/rakuten-saiyasune/) | ピッと最安 | 0 | 1 | 1 | 計算例は正しい。rakuten-yahoo-hikakuとほぼ重複、LP外の機能記述 |
| [rakuten-yahoo-hikaku](https://motytools.com/guide/rakuten-yahoo-hikaku/) | ピッと最安 | 0 | 0 | 1 | 計算例とSPU18.5倍は正しい。SPUのエントリー数に確認日が無い |
| [recipe-bookmark](https://motytools.com/guide/recipe-bookmark/) | レシピスクラップ | 0 | 0 | 0 | 問題なし。クラシル30件・480円に確認日、Safari手順に出典（LP外機能は比較記事に記載） |
| [recipe-hozon-app-hikaku](https://motytools.com/guide/recipe-hozon-app-hikaku/) | レシピスクラップ | 0 | 1 | 0 | 他社5本に確認日・弱点も記載。自社の書き出し・手入力などLPに無い機能を比較表に書いている |
| [recipe-hozon-jougen](https://motytools.com/guide/recipe-hozon-jougen/) | レシピスクラップ | 0 | 0 | 0 | 問題なし。クラシル30件・ヘルプ編集日・クックパッド数字を出さない判断を確認、自社明記あり |
| [recipe-note-app](https://motytools.com/guide/recipe-note-app/) | レシピスクラップ | 0 | 0 | 0 | 問題なし（LP外の機能は app-hikaku に一括記載）。ひな形は自作、できないことを明記 |
| [recipe-screenshot-seiri](https://motytools.com/guide/recipe-screenshot-seiri/) | レシピスクラップ | 0 | 0 | 0 | 問題なし。写真アプリの手順に確認日、30日で完全削除、スクショ取り込み不可を明記 |
| [recipe-seiri-houhou](https://motytools.com/guide/recipe-seiri-houhou/) | レシピスクラップ | 0 | 0 | 0 | 問題なし。1週間の表は無料10件の範囲に収まる。分類の助言は他記事と一部重複 |
| [reitou-hozon-kigen](https://motytools.com/guide/reitou-hozon-kigen/) | ピッと期限 | 0 | 2 | 0 | 野菜の冷凍目安が記事内・記事間で1週間/3週間/1か月と不一致。FAQに自社明記なし。日付計算は正しい |
| [reizoko-amarigachi-shokuzai](https://motytools.com/guide/reizoko-amarigachi-shokuzai/) | あるものレシピ | 0 | 0 | 0 | 問題なし。パナソニック調査・ALIC・消費者庁の期限定義に出典あり、自社明記・リンク先あり |
| [reizoko-amarimono-app](https://motytools.com/guide/reizoko-amarimono-app/) | あるものレシピ | 0 | 0 | 2 | 検索型『実質1〜2つ』がzairyo記事と矛盾、『約〜以上』の重ね言葉。確認日・自社の弱み記載あり |
| [reizoko-kazoku-kyoyu](https://motytools.com/guide/reizoko-kazoku-kyoyu/) | ピッと期限 | 0 | 0 | 2 | 『一部だけ共有』と読める文。招待コードの桁・日数はLP外で要確認。比較表は五十音順で公平 |
| [reizoko-recipe-ai](https://motytools.com/guide/reizoko-recipe-ai/) | あるものレシピ | 0 | 0 | 3 | FAQ『問題ないことが多い』は安全面で言い過ぎ。塩の例の具700gが他記事とずれ、写真での聞き方が無い |
| [reizoko-zaiko-kanri](https://motytools.com/guide/reizoko-zaiko-kanri/) | ピッと期限 | 0 | 0 | 0 | 問題なし。食品ロス224万t・直接廃棄43%・収納7割は出典どおり、自社明記・比較表あり |
| [rimawari-keisan](https://motytools.com/guide/rimawari-keisan/) | 大家ノート | 0 | 0 | 0 | 問題なし。表面8.4%・7.56%、実質約5.68%を検算。アプリの定義の違いも明記 |
| [rolling-stock-kanri](https://motytools.com/guide/rolling-stock-kanri/) | ピッと期限 | 0 | 0 | 0 | 問題なし。備蓄量・水3L、36食・36L・月3食の計算を検算、自社明記とアフィリエイトの注記あり |
| [seito-kanri-kojin](https://motytools.com/guide/seito-kanri-kojin/) | レッスン手帳 | 0 | 0 | 2 | 数式例の列が項目表と合わない。項目・個人情報の段落が月謝管理表記事と重複 |
| [shokuchudoku-joho](https://motytools.com/guide/shokuchudoku-joho/) | まちの安全マップ | 1 | 0 | 2 | 食品衛生法69条・掲載期間の説明は正確。期間後も屋号つきで残す方針に保持期限が無く名誉面の懸念 |
| [shokuhin-loss-katei](https://motytools.com/guide/shokuhin-loss-katei/) | ピッと期限 | 0 | 1 | 0 | FAQに自社明記なしのみ。2024年度461万t/224万t・内訳・削減率48.3%を検算し一致 |
| [shomi-shohi-chigai](https://motytools.com/guide/shomi-shohi-chigai/) | ピッと期限 | 0 | 1 | 0 | FAQに自社明記なしのみ。期限の定義・年月表示・開封後の扱いは消費者庁の説明どおり |
| [shomikigen-barcode](https://motytools.com/guide/shomikigen-barcode/) | ピッと期限 | 0 | 1 | 0 | FAQに自社明記なしのみ。JANの桁構成・AI(15)(17)・年月の00表記はGS1の説明どおり |
| [shomikigen-kanri-app](https://motytools.com/guide/shomikigen-kanri-app/) | ピッと期限 | 0 | 0 | 1 | 1文が不自然なだけ。比較は五十音順、確認日・自社の弱み・アプリ内アフィリエイトの注記あり |
| [shomikigen-kanrihyo](https://motytools.com/guide/shomikigen-kanrihyo/) | ピッと期限 | 0 | 0 | 1 | 開封日列からの計算式が無い程度。残り日数1/3/39/536と条件付き書式を検算し正しい |
| [super-kakaku-hikaku](https://motytools.com/guide/super-kakaku-hikaku/) | ピッと最安 | 0 | 0 | 2 | Zaim・Shufoo!・トクバイの出典リンク無し、drugstoreとチラシアプリの段落が重複 |
| [tanka-hikaku-keisan](https://motytools.com/guide/tanka-hikaku-keisan/) | ピッと最安 | 0 | 1 | 1 | 計算例はすべて検算で一致。LP外の「1個あたり表示」、FAQの「ネットの最安値」 |
| [tiktok-recipe-hozon](https://motytools.com/guide/tiktok-recipe-hozon/) | レシピスクラップ | 0 | 1 | 1 | 保存不可の理由・権利の注意は良い。自社アプリだと明記していない、インスタ記事と構成が重複 |
| [tochi-mukashi-shirabekata](https://motytools.com/guide/tochi-mukashi-shirabekata/) | まちの安全マップ | 0 | 0 | 2 | 地理院地図の手順・断定回避はよい。今昔マップ作者の現在形表記が古い。判定方法はLPに無い |
| [tsugakuro-anzen-tenken](https://motytools.com/guide/tsugakuro-anzen-tenken/) | まちの安全マップ | 0 | 0 | 1 | 15項目の表・合同点検の説明は有用。40人基準を『法令で』と書くが孫引きで法令名が無い |
| [yachin-kanri-app-hikaku](https://motytools.com/guide/yachin-kanri-app-hikaku/) | 大家ノート | 0 | 0 | 1 | マネーフォワードの料金が12月改定予定で古くなる。並び順と自社の弱い列は適切 |
| [yachin-kanri-excel-app](https://motytools.com/guide/yachin-kanri-excel-app/) | 大家ノート | 0 | 1 | 1 | 約1,600字で宣伝中心、比較記事と内容が重なる（統合候補）。通知で「心配がなくなる」の言い切り |
| [yachin-kanrihyo-template](https://motytools.com/guide/yachin-kanrihyo-template/) | 大家ノート | 0 | 0 | 0 | 問題なし。条件付き書式・SUMPRODUCTの式と残り111日を検算、メニュー名も確認 |
| [yachin-nyukin-kakunin](https://motytools.com/guide/yachin-nyukin-kakunin/) | 大家ノート | 0 | 1 | 1 | 入金確認表の節が家賃管理表記事と重複。LPに無い通知（朝9時）を記載 |
| [yachin-tainou-taiou](https://motytools.com/guide/yachin-tainou-taiou/) | 大家ノート | 0 | 0 | 0 | 問題なし。民法541条・465条の2、自力救済の注意、法テラスの番号、断定を避けた書き方を確認 |
| [yahoo-saiyasune-hyouji](https://motytools.com/guide/yahoo-saiyasune-hyouji/) | ピッと最安 | 0 | 0 | 2 | 計算（2,796円）は正しい。知恵袋を根拠に使用、税込表示の説明が誤解を招く |
| [youtube-recipe-hozon](https://motytools.com/guide/youtube-recipe-hozon/) | レシピスクラップ | 0 | 1 | 2 | 手順に確認日あり。自社明記なし、FAQで貼り付け取り込みを断定、descriptionの表記 |
| [zairyo-kara-recipe-kensaku](https://motytools.com/guide/zairyo-kara-recipe-kensaku/) | あるものレシピ | 0 | 0 | 1 | 件数表の1行が『1つずつ足した』説明に合わない。実測日・アプリとの違いは明確 |

### 動きの図鑑（/ugoki/）　32本

| 記事 | 高 | 中 | 低 | ひとこと |
|---|---|---|---|---|
| [accordion](https://motytools.com/ugoki/accordion/) | 0 | 0 | 0 | 問題なし。details/name属性/interpolate-size（Chrome系のみ）の説明とコードが一致 |
| [animated-gradient](https://motytools.com/ugoki/animated-gradient/) | 0 | 0 | 1 | 目安「1往復6〜15秒」が初期値（往復16秒）と合わない。コードは動く |
| [back-to-top](https://motytools.com/ugoki/back-to-top/) | 0 | 0 | 0 | 問題なし。fixed配置・visibility・焦点移動・instant指定がコードと一致 |
| [before-after](https://motytools.com/ugoki/before-after/) | 0 | 0 | 1 | 端でつまみと線がずれうる点のみ。clip-path・touch-action・医療広告の注意は適切 |
| [count-up](https://motytools.com/ugoki/count-up/) | 0 | 0 | 0 | 問題なし。最後の値をHTMLに書く・tabular-nums・aria-hidden・1回だけ監視 |
| [cursor-follower](https://motytools.com/ugoki/cursor-follower/) | 0 | 0 | 1 | 「1秒に約60回」が120Hz画面で外れる点のみ。pointer:fine・reduceは正しい |
| [exit-intent](https://motytools.com/ugoki/exit-intent/) | 0 | 0 | 1 | Googleの扱いの表現が古く強い。dialog/showModal・1回だけ出す作りは正しい |
| [fade-in](https://motytools.com/ugoki/fade-in/) | 0 | 0 | 0 | 問題なし。.js条件・IO・reduce、animation-timelineの対応状況も正しい |
| [floating](https://motytools.com/ugoki/floating/) | 0 | 0 | 0 | 問題なし。keyframes・影・負のdelay・reduce停止がコードと一致 |
| [highlighter](https://motytools.com/ugoki/highlighter/) | 0 | 0 | 0 | 問題なし。gradientとbackground-size、threshold:1の注意、折り返しの説明 |
| [horizontal-scroll](https://motytools.com/ugoki/horizontal-scroll/) | 0 | 0 | 1 | 100vhとinnerHeightの混在でスマホの区間がずれうる。式は検算で一致 |
| [hover-lift](https://motytools.com/ugoki/hover-lift/) | 0 | 0 | 0 | 問題なし。hover:hover・focus-visible・reduceの詳細度も確認、動く |
| [image-zoom](https://motytools.com/ugoki/image-zoom/) | 0 | 0 | 0 | 問題なし。overflow:hiddenの枠・hover:hover・reduceで暗くするだけ |
| [infinite-scroll](https://motytools.com/ugoki/infinite-scroll/) | 0 | 0 | 0 | 問題なし。リンクを見張り役にする作り・失敗時の復帰・SEOの説明が正確 |
| [lazy-loading](https://motytools.com/ugoki/lazy-loading/) | 0 | 0 | 1 | promptとコードでwidth/max-widthが違う点のみ。LCP・閾値の説明は正しい |
| [magnetic-button](https://motytools.com/ugoki/magnetic-button/) | 0 | 0 | 0 | 問題なし。親の箱で中心を測る・reduce停止。クリック率を言い切らない |
| [marquee](https://motytools.com/ugoki/marquee/) | 0 | 1 | 0 | 記事が求める停止ボタン（WCAG 2.2.2）がコードとpromptに無い |
| [page-transition](https://motytools.com/ugoki/page-transition/) | 0 | 0 | 1 | Firefox対応を別ページ間と1ページ内で分けていない。Chrome126等は正しい |
| [parallax](https://motytools.com/ugoki/parallax/) | 0 | 0 | 0 | 問題なし。係数の向きを検算、帯の上限80pxと絵の余白160pxも一致 |
| [pinning](https://motytools.com/ugoki/pinning/) | 0 | 0 | 1 | sticky＋overflowの注意がほか3本と重複。進み具合の計算と100svhは正しい |
| [preloader](https://motytools.com/ugoki/preloader/) | 0 | 0 | 2 | reduce時に幕がDOMに残る点、titleが38字で切れる点。保険タイマーは適切 |
| [progress-bar](https://motytools.com/ugoki/progress-bar/) | 0 | 0 | 0 | 問題なし。scaleX・rAF間引き・role=progressbar・対応状況も正しい |
| [ripple](https://motytools.com/ugoki/ripple/) | 0 | 0 | 0 | 問題なし。最遠の角×2の大きさ・キーボード時の中心・reduce時は出さない |
| [scroll-snap](https://motytools.com/ugoki/scroll-snap/) | 0 | 0 | 0 | 問題なし。htmlに付ける・svh・mandatory/proximityの説明とコードが一致 |
| [scrollspy](https://motytools.com/ugoki/scrollspy/) | 0 | 0 | 0 | 問題なし。rootMargin -65%の帯を検算、下端の補正・aria-current |
| [skeleton](https://motytools.com/ugoki/skeleton/) | 0 | 0 | 1 | 失敗時の処理がコードに無く、prompt（4件）とコード（3件）がずれる |
| [smooth-scroll](https://motytools.com/ugoki/smooth-scroll/) | 0 | 0 | 0 | 問題なし。scroll-behavior・scroll-margin-top・reduce時auto・instant |
| [sticky-header](https://motytools.com/ugoki/sticky-header/) | 0 | 0 | 1 | 32本の型の量産（description等）を代表で記録。記事自体は正しい |
| [tab-indicator](https://motytools.com/ugoki/tab-indicator/) | 0 | 0 | 1 | flex:1で下線幅が文字幅にならず本文とずれる。role・矢印キーは動く |
| [toast](https://motytools.com/ugoki/toast/) | 0 | 1 | 0 | role=statusの箱をvisibility:hiddenにしていて読み上げが不確実 |
| [typewriter](https://motytools.com/ugoki/typewriter/) | 0 | 0 | 1 | 無限ループで止める手段が端末設定だけ。[...text]・Segmenterは正確 |
| [underline](https://motytools.com/ugoki/underline/) | 0 | 0 | 0 | 問題なし。scaleXとtransform-originの向き、hover:hover・aria-current |

### 動きの図鑑・英語版（/en/motion/）　32本

| 記事 | 高 | 中 | 低 | ひとこと |
|---|---|---|---|---|
| [accordion](https://motytools.com/en/motion/accordion/) | 0 | 0 | 1 | title が64字で後ろが切れる。details/name/interpolate-size(Chrome系のみ)・::details-contentの対応は2026年時点で正しい |
| [animated-gradient](https://motytools.com/en/motion/animated-gradient/) | 0 | 0 | 1 | 「片道6〜15秒」と日本語版「1往復」が食い違い（英語側が正）。コード・@supports・oklchは動作確認 |
| [back-to-top](https://motytools.com/en/motion/back-to-top/) | 0 | 0 | 0 | 問題なし。visibilityで焦点を防ぐ・instant指定・焦点移動のコードを確認、数値は日本語版と一致 |
| [before-after](https://motytools.com/en/motion/before-after/) | 0 | 0 | 1 | WordPressの「footer scripts」が標準機能のように読める。range+clip-pathのコードは動く |
| [count-up](https://motytools.com/en/motion/count-up/) | 0 | 0 | 1 | 「ずっと目を引く・記憶に残る」が根拠の無い断定。コード（幅固定・IO・rAF）は動作確認 |
| [cursor-follower](https://motytools.com/en/motion/cursor-follower/) | 0 | 0 | 1 | 1フレームごとの補間が画面の更新回数で速さが変わる点が抜けている。他は問題なし |
| [exit-intent](https://motytools.com/en/motion/exit-intent/) | 0 | 0 | 1 | sessionStorageで「数日空ける」と読めるFAQ。dialog/showModal・背景クリックのコードは正しい |
| [fade-in](https://motytools.com/en/motion/fade-in/) | 0 | 0 | 1 | description 160字でやや長い。.js で隠す作り・rootMargin・view()の対応状況の書き方は正しい |
| [floating](https://motytools.com/en/motion/floating/) | 0 | 0 | 0 | 問題なし。@keyframes・影・負のdelay・calcでの時間指定を確認、数値は日本語版と一致 |
| [highlighter](https://motytools.com/en/motion/highlighter/) | 0 | 0 | 2 | 「ずっと目を引く」の比較断定と title 63字。グラデーション＋background-sizeのコードは正しい |
| [horizontal-scroll](https://motytools.com/en/motion/horizontal-scroll/) | 0 | 0 | 0 | 問題なし。高さの計算式とJSの進み具合の式が一致することを検算、日本語版と数値一致 |
| [hover-lift](https://motytools.com/en/motion/hover-lift/) | 0 | 0 | 1 | 説明文が他4本と同じ型。CSS（hover:hover・focus-visible・active）は正しい |
| [image-zoom](https://motytools.com/en/motion/image-zoom/) | 0 | 0 | 1 | FAQの「角丸があるなら角丸を枠に」が同語反復の英文。CSSは動作確認 |
| [infinite-scroll](https://motytools.com/en/motion/infinite-scroll/) | 0 | 0 | 0 | 問題なし。ページ送りリンクを土台にしたfetch+DOMParserのコードとSEOの説明を確認 |
| [lazy-loading](https://motytools.com/en/motion/lazy-loading/) | 0 | 0 | 1 | title 63字で後ろが切れる。loading="lazy"の距離(1,000px超)・LCPの注意は正しい |
| [magnetic-button](https://motytools.com/en/motion/magnetic-button/) | 0 | 0 | 0 | 問題なし。静止した外枠で中心を測るコード、FAQの効果は控えめで適切 |
| [marquee](https://motytools.com/en/motion/marquee/) | 0 | 0 | 0 | 問題なし。-50%の継ぎ目なし・WCAG 2.2.2・marqueeタグ廃止の説明を確認 |
| [page-transition](https://motytools.com/en/motion/page-transition/) | 0 | 0 | 2 | FAQの問いがSafari非対応に読める・Firefox 144の同一ページ対応が抜け。desc 160字 |
| [parallax](https://motytools.com/en/motion/parallax/) | 0 | 0 | 1 | scroll()を「これから」と書くのが古い（Safari 26で対応済み）。コードは動作確認 |
| [pinning](https://motytools.com/en/motion/pinning/) | 0 | 0 | 1 | 「1ステップ1画面」の目安とコード初期値(3画面で3ステップ)が合わない。sticky/svhは正しい |
| [preloader](https://motytools.com/en/motion/preloader/) | 0 | 0 | 2 | 動きを減らす設定で幕が削除されない、「スケルトンの方が速く感じる」の断定 |
| [progress-bar](https://motytools.com/en/motion/progress-bar/) | 0 | 0 | 1 | FAQの「ship it as a fallback」の it が曖昧。scaleX・aria-valuenowのコードは正しい |
| [ripple](https://motytools.com/en/motion/ripple/) | 0 | 0 | 0 | 問題なし。最遠の角までの直径計算・キーボード時の中心・animationendでの削除を確認 |
| [scroll-snap](https://motytools.com/en/motion/scroll-snap/) | 0 | 1 | 0 | 長い区画が mandatory で「届かない」は仕様上の言い過ぎ（要確認）。他は正しい |
| [scrollspy](https://motytools.com/en/motion/scrollspy/) | 0 | 0 | 3 | スマホで今の項目を中央へ送る処理がコードに無い。title 64字・desc 161字 |
| [skeleton](https://motytools.com/en/motion/skeleton/) | 0 | 0 | 0 | 問題なし。is-loadingを本物に付ける作り・aria-busy/role=statusを確認、金額は$表記 |
| [smooth-scroll](https://motytools.com/en/motion/smooth-scroll/) | 0 | 0 | 0 | 問題なし。scroll-margin-top・instant指定・焦点の起点の説明を確認、数値は日本語版と一致 |
| [sticky-header](https://motytools.com/en/motion/sticky-header/) | 0 | 0 | 0 | 問題なし。sticky 2行・影のJS・scroll-margin-topを確認（お手本） |
| [tab-indicator](https://motytools.com/en/motion/tab-indicator/) | 0 | 0 | 1 | title 65字で後ろが切れる。tablist/roving tabindex/ResizeObserverのコードは正しい |
| [toast](https://motytools.com/en/motion/toast/) | 0 | 0 | 0 | 問題なし。role=statusを最初から置く・hover/focusで止まるタイマー・WCAG 2.2.1を確認 |
| [typewriter](https://motytools.com/en/motion/typewriter/) | 0 | 0 | 0 | 問題なし。[...text]での分割・キャレット・aria-hiddenを確認、24/7は英語向けの置き換え |
| [underline](https://motytools.com/en/motion/underline/) | 0 | 0 | 0 | 問題なし。transform-originでの左右の向き・focus-visible・現在地の扱いを確認 |

### UI部品の図鑑（/ui/）　30本

| 記事 | 高 | 中 | 低 | ひとこと |
|---|---|---|---|---|
| [autocomplete](https://motytools.com/ui/autocomplete/) | 0 | 1 | 1 | 文字を打ち足すとactiveが残り誤決定・TypeError。セレクトとの目安が3通り。IME対策は正しい |
| [badge](https://motytools.com/ui/badge/) | 0 | 0 | 0 | 問題なし。99+・aria-label差し替え・#d93a2bと白のコントラスト約4.6:1を検算 |
| [bottom-nav](https://motytools.com/ui/bottom-nav/) | 0 | 0 | 0 | 問題なし。safe-area・viewport-fit=cover・aria-current・項目数の目安を確認 |
| [bottom-sheet](https://motytools.com/ui/bottom-sheet/) | 0 | 0 | 0 | 問題なし。returnValue のリセット・取っ手のドラッグ・safe-area・Esc/暗幕の閉じ方を確認 |
| [breadcrumb](https://motytools.com/ui/breadcrumb/) | 0 | 0 | 1 | スマホ検索のパンくずは2025年1月に廃止済み。HTMLとJSON-LDは正しい |
| [carousel](https://motytools.com/ui/carousel/) | 0 | 0 | 0 | 問題なし。scroll-snap・aria-roledescription・自動再生とWCAGを確認 |
| [chips](https://motytools.com/ui/chips/) | 0 | 0 | 0 | 問題なし。チェックボックス土台・44pxの当たり判定・AND絞り込み・つまみ「色だけ」の意図を確認 |
| [cookie-banner](https://motytools.com/ui/cookie-banner/) | 0 | 0 | 3 | 外部送信規律の公表事項と個人関連情報に触れず、設定を開き直すと状態が出ない。断定は避けていて適切 |
| [date-picker](https://motytools.com/ui/date-picker/) | 0 | 0 | 1 | 例のmaxが2026年末固定。11/3（火）とAPGのキー操作を確認 |
| [drawer](https://motytools.com/ui/drawer/) | 0 | 0 | 2 | Material Designのドロワーは2025年に非推奨。スワイプの扱いがぶれる |
| [dropdown-menu](https://motytools.com/ui/dropdown-menu/) | 0 | 0 | 1 | 別名のコンテキストメニューが不正確。APG menu button のキー操作とコードの折り返し計算は正しい |
| [empty-state](https://motytools.com/ui/empty-state/) | 0 | 0 | 0 | 問題なし。読み込み中・エラー・0件の分け方とhiddenの扱いを確認 |
| [fab](https://motytools.com/ui/fab/) | 0 | 0 | 1 | 画面遷移をbuttonとlocation.hrefで作っている。大きさの目安は正しい |
| [hamburger-menu](https://motytools.com/ui/hamburger-menu/) | 0 | 0 | 1 | 項目を押したら閉じる、と勧めるのにコードに無い。×への変形CSSとaria-expandedは正しい |
| [lightbox](https://motytools.com/ui/lightbox/) | 0 | 0 | 1 | スワイプとクリックが衝突しうる（要確認）。FLIP・cancelでのEsc処理・焦点の戻し方は正しい |
| [mega-menu](https://motytools.com/ui/mega-menu/) | 0 | 0 | 0 | 問題なし。button+aria-expanded・待ち時間・focusoutを確認 |
| [modal](https://motytools.com/ui/modal/) | 0 | 2 | 1 | returnValue未リセットでEsc時に予約処理が再実行。例の曜日も不一致 |
| [pagination](https://motytools.com/ui/pagination/) | 0 | 0 | 1 | hrefの無いaにaria-label（要確認）。pagesFor()の例は検算一致 |
| [popover](https://motytools.com/ui/popover/) | 0 | 1 | 1 | アンカー配置は2026年1月に主要ブラウザがそろい「未対応」は古い。titleが51字と長い |
| [pricing-table](https://motytools.com/ui/pricing-table/) | 0 | 2 | 0 | 総額表示義務に反する書き方と「いちばん人気」の根拠の注意が無い。年払い1,250円・2か月分は検算一致 |
| [quantity-stepper](https://motytools.com/ui/quantity-stepper/) | 0 | 0 | 1 | 最小・最大でボタンをdisabledにして焦点が消える（carousel記事と矛盾）。合計3,600円は検算一致 |
| [range-slider](https://motytools.com/ui/range-slider/) | 1 | 0 | 0 | 問題なし。--p の初期値0.29を検算、aria-valuetext・ベンダー疑似要素・accent-colorを確認 |
| [segmented-control](https://motytools.com/ui/segmented-control/) | 0 | 0 | 0 | 問題なし。ラジオ土台・:has()とnth-of-typeでの板の位置計算・矢印キーの説明を確認 |
| [sidebar](https://motytools.com/ui/sidebar/) | 0 | 1 | 1 | スマホでメニューを隠すだけでドロワーが無い。title属性の推奨がツールチップ記事と矛盾 |
| [star-rating](https://motytools.com/ui/star-rating/) | 0 | 0 | 0 | 問題なし。ラジオ土台・aria-label・仮の塗り・表示用の星はrole=imgの説明を確認 |
| [stepper](https://motytools.com/ui/stepper/) | 0 | 0 | 1 | 避ける段数（7以上）とFAQ（6以上）の食い違い。線の位置計算とaria-current=stepは正しい |
| [sticky-cta](https://motytools.com/ui/sticky-cta/) | 0 | 0 | 0 | 問題なし。visibility・aria-hidden・IntersectionObserver・税込表記を確認 |
| [timeline](https://motytools.com/ui/timeline/) | 0 | 0 | 2 | list-style:noneでSafariがリストと伝えない恐れ。線が伸びるという説明とコードが不一致 |
| [toggle-switch](https://motytools.com/ui/toggle-switch/) | 0 | 0 | 0 | 問題なし。role=switch・Spaceでの切り替え・失敗時に戻す処理・switch属性の説明を確認 |
| [tooltip](https://motytools.com/ui/tooltip/) | 0 | 0 | 0 | 問題なし。WCAG 1.4.13・role=tooltip・Escの処理と詳細度を確認 |

### UI部品の図鑑・英語版（/en/ui/）　30本

| 記事 | 高 | 中 | 低 | ひとこと |
|---|---|---|---|---|
| [autocomplete](https://motytools.com/en/ui/autocomplete/) | 0 | 0 | 2 | IMEの注意の論理の飛び、読み上げ件数と表示件数のずれ、見本の英文。コードはAPGどおりで動く |
| [badge](https://motytools.com/en/ui/badge/) | 0 | 1 | 1 | 「読み上げは数字を読まない」が誤りで日本語版と食い違い。99+・対比4.5:1は確認 |
| [bottom-nav](https://motytools.com/en/ui/bottom-nav/) | 0 | 0 | 0 | 問題なし。aria-current・safe-area・HIGとMaterialの呼び名を確認 |
| [bottom-sheet](https://motytools.com/en/ui/bottom-sheet/) | 0 | 0 | 1 | 題名62字で末尾が切れる。dialog・ドラッグで閉じるコードは動作を確認 |
| [breadcrumb](https://motytools.com/en/ui/breadcrumb/) | 0 | 0 | 1 | 2025年1月からスマホ検索でパンくず非表示の点が抜け。CSS・JSON-LDは正しい |
| [carousel](https://motytools.com/en/ui/carousel/) | 0 | 0 | 0 | 問題なし。scroll-snap・aria-disabled・WCAG 2.2.2・JSを確認 |
| [chips](https://motytools.com/en/ui/chips/) | 0 | 0 | 1 | 題名が62字で切れる。checkbox ベースの作り・:has()・絞り込みJSは本文どおり動く |
| [cookie-banner](https://motytools.com/en/ui/cookie-banner/) | 0 | 2 | 1 | 英国の解析Cookie例外が未反映、撤回が効かないコード、GDPRとePrivacyの混同 |
| [date-picker](https://motytools.com/en/ui/date-picker/) | 0 | 0 | 1 | maxの日付が2026年末で固定。11/3=火曜を検算、検証の流れは正しい |
| [drawer](https://motytools.com/en/ui/drawer/) | 0 | 0 | 2 | 題名62字、暗幕クリックが<dialog>に無いとの断定。showModalの説明は正しい |
| [dropdown-menu](https://motytools.com/en/ui/dropdown-menu/) | 0 | 0 | 1 | 題名64字で切れる。APGのmenu button操作とJSの巡回（at(-1)）を確認 |
| [empty-state](https://motytools.com/en/ui/empty-state/) | 0 | 0 | 1 | 4状態に分けると書くがコードに失敗時の処理が無い。中身・FAQは問題なし |
| [fab](https://motytools.com/en/ui/fab/) | 0 | 0 | 0 | 問題なし。56px・16px、iOSにFABが無い点、縮む拡張FABのコードを確認 |
| [hamburger-menu](https://motytools.com/en/ui/hamburger-menu/) | 0 | 0 | 0 | 問題なし。aria-expanded連動のX変形、Escで焦点を戻す、ブレークポイント処理を確認 |
| [lightbox](https://motytools.com/en/ui/lightbox/) | 0 | 0 | 2 | 題名61字、スワイプ判定にtouch-actionが無く誤って閉じる恐れ。FLIPは正しい |
| [mega-menu](https://motytools.com/en/ui/mega-menu/) | 0 | 0 | 2 | 題名62字、ホバーで開いた直後のクリックで閉じる不具合。role=menu不使用は正しい |
| [modal](https://motytools.com/en/ui/modal/) | 0 | 0 | 3 | 題名65字、descriptionの型が7本同じ、closedby未言及。dialog説明は正しい |
| [pagination](https://motytools.com/en/ui/pagination/) | 0 | 0 | 0 | 問題なし。pagesFor()の出力2例を検算、aria-current・canonicalを確認 |
| [popover](https://motytools.com/en/ui/popover/) | 0 | 1 | 1 | アンカー配置を「対応がそろわない」とするのが古い（2026年1月にBaseline）。題名63字 |
| [pricing-table](https://motytools.com/en/ui/pricing-table/) | 0 | 0 | 1 | 題名61字で切れる。$12×10か月=$120・$10/月を検算、:has()の切り替えは動く |
| [quantity-stepper](https://motytools.com/en/ui/quantity-stepper/) | 0 | 0 | 1 | 上限でdisabledにして焦点が飛ぶ（carousel記事と逆の指示）。$48=2×$24を検算 |
| [range-slider](https://motytools.com/en/ui/range-slider/) | 1 | 0 | 0 | 未定義のupdateResults()で貼るとエラー。--p=0.29の検算、疑似要素は正しい |
| [segmented-control](https://motytools.com/en/ui/segmented-control/) | 0 | 0 | 0 | 問題なし。radioベース、nth-of-type と --i の計算、インジケーター幅を確認 |
| [sidebar](https://motytools.com/en/ui/sidebar/) | 0 | 0 | 1 | 題名64字で切れる。grid列の遷移、localStorageのtry/catchを確認 |
| [star-rating](https://motytools.com/en/ui/star-rating/) | 0 | 0 | 0 | 問題なし。radioベースの作り、逆順CSSの注意、descは160字で上限近く |
| [stepper](https://motytools.com/en/ui/stepper/) | 0 | 0 | 1 | 題名63字で切れる。aria-current="step"、線の位置計算、完了表示のJSを確認 |
| [sticky-cta](https://motytools.com/en/ui/sticky-cta/) | 0 | 0 | 1 | 題名61字で切れる。IntersectionObserverとvisibilityの切替を確認 |
| [timeline](https://motytools.com/en/ui/timeline/) | 0 | 0 | 0 | 問題なし。<ol>/<time>、点と線の位置計算、IOの判定を確認 |
| [toggle-switch](https://motytools.com/en/ui/toggle-switch/) | 0 | 0 | 0 | 問題なし。role="switch"、Safariのswitch属性、失敗時に戻す処理を確認 |
| [tooltip](https://motytools.com/en/ui/tooltip/) | 0 | 0 | 2 | 題名62字、WCAG 1.4.13を「Esc必須」と断定。aria の使い分けは正しい |

### 資料レイアウトの図鑑（/shiryo/）　100本

| 記事 | 公開 | 高 | 中 | 低 | ひとこと |
|---|---|---|---|---|---|
| [action-list](https://motytools.com/shiryo/action-list/) | 2026-10-31公開予定 | 0 | 0 | 2 | 状態の記号が手順・見本・CSSで不一致、手順文のねじれ。件数（6件中2完了・1期限切れ）は検算済み |
| [agenda](https://motytools.com/shiryo/agenda/) | 公開済み | 0 | 0 | 0 | 問題なし。所要時間10+10+20+15+5＝60分、ズーム・段落番号・リンク等の手順を確認 |
| [agreed-open](https://motytools.com/shiryo/agreed-open/) | 公開済み | 0 | 1 | 1 | FAQが「今後検討」の注記を勧め、気をつけること1と矛盾。title不自然 |
| [annotated-chart](https://motytools.com/shiryo/annotated-chart/) | 2026-10-31公開予定 | 0 | 0 | 2 | 注釈の置き場所の説明が見本と合わない、Excel手順が1文だけ。差+12/−13/+29と座標は検算済み |
| [approval](https://motytools.com/shiryo/approval/) | 2026-11-07公開予定 | 0 | 0 | 2 | whatの見出しが指示文・見本と違う、title長め。350+130＝480万円は検算済み |
| [area-chart](https://motytools.com/shiryo/area-chart/) | 2026-11-07公開予定 | 0 | 0 | 0 | 問題なし。合計4,890件、14〜16時台2,040件＝42%、座標・Googleでの作り方を確認 |
| [as-is-to-be](https://motytools.com/shiryo/as-is-to-be/) | 2026-10-31公開予定 | 0 | 1 | 1 | titleが64字相当で長い、文字サイズ24/28ptの食い違い。差30分・4日・8件は検算済み |
| [bar-chart](https://motytools.com/shiryo/bar-chart/) | 公開済み | 0 | 1 | 1 | データラベル「外側上」は要確認、descriptionの量産形（25本共通）。1.8倍・+23%は検算済み |
| [before-after](https://motytools.com/shiryo/before-after/) | 2026-11-07公開予定 | 0 | 0 | 1 | 「四捨五入（切り上げか切り捨てか）」の言葉違い。−83%・2人減は検算済み |
| [big-number](https://motytools.com/shiryo/big-number/) | 公開済み | 0 | 0 | 3 | 190ptと180ptの食い違い、見出し「満足度」と中身のずれ、メニュー名。97%・+11pt・約14%は検算済み |
| [boxplot](https://motytools.com/shiryo/boxplot/) | 公開済み | 0 | 0 | 2 | 少数データに「散布図型」を勧める誤り、FAQが縦向き前提。四分位・中央値・外れ値・平均を点から全部検算して正しい |
| [branch-merge](https://motytools.com/shiryo/branch-merge/) | 公開済み | 0 | 1 | 2 | dependencyとクリティカルパスの語・FAQが重複、図形名は要確認。2/25+5週＝4/1、箱の幅は検算済み |
| [bubble](https://motytools.com/shiryo/bubble/) | 2026-10-31公開予定 | 0 | 0 | 1 | 散布・バブルでも0開始とする言い過ぎ。半径√比・座標・見出しの「最大」は検算済み |
| [case-card](https://motytools.com/shiryo/case-card/) | 2026-10-31公開予定 | 0 | 2 | 1 | FAQが無許可で数字を載せられると読める、図の塗りつぶしで縦横比がそろうは誤り。300→180＝−40%は検算済み |
| [case-compare](https://motytools.com/shiryo/case-compare/) | 公開済み | 0 | 1 | 3 | titleが66字で長い、表の行数違い、指標をそろえる決まりと見本の食い違い、実在しうる社名 |
| [causal-loop](https://motytools.com/shiryo/causal-loop/) | 公開済み | 0 | 0 | 1 | 「矢印: 曲線」の図形名は要確認。R・＋の説明と強化ループの考え方は正しい |
| [checklist](https://motytools.com/shiryo/checklist/) | 2026-10-31公開予定 | 0 | 0 | 2 | 見本が気をつけること4に反する（期限当日の未完了）、上限数の不一致、title不自然。5/8＝62.5%は検算済み |
| [claim-evidence](https://motytools.com/shiryo/claim-evidence/) | 公開済み | 0 | 2 | 0 | 示唆「約2倍」が78%は既にチャットという根拠と合わない計算違い、titleが長い |
| [cohort](https://motytools.com/shiryo/cohort/) | 2026-11-07公開予定 | 0 | 0 | 0 | 問題なし。右下が空く三角形と9月末時点の対応、62→71%＝9ポイント、条件付き書式の手順を確認 |
| [cost-breakdown](https://motytools.com/shiryo/cost-breakdown/) | 2026-11-07公開予定 | 0 | 0 | 2 | Googleで1本に積む手順が不足、文が分かりにくい。600+240+180+120+60＝1,200万円は検算済み |
| [customer-journey](https://motytools.com/shiryo/customer-journey/) | 公開済み | 0 | 1 | 1 | titleが長く「テンプレート」が中身と合わない、Googleのグラフ名は要確認。曲線の座標は検算済み |
| [cycle](https://motytools.com/shiryo/cycle/) | 2026-11-07公開予定 | 0 | 0 | 1 | 手順の上限数（5・6・7）が記事内でばらばら。PowerPoint・Googleの手順は確認 |
| [decision-tree](https://motytools.com/shiryo/decision-tree/) | 2026-10-31公開予定 | 0 | 0 | 1 | 段数の上限（3段・4段）の食い違い。承認ルートの論理（80万円・新規→課長）は正しい |
| [definition](https://motytools.com/shiryo/definition/) | 2026-10-31公開予定 | 0 | 0 | 2 | titleが長い、NPSの商標表記なし。45−15＝+30、中立40%で合計100%は検算済み |
| [dependency](https://motytools.com/shiryo/dependency/) | 2026-11-07公開予定 | 0 | 1 | 1 | 検索語がtitle末尾、Googleの「曲線」は吸い付かない。18日・余裕1日/9日は検算済み |
| [donut](https://motytools.com/shiryo/donut/) | 2026-10-31公開予定 | 0 | 0 | 3 | 合計8,400万円と割合・輪の位置を検算し一致。Sheetsの設定名が要確認、定型の説明文 |
| [dumbbell](https://motytools.com/shiryo/dumbbell/) | 2026-10-31公開予定 | 0 | 0 | 2 | 差と平均27.8→20.3・点の座標を検算し一致。0始まりの理由づけと題名の検索語に指摘 |
| [executive-summary](https://motytools.com/shiryo/executive-summary/) | 公開済み | 0 | 0 | 0 | 問題なし。手数料1,800→600万円・差し引き+200万円を検算、操作名も妥当 |
| [exploded](https://motytools.com/shiryo/exploded/) | 2026-11-07公開予定 | 0 | 1 | 2 | 題名52字で長い。Google「均等に分布」の表記ゆれ、注記12ptが決まり（13）とずれる |
| [faq](https://motytools.com/shiryo/faq/) | 公開済み | 0 | 0 | 1 | 内容は妥当。質問数の目安（3〜6個と4〜6個）が本文とFAQで食い違う |
| [fishbone](https://motytools.com/shiryo/fishbone/) | 公開済み | 0 | 0 | 2 | 割合の合計100%を検算。説明のクラス名hotがコードのfb-hotと違う、座標の誤差桁 |
| [flow](https://motytools.com/shiryo/flow/) | 2026-11-07公開予定 | 0 | 0 | 1 | 最長3営業日の内訳を検算し一致。題名先頭が「フロー型」で検索語が弱い |
| [full-photo](https://motytools.com/shiryo/full-photo/) | 公開済み | 0 | 1 | 1 | 帯の濃さの目安が40〜80%・60〜75%・透明度30〜40%と食い違う。透明度の設定場所も要確認 |
| [funnel](https://motytools.com/shiryo/funnel/) | 公開済み | 0 | 0 | 0 | 問題なし。進む割合55/32/63/64%・購入率7.0%・棒の幅を検算し一致 |
| [gallery](https://motytools.com/shiryo/gallery/) | 2026-11-07公開予定 | 0 | 2 | 0 | 題名59字で長い。図形の塗りつぶし→図で縦横比がゆがむ点を「防げる」と誤記 |
| [gantt](https://motytools.com/shiryo/gantt/) | 公開済み | 0 | 2 | 0 | 棒の位置を検算。「テストは開発が終わってから」が予定と矛盾、題名50字 |
| [glossary](https://motytools.com/shiryo/glossary/) | 2026-11-07公開予定 | 0 | 0 | 2 | 表の「高さを揃える」のボタン名違い、語尾をそろえる注意と見本の語尾が不一致 |
| [heatmap](https://motytools.com/shiryo/heatmap/) | 2026-11-07公開予定 | 0 | 0 | 1 | 最大98・月〜木の昼61〜66人を検算し一致。Googleの貼り付け選択肢名が要確認 |
| [histogram](https://motytools.com/shiryo/histogram/) | 公開済み | 0 | 0 | 0 | 問題なし。合計120件・20〜50分78件65%・60分以上14件12%・棒の高さを検算し一致 |
| [hub-spoke](https://motytools.com/shiryo/hub-spoke/) | 2026-11-07公開予定 | 0 | 0 | 2 | 合計1,200件を検算し一致。SmartArtの分類名「関連」は誤り（集合関係）、語源の断定 |
| [hypothesis](https://motytools.com/shiryo/hypothesis/) | 2026-11-07公開予定 | 0 | 0 | 1 | 訪問1人あたり売上174→201円・約16%増を検算し一致。有意差への言及が無い |
| [image-left](https://motytools.com/shiryo/image-left/) | 2026-11-07公開予定 | 0 | 1 | 3 | 題名52字、レイアウト名の誤り、Googleのボタン名の表記ゆれ、見出し行数の矛盾 |
| [input-output](https://motytools.com/shiryo/input-output/) | 公開済み | 0 | 0 | 1 | 398+22=420件を検算し一致。題名先頭の型名が検索語として弱い |
| [interview](https://motytools.com/shiryo/interview/) | 2026-10-31公開予定 | 0 | 0 | 1 | 内容は妥当。蛍光ペンのアイコンの説明（Aに線）がフォントの色と取り違えの疑い |
| [kanban](https://motytools.com/shiryo/kanban/) | 2026-11-07公開予定 | 0 | 0 | 1 | 札3+3+4+5=15件を検算し一致。列数の目安が注意点と本文で食い違う |
| [kpi-dashboard](https://motytools.com/shiryo/kpi-dashboard/) | 公開済み | 0 | 1 | 1 | 月別値から合計・平均を検算し一致。注意点の論理が逆、貼り付け名が要確認 |
| [layer](https://motytools.com/shiryo/layer/) | 2026-11-07公開予定 | 0 | 0 | 1 | 内容は妥当。SmartArtの「縦方向リスト」という名前が要確認 |
| [line-chart](https://motytools.com/shiryo/line-chart/) | 公開済み | 0 | 0 | 1 | 1.7倍・点の座標を検算し一致。Sheetsで特定の点にだけ数字を出す手順が要確認 |
| [logic-tree](https://motytools.com/shiryo/logic-tree/) | 公開済み | 0 | 0 | 1 | 300=6,000×5.0%等を検算し一致。入会率の下の枝が「数で戻る」決まりを満たさない |
| [map-distribution](https://motytools.com/shiryo/map-distribution/) | 公開済み | 0 | 0 | 2 | 47県・合計344店・上位8で185店54%・色の段階を検算し一致。段階の決め方の助言が見本と不一致 |
| [matrix](https://motytools.com/shiryo/matrix/) | 公開済み | 0 | 1 | 2 | SmartArtの表記「マトリクス」が画面と違う・箱名の決まりと見本のずれ。数字（3+2+2+1=8件）は正しい |
| [milestone](https://motytools.com/shiryo/milestone/) | 2026-10-31公開予定 | 0 | 0 | 0 | 問題なし。日数比例の位置（10.02〜89.98%）・あと19日・35日/19日を検算、手順名も確認 |
| [next-step](https://motytools.com/shiryo/next-step/) | 公開済み | 0 | 1 | 2 | コードの強調で文字色が変わらない、SmartArt名が要確認、titleがqa-slideと「最後のスライド」で重なる |
| [one-message](https://motytools.com/shiryo/one-message/) | 2026-10-31公開予定 | 0 | 0 | 1 | what「2行まで」とcautions「3行」の食い違いのみ。148/212社≒7割を検算 |
| [option-table](https://motytools.com/shiryo/option-table/) | 2026-10-31公開予定 | 0 | 0 | 3 | 指示文のサポート欄の区切りが曖昧、FAQの答えがぶれる、title39字。表の数字と最安の記述は正しい |
| [org-chart](https://motytools.com/shiryo/org-chart/) | 公開済み | 0 | 0 | 0 | 問題なし。部・本部・全社の人数（68+36+28=132）を検算、SmartArt・Googleの手順名を確認 |
| [pareto](https://motytools.com/shiryo/pareto/) | 公開済み | 0 | 1 | 1 | 組み込みパレート図は左目盛りが合計にならない点が抜けている（要確認）、title42字。累計と棒の高さは検算済み |
| [percent-stacked](https://motytools.com/shiryo/percent-stacked/) | 2026-11-07公開予定 | 0 | 0 | 1 | what の区分の書き方（3つが4つに見える）のみ。各行の合計100%を検算 |
| [persona](https://motytools.com/shiryo/persona/) | 公開済み | 0 | 0 | 0 | 問題なし。人物像・属性の整合、写真を使わない注意を確認。架空名「こんだて帳」の実在品は見つからず |
| [pie-chart](https://motytools.com/shiryo/pie-chart/) | 公開済み | 0 | 0 | 3 | FAQとGoogleの画面の項目名が要確認、title36字。割合合計100%・円の線の長さと位置を検算 |
| [pricing](https://motytools.com/shiryo/pricing/) | 2026-10-31公開予定 | 0 | 1 | 2 | 架空のはずのサービス名「ヨヤクノート」が実在の予約台帳アプリ名と同じ、表の行数の誤り、title40字 |
| [priority](https://motytools.com/shiryo/priority/) | 2026-10-31公開予定 | 0 | 0 | 3 | Googleのボタン名が要確認、matrixと見本の物差しが重なる、title38字。順位と効果・手間の整合は確認 |
| [problem-solution](https://motytools.com/shiryo/problem-solution/) | 公開済み | 0 | 0 | 1 | title40字で末尾が切れるのみ。6日→2日＝4日短縮、手順名を確認 |
| [pros-cons](https://motytools.com/shiryo/pros-cons/) | 公開済み | 0 | 0 | 1 | title40字で末尾が切れるのみ。1.5時間×2日＝週3時間を検算 |
| [pyramid](https://motytools.com/shiryo/pyramid/) | 公開済み | 0 | 0 | 2 | 線の太さの言い方とakaの食い違い、title37字。128/312＝41%・600万÷50万＝12か月を検算 |
| [qa-slide](https://motytools.com/shiryo/qa-slide/) | 2026-11-07公開予定 | 0 | 0 | 4 | title「最後の1枚」がFAQ・next-stepと矛盾、帯の文が曖昧、新店舗の見本が他2本と食い違う |
| [question](https://motytools.com/shiryo/question/) | 2026-10-31公開予定 | 0 | 1 | 1 | 見本の問いがはい・いいえの形で、記事の決まり（はい・いいえで終わらない）と矛盾 |
| [quote](https://motytools.com/shiryo/quote/) | 2026-11-07公開予定 | 0 | 1 | 3 | 引用の著作権FAQに主従関係が無い、架空社名に（例）が無い、引用符の作り方が不明、title45字 |
| [raci](https://motytools.com/shiryo/raci/) | 公開済み | 0 | 0 | 2 | 表記ゆれ（A とR）とtitle42字のみ。全6行でAが1つ・Rが1つ以上を確認 |
| [radar](https://motytools.com/shiryo/radar/) | 公開済み | 0 | 0 | 1 | 軸の書式設定の欄名が要確認のみ。6観点の頂点座標と上回る/下回るの要約を全部検算 |
| [ranking-bar](https://motytools.com/shiryo/ranking-bar/) | 2026-11-07公開予定 | 0 | 0 | 2 | 「軸を反転する」で目盛りが上に移る点が抜けている、titleの言い回し。合計1,935・上位2支店873＝45%を検算 |
| [recommend](https://motytools.com/shiryo/recommend/) | 2026-11-07公開予定 | 0 | 1 | 2 | title46字（上限45字超え）、pricingとの使い分けの矛盾、くだけた語。月15万×12＝年180万を検算 |
| [resource](https://motytools.com/shiryo/resource/) | 2026-11-07公開予定 | 0 | 0 | 2 | FAQで見本に無い事実を「見本なら」と書く、title39字。10人の配分と増減を検算 |
| [risk-register](https://motytools.com/shiryo/risk-register/) | 2026-10-31公開予定 | 0 | 0 | 3 | 担当欄の説明の食い違い、タブ名が要確認、titleの「テンプレート」と長さ。点数（可能性×影響）を検算 |
| [roadmap](https://motytools.com/shiryo/roadmap/) | 公開済み | 0 | 0 | 2 | SmartArt名の不一致とテンプレートの言い切りが要確認、title41字。年度・表の行列数を確認 |
| [roi](https://motytools.com/shiryo/roi/) | 公開済み | 0 | 1 | 2 | 検算OK（480h×2500円=120万、累計・回収2.5年）。FAQのROIの式と分母が食い違い |
| [scatter](https://motytools.com/shiryo/scatter/) | 公開済み | 0 | 0 | 3 | 回帰の傾き2.45・r=0.94を検算OK。最小二乗法の説明、相関の目安、メニュー名 |
| [screen-annotation](https://motytools.com/shiryo/screen-annotation/) | 公開済み | 0 | 1 | 1 | 合計101,800円・68%・棒の幅を検算OK。題名57字、注釈の上限の数字のぶれ |
| [section-divider](https://motytools.com/shiryo/section-divider/) | 2026-10-31公開予定 | 0 | 0 | 1 | 構成OK。Googleスライドのレイアウト名を「セクション ヘッダー」に |
| [service-blueprint](https://motytools.com/shiryo/service-blueprint/) | 2026-10-31公開予定 | 0 | 0 | 3 | 6列×5行・見える線の説明OK。表のメニュー名と行/列の言い間違い |
| [slope](https://motytools.com/shiryo/slope/) | 公開済み | 0 | 0 | 1 | 縦位置の式と全座標を検算OK。Googleスライドの「ソースを開く」の場所が要確認 |
| [small-multiples](https://motytools.com/shiryo/small-multiples/) | 2026-11-07公開予定 | 0 | 0 | 0 | 6店の増減率と全座標を検算OK。問題なし（Googleの操作名は slope と同件） |
| [sources](https://motytools.com/shiryo/sources/) | 2026-10-31公開予定 | 0 | 0 | 2 | 出典の書き方は妥当。列の数が指示文・手順・コードで食い違う |
| [sparkline-table](https://motytools.com/shiryo/sparkline-table/) | 公開済み | 0 | 1 | 1 | 前月比・12か月の座標を検算OK。Excelの「終点」表記とGoogle貼り付け手順が要確認 |
| [stacked-bar](https://motytools.com/shiryo/stacked-bar/) | 2026-10-31公開予定 | 0 | 0 | 2 | 合計・2.7倍・1.6倍を検算OK。見出しの因果の言い過ぎ、述語抜け |
| [stakeholder](https://motytools.com/shiryo/stakeholder/) | 公開済み | 0 | 0 | 1 | 座標と4領域（Mendelow）OK。「文字列の方向」の名前が要確認 |
| [steps](https://motytools.com/shiryo/steps/) | 2026-10-31公開予定 | 0 | 1 | 2 | 構成OK。題名53字、手順数の上限のぶれ、FAQが screen-annotation と重複 |
| [storyboard](https://motytools.com/shiryo/storyboard/) | 2026-10-31公開予定 | 0 | 1 | 2 | 題名56字。物語の1コマ目で既に気づいてしまう筋の矛盾、コマ数のぶれ |
| [summary](https://motytools.com/shiryo/summary/) | 2026-11-07公開予定 | 0 | 0 | 0 | 148/212=約7割・3×280=840万を検算OK。問題なし |
| [swimlane](https://motytools.com/shiryo/swimlane/) | 公開済み | 0 | 0 | 1 | 矢印の座標と帯の対応を確認OK。コードの端数表記のみ |
| [system-diagram](https://motytools.com/shiryo/system-diagram/) | 2026-10-31公開予定 | 0 | 0 | 0 | 矢印の向きと座標・メニュー名を確認。問題なし |
| [target-actual](https://motytools.com/shiryo/target-actual/) | 2026-10-31公開予定 | 0 | 1 | 2 | 達成率・全体102%・座標を検算OK。第2軸の目盛り合わせが抜けている |
| [testimonial](https://motytools.com/shiryo/testimonial/) | 2026-11-07公開予定 | 0 | 1 | 2 | 削減率88/86/83%を検算OK。題名51字、FAQの数え違い、比較期間の季節差 |
| [three-points](https://motytools.com/shiryo/three-points/) | 公開済み | 0 | 0 | 2 | 数字OK。覚えられる数の言い切りと段数の説明のぶれ、題名の検索語 |
| [timeline](https://motytools.com/shiryo/timeline/) | 2026-10-31公開予定 | 0 | 0 | 0 | 日付・いまの位置（8/25）・SmartArt名を確認。問題なし |
| [title-slide](https://motytools.com/shiryo/title-slide/) | 公開済み | 0 | 0 | 0 | 2026/10/21（水）の曜日、レイアウト名を確認。問題なし |
| [two-column](https://motytools.com/shiryo/two-column/) | 公開済み | 0 | 0 | 1 | 年18万円差を検算OK。表選択時のリボン名が要確認 |
| [value-chain](https://motytools.com/shiryo/value-chain/) | 公開済み | 0 | 0 | 2 | ポーターの主活動5・支援活動4OK。中黒の並べ方、「文字列の方向」 |
| [venn](https://motytools.com/shiryo/venn/) | 公開済み | 0 | 0 | 0 | 3円の交点と弧の向きを計算で確認、図形の結合「重なり抽出」OK。問題なし |
| [waterfall](https://motytools.com/shiryo/waterfall/) | 公開済み | 0 | 0 | 0 | 12.0+6.5−3.2−2.1−1.4+1.8=13.6と棒の位置を検算OK。問題なし |

## 点検した記事数

**点検した記事数／全体の記事数: 346本／346本**（公開済み 293本＋公開日がまだ来ていない資料レイアウトの図鑑 53本。全部を全文で読みました）

対象外: 計算ツールのページ（/tedori/ など）、アプリの紹介ページ、一覧ページ、運営者情報・プライバシーポリシー。これらは記事ではないため、1本ずつの点検はしていません。
