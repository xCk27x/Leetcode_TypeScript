function countAlternatingSubarrays(nums) {
    let subArray = [nums[0]];
    let sum = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            subArray.push(nums[i + 1]);
            sum += subArray.length;
        }
        else {
            subArray = [nums[i + 1]];
            sum++;
        }
    }
    return sum;
}
;
console.log(countAlternatingSubarrays([0, 1, 1, 1])); // 10
console.log(countAlternatingSubarrays([1, 0, 1, 0])); // 10
console.log(countAlternatingSubarrays([1])); // 10
console.log(countAlternatingSubarrays([0])); // 10
