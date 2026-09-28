const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'src', 'data', 'data.json'), 'utf8'));
const appSource = fs.readFileSync(path.join(root, 'src', 'app.js'), 'utf8');
const htmlSource = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

test('dataset contains the documented latest season and core collections', () => {
  assert.equal(data.SEASON_WINNERS.at(-1).year, 2024);
  assert.equal(data.TEAMS.length, 10);
  assert.ok(data.PLAYERS.length >= 100);
  assert.ok(data.VENUES.length >= 10);
  assert.ok(data.MATCHES.length > 0);
});

test('player and team identifiers are unique', () => {
  const playerIds = data.PLAYERS.map(player => player.id);
  const teamIds = data.TEAMS.map(team => team.id);

  assert.equal(new Set(playerIds).size, playerIds.length);
  assert.equal(new Set(teamIds).size, teamIds.length);
});

test('application source stays aligned with the dataset version', () => {
  assert.doesNotMatch(appSource, /2025/);
  assert.match(appSource, /DATA_YEAR/);
  assert.doesNotMatch(appSource, /Default to random/);
});

test('application shell exposes every routed page and data entry point', () => {
  const pages = ['dashboard', 'seasons', 'players', 'teams', 'compare', 'venues', 'predictor', 'fantasy', 'insights'];

  for (const page of pages) {
    assert.match(htmlSource, new RegExp(`id="page-${page}"`));
    assert.match(htmlSource, new RegExp(`data-page="${page}"`));
  }

  assert.match(appSource, /fetch\(['"]src\/data\/data\.json['"]\)/);
});
