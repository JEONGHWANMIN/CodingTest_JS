function queuePrinter(bufferSize, capacities, documents) {
  let count = 0;
  let que = Array.from({ length: bufferSize }, (_, i) => 0);

  while (true) {
    count++;
    if (que.length >= bufferSize) {
      que.pop();
    }
    if (sumArr([...que, documents[0]]) <= capacities) {
      let document = documents.shift();
      que.unshift(document);
    } else {
      que.unshift(0);
    }
    if (documents.length === 0 && isEmpty(que)) break;
  }

  return count;
}

function isEmpty(arr) {
  let sum = sumArr(arr);
  if (sum === 0) return true;
  return false;
}

function sumArr(arr) {
  return arr.reduce((acc, cur) => acc + cur);
}

let bufferSize = 2;
let capacities = 10;
let documents = [7, 4, 5, 6];

let output = queuePrinter(bufferSize, capacities, documents);
console.log(output); // 8

// bufferSize = 10;
// capacities = 10;
// documents = [10];
// output = queuePrinter(bufferSize, capacities, documents);
// console.log(output); // 8

/*
max =10
1 [7]
2 [_,7] // 10을 초과해서 들어 올 수 없음
3 [_,_,7] -> 7 [4,_,_]
4 [5,4,_]
5 [_,5] 4 // 6은 10을 초과해서 들어 올 수 없음
6 [6,_,_] 5
7 [_ , 6 , _]
8 [_,_,6] -> 6
*/
