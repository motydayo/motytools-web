// 図鑑（動き・UI部品 × 日本語・英語）の検査。実行: node scripts/check-zukan.mjs [slug...]
// 1. 見本が サイト共通（global.css）のクラス名とぶつかっていないか
// 2. 日本語版と英語版で、slug・no・category・mode・つまみ（key・範囲・初期値）がそろっているか
// 3. code / prompt の差し込み口 {{key}} に対応するつまみがあるか、つまみが一度は使われているか
// 4. 見本が lang を受け取り、つまみの CSS 変数（--t-<key>）か属性（data-t-<key>）を使っているか
// 5. 資料レイアウトの図鑑: no・slug・名前・分類が WRITING.md の100種の表と合っているか、
//    similar の slug が表にあるか、見本に押せる要素（a・button・input など）が無いか
import { readFileSync, readdirSync, existsSync } from 'node:fs';

const only = new Set(process.argv.slice(2));
const globalCss = readFileSync('src/styles/global.css', 'utf8');
const globals = new Set([...globalCss.matchAll(/^\.([a-zA-Z][\w-]*)/gm)].map((m) => m[1]));
const problems = [];
const warn = (where, msg) => problems.push(`${where}: ${msg}`);

const BOOKS = [
  { id: 'ugoki', ja: 'src/data/ugoki/entries', en: 'src/data/ugoki/entries-en', demos: 'src/components/ugoki/demos' },
  { id: 'ui', ja: 'src/data/ui/entries', en: 'src/data/ui/entries-en', demos: 'src/components/ugoki/ui-demos' },
  { id: 'shiryo', ja: 'src/data/shiryo/entries', en: 'src/data/shiryo/entries-en', demos: 'src/components/ugoki/shiryo-demos' },
];

// 資料レイアウトの100種の表（WRITING.md の「| No | slug | 名前 | category |」の行）
const writing = readFileSync('src/data/ugoki/WRITING.md', 'utf8');
const shiryoSec = writing.split('<!-- shiryo-master:start -->')[1]?.split('<!-- shiryo-master:end -->')[0] ?? '';
const SHIRYO_PLAN = new Map(
  [...shiryoSec.matchAll(/^\| (\d+) \| ([a-z0-9-]+) \| ([^|]+?) \| (kousei|data|keikaku|teian) \|/gm)].map((m) => [m[2], { no: m[1], name: m[3].trim(), category: m[4] }])
);
if (SHIRYO_PLAN.size !== 100) problems.push(`WRITING.md の資料レイアウトの表が100行ではない（${SHIRYO_PLAN.size}行）`);

// entries の .ts を雑に読む（型の確認はビルドがやる。ここは突き合わせだけ）
const read = (file) => {
  const src = readFileSync(file, 'utf8');
  const pick = (k) => src.match(new RegExp(`\\n  ${k}: (?:'([^']*)'|(\\d+))`))?.slice(1).find(Boolean);
  const tuneBlock = src.match(/\n  tune: \[([\s\S]*?)\n  \],/)?.[1] ?? '';
  const tune = [...tuneBlock.matchAll(/\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g)].map((m) => {
    const t = m[1];
    const g = (k) => t.match(new RegExp(`\\b${k}: (?:'([^']*)'|([\\d.]+))`))?.slice(1).find((x) => x !== undefined);
    return { key: g('key'), min: g('min'), max: g('max'), step: g('step'), value: g('value'), unit: g('unit'), type: g('type') };
  }).filter((t) => t.key);
  const tokens = [...src.matchAll(/\{\{(\w+)(?::(?:n|t))?\}\}/g)].map((m) => m[1]);
  // 差し込み口を書いてよいのは code と prompt だけ（ほかの文章ではそのまま表示されてしまう）
  const rest = src.replace(/\n  code: \[[\s\S]*?\n  \],/, '').replace(/\n  prompt:\s*\n?\s*'(?:[^'\\]|\\.)*',/, '');
  const stray = [...rest.matchAll(/\{\{\w+(?::\w)?\}\}/g)].map((m) => m[0]);
  const similar = [...(src.match(/\n  similar: \[([\s\S]*?)\n  \],/)?.[1] ?? '').matchAll(/\{ slug: '([^']+)'(?:, book: '(\w+)')?/g)].map((m) => ({ slug: m[1], book: m[2] }));
  return { src, stray, slug: pick('slug'), no: pick('no'), category: pick('category'), mode: pick('mode'), name: pick('name'), tune, tokens, similar };
};

for (const b of BOOKS) {
  if (!existsSync(b.ja)) continue;
  const jaFiles = readdirSync(b.ja).filter((f) => f.endsWith('.ts'));
  const enFiles = existsSync(b.en) ? readdirSync(b.en).filter((f) => f.endsWith('.ts')) : [];
  for (const f of jaFiles) {
    const slug = f.replace(/\.ts$/, '');
    if (only.size && !only.has(slug)) continue;
    const where = `${b.id}/${slug}`;
    const ja = read(`${b.ja}/${f}`);
    if (ja.slug !== slug) warn(where, `slug がファイル名と違う（${ja.slug}）`);
    if (ja.stray.length) warn(where, `日本語版の code・prompt 以外に差し込み口がある: ${ja.stray.join(' ')}`);
    for (const k of new Set(ja.tokens)) if (!ja.tune.some((t) => t.key === k)) warn(where, `日本語版の差し込み口 {{${k}}} に対応するつまみが無い`);
    for (const t of ja.tune) if (!ja.tokens.includes(t.key)) warn(where, `つまみ ${t.key} がコードにも指示文にも使われていない`);
    if (b.id === 'shiryo') {
      const plan = SHIRYO_PLAN.get(slug);
      if (!plan) warn(where, 'WRITING.md の100種の表に無い slug');
      else for (const k of ['no', 'name', 'category']) if (plan[k] !== ja[k]) warn(where, `${k} が100種の表と違う（${ja[k]} / 表は ${plan[k]}）`);
      if (ja.mode !== 'static') warn(where, `mode は 'static' にする（${ja.mode}）`);
      for (const s of ja.similar) if ((s.book ?? 'shiryo') === 'shiryo' && !SHIRYO_PLAN.has(s.slug)) warn(where, `similar の ${s.slug} が100種の表に無い`);
    }

    if (enFiles.includes(f)) {
      const en = read(`${b.en}/${f}`);
      for (const k of ['slug', 'no', 'category', 'mode']) if (ja[k] !== en[k]) warn(where, `${k} が日英で違う（${ja[k]} / ${en[k]}）`);
      const sig = (t) => `${t.key}|${t.type ?? 'range'}|${t.min}|${t.max}|${t.step}|${t.value}|${t.unit}`;
      if (ja.tune.map(sig).join() !== en.tune.map(sig).join()) warn(where, 'つまみ（key・範囲・初期値・単位）が日英で違う');
      if (en.stray.length) warn(where, `英語版の code・prompt 以外に差し込み口がある: ${en.stray.join(' ')}`);
      for (const k of new Set(en.tokens)) if (!en.tune.some((t) => t.key === k)) warn(where, `英語版の差し込み口 {{${k}}} に対応するつまみが無い`);
    } else if (enFiles.length) {
      warn(where, '英語版が無い');
    }

    const demo = `${b.demos}/${slug}.astro`;
    if (!existsSync(demo)) {
      warn(where, `見本 ${demo} が無い`);
      continue;
    }
    const d = readFileSync(demo, 'utf8');
    const used = new Set();
    for (const m of d.matchAll(/class(?::list)?=\{?["'`[]([^"'`\]]+)/g)) for (const c of m[1].split(/[\s,'{}]+/)) if (c) used.add(c);
    const hit = [...used].filter((c) => globals.has(c) && c !== 'sr-only');
    if (hit.length) warn(where, `サイト共通のクラス名とぶつかる: ${hit.join(', ')}`);
    if (b.id === 'shiryo') {
      const tags = [...d.replace(/<style[\s\S]*?<\/style>/g, '').matchAll(/<(a|button|input|select|textarea|details|summary|label)[\s>]/g)].map((m) => m[1]);
      if (tags.length) warn(where, `見本に押せる要素がある（一覧のカードの中で不正なHTMLになる）: ${[...new Set(tags)].join(', ')}`);
      if (!d.includes('SlideFrame')) warn(where, '見本が SlideFrame を使っていない');
    }
    if (!/lang\s*=\s*'ja'/.test(d) && enFiles.length) warn(where, '見本が lang を受け取っていない（const { size, lang = \'ja\' } = Astro.props）');
    if (!/lang=\{lang\}/.test(d) && enFiles.length) warn(where, '見本が UgFrame に lang を渡していない');
    for (const t of ja.tune) if (!d.includes(`--t-${t.key}`) && !d.includes(`data-t-${t.key}`) && !d.includes(`'${t.key}'`)) warn(where, `見本がつまみ ${t.key}（--t-${t.key}）を使っていない`);
  }
  for (const f of enFiles) if (!jaFiles.includes(f)) warn(`${b.id}/${f}`, '英語版だけあって日本語版が無い');
}

if (problems.length) {
  console.log(problems.join('\n'));
  console.log(`\n問題 ${problems.length} 件`);
  process.exitCode = 1;
} else {
  console.log('問題なし');
}
