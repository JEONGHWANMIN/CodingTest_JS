function ocean(target, type) {
  // TODO: 여기에 코드를 작성합니다.
  type.unshift(0);
  console.log(type);
  const arr = Array.from({ length: type.length }, (_, i) =>
    Array.from({ length: target }, (_, i) => 0)
  );
  console.log(arr);
}

let output = ocean(50, [10, 20, 50]);
// [10 10 10 10 10]
// [10 20 20]

// [20 20 10]
// [20 10 10 10]

// [50]
console.log(output); // 4
