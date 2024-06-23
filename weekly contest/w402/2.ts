function countCompleteDayPairs(hours: number[]): number {
  const record = new Array(24).fill(0);
  let sum = 0;

  for (const temp of hours) {
    sum += record[(24 - temp % 24) % 24];
    record[temp % 24]++;
  }
  
  return sum;
};