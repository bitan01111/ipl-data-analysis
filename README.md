# IPL Intelligence

Interactive IPL statistics dashboard covering seasons 2008–2024. The project demonstrates client-side data loading, chart rendering, responsive UI, search, comparison workflows, and transparent cricket statistics logic.

## Demo

Live deployment: [IPL Intelligence](https://ipl-intel.netlify.app/)

## Features

- Dashboard with season snapshot, standings, run scorers, wicket takers, toss impact, and match methods
- Season archive with champions, finalists, awards, and title distribution
- Player profiles with filtering, career statistics, form, and comparison
- Team analytics with performance summaries and radar charts
- Venue score and pitch intelligence
- Match predictor using squad strength, head-to-head history, venue, and toss inputs
- Fantasy XI generator with role balance, captain, vice-captain, points, and team value
- Strategy insights, momentum, title distribution, and run-rate trends
- Fuzzy player search with keyboard navigation
- Dark and light themes with responsive desktop and mobile navigation

## Project Structure

```text
ipl-data-analysis/
├── index.html             Application markup and page layout
├── css/style.css          Design tokens, components, and responsive styles
├── js/app.js              Data loading, routing, rendering, and interactions
├── data.json              Curated IPL seasons, teams, players, venues, and matches
├── docs/ARCHITECTURE.md   Runtime flow and ownership boundaries
├── tests/data.test.js     Dataset and version-integrity tests
├── tests/smoke.test.js    Deployable shell and asset checks
├── package.json           Scripts and development dependency metadata
└── README.md              Setup and project documentation
```

## Run Locally

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

Run the integrity tests with:

```bash
npm test
```

## Analytics Notes

The predictor is a transparent heuristic rather than a production betting model. It combines team form, player batting and bowling aggregates, head-to-head records, venue tendencies, and toss context. Fantasy XI selection groups players by role and ranks candidates using the points and price fields in `data.json`.

The dashboard dataset currently ends at the completed 2024 season. Source references and derived fields should be reviewed before using the project for formal cricket analysis.

## Architecture

The application uses a small client-side architecture:

1. `index.html` defines the routed page sections, controls, chart canvases, and modal shells.
2. `data.json` is loaded once during startup and becomes the in-memory application store.
3. `js/app.js` owns routing, search, calculations, event handling, and page rendering.
4. `css/style.css` contains shared design tokens, layout systems, responsive rules, and component styles.
5. Chart.js renders visualizations from the derived values produced by the render functions.
6. `tests/data.test.js` protects the dataset contract, page shell, and season-version alignment.

The predictor and Fantasy XI builder are explanatory portfolio models, not production betting or selection systems. Their assumptions should be reviewed before using the outputs for real decisions.

## Technology

Vanilla HTML, CSS, and JavaScript; Vite for local development; Chart.js and AOS loaded from CDNs; Node's built-in test runner for integrity checks.
