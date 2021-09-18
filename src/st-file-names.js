import { NotImplementedError } from '../extensions/index.js';

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
export default function renameFiles(names) {
    let newArr = [];
    let keysNames = {};

    const searchEL = (el, arr, keys) => {
        if (arr.indexOf(el) === -1) {
            return el;
        } else {
            return searchEL(el + '(' + keysNames[el]++ + ')', arr, keys);
        }
    }

    for (let i in names) {
        let el = names[i];
        let s = searchEL(el, newArr, keysNames);
        newArr.push(s)
        keysNames[s] = 1;
    }

    return newArr;
}