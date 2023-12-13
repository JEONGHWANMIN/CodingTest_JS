const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [N, H] = input[0].split(" ").map(Number);
const stones = input.slice(1).map(Number);

function solution(n, h, stones) {
  const sum_height = Array.from({ length: h }).fill(0);

  const s = Array.from({ length: h }).fill(0);
  const j = Array.from({ length: h }).fill(0);

  let suck = true;
  for (let height of stones) {
    if (suck) {
      s[height - 1] = s[height - 1] + 1;
    } else {
      j[height - 1] = j[height - 1] + 1;
    }
    suck = !suck;
  }

  for (let i = s.length - 1; i > 0; i--) {
    s[i - 1] = s[i - 1] + s[i];
    j[i - 1] = j[i - 1] + j[i];
  }

  s.reverse();

  for (let i = 0; i < h; i++) {
    sum_height[i] = s[i] + j[i];
  }

  const min = Math.min(...sum_height);

  const count = sum_height.filter((height) => height === min).length;

  return `${min} ${count}`;
}

console.log(solution(N, H, stones));
