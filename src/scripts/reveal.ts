import type { Ctx } from './main';

// Scroll reveal. Content is visible by default; <html class="js"> (set inline in
// <head>) hides [data-reveal] until `.in` is stamped. Motion is a CSS keyframe
// (see site.css) so an element's own `transition` is never touched.
export function initReveal({ reduce }: Ctx) {
  const items = Array.from(
    document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-bound])'),
  );
  if (!items.length) return;
  items.forEach((el) => (el.dataset.bound = '1'));

  // Auto-stagger inside groups unless a delay was set by hand.
  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((g) => {
    g.querySelectorAll<HTMLElement>('[data-reveal]').forEach((k, i) => {
      if (!k.hasAttribute('data-delay')) k.setAttribute('data-delay', (i * 0.06).toFixed(2));
    });
  });

  function reveal(el: HTMLElement) {
    if (el.classList.contains('in')) return;
    const d = parseFloat(el.getAttribute('data-delay') || '0');
    if (d) el.style.setProperty('--d', d + 's');
    el.classList.add('in');
    setTimeout(() => el.classList.add('done'), 900 + d * 1000);
  }
  const revealAll = () => items.forEach(reveal);

  if (reduce) { revealAll(); return; }

  const inView = (el: HTMLElement) => {
    const r = el.getBoundingClientRect();
    return r.top < (window.innerHeight || 800) * 0.92 && r.bottom > -40;
  };
  const revealInView = () => items.forEach((el) => { if (inView(el)) reveal(el); });
  revealInView();

  let ioWorks = false;
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      ioWorks = true;
      entries.forEach((en) => {
        if (en.isIntersecting) { reveal(en.target as HTMLElement); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach((el) => { if (!el.classList.contains('in')) io.observe(el); });
  }
  window.addEventListener('scroll', revealInView, { passive: true });
  window.addEventListener('resize', revealInView);
  setTimeout(() => { if (!ioWorks) revealAll(); }, 700);
}
