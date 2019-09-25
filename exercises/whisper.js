'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:

let whisper = (str) => {
  str = str.toLowerCase();
  return '*' + str + '*';
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(whisper('POUET'), '*pouet*');
assert.strictEqual(whisper('HAHA'), '*haha*');
assert.strictEqual(whisper('HEHEHE'), '*hehehe*');
// End of tests */
