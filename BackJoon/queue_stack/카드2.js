const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim();

class Node {
  next;
  value;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  #head;
  #tail;
  #size;
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.#head) {
      this.#head = node;
    } else {
      this.#tail.next = node;
    }

    this.#tail = node;
    this.#size++;
  }
  pop() {
    if (this.isEmpty()) return -1;
    const poped = this.#head;
    this.#head = this.#head.next;
    this.#size--;
    return poped.value;
  }
  size() {
    if (this.isEmpty()) return -1;
    return this.#size;
  }
  isEmpty() {
    return this.#size === 0 ? 1 : 0;
  }

  top() {
    if (this.isEmpty()) return -1;
    return this.#head.value;
  }
}

function solution(n) {
  const que = new Queue();

  for (let i = 1; i <= n; i++) {
    que.push(i);
  }

  let isDrop = true;
  while (que.size() !== 1) {
    const poped = que.pop();

    if (!isDrop) {
      que.push(poped);
    }

    isDrop = !isDrop;
  }

  return que.top();
}

const result = solution(input);

console.log(result);
