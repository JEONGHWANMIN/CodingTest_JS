function insertDash(str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = '';
  let oddCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1) {
      result = result + str[i];
      break;
    }
    if (+str[i] % 2 !== 0 && +str[i + 1] % 2 !== 0)
      result = result + str[i] + '-';
    else result = result + str[i];
  }
  return result;
}

let output = insertDash('454793');
console.log(output); // --> 4547-9-3
