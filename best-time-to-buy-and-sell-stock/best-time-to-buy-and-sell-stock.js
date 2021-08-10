/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length;
    let profit = 0;
    let min = prices[0];
    for(let i = 1; i < len; i++){
        min = Math.min(prices[i],min);
        profit = Math.max(profit, prices[i] - min);
    }
    return profit;
};