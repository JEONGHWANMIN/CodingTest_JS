function GDC(a, b) {
  let R = a % b;
  if (R <= 0) {
    return [a, b];
  }
  let A = b;
  return GDC(A, R);
}

const result = GDC(60, 48);
console.log(result);
