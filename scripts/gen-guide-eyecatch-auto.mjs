// /guide/ 記事のアイキャッチを、記事の frontmatter から自動で作る（1200x630 WebP・60KB以下）。
// 使い方:
//   node scripts/gen-guide-eyecatch-auto.mjs <slug> [<slug> ...]   指定した記事だけ
//   node scripts/gen-guide-eyecatch-auto.mjs --missing              image が無い記事すべて（frontmatter に image/imageAlt も書き込む）
//   node scripts/gen-guide-eyecatch-auto.mjs --force <slug>         すでにあっても作り直す
// 型: 左＝題（｜の前が大見出し、後ろが補足）、右＝アプリのアイコンと名前。載せる文字は記事の題とアプリ名だけ。
// 手作りのアイキャッチ（第1段8本）がある記事は --missing の対象外。ローカルで実行して出力をコミットする。
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import sharp from 'sharp';

const DIR = 'src/content/guide';
// アプリごとの色（アイコンの色に合わせた、文字が読める濃さ）
const APPS = {
  'recipescrap': ['レシピスクラップ', '#B4472F', '#FBEDE8'],
  'arumono-recipe': ['あるものレシピ', '#2B7556', '#E7F3EC'],
  'pitto-kigen': ['ピッと期限', '#1F7F5F', '#E4F3EC'],
  'ooya-note': ['大家ノート', '#2D5AA6', '#E8EEF9'],
  'lesson-techo': ['レッスン手帳', '#33669E', '#E8F0F9'],
  'tsukulog': ['つくログ', '#BF4B38', '#FBECE8'],
  'price-scan': ['ピッと最安', '#C9501F', '#FBEEE6'],
  'machi-anzen-map': ['まちの安全マップ', '#46664C', '#EAF1EA'],
  'memomail': ['メモびゅん', '#2F76B4', '#E7F1FA'],
  'reptile-sns': ['うちの爬虫類', '#4A7545', '#EAF2E7'],
  'sodachi': ['そだち', '#B5651D', '#FBF0E4'],
  'atoichi': ['アトイチ', '#2D4A2A', '#E9EFE6'],
};
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const parse = (slug) => {
  const src = readFileSync(path.join(DIR, slug + '.md'), 'utf8');
  const fm = src.split(/^---\s*$/m)[1] ?? '';
  const get = (k) => (fm.match(new RegExp(`^${k}:\\s*(.+)$`, 'm')) ?? [])[1]?.trim().replace(/^["']|["']$/g, '');
  return { src, fm, title: get('title'), app: get('app'), image: get('image'), draft: get('draft') === 'true' };
};
const html = (title, app) => {
  const [name, accent, tint] = APPS[app];
  const [main, ...rest] = title.split('｜');
  const sub = rest.join('｜');
  const len = [...main].length;
  // 大見出しは最大4行に収まる大きさを選ぶ（幅およそ620px）
  let size = 64;
  for (const s of [66, 60, 54, 48, 44, 40]) { size = s; if (Math.ceil(len * s / 620) <= (s >= 54 ? 3 : 4)) break; }
  const subSize = [...sub].length > 28 ? 26 : 30;
  return `<!doctype html><html lang="ja"><head><meta charset="utf-8"><style>
:root{--bg:#F7F4EC;--ink:#1C1B19;--sub:#5B574F;--accent:${accent};--tint:${tint}}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:1200px;height:630px;overflow:hidden;background:var(--bg);color:var(--ink);
 font-family:"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans JP",sans-serif;-webkit-font-smoothing:antialiased}
.ec{display:grid;grid-template-columns:780px 420px;height:630px}
.t{padding:56px 24px 52px 72px;display:flex;flex-direction:column;justify-content:center;gap:26px}
.k{align-self:flex-start;font-size:24px;font-weight:700;color:var(--accent);border:2px solid var(--accent);border-radius:8px;padding:4px 16px}
h1{font-size:${size}px;line-height:1.28;font-weight:800;letter-spacing:.01em;word-break:auto-phrase;text-wrap:balance}
.s{font-size:${subSize}px;line-height:1.5;color:var(--sub);font-weight:600;word-break:auto-phrase}
.site{font-size:22px;color:var(--sub);font-weight:600}
.v{background:var(--tint);border-left:6px solid var(--accent);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px}
.v img{width:220px;height:220px;border-radius:50px;box-shadow:0 14px 34px rgba(40,32,16,.22)}
.v b{font-size:36px;font-weight:800;color:var(--accent);letter-spacing:.02em}
</style></head><body><div class="ec">
<div class="t"><span class="k">使い方ガイド</span><h1>${esc(main)}</h1>${sub ? `<p class="s">${esc(sub)}</p>` : ''}<p class="site">motytools.com</p></div>
<div class="v"><img src="file://${path.resolve('public/app-icons', app + '-512.png')}" alt=""><b>${esc(name)}</b></div>
</div></body></html>`;
};

async function make(slug) {
  const p = parse(slug);
  if (!APPS[p.app]) throw new Error(`${slug}: アプリ ${p.app} の色が未登録`);
  const work = mkdtempSync(path.join(tmpdir(), 'ecauto-'));
  const file = path.join(work, 'e.html'); const png = path.join(work, 'shot.png');
  writeFileSync(file, html(p.title, p.app));
  for (let a = 0; a < 3 && !existsSync(png); a++) {
    try { execFileSync('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
      '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
      `--user-data-dir=${path.join(work, 'chrome')}`, '--window-size=1200,630', '--virtual-time-budget=2000',
      `--screenshot=${png}`, 'file://' + file], { stdio: 'ignore' }); } catch {}
  }
  if (!existsSync(png)) throw new Error(`${slug}: 撮影失敗`);
  const outDir = path.join('public', 'guide', slug); mkdirSync(outDir, { recursive: true });
  const out = path.join(outDir, 'eyecatch.webp');
  for (const q of [88, 80, 72, 64, 56]) {
    await sharp(png).resize(1200, 630, { fit: 'cover', position: 'top' }).webp({ quality: q, effort: 6 }).toFile(out);
    if (statSync(out).size <= 60 * 1024) break;
  }
  if (statSync(out).size > 60 * 1024) throw new Error(`${slug}: 60KB超`);
  // frontmatter に image / imageAlt を書く（無いときだけ）
  if (!p.image) {
    const main = p.title.split('｜')[0];
    const alt = `「${main}」の解説記事のアイキャッチ。${APPS[p.app][0]}の使い方ガイド`.replace(/"/g, '');
    const lines = p.src.split('\n');
    const end = lines.indexOf('---', 1);
    let at = lines.findIndex((l, i) => i < end && /^draft:/.test(l));
    if (at < 0) at = lines.findIndex((l, i) => i < end && /^publishedAt:/.test(l));
    lines.splice(at + 1, 0, `image: /guide/${slug}/eyecatch.webp`, `imageAlt: "${alt}"`);
    writeFileSync(path.join(DIR, slug + '.md'), lines.join('\n'));
  }
  return statSync(out).size;
}

const args = process.argv.slice(2);
const force = args.includes('--force');
let slugs = args.filter((a) => !a.startsWith('--'));
if (args.includes('--missing')) {
  slugs = readdirSync(DIR).filter((f) => f.endsWith('.md') && !['README.md', 'WRITING.md'].includes(f) && !f.startsWith('_'))
    .map((f) => f.slice(0, -3)).filter((s) => { const p = parse(s); return !p.draft && !p.image; });
}
if (!slugs.length) { console.error('使い方: node scripts/gen-guide-eyecatch-auto.mjs --missing | <slug>...'); process.exit(1); }
let n = 0;
for (const s of slugs) {
  try { const b = await make(s); n++; console.log(`${s} ${b}`); } catch (e) { console.error(String(e.message)); process.exitCode = 1; }
}
console.log(`作成 ${n} / ${slugs.length}`);
