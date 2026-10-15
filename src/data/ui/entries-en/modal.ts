import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'modal',
  no: 1,
  category: 'overlay',
  name: 'Modal dialog',
  en: 'モーダル',
  aka: ['Modal', 'Modal window', 'Dialog', 'Dialog box', 'Popup'],
  mode: 'script',
  title: 'Modal vs Dialog vs Popup: Build an Accessible Modal with <dialog>',
  description:
    'What a modal dialog is, how it differs from a popup or a drawer, and how to build one with HTML <dialog>: Esc, backdrop click, focus return and scroll lock.',
  oneLine: 'A window opens in the middle of the screen and blocks the page until you close it.',
  what: [
    'A modal lays a small window over the current page and dims everything behind it, saying “deal with this first”. In the demo, “Review booking” opens a confirmation, and nothing behind it can be clicked until you choose Book now or Cancel.',
    'The point of a modal is focus: one decision, without leaving the page. The cost is that it interrupts whatever the person was doing, so save it for things that genuinely need an answer right now.',
  ],
  when: [
    'Confirming an action that is hard to undo — booking, paying, deleting',
    'Short tasks that should not cost people their place on the page, like signing in or renaming something',
    'A quick look at one item’s details without losing your scroll position in a list',
  ],
  avoid: [
    'Unprompted newsletter or promo popups on page load — people dismiss them and resent them',
    'Long text or forms with many fields; if the modal needs its own scrollbar, make it a page',
    'Stacking a modal on top of another modal — nobody knows which one to close',
  ],
  prompt:
    'Build the booking confirmation as a modal dialog using the native HTML <dialog> element and showModal() — do not hand-roll it with divs. Center it on screen with a backdrop (::backdrop) at {{dim:t}} opacity. On open, animate it over {{dur:t}} from scale {{scale:t}} and transparent to full size and opaque, with ease-out. Provide four ways to close it: an × button, a Cancel button, the Esc key, and clicking the backdrop. When it closes, return keyboard focus to the button that opened it. Lock page scrolling while it is open, and connect the dialog to its heading with aria-labelledby. For people with prefers-reduced-motion, show and hide it without animation.',
  howTo: [
    'Use the HTML <dialog> element. Calling showModal() gives you every modal convention in one go: it centers on screen, makes the rest of the page inert, closes on Esc, restores focus when closed and comes with a ::backdrop pseudo-element. Rebuilding all of that with a div is a lot of work, and it is where bugs creep in.',
    'Add the motion with CSS. Describe the “just opened” state in @starting-style (transparent, slightly smaller) and the dialog eases in every time it opens. Clicking the backdrop to close is the one behavior <dialog> does not include, so add it with a few lines of JavaScript. The demo uses a div so it can stay inside its frame, but it works the same way.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<button type="button" class="open-btn">Review booking</button>

<dialog class="modal" aria-labelledby="modal-title">
  <form method="dialog" class="modal-body">
    <button class="modal-x" value="cancel" aria-label="Close">×</button>
    <h2 id="modal-title">Confirm this booking?</h2>
    <p>Nov 3, 1 night · 2 adults · Total $220</p>
    <button value="cancel">Cancel</button>
    <button value="ok">Book now</button>
  </form>
</dialog>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.modal {
  width: min(90vw, 360px);
  padding: 0; /* padding goes on the inner box so backdrop clicks are detected correctly */
  border: 0;
  border-radius: 16px;
  /* Open/close motion (ease-out on the way in) */
  transition: opacity {{dur}} ease-out, transform {{dur}} ease-out,
    overlay {{dur}} allow-discrete, display {{dur}} allow-discrete;
}
.modal:not([open]) {
  opacity: 0;
  transform: scale({{scale:n}});
}
/* Where the animation starts when it opens */
@starting-style {
  .modal[open] { opacity: 0; transform: scale({{scale:n}}); }
}

/* Padding lives on the inner box */
.modal-body { padding: 24px; }

/* The dimmed backdrop */
.modal::backdrop {
  background: rgb(20 24 40 / {{dim:n}});
}

/* Lock page scroll while open */
body:has(dialog[open]) { overflow: hidden; }

@media (prefers-reduced-motion: reduce) {
  .modal { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const dialog = document.querySelector('.modal');
const openBtn = document.querySelector('.open-btn');

openBtn.addEventListener('click', () => dialog.showModal());

// Close on backdrop click (the dialog has no padding, so only the backdrop hits this)
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) dialog.close('cancel');
});

// Read the result on close (focus returns to the opener automatically)
dialog.addEventListener('close', () => {
  if (dialog.returnValue === 'ok') {
    // handle the booking
  }
});`,
    },
  ],
  tune: [
    { key: 'dim', label: 'Backdrop opacity', min: 0, max: 0.8, step: 0.05, value: 0.45, unit: '' },
    { key: 'dur', label: 'Open speed', min: 0.1, max: 0.6, step: 0.05, value: 0.25, unit: 's' },
    { key: 'scale', label: 'Starting scale', min: 0.8, max: 1, step: 0.02, value: 0.94, unit: '' },
  ],
  cautions: [
    'One way out is not enough. An × button, a Cancel button, Esc and a backdrop click together are what keep a modal from feeling like a trap.',
    'If the page behind keeps scrolling, people lose their place when the modal closes. Stop it with body:has(dialog[open]) { overflow: hidden; }.',
    'On phones, a bottom sheet that rises from the bottom is often easier to reach with a thumb than a centered box — especially for a list of options.',
    'Tie the dialog to its heading with aria-labelledby. With <dialog> and showModal(), screen readers automatically stop reading the page behind it.',
  ],
  similar: [
    { slug: 'bottom-sheet', diff: 'A bottom sheet slides up from the bottom edge. It suits option lists on phones and can be less disruptive than a modal.' },
    { slug: 'drawer', diff: 'A drawer slides in from a side edge, usually holding navigation. A modal sits in the middle and asks for one decision or one short input.' },
    { slug: 'exit-intent', book: 'ugoki', diff: 'An exit-intent popup is a modal that opens on its own when the cursor heads out of the page. It needs extra care not to feel pushy.' },
  ],
  faq: [
    {
      q: 'What is the difference between a modal, a dialog and a popup?',
      a: 'A dialog is any small window you interact with. A modal is a dialog that blocks the rest of the page until it is closed; a non-modal dialog lets you keep using the page. “Popup” is the loose everyday word for anything that pops up. When prompting an AI, say “modal dialog”.',
    },
    {
      q: 'Can I use the <dialog> element in all browsers?',
      a: 'Yes. Current versions of Chrome, Safari, Firefox and Edge all support it. The @starting-style rule used for the enter animation is newer, but browsers without it simply open and close the dialog without motion — nothing breaks.',
    },
    {
      q: 'Where should keyboard focus go when a modal closes?',
      a: 'Back to the element that opened it. A <dialog> opened with showModal() does this for you. If you build a modal from divs, remember the previously focused element and call focus() on it when you close.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
