function decryptCaesarCipher(str, secret) {
  // TODO: 여기에 코드를 작성합니다.
  let result = '';
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      result = result + ' ';
      continue;
    }
    let idx = alphabet.indexOf(str[i]);
    if (idx - secret < 0) {
      let _idx = secret - idx;
      result = result + alphabet[alphabet.length - _idx];
      continue;
    }
    result = result + alphabet[idx - secret];
  }
  return result;
}

let output = decryptCaesarCipher('nzop delepd dfaazced jzf', 11);
console.log(output); // --> hello
// output = decryptCaesarCipher('b', 3);
// console.log(output); // --> hello
