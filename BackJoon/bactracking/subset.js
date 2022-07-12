let arr = ['a', 'b', 'c'];

function solution(arr) {
  let result = [];

  const subsets = (depth, subset) => {
    if (depth === arr.length) {
      result.push(subset);
    } else {
      // left
      subsets(depth + 1, subset);
      // right
      subsets(depth + 1, [...subset, arr[depth]]);
    }
  };

  subsets(0, []);

  return result;
}

let result = solution(arr);
console.log(result);
