function atMostKDistinct(nums, n) {
    let re = 0;
    let left = 0;
    let right = 0;
    let charMap = new Map();
    while (right < nums.length) {
        let cR = nums[right];
        charMap.has(cR) ? charMap.set(cR, charMap.get(cR) + 1) : charMap.set(cR, 1);
        while (charMap.size > n) {
            let cL = nums[left];
            charMap.get(cL) > 1 ? charMap.set(cL, charMap.get(cL) - 1) : charMap.delete(cL);
            left++;
        }
        right++;
        re += right - left + 1;
    }
    return re;
}
function subarraysWithKDistinct(nums, k) {
    return atMostKDistinct(nums, k) - atMostKDistinct(nums, k - 1);
}
;
console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)); // 7
console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3)); // 3
