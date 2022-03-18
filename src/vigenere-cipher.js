const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class VigenereCipheringMachine {
  constructor(arg) {
    this.arg = arg;
  }
  encrypt(message, key, mode = 1) {
    if (typeof message != 'string' && typeof key != 'string') {
      throw new Error('Incorrect arguments!');
    }
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let res = '';
    let arr = message.split(' '); // шаблон, по которому потом буду собирать строку
    let strNew = arr.join('').toUpperCase(); // строка без пробелов, чтобы подогнать ключ
    if (message.length >= key.length) {
      // подгоняю длинну ключа под длину строки с шифром
      let num = Math.ceil(message.length / key.length);
      for (let i = 0; i < num; i++) {
        key += key;
      }
    }
    let correctKey = key.substring(0, strNew.length).toUpperCase(); // ключ нужной длинны

    for (let i = 0; i < strNew.length; i++) {
      // шифрование/дешифрование строки
      let mi = a.indexOf(strNew[i]);
      let ki = a.indexOf(correctKey[i]);
      let c;
      if (mode === 1) {
        c = a[(a.length + (mi + ki)) % a.length];
      } else {
        c = a[(a.length + (mi - ki)) % a.length];
      }

      res += c;
    }
    let resNew = ''; // добавляю в строку спецсимволы на основании шаблона strNew
    for (let i = 0; i < res.length; i++) {
      if (new RegExp('[a-zA-Z]').test(`${strNew[i]}`)) {
        resNew += res[i];
      } else {
        resNew += strNew[i];
      }
    }
    let answer = ''; //собираю строку по шаблоку arr(массив из строки для шифрования)
    for (let i of arr) {
      answer += resNew.substring(0, i.length) + ' ';
      resNew = resNew.substring(i.length);
    }
    answer = answer.trim();
    if (this.arg != false) {
      return answer;
    } else {
      return answer
        .split(' ')
        .reverse()
        .map((item) => item.split('').reverse().join(''))
        .join(' ');
    }
  }
  decrypt(message, key) {
    return this.encrypt(message, key, -1);
  }
}

const directMachine = new VigenereCipheringMachine();

const reverseMachine = new VigenereCipheringMachine(false);

console.log(directMachine.encrypt('attack at dawn!', 'alphonse')); // => 'AEIHQX SX DLLU!'

console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')); //=> 'ATTACK AT DAWN!'

console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse')); //=> '!ULLD XS XQHIEA'

console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')); //=> '!NWAD TA KCATTA'

module.exports = {
  VigenereCipheringMachine,
};
