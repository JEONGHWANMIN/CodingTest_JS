const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

let N = +input.shift();

/*
산술평균 : N개의 수들의 합을 N으로 나눈 값
중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
최빈값 : N개의 수들 중 가장 많이 나타나는 값
범위 : N개의 수들 중 최댓값과 최솟값의 차이
*/

function solutuon(arr) {
  arr = arr.sort((a, b) => a - b);
  let result = [];
  // 산술평균
  let sum = Math.round(arr.reduce((acc, cur) => acc + cur) / N);
  if (sum === -0) {
    sum = Math.max(0, sum);
  }
  result.push(sum);
  // 중앙값
  let idx = Math.floor(arr.length / 2);
  result.push(arr[idx]);
  // 최빈값
  result.push(+mode(arr));
  // 범위
  result.push(arr.at(-1) - arr[0]);
  return result;
}

function mode(arr) {
  let countArr = [];
  let mode = [];
  let arrCount = {};
  for (let el of arr) {
    arrCount[el] = (arrCount[el] || 0) + 1;
  }
  for (let key in arrCount) {
    countArr.push([key, arrCount[key]]);
  }
  countArr.sort((a, b) => a[1] - b[1]);
  // 최빈값 만 배열에 넣기
  let max = countArr.at(-1)[1];
  for (let el of countArr) {
    if (el[1] === max) {
      mode.push(el);
    }
  }
  mode.sort((a, b) => a[0] - b[0]);
  if (mode.length === 1) {
    return mode[0][0];
  } else {
    return mode[1][0];
  }
}

let str = '';
let result = solutuon(input);
for (let el of result) {
  str = str + el + '\n';
}
console.log(str);
