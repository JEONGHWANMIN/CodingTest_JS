const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(input);

/**
1 X: 정수 X를 스택에 넣는다. (1 ≤ X ≤ 100,000)
2: 스택에 정수가 있다면 맨 위의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
3: 스택에 들어있는 정수의 개수를 출력한다.
4: 스택이 비어있으면 1, 아니면 0을 출력한다.
5: 스택에 정수가 있다면 맨 위의 정수를 출력한다. 없다면 -1을 대신 출력한다.
 */

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
    return this.#values.length === 0;
  }
  top() {
    if (this.isEmpty()) return -1;
    return this.#values[this.#values.length - 1];
  }
}

const answerMap = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
};

function solution(arr) {
  const result = [];
  const stack = new Stack();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "1") {
      const [, num] = arr.split(" ");
      stack.push(num);
    } else {
      if (arr[i] === "2") {
      }
    }
  }
}

const result = solution(input.slice(1));
