function maxScoreWords(words: string[], letters: string[], score: number[]): number {
  const freq: number[] = new Array(26).fill(0);
  const base = 'a'.charCodeAt(0);
  letters.forEach((c) => freq[c.charCodeAt(0) - base]++);

  function wordScore(word: string): number {
    let sum = 0;
    for (let c of word) {
      sum += score[c.charCodeAt(0) - base];
    }
    return sum;
  }

  function canSpell(word: string, remainFreq: number[]): boolean {
    const useFreq = new Array(26).fill(0);
    for (let c of word) {
      useFreq[c.charCodeAt(0) - base]++;
      if (useFreq[c.charCodeAt(0) - base] > remainFreq[c.charCodeAt(0) - base]) {
        return false;
      }
    }
    return true;
  }

  function backtracing(remainWords: string[], freq: number[], idx: number): number {
    if (idx === remainWords.length) return 0;
  
    const notUse = backtracing(remainWords, freq, idx + 1);
    let use = 0;
    if (canSpell(remainWords[idx], freq)) {
      for (let c of remainWords[idx]) {
        freq[c.charCodeAt(0) - base]--;
      }
      use = wordScore(remainWords[idx]) + backtracing(remainWords, freq, idx + 1);
      for (let c of remainWords[idx]) {
        freq[c.charCodeAt(0) - base]++;
      }
    }
    return Math.max(notUse, use);
  }

  return backtracing(words, freq, 0);
};