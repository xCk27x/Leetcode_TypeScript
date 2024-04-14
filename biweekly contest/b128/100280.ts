function minRectanglesToCoverPoints(points: number[][], w: number): number {
  points.sort((a, b) => a[0] - b[0]);
  let newPoints = points.map(p => p[0]);
  let re = 0, x = 0;

  for (let i = 0; i < newPoints.length; ) {
    if (newPoints[i] === x) {
      x += w+1;
      re += 1;
      while (newPoints[i] < x) {
        i++;
      }
    } else {
      x = newPoints[i];
    }
  }
  return re;
};

console.log(minRectanglesToCoverPoints([[2,1],[1,0],[1,4],[1,8],[3,5],[4,6]], 1));
console.log(minRectanglesToCoverPoints([[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6]], 2));
console.log(minRectanglesToCoverPoints([[2,3],[1,2]],0));
console.log(minRectanglesToCoverPoints([[2,3]],2));