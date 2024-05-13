// ["Gold Medal","Silver Medal","Bronze Medal"]
// [10,3,8,9,4]

function findRelativeRanks(score: number[]): string[] {
  let pairs: [number, number][] 
      = score.map((num, i) => [num, i]);  
  pairs.sort((a, b) => b[0] - a[0]);
  
  let re = new Array(score.length);
  pairs.forEach((pair,i) => {
    re[pair[1]] = `${i+1}`;
  });

  if (pairs[0] !== undefined) 
    re[pairs[0][1]] = "Gold Medal";
  if (pairs[1] !== undefined) 
    re[pairs[1][1]] = "Silver Medal";
  if (pairs[2] !== undefined) 
    re[pairs[2][1]] = "Bronze Medal";

  return re;
};