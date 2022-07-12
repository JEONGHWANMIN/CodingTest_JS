const powerSet = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];

  let setStr = new Set([...str]);
  let arr = Array.from([...setStr]);
  arr.sort();
  str = arr.join('');

  function helper(i, set) {
    if (i === str.length) {
      return result.push(set);
    }
    helper(i + 1, [...set]);
    helper(i + 1, [...set, str[i]]);
  }

  helper(0, []);

  console.log(result);
};

let output1 = powerSet('abc');
console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']
