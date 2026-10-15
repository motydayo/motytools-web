import type { APIRoute } from 'astro';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { SITE } from '../config';
import { TOOLS } from '../data/tools';
import { APPS } from '../data/apps';
import { getGuides, updatedOf, isoDate } from '../lib/guide';
import { UGOKI } from '../data/ugoki';

// 新ツールはレジストリ（src/data/tools.ts）、アプリは src/data/apps.ts、記事は src/content/guide/ から自動で載る。
// 旧静的ページ（public/ 配下）はここに手動で列挙する。lastmod はそのファイルの最終コミット日。
const LEGACY_PATHS = [
  '/buzzmeter/',
  '/buzzmeter/ranking/',
  '/buzzmeter/articles/',
  '/buzzmeter/articles/stealth-marketing-regulation-sns/',
  '/buzzmeter/articles/hikakin-onicha-why-buzz/',
  '/buzzmeter/articles/sns-fire-timeline/',
  '/buzzmeter/articles/youtuber-risk/',
  '/buzzmeter/articles/salary-transition/',
  '/buzzmeter/articles/logistics-black-box/',
  '/buzzmeter/articles/influencer-pattern/',
  '/buzzmeter/articles/applications-guide/',
  '/buzzmeter/articles/system-changes-2024/',
  '/memomail/',
  '/memomail/privacy/',
  '/memomail/terms/',
  '/memomail/support/',
  '/price-scan/',
  '/price-scan/privacy/',
  '/privacy',
  '/privacy/pitto-kigen',
  '/support/pitto-kigen',
  '/apps/lesson-techo/',
  '/apps/lesson-techo/privacy/',
  '/apps/lesson-techo/terms/',
  '/apps/tsukulog/',
  '/apps/tsukulog/privacy/',
  '/apps/tsukulog/terms/',
  '/ooya-note/',
  '/ooya-note/privacy/',
  '/ooya-note/terms/',
  '/machi-anzen-map/',
  '/machi-anzen-map/privacy/',
  '/reptile-sns/',
  '/reptile-sns/privacy/',
  '/reptile-sns/guidelines/',
  '/arumono-recipe/',
  '/arumono-recipe/privacy/',
  '/recipescrap/',
  '/recipescrap/privacy/',
  '/recipescrap/terms/',
  '/pitto-hosho/',
  '/pitto-hosho/privacy/',
  '/apps/sodachi/',
  '/apps/sodachi/privacy/',
  '/apps/sodachi/terms/',
  '/souba-watch/',
  '/souba-watch/privacy/',
  '/atoichi/',
  '/atoichi/privacy/',
  '/atoichi/terms/',
];

/** public/ 配下のファイルの最終コミット日（取れなければ fallback） */
function gitDate(path: string, fallback: string): string {
  const candidates = path.endsWith('/')
    ? [`public${path}index.html`]
    : [`public${path}.html`, `public${path}/index.html`];
  const file = candidates.find((f) => existsSync(f));
  if (!file) return fallback;
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', file], { encoding: 'utf8' }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : fallback;
  } catch {
    return fallback;
  }
}

/** src/ 配下のファイルの最終コミット日（取れなければ fallback） */
function gitDateOf(file: string, fallback: string): string {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', file], { encoding: 'utf8' }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : fallback;
  } catch {
    return fallback;
  }
}

const maxDate = (dates: string[]) => dates.reduce((a, b) => (a > b ? a : b));

export const GET: APIRoute = async () => {
  const toolsDate = SITE.toolsPublished;
  const guides = await getGuides();
  const appsDate = gitDateOf('src/data/apps.ts', toolsDate);
  const guideDates = guides.map((g) => isoDate(updatedOf(g)));
  const guideIndexDate = maxDate([appsDate, ...guideDates]);

  const lpPaths = new Set(APPS.map((a) => a.lpPath));
  const urls: { loc: string; lastmod: string; priority: string }[] = [
    { loc: '/', lastmod: gitDateOf('src/pages/index.astro', toolsDate), priority: '1.0' },
    { loc: '/tools/', lastmod: toolsDate, priority: '0.9' },
    { loc: '/apps/', lastmod: guideIndexDate, priority: '0.9' },
    ...TOOLS.map((t) => ({ loc: `/${t.slug}/`, lastmod: toolsDate, priority: '0.8' })),
    // アプリのLP（public/ の静的ページ）
    ...APPS.map((a) => ({ loc: a.lpPath, lastmod: gitDate(a.lpPath, toolsDate), priority: '0.8' })),
  ];

  // 動きの図鑑（src/data/ugoki/entries/ から自動で載る）
  if (UGOKI.length > 0) {
    const ugokiDates = UGOKI.map((u) => u.updatedAt ?? u.publishedAt);
    urls.push({ loc: '/ugoki/', lastmod: maxDate(ugokiDates), priority: '0.9' });
    for (const u of UGOKI) urls.push({ loc: `/ugoki/${u.slug}/`, lastmod: u.updatedAt ?? u.publishedAt, priority: '0.7' });
  }

  if (guides.length > 0) {
    urls.push({ loc: '/guide/', lastmod: guideIndexDate, priority: '0.8' });
    for (const g of guides) {
      urls.push({ loc: `/guide/${g.id}/`, lastmod: isoDate(updatedOf(g)), priority: '0.7' });
    }
    // 記事が1本以上あるアプリの記事一覧だけ（0本のページは noindex なので載せない）
    for (const a of APPS) {
      const own = guides.filter((g) => g.data.app === a.slug);
      if (own.length === 0) continue;
      urls.push({
        loc: `/guide/app/${a.slug}/`,
        lastmod: maxDate(own.map((g) => isoDate(updatedOf(g)))),
        priority: '0.6',
      });
    }
  }

  for (const p of LEGACY_PATHS) {
    if (lpPaths.has(p)) continue;
    urls.push({ loc: p, lastmod: gitDate(p, toolsDate), priority: '0.5' });
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE.url}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
