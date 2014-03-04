"use strict";
require('unorm');
var codepoints = require('./codepoints');

/**
 * decode
 * take Korean string
 * then returns an array of Korean phonemes
 *
 * @module decomposite
 * @require unorm
 * @require ./codepoints
 *
 * @param {String} phonemes for composite
 * @param {Function} callback A callback function
 * @return {Array} Returns an array of Korean phonemes if callback is undefined,
 *                 else returns return value of callback function.
 */
module.exports = function (string, callback) {

    return codepoints(string.normalize('NFD'), function (array) {

        for (var i in array) {
            array[i] = String.fromCharCode(array[i]);
        }

        if (!callback) {
            return array;
        } else {
            return callback(array);
        }

    });

};
