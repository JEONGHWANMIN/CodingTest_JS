/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
  let islandCount = 0;
  for (let row in grid) {
    for (let col in grid[row]) {
      if (grid[row][col] === "1") {
        islandCount++;
        teraform(+row, +col, grid);
        console.log("Break");
      }
    }
  }

  return islandCount;
};

const teraform = (row, col, grid) => {
  if (
    grid[row] === undefined ||
    grid[row][col] === undefined ||
    grid[row][col] === "0"
  )
    return;

  grid[row][col] = "0";

  teraform(row + 1, col, grid);
  teraform(row - 1, col, grid);
  teraform(row, col + 1, grid);
  teraform(row, col - 1, grid);
};
