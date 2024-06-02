function singleNumber(nums: number[]): number[] {
  let xorSum = nums.reduce((a, b) => a ^ b);

  // 超神奇的方法來找到 xorSum 在二進位中的最右邊的 1
  // 原理是 num 與 ~num 進行 and 運算，結果會是 0b0000
  // 但 -num 是 ~num + 1，因此 -num 會被翻轉直到最右邊的 0 變成 1
  // 而這個 1 的位置會跟原本的 num 在二進位中最右邊的 1 重疊
  // 因此 num & -num 會是 num 在二進位中最右邊的 1
  xorSum &= -xorSum;

  let val1 = 0;
  let val2 = 0;
  for (let num of nums) {
    if (xorSum & num)
      val1 ^= num;
    else
      val2 ^= num;
  }

  return [val1, val2];
};