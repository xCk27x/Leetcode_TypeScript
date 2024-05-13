// "abababaccddb"

function minimumSubstringsInPartition(s: string): number {
  let dp = new Map<string, number>();

  function helper(s: string): number {
    if (dp.has(s)) return dp.get(s)!;
    if (s.length === 0) return 0;

    let ans = Infinity;
    let map = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
      map.set(s[i], (map.get(s[i]) ?? 0) + 1);
      let last = 1;
      let flag = true;
      for (let n of map.values()) {
        if (n !== last) {
          flag = false;
          break;
        }
        last = n;
      }
      if (flag) {
        ans = Math.min(ans, helper(s.slice(i + 1)));
      }
    }

    console.log(s, ans + 1);
    dp.set(s, ans + 1);
    return ans + 1;
  }

  return helper(s);
};

console.log(minimumSubstringsInPartition("abababaccddb")); // 2

function minimumSubstringsInPartition2(s: string): number {
  let dp = new Map<string, number>();

  function helper(s: string): number {
    if (dp.has(s)) return dp.get(s)!;
    if (s.length === 0) return 0;

    let ans = Infinity;
    let map = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
      map.set(s[i], (map.get(s[i]) ?? 0) + 1);
      let v = map.values();
      let last = v.next().value;
      let flag = true;
      for (let n of v) {
        if (n !== last) {
          flag = false;
          break;
        }
        last = n;
      }
      if (flag) {
        ans = Math.min(ans, 1 + helper(s.slice(i + 1))); // 修改這行
      }
    }

    dp.set(s, ans);
    return ans;
  }

  return helper(s);
}

console.log(minimumSubstringsInPartition2("ababcc")); // 正確的答案應該是2
