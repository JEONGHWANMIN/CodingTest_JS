function sumOfArraysInArray(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let newArr = arr.flat();
  let numArr = newArr.filter((val) => typeof val === 'number');
  if (numArr.length === 0) return 0;
  return numArr.reduce((pre, cur) => pre + cur);
}
let output = sumOfArraysInArray([
  [1, 2],
  [undefined, 4, '5'],
  [9, 'hello'],
]);
console.log(output); // --> 16
