import type { Ctx } from './main';

// Header: mobile drawer, live Abu Dhabi clock, compact-on-scroll, sliding indicator.
export function initNav(_c: Ctx) {
  const nav = document.querySelector<HTMLElement>('.nav');
  if (!nav || nav.dataset.bound) return;
  nav.dataset.bound = '1';

  // ---- Mobile drawer ----
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('navMobile');
  if (burger && drawer) {
    const set = (open: boolean) => {
      drawer.classList.toggle('open', open);
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
    };
    burger.addEventListener('click', () => set(!drawer.classList.contains('open')));
    drawer.addEventListener('click', (e) => { if ((e.target as Element).tagName === 'A') set(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) { set(false); burger.focus(); }
    });
  }

  // ---- Live status clock (Abu Dhabi · UTC+4) ----
  const statusTxt = document.getElementById('statusTxt');
  const tick = () => {
    if (!statusTxt) return;
    try {
      const t = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit', hour12: false,
      });
      statusTxt.textContent = 'Abu Dhabi · ' + t + ' · UTC+4';
    } catch { /* keep static fallback */ }
  };
  tick();
  setInterval(tick, 30000);

  // ---- Compact header after the page scrolls (IO on a 1px sentinel; no scroll listener) ----
  const sentinel = document.querySelector('.nav-sentinel');
  if (sentinel && 'IntersectionObserver' in window) {
    new IntersectionObserver(([en]) => {
      document.documentElement.toggleAttribute('data-scrolled', !en.isIntersecting);
    }, { threshold: 0 }).observe(sentinel);
  }

  // ---- Sliding indicator under the primary links ----
  const links = nav.querySelector<HTMLElement>('.nav__links');
  const ind = links?.querySelector<HTMLElement>('.nav__ind');
  if (links && ind) {
    const anchors = Array.from(links.querySelectorAll<HTMLAnchorElement>('a'));
    const moveTo = (a: HTMLElement | null) => {
      if (!a) { links.style.setProperty('--io', '0'); return; }
      links.style.setProperty('--ix', a.offsetLeft + 'px');
      links.style.setProperty('--iw', a.offsetWidth + 'px');
      links.style.setProperty('--io', '1');
    };
    const rest = () => moveTo(links.querySelector<HTMLElement>('a.active'));
    anchors.forEach((a) => {
      a.addEventListener('mouseenter', () => moveTo(a));
      a.addEventListener('focus', () => moveTo(a));
    });
    links.addEventListener('mouseleave', rest);
    links.addEventListener('focusout', (e) => {
      if (!links.contains(e.relatedTarget as Node)) rest();
    });
    // Settle without animating: position first, then enable transitions next frame.
    rest();
    requestAnimationFrame(() => links.classList.add('nav__links--ready'));
    window.addEventListener('resize', rest);
    document.fonts?.ready.then(rest);
  }
}
