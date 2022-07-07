/* My Solution */
// const balancedBrackets = function (str) {
//   if (str.length === 0) return true;

//   const Brackets = ['(', ')', '{', '}', '[', ']'];
//   const braket = [];
//   for (let st of str) {
//     if (Brackets.includes(st)) braket.push(st);
//   }

//   // 짝이 안맞으면 일단 false
//   if (braket.length % 2 !== 0) return false;

//   let len = braket.length;
//   for (let i = 0; i < len; i++) {
//     if (braket[0] === '(') {
//       if (braket[1] === ')') {
//         braket.splice(1, 1);
//         braket.shift();
//       } else if (braket[braket.length - 1] === ')') {
//         braket.pop();
//         braket.shift();
//       }
//     }
//     if (braket[0] === '{') {
//       if (braket[1] === '}') {
//         braket.splice(1, 1);
//         braket.shift();
//       } else if (braket[braket.length - 1] === '}') {
//         braket.pop();
//         braket.shift();
//       }
//     }
//     if (braket[0] === '[') {
//       if (braket[1] === ']') {
//         braket.splice(1, 1);
//         braket.shift();
//       } else if (braket[braket.length - 1] === ']') {
//         braket.pop();
//         braket.shift();
//       }
//     }
//   }
//   console.log(braket);
//   if (braket.length === 0) return true;
//   else return false;
// };

const balancedBrackets = function (str) {
  let stack = [];
  let opener = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  let closer = ')}]';

  for (let i = 0; i < str.length; i++) {
    if (str[i] in opener) {
      stack.push(str[i]);
    } else if (closer.includes(str[i])) {
      let top = stack.pop();
      let pair = opener[top];
      if (str[i] !== pair) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// 1. stack ['(']
// [] '(' ')'

let output = balancedBrackets('(');
console.log(output); // // -> false

output = balancedBrackets('()');
console.log(output); // --> true

output = balancedBrackets('(())()(())');
console.log(output); // --> true
