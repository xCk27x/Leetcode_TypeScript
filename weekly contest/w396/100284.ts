const vowel = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

function isValid(word: string): boolean {
  if (word.length < 3) return false;

  let hasVowel = false;
  let hasConsonant = false;

  for (let c of word) {
    if (/^[a-zA-Z0-9]$/.test(c)) {
      if (vowel.has(c)) {
        hasVowel = true;
      } else if (!Number.isInteger(parseInt(c))) {
        hasConsonant = true;
      }
    } else {
      return false;
    }
  }

  return hasVowel && hasConsonant;
};

console.log(isValid('a3$e')); // true
console.log(isValid('234Adas')); // true