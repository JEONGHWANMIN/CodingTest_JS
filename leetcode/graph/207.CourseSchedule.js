// 위상 정렬

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = new Map();
    const inDegree = Array.from({length: numCourses}, () => 0);

    for (let [course, preCourse] of prerequisites) {
        inDegree[course]++;

        if (!graph.has(preCourse)) {
            graph.set(preCourse, [])
        }

        graph.get(preCourse).push(course);
    }

    const que = []
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) que.push(i)
    }

    let count = 0;
    while (que.length) {
        const course = que.shift();
        count++;

        if (graph.has(course)) {
            for (let afterCourse of graph.get(course)) {
                inDegree[afterCourse]--;

                if (inDegree[afterCourse] === 0) {
                    que.push(afterCourse)
                }
            }
        }
    }

    return count === numCourses
};
