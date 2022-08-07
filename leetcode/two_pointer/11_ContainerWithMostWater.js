/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = -1;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    max = Math.max(max, area);

    if (height[l] < height[r]) l += 1;
    else r -= 1;
  }

  return max;
};
