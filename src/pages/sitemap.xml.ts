import type { APIRoute } from 'astro';
import { SITE } from '../config';
import { TOOLS } from '../data/tools';

// 新ツールはレジストリ（src/data/tools.ts）から自動で載る。
// 旧静的ページ（public/ 配下）はここに手動で列挙する。
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
  '/price-scan/',
  '/price-scan/privacy/',
  '/privacy',
  '/privacy/pitto-kigen',
];

export const GET: APIRoute = () => {
  const lastmod = SITE.toolsPublished;
  const urls: { loc: string; priority: string }[] = [
    { loc: '/', priority: '1.0' },
    { loc: '/tools/', priority: '0.9' },
    ...TOOLS.map((t) => ({ loc: `/${t.slug}/`, priority: '0.8' })),
    ...LEGACY_PATHS.map((p) => ({ loc: p, priority: '0.5' })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE.url}${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
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
