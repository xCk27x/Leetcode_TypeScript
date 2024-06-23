function judgeSquareSum(c: number): boolean {
  let left = 0;
  let right = Math.ceil(Math.sqrt(c / 2));

  while (left <= right) {
    if (left * left + right * right === c) {
      return true;
    } else if (left * left + right * right < c) {
      left++;
    } else {
      right--;
    }
  }

  return false;
};