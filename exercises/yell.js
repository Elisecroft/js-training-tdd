'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:

let yell = (str) => {
  str = str.toUpperCase();
  return str;
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(yell('pouet'), 'POUET');
assert.strictEqual(yell('haha'), 'HAHA');
assert.strictEqual(yell('hehehe'), 'HEHEHE');
// End of tests */
