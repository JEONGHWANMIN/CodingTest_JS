const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let weight_height = input.slice(1);

function solution(arr: string[]): any {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    let [weight, height] = arr[i].split(' ');
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      let [c_weight, c_height] = arr[j].split(' ');
      if (+weight < +c_weight && +height < +c_height) {
        count++;
      }
    }
    result.push(count);
  }
  console.log(result.join(' '));
}

solution(weight_height);

export {};
