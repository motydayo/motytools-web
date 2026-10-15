import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'hamburger-menu',
  no: 8,
  category: 'nav',
  name: 'Hamburger menu',
  en: 'ハンバーガーメニュー',
  aka: ['Hamburger icon', 'Menu button', 'Mobile menu', 'Three-line menu', 'Hamburger button'],
  mode: 'script',
  title: 'Hamburger Menu in CSS: Animated Icon-to-X and Accessible Nav',
  description:
    'A hamburger menu whose icon morphs into an X in pure CSS, with an accessible mobile nav that closes on Esc. How it differs from a drawer, and when to skip it.',
  oneLine: 'Tap the three-line button, it turns into an X, and the hidden menu appears.',
  what: [
    'A hamburger menu is the three-line button in a corner of the header plus the menu it reveals. The stacked lines look like a bun and patty, hence the name. In the demo, tapping the icon in the top right morphs it into an X and drops the menu down below the header; tap again or press Esc to close it.',
    'It is easy to mix up with a drawer. “Hamburger” names the button — the way in. “Drawer” names the panel that slides in from a screen edge — what comes out. Some sites open a drawer from the hamburger; others, like the demo, expand a full-screen menu under the header. When prompting an AI, name both: “a hamburger button that opens a navigation drawer from the left”.',
    'Three conventions matter. Give the button aria-expanded and an accessible name such as “Open menu”. Make the hit area at least 44×44px. Close on Esc and return focus to the button. And remember the trade-off: hiding navigation makes a small screen tidier, but people can no longer see what is there.',
  ],
  when: [
    'On phones, when five or more nav links will not fit in the header',
    'Brochure sites for shops and companies with many pages people rarely hop between',
    'Landing pages where the copy and the sign-up button should get the attention, not the nav',
    'Responsive headers that show links in a row on desktop and collapse into an icon on mobile',
  ],
  avoid: [
    'Hiding three or four links on a wide desktop screen — out of sight is out of mind, and they get used less',
    'App-like products with 3–5 top destinations people switch between constantly; a bottom navigation bar gets them there in one tap',
    'Tucking your most important action (Sign up, Cart) inside the menu — keep it in the header',
  ],
  prompt:
    'Build a hamburger menu for the site header. Below 768px, show a three-line button in the top right; at 768px and up, show the links in a row instead. Use a <button> with a 44×44px hit area, {{line:t}} thick lines and {{gap:t}} between lines. On click, morph the lines into an X over {{dur:t}} (rotate the top and bottom lines 45° and fade out the middle one) and reveal a full-screen menu under the header at the same speed with ease-out. Give the button aria-expanded, aria-controls and an aria-label that switches between “Open menu” and “Close menu”, and wrap the links in <nav aria-label="Main">. Close on Esc and move focus back to the button, and lock page scrolling while the menu is open. Respect prefers-reduced-motion by skipping the animation.',
  howTo: [
    'Always use a real <button> with three spans inside. Stack the spans with position: absolute and push the top and bottom ones apart with translateY to draw the three lines. When the button has aria-expanded="true", bring both outer lines back to the center and rotate them 45° and -45°, and fade the middle one out: that is your X. Tying the visual state to aria-expanded keeps what people see and what screen readers announce in sync.',
    'Hide the menu with the hidden attribute and remove it when the button is pressed. The JavaScript only flips aria-expanded, hidden and aria-label. The demo uses position: absolute to stay inside its frame; in production use position: fixed to cover the area under the header. On desktop widths, a media query hides the button and shows the links inline.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<header class="site-header">
  <a href="/" class="brand">SORA</a>
  <button type="button" class="menu-btn"
    aria-expanded="false" aria-controls="site-menu" aria-label="Open menu">
    <span class="bar"></span><span class="bar"></span><span class="bar"></span>
  </button>
  <nav id="site-menu" class="site-menu" aria-label="Main">
    <ul>
      <li><a href="/menu/">Menu</a></li>
      <li><a href="/locations/">Locations</a></li>
      <li><a href="/hours/">Hours</a></li>
      <li><a href="/shop/">Shop online</a></li>
    </ul>
  </nav>
</header>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.site-header {
  position: sticky; top: 0; z-index: 50;
  display: flex; align-items: center; justify-content: space-between;
  height: 56px; padding: 0 16px; background: #fff;
}
/* The three-line button (44×44px hit area) */
.menu-btn {
  position: relative; width: 44px; height: 44px;
  border: 0; background: none; cursor: pointer;
}
.bar {
  position: absolute; left: 11px; right: 11px; top: 50%;
  height: {{line}}; margin-top: calc({{line}} / -2);
  border-radius: 99px; background: currentColor;
  transition: transform {{dur}} ease-out, opacity {{dur}} ease-out;
}
.bar:nth-child(1) { transform: translateY(calc(-1 * ({{gap}} + {{line}}))); }
.bar:nth-child(3) { transform: translateY(calc({{gap}} + {{line}})); }
/* Open: turn it into an X */
.menu-btn[aria-expanded="true"] .bar:nth-child(1) { transform: rotate(45deg); }
.menu-btn[aria-expanded="true"] .bar:nth-child(2) { opacity: 0; }
.menu-btn[aria-expanded="true"] .bar:nth-child(3) { transform: rotate(-45deg); }

/* Mobile: full-screen menu under the header */
@media (max-width: 767px) {
  .site-menu {
    position: fixed; inset: 56px 0 0; padding: 8px 16px;
    background: #fff; overflow-y: auto;
    transition: opacity {{dur}} ease-out, transform {{dur}} ease-out, visibility {{dur}};
  }
  .site-menu[hidden] { display: block; visibility: hidden; opacity: 0; transform: translateY(-8px); }
  .site-menu a { display: flex; align-items: center; min-height: 48px; }
  body:has(.menu-btn[aria-expanded="true"]) { overflow: hidden; }
}
/* Desktop: hide the button, show links in a row */
@media (min-width: 768px) {
  .menu-btn { display: none; }
  .site-menu[hidden] { display: block; }
  .site-menu ul { display: flex; gap: 24px; }
}
@media (prefers-reduced-motion: reduce) {
  .bar, .site-menu { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('site-menu');
const mq = matchMedia('(max-width: 767px)');

const setOpen = (open) => {
  btn.setAttribute('aria-expanded', String(open));
  btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menu.hidden = !open;
};

// Start closed (CSS keeps it visible on desktop)
setOpen(false);
btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));

// Esc closes it and returns focus to the button
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
    setOpen(false);
    btn.focus();
  }
});
// Close after a link is chosen (same-page #anchors included)
menu.addEventListener('click', (e) => {
  if (e.target.closest('a') && mq.matches) setOpen(false);
});
// Reset when the viewport crosses the breakpoint
mq.addEventListener('change', () => setOpen(false));`,
    },
  ],
  tune: [
    { key: 'line', label: 'Line thickness', min: 1, max: 4, step: 0.5, value: 2, unit: 'px' },
    { key: 'gap', label: 'Line spacing', min: 3, max: 9, step: 1, value: 5, unit: 'px' },
    { key: 'dur', label: 'Morph speed', min: 0.1, max: 0.6, step: 0.05, value: 0.25, unit: 's' },
  ],
  cautions: [
    'Not everyone reads three lines as “menu”. If your audience skews older or less tech-savvy, a small “Menu” label under the icon gets more taps.',
    'An icon-only button has no visible text, so give it aria-label="Open menu". Without it, screen readers announce just “button”.',
    'If the page keeps scrolling under a full-screen menu, people lose their place when it closes. Lock it with body:has(...) { overflow: hidden; }.',
    'Close the menu when a link is clicked. Same-page anchor links (#section) are the classic bug: you jump, but the menu stays open on top of the target.',
  ],
  similar: [
    { slug: 'drawer', diff: 'A drawer is the panel that slides in from an edge. The hamburger is the button that opens it — sometimes a drawer, sometimes a dropdown panel.' },
    { slug: 'bottom-nav', diff: 'A bottom navigation bar keeps 3–5 top destinations visible at the bottom of the screen. For frequent switching it beats a hidden menu by one tap.' },
    { slug: 'mega-menu', diff: 'A mega menu shows many links at once in columns on wide desktop screens. On phones it usually collapses into the hamburger menu.' },
  ],
  faq: [
    {
      q: 'Is a hamburger menu the same as a navigation drawer?',
      a: 'Not quite. The hamburger is the three-line button; the drawer is the panel that slides in from the side. People often call the combination a “hamburger menu”, so when you brief a developer or an AI, name both parts to avoid surprises.',
    },
    {
      q: 'Should I use a hamburger menu on desktop?',
      a: 'If you only have three to five links, show them in a row on desktop — hidden navigation gets used less because people cannot see what is there. If you hide it anyway, keep key actions such as Sign up or Cart visible in the header.',
    },
    {
      q: 'Do I need JavaScript to animate the hamburger icon into an X?',
      a: 'The animation itself is pure CSS. JavaScript only toggles aria-expanded on the button between true and false. Style the [aria-expanded="true"] state in CSS and the icon, the menu and the accessibility state always match.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
