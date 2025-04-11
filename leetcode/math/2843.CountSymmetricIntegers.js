/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
  let symmetricCount = 0;
  // 1. 짝수 자릿수
  // 2. 자릿수 절반 나눴을 때 좌,우 합이 같아야 함
  for (let num = low; num <= high; num++) {
    const strNum = String(num);
    if (strNum.length % 2 !== 0) continue;
    const len = strNum.length / 2;
    const left = strNum.slice(0, len);
    const right = strNum.slice(len);
    const leftSum = getStrNumberSum(left);
    const rightSum = getStrNumberSum(right);
    if (leftSum === rightSum) {
      symmetricCount++;
    }
  }

  return symmetricCount;
};

function getStrNumberSum(strNum) {
  let sum = 0;
  for (let i = 0; i < strNum.length; i++) {
    const num = Number(strNum[i]);
    sum = sum + num;
  }
  return sum;
}
