function solution(maps) {
  const answer = [];

  const copyMap = maps.map((map) => map.split(""));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, -1, 1];

  function findConnectIsland(x, y, sum) {
    let numberedSum = Number(sum);

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < copyMap.length && ny < copyMap[0].length) {
        if (copyMap[nx][ny] !== "X") {
          const newSum = copyMap[nx][ny];

          copyMap[nx][ny] = "X";

          numberedSum = numberedSum + findConnectIsland(nx, ny, newSum);
        }
      }
    }
    return numberedSum;
  }

  for (let i = 0; i < copyMap.length; i++) {
    for (let j = 0; j < copyMap[0].length; j++) {
      if (copyMap[i][j] === "X") continue;

      const start = copyMap[i][j];

      copyMap[i][j] = "X";

      answer.push(findConnectIsland(i, j, start));
    }
  }

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
