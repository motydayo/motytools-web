import type { Ugoki } from '../types';

export default {
  slug: 'ripple',
  no: 13,
  category: 'pointer',
  name: 'Ripple effect',
  en: 'リップルエフェクト',
  aka: ['Button ripple effect', 'Material ripple', 'Click ripple animation', 'Ink ripple'],
  mode: 'pointer',
  title: 'Button Ripple Effect in CSS & JS: Ripple from the Click Point',
  description:
    'A Material-style ripple that spreads from the exact click or tap point. Tune duration and opacity live, then copy the vanilla JS (keyboard-ready) or a prompt.',
  oneLine: 'A circle spreads out from where you pressed, then fades away.',
  what: [
    'Press a button or a list row and a circle grows outward from the exact point of contact, fading as it expands. In the demo, pressing the left side of a plan row sends the ripple out from the left; pressing the right side of the button sends it from the right.',
    'It confirms “your press registered” and ties that confirmation to where your finger or cursor actually was. Popularized by Google’s Material Design, it suits app-like interfaces. Try the controls: around half a second feels crisp; at 0.2s the ripple vanishes before you can see where it came from, and past a second it feels sluggish.',
  ],
  when: [
    'Booking and ordering flows used mostly on phones, where a tap needs clear feedback',
    'Selectable lists such as plans or shipping options, where you press a whole row',
    'Dashboards and web apps where there is a short wait between pressing and seeing a result',
    'Web versions or landing pages of mobile apps that should feel like the app',
  ],
  avoid: [
    'Inline links in body text — a circle bursting inside a sentence hurts readability',
    'Quiet, premium brand sites where an app-like ripple can feel cheap',
    'Buttons that navigate immediately — the page changes before the ripple is visible',
  ],
  prompt:
    'Add a ripple effect to buttons and selectable rows. On pointerdown, create a span centered on the press point, sized to reach the farthest corner, and animate it from transform: scale(0) to scale(1) while fading opacity to 0. Use a white ripple at {{alpha:t}} opacity, a {{dur:t}} ease-out animation, and remove the span on animationend. Give the button position: relative and overflow: hidden. When the button is activated with Enter or Space, start the ripple from its center. Skip the ripple entirely under prefers-reduced-motion: reduce. No libraries.',
  howTo: [
    'When the element is pressed, append a circular span centered on the press point. Make its diameter twice the distance to the farthest corner so that, wherever you press, the circle ends up covering the whole button. A CSS animation scales it from 0 to 1 while fading it out, and the span is removed when the animation ends.',
    'overflow: hidden on the button keeps the circle inside. Read the coordinates on pointerdown rather than click so the ripple starts the instant the finger or mouse touches down. Aim for 0.4–0.6s: shorter and the origin point is lost, longer and it feels like the interface is making you wait.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<button type="button" class="ripple-btn">Continue with this plan</button>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.ripple-btn {
  position: relative;
  overflow: hidden;   /* keep the ripple inside the button */
  min-height: 48px;
  padding: 0 24px;
  border: 0;
  border-radius: 999px;
  background: #f06a35;
  color: #fff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}
.ripple-btn:focus-visible { outline: 2px solid #4f73d9; outline-offset: 2px; }

.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, {{alpha:n}}); /* ripple opacity */
  transform: scale(0);
  pointer-events: none;
  animation: ripple {{dur}} ease-out forwards;
}
@keyframes ripple {
  to { transform: scale(1); opacity: 0; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `// x, y are relative to the element's top-left corner
function ripple(el, x, y) {
  // Respect reduced-motion preferences
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const r = el.getBoundingClientRect();
  // Big enough to reach the farthest corner
  const size = Math.hypot(Math.max(x, r.width - x), Math.max(y, r.height - y)) * 2;
  const dot = document.createElement('span');
  dot.className = 'ripple';
  dot.style.cssText = \`width:\${size}px;height:\${size}px;left:\${x - size / 2}px;top:\${y - size / 2}px\`;
  el.appendChild(dot);
  dot.addEventListener('animationend', () => dot.remove());
}

document.querySelectorAll('.ripple-btn').forEach((btn) => {
  // Mouse and touch: start where the pointer landed
  btn.addEventListener('pointerdown', (e) => {
    const r = btn.getBoundingClientRect();
    ripple(btn, e.clientX - r.left, e.clientY - r.top);
  });
  // Keyboard: start from the center (ignore auto-repeat)
  btn.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && !e.repeat) ripple(btn, btn.offsetWidth / 2, btn.offsetHeight / 2);
  });
});`,
    },
  ],
  tune: [
    { key: 'dur', label: 'Ripple duration', min: 0.2, max: 1.5, step: 0.05, value: 0.5, unit: 's' },
    { key: 'alpha', label: 'Ripple opacity', min: 0.1, max: 0.9, step: 0.05, value: 0.4, unit: '' },
  ],
  cautions: [
    'Unlike hover effects, a ripple works the same with a mouse and a finger, so it holds up on mobile. It is wasted on buttons that navigate instantly, though; use it where the screen stays put (selection, submit with a loading state).',
    'overflow: hidden also clips anything else that sticks out of the button, such as ::after badges or tooltips. box-shadow is not clipped, but pseudo-element decorations are — check them.',
    'Keyboard activation has no coordinates. Start the ripple from the center on Enter and Space so keyboard users get the same feedback.',
    'Rapid clicking stacks up circles. Always remove each span on animationend so they do not pile up in the DOM.',
  ],
  similar: [
    {
      slug: 'hover-lift',
      diff: 'Hover lift responds to hovering, which touch devices do not have. A ripple responds to pressing, so it shows up on phones too.',
    },
    {
      slug: 'magnetic-button',
      diff: 'A magnetic button draws you in before you click. A ripple confirms the click after it happens.',
    },
  ],
  faq: [
    {
      q: 'Can I make a ripple effect with CSS only?',
      a: 'A ripple from the center of the button is possible with :active and a pseudo-element. Starting it from the exact click point requires the pointer coordinates, so you need a few lines of JavaScript.',
    },
    {
      q: 'Why does my ripple spill outside the button?',
      a: 'Add position: relative and overflow: hidden to the button. Without position, the ripple is positioned relative to some ancestor instead of the button.',
    },
    {
      q: 'How is the ripple related to Material Design?',
      a: 'Google’s Material Design made the ripple its standard press feedback, which is why it became so widespread. Component libraries like Material UI include it out of the box, but as the code above shows, it is easy to build yourself.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
