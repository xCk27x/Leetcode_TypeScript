function countBits(n) {
    if (n === 0)
        return [0];
    let re = countBits(n - 1);
    let count = 0;
    while (n !== 0) {
        count += n % 2;
        n = Math.floor(n / 2);
    }
    re.push(count);
    return re;
}
;
function countBits2(n) {
    let re = [];
    for (let i = 0; i <= n; i++) {
        let count = 0;
        for (let j = i; j > 0; j = Math.floor(j / 2))
            count += j % 2;
        re.push(count);
    }
    return re;
}
;
console.log(countBits2(2)); // [0,1,1]
console.log(countBits2(5)); // [0,1,1,2,1,2]
