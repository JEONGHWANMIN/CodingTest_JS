const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Node {
  next;
  prev;
  value;
  constructor(value) {
    this.next = null;
    this.prev = null;
    this.value = value;
  }
}

// front(맨앞) [ ]  rear(맨뒤)
class Deque {
  #head;
  #tail;
  #size;
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  pushFront(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.#head = node;
      this.#tail = node;
    } else {
      const prevHead = this.#head;
      prevHead.prev = node;
      this.#head = node;
      this.#head.next = prevHead;
    }

    this.#size++;
  }
  pushRear(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.#head = node;
      this.#tail = node;
    } else {
      const prevTail = this.#tail;
      prevTail.next = node;
      this.#tail = node;
      this.#tail.prev = prevTail;
    }

    this.#size++;
  }
  popFront() {
    if (this.isEmpty()) return -1;
    const head = this.#head;
    this.#head = head.next;

    if (this.#head) {
      this.#head.prev = null;
    } else {
      this.#tail = null;
    }

    this.#size--;

    return head.value;
  }
  popRear() {
    if (this.isEmpty()) return -1;
    const tail = this.#tail;
    this.#tail = tail.prev;

    if (this.#tail) {
      this.#tail.next = null;
    } else {
      this.#head = null;
    }

    this.#size--;

    return tail.value;
  }
  front() {
    if (this.isEmpty()) return -1;
    return this.#head.value;
  }
  rear() {
    if (this.isEmpty()) return -1;
    return this.#tail.value;
  }
  isEmpty() {
    return this.#size === 0 ? 1 : 0;
  }
  size() {
    return this.#size;
  }
}

function solution(input) {
  const result = [];
  const deque = new Deque();

  for (let command of input) {
    if (command[0] === "1") {
      const value = Number(command.split(" ")[1]);
      deque.pushFront(value);
    }
    if (command[0] === "2") {
      const value = Number(command.split(" ")[1]);
      deque.pushRear(value);
    }
    if (command[0] === "3") {
      result.push(deque.popFront());
    }
    if (command[0] === "4") {
      result.push(deque.popRear());
    }
    if (command[0] === "5") {
      result.push(deque.size());
    }
    if (command[0] === "6") {
      result.push(deque.isEmpty());
    }
    if (command[0] === "7") {
      result.push(deque.front());
    }
    if (command[0] === "8") {
      result.push(deque.rear());
    }
  }

  return result.join("\n");
}

const result = solution(input.slice(1));

console.log(result);
