const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];
  let count = 1;

  if (str.length === 0) {
    return str;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      if (count > 1) {
        result.push(count);
      }
      result.push(str[i]);
      count = 1;
    }
  }

  return result.join('');
}

module.exports = {
  encodeLine
};
