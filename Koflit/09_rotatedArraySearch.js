const rotatedArraySearch = function (rotated, target) {
  let leftIdx = 0;
  let rightIdx = rotated.length - 1;
  let midIdx = Math.floor((leftIdx + rightIdx) / 2);

  while (leftIdx < rightIdx) {
    // 정렬된 배열이라면
    if (
      rotated[midIdx - 1] < rotated[midIdx] &&
      rotated[midIdx] < rotated[midIdx + 1]
    ) {
      if (rotated[midIdx] > target) {
        leftIdx = midIdx + 1;
        midIdx = Math.floor((leftIdx + rightIdx) / 2);
      } else if (rotated[midIdx] < target) {
      }
    }
    // 정렬된 배열이 아니라면
    else {
    }

    console.log(midIdx);
    if (rotated[midIdx] === target) return midIdx;

    break;
  }
};

// midIdx = 3 ,left = 0 , right = 6 ,
//
let output = rotatedArraySearch([10, 9, 8, 7, 6, 1, 2], 2);
console.log(output); // --> 5

// output = rotatedArraySearch([10, 11, 12,14,15 ,3, 6, 7, 8, 9], 11);
// console.log(output); // --> -1
