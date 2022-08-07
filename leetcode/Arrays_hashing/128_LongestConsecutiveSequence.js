/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  nums.sort((a, b) => a - b);
  const set = new Set(nums);
  nums = Array.from(set);

  if (nums.length === 0) return 0;
  console.log(nums);

  let result = [];
  let temp = [];
  let sequence = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      sequence = true;
      temp.push(nums[i]);
    } else if (sequence && nums[i] + 1 !== nums[i + 1]) {
      temp.push(nums[i]);
      result.push(temp.length);
      temp = [];
      sequence = false;
    } else {
      result.push(temp.length);
    }
  }
  console.log(result);
  let max = Math.max(...result);
  if (max === 0) {
    return 1;
  }
  return max;
};
