import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
*/
export default function minesweeper(matrix) {
    const searchMines = (matrix, i, y) => {
        if (matrix[i][y] === true) return 1;
        let count = 0;

        if ((matrix[i].length - 2) > y && matrix[i][y + 1] === true) count++;
        if (0 < y && matrix[i][y - 1] === true) count++;
        if ((matrix.length - 2) > i && matrix[i + 1][y] === true) count++;
        if ((matrix.length - 2) > i && (matrix[i].length - 2) > y && matrix[i + 1][y + 1] === true) count++;
        if ((matrix.length - 2) > i && 0 < y && matrix[i + 1][y - 1] === true) count++;
        if (0 < i && matrix[i - 1][y] === true) count++;
        if (0 < i && (matrix[i].length - 2) > y && matrix[i - 1][y + 1] === true) count++;
        if (0 < i && 0 < y && matrix[i - 1][y - 1] === true) count++;

        return count;
    }

    let newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        newMatrix[i] = [];
        for (let y = 0; y < matrix[i].length; y++) {
            let count = searchMines(matrix, i, y)
            newMatrix[i].push(count);
        }
    }

    return newMatrix;
}
