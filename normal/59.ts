function generateMatrix(n: number): number[][] {
  const result = new Array(n).fill(0).map(() => new Array(n));
  let num = 1;
  let remainSteps = n, hitXWallTimes = 0;
  let x = 0, y = 0;

  while (num <= n * n) {
    while (remainSteps > 0) {
      result[y][x++] = num++;
      remainSteps--;
    }
    remainSteps = n - ++hitXWallTimes;
    x--;
    y++;

    while (remainSteps > 0) {
      result[y++][x] = num++;
      remainSteps--;
    }
    remainSteps = n - hitXWallTimes;
    y--;
    x--;

    while (remainSteps > 0) {
      result[y][x--] = num++;
      remainSteps--;
    }
    remainSteps = n - ++hitXWallTimes;
    x++;
    y--;

    while (remainSteps > 0) {
      result[y--][x] = num++;
      remainSteps--;
    }
    remainSteps = n - hitXWallTimes;
    y++;
    x++;
  }

  return result;
}
