const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  console.log(names);
  let arr = [];
  names.forEach((i, index) => {
    //console.log(arr);
    let newArr = names.slice(0, index + 1).filter((a) => a == i);
    //console.log(newArr);
    if (arr.find((item) => item == i)) {
      newArr.length == 1
        ? arr.push(`${i}(${newArr.length})`)
        : arr.push(`${i}(${newArr.length - 1})`);
    } else {
      arr.push(i);
    }
  });
  return arr;
}

console.log(
  renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc(1)(1)', 'doc(1)(1)'])
); // ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']);
// console.log(renameFiles(['a', 'b', 'cd', 'b ', 'a(3)'])); // ['a', 'b', 'cd', 'b ', 'a(3)']);
// console.log(renameFiles([])); // []);
console.log(renameFiles(['file', 'file', 'image', 'file(1)', 'file'])); // ["file", "file(1)", "image", "file(1)(1)", "file(2)"]

module.exports = {
  renameFiles,
};
