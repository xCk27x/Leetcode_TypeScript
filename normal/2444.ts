function countSubarrays(nums: number[], minK: number, maxK: number): number {
  let re = 0;
  if (minK === maxK) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== minK) {
        count = 0;
      } else {
        count++;
        re += count;
      }
    }
    return re;
  }

  let findMin = false, findMax = false;
  let MinAmount = 0, MaxAmount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minK || nums[i] > maxK) {
      findMax = false;
      findMin = false;
      MinAmount = 0;
      MaxAmount = 0;
    } 
    else if (nums[i] === minK) {
      MinAmount++;
      findMin = true;
      if (findMax) {
        console.log(MaxAmount);
        re += MaxAmount;
      }
      continue;
    } 
    else if (nums[i] === maxK) {
      MaxAmount++;
      findMax = true;
      if (findMin) {
        console.log(MinAmount);
        re += MinAmount;
      }
      continue;
    }
    else if (findMax && findMin) {
      console.log(MinAmount * MaxAmount);
      re += MinAmount * MaxAmount;
    } 
  }
  return re;
};

function countSubarrays2(nums: number[], minK: number, maxK: number): number {
  let re = 0;
  if (minK === maxK) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== minK) {
        count = 0;
      } else {
        count++;
        re += count;
      }
    }
    return re;
  }

  let findMin = false, findMax = false;
  let MinAmount: number[] = [], MaxAmount: number[] = [];
  let preMidValue = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minK || nums[i] > maxK) {
      findMax = false;
      findMin = false;
      MinAmount = [];
      MaxAmount = [];
      preMidValue = 0;
    } 
    else if (nums[i] === minK) {
      MinAmount.push(i);
      findMin = true;
      if (findMax) {
        re += MaxAmount[MaxAmount.length - 1] - Math.min(MaxAmount[0], MinAmount[0]) + preMidValue + 1;
      }
      continue;
    } 
    else if (nums[i] === maxK) {
      MaxAmount.push(i);
      findMax = true;
      if (findMin) {
        re += MinAmount[MinAmount.length - 1] - Math.min(MaxAmount[0], MinAmount[0]) + preMidValue + 1;
      }
      continue;
    }
    else if (findMax && findMin) {
      re += Math.min(MinAmount[MinAmount.length - 1], MaxAmount[MaxAmount.length - 1]) - Math.min(MinAmount[0], MaxAmount[0]) + preMidValue + 1;
    }
    else if (!findMax && !findMin) {
      preMidValue++;
    }
  }
  return re;
};


// console.log(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5)); // 2
// console.log(countSubarrays([1, 1, 1, 1], 1, 1)); // 10

console.log(countSubarrays2([35054,398719,945315,945315,820417,945315,35054,945315,171832,945315,35054,109750,790964,441974,552913], 35054, 945315)); // 81