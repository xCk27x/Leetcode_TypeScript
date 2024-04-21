function numberOfSpecialChars(word: string): number {
  const characterSet: Set<string> = new Set();
  const cTrue: Set<string> = new Set();
  const cFalse: Set<string> = new Set();

  for (let c of word) {
    if (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) {
      if (characterSet.has(c.toUpperCase())) {
        cFalse.add(c);
      }
    } else if (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) {
      if (characterSet.has(c.toLowerCase())) {
        cTrue.add(c);
      }
    }
    characterSet.add(c);
  }

  cTrue.forEach((c) => {
    if (cFalse.has(c.toLowerCase())) {
      cTrue.delete(c);
    }
  });

  return cTrue.size;
}

console.log(numberOfSpecialChars("aaAbcBC")); // 1
console.log(numberOfSpecialChars("AbBCab")); // 1
