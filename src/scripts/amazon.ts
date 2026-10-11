// Books page affiliate links. Build output targets amazon.com; visitors in the
// UAE get their hrefs rewritten to amazon.ae with the .ae Associates tag,
// because OneLink's server-side geo-redirect does not cover the UAE.
import { cartUrl, productUrl } from '../lib/amazon';
import type { Ctx } from './main';

export function initAmazon(_c: Ctx) {
  const links = document.querySelectorAll<HTMLAnchorElement>('a[data-asin]:not([data-amzn-bound])');
  if (!links.length) return;

  let tz = '';
  try {
    tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? '';
  } catch {
    // Intl timezone unsupported: keep the amazon.com links.
  }

  links.forEach((a) => {
    a.setAttribute('data-amzn-bound', '');
    const asin = a.dataset.asin;
    if (tz !== 'Asia/Dubai' || !asin) return;
    a.href = a.dataset.amzn === 'cart' ? cartUrl(asin, 'ae') : productUrl(asin, 'ae');
  });

  // GoatCounter binds data-goatcounter-click handlers once at script load;
  // rebind so links swapped in by View Transitions are counted too.
  const gc = (window as any).goatcounter;
  if (gc && typeof gc.bind_events === 'function') gc.bind_events();
}
