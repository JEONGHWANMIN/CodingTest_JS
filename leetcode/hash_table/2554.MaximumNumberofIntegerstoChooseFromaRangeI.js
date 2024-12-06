/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
   
   const banMap = new Set();

   // O(b)
   for (const banNum of banned) {
        if (banNum <= n) banMap.add(banNum);
   }

   let result = 0;
   let sum = 0;
   // O(n)
   for (let num = 1; num <= n; num++) {
    if (banMap.has(num)) continue;
    if (num + sum > maxSum) continue;

    result++;
    sum += num;
   }

   return result
};

// 시간복잡도: O(b) + O(n)
// 공간복잡도: O(b)
