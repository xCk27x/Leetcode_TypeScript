function findKthLargest(nums, k) {
    var _a, _b;
    if (nums.length === 1)
        return nums[0];
    var pivot = 0;
    for (var i = 1, j = nums.length - 1; i < j;) {
        while (nums[pivot] < nums[j] && i <= j) {
            j--;
        }
        while (nums[pivot] >= nums[i] && i <= j) {
            i++;
        }
        console.log(nums);
        console.log('i =', i, ', j =', j, ', k = ', k);
        if (i > j) {
            _a = [nums[j], nums[pivot]], nums[pivot] = _a[0], nums[j] = _a[1];
            if (nums.length - j === k) {
                return nums[j];
            }
            else if (nums.length - j < k) {
                // console.log('send right');
                return findKthLargest(nums.slice(0, j), k - (nums.length - j));
            }
            else {
                // console.log('send left');
                return findKthLargest(nums.slice(j + 1), k);
            }
        }
        else {
            _b = [nums[j], nums[i]], nums[i] = _b[0], nums[j] = _b[1];
            i++;
            j--;
        }
    }
}
;
console.log(findKthLargest([1, 1, 1, 1, 1, 1, 1, 1], 6));
// console.log(findKthLargest([3, 2, 1, 5, 6, 4, 7, 0], 6));
