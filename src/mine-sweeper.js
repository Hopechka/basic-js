const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let sum = 0;
  let answer = [];
  //клонировала многомерный массив
  for (let i = 0; i < matrix.length; i++) answer.push(matrix[i].slice());
  for (let e = 0; e < matrix.length; e++) {
    for (let i = 0; i < matrix[0].length; i++) {
      let left, right, up, down, upLeft, downLeft, upRight, downRight;
      e == 0 ? (up = false) : (up = matrix[e - 1][i]);
      e == matrix.length - 1 ? (down = false) : (down = matrix[e + 1][i]);
      i == 0 ? (left = false) : (left = matrix[e][i - 1]);
      i == matrix[0].length - 1 ? (right = false) : (right = matrix[e][i + 1]);
      i == 0 || e == 0 ? (upLeft = false) : (upLeft = matrix[e - 1][i - 1]);
      i == 0 || e == matrix.length - 1
        ? (downLeft = false)
        : (downLeft = matrix[e + 1][i - 1]);
      i == matrix[0].length - 1 || e == 0
        ? (upRight = false)
        : (upRight = matrix[e - 1][i + 1]);
      i == matrix[0].length - 1 || e == matrix.length - 1
        ? (downRight = false)
        : (downRight = matrix[e + 1][i + 1]);
      if (up == true) {
        sum++;
      }
      if (down == true) {
        sum++;
      }
      if (right == true) {
        sum++;
      }
      if (left == true) {
        sum++;
      }
      if (upLeft == true) {
        sum++;
      }
      if (downLeft == true) {
        sum++;
      }
      if (upRight == true) {
        sum++;
      }
      if (downRight == true) {
        sum++;
      }
      answer[e][i] = sum;
      sum = 0;
    }
  }

  return answer;
}

console.log(
  minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ])
); //, [
//     [1, 2, 1],
//     [2, 1, 1],
//     [1, 1, 1],
//   ],

module.exports = {
  minesweeper,
};

// let sum = 0;
// let answer = [];
// for (let e = 0; e < matrix.length; e++) {
//   for (let i = 0; i < matrix[0].length; i++) {
//     let left = matrix[e][i - 1];
//     let right = matrix[e][i + 1];
//     let up = matrix[e - 1][i];
//     let down = matrix[e + 1][i];
//     let center = matrix[e][i];
//     if (center == true) {
//       sum++;
//     }
//     if (up == undefined) {
//       up = false;
//     }
//     if (down == undefined) {
//       down = false;
//     }
//     if (e == 0 && i == 0) {
//       if (right == true) {
//         sum++;
//       }
//       if (down == true) {
//         sum++;
//       }
//     } else if (e == 0 && i == matrix[0].length - 1) {
//       if (left == true) {
//         sum++;
//       }
//       if (down == true) {
//         sum++;
//       }
//     } else if (i == 0 && e > 0 && e < matrix.length - 1) {
//       if (up == true) {
//         sum++;
//       }
//       if (down == true) {
//         sum++;
//       }
//       if (right == true) {
//         sum++;
//       }
//     } else if (i == matrix[0].length - 1 && e > 0 && e < matrix.length - 1) {
//       if (up == true) {
//         sum++;
//       }
//       if (down == true) {
//         sum++;
//       }
//       if (left == true) {
//         sum++;
//       }
//     } else if (e == matrix.length - 1 && i == 0) {
//       if (up == true) {
//         sum++;
//       }
//       if (right == true) {
//         sum++;
//       }
//     } else if (e == matrix.length - 1 && i == matrix[0].length - 1) {
//       if (up == true) {
//         sum++;
//       }
//       if (left == true) {
//         sum++;
//       }
//     } else if (
//       e > 0 &&
//       i > 0 &&
//       e < matrix.length - 1 &&
//       i < matrix[0].length - 1
//     ) {
//       if (up == true) {
//         sum++;
//       }
//       if (down == true) {
//         sum++;
//       }
//       if (right == true) {
//         sum++;
//       }
//       if (left == true) {
//         sum++;
//       }
//     }

//     answer.push(sum);
//     sum = 0;
//   }
// }
// return answer;
