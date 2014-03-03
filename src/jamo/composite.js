"use strict";

/**
 * encode
 * take an array of Korean phonemes
 * to generate string
 *
 * @module composite
 *
 * @param {String} phonemes for composite
 * @param {Function} callback A callback function
 * @return {String} returns 
 */
module.exports = function (array, callback) {
    var string = array.join('');
    callback(string);
};
