let newArr = new Array(10000).fill().map((v, idx) => idx + 1);

function d(num) {
  let str_n = num + '';
  let result = num;
  for (let i = 0; i < str_n.length; i++) {
    result = result + +str_n[i];
  }
  // console.log(result);
  newArr = newArr.filter((v) => v !== result);
}

for (let i = 0; i <= 10000; i++) {
  d(i);
}

// d(110);
let console_log = '';
for (let i = 0; i < newArr.length; i++) {
  console_log = console_log + newArr[i] + '\n';
}
console.log(console_log);
//  1, 3, 5, 7, 9, 20, 31, 42, 53, 64, 75, 86, 97
