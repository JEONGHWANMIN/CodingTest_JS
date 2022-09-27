/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  const arr = new Array(...dominoes);

  const que = [];
  // 'R' or 'L'을 que에 추가해준다.
  // first que = [ [ 1, 'L' ], [ 3, 'R' ], [ 7, 'L' ], [ 8, 'R' ], [ 11, 'L' ] ]
  for (let i = 0; i < dominoes.length; i++) {
    if (dominoes[i] !== ".") que.push([i, dominoes[i]]);
  }

  // que를 순회하면서 R과 L을 만나면 그 사이의 값을 R과 L로 채워준다.
  while (que.length > 0) {
    const [idx, value] = que.shift();
    if (value === "L" && idx > 0 && arr[idx - 1] === ".") {
      que.push([idx - 1, "L"]);
      arr[idx - 1] = "L";
    } else if (value === "R" && idx < arr.length && arr[idx + 1] === ".") {
      // R의 idx+1 === '.' 인데 그 다음 idx +2 === 'L'이면 .은 왼쪽 , 오른쪽으로 밀리기 때문에 그자리에 서 있는다.
      if (idx + 2 < arr.length && arr[idx + 2] === "L") {
        console.log([idx, value]);
        que.shift();
      } else {
        que.push([idx + 1, "R"]);
        arr[idx + 1] = "R";
      }
    }
  }
  console.log("asdasd", que);
  return arr.join("");
};

pushDominoes(".L.R...LR..L..");
// input : ".L.R...LR..L.."
// output : "LL.RR.LLRRLL.."

// "LL.RR.LLRRLL.."
