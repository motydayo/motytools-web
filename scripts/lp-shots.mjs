// アプリLPの操作画面の差し込み(inject)と検品(check)。
//   node scripts/lp-shots.mjs inject   … data/lp-shots.json の画像をLPのhtmlへ差し込む(何度流しても同じ結果)
//   node scripts/lp-shots.mjs check    … 画像の無いアプリLP・alt/サイズ欠け・重すぎを見つけたら失敗(終了コード1)
// package.json の prebuild で両方走るので、画像の無いLPはビルドで止まる。
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const cfg = JSON.parse(fs.readFileSync('data/lp-shots.json', 'utf8'));
const PUB = 'public';
const START = '<!--lp-shots:start-->', END = '<!--lp-shots:end-->';
const HSTART = '<!--lp-shots-hero:start-->', HEND = '<!--lp-shots-hero:end-->';
const MAX_BYTES = 150 * 1024;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const lpPath = (slug) => path.join(PUB, slug, 'index.html');
const files = (slug, n) => Array.from({ length: n }, (_, i) => `/${slug}/shots/lp-${String(i + 1).padStart(2, '0')}-v1.webp`);

async function imgTag(url, alt, attrs) {
  const m = await sharp(path.join(PUB, url)).metadata();
  return `<img class="lps-shot" src="${url}" alt="${esc(alt)}" width="${m.width}" height="${m.height}" ${attrs} />`;
}

async function inject() {
  for (const [slug, app] of Object.entries(cfg.apps)) {
    if (app.source === 'next') continue; // Next.js書き出し: 別リポジトリ(memomail-lp)のページ側に画像がある。ここで足すと画面の再構築で消える
    const p = lpPath(slug);
    let html = fs.readFileSync(p, 'utf8');
    // 既存ブロックと、旧版の飾り画像を外す
    html = html.replace(new RegExp(`${HSTART}[\\s\\S]*?${HEND}`), '').replace(new RegExp(`\\s*${START}[\\s\\S]*?${END}`), '');
    if (!html.includes('/assets/lp-shots.v1.css')) html = html.replace('</head>', '  <link rel="stylesheet" href="/assets/lp-shots.v1.css" />\n</head>');
    const urls = files(slug, app.shots.length);
    // ヒーロー内に代表の1枚（hero:false のページは本文の頭に全部並べる）
    const heroN = app.hero ? 1 : 0;
    const secEnd = html.indexOf('</section>', html.indexOf('<section'));
    if (secEnd < 0) throw new Error(`${slug}: 先頭のsectionが見つかりません`);
    let before = html.slice(0, secEnd), after = html.slice(secEnd);
    if (heroN) {
      const hero = `${HSTART}<figure class="lps-hero">${await imgTag(urls[0], app.shots[0].alt, 'fetchpriority="high"')}</figure>${HEND}`;
      const k = before.lastIndexOf('</div>');
      before = before.slice(0, k) + hero + before.slice(k);
    }
    const rest = app.shots.slice(heroN);
    const items = [];
    for (let i = 0; i < rest.length; i++) items.push(`<li>${await imgTag(urls[i + heroN], rest[i].alt, 'loading="lazy" decoding="async"')}</li>`);
    const n = rest.length >= 5 ? ' lps-n5' : rest.length === 3 ? ' lps-n3' : '';
    const gallery = `${START}<section class="lps" aria-labelledby="lps-h"><div class="lps-in"><h2 id="lps-h" class="lps-title">${esc(app.name)}の画面</h2><ul class="lps-row${n}">${items.join('')}</ul></div></section>${END}`;
    html = before + after.replace('</section>', '</section>' + gallery);
    fs.writeFileSync(p, html);
    console.log('inject', slug, app.shots.length);
  }
}

function imgsOf(html) { return [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]).filter((t) => !/lps-icon|app-icon|icon-\d|icon-v|og-/.test(t)); }

function check() {
  const errs = [];
  const known = new Set([...Object.keys(cfg.apps), ...cfg.existing, ...Object.keys(cfg.exempt)]);
  // 配信中のアプリLP（App Storeへのリンクがあるindex.html）が一覧に無ければ失敗
  const cands = [];
  for (const d of fs.readdirSync(PUB, { withFileTypes: true })) {
    if (!d.isDirectory()) continue;
    if (fs.existsSync(path.join(PUB, d.name, 'index.html'))) cands.push(d.name);
    if (d.name === 'apps') for (const s of fs.readdirSync(path.join(PUB, 'apps'))) if (fs.existsSync(lpPath('apps/' + s))) cands.push('apps/' + s);
  }
  for (const slug of cands) {
    const h = fs.readFileSync(lpPath(slug), 'utf8');
    if (/apps\.apple\.com\/jp\/app\/id\d+/.test(h) && !known.has(slug)) errs.push(`${slug}: アプリLPなのに data/lp-shots.json にありません（画像を足してください）`);
  }
  for (const slug of [...Object.keys(cfg.apps), ...cfg.existing]) {
    if (!fs.existsSync(lpPath(slug))) { errs.push(`${slug}: LPが見つかりません`); continue; }
    const h = fs.readFileSync(lpPath(slug), 'utf8');
    const tags = imgsOf(h);
    if (tags.length < 3) errs.push(`${slug}: 操作画面の画像が${tags.length}枚（3枚以上必要）`);
    if (cfg.apps[slug] && cfg.apps[slug].source !== 'next' && (!h.includes(START) || (cfg.apps[slug].hero && !h.includes(HSTART)))) errs.push(`${slug}: 差し込みブロックがありません（npm run lp:shots）`);
    tags.forEach((t, i) => {
      const alt = (t.match(/alt="([^"]*)"/) || [])[1];
      if (!alt || alt.length < 5) errs.push(`${slug}: ${i + 1}枚目のaltが無いか短すぎます`);
      if (!/width="\d+"/.test(t) || !/height="\d+"/.test(t)) errs.push(`${slug}: ${i + 1}枚目にwidth/heightがありません`);
      const src = (t.match(/src="([^"]+)"/) || [])[1];
      const f = src && path.join(PUB, src);
      if (!f || !fs.existsSync(f)) errs.push(`${slug}: 画像ファイルがありません ${src}`);
      else if (cfg.apps[slug] && fs.statSync(f).size > MAX_BYTES) errs.push(`${slug}: ${src} が150KBを超えています`);
    });
    if (cfg.apps[slug] && tags.length >= 2) {
      const lazy = tags.filter((t) => /loading="lazy"/.test(t)).length;
      if (lazy < tags.length - 1) errs.push(`${slug}: 最初の1枚以外は loading="lazy" にしてください`);
    }
  }
  if (errs.length) { console.error('LP画像の検品に失敗:\n' + errs.map((e) => ' - ' + e).join('\n')); process.exit(1); }
  console.log('LP画像の検品OK', Object.keys(cfg.apps).length + cfg.existing.length, 'ページ');
}

const mode = process.argv[2];
if (mode === 'inject') await inject(); else if (mode === 'check') check(); else { console.error('inject か check を指定'); process.exit(1); }
