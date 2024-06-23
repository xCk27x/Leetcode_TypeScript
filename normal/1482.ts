function minDays(bloomDay: number[], m: number, k: number): number {
  function canMakeAtLeastMBoquets(day: number): boolean {
    let count = 0;
    let accFlowers = 0;

    for (const flower of bloomDay) {
      if (flower <= day) {
        if (++accFlowers === k) {
          count++;
          accFlowers = 0;
        }
      } else {
        accFlowers = 0;
      }
    }

    return count >= m;
  }

  // main
  if (m * k > bloomDay.length) return -1;
  
  const minDay = Math.min(...bloomDay);
  const maxDay = Math.max(...bloomDay);

  let left = minDay;
  let right = maxDay;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    canMakeAtLeastMBoquets(mid) ? right = mid - 1 : left = mid + 1;
  }

  return left > maxDay ? -1 : left;
};