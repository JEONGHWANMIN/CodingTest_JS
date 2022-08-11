function missHouseMeal(sideDishes) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];

  function dfs(i, subset) {
    if (i === sideDishes.length) {
      subset.sort();
      return result.push(subset);
    }

    dfs(i + 1, [...subset]);
    dfs(i + 1, [...subset, sideDishes[i]]);
  }

  dfs(0, []);
  return result.sort();
}

let output = missHouseMeal(["eggroll", "kimchi", "fishSoup"]);
console.log(output);
/*
[ [], 
  [ 'eggroll' ], 
  [ 'eggroll', 'fishSoup' ], 
  [ 'eggroll', 'fishSoup', 'kimchi' ], 
  [ 'eggroll', 'kimchi' ], 
  [ 'fishSoup' ], 
  [ 'fishSoup', 'kimchi' ], 
  [ 'kimchi' ]
] 
*/
