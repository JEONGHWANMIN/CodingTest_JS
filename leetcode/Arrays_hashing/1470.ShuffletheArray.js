/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const result = [];

  const x = nums.slice(0, n);
  const y = nums.slice(n);

  console.log(x);
  console.log(y);

  for (let i = 0; i < x.length; i++) {
    result.push(x[i]);
    result.push(y[i]);
  }

  return result;
};
