import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
    if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");

    let newArr = [...arr];
    let operations = {
        discard: {
            '--discard-next': 1,
            '--discard-prev': -1,
        },
        double: {
            '--double-next': 1,
            '--double-prev': -1,
        },
    }

    for (let i = 0; i < newArr.length; i++) {
        if (typeof (newArr[i]) === 'string' && newArr[i].startsWith('--')) {
            if (newArr[i].startsWith('--discard')) {
                newArr[i + operations.discard[newArr[i]]] = '';
                newArr[i] = '';
            } else if (newArr[i].startsWith('--double')) {
                newArr[i] = newArr[i + operations.double[newArr[i]]] || '';
            }
        }
    }
    return newArr.filter(el => el !== '')
}