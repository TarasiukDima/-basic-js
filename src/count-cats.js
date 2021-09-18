import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
*/
export default function countCats(matrix) {
    return matrix.reduce((acc, el) => {
        if (Array.isArray(el)) {
            let count = 0;
            for (let i = 0; i < el.length; i++) {
                if (el[i] === '^^') count++;
            }
            return acc += count;
        }

        if (el == '^^') return acc += 1;
    }, 0)
}
