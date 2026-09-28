const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const app = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');

for (const asset of ['css/style.css', 'js/app.js', 'data.json']) {
  test(`deployable shell includes ${asset}`, () => {
    assert.ok(fs.existsSync(path.join(root, asset)));
    const owner = asset === 'data.json' ? app : html;
    assert.match(owner, new RegExp(asset.replace('.', '\\.'), 'i'));
  });
}

test('deployable shell includes all core external runtime libraries', () => {
  assert.match(html, /chart\.umd\.min\.js/);
  assert.match(html, /aos@2\.3\.1/);
});
