function solution(maps) {
  var answer = [];

  const newMap = maps.map((n) => n.split(""));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const dfs = (x, y, num) => {
    let sum = Number(num);

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      const isNotMove =
        nx < 0 && ny < 0 && nx >= newMap.length && ny >= newMap[0].length;

      console.log(isNotMove);
      if (!isNotMove) {
        if (newMap[nx][ny] !== "X") {
          const next = newMap[nx][ny];

          newMap[nx][ny] = "X";

          sum = sum + dfs(dx, dy, next);
        }
      }
    }

    return sum;
  };

  for (let i = 0; i < newMap.length; i++) {
    for (let j = 0; j < newMap[0].length; j++) {
      if (newMap[i][j] === "X") continue;

      const start = newMap[i][j];

      newMap[i][j] = "X";

      answer.push(dfs(i, j, start));
    }
  }

  return answer;
}
