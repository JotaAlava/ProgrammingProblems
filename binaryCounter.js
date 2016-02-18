/**
 * Created by jalava on 2/18/2016.
 */
(function () {
    var binaryCounter = {};

    /**
     * Will count the number of consecutive zeroes that is surrounded by ones in a binary representation of N
     * @param {Number} The number to convert to binary
     * @return {Number} The longest gap in the binary form of N
     */
    binaryCounter.run = function solution(N) {
        var result = [0],
            shouldCount = false,
            gapCounter = 0,
            binary = dec2bin(N);

        for (var i = 0, len = binary.length; i < len; i++) {
            var val = binary[i];

            if (shouldCount) {
                if (equalToOne(val)) {
                    result.push(gapCounter);
                    gapCounter = 0;
                } else {
                    gapCounter = gapCounter + 1;
                }
            } else {
                if (equalToOne(val)) {
                    shouldCount = true;
                }
            }
        }

        return Math.max.apply(null, result);
    };

    /**
     * Will convert a decimal to binary string
     * @param {Number} The decimal to convert
     * @return {String} Binary represenation of number
     */
    function dec2bin(dec) {
        return (dec >>> 0).toString(2);
    }

    /**
     * Compares a string 1 with the given value
     * @param {String} String to compare against
     * @return {Boolean} True if the string is '1'
     */
    function equalToOne(val) {
        return val === '1';
    }

    module.exports = binaryCounter;
})();