function maxVowels(s: string, k: number): number {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  
  let maxNum = 0;
  for (let c of s.slice(0, k))
    vowels.has(c) ? maxNum++ : null;
  
  let temp = maxNum;
  for (let i = 1; i <= s.length - k; i++) {
    if (vowels.has(s[i-1])) temp--;
    if (vowels.has(s[i+k-1])) temp++;
    if (temp > maxNum) maxNum = temp;
  }
  return maxNum;
};