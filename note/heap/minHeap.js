class MinHeap {
    constructor() {
        this.heap = []
    }

    getChildLeftIndex(parentIndex) {
        return parentIndex * 2 + 1
    }
    getChildRightIndex(parentIndex){
        return parentIndex * 2 + 2
    }
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2)
    }
    peek() {
        return this.heap[0]
    }
    insert(value){
        this.heap.push(value)
        this.bubbleUp()
    }
    pop(){
        if (this.isEmpty()) return null;

        const rootMinValue = this.heap[0]
        const lastValue = this.heap.pop();

        if (!this.isEmpty()) {
            this.heap[0] = lastValue;
            this.bubbleDown();
        }

        return rootMinValue
    }
    bubbleUp() {
        let lastIndex = this.heap.length - 1;
        let parentIndex = this.getParentIndex(lastIndex)

        while (lastIndex > 0 && this.heap[lastIndex] < this.heap[parentIndex]) {
            this.swap(lastIndex, parentIndex)
            lastIndex = parentIndex
            parentIndex = this.getParentIndex(lastIndex)
        }
    }

    bubbleDown() {
        let index = 0;
        const len = this.heap.length;

        while (index < len) {
            let smallestIndex = index;
            const leftIndex = this.getChildLeftIndex(index);
            const rightIndex = this.getChildRightIndex(index);

            if (leftIndex < len && this.heap[leftIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftIndex;
            }

            if (rightIndex < len && this.heap[rightIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightIndex;
            }

            if (smallestIndex === index) break;

            this.swap(index, smallestIndex);
            index = smallestIndex;
        }
    }

    isEmpty() {
        return this.heap.length === 0
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }
}