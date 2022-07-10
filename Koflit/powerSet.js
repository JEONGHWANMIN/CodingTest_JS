const powerSet = (str) => {
  let result = [['']];

  // 문자 전처리
  let setStr = new Set([...str]);
  let arr = Array.from([...setStr]);
  arr.sort();
  str = arr.join('');

  console.log('str :', str);

  // dfs
  const dfs = (depth, subset) => {
    if (depth === str.length) return;

    result.push(subset);
    // left
    dfs(depth + 1, [...subset]);
    // right
    subset.push(str[depth]);
    dfs(depth + 1, [...subset]);
  };

  dfs(0, []);

  result.sort();

  let answer = [];
  for (let arr of result) {
    answer.push(arr.join(''));
  }

  return answer;
};

// ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']
console.log(powerSet('jjump'));

/*
jmpu
result = ['']
   
*/
