const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((line) => line.replace('\r', ''));

const n = Number(input.shift())

class Stack {
    #stack = []

    push(val) {
        this.#stack.push(val);
    }
    pop() {
        if (this.size() > 0) return this.#stack.pop();
        return -1
    }
    top() {
        if (this.size() > 0) return this.#stack[this.size() - 1]
        return -1
    }
    size() {
        return this.#stack.length;
    }
    empty() {
        if (this.size() > 0) return 0;
        return 1;
    }
}


function solution(n, commands) {

    const result = []

    const stack = new Stack();

    for (const command of commands) {
        const [cmd, value] = command.split(' ');

        switch (cmd) {
            case 'push':
                stack.push(value);
                break;
            case 'pop':
                result.push(stack.pop());
                break;
            case 'top':
                result.push(stack.top());
                break;
            case 'empty':
                result.push(stack.empty());
                break;
            case 'size':
                result.push(stack.size());
                break
        }
    }

    return result.join('\n');
}

console.log(solution(n, input));
