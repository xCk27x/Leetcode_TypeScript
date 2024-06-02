function occurrencesOfElement(nums: number[], queries: number[], x: number): number[] {
  
  const result: number[] = [];
  const xPlace: number[] = [];

  nums.forEach((num, i) => {
    if (num === x) xPlace.push(i);
    
  });

  for (let q of queries) {
    result.push(xPlace[q-1] ?? -1);
  }

  return result;
};

console.log(occurrencesOfElement([1,3,1,7], [1,3,2,4], 1)); // [1,2,-1]