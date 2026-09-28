# Architecture

## Runtime Flow

```text
index.html
    |
    +-- css/style.css
    +-- Chart.js and AOS CDN assets
    +-- js/app.js
             |
             +-- data.json
             +-- in-memory application state
             +-- page renderers and interaction handlers
```

The app is a client-side single-page dashboard. `index.html` contains the page shells and controls. `js/app.js` loads `data.json` once, stores the collections in memory, routes between page sections, derives analytics, and renders charts and interactive views. `css/style.css` owns the visual system, layouts, component states, and responsive breakpoints.

## Data Flow

1. The browser loads the HTML shell and third-party visualization assets.
2. `js/app.js` fetches `data.json` during the `load` event.
3. The loaded collections populate the dashboard, season, player, team, venue, predictor, Fantasy XI, and insights views.
4. User actions update the current view and redraw only the charts owned by that view.
5. `tests/data.test.js` and `tests/smoke.test.js` protect the data contract and deployable shell.

## Boundaries

- `data.json`: curated application data and derived statistics.
- `js/app.js`: UI state, calculations, routing, and event behavior.
- `css/style.css`: presentation only.
- `tests/`: Node-based checks that do not require a browser download.

The predictor and Fantasy XI builder are transparent portfolio heuristics. They are not production betting or team-selection systems.
