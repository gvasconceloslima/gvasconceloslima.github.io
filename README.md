# Gabriela Vasconcelos Lima

English academic website: research, publications, teaching, leadership and CV.

## Publication

Target repository: `gvasconceloslima/gvasconceloslima.github.io`.
Target URL: https://gvasconceloslima.github.io/

In repository Settings → Pages, select Deploy from a branch, branch `main`, folder `/ (root)`.
The `.nojekyll` file allows publishing the existing static HTML directly.

## Files and editing

- `src/portfolio-fragment.html`: canonical page content, embedded CSS, navigation JavaScript and eight inline photographs.
- `src/standalone-shell.html`: document metadata and wrapper.
- `src/*.css` and the section HTML files: retained design and content source excerpts.
- `index.html`: generated static website served by GitHub Pages.
- `assets/gabriela-lima-academic-cv.pdf`: current CV, displayed within the CV tab and available to download.

To update the website, edit the canonical fragment and run:

```sh
node scripts/build.mjs
```

Commit the source and generated `index.html` together.
When replacing the CV, update its version query in the fragment to prevent stale browser caches.

No package installation or server is required. Fonts are loaded from Google Fonts; images and CV are included.

## Migration provenance

Prepared from the public site's approved source commit
`9b82364ef942f73090425fd9c116107cdab0cff8` on 2026-10-13.
The six views, approved teaching metrics, photographs and latest CV were preserved.
Hosting-specific identity and Git credentials are excluded.
