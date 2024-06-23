function maximumTotalDamage(power: number[]): number {
  const record = new Map<number, number>();
  for (const damage of power) {
    record.set(damage, (record.get(damage) || 0) + damage);
  }
  
  let last = 0;
  const dp = new Array(3).fill(0);

  for (const [key, value] of [...record.entries()].sort((a, b) => a[0] - b[0])) {
    if (key - last === 1) {
      let temp = dp[2];
      dp[2] = Math.max(dp[2], dp[0] + value);
      dp[0] = dp[1];
      dp[1] = temp;
    } else if (key - last === 2) {
      let temp = dp[2];
      dp[2] = Math.max(dp[2], dp[1] + value);
      dp[1] = temp;
      dp[0] = temp;
    } else {
      let temp = dp[2];
      dp[2] = dp[2] + value;
      dp[1] = temp;
      dp[0] = temp;
    }
    last = key;
  }
  return dp[2];
};

// console.log(maximumTotalDamage([1,1,3,4])); // 6
// console.log(maximumTotalDamage([7,1,6,6])); // 13
// console.log(maximumTotalDamage([5,1,4])); // 13
// console.log(maximumTotalDamage([1,1,1,1,1,1])); // 
console.log(maximumTotalDamage([5,9,2,10,2,7,10,9,3,8])); // 