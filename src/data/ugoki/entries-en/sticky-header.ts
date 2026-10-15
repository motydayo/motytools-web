import type { Ugoki } from '../types';

export default {
  slug: 'sticky-header',
  no: 3,
  category: 'scroll',
  name: 'Sticky header',
  en: '追従ヘッダー',
  aka: ['Fixed header', 'Sticky navigation', 'Sticky navbar', 'Persistent header'],
  mode: 'scroll',
  title: 'Sticky Header in CSS: position: sticky, Shadow on Scroll (Live Demo)',
  description:
    'Build a sticky header with two lines of CSS. Live demo with adjustable height and shadow, the small script that adds a shadow on scroll, how to keep anchor links from hiding under it, and a ready-to-paste AI prompt.',
  oneLine: 'The navigation bar stays pinned to the top as you scroll.',
  what: [
    'The bar with your logo, menu and main call-to-action stays at the top of the screen no matter how far down the page someone reads. Navigation and the sign-up button are always one tap away.',
    'In the demo, a soft shadow appears under the header the moment the page starts scrolling. That shadow is what tells the eye “this bar is floating above the content”, so text sliding underneath never looks like a rendering glitch.',
  ],
  when: [
    'Long landing pages where the “Sign up” button should be reachable from any section',
    'Multi-page company or store sites where visitors jump between sections often',
    'Online shops that need the cart and search box visible at all times',
    'Dashboards and tools where Save buttons or view tabs must never scroll out of reach',
  ],
  avoid: [
    'Short pages that fit on one screen — sticking adds nothing and just takes up space',
    'Tall, multi-row headers: on a phone they can eat close to half of the visible content',
    'Full-bleed photo or video pages where the bar would sit on top of the image the whole time',
  ],
  prompt:
    'Make the site header a sticky header. Pin it to the top with CSS only — position: sticky; top: 0; — and do not use the old approach of watching scroll position in JavaScript and switching to position: fixed. Set the header height to {{height:t}} and give it a z-index above the page content. Once the page scrolls even slightly, fade in a soft box-shadow under the header (opacity {{shadow:t}}, over {{fade:t}}) so it reads as floating above the content; a tiny script that toggles a class for the shadow is fine. Add scroll-margin-top to anchor targets so headings reached through in-page links do not end up hidden behind the header. The shadow fade is a small change, so it can stay on for people with prefers-reduced-motion.',
  howTo: [
    'The sticky part is two lines of CSS. Give the header position: sticky and top: 0, and it scrolls normally until it reaches the top edge of the viewport, then stays there. You no longer need JavaScript to measure scroll position and swap in position: fixed — that was the pre-2017 approach.',
    'The shadow should only appear once the header is actually stuck, so that part uses a few lines of JavaScript: add a class when the page has scrolled past zero, and let a CSS transition fade the shadow in.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<header class="site-header">
  <a href="/" class="logo">SAMPLE</a>
  <nav>
    <a href="#features">Features</a>
    <a href="#pricing">Pricing</a>
    <a href="#faq">FAQ</a>
  </nav>
  <a href="/signup" class="cta">Try free</a>
</header>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.site-header {
  position: sticky; /* sticks once it reaches the top */
  top: 0;
  z-index: 10;      /* stays above page content */
  height: {{height}};
  background: #fff;
  transition: box-shadow {{fade}} ease-out;
}

/* Shadow once the page has scrolled: shows the header is floating */
.site-header.is-stuck {
  box-shadow: 0 6px 16px -8px rgba(0, 0, 0, {{shadow:n}});
}

/* Keep in-page link targets from hiding under the header */
:target,
h2[id] {
  scroll-margin-top: calc({{height}} + 16px);
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript (only for the shadow)',
      code: `const header = document.querySelector('.site-header');
const sync = () => header.classList.toggle('is-stuck', window.scrollY > 4);
window.addEventListener('scroll', sync, { passive: true });
sync();`,
    },
  ],
  tune: [
    { key: 'height', label: 'Header height', min: 44, max: 80, step: 4, value: 56, unit: 'px' },
    { key: 'shadow', label: 'Shadow strength', min: 0, max: 0.6, step: 0.05, value: 0.3, unit: '' },
    { key: 'fade', label: 'Shadow fade-in', min: 0, max: 0.6, step: 0.05, value: 0.2, unit: 's' },
  ],
  cautions: [
    'position: sticky silently stops working if any ancestor has overflow: hidden, auto or scroll. If your header will not stick, check the parents first.',
    'Vertical space is precious on phones. Keep the header around 56px, and consider a header that hides while scrolling down and reappears on scroll up.',
    'In-page links (a table of contents, “Back to pricing”) land headings behind the header. Set scroll-margin-top a little larger than the header height.',
    'A header packed with links makes keyboard users tab through all of them on every page. Put a “Skip to content” link first.',
  ],
  similar: [
    {
      slug: 'pinning',
      diff: 'Pinning holds an element in place only for one section of the page while its content changes. A sticky header stays put all the way down.',
    },
    {
      slug: 'back-to-top',
      diff: 'A back-to-top button also stays on screen, but only appears after some scrolling, sits in the bottom corner and does one thing: return to the top.',
    },
  ],
  faq: [
    {
      q: 'What is the difference between a sticky header and a fixed header?',
      a: 'A fixed header (position: fixed) is glued to the top of the viewport from the start and is taken out of the page flow, so you have to add top padding to the body. A sticky header (position: sticky) sits in the normal flow and only starts sticking when it reaches the top. Visually they look almost the same; sticky is simpler to get right.',
    },
    {
      q: 'Why is position: sticky not working?',
      a: 'Almost always an ancestor with overflow: hidden (or auto, or scroll). Other causes: no top value set, or a parent element that is only as tall as the header itself, which leaves it no room to stick.',
    },
    {
      q: 'Is a sticky header bad for SEO?',
      a: 'Not directly — search engines do not penalize it. What can hurt is a header so tall on mobile that it crowds the content. Keep it compact and make sure anchor targets are not hidden behind it.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
