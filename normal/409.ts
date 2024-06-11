function longestPalindrome(s: string): number {
  const map = new Map<string, number>();
  
  for (const c of s) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }

  let sum = 0;
  let hasOdd = false;
  for (const [c, count] of map) {
    if (count % 2 === 0) {
      sum += count;
    } else {
      hasOdd = true;
      sum += count - 1;
    }
  }

  return sum + (hasOdd ? 1 : 0);
};

function longestPalindrome2(s: string): number {
  const set = new Set();
  let sum = 0;

  for (const c of s) {
    if (set.has(c)) {
      set.delete(c);
      sum += 2;
    } else {
      set.add(c);
    }
  }

  return sum + (set.size === 0 ? 0 : 1);
}