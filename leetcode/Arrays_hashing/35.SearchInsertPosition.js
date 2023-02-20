/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const result = nums.findIndex((num) => num === target);
  return result !== -1 ? result : findIndexInsert(nums, target);
};

function findIndexInsert(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) return i;
  }
  return nums.length;
}
