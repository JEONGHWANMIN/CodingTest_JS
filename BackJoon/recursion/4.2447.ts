const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString();

let str = `***
* *
***`;

console.log(str);
function recuresion() {}

recuresion();
export {};
