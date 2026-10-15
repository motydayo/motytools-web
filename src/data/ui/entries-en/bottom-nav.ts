import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'bottom-nav',
  no: 11,
  category: 'nav',
  name: 'Bottom navigation bar',
  en: 'タブバー（ボトムナビゲーション）',
  aka: ['Bottom nav', 'Tab bar', 'Bottom tab bar', 'Mobile bottom menu', 'Navigation bar'],
  mode: 'script',
  title: 'Bottom Navigation Bar (Tab Bar) for Mobile Web: HTML & CSS',
  description:
    'Build a mobile bottom navigation bar (tab bar) in HTML and CSS: 3–5 labeled destinations, aria-current, iPhone safe-area padding, and how it differs from tabs.',
  oneLine: 'A bar at the bottom of a phone screen that keeps 3–5 main destinations one tap away.',
  what: [
    'A bottom navigation bar sits along the bottom edge of an app or mobile site and lists its top-level destinations — Home, Search, Trips, Account — as icons with short labels, so each one is always a single tap away. Apple calls it a tab bar; Material Design calls it bottom navigation or a navigation bar. In the demo, tapping one of the four items switches the screen, and the current one is shown with color plus a soft pill behind the icon.',
    'It is often confused with tabs. Tabs (a tablist) switch views within one page, like Description, Reviews and Q&A on a product page. A bottom nav moves between the app’s sections themselves — the URL and the whole screen change. Compared with a hamburger menu, the difference is that nothing is hidden: the destinations stay in view, which makes hopping between the three to five places people use most as fast as it gets.',
    'The conventions: three to five items (two belong in tabs; six or more need another pattern), a text label under every icon, aria-current="page" on the active item, and tap targets of at least 44px. On iPhone you also need extra bottom padding so the bar clears the home indicator.',
  ],
  when: [
    'Mobile booking, shopping and social products where people bounce between Home, Search, Activity and Account',
    'Installable web apps (PWAs) that should feel like a native app',
    'Interfaces used one-handed, where primary navigation belongs in thumb reach',
    'When three to five items buried in a hamburger menu are the ones people use constantly',
  ],
  avoid: [
    'Desktop layouts — a wide bar along the bottom looks stretched; switch to top nav or a sidebar',
    'Marketing sites and landing pages meant to be read top to bottom rather than navigated',
    'Screens with a single goal like Sign up — a sticky CTA bar fits better',
    'Six or more items — labels get truncated and mis-taps go up. Fold the extras into Account or More',
  ],
  prompt:
    'Add a bottom navigation bar to the mobile layout. Fix it to the bottom of the screen with position: fixed and lay out four evenly spaced items — Home, Search, Trips, Account — each with a {{icon:t}} SVG icon above a short label. Make the bar {{height:t}} tall and add env(safe-area-inset-bottom) to its bottom padding so it clears the iPhone home indicator. Use <a> links inside <nav aria-label="Main">. Mark the current screen with aria-current="page", color it {{color:t}} and put a soft pill behind its icon so the state does not rely on color alone. Give every item at least a 44px tap target, add matching bottom padding to the body so the last content is not hidden, and hide the bar at 768px and wider.',
  howTo: [
    'Put four <a> elements inside a <nav>, each with a decorative icon (aria-hidden="true") and a text label. Add aria-current="page" to the link for the current screen: you can style it with [aria-current="page"], and screen readers announce it as the current page.',
    'Pin the bar with position: fixed; bottom: 0 and add env(safe-area-inset-bottom) — the space reserved for the iPhone home indicator — to its height and padding. That value only works when your viewport meta tag includes viewport-fit=cover. Because a fixed bar covers the bottom of the page, give the body the same amount of bottom padding. The demo places the bar in the last row of a grid so it stays inside its frame.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<!-- Add viewport-fit=cover to the viewport meta tag -->
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">

<nav class="tabbar" aria-label="Main">
  <a href="/" aria-current="page">
    <svg aria-hidden="true" viewBox="0 0 24 24"><!-- home icon --></svg>
    <span>Home</span>
  </a>
  <a href="/search/">
    <svg aria-hidden="true" viewBox="0 0 24 24"><!-- magnifier --></svg>
    <span>Search</span>
  </a>
  <a href="/trips/">
    <svg aria-hidden="true" viewBox="0 0 24 24"><!-- calendar --></svg>
    <span>Trips</span>
  </a>
  <a href="/account/">
    <svg aria-hidden="true" viewBox="0 0 24 24"><!-- person --></svg>
    <span>Account</span>
  </a>
</nav>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 40;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* Extra room for the iPhone home indicator */
  height: calc({{height}} + env(safe-area-inset-bottom));
  padding-bottom: env(safe-area-inset-bottom);
  background: #fff;
  border-top: 1px solid #e4e2dc;
}
.tabbar a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  min-height: 44px;
  color: #5d6272;
  font-size: 11px;
  font-weight: 700;
  text-decoration: none;
}
.tabbar svg {
  width: {{icon}};
  height: {{icon}};
  padding: 3px 14px;
  box-sizing: content-box;
  border-radius: 999px;
  stroke: currentColor;
  fill: none;
  transition: background-color 0.2s ease-out;
}
/* Current destination: color plus a pill behind the icon */
.tabbar a[aria-current="page"] { color: {{color}}; }
.tabbar a[aria-current="page"] svg {
  background: color-mix(in srgb, {{color}} 14%, transparent);
}
/* Keep the last content clear of the bar */
body { padding-bottom: calc({{height}} + env(safe-area-inset-bottom)); }

/* Desktop: hide it and show top nav or a sidebar instead */
@media (min-width: 768px) {
  .tabbar { display: none; }
  body { padding-bottom: 0; }
}`,
    },
  ],
  tune: [
    { key: 'height', label: 'Bar height', min: 48, max: 80, step: 2, value: 64, unit: 'px' },
    { key: 'icon', label: 'Icon size', min: 18, max: 30, step: 1, value: 24, unit: 'px' },
    { key: 'color', type: 'color', label: 'Active color', value: '#f06a35' },
  ],
  cautions: [
    'Icon-only items make people tap around to find out what each symbol means. Keep a short label under every icon — one word is ideal.',
    'Everything pinned to the bottom competes for the same space: FABs, sticky CTA bars, cookie banners. Stack those above the bottom nav rather than on top of it.',
    'Mobile browsers show and hide their own toolbar as you scroll. A bar with bottom: 0 follows along, but anything sized with 100vh will drift — use 100dvh.',
    'Decide what happens when someone taps the tab they are already on. In native apps the convention is “scroll back to the top”.',
  ],
  similar: [
    { slug: 'tab-indicator', book: 'ugoki', diff: 'Tabs (with a sliding underline) switch views within one page. A bottom nav moves between the app’s top-level sections.' },
    { slug: 'hamburger-menu', diff: 'A hamburger menu hides destinations behind a button. A bottom nav keeps the main ones visible and one tap away.' },
    { slug: 'sticky-cta', diff: 'A sticky CTA bar also hugs the bottom edge, but it holds one action, like Book now. A bottom nav switches between several destinations.' },
  ],
  faq: [
    {
      q: 'Is a tab bar the same as bottom navigation?',
      a: 'Yes, same component. Apple’s Human Interface Guidelines call it a tab bar; Google’s Material Design calls it bottom navigation or a navigation bar. In a prompt, “bottom navigation bar” is the clearest name.',
    },
    {
      q: 'How many items should a bottom navigation bar have?',
      a: 'Three to five. With two, tabs or a segmented control will do; with six or more, each item gets too narrow, labels truncate and mis-taps go up. Put the overflow under Account or a More tab.',
    },
    {
      q: 'Why does my bottom bar overlap the iPhone home indicator?',
      a: 'Add viewport-fit=cover to your viewport meta tag, then add env(safe-area-inset-bottom) to the bar’s bottom padding. Devices with a home indicator get the extra space automatically. Add the same amount to the bar’s height so the icons stay put.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
