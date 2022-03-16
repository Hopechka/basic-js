const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  if (arr.length == 0) {
    return false;
  }
  let newArr = [];
  for (let name of arr) {
    if (typeof name == 'string') {
      name = name.trim();
      name = name[0].toUpperCase();
      newArr.push(name);
    }
  }
  return newArr.sort().join('');
}

module.exports = {
  createDreamTeam,
};
