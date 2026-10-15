import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'date-picker',
  no: 21,
  category: 'input',
  name: 'Date picker',
  en: 'デートピッカー',
  aka: ['Datepicker', 'Calendar picker', 'Date input', 'input type="date"', 'Booking calendar'],
  mode: 'script',
  title: 'Date Picker: Native input type="date" vs a Custom Calendar',
  description:
    'When native input type="date" is enough and when to build a custom date picker for availability, prices or ranges. Keyboard conventions and accessible names.',
  oneLine: 'Tap the field, a calendar opens, tap a day to pick the date.',
  what: [
    'A date picker opens a calendar under a date field so people can pick a day instead of typing it. In the demo, tapping Check-in opens November with a nightly price under each day; sold-out days are struck through and cannot be selected. Picking a day closes the calendar and shows “Tue, Nov 3, 2026 · $160 per night”.',
    'Start by asking whether <input type="date"> is enough. For a single date — a start date, a deadline, an appointment — the browser’s own calendar is fine. On phones it becomes the native iOS or Android picker people already know, with keyboard and screen-reader support built in. Build your own only when you need what the native one cannot show: availability and prices per day, holidays, or a check-in/check-out range on one calendar.',
    'If you do build one, follow the conventions. A button-like field opens it and focus moves to a day inside. Left and right arrows move a day, up and down a week, Page Up and Page Down a month, Home and End to the start or end of the week. Enter selects; Esc closes and returns focus to the field. Give each day a full accessible name such as “Tuesday, November 3, $160”, and disable unavailable days while still announcing why (“sold out”). Picking a date is part of a form, so pair it with a clear submit button like “Check availability”.',
  ],
  when: [
    'Hotel, restaurant or rental bookings where people pick a date while seeing availability and prices',
    'Appointment booking (salons, clinics) where only open days should be selectable',
    'Delivery date selection limited to a window, such as 3 to 14 days from today',
    'Any single-date field like a start date or deadline — where <input type="date"> is enough',
  ],
  avoid: [
    'Date of birth — paging back decades in a calendar is painful; use separate month, day and year fields',
    'Calendars without weekday headers when people think in weekdays (“next Friday”)',
    'Rebuilding the native date input just for looks — custom pickers are where keyboard and screen-reader bugs live',
  ],
  prompt:
    'Build a date picker for the check-in date on a hotel booking form. Make the field a button that opens a calendar popup (role="dialog") directly below it. Render the month as a table with role="grid", start the week on {{week:t}}, make each day cell {{cell:t}} square, show the nightly price under each date, and strike through and disable sold-out and past dates. Fill the selected day with {{color:t}}. On open, move focus to the selected day; support arrow keys (day/week), Page Up/Page Down (month) and Home/End (week start/end); Enter selects and Esc closes and returns focus to the field. Give every day an aria-label with weekday and price, like “Tuesday, November 3, $160”. For plain single-date fields elsewhere, use <input type="date"> instead of a custom picker.',
  howTo: [
    'For a single date, <input type="date"> is the answer. min and max limit the range, phones show their native pickers, and showPicker() lets your own button open it.',
    'What the native input cannot do is block specific dates inside the range, like sold-out nights. The code below checks the chosen date in JavaScript and uses setCustomValidity() to say “That date is sold out”. If you need prices or availability drawn on the calendar itself, build the calendar, as in the demo.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<form class="booking">
  <label for="checkin">Check-in</label>
  <input type="date" id="checkin" name="checkin" class="date-input"
    min="2026-10-15" max="2026-12-31" required
    aria-describedby="checkin-note">
  <p id="checkin-note" class="date-note"></p>
  <button type="submit">Check availability</button>
</form>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.date-input {
  min-height: 44px;
  padding: 0 12px;
  border: 1.5px solid #c9c7c0;
  border-radius: 10px;
  font: inherit;
  font-size: 16px; /* 16px+ stops iOS Safari from zooming in */
}
.date-input:focus {
  border-color: {{color}};
  outline: 3px solid color-mix(in srgb, {{color}} 25%, transparent);
}
.date-input:user-invalid { border-color: #c0392b; }
.date-note { min-height: 20px; font-size: 13px; }`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const input = document.querySelector('#checkin');
const note = document.querySelector('#checkin-note');
const SOLD_OUT = ['2026-11-07', '2026-11-14', '2026-11-21'];

// No dates before today
input.min = new Date().toLocaleDateString('sv-SE'); // YYYY-MM-DD

input.addEventListener('change', () => {
  if (!input.value) return;
  const d = new Date(input.value + 'T00:00');
  if (SOLD_OUT.includes(input.value)) {
    // Block sold-out nights; the browser reports it on submit
    input.setCustomValidity('That date is sold out. Please choose another.');
    note.textContent = '';
  } else {
    input.setCustomValidity('');
    // Echo the weekday so people can double-check
    note.textContent = 'Check-in on ' + d.toLocaleDateString('en-US', {
      weekday: 'long', month: 'short', day: 'numeric',
    });
  }
  input.reportValidity();
});`,
    },
  ],
  tune: [
    { key: 'cell', label: 'Day cell size', min: 32, max: 52, step: 2, value: 44, unit: 'px' },
    { key: 'color', type: 'color', label: 'Selected day color', value: '#f06a35' },
    {
      key: 'week',
      type: 'select',
      label: 'Week starts on',
      value: 'sun',
      options: [
        { value: 'sun', label: 'Sunday' },
        { value: 'mon', label: 'Monday' },
      ],
    },
  ],
  cautions: [
    'Show the chosen date in an unambiguous format next to the field. 11/03 means November 3 in the US and March 11 in much of the world; “Tue, Nov 3” leaves no doubt.',
    'Aim for 44px day cells. Seven columns on a phone get tight, so check how hard tapping becomes when you shrink the cells with the controls above.',
    'Week start varies: US calendars usually start on Sunday, while Europe and ISO 8601 start on Monday. Match your audience.',
    'Do not mark unavailable days with a lighter color alone — strike them through or label them, and announce “sold out” to screen readers. A day that silently ignores taps looks broken.',
    'iOS Safari zooms in on inputs with text smaller than 16px. Keep date fields at 16px or larger.',
  ],
  similar: [
    { slug: 'autocomplete', diff: 'An autocomplete also opens a list under a field, but you type to filter suggestions. A date picker is for dates only, and you pick from a calendar.' },
    { slug: 'popover', diff: 'A popover is any small panel anchored to a button. A date picker’s calendar is a popover specialized for picking dates.' },
    { slug: 'modal', diff: 'On phones, date pickers often open full-screen in a modal or a bottom sheet instead of under the field.' },
  ],
  faq: [
    {
      q: 'Can I style the native input type="date" calendar?',
      a: 'You can style the field — border, padding, font — but the calendar popup is drawn by the browser and the OS, and CSS cannot restyle it. For full control over the calendar, build your own, as in the demo.',
    },
    {
      q: 'How do I let people pick a date range, like check-in and check-out?',
      a: 'The simplest way is two date inputs, setting the second one’s min to the day after the first. A single calendar that highlights the whole range reads better but must be custom-built, with more keyboard handling to get right.',
    },
    {
      q: 'Where should focus go when the calendar opens?',
      a: 'On the selected day, or on today (or the first available day) if nothing is selected yet. If focus stays outside the calendar, keyboard users cannot start picking. When it closes, return focus to the button that opened it.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
