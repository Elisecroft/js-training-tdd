'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:

let keepFirst = (str) => {
  str = str.split("");
  let firstStr = str[0] + str[1];
  return firstStr;
}

let keepLast = (str) => {
  str = str.split("");
  let strLen = str.length;
  let lastStr = str[strLen - 2] + str[strLen - 1];
  return lastStr;
}

let keepFirstLast = (str) => {
  str = keepFirst(str);
  str = keepLast(str);
  return str;
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(keepFirstLast('HAHA'), 'HA');
assert.strictEqual(keepFirstLast('HEHEHE'), 'HE');
// End of tests */
