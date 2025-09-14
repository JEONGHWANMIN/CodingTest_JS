const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const n = Number(input.shift());

class Queue {
  #arr = []

  push(val) {
    return this.#arr.unshift(val)
  }

  pop() {
    if (this.size() === 0) return -1;
    return this.#arr.pop()
  }

  size() {
    return this.#arr.length;
  }

  empty() {
    return this.#arr.length === 0 ? 1 : 0;
  }

  front() {
    if (this.size() === 0) return -1;
    return this.#arr[this.size() - 1]
  }

  back() {
    if (this.size() === 0) return -1;
    return this.#arr[0]
  }
}

function solution(n, commands) {
  const result = []
  const queue = new Queue();

  for (const command of commands) {
    const [cmd, val] = command.split(" ")

    switch (cmd) {
      case "push":
        queue.push(val);
        break;
      case "pop":
        result.push(queue.pop());
        break;
      case "size":
        result.push(queue.size());
        break;
      case "empty":
        result.push(queue.empty());
        break;
      case "front":
        result.push(queue.front());
        break;
      case "back":
        result.push(queue.back());
        break;
    }
  }

  return result.join("\n");
}

console.log(solution(n, input));
