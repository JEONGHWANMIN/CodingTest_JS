const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.map((a) => a.replace("\r", ""));

function swap(cards, startIndex, endIndex) {
  [cards[startIndex], cards[endIndex]] = [cards[endIndex], cards[startIndex]];
}

function solution(arr) {
  const cards = Array.from({ length: 20 }, (_, i) => i + 1);

  for (let i = 0; i < arr.length; i++) {
    let [startIdx, endIdx] = arr[i].split(" ").map(Number);

    let s = startIdx - 1;
    let e = endIdx - 1;

    while (s < e) {
      swap(cards, s, e);
      s++;
      e--;
    }
  }

  return cards.join(" ");
}

const res = solution(arr);
console.log(res);
