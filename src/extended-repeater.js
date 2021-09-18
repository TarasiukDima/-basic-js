import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 export default function repeater( str, options ) {
    let newStr = str;
    let substr = '';
    let newOptions = {
        repeatTimes: 1, // устанавливает количество повторений строки;
        separator: '+', //строка, разделяющая повторы str;
        addition: '', //это дополнительная строка, которая будет добавляться к каждому повторению строки str;
        additionRepeatTimes: 1, //устанавливает количество повторений сложения;
        additionSeparator: '|', //это строка, разделяющая повторы добавления
        ...options
    }

    let {
        repeatTimes,
        separator,
        addition,
        additionRepeatTimes,
        additionSeparator
    } = newOptions;

    while (additionRepeatTimes > 0) {
        newStr += addition + (additionRepeatTimes > 1 ? additionSeparator : '')
        additionRepeatTimes--;
    }

    while (repeatTimes > 0) {
        substr += newStr + (repeatTimes > 1 ? separator : '')
        repeatTimes--;
    }

    return substr;
}
