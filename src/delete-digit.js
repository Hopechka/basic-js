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
  arr = [];
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    let str = n.slice(0, i) + n.slice(i + 1);
    arr.push(str);
  }
  return Math.max(...arr);
}

// console.log(deleteDigit(152)); // 52);
// console.log(deleteDigit(1001)); // 101);
// console.log(deleteDigit(10)); // 1);
// console.log(deleteDigit(222219)); // 22229);
// console.log(deleteDigit(109)); // 19);
// console.log(deleteDigit(342)); // 42);

module.exports = {
  deleteDigit,
};
