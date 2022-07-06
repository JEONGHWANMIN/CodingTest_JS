const balancedBrackets = function (str) {
  if (str.length === 0) return true;

  const Brackets = ['(', ')', '{', '}', '[', ']'];
  const braket = [];
  for (let st of str) {
    if (Brackets.includes(st)) braket.push(st);
  }

  // 짝이 안맞으면 일단 false
  if (braket.length % 2 !== 0) return false;

  let len = braket.length;
  for (let i = 0; i < len; i++) {
    if (braket[0] === '(') {
      if (braket[1] === ')') {
        braket.splice(1, 1);
        braket.shift();
      } else if (braket[braket.length - 1] === ')') {
        braket.pop();
        braket.shift();
      }
    }
    if (braket[0] === '{') {
      if (braket[1] === '}') {
        braket.splice(1, 1);
        braket.shift();
      } else if (braket[braket.length - 1] === '}') {
        braket.pop();
        braket.shift();
      }
    }
    if (braket[0] === '[') {
      if (braket[1] === ']') {
        braket.splice(1, 1);
        braket.shift();
      } else if (braket[braket.length - 1] === ']') {
        braket.pop();
        braket.shift();
      }
    }
  }
  console.log(braket);
  if (braket.length === 0) return true;
  else return false;
};

let output = balancedBrackets('(');
console.log(output); // // -> false

output = balancedBrackets('()');
console.log(output); // --> true

output = balancedBrackets('(())()(())');
console.log(output); // --> true
