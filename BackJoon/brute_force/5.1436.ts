const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let n = +input;

let earth_end = 665;

while (n > 0) {
  earth_end++;

  if ((earth_end + '').includes('666')) {
    n--;
  }
}

console.log(earth_end);
// 666 , 1666 , 2666 , 3666 , 4666

export {};
