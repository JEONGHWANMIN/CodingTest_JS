/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = Array.from({length:nums.length}, () => 1)
    const leftResult = Array.from({length:nums.length}, () => 1)
    const rightResult = Array.from({length:nums.length}, () => 1)

    let left = 1;
   for (let i = 0; i < nums.length; i++) {
       left = left * nums[i]
       leftResult[i] = leftResult[i] * left
   }

   let right = 1;
   for (let i = nums.length -1 ; i >= 0; i--) {
       right = right * nums[i]
       rightResult[i] = rightResult[i] * right
   }

   for (let i = 0 ; i < nums.length ; i++) {
        if (i === 0) {
            result[i] = rightResult[i+1]
            continue
        }
        if (i === nums.length -1) {
            result[i] = leftResult[i-1]
            continue
        }
        result[i] = leftResult[i-1] * rightResult[i+1]
   }


    return result
};

// console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));