# andreasproesch.com

Personal site for Andreas Proesch — tech operator, advisor, and angel investor.
Dark, industrial design. Built as a static site with **Astro** and deployed to
**GitHub Pages** at the custom domain [andreasproesch.com](https://andreasproesch.com).

## Stack

- **[Astro](https://astro.build) 5** — static output (`output: 'static'`), no client framework
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — auto-generated sitemap
- Plain CSS design system (Archivo + Space Mono, amber accent) — no build tooling beyond Astro
- **[GoatCounter](https://www.goatcounter.com/)** for privacy-friendly analytics
- Contact form via **[Web3Forms](https://web3forms.com)** (+ hCaptcha) — no backend required

## Project structure

```
src/
  layouts/BaseLayout.astro   Shared HTML shell: SEO/OG/structured data, fonts,
                             atmosphere, nav + footer, scroll-reveal behaviour
  components/                Header, Footer
  pages/                     index, about, speaking, portfolio, books, contact,
                             blog (Writing → Substack), 404
  data/posts.ts              Substack post index (home teaser + /blog share it)
  styles/                    site.css (design system), home.css, pages.css
public/images/               Portraits, speaking photos, book covers, OG card
```

Page content and lists (books, portfolio, speaking events) live as small arrays in
each page's frontmatter. Writing routes out to the **Asymmetric** Substack.

## Commands

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Start the dev server at `localhost:4321`      |
| `npm run build`   | Build the production site to `./dist/`        |
| `npm run preview` | Preview the production build locally          |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes `./dist` to GitHub Pages. The `CNAME` file pins the custom domain.

## Contact form

The contact form posts to Web3Forms. The access key in `src/pages/contact.astro`
determines the destination inbox; generate a new key at web3forms.com to change it.
The key is not secret (it only permits submitting to this form).
