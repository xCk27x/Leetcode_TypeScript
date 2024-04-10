function checkValidString(s: string): boolean {
  let maxParen = 0, minParen = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      maxParen++;
      minParen++;
    } else if (s[i] === ')') {
      maxParen--;
      minParen--;
    } else {
      maxParen++;
      minParen--;
    }
    if (maxParen < 0) return false;
    minParen = Math.max(minParen, 0);
  }
  return minParen === 0;
};