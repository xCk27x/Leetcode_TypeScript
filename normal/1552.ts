function maxDistance(position: number[], m: number): number {
  function canPutMBalls(force: number): boolean {
    let place = position[0];
    let count = 1;
    for (let i = 1; i < position.length && count < m; i++) {
      if (position[i] - place >= force) {
        place = position[i];
        count++;
      }
    }
    return count === m;
  }
  
  // Binary search
  position.sort((a, b) => a - b);
  let left = 1;
  let right = position[position.length - 1] - position[0];

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (canPutMBalls(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}