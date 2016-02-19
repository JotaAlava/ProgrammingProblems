/**
 * Created by jalava on 2/18/2016.
 */
var binaryCounter = require('./binaryCounter'),
    cyclicRotation = require('./CyclicRotation'),
    oddOccurrencesInArray = require('./oddOccurrencesInArray');

// Happy path for odd occurrences in array
var testN = [9,3,9,3,9,7,9];
console.log(oddOccurrencesInArray.run(testN));