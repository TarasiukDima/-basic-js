import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
*/
export default function dateSample(sampleActivity) {
    if (
        typeof (sampleActivity) !== 'string'
        || sampleActivity.trim() === ''
        || +sampleActivity !== +sampleActivity
        || +sampleActivity <= 0
    ) return false;

    const MODERN_ACTIVITY = 15;
    const HALF_LIFE_PERIOD = 5730;
    let years = HALF_LIFE_PERIOD * Math.log2(MODERN_ACTIVITY / +sampleActivity);

    return (years <= 0)
        ? false
        : Math.ceil(years);
}