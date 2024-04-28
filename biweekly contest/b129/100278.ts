function numberOfRightTriangles(grid: number[][]): number {
  if (grid.length < 2 || grid[0].length < 2) return 0;
  
  let count = 0;
  let dp: number[] = new Array(grid[0].length).fill(0);
  for (let i = 0; i < grid.length; i++) {
    let temp = 0;
    for (let j = 0; j < grid[0].length; j++) 
      if (grid[i][j] === 1) temp++;
    for (let j = 0; j < grid[0].length; j++) 
      if (grid[i][j] === 1) {
        count += (dp[j] * (temp - 1)) < 0 ? 0 : (dp[j] * (temp - 1)); 
        dp[j]++;
      }
  }

  dp = new Array(grid[0].length).fill(0);
  for (let i = grid.length - 1; i >= 0; i--) {
    let temp = 0;
    for (let j = 0; j < grid[0].length; j++)
      if (grid[i][j] === 1) temp++;
    for (let j = 0; j < grid[0].length; j++) 
      if (grid[i][j] === 1) {
        count += (dp[j] * (temp - 1)) < 0 ? 0 : (dp[j] * (temp - 1)); 
        dp[j]++;
      }
  }
  
  return count;
}

console.log(numberOfRightTriangles([[0,1,0],[0,1,1],[0,1,0]])) // 2
console.log(numberOfRightTriangles([[1,0,0,0],[0,1,0,1],[1,0,0,0]])) // 0
console.log(numberOfRightTriangles([[1,0,1],[1,0,0],[1,0,0]])) // 0
console.log(numberOfRightTriangles([[1]])) // 0
console.log(numberOfRightTriangles([[0,1],[1,0],[1,0]])) // 0
console.log(numberOfRightTriangles([[0,0],[0,1],[1,1]])) // 1