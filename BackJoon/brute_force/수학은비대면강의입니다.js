const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

function solution(input) {
  let answer_x = -1;
  let answer_y = -1;
  const [a, b, c, d, e, f] = input.map(Number);

  for (let x = -999; x <= 999; x++) {
    let top_x = a * x;
    let bottom_x = d * x;

    for (let y = -999; y <= 999; y++) {
      let top_y = b * y;
      let bottom_y = e * y;

      if (top_x + top_y === c && bottom_x + bottom_y === f) {
        answer_x = x;
        answer_y = y;
        break;
      }
    }
  }

  return `${answer_x} ${answer_y}`;
}

console.log(solution(input));

/**
 * function matrixSolution(input) {
  const [a, b, c, d, e, f] = input.map(Number);

  const A = [
    [a, b],
    [d, e]
  ];

  const B = [
    c,
    f
  ];

  const inverseA = invertMatrix(A);
  if (inverseA) {
    const result = multiplyMatrix(inverseA, B);
    return `${result[0]} ${result[1]}`;
  } else {
    return "No solution exists";
  }
}

 */
