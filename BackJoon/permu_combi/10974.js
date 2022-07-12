const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

function solution(N) {
  const arr = Array.from({ length: N }, (_, i) => i + 1);

  const visit = new Array(N + 1).fill(0);
  let answer = [];

  console.log(visit);
  let temp = [];
  const dfs = (depth) => {
    if (arr.length === depth) {
      answer.push([...temp]);
    } else {
      for (let i = 1; i < N; i++) {
        if (visit[i] === 0) {
          visit[i] = 1;
          temp.push(arr[i]);
          dfs(depth + 1);
          temp.pop();
          visit[i] = 0;
        }
      }
    }
  };

  dfs(0);

  console.log(answer);
}

solution(+input);
