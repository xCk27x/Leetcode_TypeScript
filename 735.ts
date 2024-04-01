function asteroidCollision(asteroids: number[]): number[] {
  let re: number[] = [];
  let reHead: number| undefined;
  for (let i = asteroids.length - 1; i >= 0 ; i--) {
    if (asteroids[i] > 0) {
      do {
        reHead = re.pop();
      } while (reHead !== undefined && reHead < 0 && reHead + asteroids[i] > 0);
      
      if (reHead === undefined) {
        re.push(asteroids[i]);
      } else if (reHead > 0) {
        re.push(reHead);
        re.push(asteroids[i]);
      } else {
        if (reHead + asteroids[i] < 0) {
          re.push(reHead);
        }
      }
    } 
    else {
      re.push(asteroids[i]);
    }
  }
  return re.reverse();
};


// console.log(asteroidCollision([5, 10, -5])); // [5, 10]
// console.log(asteroidCollision([8, -8])); // []
// console.log(asteroidCollision([10, 2, -5])); // [10]