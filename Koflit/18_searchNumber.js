function numberSearch(str) {
  // TODO: 여기에 코드를 작성합니다.
  if (!str) return 0;
  const numCheck = ['1', '2', ' 3', '4', '5', '6', '7', '8', '9'];
  const strArr = [];
  const numArr = [];
  // 숫자랑 , 문자 분리
  for (let i = 0; i < str.length; i++) {
    if (numCheck.includes(str[i])) {
      numArr.push(+str[i]);
    } else if (str[i] !== ' ') {
      strArr.push(str[i]);
    }
  }

  // 각 숫자 총합 구하기
  let sum = numArr.reduce((acc, cur) => acc + cur);
  return Math.round(sum / strArr.length);
}

let output = numberSearch('Hello6 ');
console.log(output); // --> 1

output = numberSearch('Hello6 9World 2,');
console.log(output); // --> 2

output = numberSearch('Hello6 9World 2, Nic8e D7ay!');
console.log(output); // --> 2

// output = numberSearch('');
// console.log(output); // --> 0
