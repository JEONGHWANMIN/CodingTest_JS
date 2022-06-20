const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const NM = input.shift().split(' ');
const N = Number(NM.shift());
const M = Number(NM.shift());
const candidates = [];
console.log('Col :', N, 'Row : ', M);

const whiteFirstBoard = [
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
];

const blackFirstBoard = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
];

// function paintWhiteFirst(x: number, y: number) {
//   let count = 0;

//   for (let i = y; i < y + 8; i++) {
//     for (let j = x; j < x + 8; j++) {
//       if (input[i][j] !== whiteFirstBoard[i - y][j - x]) {
//         count++;
//       }
//     }
//   }

//   return count;
// }

// function paintBlackFirst(x: number, y: number) {
//   let count = 0;

//   for (let i = y; i < y + 8; i++) {
//     for (let j = x; j < x + 8; j++) {
//       if (input[i][j] !== blackFirstBoard[i - y][j - x]) {
//         count++;
//       }
//     }
//   }

//   return count;
// }

// 8 x 8 변형
// for (let i = 0; i + 7 < N; i++) {
//   for (let j = 0; j + 7 < M; j++) {
//     candidates.push(paintWhiteFirst(j, i));
//     candidates.push(paintBlackFirst(j, i));
//   }
// }

// console.log(Math.min(...candidates));

function check_white(c: number, r: number) {
  console.log('function start');
  for (let i = c; i < c + 8; i++) {
    for (let j = r; j < r + 8; j++) {
      if (input[i][j] !== whiteFirstBoard[i - c][j - r]) {
        console.log('not');
      }
    }
  }
}

for (let c = 0; c + 7 < N; c++) {
  for (let r = 0; r + 7 < M; r++) {
    check_white(c, r);
  }
}

export {};
