function readVertically(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let result = '';
  for (let i = 0; ; i++) {
    let count = result.length;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] !== undefined) result = result + arr[j][i];
    }
    if (count === result.length) break;
  }
  return result;
}

let input = [
  //
  'hello',
  'hi',
];
let output = readVertically(input);
console.log(output); // --> 'hweolllrod'
