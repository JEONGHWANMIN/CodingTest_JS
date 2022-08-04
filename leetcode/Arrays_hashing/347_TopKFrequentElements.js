/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }
  const result = [];
  for (let [key, value] of Object.entries(map)) {
    result.push([key, value]);
  }
  result.sort((a, b) => b[1] - a[1]);
  console.log(result);
  const answer = [];
  for (let i = 0; i < k; i++) {
    answer.push(+result[i][0]);
  }
  return answer.sort((a, b) => a - b);
};
let nums = [4, 1, -1, 2, -1, 2, 3],
  k = 2;
console.log(topKFrequent(nums, k));
