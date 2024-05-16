function canConstruct(ransomNote: string, magazine: string): boolean {
  const map1 = new Map<string, number>();
  const map2 = new Map<string, number>();

  ransomNote.split('').forEach((char) => {
    map1.set(char, (map1.get(char) || 0) + 1);
  });

  magazine.split('').forEach((char) => {
    map2.set(char, (map2.get(char) || 0) + 1);
  });

  for (const [key, value] of map1) {
    if ((map2.get(key) ?? 0) < value) {
      return false;
    }
  }

  return true;
};