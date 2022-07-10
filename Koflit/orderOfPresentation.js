// [1,2,3]
/*
[1,2,3] [1,3,2] [2,1,3] [2,3,1] [3,1,2,] [3,2,1] 
*/

function orderOfPresentation(N, K) {
  const arr = Array.from({ length: N }, (x, i) => i + 1);
  let result = [
    [1, 2, 3],
    [1, 3, 2],
    [2, 3, 1],
  ];
  console.log(K);
  let idx = result.findIndex((ar) => ar == K);
  console.log(idx);
}

let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3
