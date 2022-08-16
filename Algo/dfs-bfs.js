function connectedVertices(edges) {
  // TODO: 여기에 코드를 작성합니다.
  // 0 : [1]
  // 1 : []
  // 2 : [3]
  // 3 : [4,5]
  // 4 : []
  // 5 : []
  // 6 : []
  // 7 : []
  // 8 : []
  // 9 : []
  // 0 - 1
  // 1은 배열 길이가 없음 단절 끝 count++
  // 2 - 3 -> 3 -> 4,5 [4,5]는 배열 길이가 없음 끝 count ++

  let map = new Map();
  Array.from({ length: 10 }, (_, i) => map.set(i, []));
  for (let edge of edges) {
    map.get(edge[0]).push(edge[1]);
  }
  console.log(map);

  let visit = [];
  let que = [];
  let count = 0;
  for (let i = 0; i < map.size; i++) {
    if (map.get(i).length === 0) continue;
    for (let j = 0; j < map.get(i).length; j++) {
      if (!visit.includes(map.get(i)[j])) {
        que.push(map.get(i)[j]);
        visit.push(map.get(i)[j]);
      }
    }

    let isCount = false;
    while (que.length) {
      console.log(que);
      isCount = true;
      let poped = que.pop();
      if (map.get(poped).length === 0) break;
      for (let i = 0; i < map.get(poped).length; i++) {
        if (!visit.includes(map.get(i))) {
          que.push(map.get(poped)[i]);
          visit.push(map.get(poped)[i]);
        }
      }
    }

    if (isCount) count++;
  }

  return count;
}
const result = connectedVertices([
  [0, 1],
  [2, 3],
  [3, 4],
  [3, 5],
]);
console.log(result); // 2
