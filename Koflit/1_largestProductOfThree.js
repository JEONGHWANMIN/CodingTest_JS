const largestProductOfThree = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let second = arr[j];
      for (let k = j + 1; k < arr.length; k++) {
        let third = arr[k];
        result.push(first * second * third);
      }
    }
  }
  return Math.max(...result);
};
// let output = largestProductOfThree([2, 1, 3, 7]);
// console.log(output); // --> 42 (= 2 * 3 * 7)

let output = largestProductOfThree([-5, -4, -3, -1, 999, 10000]);
console.log(output);
