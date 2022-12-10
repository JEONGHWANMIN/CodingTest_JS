function solution(k, score) {
  var answer = [];

  const temp = [];
  for (let i = 0; i < score.length; i++) {
    if (temp.length < k) {
      temp.push(score[i]);
    } else {
      const mNum = Math.min(...temp);
      if (score[i] > mNum) {
        const idx = temp.indexOf(mNum);
        temp[idx] = score[i];
      }
    }

    answer.push(Math.min(...temp));
  }

  return answer;
}
