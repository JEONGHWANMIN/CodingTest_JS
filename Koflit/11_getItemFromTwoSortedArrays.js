const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  // TODO: 여기에 코드를 작성합니다.
  // return arr1.concat(arr2).sort((a, b) => a - b)[k - 1];
  let left = 0;
  let right = 0;
  let sumArr = [];
  let IdxIsRemain = true;
  while (IdxIsRemain) {
    if (left <= arr1.length && arr1[left] <= arr2[right]) {
      sumArr.push(arr1[left]);
      left++;
    } else if (right <= arr2.length && arr2[right] < arr1[left]) {
      sumArr.push(arr2[right]);
      right++;
    }

    if (sumArr.length === k) {
      return sumArr[sumArr.length - 1];
    }

    if (left === arr1.length && right === arr2.length) {
      return -1;
    }
  }
  return -1;
};

// [1, 2, 3, 4, 5, 8, 9, 10]
let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 5, 9];
let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
console.log(result); // --> 8

// sumArr = [1]

arr1 = [1, 1, 2, 10];
arr2 = [3, 3];
result = getItemFromTwoSortedArrays(arr1, arr2, 4);
console.log(result); // --> 3

arr1 = [1, 1, 2, 10];
arr2 = [2, 3, 7, 12];
result = getItemFromTwoSortedArrays(arr1, arr2, 7);
console.log(result); // --> 3
