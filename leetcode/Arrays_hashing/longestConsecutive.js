/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const result = [];

  if (nums.length === 0) return 0;
  nums.sort((a, b) => a - b);

  console.log(nums);
};

let arr = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
longestConsecutive(arr);
