import type { Ctx } from './main';

// Tab filtering for the homepage Experience section. Items carry their
// categories in data-cats (space-separated); tabs carry data-filter.
export function initExperience(_c: Ctx) {
  // Guard with a dedicated attribute: data-bound is already used by initReveal,
  // which stamps it on every [data-reveal] element — .expf included.
  const root = document.querySelector<HTMLElement>('.expf');
  if (!root || root.dataset.expfBound) return;
  root.dataset.expfBound = '1';

  const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('.expf__tab'));
  const items = Array.from(root.querySelectorAll<HTMLElement>('.expf__item'));
  const empty = root.querySelector<HTMLElement>('.expf__empty');

  for (const tab of tabs) {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter ?? 'all';
      for (const t of tabs) {
        const on = t === tab;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-pressed', String(on));
      }
      let shown = 0;
      for (const item of items) {
        const cats = (item.dataset.cats ?? '').split(' ');
        const show = filter === 'all' || cats.includes(filter);
        item.hidden = !show;
        if (show) shown++;
      }
      if (empty) empty.hidden = shown > 0;
    });
  }
}
