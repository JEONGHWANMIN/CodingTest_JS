/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const graph = new Map();
    const visited = Array.from({length: isConnected.length}, () => false);

    for (let i = 0; i < isConnected.length; i++) {
        graph.set(i, [])
        for (let j = 0; j < isConnected.length; j++) {
            if (i === j) continue;
            if (isConnected[i][j] === 1) {
                graph.get(i).push(j)
            }
        }
    }

    let count = 0;

    function bfs(i) {
        visited[i] =  true
        const que = [...graph.get(i)]
        while (que.length) {
            const poped = que.shift();

            if (!visited[poped]) {
                visited[poped] = true;
                que.push(...graph.get(poped))
            }
        }

        return 1
    }

    for (let i = 0; i < isConnected.length; i++) {
        if (visited[i]) continue;
        count += bfs(i)
    }


    return count;
};
