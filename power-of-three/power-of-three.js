/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    function log3(val) {
        return Math.log(val) / Math.log(3);
    }
    num = log3(n);
    if(Number.isInteger(Math.round(num * 100000000000) / 100000000000)){
        return true;
    }
    return false;
};