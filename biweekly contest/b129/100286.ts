function canMakeSquare(grid: string[][]): boolean {
  const map: {[key:string]: number} = {
    'W': -1,
    'B': 1,
  }
  
  if ((map[grid[0][0]] + map[grid[0][1]] + map[grid[1][0]] + map[grid[1][1]]) !== 0)
    return true;
  if ((map[grid[0][1]] + map[grid[0][2]] + map[grid[1][1]] + map[grid[1][2]]) !== 0)
    return true;
  if ((map[grid[1][0]] + map[grid[1][1]] + map[grid[2][0]] + map[grid[2][1]]) !== 0)
    return true;
  if ((map[grid[1][1]] + map[grid[1][2]] + map[grid[2][1]] + map[grid[2][2]]) !== 0)
    return true;
  
  return false;
};

console.log(canMakeSquare([["B","W","B"],["B","W","W"],["B","W","B"]])) // true
console.log(canMakeSquare([["B","W","B"],["W","B","W"],["B","W","B"]])) // false