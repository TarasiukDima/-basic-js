import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
*/
export default function calculateHanoi(disksNumber, turnsSpeed) {
    let result = {
        turns: countTurns(disksNumber),
        seconds: 0
    }
    result.seconds = Math.floor(3600 / turnsSpeed * result.turns);
    return result;
}

function countTurns(disksNumber) {
    let count = 0;

    if (disksNumber == 1) {
        count++;
    } else {
        count += countTurns(disksNumber - 1) * 2;
        count += countTurns(1);
    }

    return count;
};
