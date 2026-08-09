# Old Weather

This repository contains the holding website for the
[Old Weather](https://oldweather.org/) citizen-science project.

Old Weather brought volunteers and scientists together to recover historical
weather observations from ships’ logbooks. The project is not currently
running an active transcription programme, so this site serves as a signpost to
its legacy, results, and archived stories.

## Local preview

The site requires Node.js 22 or later and uses pnpm:

```bash
pnpm install
pnpm dev
```

The preview is then available at <http://localhost:3000/>.

## Build and test

```bash
pnpm build
pnpm export:pages
pnpm test
```

`pnpm export:pages` creates the static GitHub Pages site in `_site/`.

## Publishing

Pushing to `main` runs the GitHub Pages workflow in
`.github/workflows/pages.yml`. The repository’s Pages source must be set to
**GitHub Actions**.

The custom domain is configured as `oldweather.org` in `public/CNAME`.
