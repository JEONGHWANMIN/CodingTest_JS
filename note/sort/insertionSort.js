const exampleArray = [34, 7, 23, 5, 62, 32, 90, 1];


// 삽입정렬 -> 기준점 피봇을 정해서 앞에 요소들이랑 비교 후 앞에 요소들을 차례대로 앞으로 한칸씩 밀면서 갚을 덮어 씌운 뒤
// 최종적으로 보인이 들어갈 자리에 들어간다.
function insertionSort(arr) {
    for (let i = 1 ; i < arr.length ; i++) {
        const pivot = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > pivot) {
            arr[j + 1] = arr[j];
            j--
        }

        arr[j+1] = pivot
    }

    return arr
}


console.log(insertionSort(exampleArray));

// [7, 34, 23, 32, 5, 62, 32, 23, 90, 1];
// [7, 23, 34, 32, 5, 62, 32, 23, 90, 1];
// [7, 23, 32, 34, 5, 62, 32, 23, 90, 1];
// [7, 5, 23, 32, 34, 62, 32, 23, 90, 1];
