function rotateRing(ring: string, step: number) {
  return ring.slice(step) + ring.slice(0, step);
}

const dp = new Map<string, number>();

function findRotateSteps(ring: string, key: string): number {
  if (key.length === 0) return 0;
  if (dp.has(ring + key)) return dp.get(ring + key)!;
  
  let minStep = Infinity;
  if (ring[0] === key[0]) minStep = findRotateSteps(ring, key.slice(1)) + 1;
  
  let step = 1;

  for (let i = 1, j = ring.length - 1; i <= j; i++, j--) {
    step++;
    if (ring[i] === key[0]) {
      minStep = Math.min(minStep, findRotateSteps(rotateRing(ring, i), key.slice(1)) + step);
    }
    if (ring[j] === key[0]) {
      minStep = Math.min(minStep, findRotateSteps(rotateRing(ring, j), key.slice(1)) + step);
    }
  }

  dp.set(ring + key, minStep);

  return minStep;
}

console.log(findRotateSteps("godding", "godding")); // 13
