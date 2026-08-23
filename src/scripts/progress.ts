import type { Ctx } from './main';

// Reading-progress bar (essay pages: <html data-progress>). The CSS path uses a
// scroll-driven animation; this is the fallback for browsers without support,
// and the explicit path under reduced motion (where animations are disabled).
export function initProgress({ reduce }: Ctx) {
  const root = document.documentElement;
  if (!root.hasAttribute('data-progress') || root.dataset.progressBound) return;
  root.dataset.progressBound = '1';
  const supported = CSS.supports('animation-timeline: scroll()');
  if (supported && !reduce) return;

  root.classList.add('progress-js');
  let raf = 0;
  const update = () => {
    raf = 0;
    const max = root.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    root.style.setProperty('--p', p.toFixed(4));
  };
  window.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
  window.addEventListener('resize', update);
  update();
}
