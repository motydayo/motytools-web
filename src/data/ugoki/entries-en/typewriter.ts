import type { Ugoki } from '../types';

export default {
  slug: 'typewriter',
  no: 26,
  category: 'inform',
  name: 'Typewriter effect',
  en: 'タイプライター',
  aka: ['Typing animation', 'Typing text effect', 'Text typing animation', 'Rotating headline', 'Blinking cursor text'],
  mode: 'script',
  title: 'Typewriter Effect in JavaScript and CSS: Type, Delete and Loop',
  description:
    'A typing text effect that types, deletes and rotates words in a hero headline, with a CSS blinking caret, vanilla JS, accessible markup and adjustable speed.',
  oneLine: 'Headline text appears one character at a time, as if typed.',
  what: [
    'The end of the hero headline types itself out letter by letter, pauses, deletes, and swaps to the next phrase: “in seconds.”, “from your phone.”, “any time, 24/7.” A caret marks the typing position and blinks only while the text is at rest — just like a real text field.',
    'Text that is still being written pulls the eye; people instinctively wait to read the end. That makes it a good fit for rotating through a few short value props in one spot. The trade-off is time: nobody can read faster than you type, so keep it to one short line at the top of the page.',
  ],
  when: [
    'Hero headlines that cycle through two to four short benefits',
    'AI chat, search and writing tools, where “typing” is literally what the product does',
    'Developer tools and portfolios that want a terminal or command-line feel',
    'Event and launch pages that reveal a date or tagline one beat at a time',
  ],
  avoid: [
    'Body copy or any long sentence — it forces readers to go at the animation’s pace',
    'Pricing, instructions or anything people must read right away',
    'More than one typing effect per page; people will not know where to look',
  ],
  prompt:
    'Add a typewriter effect to the hero headline. Keep “Book your trip” static, and after it cycle through “in seconds.”, “from your phone.” and “any time, 24/7.”: type each phrase at {{type:t}} per character, hold for {{hold:t}}, delete at {{erase:t}} per character, then move on and loop back to the first phrase at the end. Show a 3px-wide caret at the typing position that blinks once per second only while the text is idle (CSS steps(1) animation). Use vanilla JavaScript with no library. Split strings with [...text] rather than split(\'\') so emoji are not cut in half. Reserve the headline height so the layout below does not jump. Give screen readers the full sentence with all three phrases and mark the animated part aria-hidden="true". For prefers-reduced-motion users, show the first phrase without animating.',
  howTo: [
    'JavaScript splits the phrase into characters and shows one more every few dozen milliseconds. Use [...text] rather than text.split(\'\'): it splits by code point, so most emoji stay intact (for flags and combined emoji, use Intl.Segmenter). Deleting runs the same loop in reverse, and it feels snappier when it is noticeably faster than typing.',
    'The caret is a CSS ::after pseudo-element with a steps(1) animation, so it blinks on and off instead of fading. Pausing the blink while typing makes it read like a real input. Screen readers would otherwise announce every partial word, so the animated span gets aria-hidden="true" and the full sentence lives in visually hidden text.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<h1 class="hero-title">
  <!-- Screen readers get the full sentence -->
  <span class="visually-hidden">Book your trip in seconds, from your phone, any time.</span>
  <span aria-hidden="true">Book your trip<br><span class="typed">in seconds.</span></span>
</h1>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.hero-title { min-height: 2.7em; } /* no layout jump as text grows */
.typed { white-space: nowrap; }

/* The caret */
.typed::after {
  content: '';
  display: inline-block;
  width: 3px;
  height: 0.95em;
  margin-left: 4px;
  vertical-align: -0.1em;
  background: currentColor;
  animation: blink 1s steps(1) infinite;
}
.typed.is-typing::after { animation: none; } /* solid while typing */
@keyframes blink { 50% { opacity: 0; } }

.visually-hidden {
  position: absolute; width: 1px; height: 1px;
  overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  .typed::after { animation: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const el = document.querySelector('.typed');
const words = ['in seconds.', 'from your phone.', 'any time, 24/7.'];
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function loop() {
  for (let n = 0; ; n = (n + 1) % words.length) {
    const chars = [...words[n]]; // split by code point (keeps most emoji whole)
    el.classList.add('is-typing');
    for (let i = 1; i <= chars.length; i++) {
      el.textContent = chars.slice(0, i).join('');
      await wait({{type:n}} * 1000); // per character typed
    }
    el.classList.remove('is-typing');
    await wait({{hold:n}} * 1000); // pause on the full phrase
    el.classList.add('is-typing');
    for (let i = chars.length - 1; i >= 0; i--) {
      el.textContent = chars.slice(0, i).join('');
      await wait({{erase:n}} * 1000); // per character deleted
    }
    await wait(300);
  }
}

// Reduced motion: keep the first phrase, no typing
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) loop();`,
    },
  ],
  tune: [
    { key: 'type', label: 'Typing speed (per character)', min: 0.03, max: 0.3, step: 0.01, value: 0.11, unit: 's' },
    { key: 'erase', label: 'Delete speed (per character)', min: 0.01, max: 0.15, step: 0.005, value: 0.045, unit: 's' },
    { key: 'hold', label: 'Pause on full phrase', min: 0.5, max: 4, step: 0.1, value: 1.7, unit: 's' },
  ],
  cautions: [
    'If the headline changes width or wraps to a new line as it types, everything below bounces up and down. Give it a min-height or reserve room for the longest phrase.',
    'Screen readers may read every intermediate state (“fr”, “fro”, “from”). Hide the animated span with aria-hidden="true" and provide the full text separately.',
    'A phrase that only makes sense once fully typed makes people wait. Keep each phrase short and make sure the first one works on its own.',
    'An endless loop keeps moving in the corner of the reader’s eye. Respect prefers-reduced-motion, and consider stopping after two or three cycles.',
  ],
  similar: [
    {
      slug: 'count-up',
      diff: 'A count-up animates the value of a number from zero. A typewriter effect adds characters one by one and is about making a phrase land.',
    },
    {
      slug: 'fade-in',
      diff: 'Fade-in on scroll reveals a whole block of text at once. A typewriter reveals it letter by letter, which takes longer and suits only short headlines.',
    },
  ],
  faq: [
    {
      q: 'Can I make a typewriter effect with CSS only?',
      a: 'For a single fixed line, yes: animate the width of a monospace element with steps() equal to the character count. It breaks with proportional fonts, and rotating several phrases needs JavaScript. The JavaScript version here handles both.',
    },
    {
      q: 'What typing speed feels natural?',
      a: 'For English, roughly 0.05–0.12s per character feels like confident typing. Delete at about half the typing interval or faster, and hold the finished phrase for 1.5–2 seconds so people can actually read it. Use the sliders above to feel the difference.',
    },
    {
      q: 'Is typed text bad for SEO?',
      a: 'Not if the real text is in the HTML. Put the full sentence (or at least the first phrase) in the markup; if the headline is empty until JavaScript fills it, crawlers and link previews may see nothing.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
