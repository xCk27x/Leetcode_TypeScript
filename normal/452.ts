function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[0] - b[0]);
  let sum = points.length;
  
  points.reduce((p, c) => {
    // two intervals not intersect
    if (p[0] > c[1] || c[0] > p[1]) return c;
    
    // two intervals intersect
    sum--;
    return [Math.max(p[0], c[0]), Math.min(p[1], c[1])];
  });
  
  return sum;
};