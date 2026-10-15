import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'stepper',
  no: 12,
  category: 'nav',
  name: 'Stepper (progress steps)',
  en: 'ステップ表示（ステッパー）',
  aka: ['Stepper', 'Progress steps', 'Step indicator', 'Progress tracker', 'Multi-step form progress', 'Wizard steps'],
  mode: 'script',
  title: 'Stepper UI: Progress Steps for Multi-Step Forms (HTML, CSS, JS)',
  description:
    'A stepper shows where people are in a checkout or sign-up flow. How it differs from a progress bar, accessible markup with aria-current="step", and code.',
  oneLine: 'Numbered circles joined by lines that show which step you are on and how many are left.',
  what: [
    'A stepper sits on top of a multi-screen flow — booking, checkout, sign-up — and lays out its stages, like 1 Dates → 2 Your details → 3 Review → 4 Done, highlighting where you are. In the demo, every Continue moves the current marker one step to the right; finished steps fill in with a check mark and the connecting line grows. Back takes you to the previous step.',
    'A progress bar can only show how far along you are as a percentage. A stepper shows the names of the steps and how many remain, so people can see “just the review left” — that sense of the finish line helps keep them from abandoning the form. Breadcrumbs, by contrast, show your place in the site’s hierarchy, not in a sequence.',
    'The conventions: because order matters, mark it up as an <ol> and put aria-current="step" on the current <li>. Communicate completed steps in text as well as visually, e.g. a visually hidden “(completed)”. When the step changes, move focus to the new step’s heading so keyboard and screen reader users know a new stage has started.',
  ],
  when: [
    'Hotel and restaurant bookings or checkouts that run across three to five screens: details, review, confirmation',
    'Long sign-up or quote request forms that you have split across several screens',
    'Onboarding that walks first-time users through profile, notifications and preferences in order',
    'Any flow where showing “only two steps left” could keep people from dropping off',
  ],
  avoid: [
    'Short forms that fit on one screen — splitting them into steps makes them feel like more work',
    'Seven or more steps — it looks like a long road. Group fields until you have three to five',
    'Settings people can fill in any order — use tabs or a list instead of a sequence',
  ],
  prompt:
    'Add a stepper above the booking form. List four steps — Dates, Your details, Review, Done — in an <ol> laid out horizontally, each a numbered circle {{size:t}} across with a short label underneath. Join the steps with a {{line:t}} line. When a step is completed, fill its circle, swap the number for a check mark, and grow the colored line from left to right over {{dur:t}}. Put aria-current="step" on the current <li> and emphasize its border, and add a visually hidden “(completed)” to finished steps. Use Continue and Back buttons to move between steps, and after each move, send focus to a heading like “Step 2 of 4: Your details”. Below 480px, show only the current step’s label. Skip the line animation for prefers-reduced-motion.',
  howTo: [
    'Each step is an <li> in an <ol> containing a circle (the number) and a label. Draw the connector with li + li::before and lay a colored line over it with ::after that animates from transform: scaleX(0) to scaleX(1). There are three states — completed (.is-done), current (aria-current="step") and upcoming — styled as filled, outlined and gray.',
    'The JavaScript keeps one number, the current step. Continue and Back change it and reapply the classes and aria-current. Put each step’s fields in its own <section> and toggle them with hidden. Validate each step before moving on, so people cannot advance past an error.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML (on step 2)',
      code: `<ol class="stepper" aria-label="Booking steps">
  <li class="is-done">
    <span class="dot" aria-hidden="true">1</span>
    <span class="name">Dates<span class="visually-hidden"> (completed)</span></span>
  </li>
  <li aria-current="step">
    <span class="dot" aria-hidden="true">2</span>
    <span class="name">Your details</span>
  </li>
  <li>
    <span class="dot" aria-hidden="true">3</span>
    <span class="name">Review</span>
  </li>
  <li>
    <span class="dot" aria-hidden="true">4</span>
    <span class="name">Done</span>
  </li>
</ol>

<h2 class="step-title" tabindex="-1">Step 2 of 4: Your details</h2>
<!-- Step 2 fields go here -->
<button type="button" class="back">Back</button>
<button type="button" class="next">Continue</button>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.stepper {
  display: flex;
  list-style: none;
  padding: 0;
}
.stepper li {
  position: relative;
  flex: 1;
  display: grid;
  justify-items: center;
  gap: 6px;
  font-size: 13px;
  color: #5d6272;
  text-align: center;
}
/* Connector to the previous step: gray track plus a growing colored line */
.stepper li + li::before,
.stepper li + li::after {
  content: "";
  position: absolute;
  top: calc({{size}} / 2 - {{line}} / 2);
  left: calc(-50% + {{size}} / 2 + 6px);
  right: calc(50% + {{size}} / 2 + 6px);
  height: {{line}};
  background: #e4e2dc;
}
.stepper li + li::after {
  background: #4f73d9;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform {{dur}} ease-out;
}
.stepper li.is-done + li::after { transform: scaleX(1); }

.stepper .dot {
  display: grid;
  place-items: center;
  width: {{size}};
  height: {{size}};
  border: 2px solid #c9c6be;
  border-radius: 50%;
  background: #fff;
  font-size: calc({{size}} * 0.45);
  font-weight: 800;
}
/* Current step */
.stepper [aria-current="step"] { color: #1f2433; font-weight: 700; }
.stepper [aria-current="step"] .dot { border-color: #4f73d9; color: #4f73d9; }
/* Completed step: a check mark instead of the number */
.stepper .is-done .dot { border-color: #4f73d9; background: #4f73d9; color: transparent; position: relative; }
.stepper .is-done .dot::after { content: "✓"; position: absolute; inset: 0; display: grid; place-items: center; color: #fff; }

/* Hidden on screen, still read by screen readers */
.visually-hidden {
  position: absolute; width: 1px; height: 1px;
  overflow: hidden; clip-path: inset(50%); white-space: nowrap;
}

/* On phones, show only the current step's label (still announced) */
@media (max-width: 479px) {
  .stepper li:not([aria-current]) .name {
    position: absolute; width: 1px; height: 1px;
    overflow: hidden; clip-path: inset(50%); white-space: nowrap;
  }
}
@media (prefers-reduced-motion: reduce) {
  .stepper li + li::after { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const steps = [...document.querySelectorAll('.stepper li')];
const title = document.querySelector('.step-title');
let current = 1; // zero-based: step 2

function render() {
  steps.forEach((li, i) => {
    li.classList.toggle('is-done', i < current);
    // Add a visually hidden "(completed)" to finished steps
    const note = li.querySelector('.visually-hidden');
    if (i < current && !note) li.querySelector('.name').insertAdjacentHTML('beforeend', '<span class="visually-hidden"> (completed)</span>');
    if (i >= current && note) note.remove();
    if (i === current) li.setAttribute('aria-current', 'step');
    else li.removeAttribute('aria-current');
  });
  const name = steps[current].querySelector('.name').firstChild.textContent.trim();
  title.textContent = \`Step \${current + 1} of \${steps.length}: \${name}\`;
  title.focus(); // Announce the new step to screen readers
}

document.querySelector('.next').addEventListener('click', () => {
  // Validate the current step here and stop if there are errors
  if (current < steps.length - 1) { current++; render(); }
});
document.querySelector('.back').addEventListener('click', () => {
  if (current > 0) { current--; render(); }
});`,
    },
  ],
  tune: [
    { key: 'size', label: 'Circle size', min: 20, max: 40, step: 2, value: 28, unit: 'px' },
    { key: 'line', label: 'Line thickness', min: 1, max: 6, step: 1, value: 2, unit: 'px' },
    { key: 'dur', label: 'Line fill speed', min: 0.1, max: 0.6, step: 0.05, value: 0.3, unit: 's' },
  ],
  cautions: [
    'Do not show completion with color alone. People with color vision deficiencies and screen reader users will miss it; add a check mark and the word “completed”.',
    'Never clear what people typed when they go Back. Making them re-enter everything is a classic reason to abandon a form.',
    'If completed circles are clickable to jump back, make them real <button>s with names like “Edit dates”, and style them differently from the non-clickable ones.',
    'On the Review step, group the answers by step and add an Edit link to each group, so people can fix things without walking back through the stepper.',
  ],
  similar: [
    { slug: 'progress-bar', book: 'ugoki', diff: 'A scroll progress bar shows how much of a page you have read as a bar length. A stepper names each stage and shows how many are left.' },
    { slug: 'breadcrumb', diff: 'Breadcrumbs show your place in the site’s hierarchy and link back up. A stepper shows your place in an ordered sequence.' },
    { slug: 'pagination', diff: 'Pagination also shows numbers, but you can jump to any page of a list. A stepper assumes you move through the steps in order.' },
  ],
  faq: [
    {
      q: 'How many steps should a stepper have?',
      a: 'Aim for three to five. With two, simple headings like “Details” and “Review” are enough; with six or more, the flow starts to look long and more people quit. If you have lots of fields, group related ones to cut the number of steps.',
    },
    {
      q: 'Stepper or progress bar — which should I use?',
      a: 'Use a stepper when the flow has named stages, and a progress bar for work without clear stages, like an upload or the share of a survey completed. Long surveys often combine both: “Question 3 of 10” plus a bar.',
    },
    {
      q: 'What does aria-current="step" do?',
      a: 'It tells screen readers which step is the current one, since color and bold text are not announced. You can also hook your CSS to [aria-current="step"], which keeps the visual state and the announced state from drifting apart.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
