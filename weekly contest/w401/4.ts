function maxTotalReward(rewardValues: number[]): number {
  rewardValues.sort((a, b) => b - a);

  const set = new Set<number>([0]);
  const map = new Map<number, number>([[0, Infinity]]);

  for (const val of rewardValues) {
    const newEle: [number, number][] = [];
    for (const num of set) {
      const temp = map.get(num)!;
      if (num + val <= temp) {
        newEle.push([num + val, Math.min(temp - val, val - 1)]);
      }
    }
    for (const [val, left] of newEle) {
      set.add(val);
      map.set(val, left);
    }
  }

  return Math.max(...set.values());
}

console.log(maxTotalReward([1, 1, 3, 3])); // 8
console.log(maxTotalReward([1, 6, 4, 3, 2])); // 8

console.log(maxTotalReward([1, 1, 3, 3])); // 8
console.log(maxTotalReward([1, 6, 4, 3, 2])); // 8
