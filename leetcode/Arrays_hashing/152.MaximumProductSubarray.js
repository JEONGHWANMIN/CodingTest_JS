/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = Math.max(...nums)
    let max = 1;
    let min = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            max = 1;
            min = 1;
            continue
        }

        let tempMax = max; // max 값을 갱신하기 전에 저장

        // 최대값과 최소값 갱신
        max = Math.max(nums[i], nums[i] * max, nums[i] * min);
        min = Math.min(nums[i], nums[i] * tempMax, nums[i] * min);

        // 결과값 갱신
        res = Math.max(res, max);
    }


    return res
};

console.log(maxProduct([2,3,-2,4]))