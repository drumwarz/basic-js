const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let result;

  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (date.constructor.name !== 'Date' || date.hasOwnProperty('toString')) {
    throw new Error('Invalid date!');
  }

  if (date.getMonth() < 2 || date.getMonth() == 11) {
    result = 'winter';
  } else if (date.getMonth() > 7 && date.getMonth() < 11) {
    result = 'autumn';
  } else if (date.getMonth() > 4 && date.getMonth() <= 7) {
    result = 'summer';
  } else {
    result = 'spring';
  }

  return result;
}

module.exports = {
  getSeason
};
