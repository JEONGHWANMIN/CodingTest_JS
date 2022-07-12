// 순열
const Permutations = (arr, selectNum) => {
  if (selectNum === 1) return arr.map((el) => [el]);
  let result = [];

  arr.forEach((v, i) => {
    const rest = arr.slice(i + 1); // [2,3]
    const permutaion = Permutations(rest, selectNum - 1);
    const attached = permutaion.map((permu) => [v, ...permu]);
    result.push(...attached);
  });

  return [...result];
};

// console.log(Permutations([1, 2, 3], 1));
// console.log(Permutations(['a', 'b', 'c'], i));
// console.log(Permutations([1, 2, 3, 4], 3));

function strPermutaion(arr) {
  let result = [];

  const dfs = (i, arr) => {
    if (i === arr.length) {
      return result.push([arr.join('')]);
    }

    // 순열은 i,j를 설정해서 dfs돌리면서 자리를 바꿔주는게 관건
    for (let j = i; j < arr.length; j++) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      dfs(i + 1, arr);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  dfs(0, arr);

  console.log(result);
}

strPermutaion(['a', 'b', 'c']);
