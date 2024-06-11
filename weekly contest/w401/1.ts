function numberOfChild(n: number, k: number): number {
  let left = k % ((n-1) * 2);  

  if (left <= n - 1) {
    return left;
  } else {
    return 2*n - left - 2;
  }
};

console.log(numberOfChild(3, 1)); // 1
console.log(numberOfChild(3, 7)); // 1
console.log(numberOfChild(3, 5)); // 1
console.log(numberOfChild(5, 6)); // 1
