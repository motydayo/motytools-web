// 動きの図鑑（/ugoki/）の見本を「自動で動かす」仕組み。
//
// 見本は1つずつ「ブラウザの枠」（UgFrame.astro）の中に入っている。
// 枠が画面に見えている間だけ、見本ごとの「見せ方の台本（ツアー）」を繰り返し再生する。
//   - scroll : 枠の中を人がスクロールするように、少しずつ下へ送って最後に上へ戻す
//   - pointer: 偽物のマウス（矢印）を data-ug-target の要素へ順に動かし、乗せる・押すを見せる
//   - loop   : CSSで動き続ける見本。見えている間だけ動かす（見えないときは止めて電池を守る）
//   - script : 見本側が onTour() で自前の台本を登録する
//
// 利用者が枠を触った（スクロール・マウスを乗せた・タップした）ら台本を止め、
// しばらく触らなければ再開する。端末の「視差効果を減らす」設定がオンなら自動再生しない。

export type Point = { x: number; y: number };

export interface Tour {
  /** 見本の中身（スクロールする箱） */
  view: HTMLElement;
  frame: HTMLElement;
  /** 中断されたら throw する待ち時間 */
  sleep(ms: number): Promise<void>;
  /** 偽物のマウスを要素（の中心）か座標へ動かす。座標は view の左上基準 */
  move(to: Element | Point, ms?: number): Promise<void>;
  /** 偽物のマウスで押す（ug:click を要素に送る。見た目の押し込みも出る） */
  click(el?: Element | null): Promise<void>;
  /** 要素に「乗っている」状態（.is-hover）を付け外しする */
  hover(el: Element | null): void;
  /** view を指定位置までなめらかにスクロールする */
  scrollTo(top: number, ms?: number): Promise<void>;
  /** 中断の合図 */
  signal: AbortSignal;
  /** 偽物のマウスを出す・隠す */
  showCursor(show: boolean): void;
}

type TourFn = (t: Tour) => Promise<void>;

const tours = new WeakMap<HTMLElement, TourFn>();
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

class Aborted extends Error {}

/** 見本側から台本を登録する。root は見本のいちばん外側の要素（枠の中のどこか） */
export function onTour(root: Element, fn: TourFn) {
  const frame = root.closest<HTMLElement>('[data-ug-frame]');
  if (!frame) return;
  tours.set(frame, fn);
  frame.dispatchEvent(new CustomEvent('ug:registered'));
}

/** 見本側から使う: view 基準の座標を、偽物マウスの動き（ug:move）で受け取る */
export function onPointer(view: HTMLElement, fn: (p: Point, real: boolean) => void) {
  view.addEventListener('pointermove', (e) => {
    const r = view.getBoundingClientRect();
    fn({ x: e.clientX - r.left, y: e.clientY - r.top + view.scrollTop }, true);
  });
  view.addEventListener('ug:move', (e) => fn((e as CustomEvent<Point>).detail, false));
}

/** つまみの値（CSS変数 --t-<key>）を数として読む。見本の JavaScript で使う */
export function tuneNum(el: Element, key: string, fallback = 0): number {
  const v = parseFloat(getComputedStyle(el).getPropertyValue(`--t-${key}`));
  return Number.isFinite(v) ? v : fallback;
}

/** つまみの値（CSS変数 --t-<key>）を文字のまま読む（色・選択肢） */
export function tuneStr(el: Element, key: string, fallback = ''): string {
  return getComputedStyle(el).getPropertyValue(`--t-${key}`).trim() || fallback;
}

/** つまみが動いたら呼ばれる（view にイベント ug:tune が飛ぶ） */
export function onTune(view: HTMLElement, fn: () => void) {
  view.addEventListener('ug:tune', fn);
}

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function setup(frame: HTMLElement) {
  if (frame.dataset.ugReady) return;
  frame.dataset.ugReady = '1';
  const view = frame.querySelector<HTMLElement>('[data-ug-view]')!;
  const cursor = frame.querySelector<HTMLElement>('[data-ug-cursor]');
  const mode = frame.dataset.mode ?? 'scroll';
  const mini = frame.dataset.size === 'mini';
  const playBtn = frame.querySelector<HTMLButtonElement>('[data-ug-play]');
  const restartBtn = frame.querySelector<HTMLButtonElement>('[data-ug-restart]');

  let visible = false;
  let paused = !mini && reduceMotion(); // 動きを減らす設定なら、詳細ページでは止めた状態から
  if (mini && reduceMotion()) paused = true;
  let userBusy = false;
  let idleTimer = 0;
  let ctrl: AbortController | null = null;
  let running = false;
  let cur: Point = { x: 0, y: 0 };

  const syncUi = () => {
    frame.classList.toggle('is-playing', visible && !paused);
    frame.classList.toggle('is-touring', running);
    if (playBtn) {
      playBtn.setAttribute('aria-pressed', String(!paused));
      playBtn.querySelector('[data-label]')!.textContent = paused ? (frame.dataset.labelPlay ?? '自動再生') : (frame.dataset.labelPause ?? '一時停止');
    }
  };

  const showCursor = (show: boolean) => cursor?.classList.toggle('is-shown', show);
  const placeCursor = (p: Point) => {
    cur = p;
    if (cursor) cursor.style.transform = `translate(${p.x}px, ${p.y - view.scrollTop + view.offsetTop}px)`;
  };

  const tourApi = (signal: AbortSignal): Tour => {
    const check = () => {
      if (signal.aborted) throw new Aborted();
    };
    const sleep = (ms: number) =>
      new Promise<void>((res, rej) => {
        const id = window.setTimeout(res, ms);
        signal.addEventListener('abort', () => {
          clearTimeout(id);
          rej(new Aborted());
        }, { once: true });
      });
    const frameLoop = (ms: number, step: (k: number) => void) =>
      new Promise<void>((res, rej) => {
        const t0 = performance.now();
        const tick = (now: number) => {
          if (signal.aborted) return rej(new Aborted());
          const k = Math.min(1, (now - t0) / ms);
          step(ease(k));
          if (k < 1) requestAnimationFrame(tick);
          else res();
        };
        requestAnimationFrame(tick);
      });
    const pointOf = (to: Element | Point): Point => {
      if (!(to instanceof Element)) return to;
      const r = to.getBoundingClientRect();
      const v = view.getBoundingClientRect();
      return { x: r.left - v.left + r.width / 2, y: r.top - v.top + r.height / 2 + view.scrollTop };
    };
    return {
      view,
      frame,
      signal,
      sleep,
      showCursor,
      async move(to, ms = 700) {
        check();
        showCursor(true);
        const from = { ...cur };
        const end = pointOf(to);
        await frameLoop(ms, (k) => {
          const p = { x: from.x + (end.x - from.x) * k, y: from.y + (end.y - from.y) * k };
          placeCursor(p);
          view.dispatchEvent(new CustomEvent('ug:move', { detail: p }));
        });
      },
      async click(el) {
        check();
        cursor?.classList.add('is-down');
        const target = el ?? null;
        target?.dispatchEvent(new CustomEvent('ug:click', { detail: { ...cur }, bubbles: true }));
        await sleep(160);
        cursor?.classList.remove('is-down');
      },
      hover(el) {
        view.querySelectorAll('.is-hover').forEach((n) => n !== el && n.classList.remove('is-hover'));
        el?.classList.add('is-hover');
      },
      async scrollTo(top, ms = 900) {
        check();
        const from = view.scrollTop;
        const max = view.scrollHeight - view.clientHeight;
        const to = Math.max(0, Math.min(max, top));
        // スクロールスナップがあると途中の位置に吸い付いてしまうので、台本の間だけ外す
        view.classList.add('is-programmatic');
        try {
          await frameLoop(ms, (k) => {
            view.scrollTop = from + (to - from) * k;
            placeCursor(cur);
          });
        } finally {
          view.classList.remove('is-programmatic');
        }
      },
    };
  };

  // 決まった型の台本
  const defaultTour: Record<string, TourFn> = {
    async scroll(t) {
      t.showCursor(false);
      await t.sleep(700);
      const page = t.view.clientHeight * 0.7;
      while (t.view.scrollTop + t.view.clientHeight < t.view.scrollHeight - 2) {
        await t.scrollTo(t.view.scrollTop + page, 1100);
        await t.sleep(650);
      }
      await t.sleep(900);
      await t.scrollTo(0, 900);
      await t.sleep(500);
    },
    async pointer(t) {
      const targets = [...t.view.querySelectorAll<HTMLElement>('[data-ug-target]')];
      if (cur.x === 0 && cur.y === 0) placeCursor({ x: t.view.clientWidth * 0.5, y: t.view.clientHeight * 0.9 });
      for (const el of targets) {
        await t.move(el, 750);
        t.hover(el);
        if (el.dataset.ugTarget === 'click') {
          await t.sleep(250);
          await t.click(el);
        }
        await t.sleep(1100);
        t.hover(null);
      }
      await t.move({ x: t.view.clientWidth * 0.5, y: t.view.clientHeight * 0.92 }, 700);
      await t.sleep(600);
    },
    async loop(t) {
      t.showCursor(false);
      await t.sleep(60_000);
    },
  };

  const run = async () => {
    if (running) return;
    running = true;
    syncUi();
    while (visible && !paused && !userBusy) {
      ctrl = new AbortController();
      const fn = tours.get(frame) ?? defaultTour[mode] ?? defaultTour.scroll;
      try {
        await fn(tourApi(ctrl.signal));
      } catch (e) {
        if (!(e instanceof Aborted)) {
          console.error(e);
          break;
        }
      }
      if (ctrl.signal.aborted) break;
    }
    // 中断・停止したら矢印と「乗っている」状態を片付ける
    view.querySelectorAll('.is-hover').forEach((n) => n.classList.remove('is-hover'));
    showCursor(false);
    running = false;
    syncUi();
  };

  const stop = () => ctrl?.abort();
  const maybeRun = () => {
    syncUi();
    if (visible && !paused && !userBusy) run();
    else stop();
  };

  // 利用者が触ったら台本を止め、4秒触らなければ再開
  const interact = () => {
    if (mini) return;
    userBusy = true;
    stop();
    clearTimeout(idleTimer);
    idleTimer = window.setTimeout(() => {
      userBusy = false;
      maybeRun();
    }, 4000);
  };
  if (!mini) {
    view.addEventListener('wheel', interact, { passive: true });
    view.addEventListener('touchstart', interact, { passive: true });
    view.addEventListener('pointerdown', interact);
    view.addEventListener('keydown', interact);
    view.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'mouse') interact();
    });
  }

  const focusBtn = frame.querySelector<HTMLButtonElement>('[data-ug-focus-toggle]');
  focusBtn?.addEventListener('click', () => {
    const on = !frame.classList.contains('show-focus');
    frame.classList.toggle('show-focus', on);
    focusBtn.setAttribute('aria-pressed', String(on));
  });

  playBtn?.addEventListener('click', () => {
    paused = !paused;
    userBusy = false;
    maybeRun();
  });
  restartBtn?.addEventListener('click', () => {
    stop();
    view.scrollTop = 0;
    view.dispatchEvent(new CustomEvent('ug:reset'));
    paused = false;
    userBusy = false;
    window.setTimeout(maybeRun, 50);
  });

  frame.addEventListener('ug:registered', () => {
    if (running) {
      stop();
      window.setTimeout(maybeRun, 50);
    }
  });

  new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      maybeRun();
    },
    { threshold: 0.35 }
  ).observe(frame);

  syncUi();
}

export function initFrames() {
  document.querySelectorAll<HTMLElement>('[data-ug-frame]').forEach(setup);
}
