// function findKthLargest(nums: number[], k: number): number {
//   if (nums.length === 1) return nums[0];
//   const pivot = 0;
//   for (let i = 1, j = nums.length - 1; i < j; ) {
//     while (nums[pivot] < nums[j] && i <= j) {
//       j--;
//     }
//     while (nums[pivot] >= nums[i] && i <= j) {
//       i++;
//     }
//     console.log(nums)
//     console.log('i =', i, ', j =', j, ', k = ', k);
//     if (i > j) {
//       [nums[pivot], nums[j]] = [nums[j], nums[pivot]];
//       if (nums.length - j === k) {
//         return nums[j];
//       } else if (nums.length - j < k) {
//         // console.log('send right');
//         return findKthLargest(nums.slice(0, j), k - (nums.length - j));
//       } else {
//         // console.log('send left');
//         return findKthLargest(nums.slice(j + 1), k);
//       }
//     } else {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       i++;
//       j--;
//     }
//   }
// };

// console.log(findKthLargest([1, 1, 1, 1, 1, 1, 1, 1], 6));
// // console.log(findKthLargest([3, 2, 1, 5, 6, 4, 7, 0], 6));

function findKthLargest(nums: number[], k: number): number {
  const maxHeap = [-Infinity];
  let result: number = -Infinity;
  for (let i = 1; i <= nums.length; i++) {
    let j = i;
    maxHeap.push(nums[j - 1]);
    while (j > 1) {
      let up = maxHeap[Math.floor(j / 2)], down = maxHeap[j];
      if (up < down)
        [maxHeap[j], maxHeap[Math.floor(j / 2)]] = [up, down];
      else 
        break;
      j = Math.floor(j / 2);
    }
  }

  for (let i = 0; i < k; i++) {
    [maxHeap[1], maxHeap[maxHeap.length - 1]] = [maxHeap[maxHeap.length - 1], maxHeap[1]];
    result = maxHeap.pop()!;
    let idx = 1;
    while (idx * 2 < maxHeap.length) {
      let temp = maxHeap[idx], left = maxHeap[idx*2], right = maxHeap[idx*2 + 1];
      if (left >= right && left > temp) {
        [maxHeap[idx*2], maxHeap[idx]] = [temp, left];
        idx = idx*2;
      } else if (right > left && right > temp) {
        [maxHeap[idx*2 + 1], maxHeap[idx]] = [temp, right];
        idx = idx*2 + 1;
      } else {
        break;
      }
    }
  }

  return result;
}

// console.log(findKthLargest([3,2,1,5,6,4], 2));
// console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));
console.log(findKthLargest([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6], 20));