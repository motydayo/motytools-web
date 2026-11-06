// ストア用画像(PNG)をLP用WebPに変換する。使い方: node scripts/lp-shots-convert.mjs <取得済み画像の親フォルダ>
// 出力: public/<LP>/shots/lp-NN-v1.webp (幅560px)
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
const root = process.argv[2];
if (!root) { console.error('取得済み画像の親フォルダを渡してください'); process.exit(1); }
const cfg = JSON.parse(fs.readFileSync('data/lp-shots.json', 'utf8'));
for (const [slug, app] of Object.entries(cfg.apps)) {
  const out = path.join('public', slug, 'shots');
  fs.mkdirSync(out, { recursive: true });
  for (let i = 0; i < app.shots.length; i++) {
    const dest = path.join(out, `lp-${String(i + 1).padStart(2, '0')}-v1.webp`);
    let q = 80, buf;
    do { buf = await sharp(path.join(root, app.shots[i].src)).resize({ width: 560 }).webp({ quality: q }).toBuffer(); q -= 6; } while (buf.length > 140000 && q > 40);
    fs.writeFileSync(dest, buf);
    console.log(dest, buf.length);
  }
}
