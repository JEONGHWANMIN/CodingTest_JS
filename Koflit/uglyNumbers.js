function isUgly(num) {
  // num -> 몫
  while (num !== 1) {
    if (num % 2 === 0) num = num / 2;
    else if (num % 3 === 0) num = num / 3;
    else if (num % 5 === 0) num = num / 5;
    else return false;
  }
  return true;
}

const uglyNumbers = function (n) {
  let count = 2;
  let uglyArr = [1];
  while (uglyArr.length <= n) {
    if (isUgly(count)) uglyArr.push(count);
    count++;
  }
  return uglyArr[n - 1];
};

console.log(uglyNumbers(15));
// console.log(isUgly(11));
