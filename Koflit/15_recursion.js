function flattenArr(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let newArr = flattenArr(arr[i]);
      result.push(...newArr);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

let output = flattenArr([[1], 2, [3, 4], 5]);
console.log(output); // --> [1, 2, 3, 4, 5]

output = flattenArr([[2, [[3]]], 4, [[[5]]]]);
console.log(output); // --> [2, 3, 4, 5]
