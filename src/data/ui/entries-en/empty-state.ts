import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'empty-state',
  no: 26,
  category: 'display',
  name: 'Empty state',
  en: '空状態（エンプティステート）',
  aka: ['Empty state design', 'Zero state', 'Blank slate', 'No results page', 'Zero data state'],
  mode: 'script',
  title: 'Empty State UI Design: Turn “No Data” into a Clear Next Step',
  description:
    'Design empty states that lead somewhere: a clear headline, why the screen is empty and one call to action. Copy and code for first-use, no-results and all-done.',
  oneLine: 'A zero-items screen that explains why it is empty and what to do next.',
  what: [
    'An empty state is what a list, inbox or dashboard shows when there is nothing in it yet. In the demo, “Saved stays” has no items, so it shows four things: a heart icon, the headline “No saved stays yet”, one line on why saving is useful, and an “Explore stays” button. Follow the button, tap a heart, and the empty state gives way to the list; remove the last saved stay and it comes back.',
    'The one rule: never a dead end. A gray “No data” leaves people wondering whether the app is broken or they did something wrong. Always say why the screen is empty and offer the next step as a button. For new users this is often the very first screen they see, which makes the empty state your onboarding.',
    'Do not confuse it with a loading state. Skeleton screens and spinners say “not here yet”; an empty state says “we checked, and there is nothing”. Show it before loading finishes and people get a flash of “nothing here” that is simply wrong.',
  ],
  when: [
    'Wishlists, carts, bookings — any list people fill themselves — before the first item',
    'Site search or filters that return zero results (show how to widen the search)',
    'Inbox zero or a finished task list (“You are all caught up”)',
    'The first screen of a freshly installed app, before any records exist',
  ],
  avoid: [
    'Before data has finished loading — a flash of “no items” causes needless worry',
    'When the request failed; an error deserves its own screen with what happened and a Retry button',
    'Giant illustrations and long copy that push the call to action below the fold',
  ],
  prompt:
    'Design the empty state for the “Saved stays” list. Do not settle for a plain “No data” message. Center, in a column with {{gap:t}} spacing: a heart icon (SVG) in a {{icon:t}} circular background, the headline “No saved stays yet”, one sentence on why saving helps, and a primary “Explore stays” button. Hide the empty state and show the list once there is at least one saved stay, and bring it back when the last one is removed. Never show the empty state while data is still loading, and show a separate error state with a Retry button if the request fails. The icon is decorative, so mark it aria-hidden="true".',
  howTo: [
    'The layout is simple: icon, headline, explanation and button stacked and centered. The words do the real work. The headline says what is missing, the explanation says how to fill it and why that helps, and the button names the next action with a verb. Make that button the most prominent thing in the empty state.',
    'In JavaScript, render either the empty state or the list — never both. Treat loading, error, empty and populated as four separate states, and you will never flash “no items” while a request is still in flight. When someone deletes the last item, move keyboard focus to the empty state’s button so focus does not fall back to the top of the page.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<section class="saved">
  <h2>Saved stays</h2>

  <!-- Only shown when there are zero items -->
  <div class="empty-state" hidden>
    <span class="empty-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
        <path d="M12 20.5s-7.5-4.6-7.5-10.1A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 7.5 2.8c0 5.5-7.5 10.1-7.5 10.1z"/>
      </svg>
    </span>
    <h3>No saved stays yet</h3>
    <p>Tap the heart on any stay to keep it here, so you can compare prices later.</p>
    <a href="/search" class="btn-primary">Explore stays</a>
  </div>

  <ul class="saved-list" hidden></ul>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: {{gap}};
  padding: 48px 16px;
  text-align: center;
}
.empty-state[hidden] { display: none; }
.empty-icon {
  display: grid;
  place-items: center;
  width: {{icon}};
  height: {{icon}};
  border-radius: 50%;
  background: #fde9e1;
  color: #f06a35;
}
.empty-icon svg { width: 50%; height: 50%; }
.empty-state h3 { margin: 0; font-size: 18px; }
.empty-state p {
  max-width: 320px;
  margin: 0;
  color: #5d6272;
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const empty = document.querySelector('.empty-state');
const list = document.querySelector('.saved-list');

// Zero items: empty state. One or more: the list. Never both.
function render(items) {
  empty.hidden = items.length > 0;
  list.hidden = items.length === 0;
  list.replaceChildren(...items.map((item) => {
    const li = document.createElement('li');
    li.textContent = item.name;
    return li;
  }));
}

// Render only after loading finishes (no flash of "nothing here")
fetch('/api/saved')
  .then((res) => res.json())
  .then(render);`,
    },
  ],
  tune: [
    { key: 'icon', label: 'Icon size', min: 32, max: 96, step: 8, value: 64, unit: 'px' },
    { key: 'gap', label: 'Spacing', min: 8, max: 32, step: 4, value: 16, unit: 'px' },
  ],
  cautions: [
    'Write a different message for each reason the screen is empty: how to get started for new users, how to loosen filters for zero search results, and a quick “all done” for a cleared inbox. Do not reuse one generic “No data”.',
    'Offer one clear action. “Explore stays”, “Watch the tutorial” and “Open settings” side by side leaves people unsure which to press.',
    'Illustrations are decoration: mark them aria-hidden="true" and put the meaning in the headline, so a screen reader gets the full story from the heading and the button alone.',
    'On phones, an oversized illustration pushes the button off screen. Keep everything, button included, within the first view.',
  ],
  similar: [
    { slug: 'skeleton', book: 'ugoki', diff: 'A skeleton screen says “still loading” with gray placeholders. An empty state says “loaded, and there is nothing yet” — and points to the next step.' },
    { slug: 'toast', book: 'ugoki', diff: 'A toast briefly confirms an action, like “Saved”. An empty state stays in place for as long as the screen has no content.' },
  ],
  faq: [
    {
      q: 'What should an empty state say?',
      a: 'A headline that names what is missing (“No saved stays yet”), a line on how to fill it and why it helps, and a button with a verb (“Explore stays”, “Add your first project”). Avoid ending at “No data” or “No results”.',
    },
    {
      q: 'How do I design a “no search results” page?',
      a: 'Echo back the query and active filters, then offer ways out: remove a filter, try a shorter keyword, or browse popular categories. If you can suggest a spelling correction (“Did you mean…”), that is the most helpful option of all.',
    },
    {
      q: 'Do empty states need an illustration?',
      a: 'No. A single simple icon works fine as long as the headline and button are there. If you do use an illustration, the button is still the star — shrink the art if it crowds the button out of view.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
