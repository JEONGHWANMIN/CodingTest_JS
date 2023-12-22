const input = require('fs')
  .readFileSync('../Input.txt')
  .toString()
  .trim()
  .split('\n');

let [X, Y] = input.map((v) => +v);

if (X > 0 && Y > 0) {
  console.log(1);
} else if (X < 0 && Y > 0) {
  console.log(2);
} else if (X < 0 && Y < 0) {
  console.log(3);
} else if (X > 0 && Y < 0) {
  console.log(4);
}
