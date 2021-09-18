import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
*/
export default function deleteDigit(n) {
    let arr = n.toString().split('').map(el => +el);
    console.log(arr);
    let min = arr.reduce((acc, el) => {
        if (el < acc) {
            return acc = el;
        } else {
            return acc;
        }
    }, arr[0]);
    let indMin = arr.indexOf(min);
    return +[...arr.slice(0, indMin), ...arr.slice(indMin + 1)].join('');
}