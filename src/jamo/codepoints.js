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

        return (codepoint >= 33 && codepoint <= 126) ?
            JSON.stringfy(chr) :
            '0x' + codepoint.toString(16).toUpperCase();

    });

    if (!callback) {
        return array;
    } else {
        callback(array);
    }

};


