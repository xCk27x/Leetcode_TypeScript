function maximumEnergy(energy: number[], k: number): number {
  let maxEnergy = -Infinity;
  let n = energy.length;
  
  for (let i = n - 1; i > n - k - 1; i--) {
    let tempEnergy = 0;
    for (let j = i; j >= 0; j -= k) {
      tempEnergy += energy[j];
      maxEnergy = Math.max(maxEnergy, tempEnergy);
    }
  }

  return maxEnergy;
};

console.log(maximumEnergy([5,2,-10,-5,1], 3)); // 28
console.log(maximumEnergy([-2,-3,-1], 2)); // 28