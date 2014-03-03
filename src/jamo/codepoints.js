"use strict";

/**
 * condepoints
 * take string as a parameter then
 * returns codepoints of phonemes
 *
 * @module codepoints
 *
 * @param {String} string Input string to process
 * @param {Function} callback A callback function
 * @return {Array} Returns array of codepoints if callback is undefined,
 *                 else returns return value of callback function.
 */
module.exports = function (string, callback) {

    var array = string.split('').map(function (chr) {

        var codepoint = chr.charCodeAt(0);

        if (codepoint >= 0x1100 && codepoint < 0x1200 ||    // Hangul Jamo
            codepoint >= 0x3130 && codepoint < 0x3190 ||    // Hangul Compatibility Jamo
            codepoint >= 0xA960 && codepoint < 0xAC00 ||    // Hangul Jamo Extended-A
            codepoint >= 0xAC00 && codepoint < 0xD7B0 ||    // Hnagul Syllables
            codepoint >= 0xD7B0 && codepoint < 0xD800) {    // Hangul Jamo Extended-B
            return '0x' + codepoint.toString(16).toUpperCase();
        } else {
            throw err;
        }

    });

    if (!callback) {
        return array;
    } else {
        callback(array);
    }

};


