/**
 * Created by jalava on 2/18/2016.
 */
var binaryCounter = require('./binaryGap'),
    cyclicRotation = require('./cyclicRotation'),
    oddOccurrencesInArray = require('./oddOccurrencesInArray'),
    frogJmp = require('./frogJmp'),
    permMissingElm = require('./permMissingElm');

var N = [2,3,1,5];
console.log(permMissingElm.run(N));

var N = [2,3,1,5,4];
console.log(permMissingElm.run(N));

var N = [2,3,5,4];
console.log(permMissingElm.run(N));

var N = [1];
console.log(permMissingElm.run(N));

var N = [2];
console.log(permMissingElm.run(N));

var N = [];
console.log(permMissingElm.run(N));