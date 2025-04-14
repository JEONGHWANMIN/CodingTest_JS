/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
function countGoodTriplets(arr = [], a, b, c) {
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    const num1 = arr[i];
    for (let j = i + 1; j < arr.length - 1; j++) {
      const num2 = arr[j];
      const condition1 = Math.abs(num1 - num2);
      if (condition1 > a) continue;
      for (let k = j + 1; k < arr.length; k++) {
        const num3 = arr[k];
        const condition2 = Math.abs(num2 - num3);
        if (condition2 > b) continue;
        const condition3 = Math.abs(num1 - num3);
        if (condition3 > c) continue;
        count++;
      }
    }
  }

  return count;
} 
