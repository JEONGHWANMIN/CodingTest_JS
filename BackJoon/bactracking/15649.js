const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(len, n) {
  let arr = Array.from({ length: len }, (_, i) => i + 1);
  const visit = Array.from({ length: len + 1 }).fill(false);

  let result = "";
  const dfs = (subset) => {
    if (subset.length === n) {
      result += subset.join(" ") + "\n";
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (visit[i] === true) continue;
      visit[i] = true;
      dfs([...subset, arr[i]]);
      visit[i] = false;
    }
  };

  dfs([]);

  console.log(result);
}

solution(+input[0], +input[1]);

// [1,2,3,4]
/**
 * 1 2, 1 3, 1 4,
 */
