import type { Ugoki } from '../types';

export default {
  slug: 'parallax',
  no: 1,
  category: 'scroll',
  name: 'Parallax scrolling',
  en: 'パララックススクロール',
  aka: ['Parallax effect', 'Parallax scroll', 'Parallax background', 'Multi-layer parallax', 'Depth scrolling'],
  mode: 'scroll',
  title: 'Parallax Scrolling Effect in Vanilla JavaScript: How It Works',
  description:
    'How parallax scrolling works, with a tunable demo: a layered hero and an image band in about 25 lines of vanilla JS, plus mobile and reduced-motion tips.',
  oneLine: 'Distant layers move slower than near ones, so the page gains depth.',
  what: [
    'Parallax scrolling splits a scene into layers and moves each one at a different speed as you scroll: the farther away a layer is meant to be, the slower it moves. It is the same thing you notice from a train window, where fence posts rush by and the mountains barely drift. On a flat screen, that speed difference reads as depth.',
    'The demo hero has four layers — the sun, the far ridge, the headline and the near ridge. The sun moves slowest and the near ridge fastest, so the headline appears to sink behind the hills. Further down, the “Hot spring at sunset” band shows the quieter, more common variant: the band scrolls normally and only the image inside it lags behind.',
  ],
  when: [
    'Hotel, resort and travel landing pages where the hero image should feel like a place, not a photo',
    'Product launch and campaign pages that need a memorable first screen',
    'Long pages that use full-width image bands to separate chapters',
    'Careers or “About us” pages that need a visual pause between blocks of text',
  ],
  avoid: [
    'Pricing tables, checkout steps or anything people need to read carefully — motion competes with the content',
    'Pages people visit over and over, like dashboards, article lists or docs',
    'Several parallax sections on one page: the eye has nowhere to rest and scrolling gets heavier',
  ],
  prompt:
    'Turn the hero section into a parallax scrolling effect. Split it into separate absolutely positioned layers — sky, far mountains, headline, near mountains — and shift each layer down by scrollY times its speed factor so farther layers appear to move slower. Use base factors of 0.75 for the sun, 0.5 for the far mountains, 0.35 for the headline and 0.15 for the near mountains, and multiply them all by an overall depth of {{depth:n}}. For the image band further down the page, let the band scroll normally and shift only the image inside it by (distance between the band center and the viewport center) × {{band:n}}, capped at 80px. Animate with transform: translate3d only, throttle the scroll handler with requestAnimationFrame, and do not use a library. When prefers-reduced-motion: reduce is set, keep every layer still.',
  howTo: [
    'Stack the layers on top of each other and, on scroll, move each one down by scrollY multiplied by its speed factor. The page itself scrolls up, so a layer pushed down by a larger factor appears to rise more slowly. A factor near 1 reads as far away; 0 scrolls with the page.',
    'Only animate transform. Changing top or margin forces the browser to recalculate layout on every frame and causes jank. Scroll events fire dozens of times per second, so batch the work into one requestAnimationFrame per frame. Pure-CSS parallax with animation-timeline: scroll() is coming, but it is not yet supported in every browser, so this example uses a few lines of JavaScript.',
    'The image band is the subtler pattern. The band scrolls like any other section; only the image inside it is offset by how far the band center is from the viewport center. Make the image taller than the band and cap the offset so its edges never show.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<!-- SVG layers stand in for photos; use <img class="layer"> for real images -->
<section class="hero">
  <svg class="layer" data-speed="0.75" viewBox="0 0 320 200" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    <circle cx="236" cy="62" r="22" fill="#f06a35" />
  </svg>
  <svg class="layer" data-speed="0.5" viewBox="0 0 320 200" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    <path d="M0 150 L70 86 L130 136 L190 74 L260 128 L320 98 V260 H0Z" fill="#8fa9ec" />
  </svg>
  <div class="layer hero-text" data-speed="0.35">
    <h1>Quiet mornings above the valley.</h1>
  </div>
  <svg class="layer" data-speed="0.15" viewBox="0 0 320 200" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    <path d="M0 260 V164 L90 116 L170 176 L250 124 L320 168 V260Z" fill="#4f73d9" />
  </svg>
</section>

<main>
  <p>Page content starts here.</p>
  <!-- Image band: the band scrolls normally, only the image lags -->
  <section class="band">
    <img class="band-bg" src="hot-spring.jpg" alt="" />
    <p class="band-text">Hot spring at sunset</p>
  </section>
  <p>More content.</p>
</main>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.hero {
  position: relative;
  height: 100vh;
  overflow: hidden; /* clip layers that move past the edge */
  background: linear-gradient(#dfe8fb, #f3f6fd);
}
.layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  will-change: transform; /* hint that these layers will move */
}

.hero-text {
  height: auto;
  padding: 10vh 24px 0;
}

/* Image band: the image is 80px taller at each end so shifting never shows a gap */
.band {
  position: relative;
  height: 320px;
  overflow: hidden;
  display: grid;
  place-items: center;
}
.band-bg {
  position: absolute;
  top: -80px;
  left: 0;
  width: 100%;
  height: calc(100% + 160px);
  object-fit: cover;
  will-change: transform;
}
.band-text { position: relative; color: #fff; font-weight: 800; }

/* Respect the reduced-motion setting: show a still scene */
@media (prefers-reduced-motion: reduce) {
  .layer, .band-bg { transform: none !important; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const DEPTH = {{depth:n}}; // overall parallax strength (0 = normal scrolling)
const BAND = {{band:n}};  // how much the image inside the band lags
const layers = document.querySelectorAll('[data-speed]');
const bands = document.querySelectorAll('.band');
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
let ticking = false;

function update() {
  ticking = false;
  if (reduce.matches) return;
  const y = window.scrollY;
  layers.forEach((el) => {
    // Larger factor = farther away = appears to move slower
    el.style.transform = \`translate3d(0, \${y * el.dataset.speed * DEPTH}px, 0)\`;
  });
  bands.forEach((band) => {
    // Offset the image by the band's distance from the viewport center
    const r = band.getBoundingClientRect();
    const off = r.top + r.height / 2 - window.innerHeight / 2;
    const shift = Math.max(-80, Math.min(80, -off * BAND));
    band.querySelector('.band-bg').style.transform = \`translate3d(0, \${shift}px, 0)\`;
  });
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(update);
  }
}, { passive: true });
update();`,
    },
  ],
  tune: [
    { key: 'depth', label: 'Parallax depth', min: 0, max: 1.3, step: 0.05, value: 1, unit: '' },
    { key: 'band', label: 'Image band lag', min: 0, max: 0.6, step: 0.05, value: 0.25, unit: '' },
  ],
  cautions: [
    'Large-scale motion can trigger nausea or dizziness for people with vestibular disorders. Always turn parallax off under prefers-reduced-motion: reduce (“Reduce Motion” on iOS and macOS).',
    'Every layer is another image to download. Compress hero images and keep it to three or four layers.',
    'The old background-attachment: fixed trick does not work in iOS Safari and tends to repaint heavily. Moving layers with transform is smoother and works everywhere.',
    'Shifting a layer can expose a gap at its top or bottom edge. Make images slightly larger than their container, or cap how far they can move.',
  ],
  similar: [
    {
      slug: 'fade-in',
      diff: 'A fade-in plays once when an element enters the viewport and then stays put. Parallax keeps moving for as long as you scroll.',
    },
    {
      slug: 'pinning',
      diff: 'Pinning holds an element still for part of the page. Parallax never stops anything; it only changes how fast each layer moves.',
    },
    {
      slug: 'horizontal-scroll',
      diff: 'A horizontal scroll section converts vertical scrolling into sideways movement. Parallax keeps the direction vertical and varies only the speed.',
    },
  ],
  faq: [
    {
      q: 'Can you make a parallax effect with pure CSS?',
      a: 'Partly. The classic CSS-only approach uses perspective and translateZ on a scroll container, and newer browsers support scroll-driven animations with animation-timeline: scroll(). Browser support for the latter is still uneven, so a short requestAnimationFrame script remains the most reliable option today.',
    },
    {
      q: 'Why is my parallax effect choppy or not working on mobile?',
      a: 'If it relies on background-attachment: fixed, iOS Safari simply ignores it. If you update top or background-position on every scroll event, the browser re-lays out the page each time. Move layers with transform: translate3d and batch updates with requestAnimationFrame.',
    },
    {
      q: 'Is parallax scrolling bad for SEO?',
      a: 'The effect itself does not hurt rankings. Problems come from slow pages: several large stacked images can drag down Largest Contentful Paint. Keep images light and put headings and copy in real text, not baked into pictures.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
