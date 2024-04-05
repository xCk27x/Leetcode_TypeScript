function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let sum = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 && 
      (flowerbed[i-1] === 0 || flowerbed[i-1] === undefined) && 
      (flowerbed[i+1] === 0 || flowerbed[i+1] === undefined)
      ) {
      flowerbed[i] = 1;
      sum++;
    }
  }

  return sum >= n;
};

console.log(canPlaceFlowers([0,0,1,0,1], 1)); // true