'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:

let cutFirst = (str) => {
  str = str.split("");
  str = str.splice(0, 2);
  return str.join("");
}

let cutLast = (str) => {
  let len = str.length;
  str = str.split("");
  str = str.splice(len-2, 2);
  return str.join("");
}

let cutFirstLast = (str) => {
  str = cutFirst(str);
  str = cutLast(str);
  return str;
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(cutFirstLast('HAHAOU'), 'HA');
assert.strictEqual(cutFirstLast('HEHEHE'), 'HE');
// End of tests */
