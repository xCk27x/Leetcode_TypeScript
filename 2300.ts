function insertIndex(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  let mid = 0;
  mid = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[mid] <= target) {
      if (target < arr[mid + 1] || arr[mid+1] === undefined) return Math.abs(mid+1);
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

function successfulPairs(spells: number[], potions: number[], success: number): number[] {
  let re: number[] = [];
  potions = potions.sort((a, b) => b - a).map(p => Math.ceil(success / p));
  console.log('potions: ', potions)
  for (let s of spells) {
    re.push(insertIndex(potions, s));
  }
  return re;
};

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7)); // [3, 2, 1]
console.log(successfulPairs([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], 25)); // [3, 2, 1]
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16)); // [3, 3, 3]

// console.log(insertIndex([1,2], 2)); // 1
// console.log(insertIndex([2], 2)); // 0