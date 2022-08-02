const LCS = function (str1, str2) {
  //TODO: 여기에 코드를 작성합니다.
  let m = str1.length,
    n = str2.length,
    DP = new Array(m + 1).fill(0).map((_) => new Array(n + 1).fill(0));

  for (let x = m - 1; x >= 0; x--)
    for (let y = n - 1; y >= 0; y--) {
      if (str1[x] === str2[y]) {
        DP[x][y] = 1 + DP[x + 1][y + 1];
      } else {
        DP[x][y] = Math.max(DP[x + 1][y], DP[x][y + 1]);
      }
    }

  return DP;
};

let output = LCS('abcd', 'aceb');
console.log(output); // --> 2 ('ab' or 'ac')

// output = LCS('acaykp', 'capcak');
// console.log(output); // --> 4 ('acak')
