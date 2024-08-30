// 시간복잡도 O(n)
// 공간복잡도 O(1)

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
      let leftIdx = 0;
      let rightIdx = numbers.length - 1;

      while (leftIdx <= rightIdx) {
          if (numbers[leftIdx] + numbers[rightIdx] === target) {
              return [leftIdx+1, rightIdx+1]
          }

          if (numbers[rightIdx] + numbers[leftIdx] < target) {
              leftIdx++
          } else {
              rightIdx--
          }
      }

      return []
};


console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([2,3,4], 6))
console.log(twoSum([-1,0], -1))
