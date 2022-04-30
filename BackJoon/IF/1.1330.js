const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

let [A, B] = input.map((a) => +a);

if (A > B) {
  console.log('>');
} else if (A < B) console.log('<');
else {
  console.log('==');
}
