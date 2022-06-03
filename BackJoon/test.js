function convertDoubleSpaceToSingle(str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];
  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (str[i] === ' ' && str[i] === str[i + 1]) {
      continue;
    }
    result.push(str[i]);
  }
  return result.join('');
}

let output = convertDoubleSpaceToSingle('string  with  double  spaces');
console.log(output); // --> "string with double spaces"
