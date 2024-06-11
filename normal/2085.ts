function countWords(words1: string[], words2: string[]): number {
  const m1 = new Map();
  const m2 = new Map();

  words1.forEach((word) => m1.set(word, (m1.get(word) ?? 0) + 1));
  words2.forEach((word) => m2.set(word, (m2.get(word) ?? 0) + 1));
  
  let sum = 0;
  
  for (const [word, count] of m1.entries()) {
    if (count !== 1) continue;
    if (m2.get(word) === 1) sum++;
  }

  return sum;
}