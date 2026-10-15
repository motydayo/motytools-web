import type { Ugoki } from '../types';

export default {
  slug: 'underline',
  no: 14,
  category: 'pointer',
  name: 'Underline animation',
  en: '下線アニメーション',
  aka: ['Animated underline on hover', 'Hover underline effect', 'Link hover underline', 'Underline slide-in effect', 'Nav link underline'],
  mode: 'pointer',
  title: 'CSS Underline Animation on Hover: Slide In from the Left',
  description:
    'A hover underline that grows from the left and exits right, using ::after and scaleX. Tune speed, thickness and gap live, then copy the CSS or an AI prompt.',
  oneLine: 'Hover a link and a line slides in underneath from the left.',
  what: [
    'Hover a menu item or an inline link and a thin line draws itself under the text from left to right. In the demo, the line grows under “Services”, “Pricing” and the link in the paragraph as the cursor reaches them, then slides away to the right when the cursor leaves.',
    'It says “this is clickable” and “you are pointing here” without changing the text itself. Because the motion is thin and brief, it fits calm, minimal designs. Leave a differently colored underline on the current page’s item and it doubles as a “you are here” marker. Drag the controls to compare: 0.25s and 2px feel crisp; at 0.8s the line lags behind your mouse, and at 6px it reads as a highlight bar rather than an underline.',
  ],
  when: [
    'Primary navigation on company and store sites, to show items are links',
    'Inline links in blog posts and articles that should stand out tastefully',
    'Footer link lists and other text-only areas that need a little feedback',
    'Marking the current page in the navigation',
  ],
  avoid: [
    'Inline links that show an underline only on hover — at rest they are easy to miss',
    'Buttons and cards that already look clickable; an extra underline is noise',
    'Long links that wrap onto several lines (a single ::after line cannot follow each line)',
  ],
  prompt:
    'Add an animated underline on hover to the navigation links. Give each link position: relative and draw a {{thick:t}} line with ::after, {{offset:t}} below the text. Start it at transform: scaleX(0) and go to scaleX(1) on hover over {{dur:t}} ease-out, so it grows from the left (transform-origin: left on hover, right at rest, so it exits to the right). Put :hover inside @media (hover: hover) and show the line on :focus-visible too. Keep a differently colored line permanently on the current page (aria-current="page"). Under prefers-reduced-motion: reduce, show and hide the line without the growing motion. CSS only.',
  howTo: [
    'Create a thin line with the link’s ::after pseudo-element and collapse it with transform: scaleX(0). On hover, set scaleX(1) and the line grows. Animating transform is smoother than animating width from 0 to 100%, because it does not trigger layout.',
    'transform-origin decides the direction. Use right at rest and left on hover, and the line enters from the left and leaves to the right, which gives the motion a sense of flow. Leave transform-origin out and it grows from the center instead.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<nav class="menu">
  <a href="/" class="link-underline" aria-current="page">Home</a>
  <a href="/services" class="link-underline">Services</a>
  <a href="/pricing" class="link-underline">Pricing</a>
  <a href="/contact" class="link-underline">Contact</a>
</nav>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.menu { display: flex; gap: 20px; }
.link-underline {
  position: relative;
  color: #1f2433;
  text-decoration: none;
}
.link-underline::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -{{offset}};        /* gap below the text */
  height: {{thick}};           /* line thickness */
  border-radius: {{thick}};
  background: #f06a35;
  transform: scaleX(0);       /* hidden at rest */
  transform-origin: right;    /* exits to the right */
  transition: transform {{dur}} ease-out;
}

/* Grow from the left, only on devices with a real hover */
@media (hover: hover) {
  .link-underline:hover::after { transform: scaleX(1); transform-origin: left; }
}
/* Keyboard focus and the current page */
.link-underline:focus-visible::after,
.link-underline[aria-current='page']::after { transform: scaleX(1); transform-origin: left; }
.link-underline[aria-current='page']::after { background: #1d2541; }
.link-underline:focus-visible { outline: 2px solid #4f73d9; outline-offset: 4px; }

/* Reduced motion: appear instantly */
@media (prefers-reduced-motion: reduce) {
  .link-underline::after { transition: none; }
}`,
    },
  ],
  tune: [
    { key: 'dur', label: 'Duration', min: 0.05, max: 0.8, step: 0.05, value: 0.25, unit: 's' },
    { key: 'thick', label: 'Line thickness', min: 1, max: 6, step: 1, value: 2, unit: 'px' },
    { key: 'offset', label: 'Gap below text', min: 0, max: 10, step: 1, value: 4, unit: 'px' },
  ],
  cautions: [
    'Touch screens have no hover, so mobile users never see the line grow. Make menu items look clickable through size and spacing, and show the current-page underline from the start.',
    'Links inside body text that are underlined only on hover rely on color alone at rest, which fails for many people with color vision deficiencies (and WCAG asks for more than color). Keep a subtle underline on inline links all the time.',
    'A ::after line is a single box, so it breaks on links that wrap to two lines. For long links, draw the line with background-image and animate background-size from 0% to 100% instead.',
    'Add the same rule to :focus-visible so keyboard users see the line too, and never remove the focus outline.',
  ],
  similar: [
    {
      slug: 'tab-indicator',
      diff: 'A sliding tab indicator is one line that travels from tab to tab. An underline animation grows and shrinks under each item separately.',
    },
    {
      slug: 'highlighter',
      diff: 'A highlighter animation draws a thick marker stroke behind text as you scroll. An underline animation is a thin line that reacts to hover.',
    },
  ],
  faq: [
    {
      q: 'Why does my underline grow from the center instead of the left?',
      a: 'Without transform-origin, scaling starts from the center and the line grows in both directions. Add transform-origin: left to the hover rule. If you like the center-out look, just leave it as is.',
    },
    {
      q: 'Can I animate text-decoration: underline?',
      a: 'Not the drawing-in motion. You can transition its color, thickness (text-decoration-thickness) and offset (text-underline-offset), but to make the line grow you need a pseudo-element like the ::after in this example.',
    },
    {
      q: 'How do I animate an underline on links that wrap to multiple lines?',
      a: 'Use a linear-gradient background-image on an inline element, positioned at the bottom with background-repeat: no-repeat, and transition background-size from 0% 2px to 100% 2px. Because inline backgrounds follow each line box, every line gets its own underline.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
