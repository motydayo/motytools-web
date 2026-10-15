import type { Ugoki } from '../types';

export default {
  slug: 'animated-gradient',
  no: 23,
  category: 'load',
  name: 'Animated gradient',
  en: 'グラデーションアニメーション',
  aka: ['Animated gradient background', 'Moving gradient', 'Gradient animation', 'Shifting gradient', 'CSS gradient animation'],
  mode: 'loop',
  title: 'CSS Animated Gradient Background: A Slow, Color-Shifting Hero',
  description:
    'Create an animated gradient background with pure CSS keyframes and background-position. Tune speed, colors and overlay live, plus oklch and performance tips.',
  oneLine: 'A large background whose colors slowly blend and drift into each other.',
  what: [
    'The gradient behind a hero section slowly flows from one color to the next, back and forth, forever. In the demo, a navy–blue–magenta–orange band drifts across the hero in 8 seconds and back again, with a white headline and button on top. Change the speed and both colors with the controls below.',
    'It gives the first screen motion and color without a photo or illustration, which is why it shows up on so many SaaS and app landing pages. There is no image file to download, so it is light to load, and because the shift is slow it stays in the background instead of competing with the headline.',
  ],
  when: [
    'SaaS and app landing pages that want a lively hero without stock photography',
    'Event, launch or campaign pages that need energy behind the headline',
    'Small accents — a call-to-action button, a “New” ribbon — that deserve a little movement',
    'Brands with several signature colors they want to show off together',
  ],
  avoid: [
    'Behind long-form body text: moving color makes it hard to focus on reading',
    'Sites that need to feel calm and trustworthy — healthcare, legal, funeral services',
    'Thin, small text over a gradient with big brightness swings — some areas will be unreadable',
  ],
  prompt:
    'Add an animated gradient background to the hero section, CSS only. Use linear-gradient(120deg, #1d2541, {{c1}}, {{c2}}, {{c1}}, #1d2541) with background-size: 300% 300%, and animate background-position from 0% 50% to 100% 50% over {{dur:t}}, ease-in-out, infinite, alternate. In browsers that support it (check with @supports), switch to linear-gradient(120deg in oklch, …) so the colors blend without turning muddy. Put a rgba(20, 24, 45, {{dim:n}}) overlay on top so white text stays readable. Under prefers-reduced-motion: reduce, stop the animation and show a static gradient.',
  howTo: [
    'You cannot animate a gradient’s colors directly, so the trick is to paint a gradient much larger than the element and move which part of it is visible. Set background-size to 300%, then animate background-position from the left edge to the right edge with @keyframes. The visible slice slides across the colors and the background appears to flow.',
    'Repeat the same color at both ends so the back-and-forth stays smooth. Interpolating in oklch keeps the midpoint between two colors vivid instead of gray. If you put white text on top, a semi-transparent dark overlay keeps it readable even over the lightest colors.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<section class="hero">
  <h1>Schedule your team in five minutes a day.</h1>
  <a href="/signup" class="hero-btn">Start 14-day free trial</a>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.hero {
  position: relative;
  padding: 96px 24px;
  color: #fff;
  /* paint a gradient 3x the size and move the visible slice */
  background: linear-gradient(120deg, #1d2541, {{c1}}, {{c2}}, {{c1}}, #1d2541);
  background-size: 300% 300%;
  animation: gradient-shift {{dur}} ease-in-out infinite alternate;
}
/* oklch blending keeps the midpoints vivid (where supported) */
@supports (background: linear-gradient(in oklch, red, blue)) {
  .hero {
    background-image: linear-gradient(120deg in oklch, #1d2541, {{c1}}, {{c2}}, {{c1}}, #1d2541);
  }
}
@keyframes gradient-shift {
  from { background-position: 0% 50%; }
  to { background-position: 100% 50%; }
}

/* dark overlay so white text stays readable */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(20, 24, 45, {{dim:n}});
  pointer-events: none;
}
.hero > * {
  position: relative; /* above the overlay */
}

/* reduced motion: a still gradient */
@media (prefers-reduced-motion: reduce) {
  .hero {
    animation: none;
    background-position: 30% 50%;
  }
}`,
    },
  ],
  tune: [
    { key: 'dur', label: 'One-way duration', min: 2, max: 20, step: 1, value: 8, unit: 's' },
    { key: 'c1', type: 'color', label: 'First color', value: '#4f73d9' },
    { key: 'c2', type: 'color', label: 'Second color', value: '#f06a35' },
    { key: 'dim', label: 'Overlay opacity', min: 0, max: 0.6, step: 0.02, value: 0.28, unit: '' },
  ],
  cautions: [
    'Animating background-position repaints the background every frame. On a full-screen hero that can cost battery on older phones. If it matters, put the gradient on a pseudo-element and move it with transform instead, which the GPU handles more cheaply.',
    'White text over light colors such as orange or yellow can fall below WCAG contrast. Use the dark overlay, bolder and larger type, or both, and check contrast at the lightest point of the cycle.',
    'Fast color changes feel frantic and can bother people sensitive to motion. Six to fifteen seconds per pass is a comfortable range.',
    'Too many colors look chaotic. Two or three, built around your brand color, look more polished. If the blend between two colors turns gray, interpolate in oklch as in the example.',
  ],
  similar: [
    {
      slug: 'floating',
      diff: 'A floating animation bobs an image or element up and down. An animated gradient only changes background colors; nothing changes shape or position.',
    },
    {
      slug: 'marquee',
      diff: 'A marquee scrolls a strip of text or logos sideways. Both loop forever, but a gradient is meant to sit quietly in the background while a marquee is meant to grab attention.',
    },
  ],
  faq: [
    {
      q: 'Why is my CSS gradient animation not moving?',
      a: 'If background-size is 100%, there is nothing to move, so set it larger, such as 300% 300%. Also watch the order: a background shorthand written after background-size resets it. Declare the shorthand first, then background-size.',
    },
    {
      q: 'Can I animate the gradient angle or the colors themselves?',
      a: 'Yes. Register a custom property with @property (for example as an <angle> or <color>), use it inside the gradient, and animate that property. It works in all current major browsers, but it is more setup. Moving background-position is usually enough.',
    },
    {
      q: 'Does an animated gradient slow down my page?',
      a: 'Loading gets faster, if anything, because there is no image to download. While it runs, the browser keeps repainting the area, so on older devices a full-screen version can drain the battery faster. Keep it to the area that needs it.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
