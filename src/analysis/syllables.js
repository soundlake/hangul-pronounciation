"use strict";

/**
 * Take an array of phonemes then
 * categorize them by each syllable
 *
 * @module syllable
 *
 * @param {Array} phonemes
 * @param {Function} callback
 * @return {Array} Returns 2D array of Korean syllables if callback is undefined,
 *                 else returns return value of callback function.
 */

module.exports = function (phonemes, callback) {
    var syllables = [],
        chosung = [];   // index of chosung

    // find index of chosungs
    for (var i in phonemes) {
        var codepoint = phonemes[i].charCodeAt(0);
        if (codepoint >= 0x1100 && codepoint <= 0x1160) {
            chosung.push(i);
        }
    }

    // classify phonemes into syllables
    for (var i = 0; i < chosung.length; i++) {
        var syllable;

        if (i + 1 < chosung.length) {
            syllable = phonemes.slice(chosung[i], chosung[i + 1]);
        } else {
            syllable = phonemes.slice(chosung[i], phonemes.length);
        }

        if (syllable.length < 3) {
            syllable.push(null);
        }
        syllables.push(syllable);
    }

    if (!callback) {
        return syllables;
    } else {
        return callback(syllables);
    }
};
