// 시간복잡도 O(n2)
// 공간복잡도 O(n2)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = []

    nums.sort((a, b) => a - b);

    for (let cur = 0; cur < nums.length; cur++) {
        if (cur > 0 && nums[cur] === nums[cur - 1]) continue;

        let left = cur + 1;
        let right = nums.length - 1;

        while (left < right) {
           const sum = nums[cur] + nums[left] + nums[right];

           if (sum === 0) {
               result.push([nums[cur], nums[left], nums[right]]);

               while(left < right && nums[left] === nums[left + 1]) left++
               while (right > left && nums[right] === nums[right - 1]) right--;


               left++
               right--
           } else if(sum < 0) {
                left++
           } else {
                right--
           }
        }
    }

    return result
};

console.log(threeSum([-1,0,1,2,-1,-4]))
