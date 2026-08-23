import type { Ctx } from './main';

// One passive pointermove → one rAF. Writes CSS custom properties only:
//   --mx / --my on <html>   (lerped; drives the blueprint grid spot)
//   --cx / --cy on the hovered .card (direct; drives the card spotlight)
// Mounted only for fine pointers without reduced motion.
let bound = false;

export function initPointer({ fine, reduce }: Ctx) {
  if (!fine || reduce || bound) return;
  bound = true;
  const root = document.documentElement;

  let tx = 0, ty = 0, x = 0, y = 0, raf = 0, first = true;
  let card: HTMLElement | null = null;
  let cardRect: DOMRect | null = null;

  const frame = () => {
    raf = 0;
    x += (tx - x) * 0.18;
    y += (ty - y) * 0.18;
    root.style.setProperty('--mx', x.toFixed(1) + 'px');
    root.style.setProperty('--my', y.toFixed(1) + 'px');
    if (card && cardRect) {
      card.style.setProperty('--cx', (tx - cardRect.left).toFixed(0) + 'px');
      card.style.setProperty('--cy', (ty - cardRect.top).toFixed(0) + 'px');
    }
    if (Math.abs(tx - x) > 0.3 || Math.abs(ty - y) > 0.3) raf = requestAnimationFrame(frame);
  };

  window.addEventListener('pointermove', (e) => {
    tx = e.clientX; ty = e.clientY;
    if (first) { x = tx; y = ty; first = false; root.style.setProperty('--spot', '1'); }
    const c = (e.target as Element).closest?.('.card, [data-spot]') as HTMLElement | null;
    if (c !== card) { card = c; cardRect = c ? c.getBoundingClientRect() : null; }
    if (!raf) raf = requestAnimationFrame(frame);
  }, { passive: true });

  // Re-measure the hovered card if the page scrolls under the cursor.
  window.addEventListener('scroll', () => { if (card) cardRect = card.getBoundingClientRect(); }, { passive: true });

  const hide = () => { root.style.setProperty('--spot', '0'); first = true; };
  document.documentElement.addEventListener('mouseleave', hide);
  window.addEventListener('blur', hide);
}
