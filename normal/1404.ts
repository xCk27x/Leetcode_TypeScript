function numSteps(s: string): number {
  const sList = s.split('');
  let count = 0;
  for (let i = sList.length - 1; i > 0 ; i--, count++) {
    if (sList[i] === '1') {
      count++;
      let j = i - 1;
      while (j >= 0 && sList[j] === '1') {
        sList[j] = '0';
        j--;
      }
      if (j < 0) {
        sList.unshift('1');
        i++;
      } else {
        sList[j] = '1';
      } 
    }
  }
  return count;
};

console.log(numSteps("1101")); // 6