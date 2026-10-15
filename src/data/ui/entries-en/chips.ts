import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'chips',
  no: 19,
  category: 'input',
  name: 'Chips (filter chips)',
  en: 'チップ',
  aka: ['Filter chips', 'Chip filters', 'Pills', 'Toggle tags', 'Filter pills'],
  mode: 'script',
  title: 'Filter Chips vs Tags vs Badges: Accessible Chips in HTML & CSS',
  description:
    'What filter chips are, how they differ from tags and badges, and how to build accessible multi-select chips from checkboxes in CSS. Instant filtering vs Apply.',
  oneLine: 'Small rounded pills you tap to switch filters on and off — any number at once.',
  what: [
    'Chips are small rounded pills that switch on and off each time you tap them. In the demo, tapping Hot tub or Breakfast adds a check mark and the listing and the “2 of 5 stays” count update on the spot. You can pick as many as you like; only stays that match every selected filter remain.',
    'Two things look similar. The gray “Hot tub” labels inside each card are tags: they describe the stay and cannot be pressed. The red “2 left” is a badge: it flags a status or a count. Chips are different — they are controls that change what you see. That is why they need a visible border and clear pressed feedback, and tags should not.',
    'Filter chips normally apply instantly. If each change triggers a slow server request, or people combine a dozen filters, let them pick several chips and then press “Show 24 stays” instead. Keyboard users Tab between chips and press Space to toggle. Building chips on checkboxes gives you that behavior and announcements like “Hot tub, checkbox, checked” for free.',
  ],
  when: [
    'Stacking filters like “Free parking” and “Pet-friendly” on hotel, restaurant or job listings',
    'Quickly switching sizes or colors on an e-commerce product grid',
    'Letting readers pick a few topics to narrow an article feed',
    'Offering popular filters under a search box so one tap narrows the results',
  ],
  avoid: [
    'Single-choice selections — use a segmented control or radio buttons; chips imply you can pick several',
    'Read-only categories — use tags without borders or pressed states, or people will try to tap them',
    'More than about 20 options — they will not fit in a row; use a grouped checkbox list with headings',
  ],
  prompt:
    'Build the hotel list filters as filter chips. Use a fieldset with a legend (“Filters”) containing checkboxes wrapped in labels: Hot tub, Breakfast, Pet-friendly, Free parking, Near downtown. Hide the checkboxes visually and style each label as a 36px-tall pill with a {{r:t}} corner radius, extending the hit area to at least 44px. Selected chips get a {{color:t}} border and tinted background, and show the selected state with: {{mark:t}}. Filter the list the moment a chip changes, keeping only stays that match every selected filter, announce the count in an aria-live region, and show a “Clear all” button when anything is selected. If nothing matches, suggest removing a filter.',
  howTo: [
    'Underneath, filter chips are a group of checkboxes. Wrap labeled checkboxes in a fieldset with a legend. Multi-select, toggling with Space and on/off announcements all come built in, and the form still submits if JavaScript fails.',
    'The pill look is CSS. Make each checkbox invisible (opacity: 0) and stretch it over its label, then style the selected chip with label:has(:checked). Add a check mark to the selected state so it does not depend on color alone. Filtering is just a change listener that re-renders the list.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<fieldset class="chips">
  <legend>Filters</legend>
  <label class="chip-item"><input type="checkbox" name="feature" value="hottub"><svg class="chip-check" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>Hot tub</label>
  <label class="chip-item"><input type="checkbox" name="feature" value="breakfast"><svg class="chip-check" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>Breakfast</label>
  <label class="chip-item"><input type="checkbox" name="feature" value="pets"><svg class="chip-check" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>Pet-friendly</label>
</fieldset>
<p class="chips-count" aria-live="polite">5 of 5 stays</p>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.chips { display: flex; flex-wrap: wrap; gap: 8px; border: 0; padding: 0; }
.chips legend { width: 100%; margin-bottom: 4px; font-size: 12px; }
.chip-item {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 36px;
  padding: 0 14px;
  border: 1px solid #c9c7c0;
  border-radius: {{r}};
  background: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease-out, border-color 0.15s ease-out;
}
/* 36px to look at, 44px to tap */
.chip-item::before { content: ""; position: absolute; inset: -4px 0; }
/* Hide the real checkbox visually */
.chip-item input { position: absolute; inset: 0; margin: 0; opacity: 0; cursor: pointer; }
.chip-check { display: none; width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 2.6; }
/* Selected: color plus a check mark (never color alone) */
.chip-item:has(:checked) {
  border-color: {{color}};
  background: color-mix(in srgb, {{color}} 12%, #fff);
  color: color-mix(in srgb, {{color}} 75%, #000);
}
.chip-item:has(:checked) .chip-check { display: block; }
.chip-item:has(:focus-visible) { outline: 3px solid #4f73d9; outline-offset: 2px; }

@media (prefers-reduced-motion: reduce) {
  .chip-item { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const boxes = [...document.querySelectorAll('.chips input')];
const cards = [...document.querySelectorAll('.hotel-card')]; // data-f="hottub breakfast"
const count = document.querySelector('.chips-count');

const apply = () => {
  const on = boxes.filter((b) => b.checked).map((b) => b.value);
  let hit = 0;
  cards.forEach((card) => {
    const f = card.dataset.f.split(' ');
    card.hidden = !on.every((v) => f.includes(v)); // must match every filter
    if (!card.hidden) hit++;
  });
  count.textContent = hit
    ? \`\${hit} of \${cards.length} stays\`
    : 'No stays match. Try removing a filter.';
};
// Filter as soon as a chip changes
boxes.forEach((b) => b.addEventListener('change', apply));`,
    },
  ],
  tune: [
    { key: 'r', label: 'Corner radius', min: 0, max: 18, step: 2, value: 18, unit: 'px' },
    { key: 'color', type: 'color', label: 'Selected color', value: '#4f73d9' },
    {
      key: 'mark',
      type: 'select',
      label: 'Selected state',
      value: 'check',
      options: [
        { value: 'check', label: 'check mark and color' },
        { value: 'color', label: 'color only' },
      ],
    },
  ],
  cautions: [
    'Do not signal selection with color alone. Switch “Selected state” to color only and you will see how easy a light tint is to miss. A check mark fixes it.',
    'When filters return nothing, do not stop at a gray “No results”. Suggest removing a filter and keep “Clear all” within reach.',
    'Chips can look small (32–36px), but extend the tap area to at least 44px and keep 8px or more between them.',
    'If a single row overflows on phones, wrap the chips or let the row scroll sideways. For a scrolling row, let the last chip peek out so people know there is more.',
  ],
  similar: [
    { slug: 'badge', diff: 'A badge flags a status or count — “New”, “2 left”, “3” — and cannot be pressed. Chips are controls you press to change what is shown.' },
    { slug: 'segmented-control', diff: 'A segmented control always has exactly one option selected. Filter chips allow several at once.' },
    { slug: 'toggle-switch', diff: 'A toggle switch changes a saved setting. Toggling a chip only filters the list you are looking at right now.' },
  ],
  faq: [
    {
      q: 'What is the difference between chips and tags?',
      a: 'Chips are controls: you press them to select or deselect something. Tags are labels that describe content. They can look alike, so give pressable chips a border and pressed feedback, and keep tags flat. A blog tag that links to a category page is, technically, a link.',
    },
    {
      q: 'Should filter chips apply instantly, or do I need an Apply button?',
      a: 'If results come back within about a second, apply instantly — it feels great. If results are slow, people combine many filters, or the filters live in a bottom sheet on mobile, let them choose first and then tap “Show 24 stays”.',
    },
    {
      q: 'What are input chips?',
      a: 'Input chips turn typed entries into removable pills, like recipients in an email “To” field, each with an × to remove it. They are for showing what was entered rather than choosing from a fixed set, which is what filter chips do.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
