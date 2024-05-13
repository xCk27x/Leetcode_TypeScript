function minFlips(a: number, b: number, c: number): number {
  const aList = a.toString(2).split("").reverse();
  const bList = b.toString(2).split("").reverse();
  const cList = c.toString(2).split("").reverse();

  let maxLen = Math.max(aList.length, bList.length, cList.length);
  let sum = 0;

  for (let i = 0; i < maxLen; i++) {
    const aBit = parseInt(aList[i]);
    const bBit = parseInt(bList[i]);
    const cBit = parseInt(cList[i]);

    console.log(aBit, bBit, cBit);

    if (!cBit) {
      sum += aBit ? 1 : 0;
      sum += bBit ? 1 : 0;
    } else {
      if (aBit || bBit) {
        sum += 1;
      }
    }
  }

  return sum;
}

function minFlips2(a: number, b: number, c: number): number {
  let sum = 0;
  let max = Math.ceil(Math.log2(Math.max(a, b, c) + 1));

  for (let i = 0; i < max; i++) {
    let aBit = (a >> i) & 1;
    let bBit = (b >> i) & 1;
    let cBit = (c >> i) & 1;

    if (cBit)
      sum += (!aBit && !bBit) ? 1 : 0;
    else
      sum += aBit ? 1 : 0 + bBit ? 1 : 0;
  }
  return sum;
}

console.log(minFlips(2, 6, 5)); // 3
