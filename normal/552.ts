// function checkRecord(n: number): number {
//   const result: string[] = [''];
//   const record: [number, number][] = [[0, 0]]
//   let time = 1;

//   for (let i = 0; i < n; i++) {
//     let nextTime = 0;
//     for (let j = 0; j < time; j++) {
//       const temp = result.shift()!;
//       const [A, L] = record.shift()!;
//       // P
//       result.push(temp + 'P');
//       record.push([A, 0]);
//       nextTime++;
//       // A
//       if (A === 0) {
//         result.push(temp + 'A');
//         record.push([1, 0]);
//         nextTime++;
//       }
//       // L
//       if (L < 2) {
//         result.push(temp + 'L');
//         record.push([A, L + 1]);
//         nextTime++;
//       }
//     }
//     time = nextTime;
//   }

//   return result.length % (10 ** 9 + 7);
// };

function checkRecord(n: number): number {
  const mod = 1000000007;

  let dp = [1,1,0,1,0,0];

  for (let i = 1; i < n; i++) {
    dp = [
      (dp[0] + dp[1] + dp[2]) % mod,
      dp[0],
      dp[1],
      (dp[0] + dp[1] + dp[2] + dp[3] + dp[4] + dp[5]) % mod,
      dp[3],
      dp[4]
    ];
  }
  
  return dp.reduce((acc, cur) => acc + cur) % mod;
}

console.log(checkRecord(2)); // 8
