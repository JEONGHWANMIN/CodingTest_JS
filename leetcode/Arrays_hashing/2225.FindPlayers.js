/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  const answer = [[], []];

  const loserMap = {};
  const playerList = [...new Set(matches.flat())].sort((a, b) => a - b);

  for (let ar of matches) {
    const [, loser] = ar;
    loserMap[loser] = (loserMap[loser] | 0) + 1;
  }

  for (let player of playerList) {
    if (!(player in loserMap)) answer[0].push(player);
    else if (loserMap[player] === 1) answer[1].push(player);
  }

  return answer;
};
