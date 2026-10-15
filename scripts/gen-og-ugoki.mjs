// 図鑑のOG画像（1200x630 PNG）を4冊（動き・UI部品 × 日英）ぶん一括生成する。
// 出力: public/og/ugoki/・ugoki-en/・ui/・ui-en/ の <slug>.png と index.png
// 実行: node scripts/gen-og-ugoki.mjs （出力はコミットする）
import sharp from 'sharp';
import { mkdir, readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const BOOKS = [
  { dir: 'src/data/ugoki/entries', out: 'ugoki', lang: 'ja', label: '動きの図鑑', index: { name: 'Webの動きの図鑑', en: 'motion patterns for websites', one: '動く見本と名前・作り方・AIへの頼み方' } },
  { dir: 'src/data/ugoki/entries-en', out: 'ugoki-en', lang: 'en', label: 'Web Motion Library', index: { name: 'Web Motion Library', en: 'animation effects, named', one: 'Live demos, tweakable code and AI prompts' } },
  { dir: 'src/data/ui/entries', out: 'ui', lang: 'ja', label: 'UI部品の図鑑', index: { name: 'UI部品の図鑑', en: 'UI components, named', one: '触れる見本と名前・使い分け・作り方' } },
  { dir: 'src/data/ui/entries-en', out: 'ui-en', lang: 'en', label: 'UI Component Library', index: { name: 'UI Component Library', en: 'UI components, named', one: 'Hands-on demos, code and AI prompts' } },
];

const pick = (src, key) => {
  const m = src.match(new RegExp(`\\n  ${key}:\\s*(?:'([^']*)'|(\\d+))`));
  return m ? (m[1] ?? m[2]) : '';
};
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// 見本と同じ「ブラウザの枠＋山の絵」を右側に置く
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

// 一言を2行まで（日本語は24字、英語は42字で区切る）
function lines(t, lang) {
  if (!t) return [];
  const max = lang === 'ja' ? 24 : 42;
  if (t.length <= max) return [t];
  let cut = max;
  if (lang === 'ja') {
    for (let i = max; i >= 14; i--) if ('、。'.includes(t[i - 1])) { cut = i; break; }
  } else {
    cut = t.lastIndexOf(' ', max);
    if (cut < 20) cut = max;
  }
  const rest = t.slice(cut).trim();
  return [t.slice(0, cut).trim(), rest.length > max ? rest.slice(0, max - 1) + '…' : rest];
}

function svg({ no, name, en, one }, b) {
  // 右の絵（x=700〜）に重ならない大きさ。1文字の幅の目安は日本語=文字の大きさ、英語=その0.6倍
  const perChar = b.lang === 'ja' ? 1 : 0.6;
  const size = Math.min(72, Math.floor(590 / (name.length * perChar)));
  const font = b.lang === 'ja' ? 'Hiragino Sans, sans-serif' : 'Inter, Helvetica, sans-serif';
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#f7f6f2"/>
  ${frame}
  <text x="80" y="150" font-family="Inter, Hiragino Sans, sans-serif" font-size="30" font-weight="800" fill="#4f46e5">${no ? `No.${String(no).padStart(2, '0')}  ` : ''}<tspan fill="#5d6272" font-weight="600">${esc(b.label)}</tspan></text>
  <text x="80" y="270" font-family="${font}" font-size="${size}" font-weight="800" fill="#1f2433">${esc(name)}</text>
  <text x="80" y="330" font-family="Inter, Hiragino Sans, sans-serif" font-size="30" font-weight="600" fill="#8a877f">${esc(en)}</text>
  ${lines(one, b.lang).map((l, i) => `<text x="80" y="${410 + i * 38}" font-family="${font}" font-size="24" fill="#5d6272">${esc(l)}</text>`).join('')}
  <text x="80" y="550" font-family="Inter, Hiragino Sans, sans-serif" font-size="32" font-weight="700" fill="#1f2433">motytools<tspan fill="#8a877f">.com</tspan></text>
</svg>`;
}

let count = 0;
for (const b of BOOKS) {
  const dir = path.join(root, b.dir);
  if (!existsSync(dir)) continue;
  const outDir = path.join(root, 'public', 'og', b.out);
  await mkdir(outDir, { recursive: true });
  const files = (await readdir(dir)).filter((f) => f.endsWith('.ts'));
  if (files.length === 0) continue;
  for (const f of files) {
    const src = await readFile(path.join(dir, f), 'utf8');
    const e = { slug: pick(src, 'slug'), no: Number(pick(src, 'no')), name: pick(src, 'name'), en: pick(src, 'en'), one: pick(src, 'oneLine') };
    await sharp(Buffer.from(svg(e, b))).png().toFile(path.join(outDir, `${e.slug}.png`));
    count++;
  }
  const idx = { no: 0, ...b.index, en: b.index.en.includes(' ') && b.lang === 'en' ? `${files.length} ${b.index.en}` : `${files.length} ${b.index.en}` };
  await sharp(Buffer.from(svg(idx, b))).png().toFile(path.join(outDir, 'index.png'));
  count++;
}
console.log(`OG画像 ${count} 枚を書き出しました`);
