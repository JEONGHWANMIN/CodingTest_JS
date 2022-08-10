function boardGame(board, operation) {
  let score = 0;
  let x = 0,
    y = 0;

  for (let i = 0; i < operation.length; i++) {
    if (operation[i] === "R") y += 1;
    if (operation[i] === "D") x += 1;
    if (operation[i] === "L") y -= 1;
    if (operation[i] === "U") x -= 1;
    if (x < 0) return "OUT";
    if (board[x][y] === 1) score = score + 1;
  }
  return score;
}

const board1 = [
  [0, 0, 0, 1],
  [1, 1, 1, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 0],
];
const output1 = boardGame(board1, "RRDLLD");
console.log(output1); // 4

// const board2 = [
//   [0, 0, 1],
//   [1, 1, 1],
//   [1, 0, 0],
// ];
// let output2 = boardGame(board2, "UU");
// console.log(output2); // 'OUT'

// const board3 = [
//   [0, 0, 1],
//   [1, 1, 1],
//   [1, 0, 0],
// ];
// const output3 = boardGame(board3, "UUUDD");
// console.log(output3); // 0
