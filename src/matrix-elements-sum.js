const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = matrix[0].reduce((sum, current) => sum + current, 0);
  for (let e = 1; e < matrix.length; e++) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[e - 1][i] != 0 ? (sum += matrix[e][i]) : null;
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
