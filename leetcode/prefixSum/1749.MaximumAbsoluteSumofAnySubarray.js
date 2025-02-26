/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    if (nums.length === 1) return Math.abs(nums[0]);

    let result = nums[0];

    let min = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        min = Math.min(nums[i], nums[i] + min);
        max = Math.max(nums[i], nums[i] + max);

        result = Math.max(Math.abs(max), Math.abs(min), result);
    }

    return result;
};
