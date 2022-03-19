const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    //console.log(str[i]);
    //console.log(new RegExp(`${str[i]}{2,}`).test(str));
    //проверка на повторяющиеся буквы
    if (new RegExp(`${str[i]}{2,}`).test(str)) {
      //вывожу массив с совпадениями и измеряю длинну совпадающих букв
      let matches = str.match(new RegExp(`${str[i]}{2,}`));
      //console.log(matches[0].length);
      arr.push(matches[0].length);
      arr.push(str[i]);
      i += matches[0].length - 1;
    } else {
      arr.push(str[i]);
    }
  }
  return arr.join('');
}

// console.log(encodeLine('aaaatttt')); //'4a4t');
// console.log(encodeLine('aabbccc')); //'2a2b3c');
// console.log(encodeLine('abbcca')); //'a2b2ca');
// console.log(encodeLine('xyz')); //'xyz');
// console.log(encodeLine('')); //'');

module.exports = {
  encodeLine,
};
