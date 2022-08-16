function getDirections(matrix, from, to) {
  // TODO: 여기에 코드를 작성합니다.
  let visit = [];
  let que = [from];
  while (que.length) {
    const from = que.pop();
    let isOne = false;
    for (let i = 0; i < matrix[from].length; i++) {
      if (matrix[from][i] === 1) {
        if (i === to) return true;
        if (!visit.includes(String([from, i]))) {
          isOne = true;
          que.push([i]);
          visit.push(String([from, i]));
        }
      }
    }
    if (isOne === false) {
      return false;
    }
  }

  return false;
}

const result = getDirections(
  [
    [0, 1, 0, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
  ],
  0,
  2
);
console.log(result);
