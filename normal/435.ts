function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1]);
  
  let last = intervals[0][1];
  let re = 0;
  let i = 1;
  
  while (i < intervals.length) {
    intervals[i][0] < last ? re++ : last = intervals[i][1];
    i++;
  }

  return re;
};

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]]));
console.log(eraseOverlapIntervals([[1,2],[2,3]]));