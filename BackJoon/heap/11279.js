const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

class MaxHeap {
  constructor() {
    this.values = [];
  }

  swap(arr, idx, idx1) {
    [arr[idx], arr[idx1]] = [arr[idx1], arr[idx]];
  }

  insert(el) {
    this.values.push(el);
    if (this.values.length > 1) {
      this.bubbleUp();
    }
    return this.values;
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let parent = Math.floor((idx - 1) / 2);
    while (this.values[parent] < this.values[idx]) {
      this.swap(this.values, idx, parent);
      idx = parent;
      parent = Math.floor((idx - 1) / 2);
    }
  }

  remooveRoot() {
    let max = this.values.shift();
    if (this.values.length > 2) {
      let poped = this.values.pop();
      this.values.unshift(poped);
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown() {
    let idx = 0;
    let leftIdx = idx * 2 + 1;
    let rightIdx = idx * 2 + 2;
    while (
      this.values[idx] < this.values[leftIdx] ||
      this.values[idx] < this.values[rightIdx]
    ) {
      if (this.values[leftIdx] < this.values[rightIdx]) {
        this.swap(this.values, idx, rightIdx);
        idx = rightIdx;
      } else {
        this.swap(this.values, idx, rightIdx);
        idx = leftIdx;
      }
      leftIdx = idx * 2 + 1;
      rightIdx = idx * 2 + 2;
    }
  }
}

const n = input.shift();
const arr = input.map((v) => +v);

function solution(arr) {
  let heap = new MaxHeap();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      let num = heap.remooveRoot();
      if (num === undefined) result.push(0);
      else result.push(num);
    } else {
      heap.insert(arr[i]);
    }
  }
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}

solution(arr);
