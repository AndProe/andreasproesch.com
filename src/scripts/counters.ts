import type { Ctx } from './main';

// Count-up for [data-count] values. The final value is server-rendered, so
// no-JS and reduced-motion users simply see the number.
export function initCounters({ reduce }: Ctx) {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-count]:not([data-bound])'));
  if (!els.length) return;
  els.forEach((el) => (el.dataset.bound = '1'));
  if (reduce || !('IntersectionObserver' in window)) return;

  const run = (el: HTMLElement) => {
    const target = parseFloat(el.dataset.count || '0');
    const suffix = el.dataset.suffix || '';
    const dur = 1100;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { run(en.target as HTMLElement); io.unobserve(en.target); }
    });
  }, { threshold: 0.6 });
  els.forEach((el) => io.observe(el));
}
