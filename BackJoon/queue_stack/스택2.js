const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Stack {
  #values = [];

  push(num) {
    this.#values.push(num);
  }
  pop() {
    if (this.isEmpty()) return -1;
    return this.#values.pop();
  }
  size() {
    return this.#values.length;
  }
  isEmpty() {
    return this.#values.length === 0 ? 1 : 0;
  }
  top() {
    if (this.isEmpty()) return -1;
    return this.#values[this.#values.length - 1];
  }
}

function solution(arr) {
  const result = [];
  const stack = new Stack();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === "1") {
      const [, num] = arr[i].split(" ");
      stack.push(Number(num));
    } else {
      if (arr[i] === "2") {
        result.push(stack.pop());
      }
      if (arr[i] === "3") {
        result.push(stack.size());
      }
      if (arr[i] === "4") {
        result.push(stack.isEmpty());
      }
      if (arr[i] === "5") {
        result.push(stack.top());
      }
    }
  }

  return result.join("\n");
}

const result = solution(input.slice(1));

console.log(result);
