"use strict";

/**
 * 제 5항 다만 2. '예, 례' 이외의 'ㅖ'는 [ㅔ]로도 발음한다.
 * 'ㅖ'.charCodeAt(0) === 0x1168
 * 'ㅖ' === String.fromCharCode(0x1168)
 * 'ㅔ'.charCodeAt(0) === 0x1166
 * 'ㅔ' === String.fromCharCode(0x1166)
 * 제 5항 다만 3. 자음을 첫소리로 가지고 있는 음절의 'ㅢ'는 [ㅣ]로도 발음한다.
 * 'ㅢ'.charCodeAt(0) === 0x1174
 * 'ㅢ' === String.fromCharCode(0x1174)
 * 제 5항 다만 4. 단어의 첫음절 이외의 '의'는 [ㅣ]로, 조사 '의'는 [ㅔ]로 발음함도 허용한다.
 * ==> 조사는 없다고 가정한다.
 *
 * @module rule05
 *
 * @param {Array} syllables 2-demensional array
 * @param {Function} callback
 * @return {Array} Returns 2D array of Korean syllables if callback is undefined,
 *                 else returns return value of callback function.
 */

module.exports = function (syllables, callback) {
    for (var i = 0; i < syllables.length; i++) {
        if (syllables[i][1].charCodeAt(0) === 0x1168 &&
            syllables[i][0].charCodeAt(0) !== 0x1105 &&
            syllables[i][0].charCodeAt(0) !== 0x110B) { // 제 5항 다만2.
            syllables[i][1] = String.fromCharCode(0x1166);
        }
        if (syllables[i][1].charCodeAt(0) === 0x1174) {
            if (syllables[i][0].charCodeAt(0) !== 0x110B) { // 제 5항 다만3.
                syllables[i][1] = String.fromCharCode(0x1175);
            } else if (i !== 0) { // 제 5항 다만4. ==> 조사는 없다고 가정한다.
                syllables[i][1] = String.fromCharCode(0x1175);
            }
        }
    }

    if (!callback) {
        return syllables;
    } else {
        return callback(syllables);
    }
};
