'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:

let jadenCase = (str) => {
  str = str.toLowerCase();
  str = str.split(" ");
  str = str.map((word) => {
    word = word.split("");
    word[0] = word[0].toUpperCase();
    return word.join("");
  })
  return str.join(" ");
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(jadenCase('bonjour ici !'), 'Bonjour Ici !');
assert.strictEqual(jadenCase('TU ES SERIEUX'), 'Tu Es Serieux');
assert.strictEqual(jadenCase('On est bien'), 'On Est Bien');
// End of tests */
