"use strict";

/**
 * 제 30항 사이시옷이 붙은 단어는 다음과 같이 발음한다.
 * // TODO
 *
 * @module rule30
 *
 * @param {Array} syllables 2-demensional array
 * @param {Function} callback
 * @return {Array} Returns 2D array of Korean syllables if callback is undefined,
 *                 else returns return value of callback function.
 */

module.exports = function (syllables, callback) {
    // TODO

    if (!callback) {
        return syllables;
    } else {
        return callback(syllables);
    }
};
