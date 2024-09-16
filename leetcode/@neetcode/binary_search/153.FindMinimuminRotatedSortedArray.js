/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let leftIdx = 0;
    let rightIdx = nums.length - 1;

    while (leftIdx <= rightIdx) {
        const midIdx = Math.floor((leftIdx+rightIdx) / 2);

        if ( nums[midIdx-1] > nums[midIdx]){
            return nums[midIdx]
        }

        if (nums[leftIdx] <= nums[midIdx]) {
            if (nums[leftIdx] < nums[rightIdx]) return nums[leftIdx];
            leftIdx = midIdx + 1;
        } else {
            rightIdx = midIdx - 1;
        }
    }

    return nums[0];
};


console.log(findMin([3,4,5,1,2]))
console.log(findMin([4,5,6,7,0,1,2]))
console.log(findMin([11,13,15,17]))