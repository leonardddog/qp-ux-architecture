# QP UX Architecture

React 19 + Vite + TypeScript scaffold with **WickUI** + **Tailwind CSS 3.4**, **React Router**, **Redux Toolkit**.

## Stack

- Vite 6 + `@vitejs/plugin-react`
- TypeScript 5.8 (best for WickUI `dist/index.d.ts`)
- WickUI `2.19.3` + `wick-ui-icon` + `wick-ui-editor` (peers installed)
- Tailwind CSS 3.4 + `postcss` + `autoprefixer` (on top of WickUI `--wu-*` tokens)
- React Router 7, Redux Toolkit 2 + react-redux

## Project structure

```
src/
  components/  → reusable UI (layout/Layout, common/ErrorBoundary)
  pages/       → route components (Home, About, NotFound)
  hooks/       → useLocalStorage
  utils/       → format, cn
  assets/      → static files (logo.svg)
  api/         → client.ts (VITE_API_URL)
  store/       → Redux (index, slices/counterSlice, hooks)
```

## Scripts

```bash
pnpm dev        # start dev server :3000
pnpm build      # tsc + vite build
pnpm preview
pnpm lint       # eslint
pnpm lint:fix
pnpm format     # prettier
```

## Env

Copy `.env.example` → `.env`:

```
VITE_API_URL=http://localhost:3001/api
VITE_APP_TITLE=QP UX Architecture
```

## Styling

`src/index.css` imports `wick-ui-lib/dist/style.css` + `wick-ui-icon/dist/wu-icon.css` then Tailwind layers. Extend Tailwind in `tailwind.config.js` with `var(--wu-*)` tokens (see `wu.bg`, `fontFamily.sans: Fira Sans`).
