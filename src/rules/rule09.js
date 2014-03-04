"use strict";

/**
 * 제 09항 받침 'ㄲ, ㅋ', 'ㅅ, ㅆ, ㅈ, ㅊ, ㅌ', 'ㅍ'은 어말 또는
 * 자음 앞에서 각각 대표음[ㄱ, ㄷ, ㅂ]으로 발음한다.
 *
 * @module rule09
 *
 * @param {Array} syllables 2-demensional array
 * @param {Function} callback
 * @return {Array} Returns 2D array of Korean syllables if callback is undefined,
 *                 else returns return value of callback function.
 */

module.exports = function (syllables, callback) {
    for (var i = 0; i < syllables.length; i++) {
        if (syllables[i][2] === null) {
            continue;
        }
        if (i + 1 === syllables.length ||
            syllables[i + 1][0].charCodeAt(0) === 0x110B) {
            switch (syllables[i][2].charCodeAt(0)) {
                case 0x11A8: case 0x11BF:   // ㄲ, ㅋ
                    syllables[i][2] = String.fromCharCode(0x11A8);  // ㄱ
                    break;
                case 0x11BA: case 0x11BB:   // ㅅ, ㅆ
                case 0x11BD: case 0x11BE:   // ㅈ, ㅊ
                case 0x11C0:                // ㅌ
                    syllables[i][2] = String.fromCharCode(0x11AE);  // ㄷ
                    break;
                case 0x11C1:                // ㅍ
                    syllables[i][2] = String.fromCharCode(0x11B8);  // ㅂ
                    break;
                default:
            }
        }
    }

    if (!callback) {
        return syllables;
    } else {
        return callback(syllables);
    }
};
