const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace("\r", ""));

const N = Number(input[0]);
const meetings = input
  .slice(1)
  .map((meeting) => meeting.split(" ").map(Number));

/**
 *
 * @param {*} n 미팅 숫자
 * @param {*} meetings 미팅[시작시간,종료시간]
 */
function solution(n, meetings) {
  const rooms = [];
  meetings.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  rooms.push(meetings.shift());

  for (let meeting of meetings) {
    const [start, end] = meeting;
    if (rooms[rooms.length - 1][1] <= start) {
      rooms.push(meeting);
    }
  }

  return rooms.length;
}

console.log(solution(N, meetings));
