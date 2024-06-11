function maxTotalReward(rewardValues: number[]): number {
  rewardValues.sort((a, b) => a - b);
  
  const set = new Set<number>([0]);

  for (const num of rewardValues) {
    for (const value of set) {
      if (value < num) {
        set.add(value + num);
      }
    }
  }

  return Math.max(...set.values());
};

console.log(maxTotalReward([1, 1, 3, 3])); // 8
console.log(maxTotalReward([1,6,4,3,2])); // 8