import type { Ugoki } from '../types';

export default {
  slug: 'cursor-follower',
  no: 11,
  category: 'pointer',
  name: 'Cursor follower',
  en: 'マウスストーカー',
  aka: ['Custom cursor follower', 'Cursor trail circle', 'Mouse follower', 'Follow cursor animation'],
  mode: 'script',
  title: 'Custom Cursor Follower in JavaScript: Smooth Trailing Circle',
  description:
    'A circle that trails the mouse with a smooth delay and grows over links. Tune lag, size and hover scale live, then copy the vanilla JS and CSS or an AI prompt.',
  oneLine: 'A ring trails behind the mouse pointer with a smooth delay.',
  what: [
    'As you move the mouse, an orange ring follows a beat behind the pointer, easing to a stop when the pointer stops. In the demo, the ring grows over the button and the image to signal “this is clickable”.',
    'You see it on agency, studio and brand sites, where the craft of the interface is part of the pitch. It carries no information of its own, so it only belongs where it does not get in the way of the page’s actual job. The lag is the whole effect: drag “Follow speed” to 100% and the ring just sits on the pointer; drop it to 4% and it feels like it is wading through mud.',
  ],
  when: [
    'Design agency or production studio sites where polish is part of the portfolio',
    'Brand campaign pages that want a playful, tactile feel',
    'Image-heavy portfolios where the ring’s size can hint at clickable areas',
  ],
  avoid: [
    'Checkout, sign-up forms and pricing tables, where people need speed and precision',
    'Healthcare, government and finance sites, where clarity and trust come first',
    'Hiding the real cursor and showing only the ring — the lag makes it hard to tell what you are pointing at',
  ],
  prompt:
    'Add a custom cursor follower to the site. Place a {{size:t}} ring with a 2px border using position: fixed and pointer-events: none. On each requestAnimationFrame, move the ring {{follow:t}} of the remaining distance toward the mouse so it trails behind with a smooth delay, and stop the animation loop once it catches up. Over links and buttons, scale the ring to {{grow:t}}x and give it a light fill. Keep the native cursor visible. Do not show the ring on devices without a fine pointer (@media (pointer: fine)), and under prefers-reduced-motion: reduce, place it on the pointer with no lag. No libraries; add aria-hidden="true" to the ring.',
  howTo: [
    'Place a single ring element and keep track of the mouse position in JavaScript. On every frame (about 60 times a second), move the ring a fixed fraction of the remaining distance toward the mouse. Because the step shrinks as the gap closes, the ring decelerates naturally — that linear interpolation (often called lerp) is what creates the trailing feel. Around 12–20% per frame reads as “following”.',
    'When the pointer is over a link or button, add a class that scales the ring up. Give the ring pointer-events: none so clicks pass straight through to whatever is underneath, and stop the requestAnimationFrame loop once the ring has caught up so it does not burn battery while idle.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML (end of body)',
      code: `<div class="cursor-follower" aria-hidden="true"></div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.cursor-follower {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: {{size}};
  height: {{size}};
  margin: calc({{size}} / -2) 0 0 calc({{size}} / -2); /* center on the pointer */
  border: 2px solid #f06a35;
  border-radius: 50%;
  pointer-events: none; /* clicks pass through */
  opacity: 0;
  transition: opacity 0.2s ease-out, scale 0.2s ease-out, background-color 0.2s ease-out;
}
.cursor-follower.is-on { opacity: 1; }
/* Bigger over links and buttons */
.cursor-follower.is-big { scale: {{grow:n}}; background-color: rgba(240, 106, 53, 0.16); }

/* Hide on touch devices */
@media not all and (pointer: fine) {
  .cursor-follower { display: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const ring = document.querySelector('.cursor-follower');
const fine = matchMedia('(pointer: fine)').matches;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (ring && fine) {
  const target = { x: 0, y: 0 };
  const pos = { x: 0, y: 0 };
  let raf = 0;

  const tick = () => {
    const k = reduce ? 1 : {{follow:n}} / 100; // share of the gap closed per frame
    pos.x += (target.x - pos.x) * k;
    pos.y += (target.y - pos.y) * k;
    // translate (not transform) so the CSS scale grows the ring in place
    ring.style.translate = \`\${pos.x}px \${pos.y}px\`;
    const moving = Math.abs(target.x - pos.x) + Math.abs(target.y - pos.y) > 0.3;
    raf = moving ? requestAnimationFrame(tick) : 0; // stop when caught up
  };

  window.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    target.x = e.clientX;
    target.y = e.clientY;
    // First appearance: start at the pointer instead of flying in from 0,0
    if (!ring.classList.contains('is-on')) { pos.x = target.x; pos.y = target.y; }
    ring.classList.add('is-on');
    ring.classList.toggle('is-big', !!e.target.closest('a, button'));
    if (!raf) raf = requestAnimationFrame(tick);
  });
  // Hide when the mouse leaves the window
  document.documentElement.addEventListener('pointerleave', () => {
    ring.classList.remove('is-on');
  });
}`,
    },
  ],
  tune: [
    { key: 'follow', label: 'Follow speed (per frame)', min: 4, max: 100, step: 2, value: 16, unit: '%' },
    { key: 'size', label: 'Ring size', min: 16, max: 80, step: 2, value: 40, unit: 'px' },
    { key: 'grow', label: 'Scale over links', min: 1, max: 3, step: 0.1, value: 1.8, unit: '' },
  ],
  cautions: [
    'Phones and tablets have no mouse, so there is nothing to follow. You could show the ring under a finger, but the finger covers it, which is why most sites disable it on touch. (Inside the demo frame, tapping makes the ring chase the tap point.)',
    'Hiding the native cursor with cursor: none and showing only the trailing ring makes clicks land somewhere other than where the ring appears. Keep the real cursor.',
    'Forget pointer-events: none and the ring will sit on top of buttons and swallow clicks.',
    'The per-frame math is cheap, but running the loop forever while the mouse is still wastes battery. Stop requestAnimationFrame once the ring catches up.',
    'The ring is pure decoration. Mark it aria-hidden="true" so screen readers skip it.',
  ],
  similar: [
    {
      slug: 'magnetic-button',
      diff: 'With a magnetic button, the button itself is pulled toward the cursor. With a cursor follower, a separate decoration chases the cursor. Many sites use both together.',
    },
    {
      slug: 'hover-lift',
      diff: 'Hover lift is a reaction from the card you point at. A cursor follower is always there, trailing the mouse anywhere on the page.',
    },
  ],
  faq: [
    {
      q: 'Will a custom cursor follower slow down my site?',
      a: 'Moving a single element is very cheap. Performance problems come from moving it with top and left instead of translate or transform, or from putting filter: blur on the ring. Move it with translate and stop the loop when the ring is at rest.',
    },
    {
      q: 'How do I disable the cursor follower on mobile?',
      a: 'Use @media (pointer: fine) in CSS and matchMedia("(pointer: fine)") in JavaScript. Only devices with a precise pointer such as a mouse or trackpad match, so phones and tablets never see it.',
    },
    {
      q: 'What is the difference between a custom cursor and a cursor follower?',
      a: 'A custom cursor usually means replacing the cursor image itself with the CSS cursor property. A cursor follower keeps the native cursor and adds a separate element that trails behind it.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
