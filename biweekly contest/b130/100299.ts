function satisfiesConditions(grid: number[][]): boolean {
  let firstRow = grid[0];
  let flag = true;
  
  firstRow.reduce((p, c) => {
    if (p === c) flag = false;
    return c;
  });
  if (!flag) return false;

  for (let i = 1; i < grid.length; i++) {
    for (let j = 0; j < firstRow.length; j++) {
      if (grid[i][j] !== firstRow[j]) {
        return false;
      }
    }
  }

  return true;
}

console.log(
  satisfiesConditions([
    [1, 2, 3],
    [3, 2, 1],
    [2, 1, 3],
  ])
); // false
console.log(
  satisfiesConditions([
    [1, 0, 2],
    [1, 0, 2],
  ])
); // false
console.log(
  satisfiesConditions([
    [4, 4],
    [4, 4],
  ])
); // false
