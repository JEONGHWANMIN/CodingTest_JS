const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

class Maxvalues {
  constructor() {
    this.values = [];
  }

  swap(arr, idx, idx1) {
    [arr[idx], arr[idx1]] = [arr[idx1], arr[idx]];
  }

  insert(el) {
    this.values.push(el);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    if (idx < 1) return;
    let parent = Math.floor((idx - 1) / 2);
    while (this.values[parent] < this.values[idx]) {
      this.swap(this.values, idx, parent);
      idx = parent;
      parent = Math.floor((idx - 1) / 2);
    }
  }

  remooveRoot() {
    if (this.values.length === 0) {
      return undefined;
    }
    if (this.values.length === 1) {
      return this.values.pop();
    }
    const max = this.values[0];
    this.values[0] = this.values.pop();
    this.bubbleDown(0);

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
        this.swap(this.values, idx, leftIdx);
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
  let values = new Maxvalues();
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      let num = values.remooveRoot();
      if (num === undefined) result = result + '0' + '\n';
      else result = result + num + '\n';
    } else {
      values.insert(arr[i]);
    }
  }
  console.log(result);
}

solution(arr);

// let heap = new Maxvalues();

// heap.remooveRoot();
// heap.insert(1);
// heap.insert(2);
// console.log(heap.values);
// heap.remooveRoot();
// console.log(heap.values);
// heap.remooveRoot();

// heap.insert(2);
// heap.insert(4);
// heap.insert(30);
