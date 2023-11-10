const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head === null) {
      this.head = node;
      this.head.next = null;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length += 1;
  }

  pop() {
    if (this.empty()) return -1;
    const popItem = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return popItem.item;
  }

  size() {
    return this.length;
  }

  empty() {
    return this.length === 0 ? 1 : 0;
  }

  front() {
    if (this.empty()) return -1;
    return this.head.item;
  }

  back() {
    if (this.empty()) return -1;
    return this.tail.item;
  }
}

function solution(input) {
  const result = [];
  const que = new Queue();
  for (let command of input) {
    switch (command) {
      case "front":
        result.push(que.front());
        break;
      case "back":
        result.push(que.back());
        break;
      case "size":
        result.push(que.size());
        break;
      case "empty":
        result.push(que.empty());
        break;
      case "pop":
        result.push(que.pop());
        break;
      default:
        que.push(Number(command.split(" ")[1]));
    }
  }

  return result.join("\n");
}

const result = solution(input.slice(1));

console.log(result);
