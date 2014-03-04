"use strict";
require('unorm');

/**
 * encode
 * take an array of Korean phonemes
 * to generate string
 *
 * @module composite
 * @require unorm
 *
 * @param {String} phonemes for composite
 * @param {Function} callback A callback function
 * @return {String} Returns string if callback is undefined
 *                  else returns return value of callback function.
 */
module.exports = function (array, callback) {
    var string = array.join('').normalize('NFC');

    if (!callback) {
        return string;
    } else {
        return callback(string);
    }
};
