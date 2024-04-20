function findCircleNum(isConnected: number[][]): number {
  const visitedCity = new Array(isConnected.length).fill(false);
  
  function dfs (i: number): void {
    visitedCity[i] = true;
    for (let j = 0; j < isConnected[i].length; j++) {
      if (isConnected[i][j] === 1 && !visitedCity[j]) {
        dfs(j);
      }
    }
  }
  
  let count = 0;
  for (let i = 0; i < isConnected.length; i++) {
    if (!visitedCity[i]){
      dfs(i);
      count++;
    }
  }

  return count;
};

console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]])); // 2