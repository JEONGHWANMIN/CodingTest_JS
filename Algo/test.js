function movingStuff(stuff, limit) {
  let box = 0;
  let count = 0;
  let rest = limit;
  stuff.sort((a, b) => b - a);
  // 100
  // [ 80, 70, 50, 50 ]
  // rest = 20
  // box = box + 1
  // rest = 100
  // [10 , 10 , 20 , 50 , 90 , 90] limit 100
  // 3
  // 4
  let left = 0;
  let minIdx = limit.length - 1;
  const len = stuff.length;
  for (let i = 0; i < len; i++) {
    rest = rest - stuff[i]; // 100 - 80
    count = count + 1;
    // 최솟값이랑 비교하는 부분 (배열 최솟값도 박스에 들어가지 않으면 )
    if (0 > rest - stuff[minIdx]) {
      box = box + 1;
      rest = limit;
      count = count + 1;
    }
    // 배열 최솟값이 들어가 진다면 ? (최대한 limit에 가깝게 넣어야 한다.)
    else {
      while (0 < rest - stuff[minIdx]) minIdx--;
      console.log(stuff[minIdx]);
    }
  }

  return box;
}

let output = movingStuff([70, 50, 80, 50], 100);
console.log(output); // 3

// output = movingStuff([60, 80, 120, 90, 130], 140);
// console.log(output); // 4
