function subsetsWithDup(nums: number[]): number[][] {
  const elements: number[][] = [];
  const dupNums = [...nums].sort((a, b) => a - b); 

  // generate new array with duplicated elements
  for (let i = 0, j = 1; j <= dupNums.length; i = j, j++) {
    const curNum = dupNums[i];
    
    while (dupNums[j] === curNum) {
      j++;
    }
    elements.push(new Array(j - i).fill(curNum)); 
  }

  // backtrace
  const result: number[][] = [[]];
  for (const ele of elements) {
    const times = result.length;
    for (let i = 0; i < times; i++) {
      for (let j = 1; j <= ele.length; j++) {
        result.push([...result[i], ...ele.slice(0, j)]);
      }
    }
  }

  return result;
};