const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../Input.txt";

const input = `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`;

console.log(input);

function solution(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === ".") return result.join("\n");
  }
}

function isValid(str) {
  const opener = ["(", "{", "["];
  const closer = [")", "}", "]"];
  const closerMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (opener.includes(str[i])) {
      stack.push(str[i]);
    } else if (closer.includes(str[i])) {
      if (stack.at(-1)) {
      }
    }
  }
}

solution(input.split("\n"));
