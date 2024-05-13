function findFactors(n: number): number[] {
  const factors: number[] = [], sqrtN = Math.sqrt(n);
  for (let i = 1; i <= sqrtN; i++)
    if (n % i === 0) {
      factors.push(i);
      if (n / i !== i) factors.push(n / i);
    }
  return factors;
}

function minAnagramLength(s: string): number {
  let factors = findFactors(s.length).sort((a, b) => a - b);

  for (let i = 0; i < factors.length; i++) {
    const k = factors[i];
    const charMap = new Map<string, number>();
    for (let c of s.slice(0, k)) {
      charMap.set(c, (charMap.get(c) || 0) + 1);
    }
    let j = k;
    for (; j < s.length; j += k) {
      const sub = s.slice(j, j + k);
      const newMap = new Map(charMap);
      for (let c of sub) {
         if (newMap.get(c) === undefined) break;
         newMap.get(c) === 1 ? newMap.delete(c) : newMap.set(c, newMap.get(c)! - 1);
      }
      if (newMap.size !== 0) break;
    }
    if (j >= s.length) return k;
  }

  return s.length;
};

console.log(minAnagramLength('abba')); // 8
console.log(minAnagramLength('cdef')); // 8