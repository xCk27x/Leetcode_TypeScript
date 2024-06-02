function getResults(queries: number[][]): boolean[] {
  const blocks: number[] = [Infinity];
  // binary search
  function binarySearch(num: number): number {
    let left = 0;
    let right = blocks.length - 1;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (blocks[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
};