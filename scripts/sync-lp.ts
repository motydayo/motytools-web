// アプリLP（public/ 配下の静的HTML）を src/data/apps.ts の内容に合わせて書き換える。
// 何度実行しても同じ結果になる（目印コメントで囲んだ部分だけを差し替える）。
//
// 実行: node scripts/sync-lp.ts
//
// 書き換える内容:
//  1. <title>・meta description・og:title・og:description・twitter:title/description（検索語を前に）
//  2. <head> の末尾に apple-itunes-app（iPhoneのSafariのダウンロード帯）・SoftwareApplication 構造化データ・
//     og:image（無い場合だけアプリアイコン）・下部導線のCSS
//  3. フッターの直前に「関連する記事」(/guide/app/<slug>/) と「他のアプリ」(/apps/) への導線
//
// メモびゅん（/memomail/）は Next.js の書き出しなので、titleと説明文は埋め込みデータ側も同じ文字列で置き換え、
// 既存の構造化データ要素は中身だけ差し替える（要素を足し引きすると画面の再構築で表示が崩れるため）。

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { APPS, softwareApplicationLd, type AppEntry } from '../src/data/apps.ts';

const SITE = 'https://motytools.com';
const HEAD_START = '<!-- motytools:app-meta:start -->';
const HEAD_END = '<!-- motytools:app-meta:end -->';
const MORE_START = '<!-- motytools:more:start -->';
const MORE_END = '<!-- motytools:more:end -->';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const stripBlock = (s: string, start: string, end: string) => {
  const re = new RegExp(`\\n?[ \\t]*${start}[\\s\\S]*?${end}\\s*`, 'g');
  return s.replace(re, '');
};

const MORE_CSS = `<style>
    section.mt-more { margin: 0; padding: 48px 0 40px; border-top: 1px solid var(--border, var(--line, #e5e5e5)); background: var(--bg-2, #fafaf9); text-align: left; }
    .mt-more .mt-more-in { max-width: 960px; margin: 0 auto; padding: 0 24px; }
    .mt-more .mt-more-h { margin: 0 0 16px; font-size: 20px; font-weight: 700; line-height: 1.4; letter-spacing: -0.01em; color: var(--text, #1d1d1f); text-align: left; }
    .mt-more .mt-more-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
    .mt-more .mt-more-card { position: relative; display: grid; gap: 4px; min-height: 64px; padding: 16px 48px 16px 16px; background: #fff; border: 1px solid var(--border, var(--line, #e5e5e5)); border-radius: 12px; color: var(--text, #1d1d1f); text-decoration: none; transition: border-color .15s, transform .15s; }
    .mt-more .mt-more-card:hover { border-color: var(--accent, #555); transform: translateY(-1px); }
    .mt-more .mt-more-card:active { transform: translateY(0); }
    .mt-more .mt-more-t { font-size: 16px; font-weight: 700; line-height: 1.5; color: var(--text, #1d1d1f); }
    .mt-more .mt-more-d { font-size: 13px; line-height: 1.6; color: var(--text-2, var(--sub, #55555c)); }
    .mt-more .mt-more-card svg { position: absolute; right: 16px; top: 50%; transform: translateY(-50%); color: var(--text-3, #8e8e93); }
    @media (max-width: 640px) { .mt-more .mt-more-grid { grid-template-columns: 1fr; } .mt-more .mt-more-in { padding: 0 16px; } }
  </style>`;

const ARROW =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';

function moreSection(app: AppEntry): string {
  return `${MORE_START}
  <section class="mt-more" aria-labelledby="mt-more-h">
    <div class="mt-more-in">
      <h2 class="mt-more-h" id="mt-more-h">もっと知る</h2>
      <div class="mt-more-grid">
        <a class="mt-more-card" href="/guide/app/${app.slug}/">
          <span class="mt-more-t">関連する記事</span>
          <span class="mt-more-d">${esc(app.name)}の使い方と、役立つ記事</span>
          ${ARROW}
        </a>
        <a class="mt-more-card" href="/apps/">
          <span class="mt-more-t">他のアプリ</span>
          <span class="mt-more-d">motytoolsのiPhoneアプリ一覧（${APPS.length}本）</span>
          ${ARROW}
        </a>
      </div>
    </div>
  </section>
  ${MORE_END}`;
}

/** 正規表現で最初に一致したグループ1を返す */
const pick = (s: string, re: RegExp) => s.match(re)?.[1];

function replaceAllIn(s: string, from: string | undefined, to: string): string {
  if (!from || from === to) return s;
  return s.split(from).join(to);
}

function syncOne(app: AppEntry) {
  const file = `public${app.lpPath}index.html`;
  if (!existsSync(file)) {
    console.warn(`見つからない: ${file}`);
    return;
  }
  const isNext = app.slug === 'memomail';
  let s = readFileSync(file, 'utf8');
  s = stripBlock(s, HEAD_START, HEAD_END);
  s = stripBlock(s, MORE_START, MORE_END);

  const headEnd = s.indexOf('</head>');
  let head = s.slice(0, headEnd);
  let rest = s.slice(headEnd);

  const title = esc(app.lpTitle);
  const desc = esc(app.lpDescription);
  const oldTitle = pick(head, /<title>([^<]*)<\/title>/);
  const oldDesc = pick(head, /<meta name="description" content="([^"]*)"/);
  const oldOgTitle = pick(head, /<meta property="og:title" content="([^"]*)"/);
  const oldOgDesc = pick(head, /<meta property="og:description" content="([^"]*)"/);
  const oldTwTitle = pick(head, /<meta name="twitter:title" content="([^"]*)"/);
  const oldTwDesc = pick(head, /<meta name="twitter:description" content="([^"]*)"/);

  if (isNext) {
    // 埋め込みデータ（画面の再構築に使われる）にも同じ文字列があるので、ファイル全体で置き換える
    let all = head + rest;
    for (const [from, to] of [
      [oldTitle, title],
      [oldDesc, desc],
      [oldOgTitle, title],
      [oldOgDesc, desc],
      [oldTwTitle, title],
      [oldTwDesc, desc],
    ] as const) {
      all = replaceAllIn(all, from, to);
    }
    const he = all.indexOf('</head>');
    head = all.slice(0, he);
    rest = all.slice(he);
    // 既存の構造化データ要素は中身だけ差し替える
    head = head.replace(
      /(<script type="application\/ld\+json">)[\s\S]*?(<\/script>)/,
      (_m, a, b) => `${a}${JSON.stringify(softwareApplicationLd(app, SITE))}${b}`
    );
    // 画面の再構築用データ（index.txt）も同じ文字列にそろえる
    const txt = `public${app.lpPath}index.txt`;
    if (existsSync(txt)) {
      let t = readFileSync(txt, 'utf8');
      for (const [from, to] of [
        [oldTitle, title],
        [oldDesc, desc],
        [oldOgTitle, title],
        [oldOgDesc, desc],
        [oldTwTitle, title],
        [oldTwDesc, desc],
      ] as const) {
        t = replaceAllIn(t, from, to);
      }
      writeFileSync(txt, t);
    }
  } else {
    head = head.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
    head = head.replace(/(<meta name="description" content=")[^"]*(")/, `$1${desc}$2`);
    head = head.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`);
    head = head.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${desc}$2`);
    head = head.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`);
    head = head.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${desc}$2`);
  }

  const lines: string[] = [];
  lines.push(`<meta name="apple-itunes-app" content="app-id=${app.appId}" />`);
  if (!/property="og:image"/.test(head)) {
    lines.push(`<meta property="og:image" content="${SITE}${app.icon512}" />`);
  }
  if (!/name="twitter:card"/.test(head)) {
    lines.push(`<meta name="twitter:card" content="summary" />`);
  }
  if (!isNext) {
    lines.push(
      `<script type="application/ld+json">${JSON.stringify(softwareApplicationLd(app, SITE))}</script>`
    );
  }
  lines.push(MORE_CSS);
  // Next.js のページは空白の文字ノードも画面の再構築で照合されうるので、改行なしで詰めて入れる
  const block = isNext
    ? `${HEAD_START}${lines.join('')}${HEAD_END}`.replace(/\n\s*/g, ' ')
    : `  ${HEAD_START}\n  ${lines.join('\n  ')}\n  ${HEAD_END}\n`;
  head = isNext ? head + block : head.replace(/\s*$/, '\n') + block;

  s = head + rest;

  // 下部の導線: 通常のLPは最後の <footer の直前、Next.js のLPは </body> の直前
  const more = isNext ? moreSection(app).replace(/>\s+</g, '><').replace(/\n\s*/g, ' ') : moreSection(app);
  if (isNext) {
    const at = s.lastIndexOf('</body>');
    s = s.slice(0, at) + more + s.slice(at);
  } else {
    const at = s.lastIndexOf('<footer');
    if (at < 0) throw new Error(`footer が無い: ${file}`);
    s = s.slice(0, at) + more + '\n\n  ' + s.slice(at);
  }

  writeFileSync(file, s);
  console.log(`更新: ${file}`);
}

for (const app of APPS) syncOne(app);
