function browserStack(actions, start) {
  // Exception
  if (typeof start !== "string") return false;

  let next = [];
  let position = [start];

  for (let action of actions) {
    if (typeof action === "string") {
      position.push(action);
      next = [];
    }
    if (action === 1) {
      if (next.length > 0) {
        const poped = next.pop();
        position.push(poped);
      }
    }
    if (action === -1) {
      if (position.length > 0) {
        const poped = position.pop();
        next.push(poped);
      }
    }
  }

  if (position.length === 0) {
    let cur = next.pop();
    return [position, cur, next];
  }
  let cur = position.pop();
  return [position, cur, next];
}

const actions = ["X", "R", "G", -1, -1, -1, -1, -1];
const start = "C";
const output = browserStack(actions, start);

console.log(output); // [["A"], "B", ["A", "D"]]

/*
start C
C X
C X R 
C X R G
-1 C X R
-1 C X 
-1 C
-1 []
-1 [undefined]
*/

// const actions2 = ["B", -1, "B", "A", "C", -1, -1, "D", -1, 1, "E", -1, -1, 1];
// const start2 = "A";
// const output2 = browserStack(actions2, start2);

// console.log(output2); // [["A", "B"], "D", ["E"]]
/*
start A
A B
-1 A
A B
A B A
A B A C
-1 A B A
-1 A B
A B D
-1 A B


*/
