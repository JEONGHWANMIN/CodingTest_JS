const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 정답 좌표
const [dx, dy] = input.shift().split(' ');
const map = [];

for (let i = 0; i < input.length; i++) {
  map.push(input[i].split('').map((v) => +v));
}
// console.log(map);

function createAnswer(map) {
  const result = [];
  for (let i = 0; i < map.length; i++) {
    let temp = [];
    for (let j = 0; j < map[i].length; j++) {
      temp.push(0);
    }
    result.push(temp);
  }
  return result;
}

const answer = createAnswer(map);
// console.log(answer);

const cx = [1, -1, 0, 0]; //상 하
const cy = [0, 0, 1, -1]; // 우 좌

const [x, y] = [0, 0];
answer[x][y] = 1;
let que = [[0, 0]];
// 상 하 좌 우

while (que.length) {
  const poped = que.shift();
  const [x, y] = poped;
  if (x === dx && y == dy) break;
  for (let i = 0; i < 4; i++) {
    const newX = x + cx[i];
    const newY = y + cy[i];
    if (
      newX >= 0 &&
      newY >= 0 &&
      newX < dx &&
      newY < dy &&
      map[newX][newY] === 1 &&
      answer[newX][newY] === 0
    ) {
      que.push([newX, newY]);
      answer[newX][newY] = answer[x][y] + 1;
    }
  }
}

console.log(answer[dx - 1][dy - 1]);
