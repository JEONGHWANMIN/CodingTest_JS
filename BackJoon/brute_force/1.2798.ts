const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input[0].split(' ');
const [...nums] = input[1].split(' ').map((v: string) => +v);

// M is 'M'aximum Number

function solution(arr: number[]): number {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let firstCard = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let secondCard = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        let thirdCard = nums[k];
        let sum = firstCard + secondCard + thirdCard;
        if (sum <= M) result.push(sum);
      }
    }
  }
  result.sort((a, b) => b - a);
  return result[0];
}

console.log(solution(nums));

export {};
