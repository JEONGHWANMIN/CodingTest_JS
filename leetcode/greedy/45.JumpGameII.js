/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) return 0;
  let count = 0;
  let curIdx = 0;
  while (nums[0] !== 0 && curIdx <= nums.length) {
    count = count + 1;
    let jump = curIdx + nums[curIdx];
    let jumpTargetIdx = curIdx;

    if (jump >= nums.length - 1) return count;

    for (let i = curIdx; i <= curIdx + nums[curIdx]; i++) {
      if (jump < i + nums[i]) {
        jumpTargetIdx = i;
        jump = i + nums[i];
      }
    }

    curIdx = jumpTargetIdx;
  }

  return count;
};
