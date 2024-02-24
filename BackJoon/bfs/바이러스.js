const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const M = Number(input.shift());
const computers = input.map((edge) => edge.split(" ").map(Number));
let visited = Array(N + 1).fill(false);
let graph = Array.from(Array(N + 1)).map(() => []);
computers.forEach(([num1, num2]) => {
  graph[num1].push(num2);
  graph[num2].push(num1);
});

console.log("graph", graph);

const bfs = (start) => {
  const que = [start];
  while (que.length) {
    const num = que.shift();
    if (!visited[num]) {
      que.push(...graph[num]);
      visited[num] = true;
    }
  }

  return visited.filter((a) => a === true).length - 1;
};

console.log(bfs(1));
