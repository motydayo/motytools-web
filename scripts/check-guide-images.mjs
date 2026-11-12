// /guide/ 記事のアイキャッチ検品。npm run build の前に走る。
// - image を書いた記事: ファイルが存在・WebP・1200x630・60KB以下・imageAlt あり
// - draft 以外の全記事は image 必須（無ければビルドを止める）。
//   無い記事は node scripts/gen-guide-eyecatch-auto.mjs <slug> で自動生成する。
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const DIR = 'src/content/guide';
const REQUIRED_FROM = '0000-00-00'; // 2026-11-12 以降は全記事(draft除く)で必須
const MAX_BYTES = 60 * 1024;
const errors = [];
let withImage = 0;
let missingOld = 0;

for (const f of readdirSync(DIR)) {
  if (!f.endsWith('.md') || f === 'README.md' || f === 'WRITING.md' || f.startsWith('_')) continue;
  const slug = f.slice(0, -3);
  const fm = readFileSync(join(DIR, f), 'utf8').split(/^---\s*$/m)[1] ?? '';
  const get = (k) => (fm.match(new RegExp(`^${k}:\\s*(.+)$`, 'm')) ?? [])[1]?.trim().replace(/^["']|["']$/g, '');
  if (get('draft') === 'true') continue;
  const image = get('image');
  const alt = get('imageAlt');
  const published = get('publishedAt') ?? '';
  if (!image) {
    if (published >= REQUIRED_FROM) errors.push(`${slug}: アイキャッチ(image/imageAlt)が必須です(公開日 ${published})`);
    else missingOld++;
    continue;
  }
  withImage++;
  const file = join('public', image);
  if (!existsSync(file)) { errors.push(`${slug}: 画像が無い ${file}`); continue; }
  if (!alt || alt.length < 10) errors.push(`${slug}: imageAlt が無いか短すぎる`);
  if (statSync(file).size > MAX_BYTES) errors.push(`${slug}: 画像が60KB超 (${statSync(file).size})`);
  const meta = await sharp(file).metadata();
  if (meta.format !== 'webp') errors.push(`${slug}: WebPではない (${meta.format})`);
  if (meta.width !== 1200 || meta.height !== 630) errors.push(`${slug}: 1200x630ではない (${meta.width}x${meta.height})`);
}

if (errors.length) {
  console.error('guide アイキャッチ検品: NG\n' + errors.map((e) => ' - ' + e).join('\n'));
  process.exit(1);
}
console.log(`guide アイキャッチ検品: OK (画像あり ${withImage} 本 / 既存で未設定 ${missingOld} 本 = 11/8以降に付与予定)`);
