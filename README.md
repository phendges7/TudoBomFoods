# Tudo de Bom Alimentos

Landing page for **Tudo de Bom Alimentos**, a Brazilian bakery and snack shop (salgados, doces e café), in the spirit of a high-street bakery chain like Greggs.

Built with **React 18 + Vite** (JavaScript) using a **feature-first** folder structure.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build in dist/
npm run preview  # serve the production build at /TudoBomFoods/
```

## Deploying to GitHub Pages

Every push to `main` builds and publishes the site via
[.github/workflows/deploy.yml](.github/workflows/deploy.yml). One-time setup in the repo:
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

The site is served from `https://<user>.github.io/TudoBomFoods/`, so `vite.config.js` sets
`base: '/TudoBomFoods/'` for builds. If the repo is renamed, update `base` to match.
Files in `public/` must be referenced with `import.meta.env.BASE_URL` (see
`src/shared/data/photos.js`), not with a leading `/`.

## Project structure

```
src/
├── main.jsx                 # entry point
├── app/
│   └── App.jsx              # composes the features into the page
├── features/                # one folder per feature, each self-contained
│   ├── header/              # sticky nav + cart button + mobile menu
│   ├── hero/                # headline, CTAs, live "open now" status (hooks/useOpeningStatus)
│   ├── deals/               # meal-deal combos (data/deals.js)
│   ├── menu/                # filterable menu (data/, hooks/useMenuFilter, components/)
│   ├── cart/                # cart state (context/CartContext) + slide-out drawer
│   ├── about/               # brand story + stats
│   ├── locations/           # store list with Google Maps links (data/stores.js)
│   └── footer/              # newsletter signup + social links
└── shared/                  # code used by more than one feature
    ├── components/          # Button, SectionHeading
    ├── styles/global.css    # design tokens (colors, fonts) + resets
    └── utils/formatPrice.js # BRL currency formatting
```

### Conventions

- Each feature exposes its public API through an `index.js`. Other features import from
  `@features/<name>`, never from a feature's internal files.
- Styling uses CSS Modules colocated with each component; shared design tokens live in
  `src/shared/styles/global.css`.
- Path aliases: `@app`, `@features`, `@shared` (configured in `vite.config.js`).
- Menu, combos and stores are plain data files, so they're easy to swap for an API later.
