// https://www.youtube.com/watch?v=0tcgYHU8IIs
function orderOfPresentation(N, K) {
  let result = [];

  const arr = Array.from({ length: N }, (x, i) => i + 1);

  function dfs(i, arr) {
    if (i === arr.length) {
      return result.push([...arr]);
    }

    for (let j = i; j < arr.length; j++) {
      // swap
      [arr[i], arr[j]] = [arr[j], arr[i]];
      // dfs
      dfs(i + 1, arr);
      // swap back
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  dfs(0, arr);
  // console.log(result);
  result.sort();
  for (let i = 0; i < result.length; i++) {
    if (String(result[i]) === String(K)) return i;
  }

  return -1;
}

let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3

output = orderOfPresentation(5, [1, 3, 2, 4, 5]);
console.log(output); // 6

output = orderOfPresentation(7, [7, 3, 4, 2, 5, 1, 6]);
console.log(output); // 4616

// 1 2 3
//     i
//     j
