function solution(s) {
  let answer = 0;

  let x = 0;
  let o = 0;

  let CHANGE = true;
  let word = "";

  for (let i = 0; i < s.length; i++) {
    if (CHANGE) word = s[i];

    // 횟수 부분
    if (s[i] === word) x++;
    else o++;

    if (x === o) {
      CHANGE = true;
      answer++;
    } else {
      CHANGE = false;
    }
  }

  if (x !== o) {
    answer++;
  }

  return answer;
}
