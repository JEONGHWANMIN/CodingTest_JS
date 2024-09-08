/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = Math.max(...nums);
  let curSum = 0;

  for (let i = 0; i < nums.length; i++) {
    curSum = Math.max(curSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, curSum);
  }

  return maxSum
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))