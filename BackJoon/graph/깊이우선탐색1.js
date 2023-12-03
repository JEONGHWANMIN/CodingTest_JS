const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((input) => input.replace("\r", ""));

const [N, M, R] = input[0].split(" ").map(Number);
const graph = input.slice(1).map((arr) => arr.split(" ").map(Number));

function solution(graph) {
  let graph_map = {};

  for (let i = 1; i < N + 1; i++) {
    graph_map[i] = [];
  }

  for (let i = 0; i < M; i++) {
    u = graph[i][0];
    v = graph[i][1];

    graph_map[u].push(v);
    graph_map[v].push(u);
  }

  for (let i = 1; i < M + 1; i++) {
    if (graph_map[i]) {
      graph_map[i].sort((a, b) => {
        return a - b;
      });
    }
  }

  console.log("graph_map", graph_map);

  const result = [];
  const visited = Array.from({ length: N + 1 }).fill(false);

  const dfs = (node) => {
    visited[Number(node)] = true;
    result.push(node);

    for (let i = 0; i < graph_map[node].length; i++) {
      const next_node = graph_map[node][i];
      if (!visited[next_node]) {
        dfs(next_node);
      }
    }
  };

  dfs(R);

  console.log(visited);
  console.log(result);
}

console.log(solution(graph));
