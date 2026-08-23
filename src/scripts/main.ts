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

function boot() {
  const c = ctx();
  initReveal(c);
  initNav(c);
  initPointer(c);
  initCounters(c);
  initLens(c);
  initProgress(c);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
document.addEventListener('astro:page-load', boot);
