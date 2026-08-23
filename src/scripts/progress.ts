import type { Ctx } from './main';

// Reading-progress bar (essay pages: <html data-progress>). The CSS path uses a
// scroll-driven animation; this is the fallback for browsers without support,
// and the explicit path under reduced motion (where animations are disabled).
let bound = false;
let active = false;

export function initProgress({ reduce }: Ctx) {
  const root = document.documentElement;
  const supported = CSS.supports('animation-timeline: scroll()');
  active = root.hasAttribute('data-progress') && (!supported || reduce);
  root.classList.toggle('progress-js', active);
  if (!active) return;

  const update = () => {
    raf = 0;
    if (!active) return;
    const max = root.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    root.style.setProperty('--p', p.toFixed(4));
  };
  update();
  if (bound) return;
  bound = true;
  window.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
  window.addEventListener('resize', update);
}
let raf = 0;
