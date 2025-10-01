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
  const checkEnter = (startTime, chatTime) => {
    const [sh, sm] = startTime.split(":")
    const [ch, cm] = chatTime.split(":")

    const start = new Date().setHours(sh, sm)
    const chat = new Date().setHours(ch, cm)

    return start >= chat
  }

  const checkExit = (endTime, quitTime, chatTime) => {
    const [eh, em] = endTime.split(":")
    const [qh, qm] = quitTime.split(":")
    const [ch, cm] = chatTime.split(":")

    const end = new Date().setHours(eh, em)
    const quit = new Date().setHours(qh, qm)
    const chat = new Date().setHours(ch, cm)

    return chat >= end && chat <= quit
  }

  const enterSet = new Set();
  const exitSet = new Set();

  for (let chat of chats) {
    const [time, nickname] = chat.split(" ")

    if (checkEnter(s, time)) enterSet.add(nickname)
    if (checkExit(e, q, time)) exitSet.add(nickname)
  }

  let result = 0;
  [...enterSet.values()].forEach((nickname) => {
    if (exitSet.has(nickname)) result++
  })

  return result
}


console.log(solution(S, E, Q, arr));
