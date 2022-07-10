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

// O(N) 방법
function uglyOn(n) {
  let uglyArr = [1];
  let idx1 = 0;
  let idx2 = 0;
  let idx3 = 0;

  for (let i = 0; i < n; i++) {
    let num1 = uglyArr[idx1] * 2;
    let num2 = uglyArr[idx2] * 3;
    let num3 = uglyArr[idx3] * 5;

    let minNum = Math.min(num1, num2, num3);

    uglyArr.push(minNum);

    if (minNum === num1) idx1++;
    if (minNum === num2) idx2++;
    if (minNum === num3) idx3++;
  }

  console.log(uglyArr[n - 1]);
}

uglyOn(15);
