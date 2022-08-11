function newChickenRecipe(stuffArr, choiceNum) {
  const result = [];
  const newStuff = [];

  for (let stuff of stuffArr) {
    let count = 0;
    let strStuff = stuff + "";
    for (let i = 0; i < strStuff.length; i++) {
      if (strStuff[i] === "0") count++;
    }
    if (count < 3) newStuff.push(stuff);
  }

  if (newStuff.length < choiceNum) return [];

  function dfs(i, subset) {
    if (i === choiceNum) {
      return result.push(subset);
    }
    for (let k = i; k < stuffArr.length; k++) {
      dfs(i + 1, [...subset, newStuff[k]]);
    }
  }

  dfs(0, []);

  return result;
}

const output1 = newChickenRecipe([1, 10, 1100, 1111], 2);
console.log(output1);
/*
  [
    [1, 10], [1, 1100], [1, 1111],
    [10, 1], [10, 1100], [10, 1111],
    [1100, 1], [1100, 10], [1100, 1111],
    [1111, 1], [1111, 10], [1111, 1100]
  ];
*/

// const output2 = newChickenRecipe([10000, 10, 1], 3);
// console.log(output2); // []
