/**
 * @param {number[]} prices
 * @return {number}
 */

/*
1. L = Buy , R = Sell
2. L < R , 
*/
var maxProfit = function (prices) {
  let max = 0;
  let l = 0;
  let r = l + 1;
  while (l < prices.length - 1) {
    let buy = prices[l];
    if (prices[l] < prices[r]) {
      max = Math.max(max, prices[r] - buy);
      r++;
    } else {
      l++;
      r = l + 1;
    }
    if (r >= prices.length) {
      l++;
      r = l + 1;
    }
  }
  return max;
};
