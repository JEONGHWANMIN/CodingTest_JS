/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const leftSide = []
    const mid = []
    const rightSide = []

    for (let i = 0; i < nums.length; i++) {
        if (pivot < nums[i]) {
            rightSide.push(nums[i])
        }

        if (pivot > nums[i]) {
            leftSide.push(nums[i])
        }

        if (pivot === nums[i]) {
            mid.push(nums[i])
        }
    }


    return [...leftSide, ...mid, ...rightSide]
};

const nums1 = [9,12,5,10,14,3,10]
const pivot1 = 10;
console.log(pivotArray(nums1, pivot1))

const nums2 = [-3,4,3,2]
const pivot2 = 2
console.log(nums2, pivot2)

