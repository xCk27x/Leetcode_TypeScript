function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;
  
  const w1Set = new Map<string, number>();  
  for (let c of word1)
    !w1Set.has(c) ? w1Set.set(c, 1) : w1Set.set(c, w1Set.get(c)! + 1);
  
  const w2Set = new Map<string, number>();
  for (let c of word2)
    !w2Set.has(c) ? w2Set.set(c, 1) : w2Set.set(c, w2Set.get(c)! + 1);
  
  const w1Key = [...w1Set.keys()].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  const w2Key = [...w2Set.keys()].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  for (let i = 0; i < w1Set.size; i++)
    if (w1Key[i] !== w2Key[i]) return false;

  const w1List = [...w1Set.values()].sort((a, b) => a - b);
  const w2List = [...w2Set.values()].sort((a, b) => a - b);
  for (let i = 0; i < w1Set.size; i++)
    if (w1List[i] !== w2List[i]) return false;
  
  return true;
}

console.log(closeStrings("abc", "bca")); // true