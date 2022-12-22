function solution(t, p) {
  var answer = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    const sliced_str = t.slice(i, i + p.length);
    if (Number(sliced_str) <= Number(p)) answer++;
  }
  return answer;
}
