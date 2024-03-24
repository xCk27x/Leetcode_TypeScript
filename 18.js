function twoSum(nums, target) {
    const re = [];
    for (let left = 0, right = nums.length - 1; left < right;) {
        switch (Math.sign(nums[left] + nums[right] - target)) {
            case 1:
                do {
                    right--;
                } while (nums[right] === nums[right + 1] && left < right);
                break;
            case -1:
                do {
                    left++;
                } while (nums[left] === nums[left - 1] && left < right);
                break;
            case 0:
                re.push([nums[left], nums[right]]);
                do {
                    right--;
                } while (nums[right] === nums[right + 1] && left < right);
                do {
                    left++;
                } while (nums[left] === nums[left - 1] && left < right);
                break;
        }
    }
    return re;
}
function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    let re = [];
    for (let left = 0, right = nums.length - 1; left + 2 < right;) {
        re = re.concat(twoSum(nums.slice(left + 1, right), target - nums[left] - nums[right]).map((e) => [nums[left], ...e, nums[right]]));
        if (right - left < 4)
            break;
        else {
            re = re.concat(twoSum(nums.slice(left + 2, right), target - nums[left + 1] - nums[right]).map((e) => [nums[left + 1], ...e, nums[right]]));
            re = re.concat(twoSum(nums.slice(left + 1, right - 1), target - nums[left] - nums[right - 1]).map((e) => [nums[left], ...e, nums[right - 1]]));
            do {
                right--;
            } while (nums[right] === nums[right + 1] && left + 2 < right);
            do {
                left++;
            } while (nums[left - 1] === nums[left] && left + 2 < right);
        }
    }
    return re;
}
;
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
