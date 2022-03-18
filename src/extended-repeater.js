const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  strNew = '';
  //   if (options.separator == undefined) {
  //     options.separator = '+';
  //   }
  //   if (options.additionSeparator == undefined) {
  //     options.additionSeparator = '|';
  //   }
  //   if (options.repeatTimes == undefined) {
  //     options.repeatTimes = 1;
  //   }
  //   if (options.additionRepeatTimes == undefined) {
  //     options.additionRepeatTimes = 1;
  //   }
  //   if (options.addition === undefined) {
  //     options.addition = '';
  //   }
  const obj = {
    repeatTimes: 1,
    separator: '+',
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: '|',
  };
  for (let key in obj) {
    if (options[key] === undefined) {
      options[key] = obj[key];
    }
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    i == 0 ? (strNew += str) : (strNew += options.separator + str);
    for (let n = 0; n < options.additionRepeatTimes; n++) {
      n == options.additionRepeatTimes - 1
        ? (strNew += options.addition)
        : (strNew += options.addition + options.additionSeparator);
    }
  }
  return strNew;
}

// console.log(
//   repeater('STRING', {
//     repeatTimes: 3,
//     separator: '**',
//     addition: 'PLUS',
//     additionRepeatTimes: 3,
//     additionSeparator: '00',
//   })
// ); // => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
// console.log(
//   repeater('TESTstr', {
//     separator: 'ds',
//     addition: 'ADD!',
//     additionSeparator: ')))000',
//   })
// ); // => 'TESTstrADD!'

module.exports = {
  repeater,
};
