import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
*/
export default function getDNSStats(domains) {
    let dns = {};

    domains.forEach((el) => {
        let arr = el.split('.');
        let lengthArr = arr.length;

        for (let i = (lengthArr - 1); i >= 0; i--) {
            let strDns = '.' + arr.slice(i).reverse().join('.');
            dns[strDns] = (dns[strDns] + 1) || 1;
        }
    })

    return dns;
}
