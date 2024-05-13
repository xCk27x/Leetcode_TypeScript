function wonderfulSubstrings(word: string): number {
  let bitArray = 0;
  let bitArrayMap = new Map<number, number>();
  bitArrayMap.set(0, 1);

  let re = 0;

  for (let i = 0; i < word.length; i++) {
    bitArray ^= 1 << (word.charCodeAt(i) - 97);
    re += bitArrayMap.get(bitArray) ?? 0;

    for (let j = 0; j < 10; j++) {
      // reverse one bit in bitArray
      re += bitArrayMap.get(bitArray ^ (1 << j)) ?? 0;
    }

    bitArrayMap.set(bitArray, (bitArrayMap.get(bitArray) ?? 0) + 1);
  }

  return re;
}
