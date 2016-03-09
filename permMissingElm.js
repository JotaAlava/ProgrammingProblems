/**
 * Created by jalava on 2/18/2016.
 */
(function () {
    var permMissingElm = {};

    /**
     * Will count the number of consecutive zeroes that is surrounded by ones in a binary representation of N
     * @return {Number} The longest gap in the binary form of N
     * @param A Array of elements to search on
     */
    permMissingElm.run = function solution(A) {
        var sumOfIncompleteSequence,
            expectedSequenceSizeForGivenLength,
            result;

        if (A.length === 0) {
            result = 1;
        } else {
            sumOfIncompleteSequence = A.reduce(function (a, b) {
                return b + a;
            });

            expectedSequenceSizeForGivenLength = sumOfSequence(A.length + 1, 1, A.length + 1);

            result = expectedSequenceSizeForGivenLength - sumOfIncompleteSequence;
        }

        return result;
    };

    /**
     * Will convert a decimal to binary string
     * @return {Number} The sum of the series
     * @param n Length of series
     * @param a1 First of series
     * @param an Last of series
     */
    function sumOfSequence(n, a1, an) {
        var aPlusAN = (a1 + an);
        var multiResult = (n * aPlusAN);
        var finalResult = multiResult / 2;
        return finalResult;
    }

    module.exports = permMissingElm;
})();