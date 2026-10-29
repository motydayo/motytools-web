import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'sidebar',
  no: 15,
  category: 'nav',
  name: 'Sidebar navigation',
  en: 'サイドバー',
  aka: ['Sidebar', 'Side nav', 'Collapsible sidebar', 'Navigation rail', 'Left nav', 'Side menu'],
  mode: 'script',
  title: 'Collapsible Sidebar Navigation with an Icon Rail (HTML, CSS, JS)',
  description:
    'Build collapsible sidebar navigation for dashboards and web apps: a full menu that shrinks to an icon rail, aria-current, a saved state and a drawer on mobile.',
  oneLine: 'A vertical menu always visible on the left that can collapse into a slim icon rail.',
  what: [
    'Sidebar navigation runs down the left side of a dashboard or web app — Dashboard, Bookings, Guests, Revenue, Settings — and stays visible the whole time. In the demo, clicking an item switches the main view, and the current page is marked with a lighter background and an accent bar on the left. The button at the top collapses the sidebar into a slim strip of icons (a navigation rail), giving the workspace more room.',
    'The difference from a drawer is whether it is there to begin with. A drawer is hidden until you open it, then slides in from the edge over the content. A sidebar is part of the layout, taking its own column next to the content. That makes it ideal for dashboards and tools people move around all day: every destination is in view at once. The demo shows both behaviors — in a narrow frame it starts collapsed and, when expanded, overlays the content like a drawer.',
    'The conventions: wrap the links in <nav aria-label="Admin"> and put aria-current="page" on the current one. Give the collapse button aria-expanded and swap its name between “Collapse sidebar” and “Expand sidebar”. When collapsed, keep the item labels available to screen readers rather than deleting them, and show the name on hover.',
  ],
  when: [
    'Admin panels — bookings, inventory, accounting — with five to ten sections people switch between constantly',
    'Documentation and help sites that keep the table of contents visible beside the article',
    'Web apps like email, chat and task managers where you hop between folders, channels or projects',
    'Data-heavy screens where people want to collapse the menu to give tables and charts more width',
  ],
  avoid: [
    'Phone screens — a sidebar eats half the width; switch to a drawer or a bottom nav',
    'Landing pages and marketing sites meant to be read top to bottom — a side menu breaks the flow',
    'Small sites with three or four destinations — a top nav bar is enough',
  ],
  prompt:
    'Add sidebar navigation to the admin dashboard. Make it {{width:t}} wide, with a collapse button at the top and, below it, <nav aria-label="Admin"> containing icon-plus-label links stacked vertically: Dashboard, Bookings, Guests, Revenue, Settings. Mark the current page’s link with aria-current="page" and show it with a lighter background and an accent bar on the left edge. Make the collapse button a <button aria-expanded aria-controls>; clicking it shrinks the sidebar to a {{rail:t}} icon rail over {{dur:t}} while the main area widens at the same pace. When collapsed, keep the labels available to screen readers and show them via a title attribute on hover. Save the collapsed state in localStorage. Below 768px, hide the sidebar and replace it with a drawer opened from a hamburger button. Make every item at least 44px tall.',
  howTo: [
    'Split the page into two CSS grid columns, one for the sidebar and one for the content. Switch grid-template-columns between “220px 1fr” and “64px 1fr” and put a transition on grid-template-columns, and collapsing animates smoothly. Make the sidebar position: sticky; top: 0; height: 100dvh so only the content area scrolls.',
    'When collapsing, do not remove the labels with display: none — fade them out and let them overflow out of view. Screen readers still get the names, so icon-only links remain understandable. Store the collapsed state in localStorage so the sidebar comes back the way people left it.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="layout">
  <aside class="sidebar">
    <button type="button" class="collapse-btn"
      aria-expanded="true" aria-controls="admin-nav" aria-label="Collapse sidebar">
      <svg aria-hidden="true" viewBox="0 0 24 24"><!-- panel icon --></svg>
    </button>
    <nav id="admin-nav" aria-label="Admin">
      <ul>
        <li><a href="/admin/" aria-current="page" title="Dashboard">
          <svg aria-hidden="true" viewBox="0 0 24 24"><!-- icon --></svg>
          <span class="label">Dashboard</span></a></li>
        <li><a href="/admin/bookings/" title="Bookings">
          <svg aria-hidden="true" viewBox="0 0 24 24"></svg>
          <span class="label">Bookings</span></a></li>
        <li><a href="/admin/guests/" title="Guests">
          <svg aria-hidden="true" viewBox="0 0 24 24"></svg>
          <span class="label">Guests</span></a></li>
      </ul>
    </nav>
  </aside>
  <main class="content">…</main>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.layout {
  display: grid;
  grid-template-columns: {{width}} 1fr;
  min-height: 100dvh;
  transition: grid-template-columns {{dur}} ease-out;
}
.layout.is-collapsed { grid-template-columns: {{rail}} 1fr; }

.sidebar {
  position: sticky;
  top: 0;
  height: 100dvh;
  overflow-x: hidden;
  overflow-y: auto; /* long menus scroll on their own */
  padding: 8px;
  background: #1d2541;
  color: #c4cbe3;
}
.sidebar ul { list-style: none; margin: 0; padding: 0; }
.sidebar a {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  padding: 0 14px;
  border-radius: 10px;
  color: inherit;
  text-decoration: none;
  white-space: nowrap;
}
.sidebar svg { flex: none; width: 20px; height: 20px; }
/* Current page */
.sidebar a[aria-current="page"] {
  background: rgb(255 255 255 / 0.14);
  color: #fff;
  box-shadow: inset 3px 0 0 #f06a35;
}
/* Collapsed: fade the labels (screen readers still get them) */
.label { transition: opacity {{dur}} ease-out; }
.is-collapsed .label { opacity: 0; }

/* Mobile: this only hides the sidebar. Build the replacement drawer and hamburger button with the code at /en/ui/drawer/ */
@media (max-width: 767px) {
  .layout, .layout.is-collapsed { grid-template-columns: 1fr; }
  .sidebar { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .layout, .label { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const layout = document.querySelector('.layout');
const btn = document.querySelector('.collapse-btn');

const setCollapsed = (collapsed) => {
  layout.classList.toggle('is-collapsed', collapsed);
  btn.setAttribute('aria-expanded', String(!collapsed));
  btn.setAttribute('aria-label', collapsed ? 'Expand sidebar' : 'Collapse sidebar');
  try { localStorage.setItem('sidebar-collapsed', collapsed ? '1' : '0'); } catch {}
};

// Restore the last state
let saved = null;
try { saved = localStorage.getItem('sidebar-collapsed'); } catch {}
setCollapsed(saved === '1');

btn.addEventListener('click', () => {
  setCollapsed(!layout.classList.contains('is-collapsed'));
});`,
    },
  ],
  tune: [
    { key: 'width', label: 'Expanded width', min: 180, max: 280, step: 4, value: 220, unit: 'px' },
    { key: 'rail', label: 'Collapsed width', min: 56, max: 80, step: 4, value: 64, unit: 'px' },
    { key: 'dur', label: 'Collapse speed', min: 0.1, max: 0.5, step: 0.05, value: 0.25, unit: 's' },
  ],
  cautions: [
    'If you hide labels with display: none when collapsing, screen readers are left with nameless icon links. Fade them out or visually hide them so the names remain.',
    'An icon-only rail takes time to learn. Show names on hover (title or a tooltip), and start first-time users with the sidebar expanded.',
    'Once the items outgrow the screen height, the bottom ones become unreachable. Give the sidebar its own overflow-y: auto so it scrolls independently of the content.',
    'Do not just squeeze the sidebar on phones — switch to a drawer opened from a hamburger button. Reusing the same list of links keeps navigation in one place. The code on this page only hides the sidebar on narrow screens, so pair it with the code from the drawer page (/en/ui/drawer/).',
  ],
  similar: [
    { slug: 'drawer', diff: 'A drawer is hidden until opened, then slides over the content from an edge. A sidebar is part of the layout and sits beside the content.' },
    { slug: 'scrollspy', book: 'ugoki', diff: 'A scrollspy highlights the section you are reading in a table of contents — often one that lives in a docs sidebar.' },
    { slug: 'bottom-nav', diff: 'A bottom nav puts three to five destinations along the bottom of a phone screen. A common pattern is sidebar on desktop, bottom nav on mobile, same destinations.' },
  ],
  faq: [
    {
      q: 'Sidebar or drawer — which should I use?',
      a: 'It depends on screen size and how often people navigate. On wide screens where people switch sections all day, keep a sidebar visible; on phones, use a drawer that stays hidden until needed. Most products switch between the two based on viewport width.',
    },
    {
      q: 'How wide should a sidebar be?',
      a: 'Commonly 200–260px expanded and 56–72px collapsed to icons. It should fit your longest label on one line without squeezing the workspace. If labels are long, shorten them rather than widening the sidebar.',
    },
    {
      q: 'Should the sidebar go on the left or the right?',
      a: 'Left for primary navigation. In left-to-right languages, people look left first, so that is where they expect the way in. The right side is typically used for supporting content — details of the selected item, an on-page table of contents, related links.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
