const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(input);

function solution(n, input_papers) {
  const papers = input_papers.split(" ").map(Number);
  const que = Array.from({ length: n }, (_, index) => index + 1);

  const result = [];

  // 1
  // -3

  //

  while (result.length < papers.length) {
    result.push(que.shift());
    const pop_paper = papers.shift();

    if (pop_paper > 0) {
      for (let i = 0; i < pop_paper; i++) {
        const pop_number = que.shift();
        const pop_paper = papers.shift();

        que.push(pop_number);
        papers.push(pop_paper);
      }
    }
  }

  return result.join(" ");
}

const result = solution(+input[0], input[1]);
console.log("result", result);

// 1 2 3 4 5
// 3 2 1 -3 -1

// 1

// 4 5 1 2 3
// -3 -1 3 2 1

// 4
