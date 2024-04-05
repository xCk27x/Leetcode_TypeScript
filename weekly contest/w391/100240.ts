function minimumDistance(points: number[][]): number {
  points.sort((a, b) => a[0] - b[0]);
  console.log(points);

  let distance = 0;

  return 0;
};

console.log(minimumDistance([[1, 1], [3, 4], [-1, 0]])); // 7