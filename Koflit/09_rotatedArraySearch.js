const rotatedArraySearch = function (rotated, target) {
  let start = 0;
  let end = rotated.length - 1;

  while (start <= end) {
    // 정렬된 배열이라면
    midIdx = parseInt((start + end) / 2);

    console.log(`Start : ${start} , Mid : ${midIdx} , End : ${end}`);
    if (rotated[midIdx] === target) return midIdx;

    if (rotated[start] < rotated[midIdx]) {
      // 왼쪽 절반이 정렬되어 있는 상태
      if (target < rotated[midIdx] && rotated[start] <= target) {
        left = midIdx - 1;
      } else {
        start = midIdx + 1;
      }
    } else {
      // 오른쪽 절반이 정렬되어 있는 상태
      if (target <= rotated[end] && rotated[midIdx] < target) {
        start = midIdx + 1;
      } else {
        end = midIdx - 1;
      }
    }
  }

  return -1;
};

let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
console.log(output); // --> 5

output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100);
console.log(output); // --> -1
