const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let em = email.split('');
  let temp;
  for (let i = 0; i < em.length; i++) {
    if (em[i] === '@') {
      temp = i;
    }
  }
  let res = email.slice(temp + 1, email.length);
  return res;
}

module.exports = {
  getEmailDomain
};
