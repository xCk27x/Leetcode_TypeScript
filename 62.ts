
let posiblePath: number[][] = [];

function uniquePaths(m: number, n: number): number {
  // let posiblePath: number[][] = []
  for (let i = 0; i < m; i++) {
    posiblePath.push(new Array(n).fill(null));
  }
  return uniquePathsHelper(m-1, n-1);
}

function uniquePathsHelper(m: number, n: number): number {
  if (posiblePath[m][n])
    return posiblePath[m][n];
  else if (m === 0 || n === 0) { 
    posiblePath[m][n] = 1;
    return 1;
  }
  else
    return uniquePathsHelper(m - 1, n) + uniquePathsHelper(m, n - 1);
}

// function uniquePathsHelper(m: number, n: number, posiblePath: number[][]): number {
//   if (posiblePath[m][n])
//     return posiblePath[m][n];
//   else if (m === 0 || n === 0) { 
//     posiblePath[m][n] = 1;
//     return 1;
//   }
//   else
//     return uniquePathsHelper(m - 1, n, posiblePath) + uniquePathsHelper(m, n - 1, posiblePath);
// };

// function uniquePaths(m: number, n: number): number {
//   let posiblePath: number[][] = []
//   for (let i = 0; i < m; i++) {
//     posiblePath.push(new Array(n).fill(null));
//   }
//   return uniquePathsHelper(m-1, n-1, posiblePath);
// };

function factorail(n: number): number {
  if (n === 0)
    return 1;
  return n * factorail(n - 1);
}

function uniquePaths2(m: number, n: number) {
  return factorail(m + n - 2) / (factorail(m - 1) * factorail(n - 1));
} 

// console.log(uniquePaths(3, 2)); // 3
// console.log(uniquePaths(7, 3)); // 28
console.log(uniquePaths(25, 9)); // 28