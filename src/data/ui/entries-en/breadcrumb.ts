import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'breadcrumb',
  no: 9,
  category: 'nav',
  name: 'Breadcrumbs',
  en: 'パンくずリスト',
  aka: ['Breadcrumb navigation', 'Breadcrumb trail', 'Breadcrumb links', 'Breadcrumb menu'],
  mode: 'script',
  title: 'Breadcrumb Navigation: Accessible Markup, CSS and Schema.org',
  description:
    'Breadcrumb navigation shows where a page sits in your site. Accessible markup with nav, ol and aria-current, silent CSS separators and BreadcrumbList schema.',
  oneLine: 'A trail like “Home › Category › This page” that shows where you are in the site.',
  what: [
    'Breadcrumbs show where the current page sits in your site, as a trail from the home page down. The name comes from Hansel and Gretel dropping crumbs to find their way home. In the demo, the hotel page shows “Home › Find a stay › Colorado › Aspen Ridge Lodge”. Click “Colorado” and you move up to the state listing — and the trail gets one step shorter.',
    'The key point: breadcrumbs reflect the site’s hierarchy, not the visitor’s browsing history. Someone who lands on a detail page straight from Google can still jump up to the listing in one click — where the browser’s Back button would just take them back to the search results.',
    'The conventions: wrap the trail in <nav aria-label="Breadcrumb"> and use an <ol>, because the order matters. The last item is the current page, so it is not a link and gets aria-current="page". Separators like “›” are decoration — draw them in CSS and keep screen readers from announcing them.',
  ],
  when: [
    'Online stores with two or more levels of categories, like Home › Appliances › Refrigerators › Product',
    'Travel, real estate and job sites where people drill down from region to city to listing',
    'Help centers and blogs where articles live inside categories',
    'Detail pages that get search traffic, where you want visitors to browse similar pages',
  ],
  avoid: [
    'Small, flat sites with only one or two levels — “Home › This page” just takes up space',
    'Single-page landing pages where you do not want people wandering off',
    'Step-by-step checkouts and sign-up flows — that is a sequence, not a hierarchy, so use a stepper',
  ],
  prompt:
    'Add breadcrumb navigation above the product page heading. Use <nav aria-label="Breadcrumb"> with an <ol> listing the hierarchy, e.g. Home › Appliances › Refrigerators › Product name. Do not link the last item (the current page); mark it with aria-current="page". Draw the separator, {{sep:t}}, with a CSS ::before pseudo-element that screen readers do not announce, with {{gap:t}} of space on each side. Set the font size to {{size:t}} and give each link enough vertical padding for a 44px tap target. On narrow screens, keep it on one line and scroll horizontally, making sure the current page is visible. Also output matching BreadcrumbList structured data in JSON-LD.',
  howTo: [
    'Put an <ol> inside a <nav>, one <li> per level. Earlier levels are <a> links; the last one is plain text with aria-current="page". Screen readers then announce “Breadcrumb, navigation, list, 4 items” and know which one is the current page.',
    'Draw the separators with li + li::before. Writing content: "›" / ""; adds an empty alternative text, so the symbol shows on screen but is not read aloud. Then describe the same trail in JSON-LD as BreadcrumbList structured data: it helps search engines understand your site structure, and Google may use it to show the page’s position in search results.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<nav class="crumbs" aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/stays/">Find a stay</a></li>
    <li><a href="/stays/colorado/">Colorado</a></li>
    <li><span aria-current="page">Aspen Ridge Lodge</span></li>
  </ol>
</nav>

<!-- The same trail as structured data for Google -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/" },
    { "@type": "ListItem", "position": 2, "name": "Find a stay", "item": "https://example.com/stays/" },
    { "@type": "ListItem", "position": 3, "name": "Colorado", "item": "https://example.com/stays/colorado/" },
    { "@type": "ListItem", "position": 4, "name": "Aspen Ridge Lodge" }
  ]
}
</script>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.crumbs ol {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: {{size}};
  /* Stay on one line and scroll on narrow screens */
  white-space: nowrap;
  overflow-x: auto;
}
.crumbs li { display: flex; align-items: center; }
/* Separator (the / "" part keeps it silent for screen readers) */
.crumbs li + li::before {
  content: {{sep}} / "";
  margin-inline: {{gap}};
  color: #9aa0ad;
}
/* 44px tap target */
.crumbs a,
.crumbs [aria-current] {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
}
.crumbs [aria-current] { font-weight: 700; }`,
    },
    {
      lang: 'js',
      label: 'JavaScript (optional)',
      code: `// When the trail overflows on mobile, scroll so the current page is visible
document.querySelectorAll('.crumbs ol').forEach((ol) => {
  ol.scrollLeft = ol.scrollWidth;
});`,
    },
  ],
  tune: [
    {
      key: 'sep',
      type: 'select',
      label: 'Separator',
      value: '"›"',
      options: [
        { value: '"›"', label: '› (chevron)' },
        { value: '"/"', label: '/ (slash)' },
        { value: '">"', label: '> (greater-than)' },
      ],
    },
    { key: 'gap', label: 'Separator spacing', min: 4, max: 16, step: 1, value: 8, unit: 'px' },
    { key: 'size', label: 'Font size', min: 11, max: 16, step: 1, value: 13, unit: 'px' },
  ],
  cautions: [
    'Do not link the last item. Clicking it just reloads the page you are on, which is confusing. Make it plain text with aria-current="page".',
    'If you type the separator into the HTML (“Home > Appliances”), screen readers read “greater than” between every item. Draw it in CSS instead.',
    'Keep the BreadcrumbList markup in sync with the visible trail. Marking up levels that are not on the page goes against Google’s structured data guidelines.',
    'Breadcrumbs tend to be set in small type, which makes mis-taps likely on phones. Keep the text small if you like, but pad links to a 44px tap height.',
  ],
  similar: [
    { slug: 'stepper', diff: 'A stepper shows where you are in a sequence, such as a checkout. Breadcrumbs show where you are in the site’s hierarchy.' },
    { slug: 'scrollspy', book: 'ugoki', diff: 'A scrollspy highlights the section you are reading in a page’s table of contents. Breadcrumbs show where the whole page sits in the site.' },
    { slug: 'sidebar', diff: 'A sidebar keeps sibling destinations visible in a vertical list. Breadcrumbs only show the path back up, on a single line.' },
  ],
  faq: [
    {
      q: 'Do breadcrumbs help SEO?',
      a: 'Do not expect a ranking boost from breadcrumbs alone. They help search engines understand your site structure, and Google may use BreadcrumbList structured data to show the trail in search results. More importantly, they make it easy for visitors to move from a detail page up to a listing and keep browsing.',
    },
    {
      q: 'Where should breadcrumbs go on the page?',
      a: 'Below the header and above the page’s H1 is the standard spot, because people look for “where am I?” at the top of the page. Some sites repeat them in the footer, but the top one is the one that matters.',
    },
    {
      q: 'How should breadcrumbs look on mobile?',
      a: 'Two common patterns: keep the full trail on one line with horizontal scrolling, scrolled to the end so the current page shows, or show only the parent level as a back link (“‹ Colorado”). Either way, keep the full trail in your structured data.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
