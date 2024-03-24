function findDifference(nums1: number[], nums2: number[]): number[][] {
  console.log(nums1, nums2);
  let re: number[][] = [[], []];
  let i: number, j: number;

  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  for (i = 0, j = 0; i < nums1.length && j < nums2.length; ) {
    if (nums1[i] < nums2[j]) {
      re[0].push(nums1[i]);
      do {
        i++;
      } while (nums1[i - 1] === nums1[i] && i < nums1.length);
    } else if (nums1[i] > nums2[j]) {
      re[1].push(nums2[j]);
      do {
        j++;
      } while (nums2[j - 1] === nums2[j] && j < nums2.length);
    } else {
      do {
        i++;
      } while (nums1[i - 1] === nums1[i] && i < nums1.length);
      do {
        j++;
      } while (nums2[j - 1] === nums2[j] && j < nums2.length);
    }
  }

  if (i === nums1.length)
    re[1] = re[1].concat(nums2.slice(j).filter((val, idx, arr) => {
      // console.log(val, idx, arr);
      return idx === 0 ? true : (val === arr[idx - 1] ? false : true);
    }));
  else if (j === nums2.length)
    re[0] = re[0].concat(nums1.slice(i).filter((val, idx, arr) => {
      // console.log(val, idx, arr);
      return idx === 0 ? true : (val === arr[idx - 1] ? false : true);
    }));
  
  return re;
};

function findDifference2(nums1: number[], nums2: number[]): number[][] {
  let singleNums1 = nums1.filter((num) => !nums2.includes(num))
  let singleNums2 = nums2.filter((num) => !nums1.includes(num))

  return [[...new Set(singleNums1)], [...new Set(singleNums2)]];
};

// console.log(findDifference([1, 2, 3], [2, 4, 6])); // [[1], [6]]
// console.log(findDifference([1, 2, 3, 4, 5], [2, 3, 4, 5, 6])); // [[1], [6]]
// console.log(findDifference([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])); // [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
// console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])); // [[3],[]]
console.log(findDifference([83,-98,-78,35,-98,79,-21,-33,53], [58,-10,29,-57,-2,-39,-60,18,17,-37])); // [[-33,-98,83,35,-21,53,-78,79],[-2,17,18,-37,-39,-57,-10,58,-60,29]]