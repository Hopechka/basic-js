const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let arr = [];
  domains.map((item) => {
    arr.push(item.split('.').reverse());
  });
  //console.log(arr);

  arr.forEach((item) => {
    let name = '.' + item[0];

    for (let i = 0; i <= arr.length; i++) {
      if (!name.includes('undefined')) {
        if (name in obj) {
          ++obj[name];
        } else {
          obj[name] = 1;
        }

        name += '.' + item[i + 1];
      }
    }
  });

  return obj;
}

// console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'])); // {'.ru': 3,'.ru.yandex': 3,'.ru.yandex.code': 1,'.ru.yandex.music': 1,}
// console.log(getDNSStats(['epam.com'])); // { '.com': 1, '.com.epam': 1 });
// console.log(getDNSStats(['epam.com', 'info.epam.com'])); // { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 });
// console.log(getDNSStats([])); // {});

module.exports = {
  getDNSStats,
};
