function minFallingPathSum(grid: number[][]): number {
  const dp: number[] = new Array(grid[0].length).fill(0);
  const record: number[][] = [[0,0], [0,1], [0,0], [0,0]];
  
  for (let row of grid) {
    [record[2], record[3]] = [[Infinity,0], [Infinity,1]];
    for (let i = 0; i < row.length; i++) {
      dp[i] = row[i] + (i === record[0][1] ? record[1][0] : record[0][0]);
      if (dp[i] < record[3][0])
        if (dp[i] < record[2][0]) {
          record[3] = record[2];
          record[2] = [dp[i], i];
        } else 
          record[3] = [dp[i], i];
    }
    [record[0], record[1]] = [record[2], record[3]];
  }
  
  return Math.min(...dp);
};

function minFallingPathSum2(grid: number[][]): number {
  const n = grid.length;
  for (let i = 1; i < n; i++) {
    let Sorted = [...grid[i-1]].sort((a, b) => a - b);
    for (let j = 0; j < n; j++) {
      grid[i][j] += (grid[i-1][j] === Sorted[0]) ? Sorted[1] : Sorted[0];
    }
  }
  return Math.min(...grid[grid.length - 1]);
};

console.log(minFallingPathSum([[1,2,3],[4,5,6],[7,8,9]])); // 13
console.log(minFallingPathSum([[7]])); // 7
