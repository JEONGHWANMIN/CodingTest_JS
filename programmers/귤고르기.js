function solution(k, tangerine) {
  var answer = 1;

  const map = {};

  for (let num of tangerine) {
    map[num] = (map[num] || 0) + 1;
  }

  const temp = [];
  for (let key in map) {
    temp.push([key, map[key]]);
  }

  temp.sort((a, b) => b[1] - a[1]);

  for (let arr of temp) {
    k = k - arr[1];
    if (k <= 0) break;
    answer++;
  }

  return answer;
}
