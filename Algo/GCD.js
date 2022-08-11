function GCD(A, B) {
  if (B === 0) return A;
  return GCD(B, A % B);
}

function LCM(A, B, gcd) {
  return (A * B) / gcd;
}

const gcd = GCD(4, 8);
console.log(gcd);

const lcm = LCM(12, 18, gcd);
console.log(lcm);
