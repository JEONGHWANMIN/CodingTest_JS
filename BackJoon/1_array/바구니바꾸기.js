const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace("\r", ""));

const [N, M] = input.shift().split(" ").map(Number);

function solution(n, arr) {
  let buckets = Array.from({ length: n }, (_, idx) => idx + 1);

  for (let sortArr of arr) {
    const [i, j] = sortArr.split(" ").map(Number);

    const leftArr = buckets.slice(0, i - 1);
    const rightArr = buckets.slice(j);
    const reversedMidArr = buckets.slice(i - 1, j).reverse();

    buckets = [...leftArr, ...reversedMidArr, ...rightArr];
  }

  return buckets.join(" ");
}

console.log(solution(N, input));
