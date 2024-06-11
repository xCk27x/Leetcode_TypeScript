function wordBreak(s: string, wordDict: string[]): boolean {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  
  for (let i = 1; i <= s.length; i++) {
    for (const word of wordDict) {
      if (dp[i - word.length] &&
          s.slice(i - word.length, i) === word
      ) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
};