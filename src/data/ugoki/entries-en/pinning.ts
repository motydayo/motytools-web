import type { Ugoki } from '../types';

export default {
  slug: 'pinning',
  no: 4,
  category: 'scroll',
  name: 'Pinning',
  en: 'ピン留め',
  aka: ['Pin on scroll', 'Sticky scroll section', 'Scroll pinning', 'Sticky scrollytelling', 'Pinned section'],
  mode: 'scroll',
  title: 'Pin a Section on Scroll with CSS position: sticky (No GSAP)',
  description:
    'Pin a panel while its steps change as you scroll, using position: sticky and about 20 lines of JS. Tunable demo, how tall the section should be, mobile tips.',
  oneLine: 'A panel holds still for a stretch while its content changes.',
  what: [
    'You keep scrolling, but for one stretch of the page a panel stays locked to the screen while its content steps through “01 → 02 → 03”. Once the stretch is over, the panel releases and scrolls away like everything else. In GSAP terms this is a “pin”; in editorial design it is the backbone of scrollytelling.',
    'The demo walks through a three-step booking flow. The dots on the left show which step you are on, and the dashed outline marks the area that is pinned. Steps stacked vertically tend to get skimmed; showing one per screen gets them read in order.',
  ],
  when: [
    'Explaining a sign-up or booking flow as Step 1, 2, 3',
    'Product tours that keep an app screenshot fixed while the captions change',
    'Launch pages that spotlight one feature at a time',
    'Before/after comparisons and timelines that change in the same spot',
  ],
  avoid: [
    'Only one or two items — the scroll feels like it is spinning in place',
    'Text-heavy panels on phones: they do not fit the screen and the bottom gets cut off',
    'Pricing, terms or anything people want to move through at their own pace',
  ],
  prompt:
    'Turn the booking steps section into a pinned scroll section. Make the outer section {{len:n}} viewports tall (calc(100vh * {{len:n}})) and pin the inner panel with position: sticky; top: 0; height: 100svh; so it stays on screen only while you scroll through that section. Compute scroll progress through the section (0 to 1), split it into thirds and switch between Step 01, 02 and 03. Each step should fade in over {{dur:t}} with ease-out, rising {{dist:t}} from below. Add a small indicator showing the current step. Do not use GSAP or any other library. For prefers-reduced-motion: reduce, switch the content without moving it.',
  howTo: [
    'The pin itself is pure CSS. Give the outer section a height of several viewports and put position: sticky; top: 0 on the panel inside. Sticky only works within its parent, so the panel holds still while you scroll through the section and lets go when the section ends. A taller section means a longer pin.',
    'JavaScript handles only the content swap. Measure how far the section’s top has scrolled past the viewport, divide by the scrollable length, and you get progress from 0 to 1. Split that by the number of steps and toggle a class on the active one. GSAP ScrollTrigger used to be the default for this, but for a single pinned section about 20 lines will do.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<section class="pin-sec">
  <div class="pin">
    <div class="step is-on">
      <p class="step-no">STEP 01</p>
      <h3>Pick your dates</h3>
      <p>Choose any open night on the calendar.</p>
    </div>
    <div class="step" aria-hidden="true">
      <p class="step-no">STEP 02</p>
      <h3>Choose a room</h3>
      <p>Find the room and rate that fit your group.</p>
    </div>
    <div class="step" aria-hidden="true">
      <p class="step-no">STEP 03</p>
      <h3>Confirm</h3>
      <p>You are all set once the email arrives.</p>
    </div>
  </div>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* Section height = how long the panel stays pinned (in viewports) */
.pin-sec {
  height: calc(100vh * {{len:n}});
}
/* Sticks to the top only while you scroll through .pin-sec */
.pin {
  position: sticky;
  top: 0;
  height: 100svh; /* small viewport height: not cut off by mobile toolbars */
  display: grid;
  place-items: center;
}
/* Steps share one grid cell; only .is-on is visible */
.step {
  grid-area: 1 / 1;
  opacity: 0;
  transform: translateY({{dist}});
  transition: opacity {{dur}} ease-out, transform {{dur}} ease-out;
}
.step.is-on {
  opacity: 1;
  transform: none;
}
.step-no { font-weight: 800; color: #f06a35; }

@media (prefers-reduced-motion: reduce) {
  .step { transform: none; transition: opacity 0.15s linear; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const sec = document.querySelector('.pin-sec');
const steps = [...sec.querySelectorAll('.step')];

function update() {
  // Progress through the pinned section, 0 to 1
  const top = sec.getBoundingClientRect().top;
  const range = sec.offsetHeight - window.innerHeight;
  const p = Math.min(1, Math.max(0, -top / range));
  const idx = Math.min(steps.length - 1, Math.floor(p * steps.length));
  steps.forEach((s, i) => {
    s.classList.toggle('is-on', i === idx);
    s.setAttribute('aria-hidden', String(i !== idx));
  });
}

window.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
update();`,
    },
  ],
  tune: [
    { key: 'len', label: 'Section length (viewports)', min: 2, max: 7, step: 1, value: 3, unit: '' },
    { key: 'dur', label: 'Step transition', min: 0.1, max: 0.8, step: 0.05, value: 0.3, unit: 's' },
    { key: 'dist', label: 'Slide-up distance', min: 0, max: 48, step: 4, value: 16, unit: 'px' },
  ],
  cautions: [
    'position: sticky stops working if any ancestor has overflow: hidden, auto or scroll. If the panel will not pin, check the parents first.',
    'On mobile, 100vh includes the area behind the address bar, so the bottom of the panel can be cut off. Use 100svh (the small viewport height) for a stable panel.',
    'Long stretches where scrolling changes nothing look broken. Budget roughly one viewport per step and show progress with dots or a “1 / 3” counter.',
    'Add aria-hidden="true" to the steps that are not showing so screen readers do not announce all three at once.',
  ],
  similar: [
    {
      slug: 'sticky-header',
      diff: 'A sticky header stays at the top for the whole page. Pinning holds a panel only for one section and swaps its content meanwhile.',
    },
    {
      slug: 'horizontal-scroll',
      diff: 'A horizontal scroll section is a pin too, but it slides a row of cards sideways while pinned. Pinning swaps content in place.',
    },
    {
      slug: 'scroll-snap',
      diff: 'Scroll snap stops the page at each full-screen section and moves on to the next. With pinning, the panel stays put and only its content changes.',
    },
  ],
  faq: [
    {
      q: 'Do I need GSAP ScrollTrigger to pin an element on scroll?',
      a: 'No. position: sticky handles the pin and about 20 lines of JavaScript handle the step changes. ScrollTrigger is worth it when you choreograph many pinned sections with scrubbed animations and need tight timing control.',
    },
    {
      q: 'Why does my sticky panel not stick?',
      a: 'Usually an ancestor with overflow: hidden. Other causes: no top value, or an outer section that is no taller than the panel, which leaves it no room to stick.',
    },
    {
      q: 'Does pinning work on mobile?',
      a: 'Yes, but keep the pinned content short so it fits a small screen, and size the panel with 100svh instead of 100vh so the address bar does not cut it off.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
