import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'toggle-switch',
  no: 16,
  category: 'input',
  name: 'Toggle switch',
  en: 'トグルスイッチ',
  aka: ['Switch', 'Toggle', 'On/off switch', 'Toggle button', 'iOS-style switch'],
  mode: 'script',
  title: 'Toggle Switch in CSS: Accessible role="switch" vs Checkbox',
  description:
    'Build an accessible toggle switch from a checkbox with role="switch" and pure CSS, and learn when a switch beats a checkbox: instant effect vs. a Submit button.',
  oneLine: 'Flip it and the setting changes immediately — no Save button.',
  what: [
    'A toggle switch works like a light switch: each press flips it between on and off. In the Notifications demo, the knob slides across, the track changes color and a note says what changed. There is no Save button — flipping the switch is the save.',
    'That is the core convention: a switch takes effect immediately. A checkbox does not. Ticking a checkbox only records a choice, and nothing happens until the form is submitted (try the Compare section under the switches). So use checkboxes inside forms for things like “Email me a copy” or “I agree”, and switches on settings screens where each change should apply on its own.',
    'Keyboard users Tab to the switch and press Space to flip it. Screen readers need to hear the role (“switch”) and the state (“on” or “off”). In HTML, adding role="switch" to an <input type="checkbox"> gives you both. Always pair the switch with a visible label that says what it controls.',
  ],
  when: [
    'Settings screens where options like notifications, autoplay or dark mode apply one at a time, instantly',
    'Rows in an admin list with a “Published” or “In stock” switch that saves as soon as it is flipped',
    'Live status toggles, such as a store marking itself “Accepting orders”',
  ],
  avoid: [
    'Form fields that only take effect after Submit — use a checkbox, or people will assume the change already happened',
    'Consent checkboxes like “I agree to the terms” — that is a confirmation, not something you switch on',
    'More than two states — use a segmented control or radio buttons instead',
    'Irreversible actions such as deleting an account — use a button with a confirmation step',
  ],
  prompt:
    'Build the notification settings as toggle switches. Use <input type="checkbox" role="switch"> wrapped in a <label>, with the setting name always visible. Style it with CSS only: the track is {{w:t}} wide and 0.6 times as tall, the knob slides across over {{dur:t}} with ease-out, and the “on” color is {{on:t}}. Make the whole row clickable with a hit area at least 44px tall. Save each change the moment the switch flips — no Save button — and announce the result in a role="status" element, e.g. “Deals and offers turned off”. If saving fails, flip the switch back and say so. It must toggle with the Space key and show a visible focus ring. For prefers-reduced-motion, switch without animation.',
  howTo: [
    'Start from <input type="checkbox"> with role="switch". It already handles clicks, the Space key, label association and form submission, and role="switch" makes screen readers announce “switch, on”. A div-based switch has to reimplement all of that by hand.',
    'Do the look in CSS. appearance: none removes the native box, the input itself becomes the rounded track, and ::before draws the knob. On :checked, change the track color and slide the knob with transform. JavaScript is only needed to save the change.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<label class="switch-row">
  <span>New messages</span>
  <input type="checkbox" role="switch" class="switch" name="notify-message" checked>
</label>
<label class="switch-row">
  <span>Deals and offers</span>
  <input type="checkbox" role="switch" class="switch" name="notify-deals">
</label>
<p class="switch-status" role="status"></p>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.switch-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 56px; /* the whole row is clickable */
  cursor: pointer;
}
.switch {
  --w: {{w}};
  --h: calc(var(--w) * 0.6);
  position: relative;
  width: var(--w);
  height: var(--h);
  margin: 0;
  border-radius: 999px;
  background: #c9c7c0;
  appearance: none; /* remove the native checkbox */
  cursor: pointer;
  transition: background-color {{dur}} ease-out;
}
/* The knob */
.switch::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: calc(var(--h) - 6px);
  height: calc(var(--h) - 6px);
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.3);
  transition: transform {{dur}} ease-out;
}
.switch:checked { background: {{on}}; }
.switch:checked::before { transform: translateX(calc(var(--w) - var(--h))); }
.switch:focus-visible { outline: 3px solid #4f73d9; outline-offset: 2px; }

@media (prefers-reduced-motion: reduce) {
  .switch, .switch::before { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const status = document.querySelector('.switch-status');

document.querySelectorAll('.switch').forEach((sw) => {
  sw.addEventListener('change', async () => {
    const label = sw.closest('label').textContent.trim();
    try {
      // Save the moment it flips — no Save button
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [sw.name]: sw.checked }),
      });
      if (!res.ok) throw new Error(res.statusText);
      status.textContent = \`\${label} turned \${sw.checked ? 'on' : 'off'}\`;
    } catch {
      sw.checked = !sw.checked; // roll back and tell the user
      status.textContent = 'Could not save. Check your connection and try again.';
    }
  });
});`,
    },
  ],
  tune: [
    { key: 'w', label: 'Switch width', min: 32, max: 64, step: 2, value: 44, unit: 'px' },
    { key: 'dur', label: 'Toggle speed', min: 0.05, max: 0.5, step: 0.05, value: 0.2, unit: 's' },
    { key: 'on', type: 'color', label: 'On color', value: '#2e9d5e' },
  ],
  cautions: [
    'Do not rely on color alone. Knob on the right means “on” everywhere, so never flip that convention, and keep a clear lightness difference between the on color and the gray track for people with color vision deficiencies.',
    'Make the label and the switch one big target. The track can look small, but the clickable row should be at least 44px tall.',
    'If saving fails, move the switch back and explain why. A switch that looks on but was never saved is the worst outcome.',
    'Without role="switch", screen readers announce “checkbox, checked”. It still works, but add the role if you want it announced as a switch.',
  ],
  similar: [
    { slug: 'segmented-control', diff: 'A segmented control picks one of two to five side-by-side options, like Week, Month and Year. Use it when the choices are not simply on and off.' },
    { slug: 'chips', diff: 'Filter chips switch individual filters on and off to narrow a list. They filter content rather than change a saved setting.' },
    { slug: 'tab-indicator', book: 'ugoki', diff: 'Tabs swap which panel of content is shown. A switch changes a setting and leaves the page content where it is.' },
  ],
  faq: [
    {
      q: 'Toggle switch or checkbox — which should I use?',
      a: 'Ask whether the change applies immediately. If flipping it changes the setting right away, use a switch. If it is part of a form that the user submits later, use a checkbox. A quick test: if there is a Save or Submit button nearby, it should be a checkbox.',
    },
    {
      q: 'Is there a native HTML switch element?',
      a: 'Safari renders <input type="checkbox" switch> as a native switch, but other browsers still show a plain checkbox. For consistent results across browsers, style a checkbox with role="switch" as shown here.',
    },
    {
      q: 'Should I add “On” and “Off” text next to the switch?',
      a: 'Usually the setting name matters more. But if your colors are hard to tell apart, or mixing up the states would be costly (Published vs. Draft, for example), adding the state as text removes any doubt.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
