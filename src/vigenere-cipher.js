import { NotImplementedError } from '../extensions/index.js';

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
export default class VigenereCipheringMachine {
    constructor(varient = true) {
        this.varient = varient;
        this.words = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    }
    encrypt() {
        if (arguments.length < 2 || typeof (arguments[0]) !== 'string') throw new Error('Incorrect arguments!');

        let str = arguments[0];
        let keyStr = arguments[1];
        let keyStrLength = keyStr.length;
        let newStr = '';
        let r = 0;

        for (let i in str) {
            if (this.words.indexOf(str[i].toLowerCase()) !== -1) {
                let indStrChar = this.words.indexOf(str[i].toLowerCase());
                let indKeyChar = this.words.indexOf(keyStr[r % keyStrLength].toLowerCase());
                let res = (indStrChar + indKeyChar) % 26;
                newStr += this.words[res].toUpperCase();
                r++;

            } else {
                newStr += str[i];
            }
        }

        return this.varient ? newStr : newStr.split('').reverse().join('')
    }

    decrypt() {
        if (arguments.length < 2 || typeof (arguments[0]) !== 'string') throw new Error('Incorrect arguments!');

        let str = arguments[0];
        let keyStr = arguments[1];
        let keyStrLength = keyStr.length;
        let newStr = '';
        let r = 0;

        for (let i in str) {
            if (this.words.indexOf(str[i].toLowerCase()) !== -1) {
                let indStrChar = this.words.indexOf(str[i].toLowerCase());
                let indKeyChar = this.words.indexOf(keyStr[r % keyStrLength].toLowerCase());
                let res = (indStrChar - indKeyChar);
                if (res < 0) {
                    res += 26;
                }
                newStr += this.words[res].toUpperCase();
                r++;

            } else {
                newStr += str[i];
            }
        }

        return this.varient ? newStr : newStr.split('').reverse().join('')
    }
}
