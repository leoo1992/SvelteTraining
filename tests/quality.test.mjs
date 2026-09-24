import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

test('baseline de qualidade está presente', () => {
  for (const path of ['README.md', 'LICENSE', '.env.example', '.github/workflows/quality.yml']) {
    assert.equal(existsSync(path), true, path + ' deve existir');
  }
});

test('README possui documentação', () => {
  assert.ok(readFileSync('README.md', 'utf8').trim().length > 20);
});
