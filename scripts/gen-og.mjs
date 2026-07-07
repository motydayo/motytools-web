// OG画像（1200x630 PNG）をレジストリから一括生成して public/og/ にコミットする。
// 実行: npm run og （sharpがSVGをレンダリングする。ローカルで実行して出力をコミット）
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = path.join(root, 'public', 'og');

// tools.ts は TS なので、ここでは必要な情報だけ正規表現で抜く（依存を増やさない）
import { readFile } from 'node:fs/promises';
const src = await readFile(path.join(root, 'src', 'data', 'tools.ts'), 'utf8');

const CAT_COLORS = { money: '#34d399', date: '#38bdf8', text: '#a78bfa' };
const CAT_NAMES = { money: 'お金の計算', date: '日付・年齢', text: '文字・画像' };

const tools = [];
const re = /slug:\s*'([^']+)',\s*\n\s*name:\s*'([^']+)',[\s\S]*?short:\s*'([^']+)',\s*\n\s*category:\s*'([^']+)'/g;
let m;
while ((m = re.exec(src)) !== null) {
  tools.push({ slug: m[1], name: m[2], short: m[3], category: m[4] });
}
if (tools.length === 0) throw new Error('tools.ts からツールを抽出できませんでした');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function svgFor({ name, short, category }) {
  const accent = category ? CAT_COLORS[category] : '#818cf8';
  const chip = category ? CAT_NAMES[category] : '';
  const titleSize = name.length > 12 ? 64 : 76;
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#09090b"/>
  <circle cx="1050" cy="80" r="360" fill="${accent}" opacity="0.07"/>
  <rect x="80" y="80" width="56" height="6" rx="3" fill="${accent}"/>
  ${chip ? `<text x="80" y="150" font-family="Hiragino Sans, sans-serif" font-size="28" font-weight="600" fill="${accent}">${esc(chip)}</text>` : ''}
  <text x="80" y="${chip ? 280 : 260}" font-family="Hiragino Sans, sans-serif" font-size="${titleSize}" font-weight="800" fill="#fafafa">${esc(name)}</text>
  ${short ? `<text x="80" y="${chip ? 350 : 330}" font-family="Hiragino Sans, sans-serif" font-size="30" fill="#a1a1aa">${esc(short)}</text>` : ''}
  <text x="80" y="540" font-family="Inter, Hiragino Sans, sans-serif" font-size="34" font-weight="700" fill="#fafafa">motytools<tspan fill="#71717a">.com</tspan></text>
  <text x="80" y="580" font-family="Hiragino Sans, sans-serif" font-size="22" fill="#71717a">無料・登録不要・ブラウザ完結</text>
</svg>`;
}

await mkdir(outDir, { recursive: true });

const jobs = [
  ...tools.map((t) => ({ file: `${t.slug}.png`, svg: svgFor(t) })),
  {
    file: 'default.png',
    svg: svgFor({ name: '役に立つを、かたちにする。', short: '無料Webツールとアプリのスタジオ', category: null }),
  },
  {
    file: 'tools.png',
    svg: svgFor({ name: '無料Webツール一覧', short: '計算・変換・画像処理がブラウザで完結', category: null }),
  },
];

for (const job of jobs) {
  await sharp(Buffer.from(job.svg)).png({ quality: 90, palette: true }).toFile(path.join(outDir, job.file));
  console.log('generated', job.file);
}
console.log(`done: ${jobs.length} images`);
