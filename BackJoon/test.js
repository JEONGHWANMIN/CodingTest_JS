function ABCheck(str) {
  // code goes here
  let count = 1;
  let CountStart = false;
  let Start;
  for (let i = 0; i < str.length; i++) {
    if (Start !== 'A' && count === 5 && str[i].toUpperCase() === 'A')
      return true;
    if (Start !== 'B' && count === 5 && str[i].toUpperCase() === 'B')
      return true;
    if (count > 5) count = 0;
    if (str[i].toUpperCase() === 'A') {
      count = 1;
      CountStart = true;
      Start = 'A';
    } else if (str[i].toUpperCase() === 'B') {
      count = 1;
      CountStart = true;
      Start = 'B';
    }

    if (CountStart) count++;
  }
  return false;
}
let output = ABCheck('lane Borrowed');
console.log(output); // --> true

output = ABCheck('TgDrnjAz6kAbdEaxFkrKIsa');
console.log(output); // --> true
