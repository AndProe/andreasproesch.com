import type { Ctx } from './main';

// The Lens diagram uses SMIL <animateMotion>, which keeps ticking off-screen.
// Pause it while the diagram is not visible.
export function initLens(_c: Ctx) {
  const svg = document.querySelector<SVGSVGElement>('.lens__diagram svg');
  if (!svg || svg.dataset.bound || !('IntersectionObserver' in window)) return;
  svg.dataset.bound = '1';
  if (typeof svg.pauseAnimations !== 'function') return;
  new IntersectionObserver(([en]) => {
    if (en.isIntersecting) svg.unpauseAnimations(); else svg.pauseAnimations();
  }, { threshold: 0 }).observe(svg);
}
