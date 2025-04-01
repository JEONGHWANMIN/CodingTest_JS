
//[ui, vi, timei]
// 가장 짧은 시간이 걸리는 시간의 가지의 수 출력하기

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function(n, roads) {
    const graph = new Map();

    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }

    for (const [u, v, time] of roads) {
        graph.get(u).push([v, time]);
        graph.get(v).push([u, time]);
    }

    // 거리와 경로 수 배열 초기화
    const dist = Array(n).fill(Infinity);
    const ways = Array(n).fill(0);

    dist[0] = 0;  // 시작점 거리는 0
    ways[0] = 1;  // 시작점에 도달하는 방법은 1가지

    const MOD = 1e9 + 7;

    const minHeap = new MinHeap();
    minHeap.push([0, 0]); // [거리, 노드]

    while (!minHeap.isEmpty()) {
        const [distance, node] = minHeap.pop();

        // 이미 처리된 더 짧은 경로가 있는 경우 스킵
        if (distance > dist[node]) continue;

        // 현재 노드의 이웃 노드들 처리
        for (const [neighbor, time] of graph.get(node)) {
            // 새로운 거리 계산
            const newDist = distance + time;

            if (newDist < dist[neighbor]) {
                // 더 짧은 경로 발견
                dist[neighbor] = newDist;
                ways[neighbor] = ways[node];
                minHeap.push([newDist, neighbor]);
            } else if (newDist === dist[neighbor]) {
                // 같은 길이의 다른 경로 발견
                ways[neighbor] = (ways[neighbor] + ways[node]) % MOD;
            }
        }
    }

    return ways[n - 1];
};



const n = 7
const roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]


console.log(countPaths(n, roads))


/**
 * var countPaths = function(n, roads) {
 *     // 그래프 생성
 *     const graph = new Map();
 *     for (let i = 0; i < n; i++) {
 *         graph.set(i, []);
 *     }
 *
 *     // 양방향 그래프 구성
 *     for (const [u, v, time] of roads) {
 *         graph.get(u).push([v, time]);
 *         graph.get(v).push([u, time]);
 *     }
 *
 *     // 거리와 경로 수 배열 초기화
 *     const dist = Array(n).fill(Infinity);
 *     const ways = Array(n).fill(0);
 *
 *     dist[0] = 0;  // 시작점 거리는 0
 *     ways[0] = 1;  // 시작점에 도달하는 방법은 1가지
 *
 *     const MOD = 1e9 + 7;
 *
 *     // 방문 여부를 추적
 *     const visited = Array(n).fill(false);
 *
 *     while (true) {
 *         let minDist = Infinity;
 *         let minNode = -1;
 *
 *         // 방문하지 않은 노드 중 최소 거리를 가진 노드 찾기
 *         for (let i = 0; i < n; i++) {
 *             if (!visited[i] && dist[i] < minDist) {
 *                 minDist = dist[i];
 *                 minNode = i;
 *             }
 *         }
 *
 *         // 모든 노드를 방문했거나 도달할 수 없는 경우
 *         if (minNode === -1) break;
 *
 *         visited[minNode] = true;
 *
 *         // 이웃 노드 탐색
 *         for (const [neighbor, time] of graph.get(minNode)) {
 *             if (visited[neighbor]) continue;
 *
 *             if (dist[minNode] + time < dist[neighbor]) {
 *                 // 더 짧은 경로 발견
 *                 dist[neighbor] = dist[minNode] + time;
 *                 ways[neighbor] = ways[minNode];
 *             } else if (dist[minNode] + time === dist[neighbor]) {
 *                 // 같은 길이의 다른 경로 발견
 *                 ways[neighbor] = (ways[neighbor] + ways[minNode]) % MOD;
 *             }
 *         }
 *     }
 *
 *     return ways[n - 1];
 * };
 */