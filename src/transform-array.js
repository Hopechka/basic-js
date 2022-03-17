const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length == 0) {
    return arr;
  }

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--double-next') {
      newArr.push(arr[i + 1]);
    } else if (arr[i] == '--double-prev') {
      newArr.push(arr[i - 1]);
    } else if (arr[i] == '--discard-prev') {
      newArr.pop();
    } else if (arr[i] == '--discard-next') {
      newArr.push(arr[i + 2]);
      i += 2;
    } else {
      newArr.push(arr[i]);
    }
  }

  newArr.filter((item, index) => {
    if (
      item == undefined ||
      item == '--discard-prev' ||
      item == '--double-prev' ||
      item == '--discard-next' ||
      item == '--double-next'
    ) {
      newArr.splice(index, 1);
    }
  });

  return newArr;
}

module.exports = {
  transform,
};
