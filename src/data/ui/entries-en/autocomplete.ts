import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'autocomplete',
  no: 20,
  category: 'input',
  name: 'Autocomplete (combobox)',
  en: 'オートコンプリート',
  aka: ['Autocomplete input', 'Combobox', 'Typeahead', 'Autosuggest', 'Search suggestions', 'datalist'],
  mode: 'script',
  title: 'Accessible Autocomplete Input: Combobox Pattern in Plain JS',
  description:
    'Build an accessible autocomplete (combobox) in plain JS: listbox, aria-activedescendant, arrow keys, Enter and Esc. Plus when datalist or select will do.',
  oneLine: 'Type in a field and matching suggestions appear right below it.',
  what: [
    'An autocomplete is a text field that shows matching suggestions in a list right below it as you type. In the demo, typing “B” in Destination lists Boston, Boise, Boulder and more; “Bo” narrows it to five. The letters you typed are bold, so it is clear why each suggestion matched.',
    'The usual comparison is a select (dropdown). A select shows a fixed list of options to choose from, which works fine up to a few dozen, like US states. When there are hundreds or thousands of options — airports, addresses, product names — or free text is allowed, use an autocomplete. Typing a few letters beats scrolling a long list.',
    'The conventions live on the keyboard: Down arrow enters the list, Up and Down move, Enter picks, Esc closes the list (a second Esc clears the field). Focus stays in the text field the whole time; the highlighted option is exposed to screen readers through aria-activedescendant. The field itself gets role="combobox" and aria-expanded. For something quick, a native <datalist> gives you basic suggestions with no JavaScript.',
  ],
  when: [
    'Destination, airport or station search on travel and transit sites',
    'Address forms that suggest cities or streets as you type',
    'Store search boxes that suggest popular queries and product names',
    'Internal tools where you pick one person out of hundreds of colleagues',
  ],
  avoid: [
    'Ten options or fewer — a select or radio buttons let people see everything at once',
    'Letting people submit any text when only listed values are valid — require a pick from the list',
    'Firing a server request on every keystroke, so suggestions lag or arrive out of order — debounce it',
  ],
  prompt:
    'Build the “Destination” field on a travel site as an accessible autocomplete (combobox). Keep a visible label and use placeholder text only as a hint, like “e.g. Boston, Denver”. The input needs role="combobox", aria-autocomplete="list", aria-expanded and aria-controls; render suggestions below it as ul[role="listbox"] with li[role="option"]. Debounce input by {{delay:t}}, show at most {{rows:t}} suggestions, and add “N more” when there are extra. Match from the start of the name and bold the typed part. Down arrow enters the list, Up/Down move, Enter selects, Esc closes, and the highlighted option is exposed with aria-activedescendant while focus stays in the input. Announce the number of suggestions in a role="status" element, and say so when nothing matches.',
  howTo: [
    'First ask whether <datalist> is enough. Point an <input list="..."> at a <datalist> of options and the browser handles suggestions for you. You cannot style it, though, and it behaves differently across browsers — so when you need control, build it yourself as in the demo.',
    'A custom autocomplete is a pair: a text input with role="combobox" and a list with role="listbox". Rebuild the list on input (debounced) and handle arrow keys, Enter and Esc on keydown. Never move focus into the list; instead, put the highlighted option’s id in aria-activedescendant. Call preventDefault() on pointerdown in the list so clicking an option does not blur the input first.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<label for="dest">Destination</label>
<div class="combo">
  <input id="dest" type="text" role="combobox" autocomplete="off"
    aria-autocomplete="list" aria-expanded="false" aria-controls="dest-list"
    placeholder="e.g. Boston, Denver">
  <ul id="dest-list" role="listbox" hidden></ul>
</div>
<p class="combo-status" role="status"></p>

<!-- Quick and simple: datalist works with no JavaScript -->
<!-- <input list="cities"><datalist id="cities"><option value="Boston"></datalist> -->`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.combo { position: relative; }
.combo input { width: 100%; height: 44px; padding: 0 12px; border: 1.5px solid #c9c7c0; border-radius: 10px; }
.combo input:focus { border-color: #4f73d9; outline: 3px solid rgb(79 115 217 / 0.2); }
.combo [role="listbox"] {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  z-index: 10;
  margin: 0;
  padding: 4px;
  list-style: none;
  background: #fff;
  border: 1px solid #e4e2dc;
  border-radius: 10px;
  box-shadow: 0 12px 24px -12px rgb(20 24 40 / 0.35);
}
.combo [role="option"] { min-height: 44px; padding: 10px 12px; border-radius: 6px; cursor: pointer; }
/* Highlighted by arrow keys or the mouse */
.combo [role="option"][aria-selected="true"] { background: #e8eefc; }`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const CITIES = ['Boston, MA', 'Boise, ID', 'Boulder, CO' /* … */];
const input = document.querySelector('#dest');
const list = document.querySelector('#dest-list');
const status = document.querySelector('.combo-status');
const MAX = {{rows:n}};
let hits = [];
let active = -1;
let timer;

const close = () => {
  list.hidden = true;
  active = -1;
  input.setAttribute('aria-expanded', 'false');
  input.removeAttribute('aria-activedescendant');
};
const setActive = (i) => {
  active = i;
  [...list.children].forEach((li, k) => li.setAttribute('aria-selected', k === i));
  input.setAttribute('aria-activedescendant', \`opt-\${i}\`);
};
const render = () => {
  // The list is rebuilt, so clear the old selection
  active = -1;
  input.removeAttribute('aria-activedescendant');
  const q = input.value.trim().toLowerCase();
  hits = q ? CITIES.filter((c) => c.toLowerCase().startsWith(q)) : [];
  active = -1; // a new list has no highlighted option yet
  input.removeAttribute('aria-activedescendant');
  if (!hits.length) {
    close();
    status.textContent = q ? \`No destinations match “\${input.value}”\` : '';
    return;
  }
  list.innerHTML = hits.slice(0, MAX)
    .map((c, i) => \`<li role="option" id="opt-\${i}" aria-selected="false">\${c}</li>\`)
    .join('');
  list.hidden = false;
  input.setAttribute('aria-expanded', 'true');
  status.textContent = \`\${hits.length} suggestions available\`;
};
const pick = (i) => {
  input.value = hits[i];
  close();
};

// Debounce: wait until typing pauses
input.addEventListener('input', () => {
  clearTimeout(timer);
  timer = setTimeout(render, {{delay:n}});
});
input.addEventListener('keydown', (e) => {
  const n = list.children.length;
  if (e.key === 'ArrowDown') { e.preventDefault(); list.hidden ? render() : setActive((active + 1) % n); }
  if (e.key === 'ArrowUp' && !list.hidden) { e.preventDefault(); setActive(active <= 0 ? n - 1 : active - 1); }
  if (e.key === 'Enter' && active >= 0) { e.preventDefault(); pick(active); }
  if (e.key === 'Escape') list.hidden ? (input.value = '') : close();
});
input.addEventListener('blur', () => setTimeout(close, 120));
// Keep focus in the input when an option is clicked
list.addEventListener('pointerdown', (e) => e.preventDefault());
list.addEventListener('click', (e) => {
  const li = e.target.closest('[role="option"]');
  if (li) pick([...list.children].indexOf(li));
});`,
    },
  ],
  tune: [
    { key: 'delay', label: 'Debounce delay', min: 0, max: 600, step: 50, value: 150, unit: 'ms' },
    { key: 'rows', label: 'Max suggestions', min: 3, max: 8, step: 1, value: 5, unit: '' },
  ],
  cautions: [
    'Do not use the placeholder as the label. Keep “Destination” visible above the field and use the placeholder only for a format hint.',
    'If suggestions come from a server, a slow old response can overwrite a newer one. Debounce requests and only render the response to the latest query (an AbortController helps).',
    'On phones the keyboard covers the bottom half of the screen. Show suggestions directly under the field and keep the list to about five so it stays visible.',
    'Mobile keyboards and IMEs fire input events before a word is committed, and autocorrect can change what was typed. Match case-insensitively and test on real devices.',
  ],
  similar: [
    { slug: 'dropdown-menu', diff: 'A dropdown menu opens a list of actions from a button. An autocomplete is a text field for choosing a value by typing.' },
    { slug: 'chips', diff: 'Filter chips select from fixed options by tapping. Autocomplete is often paired with input chips to build a “tags” field.' },
    { slug: 'date-picker', diff: 'A date picker also opens something below the field — a calendar — but it is for dates only, and you do not type to filter it.' },
  ],
  faq: [
    {
      q: 'Autocomplete or select — which should I use?',
      a: 'It depends on how many options there are and whether free text is allowed. Up to a couple dozen options you want people to scan: a select. Hundreds of options, people who know roughly what they want, or free text allowed: an autocomplete.',
    },
    {
      q: 'Is <datalist> good enough?',
      a: 'For simple suggestions, yes. But you cannot style it or control the ordering, it looks different in each browser, and you cannot announce how many suggestions there are. Build a custom combobox when those details matter.',
    },
    {
      q: 'What does aria-activedescendant do?',
      a: 'It tells screen readers which option is highlighted while keyboard focus stays in the input. If you moved focus to the option itself, people could no longer keep typing. Put the highlighted option’s id in the input’s aria-activedescendant.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
