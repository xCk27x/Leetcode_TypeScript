function reversePrefix(word: string, ch: string): string {
  let i = word.indexOf(ch);
  return i === -1 ? word : word.slice(0, i + 1).split('').reverse().join('') + word.slice(i + 1);  
};

function reversePrefix2(word: string, ch: string): string {
  let re = '';

  for (let i = 0; i < word.length; i++) {
    re = word[i] + re;
    if (word[i] === ch)
      return re + word.slice(i + 1);
  }
  
  return word;
};