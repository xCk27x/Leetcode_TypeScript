function minimumSubarrayLength(nums: number[], k: number): number {
    let bitMap = new Map([
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 0]
    ]);

    nums = nums.sort((a, b) => b - a);

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        let temp = nums[i];
        let p = 0
        while (temp > 0) {
            bitMap.set(p, bitMap.get(p)! + temp % 2)
            temp = Math.floor(temp / 2);
            p++;
        }
        for (let j = 0; j < bitMap.size; j++) {
            if (bitMap.get(j)! > 0) {

                sum += Math.pow(2, j);
            }
        }
        if (sum >= k) {
            console.log(bitMap);
            console.log(sum);
            return i + 1;
        }
    }
    return -1;
}

console.log(minimumSubarrayLength([1, 2, 3], 2)); // 3
console.log(minimumSubarrayLength([2, 1, 8], 10)); // 3
