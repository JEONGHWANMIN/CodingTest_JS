function solution(progresses, speeds) {
  const result = [];

  const que = [...progresses];
  const que_speeds = [...speeds];

  while (que.length) {
    let count = 0;
    for (let i = 0; i < que.length; i++) {
      que[i] = que[i] + que_speeds[i];
    }

    if (que[0] >= 100) {
      while (que[0] >= 100) {
        que.shift();
        que_speeds.shift();
        count++;
      }
    }

    if (count > 0) {
      result.push(count);
    }
  }

  return result;
}
