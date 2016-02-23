/**
 * Created by jalava on 2/18/2016.
 */
(function () {
    var frogJmp = {};

    /**
     * Will figure out how many 'frog jumps' are required for the frog to cross the road
     * @param {Number} X Starting point (how close to target)
     * @param {Number} Y The target distance to traverse
     * @param {Number} D Distance covered by each jump
     * @return {Number} The number of jumps required
     */
    frogJmp.run = function solution(X,Y,D) {
        return Math.ceil((Y - X) / D);
    };

    module.exports = frogJmp;
})();