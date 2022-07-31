class maxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let pIdx = Math.floor((idx - 1) / 2);
    while (this.values[idx] > this.values[pIdx]) {
      [this.values[idx], this.values[pIdx]] = [
        this.values[pIdx],
        this.values[idx],
      ];
      idx = pIdx;
      pIdx = Math.floor((idx - 1) / 2);
    }
  }

  extractMax() {
    let max = this.values[0];
    let poped = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = poped;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    let leftIdx = idx * 2 + 1;
    let rightIdx = idx * 2 + 2;

    while (
      this.values[idx] < this.values[leftIdx] ||
      this.values[idx] < this.values[rightIdx]
    ) {
      if (this.values[leftIdx] < this.values[rightIdx]) {
        [this.values[idx], this.values[rightIdx]] = [
          this.values[rightIdx],
          this.values[idx],
        ];
        idx = rightIdx;
      } else {
        [this.values[idx], this.values[leftIdx]] = [
          this.values[leftIdx],
          this.values[idx],
        ];
        idx = leftIdx;
      }
      leftIdx = idx * 2 + 1;
      rightIdx = idx * 2 + 2;
    }
  }
}

const mheap = new maxBinaryHeap();
mheap.insert(55);
console.log(mheap.values);

let max = mheap.extractMax();
console.log(max);
console.log(mheap.values);
max = mheap.extractMax();
console.log(max);
console.log(mheap.values);
