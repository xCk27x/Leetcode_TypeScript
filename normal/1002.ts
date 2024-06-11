function commonChars(words: string[]): string[] {
  let map = new Map<string, number>();
  for (const c of words[0]) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }

  for (let i = 1; i < words.length; i++) {
    const newMap = new Map<string, number>();
    for (let c of words[i]) {
      const count = map.get(c);
      if (count) {
        newMap.set(c, (newMap.get(c) ?? 0) + 1);
        (count === 1) ? map.delete(c) : map.set(c, count - 1);
      }
    }
    map = newMap;
  }

  const result = [];
  for (const [c, count] of map) {
    for (let i = 0; i < count; i++) {
      result.push(c)
    }
  }

  return result;
}

function commonChars2(words: string[]): string[] {
  const dp = new Array(26).fill(Infinity);
  
  for (const word of words) {
    const wordDp = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
      wordDp[word.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < 26; i++) {
      dp[i] = Math.min(dp[i], wordDp[i]);
    }
  }

  const result = [];
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < dp[i]; j++) {
      result.push(String.fromCharCode(i + 97));
    }
  }

  return result;
}