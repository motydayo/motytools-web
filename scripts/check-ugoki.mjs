// 動きの図鑑の見本が、サイト共通（global.css）のクラス名とぶつかっていないか調べる
// 実行: node scripts/check-ugoki.mjs
import { readFileSync, readdirSync } from 'node:fs';
const globalCss = readFileSync('src/styles/global.css', 'utf8');
const globals = new Set([...globalCss.matchAll(/^\.([a-zA-Z][\w-]*)/gm)].map((m) => m[1]));
let bad = 0;
for (const f of readdirSync('src/components/ugoki/demos')) {
  const src = readFileSync(`src/components/ugoki/demos/${f}`, 'utf8');
  const used = new Set();
  for (const m of src.matchAll(/class(?::list)?=\{?["'`[]([^"'`\]]+)/g)) for (const c of m[1].split(/[\s,'{}]+/)) if (c) used.add(c);
  const hit = [...used].filter((c) => globals.has(c) && c !== 'sr-only');
  if (hit.length) {
    bad++;
    console.log(`${f}: ${hit.join(', ')}`);
  }
}
console.log(bad ? `衝突あり ${bad} 件` : '衝突なし');
