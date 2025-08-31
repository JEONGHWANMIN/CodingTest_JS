const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input2 = fs.readFileSync(filePath).toString().trim().split('\n');

