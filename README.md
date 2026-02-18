# Faculty Site (Next.js)

This project has been rewritten from Ember to **Next.js (App Router)** and is configured for **static export** deployment on GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build (static export)

```bash
npm run build
```

The exported static files are generated in `out/`.

## GitHub Pages deployment

A workflow is included at `.github/workflows/deploy.yml`.

- It builds with `GITHUB_ACTIONS=true` and auto-detects the repository name from `GITHUB_REPOSITORY`.
- `next.config.mjs` sets `basePath` and `assetPrefix` for project pages (e.g. `https://<user>.github.io/<repo>/`).
- The workflow uploads `out/` and deploys with `actions/deploy-pages`.

If your default branch is not `main`, update the workflow trigger accordingly.
