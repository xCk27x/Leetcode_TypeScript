function minDistance(word1: string, word2: string): number {
  const dp: number[][] = [];

  function helper(word1: string, word2: string, i: number, j: number): number {
    if (dp[i] && dp[i][j] !== undefined) return dp[i][j];
    if (word1.length === 0) return word2.length;
    if (word2.length === 0) return word1.length;

    let insert = helper(word1, word2.slice(1), i, j + 1) + 1;

    let remove = helper(word1.slice(1), word2, i + 1, j) + 1;

    let replace = helper(word1.slice(1), word2.slice(1), i + 1, j + 1);
    if (word1[0] !== word2[0]) replace++;

    const curMin = Math.min(insert, remove, replace);
    if (!dp[i]) dp[i] = [];
    dp[i][j] = curMin;

    return curMin;
  }

  return helper(word1, word2, 0, 0);
}

console.log(minDistance("horse", "ros")); // 3
console.log(minDistance("intention", "execution")); // 5
