type Pair = [number, number];

function findMaxAmount(idList: Pair[]): number {
  let re = 0;
  for (let i = 0; i < idList.length; i++) {
    re = Math.max(re, idList[i][1]);
  }
  return re;
};

function mostFrequentIDs(nums: number[], freq: number[]): number[] {
  let idList: Pair[] = [];
  let tempMax = 0, secondMax = 0;
  let re: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let existPair = idList.find(([id, _]) => id === nums[i]);
    if (existPair === undefined) {
      idList.push([nums[i], freq[i]]);
      if (tempMax >= freq[i]) {
        secondMax = Math.max(secondMax, freq[i]);
      } else {
        secondMax = tempMax;
        tempMax = freq[i];
      }
    } else {
      idList[idList.indexOf(existPair)][1] += freq[i];
      if (tempMax >= existPair[1] + freq[i]) {
        secondMax = Math.max(secondMax, freq[i]);
      } else {
        secondMax = tempMax;
        tempMax = existPair[1] + freq[i];
      }
    }
    re.push(tempMax);
  }
  return re;
};

console.log(mostFrequentIDs( [2,3,2,1], [3,2,-3,1]));
console.log(mostFrequentIDs( [5,5,3], [2,-2,1]));