const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(num, len) {
  let result = "";
  const arr = Array.from({ length: num }, (_, i) => i + 1);

  const dfs = (k, subset) => {
    if (subset.length === len) {
      result = result + subset.join(" ") + "\n";
      return;
    }

    for (let i = k; i < arr.length; i++) {
      dfs(i + 1, [...subset, arr[i]]);
    }
  };

  dfs(0, []);

  console.log(result);
}

solution(+input[0], +input[1]);

// 1 2 , 1 3 1 4 2 3 2 4 3 4
