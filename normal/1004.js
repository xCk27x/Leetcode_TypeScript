// nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]
function longestOnes(nums, k) {
    let max = 0;
    let temp = k;
    let i = 0, j = 0;
    while (j < nums.length) {
        if (nums[j] === 0) {
            temp--;
            if (temp < 0) {
                max = Math.max(max, j - i);
                // console.log('j:', j, 'i:', i, 'max:', max);
                i++;
                j = i - 1;
                temp = k;
            }
        }
        else {
        }
        j++;
    }
    max = Math.max(max, j - i);
    // console.log('j:', j, 'i:', i, 'max:', max);
    return max;
}
;
// nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]
function longestOnes2(nums, k) {
    let right, left;
    for (left = 0, right = 0; right < nums.length; right++) {
        if (nums[right] === 0)
            k--;
        if (k < 0) {
            if (nums[left] === 0) {
                k++;
            }
            left++;
        }
    }
    return right - left;
}
;
console.log(longestOnes2([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(longestOnes2([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));
