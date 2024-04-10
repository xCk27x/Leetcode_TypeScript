function insertIndex(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    var mid = 0;
    mid = Math.floor((left + right) / 2);
    while (left <= right) {
        if (arr[mid] <= target) {
            if (target < arr[mid + 1] || arr[mid + 1] === undefined)
                return Math.abs(mid + 1);
            left = mid + 1;
            mid = Math.floor((left + right) / 2);
        }
        else if (arr[mid] > target) {
            right = mid - 1;
            mid = Math.ceil((left + right) / 2);
        }
    }
    return Math.abs(mid);
}
function successfulPairs(spells, potions, success) {
    var re = [];
    potions = potions.sort(function (a, b) { return b - a; }).map(function (p) { return Math.ceil(success / p); });
    console.log('potions: ', potions);
    for (var _i = 0, spells_1 = spells; _i < spells_1.length; _i++) {
        var s = spells_1[_i];
        re.push(insertIndex(potions, s));
    }
    return re;
}
;
console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7)); // [3, 2, 1]
console.log(successfulPairs([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], 25)); // [3, 2, 1]
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16)); // [3, 3, 3]
// console.log(insertIndex([1,2], 2)); // 1
// console.log(insertIndex([2], 2)); // 0
