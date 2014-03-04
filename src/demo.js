var jamo = require('./jamo/jamo');
var syllables = require('./analysis/syllables');

var str = '헬로우월드';
console.log(str);
jamo.decomposite(str, function (arr) {
    syllables(arr, function (arrs) {
        for (var i in arrs) {
            arrs[i] = jamo.composite(arrs[i]);
        }
        console.log(arrs.join(''));
    });
});

var rule05 = require
console.log('rule05.js test');
