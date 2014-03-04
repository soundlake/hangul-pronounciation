"use strict";

/**
 * 제 29항 합성어 및 파생어에서, 앞 단어나 접두사의 끝이 자음이고
 * 뒤 단어나 접미사의 첫음절이 '이, 야, 여, 요, 유'인 경우에는,
 * 'ㄴ'음을 첨가하여 [니, 냐, 녀, 뇨, 뉴]로 발음한다.
 * // TODO
 *
 * @module rule29
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
