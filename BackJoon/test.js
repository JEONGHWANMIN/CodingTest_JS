function isIsogram(str) {
  // TODO: 여기에 코드를 작성합니다.
  let strCount = {};

  for (let i = 0; i < str.length; i++) {
    strCount[str[i].toUpperCase()] = (strCount[str[i].toUpperCase()] | 0) + 1;
  }

  // console.log(strCount);
  for (let key in strCount) {
    if (strCount[key] > 1) return false;
  }

  return true;
}

let output = isIsogram('aba');
console.log(output); // false

output = isIsogram('Dermatoglyphics');
console.log(output); // true

output = isIsogram('moOse');
console.log(output); // false
