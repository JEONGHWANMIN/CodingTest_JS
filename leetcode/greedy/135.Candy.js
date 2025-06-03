/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const candies = Array.from({length: ratings.length}, () => 0)

    for (let i = 1; i < ratings.length; i++) {
      if (ratings[i-1] < ratings[i]) {
          candies[i] = candies[i-1] + 1 
      }
    }

    for (let i = ratings.length - 2; i >= 0; i--) {
      if (ratings[i+1] < ratings[i]) {
        candies[i] = Math.max(candies[i+1] + 1, candies[i])
      }
    }

    const count = candies.reduce((acc, cur) => {
      return acc + (cur + 1)
    }, 0)

    return count
};


// 1 2 3 2 1
// 0 1 2 0 0
// 0 0 2 1 0
