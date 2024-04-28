function longestIdealString(s: string, k: number): number {
  const dp = new Array(26).fill(0);
  
  for (let c of s) {
    let a = c.charCodeAt(0) - 97;
    dp[a] += 1;
    for (let i = a - k; i <= a + k; i++) {
      if (i >= 0 && i <= 25 && i !== a) {
        dp[a] = Math.max(dp[a], dp[i] + 1);
      }
    }
  }

  return Math.max(...dp);
};

console.log(longestIdealString("abcde", 1));
console.log(longestIdealString("abcde", 2));
console.log(longestIdealString("slddedwfmo", 16));