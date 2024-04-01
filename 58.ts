function lengthOfLastWord(s: string): number {
  // console.log(s.split(' '))
  s = s.trim();
  return s.split(' ').pop()!.length;
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord("   fly me   to   the moon  "))