const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);
const board = input.slice(1).map((row) => row.split(" ").map(Number));

/**
 * 문제: 익은 토마토가 앞,뒤,오른쪽,왼쪽 토마토를 익게 한다. 모든 토마토가 익는데 걸리는 기간은?
 * 처음에 1인 부분을 다 찾아서 que에 넣어야 한다.
 */

function findRipeTomatoes(board) {
  let count = 0;
  const que = [];
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 0) count++;
      else if (board[row][col] === 1) {
        que.push([row, col]);
      }
    }
  }

  return [que, count];
}

function isMove(move_row, move_col, board) {
  return (
    move_row >= 0 &&
    move_col >= 0 &&
    move_row < board.length &&
    move_col < board[0].length &&
    board[move_row][move_col] === 0
  );
}

function getDirects() {
  const d_row = [0, 0, 1, -1];
  const d_col = [1, -1, 0, 0];
  return {
    d_row,
    d_col,
  };
}

function solution(board) {
  let [que, count] = findRipeTomatoes(board);

  const bfs = (tomato_que) => {
    let prevIdx = 0;
    let day = -1;
    const { d_col, d_row } = getDirects();

    while (prevIdx < tomato_que.length) {
      const size = tomato_que.length;

      for (let i = prevIdx; i < size; i++) {
        const [row, col] = tomato_que[i];

        for (let j = 0; j < 4; j++) {
          const move_row = row + d_row[j];
          const move_col = col + d_col[j];

          if (isMove(move_row, move_col, board)) {
            tomato_que.push([move_row, move_col]);
            board[move_row][move_col] = 1;
            count--;
          }
        }
        prevIdx++;
      }
      day++;
    }

    return day;
  };

  const day = bfs(que);

  if (count !== 0) return -1;

  return day;
}

console.log(solution(board));
