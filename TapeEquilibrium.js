/**
 * Created by Jose on 7/27/2017.
 */
'use strict'
var tapeEquilibrium = (A)=> {
  let result = Number.MAX_SAFE_INTEGER;

  let total = 0;
  A.forEach((val, key, list)=> {
    total = total + val
  });

  let i = 0,
    left  = 0,
    right = total;
  while (i < A.length - 1) {
    right = right - A[i];
    left = left + A[i];

    var difference = Math.abs(left - right);
    result = difference < result ? difference : result;

    i++;
  }

  return result;
};

var a = [
  [3, 1, 2, 4, 3],
  [-1000, 1000, 9],
  [1, 2]
];
a.forEach((val, key, list)=> {
  console.log(tapeEquilibrium(val))
});