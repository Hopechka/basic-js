const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = [...arr];
  newArr.sort((a, b) => a - b);
  let answer = [];
  let some = newArr.lastIndexOf(-1) + 1;
  for (let i = 0; i < newArr.length; i++) {
    if (arr[i] == -1) {
      answer.push(-1);
    } else {
      answer.push(newArr[some]);
      some += 1;
    }
  }
  return answer;
}

module.exports = {
  sortByHeight,
};
