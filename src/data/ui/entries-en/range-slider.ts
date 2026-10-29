import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'range-slider',
  no: 18,
  category: 'input',
  name: 'Range slider',
  en: 'スライダー',
  aka: ['Slider', 'Input range', 'Price slider', 'Seek bar'],
  mode: 'script',
  title: 'Range Slider CSS: Style input type="range" Across Browsers',
  description:
    'Style input type="range" with CSS in Chrome, Safari and Firefox: custom thumb, track and fill. Plus when a slider beats a number field, and aria-valuetext.',
  oneLine: 'Drag a thumb along a track to pick a value within a set range.',
  what: [
    'A range slider lets people pick a value between a minimum and a maximum by dragging a thumb along a track. In the demo, moving the “Max price” thumb updates the price label, the “3 of 6 cars” count and the listing below — while you are still dragging.',
    'Sliders are great for “roughly this much”. When someone needs an exact number like $12,345, a number field is faster and more precise. So use sliders for things you adjust while watching the result: a price ceiling in a search filter, volume, brightness, the strength of a photo effect. They usually apply instantly; if the work behind them is expensive, apply on release (the change event) instead.',
    'Conventions: always show the current value as text next to or above the slider. Keyboard users move one step at a time with the arrow keys and jump to either end with Home and End. The native <input type="range"> gives you all of this, along with the slider role and value for screen readers. Use aria-valuetext so the value is read as “$15,000” instead of “15000”.',
  ],
  when: [
    'Price or size filters on travel, real-estate or used-car search pages',
    'Volume, brightness or text size, where people tune by eye',
    'Photo editing controls like blur or exposure strength',
    'Loan or savings calculators where people compare amounts and terms',
  ],
  avoid: [
    'Exact values like a birth year, ZIP code or a precise amount — use a text or number field',
    'Huge ranges with tiny steps, such as $0 to $1,000,000 in $1 steps — nobody can hit a value precisely',
    'Only three to five possible values — a segmented control or radio buttons are clearer',
  ],
  prompt:
    'Add a “Max price” range slider to the used-car search. Use <input type="range" min="5000" max="40000" step="{{step:n}}"> with a visible <label>, and show the current value in an <output> formatted like “$15,000”. Style it with CSS so it looks the same in Chrome, Safari and Firefox: a {{track:t}} track, a round {{thumb:t}} thumb, and the track filled with color up to the thumb. Keep the clickable height at least 44px. Update the result count on every input event while dragging, and set aria-valuetext to the formatted price for screen readers. Arrow keys should move it ${{step:t}} at a time, with a visible focus ring.',
  howTo: [
    'Start with <input type="range">. Set min, max and step and you get dragging, tapping, arrow keys, Home and End, and screen-reader support out of the box. Show the value as text and keep a visible label.',
    'Restyle it with CSS. appearance: none removes the default look. Style the track with ::-webkit-slider-runnable-track and ::-moz-range-track, and the thumb with ::-webkit-slider-thumb and ::-moz-range-thumb — same rules, two prefixes. For the filled part, set a custom property (--p, the value as a fraction) from JavaScript and paint the track with a gradient.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<label for="price">Max price</label>
<output for="price" class="price-value">$15,000</output>
<input type="range" id="price" class="slider"
  min="5000" max="40000" step="{{step:n}}" value="15000"
  aria-valuetext="$15,000">
<p class="price-count" aria-live="polite">3 of 6 cars</p>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.slider {
  --p: 0.29; /* selected fraction (0–1), set from JavaScript */
  --thumb: {{thumb}};
  width: 100%;
  height: 44px; /* comfortable hit area */
  margin: 0;
  appearance: none;
  background: transparent;
  cursor: pointer;
}
/* Track, filled up to the thumb */
.slider::-webkit-slider-runnable-track {
  height: {{track}};
  border-radius: 999px;
  background: linear-gradient(to right, #f06a35 calc(var(--p) * 100%), #dedcd5 0);
}
.slider::-moz-range-track {
  height: {{track}};
  border-radius: 999px;
  background: linear-gradient(to right, #f06a35 calc(var(--p) * 100%), #dedcd5 0);
}
/* Thumb */
.slider::-webkit-slider-thumb {
  appearance: none;
  width: var(--thumb);
  height: var(--thumb);
  margin-top: calc(({{track}} - var(--thumb)) / 2); /* center on the track */
  border: 2px solid #f06a35;
  border-radius: 50%;
  background: #fff;
}
.slider::-moz-range-thumb {
  width: var(--thumb);
  height: var(--thumb);
  border: 2px solid #f06a35;
  border-radius: 50%;
  background: #fff;
}
.slider:focus-visible { outline: 3px solid #4f73d9; outline-offset: 4px; }`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const slider = document.querySelector('#price');
const out = document.querySelector('.price-value');
const usd = (v) => '$' + Number(v).toLocaleString('en-US');
// Filter the list (replace the body with your own code)
const updateResults = (max) => {
  console.log('Filter: up to $' + max);
};

const update = () => {
  const p = (slider.value - slider.min) / (slider.max - slider.min);
  slider.style.setProperty('--p', p);
  out.textContent = usd(slider.value);
  slider.setAttribute('aria-valuetext', usd(slider.value)); // for screen readers
  // Update results while dragging (use 'change' for expensive work)
  updateResults(Number(slider.value));
};
slider.addEventListener('input', update);
update();`,
    },
  ],
  tune: [
    { key: 'thumb', label: 'Thumb size', min: 16, max: 36, step: 2, value: 24, unit: 'px' },
    { key: 'track', label: 'Track thickness', min: 2, max: 12, step: 1, value: 6, unit: 'px' },
    { key: 'step', label: 'Step ($)', min: 500, max: 5000, step: 500, value: 1000, unit: '' },
  ],
  cautions: [
    'However small the thumb looks, keep the hit area at least 44px tall. Making the input itself 44px tall and drawing the track inside it is the easy way.',
    'Always show the value as text. A thumb position alone does not tell anyone the actual price. Labeling both ends with the min and max helps people read the scale.',
    'On phones, people trying to scroll vertically can nudge a horizontal slider by accident. Leave breathing room above and below, and do not run it edge to edge.',
    'The input event fires continuously while dragging. For server requests, listen to change (on release) or debounce the updates.',
    'Screen readers read the raw number, so use aria-valuetext for prices or named levels like Low, Medium and High.',
  ],
  similar: [
    { slug: 'quantity-stepper', diff: 'A quantity stepper changes a number one at a time with − and + buttons. For small ranges where the exact count matters, like 1 to 10 items, a stepper is better.' },
    { slug: 'segmented-control', diff: 'A segmented control offers two to five fixed choices. If there are only a few options, it is faster to scan than a slider.' },
    { slug: 'before-after', book: 'ugoki', diff: 'A before/after slider drags a divider between two images. It is a way to compare visuals, not a way to pick a value.' },
  ],
  faq: [
    {
      q: 'How do I make a dual-thumb range slider (min and max)?',
      a: 'The native range input has one thumb. A common approach is to stack two range inputs and use JavaScript to keep them from crossing. It gets fiddly on phones, though, so two small fields or selects for “Min” and “Max” are often easier to use.',
    },
    {
      q: 'Is there a quick way to just change the slider color?',
      a: 'Yes: accent-color: #f06a35; recolors the thumb and fill in one line. Rebuild it from appearance: none, as shown here, only when you need a different size or shape.',
    },
    {
      q: 'People say the slider is hard to use on mobile. What helps?',
      a: 'Make the thumb and hit area bigger (thumb 24px or more, hit area 44px or more) and use coarser steps. If precision matters, put a number field next to the slider so people can type the value instead.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
