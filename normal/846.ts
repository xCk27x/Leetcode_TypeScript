function isNStraightHand(hand: number[], groupSize: number): boolean {
  if (hand.length % groupSize !== 0) return false;

  const map = new Map();
  hand.forEach(val => {
    map.set(val, (map.get(val) ?? 0) + 1);
  })
  const sortedKeys = Array.from(map.keys()).sort((a, b) => a - b);

  for (const key of sortedKeys) {
    const count = map.get(key);
    if (count === 0) continue;
    map.set(key, 0);

    for (let i = 1; i < groupSize; i++) {
      if (map.get(key + i) >= count)
        map.set(key + i, map.get(key + i) - count);
      else
        return false;
    }
  }

  return true;
};