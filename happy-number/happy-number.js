/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var seen = {};
    
    seen[n] = true;

    while (true) {
        n = n.toString()
            .split('')
            .map(function(digit){ return parseInt(digit, 10); })
            .reduce(function(total, digit) { return total + digit * digit; }, 0);

        if (n === 1) {
            return true;
        } else if (seen[n]) {
            return false;
        } else {
            seen[n] = true;
        }
    }
};