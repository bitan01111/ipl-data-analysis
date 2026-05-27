# 🏏 IPL Intelligence & Analytics Platform

A premium sports analytics dashboard and predictive engine built using standard front-end web technologies. This project is designed to demonstrate clean code separation, statistical data modeling, and interactive UI engineering.

## 🚀 Live Demo
👉 **[View Live Platform](https://ipl-intel.netlify.app/)**

---

## 📂 Project Structure

To maintain clean architecture and code separation, the project is structured as follows:

```
ipl-data-analysis/
│
├── index.html            # Main markup and application entry point
├── .gitignore            # Git exclusion rules for OS/IDE temp files
├── README.md             # Project documentation and engineering guide
│
├── css/
│   └── style.css         # UI Design tokens, responsive grid layouts, and animations
│
└── js/
    └── app.js            # State management, data stores, and prediction algorithms
```

### File Details
* **`index.html`**: Defines the semantic layout of the application, including the stats dashboards, team compare workspace, pitch view, and mobile navigation overlays.
* **`css/style.css`**: Built with CSS Custom Properties (CSS variables) for full Dark/Light mode theme configurations. Features modern glassmorphic overlays, responsive flex and grid layouts, and hardware-accelerated transitions.
* **`js/app.js`**: Contains the core application engine. Houses the active multi-season dataset (2008–2025), handles user interaction routing, runs the fuzzy-search queries, and executes statistical models.

---

## 🛠️ Engineering Highlights & Algorithms

### 1. Statistical Match Prediction Engine
Unlike black-box models, the match predictor uses a transparent weighted algorithm based on actual match records:
- **Squad Strength (60%)**: Calculates batting depth (aggregated player strike rates and averages) versus bowling strength (aggregated player economy rates and wickets).
- **Head-to-Head Records (20%)**: Factors in historical win/loss ratios between the selected teams.
- **Venue & Toss Advantage (20%)**: Calculates home-ground win rates and maps pitch character profiles (e.g., spin-friendly vs batting-paradise) against the teams' line-up styles.

### 2. Fantasy XI Optimization Algorithm
The squad generator runs an automated selection pass to build the highest-value playing eleven under standard budget constraints:
- Evaluates individual player form and multi-season points yields.
- Groups candidates by role (Batters, Bowlers, All-rounders, Wicketkeepers).
- Ensures team compliance (correct ratio of roles and selection constraints).

### 3. Fuzzy Search & Keyboard Navigation
- **Search Queries**: Employs character-distance mapping to match player names on partial inputs (e.g., `vrat` → `Virat Kohli`).
- **Interactive UI**: Supports standard accessibility shortcuts (`ArrowUp` / `ArrowDown` for navigation, `Enter` to select, and `Escape` to dismiss).

---

## 💻 Local Setup (Zero Dependencies)

This application is built with standard web specs and requires **no compilation, bundlers, or package installations**:

1. Clone the repository:
   ```bash
   git clone https://github.com/bitan01111/ipl-data-analysis.git
   ```
2. Serve locally or open directly:
   ```bash
   # Option A: Start a simple server using Python
   python -m http.server 8000
   
   # Option B: Run via Node.js
   npx serve .
   ```
   *Or double-click `index.html` to open it in your browser directly.*
