import type { Ugoki } from '../types';

export default {
  slug: 'magnetic-button',
  no: 12,
  category: 'pointer',
  name: 'Magnetic button',
  en: 'マグネティックボタン',
  aka: ['Magnetic hover effect', 'Magnet button', 'Button follows cursor', 'Sticky cursor button'],
  mode: 'script',
  title: 'Magnetic Button Effect in Vanilla JS: Pulls Toward the Cursor',
  description:
    'A button that drifts toward the cursor like a magnet. Tune radius, pull strength and return speed live, then copy about 20 lines of vanilla JS or a prompt.',
  oneLine: 'Bring the mouse close and the button is pulled toward it.',
  what: [
    'When the cursor enters an invisible field around the button, the button shifts toward it as if pulled by a magnet. The shaded circle in the demo is that field: move the mouse around inside it and the button tracks you; leave it and the button glides back home.',
    'It adds a sense of “press me” to the single most important button on a page. Try the controls: a 35% pull feels like gentle attraction, while 70% or more makes the button chase the cursor and start to feel slippery. The radius decides how early the pull kicks in.',
  ],
  when: [
    'The primary call to action at the end of a landing page — “Get started”, “Book a call”',
    'Agency and brand sites that want the interface itself to feel crafted',
    'The main hero button that leads visitors to the next step',
  ],
  avoid: [
    'Screens with many buttons — if everything drifts, nothing feels stable and misclicks go up',
    'Form submit buttons and other places where precise clicking matters most',
    'Small buttons, where even a modest pull looks like the button is running away',
  ],
  prompt:
    'Turn the single most important button into a magnetic button. When the mouse is within {{range:t}} of the button’s center, move the button toward the cursor by {{power:t}} of the offset using transform: translate, and move the label inside by half that again for a sense of depth. Pull in quickly (0.15s) and, once the cursor leaves the radius, ease back to the original position over {{back:t}} ease-out. Measure the center from a static wrapper, not the moving button, to avoid jitter. Use a single pointermove listener and no libraries. Disable the effect on devices without a fine pointer and under prefers-reduced-motion: reduce.',
  howTo: [
    'On every pointer move, measure the distance from the button’s center to the cursor. If it is inside your radius (110px here), move the button by a fraction of that offset — 35% in this example — using transform. A smaller fraction feels subtle; a larger one feels strong. Above roughly 50%, the button starts to stick to the cursor and feels like it is escaping your click.',
    'Snap in fast (about 0.15s) and release slowly (0.3–0.5s) for a satisfying spring-back. The key detail is to measure the center from a wrapper that never moves. If you use the button’s own getBoundingClientRect(), the center shifts every time it moves and the button jitters.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="magnet">
  <a class="magnetic-btn" href="/book">
    <span class="magnetic-label">Book a call</span>
  </a>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.magnet { display: inline-block; padding: 40px; } /* static wrapper we measure from */
.magnetic-btn {
  display: inline-flex;
  align-items: center;
  min-height: 48px;
  padding: 0 28px;
  border-radius: 999px;
  background: #1d2541;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  transition: transform {{back}} ease-out; /* slow release */
}
.magnetic-label { display: block; transition: transform {{back}} ease-out; }
.magnetic-btn.is-pull,
.magnetic-btn.is-pull .magnetic-label { transition-duration: 0.15s; } /* quick pull */
.magnetic-btn:focus-visible { outline: 2px solid #4f73d9; outline-offset: 3px; }`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const RANGE = {{range:n}}; // pull when the cursor is within this many px of the center
const POWER = {{power:n}} / 100; // share of the offset the button moves

const enabled = matchMedia('(pointer: fine)').matches &&
  !matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('.magnet').forEach((wrap) => {
  const btn = wrap.querySelector('.magnetic-btn');
  const label = wrap.querySelector('.magnetic-label');
  if (!enabled || !btn) return;

  const release = () => {
    btn.classList.remove('is-pull');
    btn.style.transform = '';
    label.style.transform = '';
  };

  window.addEventListener('pointermove', (e) => {
    // Measure from the static wrapper, not the moving button
    const r = wrap.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    if (Math.hypot(dx, dy) > RANGE) return release();
    btn.classList.add('is-pull');
    btn.style.transform = \`translate(\${dx * POWER}px, \${dy * POWER}px)\`;
    // The label moves a little further for depth
    label.style.transform = \`translate(\${dx * POWER * 0.5}px, \${dy * POWER * 0.5}px)\`;
  });
  document.documentElement.addEventListener('pointerleave', release);
});`,
    },
  ],
  tune: [
    { key: 'range', label: 'Magnetic radius', min: 60, max: 160, step: 10, value: 110, unit: 'px' },
    { key: 'power', label: 'Pull strength', min: 10, max: 80, step: 5, value: 35, unit: '%' },
    { key: 'back', label: 'Return duration', min: 0.1, max: 1, step: 0.05, value: 0.35, unit: 's' },
  ],
  cautions: [
    'Touch devices have no cursor to approach the button. You could nudge it on tap, but that makes the tap target look like it moved, so the usual choice is no effect on touch. (In the demo frame, tapping does pull the button toward the tap point.)',
    'Too much pull makes the button feel like it is dodging the click. Keep it around 30–40% of the offset and no more than 30–40px of travel.',
    'Keyboard users never trigger this effect. Make the :focus-visible outline obvious so they can still see what is selected.',
    'Every magnetic button listens to pointermove across the whole page. Limit it to one or two buttons that really matter.',
  ],
  similar: [
    {
      slug: 'cursor-follower',
      diff: 'A cursor follower is a decoration that trails the mouse. A magnetic button is the button itself moving toward the mouse.',
    },
    {
      slug: 'hover-lift',
      diff: 'Hover lift only moves straight up when hovered. A magnetic button shifts in whatever direction the cursor is.',
    },
  ],
  faq: [
    {
      q: 'Can I make a magnetic button without GSAP?',
      a: 'Yes. All you need is the distance between the cursor and the button’s center and a transform that moves the button by part of that distance — about 20 lines of vanilla JavaScript. GSAP makes the easing smoother to tune, but it is not required.',
    },
    {
      q: 'Why does my magnetic button jitter or shake?',
      a: 'You are probably measuring the center from the button after it has moved. Each move shifts the center, which shifts the button again. Measure from a wrapper element that never moves.',
    },
    {
      q: 'Do magnetic buttons increase click-through rate?',
      a: 'There is no guarantee. They do draw the eye, but copy, placement and contrast matter far more. Treat the effect as polish, and A/B test it if you want to know its real impact.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
