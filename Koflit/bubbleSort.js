const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  for (let i = 0; i < arr.length - 1; i++) {
    let change = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [[arr[j]], [arr[j + 1]]] = [[arr[j + 1]], [arr[j]]];
        change = true;
      }
    }
    if (change === false) return arr;
    console.log(`${i + 1}PASS RESULT : `, arr);
  }
  return arr;
};

console.log(bubbleSort([5, 4, 3, 2, 1]));

// 4 5 3 2 1
// 4 3 5 2 1
// 4 3 2 5 1
// 4 3 2 1 5 1PASS result

// 3 4 2 1 5
// 3 2 4 1 5
// 3 2 1 4 5 2PASS result

// 2 3 1 4 5
// 2 1 3 4 5 3PASS result

// 1 2 3 4 5 4PASS result
