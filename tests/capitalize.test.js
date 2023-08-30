import capitalize from '../src/capitalize.js';

import { strict as assert } from 'node:assert';

assert.strictEqual(capitalize('hello'), 'Hello');

assert.strictEqual(capitalize(''), '');

console.log('All tests passed!');
