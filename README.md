# Workshop Event Plan

A single-page React app for presenting a workshop's event plan — objectives, agenda, facilitators, logistics, and a live countdown to the event.

Built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [MUI](https://mui.com/).

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser. The dev server supports hot reload.

## Editing content

All event content lives in a single file: [`src/data/eventData.js`](src/data/eventData.js). Every section of the page reads from this file — nothing is hard-coded in the components. To set up a new workshop, replace the `[PLACEHOLDER]` values there (title, date, venue, objectives, agenda, facilitators, logistics, contact info, etc.).

The countdown timer target is built from `event.date`, `event.startTime`, and `event.utcOffset`, so it resolves correctly for visitors in any timezone.

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — build for production into `dist/`
- `npm run preview` — preview the production build locally
