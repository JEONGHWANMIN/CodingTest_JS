const exampleArray = [34, 7, 23, 32, 5, 62, 32, 23, 90, 1];


// 가장 작은 값을 선택해서 앞에서부터 정렬한다.
function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }

    return arr
}


console.log(selectionSort(exampleArray))