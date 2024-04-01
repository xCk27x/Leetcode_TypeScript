function sumOfPowers(nums, k) {
    let re = 0;
    for (let i = 0; i < nums.length - k; i++) {
        let tempList = nums.slice(i, i + k).sort((a, b) => a - b);
        let diff = 0;
        tempList.reduce((p, c) => {
            let temp = Math.abs(p - c);
            temp > diff ? diff = temp : null;
            return c;
        });
        re += diff;
    }
    return re;
}
;
console.log(sumOfPowers([1, 2, 3, 4], 3)); // 4
