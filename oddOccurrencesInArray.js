/**
 * Created by jalava on 2/19/2016.
 */
(function () {
    var oddOccurrencesInArray = {};

    /**
     * Will return the first instance of an unpaired value in the given array
     * @param {Array} The array to operate on
     * @return {Number} The value that is unpaired within the given array
     */
    oddOccurrencesInArray.run = function solution(A) {
        var result = 0,
            metNumbers = {};

        A.forEach(function (val, key, list) {
            if (metNumbers.hasOwnProperty(val)) {
                metNumbers[val] = metNumbers[val] + 1;
            } else {
                metNumbers[val] = 1;
            }
        });

        var keys = Object.keys(metNumbers);
        keys.some(function (numberMet, key, list) {
            var timesNumberMet = metNumbers[numberMet];

            if (result === 0 && timesNumberMet % 2 !== 0){
                result = numberMet;
                return true;
            }
        });

        return parseInt(result);
    };

    module.exports = oddOccurrencesInArray;
})();