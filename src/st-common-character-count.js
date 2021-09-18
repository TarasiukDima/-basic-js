import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
*/
export default function getCommonCharacterCount(s1, s2) {
    if (!s1.length || !s2.length) return 0;

    const searchCommon = (maxStr, minStr) => {
        let count = 0;

        for (let i = 0; i < minStr.length; i++) {
            let ind = maxStr.indexOf(minStr[i]);
            if (ind > -1) {
                count++;
                maxStr = maxStr.slice(0, ind) + maxStr.slice(ind + 1)
            }
        }
        return count
    }

    return (s1.length >= s2.length)
        ? searchCommon(s1, s2)
        : searchCommon(s2, s1);
}