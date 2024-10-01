/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let leftIdx = 0;
    let rightIdx = nums.length - 1;

    while (leftIdx <= rightIdx) {
        const midIdx = Math.floor((leftIdx+rightIdx) / 2);


        // rotate case
        if ( nums[midIdx-1] > nums[midIdx]){
            return nums[midIdx]
        }


        // 전체 배열 정렬 케이스
        if (nums[leftIdx] < nums[rightIdx]) {
            return nums[leftIdx];
        }

        if (nums[leftIdx] <= nums[midIdx]) {
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