function removeExtremes(arr) {
  // TODO: 여기에 코드를 작성합니다.
  const arrLength = arr.map((value) => value.length);

  let max = Math.max(...arrLength);
  let min = Math.min(...arrLength);

  let removeMax = false;
  let removeMin = false;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (removeMax !== true && arr[i].length === max) {
      removeMax = true;
      arr.splice(i, 1);
    } else if (removeMin !== true && arr[i].length === min) {
      removeMin = true;
      arr.splice(i, 1);
    }

    if (removeMax === true && removeMin === true) {
      break;
    }
  }
  return arr;
}
// output = removeExtremes(['where', 'is', 'the', 'longest', 'word']);
// console.log(output); // --> ['where', 'the', 'word',]
output = removeExtremes(['a', 'b', 'c', 'def']);
console.log(output); // --> ['a', 'b']
