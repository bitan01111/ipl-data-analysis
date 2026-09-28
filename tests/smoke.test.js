const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const app = fs.readFileSync(path.join(root, 'src', 'app.js'), 'utf8');

for (const asset of ['src/styles/style.css', 'src/app.js', 'src/data/data.json']) {
  test(`deployable shell includes ${asset}`, () => {
    assert.ok(fs.existsSync(path.join(root, asset)));
    const owner = asset.endsWith('/data.json') ? app : html;
    assert.match(owner, new RegExp(asset.replaceAll('.', '\\.'), 'i'));
  });
}

test('deployable shell includes all core external runtime libraries', () => {
  assert.match(html, /chart\.umd\.min\.js/);
  assert.match(html, /aos@2\.3\.1/);
});
