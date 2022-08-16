function createMatrix(edges) {
  // TODO: 여기에 코드를 작성합니다.
  let max = findMaxNum(edges);
  let matrix = Array.from({ length: max + 1 }, () =>
    Array.from({ length: max + 1 }, (_, i) => 0)
  );

  console.log(testArr);
  for (let value of edges) {
    let from = value[0];
    let to = value[1];
    if (value[2] === "undirected") {
      matrix[from][to] = 1;
      matrix[to][from] = 1;
    } else {
      matrix[from][to] = 1;
    }
  }

  console.log(matrix);
  return matrix;
}

function findMaxNum(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].slice(0, 2);
    max = Math.max(max, ...temp);
  }
  return max;
}

// function createMatrix(edges) {
//   // TODO: 여기에 코드를 작성합니다.
//   let max = 0;
//   for (let i = 0; i < edges.length; i++) {
//     if (edges[i][0] > max) {
//       max = edges[i][0];
//     }
//     if (edges[i][1] > max) {
//       max = edges[i][1];
//     }
//   }

//   let result = new Array(max + 1).fill(new Array(max + 1).fill(0));
//   result[0][0] = "키키";
//   // for (let value of edges) {
//   //   result[value[0]][value[1]] = 1;
//   //   console.log(result);
//   //   break;
//   // }
//   console.log(result);
//   return result;
// }

const output1 = createMatrix([
  [0, 3, "directed"],
  [0, 2, "directed"],
  [1, 3, "directed"],
  [2, 1, "directed"],
]);

// const output2 = createMatrix([
//   [0, 2, "directed"],
//   [2, 4, "undirected"],
//   [1, 3, "undirected"],
//   [2, 1, "directed"],
// ]);
