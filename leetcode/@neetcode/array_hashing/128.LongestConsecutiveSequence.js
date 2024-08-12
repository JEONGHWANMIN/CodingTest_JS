/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0
    const result = []
    const setNums = [...new Set(nums)]
    setNums.sort((a,b) => a - b )


    let count = 1;
    for (let i = 0; i < setNums.length; i++) {
        if (setNums[i] + 1 === setNums[i + 1]) count++
        else {
            result.push(count)
            count = 1
        }
    }

    return Math.max(...result)
};



const nums1=  [100,4,200,1,3,2]
const nums2=  [0,3,7,2,5,8,4,6,0,1]
const nums3 = [1,2,0,1]

// console.log(longestConsecutive(nums1))
// console.log(longestConsecutive(nums2))
console.log(longestConsecutive(nums3))
