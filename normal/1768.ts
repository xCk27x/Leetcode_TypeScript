function mergeAlternately(word1: string, word2: string): string {
  let re = '', minLen = 0, is1: boolean = true;

  if (word1.length > word2.length) {
    minLen = word2.length; 
    is1 = false;
  } 
  else
    minLen = word1.length;

  for (let i = 0; i < minLen; i++)
    re += word1[i] + word2[i];

  return re + (is1 ? word2.slice(minLen) : word1.slice(minLen));
};

console.log(mergeAlternately('abc', 'pqr')); // apbqcr
console.log(mergeAlternately('ab', 'pqrs')); // apbqrs