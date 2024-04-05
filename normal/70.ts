function climbStairs(n: number): number {
  return (n === 1 || n === 0) ? 1 : climbStairs(n - 1) + climbStairs(n - 2);
};

function climbStairs2(n: number): number {
  function countStairs(k: number): number {
    let i = 2;
    while (i <= k) {
      solutionList[i] = solutionList[i - 1] + solutionList[i - 2];
      // console.log(i, ': ', solutionList);
      i++;
    }
    return solutionList[k];
  }
  
  let solutionList = [1, 1];
  return countStairs(n);
}
const sol = [1, 1];
function climbStairs3(n: number): number {
  if (n <= 3) return n;
  if (!sol[n]) sol[n] = climbStairs3(n - 2) + climbStairs3(n - 1);
  return sol[n]; 
}

// console.log(climbStairs2(2)) // 2
// console.log(climbStairs2(3)) // 3
// console.log(climbStairs2(8)) // 
console.log(climbStairs2(45)) // 5