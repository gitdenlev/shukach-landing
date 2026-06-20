# Repository Guidelines

## Project Structure & Module Organization

This is a Vite + Vue 3 + TypeScript landing site. Application code lives in `src/`: page-level routes are in `src/views/`, reusable UI sections are in `src/components/`, router setup is in `src/router.ts`, and app bootstrap is in `src/main.ts`. Global styles and Tailwind layers are in `src/style.css`. Blog content lives in `src/content/blog/` as Markdown and is loaded through `src/utils/blogLoader.ts`. Static assets that should be served directly, including fonts, icons, `robots.txt`, and `sitemap.xml`, belong in `public/`.

## Build, Test, and Development Commands

- `npm install`: install dependencies from `package-lock.json`.
- `npm run dev`: start the Vite development server.
- `npm run build`: run `vue-tsc -b` type checking, then create a production build with Vite.
- `npm run preview`: serve the built site locally for final checks.

There is no dedicated test script in `package.json` yet, so use `npm run build` as the required validation command before publishing changes.

## Coding Style & Naming Conventions

Use Vue single-file components with `<script setup>` where possible. Match the existing style: two-space indentation in templates, single quotes in TypeScript/JavaScript, no trailing semicolons, and Tailwind utility classes for layout and styling. Name Vue components in PascalCase, such as `CookieConsent.vue`, and keep page components under `src/views/`. Keep route paths and content slugs lowercase and hyphenated, for example `why-save-money.md`.

## Testing Guidelines

Automated tests are not currently configured. When adding logic-heavy features, prefer adding a focused test setup before broad refactors. Until a test runner exists, verify changes by running `npm run build` and manually checking affected routes in `npm run dev` or `npm run preview`. For UI changes, test desktop and mobile widths, header navigation, modals, and blog rendering.

## Commit & Pull Request Guidelines

Recent history uses short, direct commits, often release-prefixed, such as `1.1.8 - update shops images`, plus concise fix messages like `fix deploy bug`. Keep commits scoped to one change and use imperative or descriptive wording. Pull requests should include a short summary, the validation performed, linked issue if available, and screenshots or screen recordings for visual changes.

## Security & Configuration Tips

Do not commit secrets or local environment files. Production behavior is affected by `vite.config.ts`, `vercel.json`, `public/robots.txt`, and `public/sitemap.xml`; update these together when changing routes, deployment behavior, or public indexing.
