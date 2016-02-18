/**
 * Created by jalava on 2/18/2016.
 */
(function () {
    var cyclicRotation = {};

    /**
     * Will rotate the indexes for array A, K number of indexes to the right.
     * @param {Array} A the array to shift
     * @param {Number} K the number of shifts
     * @return {Array} A new, transformed array based on A
     */
    cyclicRotation.run = function solution(A, K) {
        var result = [],
            length = A.length,
            largestIndex = A.length - 1;

        A.forEach(function (val, key, list) {
            var newIndex = key;
            var buffK = K;

            while (buffK != 0) {
                newIndex = newIndex + 1;

                if (newIndex > largestIndex) {
                    newIndex = 0;
                }

                buffK = buffK - 1;
            }

            result[newIndex] = val;
        });

        return result;
    };

    module.exports = cyclicRotation;
})();