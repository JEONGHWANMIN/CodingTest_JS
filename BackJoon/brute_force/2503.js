const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let Cards = [];
const n = input.shift();

for (let i = 0; i < n; i++) {
  Cards.push(input.shift().split(' '));
}

console.log(Cards);

function solutuon(arr) {
  nums = Array.from({ length: 9 }, (_, i) => i + 1);
  let visit = new Array(10).fill(false);
  console.log(nums);
  console.log(visit);

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

solutuon(Cards);
