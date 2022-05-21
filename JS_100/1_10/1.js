// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
// var nums = [100, 200, 300, 400, 500];

// 1. slice
var nums = [100, 200, 300, 400, 500];

let result = nums.slice(0, 3);
console.log(result);

// 2. pop
nums.pop();
nums.pop();
console.log(nums);
