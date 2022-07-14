const insertionSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};

let output = insertionSort([5, 4, 3, 2, 1]);
console.log(output); // --> [1, 3, 21]
