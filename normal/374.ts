function guessNumber(n: number): number {
  let bottom = 1;
  let half = Math.floor((n+bottom)/2);
  
  while (1) {
    switch (guess(half)) {
      case 1:
        bottom = half;
        half = Math.ceil((n+bottom)/2);
        break;
      case -1:
        n = half;
        half = Math.floor((n+bottom)/2);
        break;
      case 0:
        return half;
    }
  }
  
  return -1;
};