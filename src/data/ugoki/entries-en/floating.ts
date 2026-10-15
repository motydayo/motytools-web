import type { Ugoki } from '../types';

export default {
  slug: 'floating',
  no: 24,
  category: 'load',
  name: 'Floating animation',
  en: 'ふわふわアニメーション',
  aka: ['Float animation', 'Floating effect', 'Bobbing animation', 'Levitating animation', 'Up and down animation'],
  mode: 'loop',
  title: 'CSS Floating Animation: Make an Image Bob Gently Up and Down',
  description:
    'Make an image or badge float gently up and down with CSS keyframes. Live demo with adjustable height, speed and easing, a moving shadow and staggered timing.',
  oneLine: 'A phone mockup or badge drifts gently up and down as if it were hovering.',
  what: [
    'An app screenshot, illustration or small badge moves up a few pixels and back down again, slowly and endlessly. In the demo, the phone floats 10px up over a 3.2-second cycle while the shadow underneath shrinks and fades as it rises. The “Booking confirmed” and “4.8” badges float too, each slightly out of step.',
    'A still image feels flat; a floating one feels light and alive, and the eye drifts to it naturally. Because the movement is small and slow, it draws far less attention than a marquee and rarely competes with the copy beside it.',
  ],
  when: [
    'App landing pages where the phone mockup should be the star of the hero',
    'Mascots and illustrations that could use a little life',
    'Small social-proof badges (“4.8 rating”, “Used by 100 teams”) scattered around a hero image',
    'A chat launcher or help bubble you want noticed without being pushy',
  ],
  avoid: [
    'Right next to or inside body text: constant motion at the edge of vision is distracting',
    'Many elements floating independently on one screen — it looks restless and cheap',
    'Large movement on buttons: the target shifts as people try to click, causing misclicks',
  ],
  prompt:
    'Add a floating animation to the phone mockup in the hero, CSS only. Use @keyframes to move it transform: translateY(0) → translateY(-{{dist}}) → translateY(0), one cycle every {{dur:t}}, timing function {{ease}}, infinite. Put an elliptical shadow under the image and animate it on the same cycle so it shrinks to scaleX(0.78) and opacity 0.55 at the top. Float the two badges around it as well, with negative animation-delay values and slightly different durations so they are out of step. Stop all of it under prefers-reduced-motion: reduce.',
  howTo: [
    'Define @keyframes that move the element up and back down, then repeat it with infinite. Animate transform: translateY rather than top or margin — it is cheaper to render and does not push surrounding content around. Since the motion goes back and forth, ease-in-out (slow start, slow stop) looks most natural.',
    'The detail that sells the effect is the shadow. Shrink and fade it as the element rises and it reads as lifting off the ground. When floating several items, give each a negative animation-delay and a slightly different duration so they never move in lockstep. Switch the easing control to Linear or Bouncy to see why ease-in-out matters at the turning points.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="float-stage">
  <img class="float" src="/img/app-screen.png" alt="Booking screen of the app" width="260" height="520">
  <span class="float-shadow" aria-hidden="true"></span>
  <span class="float badge">Booking confirmed</span>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.float-stage {
  position: relative;
  display: grid;
  justify-items: center;
}
.float-stage img {
  max-width: 100%;
  height: auto;
}

/* rise {{dist}}, one cycle every {{dur}} */
.float {
  animation: float {{dur}} {{ease}} infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-{{dist}}); }
}

/* the shadow shrinks and fades as the element rises */
.float-shadow {
  width: 180px;
  height: 16px;
  margin-top: 12px;
  border-radius: 50%;
  background: rgba(29, 37, 65, 0.22);
  filter: blur(4px);
  animation: float-shadow {{dur}} {{ease}} infinite;
}
@keyframes float-shadow {
  0%, 100% { transform: scaleX(1); opacity: 1; }
  50% { transform: scaleX(0.78); opacity: 0.55; }
}

/* offset the badge so it floats out of step */
.badge {
  position: absolute;
  top: 15%;
  left: 0;
  padding: 6px 12px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 10px 22px -12px rgba(29, 37, 65, 0.5);
  animation-delay: calc({{dur}} * -0.34);
  animation-duration: calc({{dur}} * 1.19);
}

/* reduced motion: stand still */
@media (prefers-reduced-motion: reduce) {
  .float,
  .float-shadow {
    animation: none;
  }
}`,
    },
  ],
  tune: [
    { key: 'dist', label: 'Float height', min: 2, max: 32, step: 1, value: 10, unit: 'px' },
    { key: 'dur', label: 'Cycle duration', min: 1, max: 8, step: 0.1, value: 3.2, unit: 's' },
    {
      key: 'ease',
      type: 'select',
      label: 'Easing',
      value: 'ease-in-out',
      options: [
        { value: 'ease-in-out', label: 'Gentle (ease-in-out)' },
        { value: 'linear', label: 'Linear' },
        { value: 'ease-in', label: 'Bouncy (ease-in)' },
      ],
    },
  ],
  cautions: [
    'Keep it subtle: 5–15px of travel and a 2–5 second cycle. Bigger or faster and it stops floating and starts hopping.',
    'Float one hero element and maybe a couple of small accents around it. Too many things in perpetual motion tire the eyes and blur the focal point.',
    'It loops forever, so handling prefers-reduced-motion is not optional. Make sure the layout still looks right when everything is still.',
    'Do not float buttons or links. The target moves just as someone clicks and they miss. Float images and decorations only.',
  ],
  similar: [
    {
      slug: 'hover-lift',
      diff: 'Hover lift raises an element once, in response to the pointer. A floating animation keeps moving on its own, with no interaction.',
    },
    {
      slug: 'animated-gradient',
      diff: 'An animated gradient shifts background colors. Floating moves an actual image or element. Using both in the same hero can get busy.',
    },
  ],
  faq: [
    {
      q: 'Why does my floating animation look choppy?',
      a: 'Animating top or margin forces the browser to recalculate layout every frame, which stutters. Use transform: translateY instead. Linear timing also makes the turnaround look stiff; ease-in-out smooths it out.',
    },
    {
      q: 'How do I make several elements float out of sync?',
      a: 'Use the same keyframes but give each element its own animation-delay and animation-duration. A negative delay (for example -1.1s) starts the animation partway through its cycle, so nothing moves in unison even on the first frame.',
    },
    {
      q: 'Does a CSS floating animation drain battery on phones?',
      a: 'Very little when it only animates transform, which the GPU handles efficiently. If you want to be thorough, pause it with animation-play-state: paused when it scrolls out of view.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
