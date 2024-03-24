function largestRectangleArea(heights: number[]): number {
  let fullWidth = heights.length;  
  let maxRec = 0;
  for (let i = fullWidth; i >= 1; i--) {
      for (let j = 0; i + j <= fullWidth; j++) {
        let minH = heights.slice(j, i+j).reduce((p, c) => Math.min(p, c), Infinity);
        maxRec = Math.max(maxRec, i * minH);
      }
    }
  return maxRec;
}; // Time Limit Exceeded

function largestRectangleArea2(heights: number[]): number {
  let l = heights.length;
  let maxRec = 0;
  for (let i = 0; i < l; i++) {
    let j = i-1, k = i+1;
    let tempH = heights[i];
    while (j >= 0) {
      if (heights[j] < tempH) break;
      j--;
    }
    j++;
    while (k < l) {
      if (heights[k] < tempH) break;
      k++;
    }
    k--;
    maxRec = Math.max(maxRec, tempH * (k - j + 1))
  }
  return maxRec;
};

function largestRectangleArea3(heights: number[]): number {
  let maxRec = 0;
  let l = heights.length;
  let recordList: boolean[] = new Array<boolean>(heights.length).fill(false);

  for (let i = 0; i < l; i++) {
    if (recordList[i] === false) {
      let j: number, k: number;
      let cHeight = heights[i];
      recordList[i] = true;

      for (j = i + 1; heights[j] >= heights[i] && j < l; j++) {
        if (heights[j] == cHeight) {
          recordList[j] = true;
        }
      }

      for (k = i - 1; heights[k] >= heights[i] && k >= 0; k--) {}
      k++;
      
      maxRec = Math.max(maxRec, cHeight * (j - k));
    }
  }
  return maxRec;
}

let t1 = [2,1,5,6,2,3];
let t2 = [2,4,1,2,1];

console.log(largestRectangleArea3(t1));
console.log(largestRectangleArea3(t2));