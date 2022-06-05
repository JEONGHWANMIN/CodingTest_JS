const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString();

const one: any[] = [];
const two: any[] = [];
const three: any[] = [];

for (let i = 1; i <= input; i++) {
	one.push(i);
}

/*
하노이탑 
1. 원반 갯수가 1개면 목표지점에 원반을 옮기고 종료한다.
2. 제일 아래 큰 원반이 목표지점에 도달하면 원반 갯수는 -1 해준다. (그 원반은 이제 정렬이 끝났으므로)
*/
// [1,2,3]
// [3] [2] [1]
function hanoi(num: number): any {}

export {};
