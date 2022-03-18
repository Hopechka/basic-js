const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  constructor(arr) {
    this.arr = arr;
  }
  calculateDepth(arr) {
    let sum = 1;
    for (let i of arr) {
      if (Array.isArray(i)) {
        arr = arr.flat();
        sum += this.calculateDepth(arr);
        break;
      }
    }

    return sum;
  }
}

//const depthCalc = new DepthCalculator();
//depthCalc.calculateDepth({}); // => 1
//depthCalc.calculateDepth([1, 2, 3, 4, 5]); // => 1
//depthCalc.calculateDepth([1, 2, 3, [4, 5]]); // => 2
//depthCalc.calculateDepth([[[]]]); // => 3
//depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]); // => 4
// depthCalc.calculateDepth([
//   1,
//   [8, [[]]],
//   2,
//   3,
//   [8, []],
//   4,
//   5,
//   ['6575', ['adas', ['dfg', [0]]]],
// ]); //, 5);

module.exports = {
  DepthCalculator,
};
