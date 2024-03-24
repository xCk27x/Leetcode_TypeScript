function lengthOfLongestSubstring(s: string): number {
  let ans = 0;  
  for (let i = 0; i < s.length; i++) {
    let recoreSet = new Set([s[i]]);
    console.log(recoreSet);
    let j = i + 1;
    for (; j < s.length; j++) {
      if (recoreSet.has(s[j])) break;
      else recoreSet.add(s[j]);
    }
    ans = Math.max(ans, j - i);
  }
  return ans;
};

let t1 = "abcabcbb";
let t2 = "bbbbb";
let t3 = "pwwkew";
let t4 = "";

console.log(lengthOfLongestSubstring(t1));
console.log(lengthOfLongestSubstring(t2));
console.log(lengthOfLongestSubstring(t3));
console.log(lengthOfLongestSubstring(t4));