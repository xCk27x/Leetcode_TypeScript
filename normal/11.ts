function maxArea(height: number[]): number {
  let maxV = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      maxV = Math.max(maxV, Math.min(height[i], height[j]) * (j - i));
    }
  }
  return maxV;
};

function maxArea2(height: number[]): number {
  let maxV = 0, tempV = 0;
  for (let i = 0; i < height.length; i++) {
    tempV = 0;
    for (let j = 0; j < i; j++) {
      if (height[j] >= height[i]) {
        tempV = height[i] * (i - j);
        break;
      }
    }
    maxV = maxV >= tempV ? maxV : tempV;
    tempV = 0;
    for (let j = height.length - 1; j > i; j--) {
      if (height[j] >= height[i]) {
        tempV = height[i] * (j - i);
        break;
      }
    }  
    maxV = maxV >= tempV ? maxV : tempV;
  }
  return maxV;
};

function maxArea3(height: number[]): number {
  let maxV = Number.MIN_SAFE_INTEGER; 
  for (let i = 0, j = height.length - 1; i < j; height[i] - height[j] > 0 ? j-- : i++)
    maxV = Math.max(maxV,  Math.min(height[i], height[j]) * (j-i));
  return maxV;
}

console.log(maxArea3([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea3([1,2])); // 1