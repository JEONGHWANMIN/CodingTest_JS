/* 
========== 내 접근법 =============
!! MyThink
1. 모든 경우를 다 구한다.
2. 배열을 돌면서 똑같은 배열을 찿으면 그 에 맞는 인덱스를 리턴한다.

TEST : Fail
숫자가 커지면 너무 비 효율적이라서 안됨..
====================================
*/

function orderOfPresentation(N, K) {
  let result = [];

  const arr = Array.from({ length: N }, (x, i) => i + 1);

  function dfs(i, arr) {
    if (i === arr.length) {
      return result.push([...arr]);
    }

    for (let j = i; j < arr.length; j++) {
      // swap
      [arr[i], arr[j]] = [arr[j], arr[i]];
      // dfs
      dfs(i + 1, arr);

      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  dfs(0, arr);
  // console.log(result);
  result.sort();
  for (let i = 0; i < result.length; i++) {
    if (String(result[i]) === String(K)) return i;
  }

  return -1;
}

/* 
========== Reference Code =============
!! 접근법 
1. 각 앞자리에 올 수 있는 경우의 수를 다 구해야 한다. (factorial)
2. 각 경우의 수를 다 더한 값을 출력한다.
====================================
*/

// 나중에 경우의 수 구할 때 사용하는 팩토리얼 함수
function factorial(n) {
  if (n <= 1) {
    return n;
  }
  return n * factorial(n - 1);
}

function orderOfPresentation(N, K) {
  let result = 0;
  // 그 앞에 숫자를 사용한지 알기 위해서 방문 여부 확인 배열
  let visit = Array.from({ length: N + 1 }, (_, i) => false);

  // 각 숫자자리 하나하나 꺼내면서 방문여부 체크
  // 그 뽑은 숫자 앞자리 경우의 수를 팩토리얼 사용해서 확인
  for (let i = 0; i < N; i++) {
    // 맨 첫번쨰 숫자를 뽑는다.
    let num = K[i];
    //
    visit[num] = true;

    let pre_visit = visit.slice(1, num);
    let validCnt = pre_visit.filter((el) => el !== true).length;
    let count = validCnt * factorial(N - i - 1);

    result = result + count;
  }
  console.log(result);
  return result;
}

console.log(orderOfPresentation(3, [2, 3, 1]));
