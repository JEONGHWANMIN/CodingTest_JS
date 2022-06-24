function findMatryoshka(matryoshka, size) {
  // TODO: 여기에 코드를 작성합니다.
  // base-case
  if (matryoshka.size === size) return true;
  if (matryoshka.matryoshka) return findMatryoshka(matryoshka.matryoshka, size);
  return false;
}

const matryoshka = {
  size: 10,
  matryoshka: {
    size: 9,
    matryoshka: null,
  },
};

let output = findMatryoshka(matryoshka, 9);
console.log(output); // --> true

output = findMatryoshka(matryoshka, 8);
console.log(output); // --> false
