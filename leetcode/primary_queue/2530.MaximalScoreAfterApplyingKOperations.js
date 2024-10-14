class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index){
        return Math.floor((index - 1) / 2)
    }
    getChildLeftIndex(index) {
        return (index * 2) + 1
    }
    getChildRightIndex(index) {
        return (index * 2) + 2
    }

    peek() {
        return this.heap[0]
    }

    insert(num) {
        this.heap.push(num)
        this.bubbleUp()
    }

    bubbleUp() {
        let curIndex = this.heap.length - 1;

        while (curIndex > 0) {
            let parentIndex = this.getParentIndex(curIndex);

            if (this.heap[parentIndex] < this.heap[curIndex]) {
                this.swap(parentIndex, curIndex)
                curIndex = parentIndex;
            } else {
                break
            }
        }
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    pop() {
        const minValue = this.peek()
        this.heap[0] = this.heap.pop()

        this.bubbleDown()

        return minValue
    }

    bubbleDown() {
        let curIndex = 0;

        while (curIndex < this.heap.length) {
            let leftChildIndex = this.getChildLeftIndex(curIndex);
            let rightChildIndex = this.getChildRightIndex(curIndex);
            let targetIndex = this.heap[leftChildIndex] < this.heap[rightChildIndex] ? rightChildIndex : leftChildIndex;

            if (this.heap[curIndex] < this.heap[targetIndex]) {
                this.swap(curIndex, targetIndex)
                curIndex = targetIndex;
            } else {
                break
            }
        }
    }


}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    const results = []

    const maxHeap = new MaxHeap();

    for (let i = 0 ; i < nums.length; i++) {
        maxHeap.insert(nums[i])
    }

    for (let i = 0; i < k; i++) {
        const max = maxHeap.pop()
        results.push(max)
        maxHeap.insert(Math.ceil(max / 3))
    }


    return results.reduce((acc, cur) => acc + cur, 0)
};

console.log(maxKelements([1,10,3,3,3], 3))


