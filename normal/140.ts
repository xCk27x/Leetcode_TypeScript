function wordBreak(s: string, wordDict: string[]): string[] {
  const wordSet = new Set(wordDict);
  const memo = new Map<number, string[]>();

  function dfs(i: number, j: number): string[] {
    if (memo.has(i)) return memo.get(i)!;

    if (j === s.length) {
      const subStr = s.slice(i, j);
      return wordSet.has(subStr) ? [subStr] : [];
    }

    const result: string[] = [];
    const subStr = s.slice(i, j);

    if (wordSet.has(subStr)) {
      result.push(...dfs(j, j + 1).map((str) => `${subStr} ${str}`));
    }
    result.push(...dfs(i, j + 1));

    memo.set(i, result);

    return result;
  }

  return dfs(0, 1);
}
