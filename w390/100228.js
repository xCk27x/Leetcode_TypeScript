function minOperations(k) {
    if (k === 1)
        return 0;
    let re = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < k; i++) {
        let j = Math.ceil(k / (1 + i));
        re = Math.min(re, j + i - 1);
    }
    return re;
}
;
console.log(minOperations(1));
console.log(minOperations(11));
