/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = []
   const leftMap = new Map();
   const rightMap = new Map();

   for (let i = 0; i < nums.length; i++) {
       const leftArr = nums.slice(0, i).reduce((acc,cur) => acc * cur,1)
       const rightArr = nums.slice(i+1, nums.length).reduce((acc,cur) => acc * cur,1);

       leftMap.set(i, leftArr);
       rightMap.set(i, rightArr);
   }

   for (let i = 0; i < nums.length; i++) {
        result.push(leftMap.get(i) * rightMap.get(i))
   }

    return result
};

console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))
