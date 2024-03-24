function mySqrt(x: number): number {
  let re: number = x;  
  while (1) {
    re = Math.floor(re / 2);
    if (re * re <= x) {
      break;
    }
  }
  while (1) {
    if (re * re > x) {
      break;
    }
    re = re + 1;
  }

  return re - 1;
};

console.log(mySqrt(17)) // 2