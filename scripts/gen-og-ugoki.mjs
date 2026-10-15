// 動きの図鑑のOG画像（1200x630 PNG）を src/data/ugoki/entries/ から一括生成して public/og/ugoki/ に置く。
// 実行: node scripts/gen-og-ugoki.mjs （出力はコミットする）
import sharp from 'sharp';
import { mkdir, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const entriesDir = path.join(root, 'src', 'data', 'ugoki', 'entries');
const outDir = path.join(root, 'public', 'og', 'ugoki');
await mkdir(outDir, { recursive: true });

const pick = (src, key) => {
  const m = src.match(new RegExp(`\\b${key}:\\s*(?:'([^']*)'|(\\d+))`));
  return m ? (m[1] ?? m[2]) : '';
};
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const entries = [];
for (const f of await readdir(entriesDir)) {
  if (!f.endsWith('.ts')) continue;
  const src = await readFile(path.join(entriesDir, f), 'utf8');
  entries.push({ slug: pick(src, 'slug'), no: Number(pick(src, 'no')), name: pick(src, 'name'), en: pick(src, 'en'), one: pick(src, 'oneLine') });
}
if (entries.length === 0) throw new Error('entries が見つかりません');

// 図鑑の見本と同じ「ブラウザの枠＋山の絵」を右側に置く
const frame = `
  <g transform="translate(700 150)">
    <rect width="420" height="330" rx="22" fill="#ffffff" stroke="#e4e2dc" stroke-width="2"/>
    <rect width="420" height="40" rx="22" fill="#efede7"/><rect y="20" width="420" height="20" fill="#efede7"/>
    <circle cx="26" cy="20" r="6" fill="#d3d0c8"/><circle cx="46" cy="20" r="6" fill="#d3d0c8"/><circle cx="66" cy="20" r="6" fill="#d3d0c8"/>
    <rect x="130" y="10" width="160" height="20" rx="10" fill="#fff"/>
    <rect x="24" y="62" width="372" height="190" rx="12" fill="#dfe8fb"/>
    <circle cx="300" cy="112" r="22" fill="#f06a35"/>
    <path d="M24 214 L110 140 L180 196 L250 130 L330 190 L396 160 V252 H24Z" fill="#8fa9ec"/>
    <path d="M24 252 V226 L130 176 L220 240 L300 186 L396 226 V252Z" fill="#4f73d9"/>
    <rect x="24" y="270" width="250" height="10" rx="5" fill="#e9e7e1"/>
    <rect x="24" y="292" width="190" height="10" rx="5" fill="#e9e7e1"/>
    <rect x="20" y="58" width="380" height="198" rx="14" fill="none" stroke="#4f73d9" stroke-width="3" stroke-dasharray="10 8"/>
  </g>`;

// 一言を24字ずつ2行まで（句読点の直後で切れるならそこで切る）
function lines(t) {
  if (!t) return [];
  if (t.length <= 24) return [t];
  let cut = 24;
  for (let i = 24; i >= 14; i--) if ('、。'.includes(t[i - 1])) { cut = i; break; }
  const rest = t.slice(cut);
  return [t.slice(0, cut), rest.length > 24 ? rest.slice(0, 23) + '…' : rest];
}

function svg({ no, name, en, one }) {
  const size = name.length > 11 ? 54 : name.length > 8 ? 62 : 72;
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#f7f6f2"/>
  ${frame}
  <text x="80" y="150" font-family="Inter, Hiragino Sans, sans-serif" font-size="30" font-weight="800" fill="#4f46e5">${no ? `No.${String(no).padStart(2, '0')}  ` : ''}<tspan fill="#5d6272" font-weight="600">動きの図鑑</tspan></text>
  <text x="80" y="270" font-family="Hiragino Sans, sans-serif" font-size="${size}" font-weight="800" fill="#1f2433">${esc(name)}</text>
  <text x="80" y="330" font-family="Inter, Hiragino Sans, sans-serif" font-size="30" font-weight="600" fill="#8a877f">${esc(en)}</text>
  ${lines(one).map((l, i) => `<text x="80" y="${410 + i * 38}" font-family="Hiragino Sans, sans-serif" font-size="24" fill="#5d6272">${esc(l)}</text>`).join('')}
  <text x="80" y="550" font-family="Inter, Hiragino Sans, sans-serif" font-size="32" font-weight="700" fill="#1f2433">motytools<tspan fill="#8a877f">.com</tspan></text>
</svg>`;
}

for (const e of entries) {
  await sharp(Buffer.from(svg(e))).png().toFile(path.join(outDir, `${e.slug}.png`));
}
await sharp(Buffer.from(svg({ no: 0, name: 'Webの動きの図鑑', en: `${entries.length} motion patterns for websites`, one: '動く見本と名前・作り方・AIへの頼み方' })))
  .png()
  .toFile(path.join(outDir, 'index.png'));
console.log(`OG画像 ${entries.length + 1} 枚を public/og/ugoki/ に書き出しました`);
