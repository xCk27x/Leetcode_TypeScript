function Cnm(n, m) {
    let ans = 1;
    for (let i = 1; i <= m; i++) {
        ans = ans * (n - i + 1) / i;
    }
    return ans;
}
function numberOfStableArrays(zero, one, limit) {
    let mod = 1e9 + 7;
    let ans = 0;
    for (let i = 0; i <= limit; i++) {
        let j = limit - i;
        if (i * 0 + j * 1 === one && i + j === limit) {
            ans += Cnm(limit, i);
            ans %= mod;
        }
    }
    return ans;
}
;
console.log(numberOfStableArrays(1, 1, 2)); // 1
console.log(numberOfStableArrays(1, 2, 1)); // 3
console.log(numberOfStableArrays(3, 3, 2)); // 2
