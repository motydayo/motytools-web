import type { Ugoki } from '../types';

export default {
  slug: 'count-up',
  no: 25,
  category: 'inform',
  name: 'Count-up animation',
  en: 'カウントアップ',
  aka: ['Number counter animation', 'Animated counter', 'Counting numbers', 'Stats counter', 'Number ticker'],
  mode: 'script',
  title: 'Number Counter Animation in Vanilla JavaScript (No Library)',
  description:
    'Count stats up from 0 when they scroll into view, in about 30 lines of vanilla JS. Tunable duration and easing, no layout shift, and screen reader support.',
  oneLine: 'Key numbers count up from zero to their final value.',
  what: [
    'Stats like “1,280+ businesses” or “98.2% retention” count up from zero the moment they scroll into view, racing at first and then settling gently on the final number. In the demo, the top row starts as soon as the page loads, and the navy band below starts once you scroll it into view.',
    'A moving number catches the eye far better than static text, so this is a cheap way to pull attention to proof points. The ease-out curve matters: a counter that slows down at the end makes the final value feel deliberate and memorable. Watch the digits, too — they stay perfectly still horizontally because the number uses tabular figures.',
  ],
  when: [
    'SaaS landing pages showing customers, users, uptime or satisfaction scores',
    'About and careers pages with headcount, years in business or office locations',
    'Fundraising and crowdfunding pages showing dollars raised and backer counts',
    'App landing pages highlighting downloads or an average star rating',
  ],
  avoid: [
    'Numbers people need to read accurately right away — prices, stock levels, countdowns',
    'Tables or dashboards with ten or more figures; when everything moves, nothing is readable',
    'Numbers you cannot back up. Animating a vague claim only draws more scrutiny to it',
  ],
  prompt:
    'Turn the stats section into a count-up animation. When a row of stats is 60% visible, count each number from 0 to its final value over {{dur:t}} with an ease-out curve (multiply the target by 1 - (1 - k)^{{ease:n}}, where k is progress from 0 to 1), and start each number in the row {{stagger:t}} after the previous one. Use IntersectionObserver to detect visibility, run it only once, and do not use any library. Format numbers with toLocaleString(\'en-US\') so thousands get commas and decimals stay fixed (98.2, not 98.20000001). Set font-variant-numeric: tabular-nums and reserve the final width up front so nothing shifts while counting. Put the final values in the HTML so they work without JavaScript and for search engines. Give screen readers only the final value, and show final values immediately for prefers-reduced-motion users.',
  howTo: [
    'Write the final value — “1,280” — straight into the HTML. That way search engines, link previews and anyone whose JavaScript fails still see the real number. In JavaScript, measure each number while it shows its final value, lock that width with min-width, and only then reset it to 0. Units and labels next to the number will not jump around as digits get added.',
    'IntersectionObserver tells you when the stats row enters the viewport. From there, requestAnimationFrame updates the number every frame, and an ease-out curve makes it slow down as it approaches the target. toLocaleString handles thousands separators and decimal places for you.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="stats">
  <div class="stat">
    <!-- Screen readers get the final value only -->
    <span class="visually-hidden">1,280+ businesses</span>
    <span aria-hidden="true">
      <b class="count" data-to="1280" data-dec="0">1,280</b>+
      <small>Businesses</small>
    </span>
  </div>
  <div class="stat">
    <span class="visually-hidden">98.2% retention</span>
    <span aria-hidden="true">
      <b class="count" data-to="98.2" data-dec="1">98.2</b>%
      <small>Retention</small>
    </span>
  </div>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.count {
  display: inline-block;
  font-size: 32px;
  font-weight: 800;
  /* Equal-width digits: no wobble while counting */
  font-variant-numeric: tabular-nums;
  text-align: right;
}

/* Hidden visually, still read by screen readers */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fmt = (v, dec) =>
  v.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec });
// Slows down at the end (higher = stronger; 1 = linear)
const easeOut = (k) => 1 - Math.pow(1 - k, {{ease:n}});

function countUp(el, delay) {
  const to = Number(el.dataset.to);
  const dec = Number(el.dataset.dec || 0);
  const ms = {{dur:n}} * 1000;
  const start = performance.now() + delay;
  const tick = (now) => {
    const k = Math.max(0, Math.min(1, (now - start) / ms));
    el.textContent = fmt(to * easeOut(k), dec);
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const groups = document.querySelectorAll('.stats');
if (!reduce) {
  document.querySelectorAll('.count').forEach((el) => {
    // Lock the final width, then reset to 0
    el.style.minWidth = el.getBoundingClientRect().width + 'px';
    el.textContent = fmt(0, Number(el.dataset.dec || 0));
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      // Stagger the numbers in a row slightly
      e.target.querySelectorAll('.count').forEach((el, i) => countUp(el, i * {{stagger:n}} * 1000));
      io.unobserve(e.target); // run once
    });
  }, { threshold: 0.6 });
  groups.forEach((g) => io.observe(g));
}`,
    },
  ],
  tune: [
    { key: 'dur', label: 'Duration', min: 0.4, max: 3, step: 0.1, value: 1.6, unit: 's' },
    { key: 'ease', label: 'Ease-out strength (1 = linear)', min: 1, max: 6, step: 1, value: 3, unit: '' },
    { key: 'stagger', label: 'Delay between numbers', min: 0, max: 0.4, step: 0.05, value: 0.1, unit: 's' },
  ],
  cautions: [
    'Without font-variant-numeric: tabular-nums, a narrow “1” and a wide “8” make the number wobble left and right the whole time it counts. Some fonts have no tabular figures at all, so test with the font you actually ship.',
    'Screen readers may announce intermediate values like “437”. Mark the animated number aria-hidden="true" and provide the final value as visually hidden text.',
    'If the HTML says 0 and JavaScript counts up, search engines, social previews and anyone whose script fails will see “0 customers”. Ship the final value and reset to 0 only when animating.',
    'Re-running the count every time the section scrolls back into view gets distracting fast. Once, on first view, is the safe default.',
  ],
  similar: [
    {
      slug: 'typewriter',
      diff: 'A typewriter effect reveals text one character at a time. A count-up changes the value of a number itself and is used to make figures stick.',
    },
    {
      slug: 'fade-in',
      diff: 'Fade-in on scroll reveals an element without changing its content. A count-up uses the same trigger, but what changes is the number.',
    },
  ],
  faq: [
    {
      q: 'Why does my counter jitter sideways while it counts?',
      a: 'In most fonts, digits have different widths, so the total width changes on every frame. Add font-variant-numeric: tabular-nums and set a min-width equal to the final value’s width before you start.',
    },
    {
      q: 'Do I need jQuery or CountUp.js for this?',
      a: 'No. IntersectionObserver and requestAnimationFrame cover everything in about 30 lines of plain JavaScript. A library only pays off if you need extras like odometer-style rolling digits.',
    },
    {
      q: 'How do I add commas or a currency symbol?',
      a: 'Use toLocaleString(\'en-US\', { minimumFractionDigits, maximumFractionDigits }) for thousands separators and fixed decimals. Keep symbols like “$” or “%” outside the animated element so the number’s width is the only thing that changes.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
