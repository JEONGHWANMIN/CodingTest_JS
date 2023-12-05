const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map((row) => row.split(" ").map(Number));

function solution(row_len, col_len, board) {
  let max_width = 0;
  let max_count = 0;

  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }).fill(false)
  );

  const d_row = [0, 0, 1, -1];
  const d_col = [1, -1, 0, 0];

  const bfs = (row, col) => {
    const que = [[row, col]];

    let width = 0;
    while (que.length) {
      const [row, col] = que.shift();
      if (visited[row][col]) continue;

      visited[row][col] = true;
      width++;

      for (let i = 0; i < 4; i++) {
        const m_row = row + d_row[i];
        const m_col = col + d_col[i];

        const isMove =
          m_row >= 0 &&
          m_col >= 0 &&
          m_row < row_len &&
          m_col < col_len &&
          !visited[m_row][m_col] &&
          board[m_row][m_col] === 1;

        if (isMove) {
          que.push([m_row, m_col]);
        }
      }
    }

    max_width = Math.max(max_width, width);
  };

  for (let row = 0; row < row_len; row++) {
    for (let col = 0; col < col_len; col++) {
      if (board[row][col] === 1 && !visited[row][col]) {
        bfs(row, col);
        max_count++;
      }
    }
  }

  return max_count + "\n" + max_width;
}

console.log(solution(N, M, board));
