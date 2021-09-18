import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
*/
export default function getMatrixElementsSum(matrix) {
    let count = 0;
    for (let i in matrix) {
        for (let y in matrix[i]) {
            if (matrix[i][y] !== 0) count += matrix[i][y];

            if (
                (y !== 0 && matrix[i][y] === 0 && matrix[i][y - 1] === 0)
                || (y == 0 && matrix[i].length == 1 && matrix[i][y] === 0)
            ) {
                return count;
            }
        }
    }

    return count;
}