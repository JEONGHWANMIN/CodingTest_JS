const getSubSets = function (arr) {
  // subSet 함수는 선언되었을 때의 환경 (flag와subSets)을 계속 기억하게된다.
  // 해당 노드 방문 여부를 표시하는 배열
  let flag = new Array(arr.length).fill(false);
  // 부분 집합들을 모아놓는 배열
  const subSets = [];

  const subSet = function DFS(depth) {
    // BASE CASE
    // 트리의 끝부분에 다다랐을 때 재귀 함수를 종료하고 subSets배열에 push한다.
    if (depth === arr.length) {
      const element = arr.filter((_, index) => flag[index]);
      subSets.push(element);

      return;
    }

    // 트리의 왼쪽 해당 depth는 true
    flag[depth] = true;
    subSet(depth + 1);

    // 트리의 오른쪽 해당 depth는 false
    flag[depth] = false;
    subSet(depth + 1);
  };

  // subSet 함수 호출 : depth 0부터 시작한다.
  subSet(0);
  // 재귀 호출이 모두 끝나고 부분집합 요소들이 담긴 sunSets 배열을 리턴한다.
  return subSets.sort();
};

// let result = getSubSets(['a', 'b', 'c']);
// console.log(result);

function SS(str) {
  let result = [];
  function dfs(depth, slate) {
    //  base-case
    if (depth === str.length) {
      result.push(str.slice());
      return;
    }
    // dfs recursive case

    // exclude
    dfs(depth + 1);

    // include
    slate.push(str[depth]);
    dfs(depth + 1, slate);
  }

  dfs(0, result);

  return result;
}

let oo = SS('abc');
console.log(oo);

/*


*/
