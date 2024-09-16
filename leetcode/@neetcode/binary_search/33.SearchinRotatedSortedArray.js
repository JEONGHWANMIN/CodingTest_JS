/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftIdx = 0;
    let rightIdx = nums.length - 1;

    while (leftIdx <= rightIdx) {
        const midIdx = Math.floor((leftIdx + rightIdx) / 2)

        if (nums[midIdx] === target) return midIdx;


        // 왼쪽 부분이 정렬되어 있을 때
        if (nums[leftIdx] <= nums[midIdx]) {
            if (nums[leftIdx] <= target &&  nums[midIdx] > target) {
                rightIdx = midIdx - 1;
            } else {
                leftIdx = midIdx + 1
            }
        }


        // 오른쪽 부분이 정렬되어 있을 때
        if (nums[midIdx] <= nums[rightIdx]) {
            if (target <= nums[rightIdx] && nums[midIdx] < target) {
                leftIdx = midIdx + 1
            } else {
                rightIdx = midIdx - 1
            }
        }


    }

    return -1
};


console.log(search([4,5,6,7,0,1,2], 0)) // 4
console.log(search([4,5,6,7,0,1,2], 3)) // -1
console.log(search([1], 0)) // -1
