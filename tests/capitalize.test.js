import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error("The function isn't working correctly!");
}

if (capitalize('') !== '') {
  throw new Error("The function isn't working correctly!");
}

console.log('All tests passed!');
