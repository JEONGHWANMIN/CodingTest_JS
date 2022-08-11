// function rockPaperScissors(num = 3) {
//   // 3P3 -> 6
//   const result = [];
//   const arr = ["rock", "paper", "scissors"];
//   for (let r = 0; r < arr.length; r++) {
//     for (let p = 0; p < arr.length; p++) {
//       for (let s = 0; s < arr.length; s++) {
//         result.push([arr[r], arr[p], arr[s]]);
//       }
//     }
//   }

//   return result;
// }

function rockPaperScissors(rounds = 3) {
  let result = [];
  const arr = ["rock", "paper", "scissors"];

  function dfs(i, subset) {
    console.log(i);
    if (i === rounds) {
      return result.push(subset);
    }

    dfs(i + 1, [...subset, arr[0]]);
    dfs(i + 1, [...subset, arr[1]]);
    dfs(i + 1, [...subset, arr[2]]);
  }

  dfs(0, []);

  return result;
}

let output = rockPaperScissors(5);

console.log(output);
/*
    [
      ["rock", "rock", "rock"],
      ["rock", "rock", "paper"],
      ["rock", "rock", "scissors"],
      ["rock", "paper", "rock"],
      // ...etc ...
    ]
  */
