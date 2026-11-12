// 真相メモ(/buzzmeter/articles/*)は Next.js の書き出し済みHTML。記事ごとの og:image 等を head に差し込む（何度実行しても同じ）。
// 画像は記事先頭の画像(PNG/SVG)を 1200x630 の PNG にして public/buzzmeter/og/<slug>.png へ。
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
const ROOT = 'public/buzzmeter';
const SITE = 'https://motytools.com';
mkdirSync(`${ROOT}/og`, { recursive: true });
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
for (const slug of readdirSync(`${ROOT}/articles`, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name)) {
  const f = `${ROOT}/articles/${slug}/index.html`;
  let h = readFileSync(f, 'utf8');
  const title = (h.match(/<h1[^>]*>([^<]+)/) ?? [])[1]?.trim();
  const src = (h.match(/<img[^>]*src="(\/buzzmeter\/images\/[^"]+)"/) ?? [])[1];
  if (!title || !src) { console.error(`${slug}: 題か画像が見つからない`); process.exitCode = 1; continue; }
  const out = `${ROOT}/og/${slug}.png`;
  const input = src.endsWith('.svg') ? await sharp(path.join('public', src), { density: 144 }).resize(1200, 630).png().toBuffer() : path.join('public', src);
  await sharp(input).resize(1200, 630, { fit: 'cover', kernel: 'lanczos3' }).flatten({ background: '#0f172a' }).png({ compressionLevel: 9, palette: false }).toFile(out);
  const url = `${SITE}/buzzmeter/articles/${slug}/`;
  const t = `${title}｜真相メモ`;
  const desc = (h.match(/<meta name="description" content="([^"]*)"/) ?? [])[1] ?? '';
  const block = `<!--og-start--><link rel="canonical" href="${url}"/><meta property="og:type" content="article"/><meta property="og:site_name" content="真相メモ"/><meta property="og:title" content="${esc(t)}"/><meta property="og:description" content="${desc}"/><meta property="og:url" content="${url}"/><meta property="og:image" content="${SITE}/buzzmeter/og/${slug}.png"/><meta property="og:image:width" content="1200"/><meta property="og:image:height" content="630"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="${esc(t)}"/><meta name="twitter:description" content="${desc}"/><meta name="twitter:image" content="${SITE}/buzzmeter/og/${slug}.png"/><!--og-end-->`;
  h = h.replace(/<!--og-start-->.*?<!--og-end-->/s, '');
  h = h.replace(/<title>[^<]*<\/title>/, `<title>${esc(t)}</title>`);
  h = h.replace(/(<meta name="description" content="[^"]*"\/>)/, `$1${block}`);
  writeFileSync(f, h);
  console.log(slug, title);
}
