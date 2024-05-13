function findPermutation(nums: number[]): number[] {
  const perm: number[] = [0];
  const pairs: [number, number][] = nums.map((num, i) => [num, i]);
  pairs.sort((a, b) => a[0] - b[0]);
  let visited = Array.from({ length: nums.length }, () => false);
  visited[0] = true;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let next = pairs[j][1];
      if (visited[next]) 
        continue;
      perm.push(pairs[j][1]);
      visited[next] = true;
      break;
    }
  }

  return perm;
};

console.log(findPermutation([1,0,2])); // [0,1,2,3]
console.log(findPermutation([0,2,1])); // [0,1,2,3]