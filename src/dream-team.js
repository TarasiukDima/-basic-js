import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
*/
export default function createDreamTeam(names) {
    if (!Array.isArray(names)) return false
    let code = names.reduce((acc, name) => {
        return (typeof (name) === 'string')
            ? acc += name.trim()[0].toUpperCase()
            : acc;
    }, '');

    if (!code.length) return false;
    return code.split('').sort().join('');
}
