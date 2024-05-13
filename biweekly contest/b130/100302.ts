function maxPointsInsideSquare(points: number[][], s: string): number {
  let i = -1;
  let list: [number, string][] = points.map(p => {
    i++;
    let p0 = Math.abs(p[0]), p1 = Math.abs(p[1]);
    return [p0 > p1 ? p0 : p1, s[i]]
  });
  list.sort((a, b) => a[0] - b[0]);

  let all = true, ans = 0, thisRound = 0, temp = list[0][0];
  let set = new Set<string>();

  for (let i = 0 ; i < list.length; i++) {
    let [num, char] = list[i];
    if (temp !== num) {
      ans += thisRound;
      thisRound = 0;
    }
    if (set.has(char)) {
      all = false;
      break;
    }
    temp = num;
    thisRound++;
    set.add(char);
  }

  if (all) ans += thisRound;
  return ans;
};

console.log(maxPointsInsideSquare([[2,2],[-1,-2],[-4,4],[-3,1],[3,-3]], "abdca")); // 1
console.log(maxPointsInsideSquare([[1,1],[-2,-2],[-2,2]], "abb")); // 1
console.log(maxPointsInsideSquare([[1,1],[-1,-1],[2,-2]], "ccd")); // 1
console.log(maxPointsInsideSquare([[-1,-4],[16,-8],[13,-3],[-12,0]], "abda")); // 1
console.log(maxPointsInsideSquare([[-1,-1]], "a")); // 1
console.log(maxPointsInsideSquare([[2,2],[-1,-2],[-4,4],[-3,1],[3,-3]], "abdca")); // 1