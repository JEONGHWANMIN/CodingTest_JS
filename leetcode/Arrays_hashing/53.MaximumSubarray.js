/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = -Infinity;
  let cSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]); // 5 9 9 16 24
    cSum = Math.max(cSum, sum); // 5 9 9 16 24
  }
  return cSum;
};
