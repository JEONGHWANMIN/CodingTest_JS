/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
1. 3개 합이 0이 되어야 한다.
2. 정렬을 하고 만약 그 정렬된 인덱스 합이 0이라면 그 인덱스 다음 값은 그 인덱스 값이랑 같으면 똑같이 0이고 
아니면 0이 나올 수가 없으니까 그 합은 종료되어야 한다.
3. 3개 합의 따라서 포인터를 하나씩 늘려나가거나 줄여 나간다.
*/
var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i < nums.length - 2; i++) {
    // 중복 제거
    if (i > 0 && nums[i - 1] === nums[i]) continue;
    let num = nums[i];
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let sum = num + nums[l] + nums[r];
      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        result.push([num, nums[l], nums[r]]);
        // 중복 제거
        while (nums[l] === nums[l + 1]) l++;
        while (nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      }
    }
  }
  return result;
};

const nums = [-1, 0, 1, 2, -1, -4];
threeSum(nums);
