import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'segmented-control',
  no: 17,
  category: 'input',
  name: 'Segmented control',
  en: 'セグメントコントロール',
  aka: ['Segmented button', 'Button group', 'Segmented picker', 'Toggle button group'],
  mode: 'script',
  title: 'Segmented Control vs Tabs vs Radio Buttons: When and How',
  description:
    'When to use a segmented control instead of tabs or radio buttons, and how to build an accessible one from native radio inputs with a sliding CSS indicator.',
  oneLine: 'Two to five side-by-side buttons; pick one and the view updates instantly.',
  what: [
    'A segmented control is a single pill split into two to five segments, exactly one of which is selected. In the demo, picking Week, Month or Year slides a white indicator across and redraws the same spending chart for that range — instantly, with no Apply button.',
    'It sits between two close relatives. Tabs swap between genuinely different panels of content (Overview, Reviews, Map). Radio buttons live in forms: you pick an option and it only counts when you submit, and they cope with long labels and many options. A segmented control is for switching how the same content is shown or filtered, using a handful of short labels, with immediate effect.',
    'Conventions: one segment is always selected — never none. Keyboard users Tab in and use the left and right arrow keys to move the selection, exactly like a radio group. That is why building it on native radio inputs pays off: you get keyboard support and announcements like “Time range, Week, 1 of 3, selected” for free.',
  ],
  when: [
    'Switching a dashboard chart between Week, Month and Year',
    'Showing monthly vs. annual prices on a pricing page',
    'Switching a product listing between List and Grid view',
    'Choosing a travel mode — Drive, Transit, Walk — for the same route search',
  ],
  avoid: [
    'Six or more options, or long labels — segments get too narrow to read; use a select or radio buttons',
    'Switching to completely different content — that is what tabs are for',
    'A choice inside a form that only counts on Submit — radio buttons make the “not saved yet” state clearer',
    'A plain on/off choice — a toggle switch reads faster',
  ],
  prompt:
    'Build a segmented control to switch the spending chart between Week, Month and Year. Use a fieldset with a legend (“Time range”) and three radio inputs that share a name; hide the radios visually and style the labels as side-by-side segments. Give the track a {{r:t}} corner radius and each segment a height of {{h:t}}. Put a single white indicator behind the selected segment and slide it over {{dur:t}} with ease-out when the selection changes. Update the chart and the total immediately on change — no Apply button. Arrow keys must move the selection, and the focused segment needs a visible focus ring. For prefers-reduced-motion, move the indicator without animation.',
  howTo: [
    'Underneath, it is a radio group. Wrap radio inputs that share a name in a fieldset with a legend. That alone gives you arrow-key navigation, exactly one selected option, and screen-reader announcements of position and state.',
    'The rest is CSS. Make each radio invisible (opacity: 0) and stretch it over its label, then lay the labels out as equal columns. Use one indicator element for the selected state, store the selected index in a custom property (--i) and move it with transform. With :has() you can even set --i without JavaScript.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<fieldset class="segmented">
  <legend>Time range</legend>
  <div class="seg-track">
    <span class="seg-indicator" aria-hidden="true"></span>
    <label><input type="radio" name="period" value="week" checked><span>Week</span></label>
    <label><input type="radio" name="period" value="month"><span>Month</span></label>
    <label><input type="radio" name="period" value="year"><span>Year</span></label>
  </div>
</fieldset>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.segmented { border: 0; padding: 0; margin: 0; }
.segmented legend { font-size: 12px; margin-bottom: 4px; }
.seg-track {
  --n: 3; /* number of options */
  --i: 0; /* selected index, from 0 */
  position: relative;
  display: grid;
  grid-template-columns: repeat(var(--n), 1fr);
  padding: 3px;
  border-radius: {{r}};
  background: #ecebe6;
}
/* The sliding indicator */
.seg-indicator {
  position: absolute;
  inset: 3px auto 3px 3px;
  width: calc((100% - 6px) / var(--n));
  border-radius: max(0px, calc({{r}} - 3px));
  background: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.18);
  transform: translateX(calc(100% * var(--i)));
  transition: transform {{dur}} ease-out;
}
.seg-track label {
  position: relative;
  display: grid;
  place-items: center;
  min-height: {{h}};
  font-weight: 700;
  color: #5d6272;
  cursor: pointer;
}
/* Hide the radio visually; keyboard and screen readers still use it */
.seg-track input { position: absolute; inset: 0; margin: 0; opacity: 0; cursor: pointer; }
.seg-track label:has(:checked) { color: #1f2433; }
.seg-track label:has(:focus-visible) { outline: 3px solid #4f73d9; outline-offset: 1px; }
/* Position the indicator without JavaScript */
.seg-track:has(label:nth-of-type(2) :checked) { --i: 1; }
.seg-track:has(label:nth-of-type(3) :checked) { --i: 2; }

@media (prefers-reduced-motion: reduce) {
  .seg-indicator { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `// Redraw the same chart for the new range, immediately
document.querySelectorAll('input[name="period"]').forEach((radio) => {
  radio.addEventListener('change', () => {
    drawChart(radio.value); // 'week' | 'month' | 'year'
  });
});`,
    },
  ],
  tune: [
    { key: 'dur', label: 'Slide speed', min: 0.1, max: 0.6, step: 0.05, value: 0.25, unit: 's' },
    { key: 'r', label: 'Corner radius', min: 0, max: 24, step: 2, value: 10, unit: 'px' },
    { key: 'h', label: 'Segment height', min: 32, max: 56, step: 2, value: 44, unit: 'px' },
  ],
  cautions: [
    'Mark the selected segment with more than the indicator — a darker label helps. If the indicator and track are close in color, nobody can tell what is selected.',
    'Keep labels similar in length. Segments share the width equally, so “Week” next to “Last 12 months trend” means the long one gets cut off.',
    'Segments get narrow on phones. Past five options, switch to a select or radio buttons, and keep each segment at least 44px tall.',
    'If switching changes key figures (like a total), put them in an aria-live region so screen-reader users hear the result.',
  ],
  similar: [
    { slug: 'tab-indicator', book: 'ugoki', diff: 'Tabs switch between different panels of content, often with a sliding underline. If the content stays the same and only its view or range changes, use a segmented control.' },
    { slug: 'toggle-switch', diff: 'A toggle switch is strictly on or off. When the two choices are peers, like Monthly and Annual, a segmented control says more.' },
    { slug: 'chips', diff: 'Filter chips let people select several options at once. A segmented control always has exactly one selected.' },
  ],
  faq: [
    {
      q: 'What is the difference between a segmented control and tabs?',
      a: 'Tabs switch between separate panels of content; a segmented control switches how the same content is shown or filtered. “Overview, Reviews, Map” are tabs; “Week, Month, Year” for one chart is a segmented control. Semantically, tabs use role="tab", while a segmented control is best exposed as a radio group.',
    },
    {
      q: 'How many options can a segmented control have?',
      a: 'Two to five. That is about as many as fit on a phone screen while keeping each segment readable and at least 44px tall. Beyond that, labels get truncated and mis-taps go up.',
    },
    {
      q: 'Can I build it from buttons instead of radio inputs?',
      a: 'You can, but then you have to script arrow-key navigation, single selection and the “selected” announcement yourself with ARIA. Native radio inputs give you all of that with less code and fewer gaps.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
