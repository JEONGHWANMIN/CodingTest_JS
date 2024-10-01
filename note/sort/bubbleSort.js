const exampleArray = [34, 7, 23, 32, 5, 62, 32, 23, 90, 1];

// 인접한 두 요소를 비교 후 swap 하면서 끝까지 순회하는 방법
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for  (let j = 0 ; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
    }

    return arr
}

console.log(bubbleSort(exampleArray));