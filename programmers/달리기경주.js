function solution(players, callings) {
  var answer = [];

  const rankNameMap = {};
  const rankValueMap = {};

  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    rankNameMap[player] = i + 1;
    rankValueMap[i + 1] = player;
  }

  for (let call of callings) {
    const losr = rankNameMap[call];
    const losp = call;
    const winp = rankValueMap[losr - 1];
    const winr = rankNameMap[winp];

    rankNameMap[losp] = winr;
    rankValueMap[winr] = losp;

    rankNameMap[winp] = losr;
    rankValueMap[losr] = winp;
  }

  for (let i = 1; i <= players.length; i++) {
    answer.push(rankValueMap[i]);
  }

  return answer;
}
