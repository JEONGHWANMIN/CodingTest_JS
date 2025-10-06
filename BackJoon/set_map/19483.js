const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const [S, E, Q] = input.shift().split(" ")
const arr = input

function solution(s, e, q, chats) {
  // 시간을 분 단위로 변환하는 함수
  const timeToMinutes = (time) => {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  }

  const startMin = timeToMinutes(s);
  const endMin = timeToMinutes(e);
  const quitMin = timeToMinutes(q);

  const enterSet = new Set();
  const exitSet = new Set();

  for (let chat of chats) {
    const [time, nickname] = chat.split(" ");
    const chatMin = timeToMinutes(time);

    // 시작 시간 이전 또는 같으면 입장
    if (chatMin <= startMin) {
      enterSet.add(nickname);
    }

    // 종료 시간과 퇴장 마감 시간 사이면 퇴장
    if (chatMin >= endMin && chatMin <= quitMin) {
      exitSet.add(nickname);
    }
  }

  // 입장과 퇴장 모두 한 사람 카운트
  let result = 0;
  for (let nickname of enterSet) {
    if (exitSet.has(nickname)) result++;
  }

  return result;
}

console.log(solution(S, E, Q, arr));
