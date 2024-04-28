function Cnm(n: number, m: number): number {
    let ans = 1;
    for (let i = 1; i <= m; i++) {
        ans = ans * (n - i + 1) / i;
    }
    return ans;
}

function numberOfStableArrays(zero: number, one: number, limit: number): number {
  let mod = 1e9 + 7;
  const len =  zero + one

  let result = Cnm(len, zero);

  for (let i = 0; i < len - limit; i++) {
    result -= Cnm(len - i - 1, zero) * Cnm(i, limit - 1) % mod;
  }

  return result % mod;    
};

console.log(numberOfStableArrays(1, 1, 2)); // 1
console.log(numberOfStableArrays(1, 2, 1)); // 3
console.log(numberOfStableArrays(3, 3, 2)); // 2