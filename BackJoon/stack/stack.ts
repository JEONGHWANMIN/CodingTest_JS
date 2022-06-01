const readline = require('readline');
const fs = require('fs');
const stream = require('stream');
class CustomStack {
  arr: number[];
  constructor() {
    this.arr = [];
  }
  push(num: number) {
    this.arr.push(num);
  }

  top() {
    if (this.arr.length === 0) return -1;
    return this.arr[this.arr.length - 1];
  }

  size() {
    return this.arr.length;
  }

  empty() {
    if (this.arr.length === 0) return 1;
    return 0;
  }

  pop() {
    if (this.arr.length === 0) {
      return -1;
    }
    return this.arr.pop();
  }
}

const stack = new CustomStack();
const path = '../input.txt';
let result: string[] = [];
var count = 0;
var input: any = [];
var start = '';
const rl = readline.createInterface({
  // input: process.stdin,
  input: fs.createReadStream(path),
  output: process.stdout,
});
rl.on('line', function (input: any) {
  count += 1;
  input.push(input);
  var n = parseInt(input[0]);

  if (count === n + 1) {
    rl.close();
  }
  // for (let i = 1; i <= +input[0]; i++) {
  //   if (input[i].includes(' ')) {
  //     let [str, num] = input[i].split(' ');
  //     if (str === 'push') {
  //       stack.push(+num);
  //     }
  //   } else if (input[i] === 'top') {
  //     console.log(+stack.top());
  //   } else if (input[i] === 'size') {
  //     console.log(+stack.size());
  //   } else if (input[i] === 'empty') {
  //     console.log(+stack.empty());
  //   } else if (input[i] === 'pop') {
  //     console.log(stack.pop());
  //   }
  // }
  rl.close();
}).on('close', function () {
  for (var i = 1; i < input.length; i++) {
    start += input[i];
  }
  console.log(result);
  process.exit();
});
export {};
