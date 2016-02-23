/**
 * Created by jalava on 2/18/2016.
 */
var binaryCounter = require('./binaryCounter'),
    cyclicRotation = require('./cyclicRotation'),
    oddOccurrencesInArray = require('./oddOccurrencesInArray'),
    frogJmp = require('./frogJmp');

// Happy path for odd occurrences in array
var x = 0,
    y = 91,
    d = 30;
console.log(frogJmp.run(x,y,d));