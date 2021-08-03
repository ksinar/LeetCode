/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let len = nums.length;
    let number = Array.from(nums);
    for(let i = 0; i < len; i++){
        number[i + len] = number[i];
    }
    
    return number;
};