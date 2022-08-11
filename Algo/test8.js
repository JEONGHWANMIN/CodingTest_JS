function divideChocolateStick(M, N) {
  // TODO: 여기에 코드를 작성합니다.
  console.log(M, N);
  let gdc = GDC(4, 8);
  let lcm = LCM(4 * 8, gdc);
  let human = 0;
  console.log("최대공약수 :", gdc);
  console.log("최소공배수 :", lcm);
  // while (M >= 0 && N >= 0) {
  //   human++;

  //   return;
  // }
}

function GDC(A, B) {
  if (B === 0) return A;
  return GDC(B, A % B);
}

function LCM(sum, gdc) {
  return sum * gdc;
}

let M = 4;
let N = 8;
let output = divideChocolateStick(M, N);
console.log(output);
