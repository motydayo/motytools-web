import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'mega-menu',
  no: 13,
  category: 'nav',
  name: 'Mega menu',
  en: 'メガメニュー',
  aka: ['Mega dropdown', 'Mega nav', 'Multi-column dropdown', 'Mega menu navigation'],
  mode: 'script',
  title: 'Accessible Mega Menu: Hover Intent, Click and Keyboard Support',
  description:
    'When a mega menu beats a dropdown, and how to build one: a button with aria-expanded, hover delays that prevent accidental closing, Esc and a mobile view.',
  oneLine: 'A header item opens a wide panel of links organized into headed columns.',
  what: [
    'A mega menu is a large panel that opens from a header item — on hover or click — and spans the width of the page, organizing dozens of destinations into columns with headings like “By region” and “By trip type”. In the demo, resting the pointer on “Find a stay” opens the panel after a short pause, and leaving it closes the panel after another short pause. It can hold more than text, too: a featured story with an image fits right in.',
    'The difference from a regular dropdown menu is volume and layout. A dropdown is a single short column — five to eight items — in a small box sized to its content. A mega menu groups dozens of links so people can scan the whole section at once. It is common on ecommerce, university, government and manufacturer sites with deep structures.',
    'The conventions: make the trigger a <button aria-expanded> that opens on click, so it works without a mouse (hover-only menus fail on touch and keyboard). Close on Esc and return focus to the button, and close when focus leaves the panel. For mouse users, add a short delay before opening and before closing, so a diagonal move from the trigger to the far column does not slam the panel shut.',
  ],
  when: [
    'Online stores with two-level categories, like Appliances › Refrigerators, Washers, Air conditioners…',
    'Travel and real estate sites that offer several ways to browse — by region, by trip type — side by side',
    'Universities, cities and manufacturers with many audience-specific entry points',
    'When you want to slip a seasonal feature or promo image into the navigation',
  ],
  avoid: [
    'Small sites with fewer than ten destinations — a simple dropdown or inline links will do',
    'Phones — a big panel will not fit; turn it into accordions inside the hamburger menu',
    'Panels that pop open the instant the pointer grazes the header and vanish when it slips off',
  ],
  prompt:
    'Add a mega menu to the site header. Make the “Find a stay” item a <button aria-expanded="false" aria-controls="…"> and open a full-width panel directly below the header when it is clicked, or when the mouse rests on it for {{delay:t}}. Inside the panel, show three columns: headed link lists for “By region” and “By trip type”, and a featured card with an image. Animate it in over {{dur:t}}, sliding down slightly and fading in with ease-out, and dim the page behind it a little. When the mouse leaves both the button and the panel, wait {{grace:t}} before closing, and cancel the close if it comes back. Close on Esc and return focus to the button, and close when Tab moves focus out of the panel. Below 1024px, drop the mega menu and render the groups as accordions inside the hamburger menu. Respect prefers-reduced-motion.',
  howTo: [
    'Make the trigger a <button>, not a link, and wire it to the panel with aria-expanded and aria-controls. The panel content is just lists of links (<ul>) with a heading per column. Do not add role="menu": that role is for application menus, where arrow keys are the only way to move — it does not fit a set of site links.',
    'Listen for pointerenter and pointerleave, but delay the response with setTimeout. The open delay stops the panel from appearing when the pointer merely passes by; the close delay stops it from vanishing mid-way through a diagonal move into the panel. Clicks and keyboard input open it immediately.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<nav class="global-nav" aria-label="Main">
  <ul class="nav-items">
    <li class="mega">
      <button type="button" class="mega-btn" aria-expanded="false" aria-controls="mega-stays">
        Find a stay
      </button>
      <div id="mega-stays" class="mega-panel" hidden>
        <div class="mega-col">
          <h2>By region</h2>
          <ul>
            <li><a href="/region/northeast/">Northeast</a></li>
            <li><a href="/region/midwest/">Midwest</a></li>
            <li><a href="/region/pacific/">Pacific</a></li>
          </ul>
        </div>
        <div class="mega-col">
          <h2>By trip type</h2>
          <ul>
            <li><a href="/type/hot-springs/">Hot springs</a></li>
            <li><a href="/type/ocean-views/">Ocean views</a></li>
            <li><a href="/type/pet-friendly/">Pet-friendly</a></li>
          </ul>
        </div>
        <a class="mega-feature" href="/feature/fall/">
          <img src="fall.jpg" alt="" width="320" height="180">
          30 stays for fall foliage
        </a>
      </div>
    </li>
    <li><a href="/deals/">Deals</a></li>
  </ul>
</nav>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.global-nav { position: relative; }
.mega-btn[aria-expanded="true"] { box-shadow: inset 0 -2px 0 #f06a35; }

/* Full width, directly under the header */
.mega-panel {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1.2fr;
  gap: 24px;
  padding: 24px 32px;
  background: #fff;
  box-shadow: 0 16px 32px -16px rgb(20 24 40 / 0.35);
  transition: opacity {{dur}} ease-out, transform {{dur}} ease-out,
    display {{dur}} allow-discrete;
}
.mega-panel[hidden] { display: none; opacity: 0; transform: translateY(-6px); }
@starting-style {
  .mega-panel:not([hidden]) { opacity: 0; transform: translateY(-6px); }
}
.mega-panel h2 { font-size: 12px; color: #5d6272; }
.mega-panel a { display: block; padding: 6px 0; }

/* Narrow screens: no mega menu (render as accordions in the hamburger menu) */
@media (max-width: 1023px) {
  .mega-panel { position: static; grid-template-columns: 1fr; box-shadow: none; padding: 8px 16px; }
  .mega-feature { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .mega-panel { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `document.querySelectorAll('.mega').forEach((item) => {
  const btn = item.querySelector('.mega-btn');
  const panel = item.querySelector('.mega-panel');
  let timer;

  const set = (open) => {
    clearTimeout(timer);
    btn.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
  };

  // Click and keyboard: toggle right away
  btn.addEventListener('click', () => set(panel.hidden));

  // Mouse: wait a beat (no drive-by opening, no closing mid-diagonal)
  const wide = matchMedia('(min-width: 1024px)');
  item.addEventListener('pointerenter', (e) => {
    if (e.pointerType !== 'mouse' || !wide.matches) return;
    clearTimeout(timer);
    timer = setTimeout(() => set(true), {{delay:n}} * 1000);
  });
  item.addEventListener('pointerleave', (e) => {
    if (e.pointerType !== 'mouse' || !wide.matches) return;
    clearTimeout(timer);
    timer = setTimeout(() => set(false), {{grace:n}} * 1000);
  });

  // Esc closes and returns focus; close when focus leaves
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hidden) { set(false); btn.focus(); }
  });
  item.addEventListener('focusout', (e) => {
    if (!item.contains(e.relatedTarget)) set(false);
  });
});`,
    },
  ],
  tune: [
    { key: 'delay', label: 'Hover delay to open', min: 0, max: 0.4, step: 0.05, value: 0.15, unit: 's' },
    { key: 'grace', label: 'Grace period to close', min: 0.1, max: 0.8, step: 0.05, value: 0.3, unit: 's' },
    { key: 'dur', label: 'Open speed', min: 0.1, max: 0.5, step: 0.05, value: 0.2, unit: 's' },
  ],
  cautions: [
    'Hover-only mega menus are unusable on touch screens and with a keyboard. Always open on click too, and use a <button> for the trigger.',
    'Without a close delay, moving the pointer diagonally from the trigger to the far column brushes another nav item and swaps the panel. A 0.2–0.4s grace period fixes it.',
    'An overstuffed panel defeats the purpose — scanning it takes longer than searching. Keep five to eight links per column, grouped under headings, around 30 in total.',
    'Make every destination in the panel reachable another way too, from the footer or a category page. If the mega menu is the only path, mobile and search visitors cannot get there.',
  ],
  similar: [
    { slug: 'dropdown-menu', diff: 'A dropdown menu shows a short single-column list in a small box. A mega menu organizes dozens of links into headed columns you can scan at once.' },
    { slug: 'hamburger-menu', diff: 'A hamburger menu hides the whole navigation on small screens. On phones, a mega menu’s groups usually become accordions inside it.' },
    { slug: 'sidebar', diff: 'A sidebar keeps navigation permanently visible on the left. A mega menu opens big only when needed and stays out of the way while reading.' },
  ],
  faq: [
    {
      q: 'What is the difference between a mega menu and a dropdown menu?',
      a: 'Volume and layout. A dropdown is a single column of five to eight items in a box sized to fit. A mega menu is a full-width panel with headed columns holding dozens of links, often with images or promos. Once you have more than ten destinations that fall into groups, consider a mega menu.',
    },
    {
      q: 'Should a mega menu open on hover or on click?',
      a: 'Support both. Click to open is required; on devices with a mouse, you can also open it after the pointer rests on the trigger for a moment. Hover-only menus cannot be opened on touch devices or with a keyboard.',
    },
    {
      q: 'How should a mega menu work on mobile?',
      a: 'It will not fit as-is, so move it inside the hamburger menu and turn each group heading into an accordion. Use the same HTML and switch layouts with CSS media queries so you do not maintain two copies of the menu.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
