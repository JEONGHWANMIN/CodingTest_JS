function movingStuff(stuff, limit) {
  let rest = limit;
  let r = stuff.length - 1;
  let i = 0;
  stuff.sort((a, b) => b - a);
  console.log(stuff);
  let result = [];
  // [ 80, 60, 50, 20, 10 ]
  while (stuff.length) {
    console.log("================");
    if (stuff.length === 1) {
      result.push([stuff[i]]);
      break;
    }
    rest = rest - stuff[i];

    if (0 <= rest - stuff[r]) {
      console.log("빈 공간:", rest);
      while (0 <= rest - stuff[r - 1]) r -= 1;
      console.log("변경 후 작은 박스 공간:", stuff[r]);
      rest = limit;
      result.push([stuff[i], stuff[r]]);
      stuff.splice(r, 1);
      stuff.splice(i, 1);
    } else {
      result.push([stuff[i]]);
      stuff.splice(i, 1);
      rest = limit;
    }
    i = 0;
    r = stuff.length - 1;
  }
  console.log(result);
  return result.length;
}
let output = movingStuff([80, 60, 50, 20, 10], 100);
console.log(output); // 3

// output = movingStuff([60, 80, 120, 90, 130], 140);
// console.log(output); // 4
