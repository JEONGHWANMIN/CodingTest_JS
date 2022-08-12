function paveBox(boxes) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];
  let len = boxes.length;

  for (let i = 0; i < len; i++) {
    let cur = boxes.shift();
    let count = 1;
    for (let k = 0; k < boxes.length; k++) {
      if (cur >= boxes[k]) count++;
      else break;
    }
    result.push(count);
  }

  return Math.max(...result);
}

const boxes2 = [80, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const output2 = paveBox(boxes2);
console.log(output2); // 1

const boxes = [1, 1, 80, 1, 1];
const output = paveBox(boxes);
console.log(output); // 3
