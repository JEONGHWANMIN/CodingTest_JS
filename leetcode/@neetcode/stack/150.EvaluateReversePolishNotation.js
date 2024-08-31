/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []
    const operators = {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '*': (a,b) => a * b,
        '/': (a,b) => Math.trunc(a / b),
    }


    for (const token of tokens) {
        if (token in operators) {
            const num1 = stack.pop()
            const num2 = stack.pop()
            stack.push(operators[token](num2, num1))
        } else {
            stack.push(Number(token))
        }
    }

    return stack[0]
};


console.log(evalRPN(["2","1","+","3","*"]))
console.log(evalRPN(["4","13","5","/","+"]))
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
console.log(evalRPN(["-3","9","*"]))

