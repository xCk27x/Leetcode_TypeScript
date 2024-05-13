function minEatingSpeed(piles: number[], h: number): number {
  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    piles.reduce((sum, pile) => {
      return sum + Math.ceil((pile / mid));
    }, 0) > h ? left = mid + 1 : right = mid;
  }

  return left;
};