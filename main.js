/**
 * Created by jalava on 2/18/2016.
 */
var binaryCounter = require('./binaryCounter'),
    cyclicRotation = require('./CyclicRotation');

// Happy path for binary counter.
var N = 9;
console.log(binaryCounter.run(N));

// Sanity
var N = 1041;
console.log(binaryCounter.run(N));

// Happy path for cyclic rotation.
var testA = [3, 8, 9, 7, 6],
    testK = 3;

console.log(cyclicRotation.run(testA, testK));