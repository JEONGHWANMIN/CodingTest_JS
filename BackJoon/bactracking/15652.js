const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(num, len) {
  const arr = Array.from({ length: num }, (_, i) => i + 1);

  let res = "";
  const dfs = (k, subset) => {
    if (subset.length === len) return (res += subset.join(" ") + "\n");

    for (let i = k; i < arr.length; i++) {
      dfs(i, [...subset, arr[i]]); // 4번
    }
  };

  dfs(0, []);

  console.log(res);
}

solution(+input[0], +input[1]);
