// /guide/ 記事のアイキャッチを HTML から作る（1200x630 WebP・60KB以下）。
// 使い方: node scripts/gen-guide-eyecatch.mjs <eyecatch.html> <slug>
//   → public/guide/<slug>/eyecatch.webp を書き出す。HTML は 1200x630 の1枚として組む。
// ローカルで実行して出力をコミットする（ビルドの中では作らない）。
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import sharp from 'sharp';

const [html, slug] = process.argv.slice(2);
if (!html || !slug) { console.error('使い方: node scripts/gen-guide-eyecatch.mjs <html> <slug>'); process.exit(1); }
const work = mkdtempSync(path.join(tmpdir(), 'eyecatch-'));
const png = path.join(work, 'shot.png');
// Chrome は撮影できても終了コードが0でないことがあるので、画像ができたかで判定し、無ければ1回だけやり直す
for (let attempt = 0; attempt < 2 && !existsSync(png); attempt++) {
  try { execFileSync('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
  `--user-data-dir=${path.join(work, 'chrome')}`, '--window-size=1200,630',
  '--virtual-time-budget=3000', `--screenshot=${png}`, 'file://' + path.resolve(html),
], { stdio: 'ignore' }); } catch {}
}
if (!existsSync(png)) { console.error('撮影に失敗しました'); process.exit(1); }
const outDir = path.join('public', 'guide', slug);
mkdirSync(outDir, { recursive: true });
const out = path.join(outDir, 'eyecatch.webp');
const LIMIT = 60 * 1024;
for (const q of [86, 80, 74, 68, 62, 56, 50]) {
  await sharp(png).resize(1200, 630, { fit: 'cover', position: 'top' }).webp({ quality: q, effort: 6, smartSubsample: true }).toFile(out);
  const size = statSync(out).size;
  if (size <= LIMIT) { console.log(`${out}  ${size} bytes (quality ${q})`); process.exit(0); }
}
console.error(`${out}: 60KB以下にできませんでした。絵を単純にしてください`);
process.exit(1);
