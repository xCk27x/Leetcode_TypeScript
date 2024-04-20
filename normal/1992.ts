function findFarmland(land: number[][]): number[][] {
  function deleteLand(x: number, y: number, x2: number, y2: number): void {
    for (let i = x; i <= x2; i++) {
      for (let j = y; j <= y2; j++) {
        land[i][j] = 0;
      }
    }
  }

  function calcLand(x: number, y: number): number[] {
    let re: number[] = [x, y];

    while (land[x+1] && land[x+1][y] === 1) {
      x++;
    }
    while (land[x][y+1] === 1) {
      y++;
    }
    re.push(x, y);
    deleteLand(re[0], re[1], re[2], re[3]);
    return re;
  }
  
  const re: number[][] = [];

  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[i].length; j++) {
      if (land[i][j] === 1) {
        re.push(calcLand(i, j));
      }
    }
  }
  return re;
};