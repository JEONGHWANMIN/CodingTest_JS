/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return false;
// };

/*
O(n) : obj = {} 사용 
1. 각각 obj = {val : index} 를 지정해 놓는다.
2. obj 에 target - nums[i] 값이 안들어 있으면 그 값은 obj {val : index}로 저장해 놓는다.
3. 만약에 target - nums[i] in obj 에 들어있으면 (nums[i] + in obj) 값은 target 이므로 
   obj[target-nums[i]] -> index 이므로 , 
4. 현재 인덱스랑 target-nums[i] 인덱스를 리턴해 준다.
*/
var twoSum = function (nums, target) {
  // map = {val : index}
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in map) {
      return [map[target - nums[i]], i];
    } else {
      map[nums[i]] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
