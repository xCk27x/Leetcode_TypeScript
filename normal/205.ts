function isIsomorphic(s: string, t: string): boolean {
  let charMap = new Map<string, string>();
  let tSet = new Set<string>();  
  for (let i = 0; i < s.length; i++) {
    if (!charMap.has(s[i])) {
      charMap.set(s[i], t[i]);
      if (tSet.has(t[i])) {
        return false;
      }
      tSet.add(t[i]);
    } 
    else {
      if (charMap.get(s[i]) !== t[i]) {
        return false;
      }
    }
  }

  return true;
};

console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("badc", "baba")); // true