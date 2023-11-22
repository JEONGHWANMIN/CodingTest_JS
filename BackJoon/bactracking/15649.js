const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

//
function solution(len, N) {
  let result = "";
  const visit = Array.from({ length: len + 1 }).fill(false);

  const dfs = (n = 1, subset = []) => {
    if (subset.length === N) {
      return (result = result + subset.join(" ") + "\n");
    }

    for (let i = 1; i <= len; i++) {
      if (visit[i]) continue;
      visit[i] = true;
      dfs(i + 1, [...subset, i]);
      visit[i] = false;
    }
  };

  dfs();

  return result;
}

console.log(solution(+input[0], +input[1]));

// [1,2,3,4]
/**
 * 1 2, 1 3, 1 4,
 */
