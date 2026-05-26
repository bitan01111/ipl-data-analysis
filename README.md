# 🏏 IPL Intelligence Platform 2026

A premium, recruiter-ready sports analytics platform built using pure front-end web technologies. This application showcases highly responsive UI design, statistical predictive models, clean Javascript state management, and optimized data visualization.

## 🚀 Live Demo
👉 **[View Live Platform](https://bitan01111.github.io/ipl-data-analysis/)**

---

## 🛠️ Tech Stack & Engineering Highlights

- **Languages**: HTML5, Vanilla CSS3 (Custom-designed variables, dark/light theme systems, premium motion design, responsive grids).
- **Logic & Calculations**: Vanilla Javascript (ES6+), offering search indexing, fuzzy match, and deduplication algorithms.
- **Charts & Insights**: Dynamic radar, line, and bar charts powered by **Chart.js** (CDN).
- **Match Predictor Engine**: Custom statistical engine factoring in:
  - Batter depth & bowler quality metrics
  - Head-to-Head win ratios
  - Ground/venue advantage & toss-winner preference
- **Fantasy XI Optimizer**: Algorithmic selection of the best performing 11-player squad based on multi-season performance metrics.

---

## 🎯 Architecture & Optimization Features

1. **Premium Player Dashboard**: Fully customized three-column player view containing recent form indicators, match trends via Chart.js, and stats breakdown tab switches.
2. **Fuzzy Search & Keyboard Navigation**: Instant matching on queries (e.g., `vrat` → `Virat Kohli`) with full keyboard `ArrowUp`/`ArrowDown`/`Enter` support.
3. **Responsive & Mobile Bottom Sheets**: Clean navigation header on desktop, automatically transforming into an interactive mobile tab bar with a slide-up "More" drawer overlay.
4. **Fallback Graphics**: Dynamic SVG generator (`getInitialsSVG`) displaying theme-consistent visual avatars when Wikipedia images are missing/unreachable.

---

## 💻 Local Setup (Zero Dependencies)

Since this is built with pure web standards, there are **no installation or build steps required**:

1. Clone the repository:
   ```bash
   git clone https://github.com/bitan01111/ipl-data-analysis.git
   ```
2. Open `index.html` directly in any web browser, or serve it locally:
   ```bash
   # Using Python's built-in server
   python -m http.server 8000
   
   # Or using Node.js npx
   npx serve .
   ```
