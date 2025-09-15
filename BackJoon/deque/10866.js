const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const n = Number(input.shift());

class Deque {
  #arr = []

  push_front(val) {
    this.#arr.push(val);
  }

  push_back(val) {
    this.#arr.unshift(val)
  }

  pop_front() {
    if (this.size() === 0) return -1;
    return this.#arr.pop();
  }

  pop_back() {
    if (this.size() === 0) return -1;
    return this.#arr.shift();
  }

  size() {
    return this.#arr.length;
  }

  empty() {
    return this.#arr.length === 0 ? 1 : 0;
  }

  front() {
    if (this.size() === 0) return -1
    return this.#arr[this.size() - 1]
  }

  back() {
    if (this.size() === 0) return -1
    return this.#arr[0]
  }
}

function solution(n, commands) {
  const result = []

  const deque = new Deque();

  for (const command of commands) {
    const [cmd, val] = command.split(" ")

    switch (cmd) {
      case "push_front":
        deque.push_front(val)
        break;
      case "push_back":
        deque.push_back(val);
        break;
      case "pop_front":
        result.push(deque.pop_front());
        break;
      case "pop_back":
        result.push(deque.pop_back());
        break;
      case "size":
        result.push(deque.size());
        break;
      case "empty":
        result.push(deque.empty());
        break;
      case "front":
        result.push(deque.front());
        break;
      case "back":
        result.push(deque.back());
        break;

    }
  }

  return result.join("\n");
}

console.log(solution(n, input));
