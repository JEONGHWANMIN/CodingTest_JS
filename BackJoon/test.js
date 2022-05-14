const input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .toUpperCase();

function solve(input) {
  let fre = {};
  for (let i of input) {
    fre[i] = (fre[i] || 0) + 1;
  }
  let max = 0;
  let maxStr = '';
  for (let i in fre) {
    if (fre[i] > max) {
      max = fre[i];
      maxStr = i;
    }
  }
  let count = 0;
  for (let i in fre) {
    if (fre[i] === max) {
      count++;
    }
    if (count === 2) {
      return '?';
    }
  }
  return maxStr;
}
console.log(solve(input));
