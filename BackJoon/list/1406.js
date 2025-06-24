const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(strs, iter, commands) {
    // 두 개의 스택 사용
    const leftStack = strs.split('');  // 커서 왼쪽 문자들
    const rightStack = [];             // 커서 오른쪽 문자들 (뒤집어서 저장)

    for (let command of commands) {
        const cmd = command.split(' ');

        if (cmd[0] === 'L') {
            // 왼쪽으로 이동: 왼쪽 스택의 top을 오른쪽 스택으로
            if (leftStack.length > 0) {
                rightStack.push(leftStack.pop());
            }
        }
        else if (cmd[0] === 'D') {
            // 오른쪽으로 이동: 오른쪽 스택의 top을 왼쪽 스택으로
            if (rightStack.length > 0) {
                leftStack.push(rightStack.pop());
            }
        }
        else if (cmd[0] === 'B') {
            // 백스페이스: 왼쪽 스택의 top 제거
            if (leftStack.length > 0) {
                leftStack.pop();
            }
        }
        else if (cmd[0] === 'P') {
            // 문자 삽입: 왼쪽 스택에 추가
            leftStack.push(cmd[1]);
        }
    }

    // 결과 출력: 왼쪽 스택 + 오른쪽 스택 뒤집기
    const result = leftStack.join('') + rightStack.reverse().join('');
    console.log(result);
}

const strs = input.shift();
const iter = input.shift();
const commands = input;

solution(strs, iter, commands);
