const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const ARRAY = input.slice(1).map((row) => row.split(" ").map(Number));

/**
 * 입력: 짝수 N, 능력치 ARRAY
 * 문제 결과 : N/2로 나눠서 스타트, 링크 팀으로 분리하는데 이 때 팀 능력치가 최소화 되도록
 * 사람 번호는 1 ~ N 까지
 * 1 2 3 -> 1 2, 2 1, 1 3, 3 1, 2 3, 3 2
 */

function solution(n, ability) {
  let result = Infinity;
  const numbers = Array.from({ length: n }, (_, idx) => idx);
  const visited = Array.from({ length: n }).fill(false);

  const teamAbilities = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      teamAbilities[i][j] = ability[i][j] + ability[j][i];
      teamAbilities[j][i] = ability[j][i] + ability[i][j];
    }
  }

  console.log("teamAbilities", teamAbilities);

  const dfs = (subset, startIdx) => {
    if (subset.length === n / 2) {
      const startTeam = subset;
      const linkTeam = numbers.filter((num) => !subset.includes(num));

      let startValue = 0;
      let linkValue = 0;

      for (let i = 0; i < n / 2; i++) {
        for (let j = i + 1; j < n / 2; j++) {
          startValue += teamAbilities[startTeam[i]][startTeam[j]];
          linkValue += teamAbilities[linkTeam[i]][linkTeam[j]];
        }
      }

      result = Math.min(result, Math.abs(startValue - linkValue));
      return;
    }

    for (let i = startIdx; i < n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs([...subset, i], i + 1);
        visited[i] = false;
      }
    }
  };

  dfs([], 0);

  return result;
}

console.log(solution(N, ARRAY));
