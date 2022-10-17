const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let num = String(n);
  let arr = Array.from(num)
  let result = []
  for (i = 0; i < arr.length; i++) {
    result.push(+num.replace(num[i], ''))
    
  }
  return Math.max(...result);
}



module.exports = {
  deleteDigit
};
