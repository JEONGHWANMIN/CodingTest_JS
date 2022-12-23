function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let currentVal = s[i] === "(" ? 1 : -1;
    count = count + currentVal;
    if (count < 0) return false;
  }

  return count === 0;
}
