// Site behaviour entry. Every init is idempotent (guarded by data-bound flags)
// so boot() is safe to run again on astro:page-load if View Transitions are enabled.
import { initReveal } from './reveal';
import { initNav } from './nav';
import { initPointer } from './pointer';
import { initCounters } from './counters';
import { initLens } from './lens';
import { initProgress } from './progress';

export interface Ctx {
  /** prefers-reduced-motion: reduce */
  reduce: boolean;
  /** hover-capable, fine pointer (mouse / trackpad) */
  fine: boolean;
}

function ctx(): Ctx {
  return {
    reduce: matchMedia('(prefers-reduced-motion: reduce)').matches,
    fine: matchMedia('(hover: hover) and (pointer: fine)').matches,
  };
}

function flags() {
  const h = document.documentElement;
  h.classList.add('js');
  if (ctx().fine) h.classList.add('fine');
}

function boot() {
  const c = ctx();
  initReveal(c);
  initNav(c);
  initPointer(c);
  initCounters(c);
  initLens(c);
  initProgress(c);
  // The contact page carries third-party inline scripts (Web3Forms + hCaptcha)
  // that must run on a full document load — opt those links out of client routing.
  document.querySelectorAll<HTMLAnchorElement>('a[href="/contact/"], a[href^="/contact/#"]')
    .forEach((a) => a.setAttribute('data-astro-reload', ''));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}

// ---- View Transitions (astro:transitions ClientRouter) ----
// The router replaces <html> attributes on swap, which drops our capability
// classes — restore them before the new page paints, then re-boot (idempotent).
document.addEventListener('astro:after-swap', flags);
let firstPageLoad = true;
document.addEventListener('astro:page-load', () => {
  boot();
  if (firstPageLoad) { firstPageLoad = false; return; }
  const gc = (window as any).goatcounter;
  if (gc && typeof gc.count === 'function') gc.count({ path: location.pathname + location.search });
});
