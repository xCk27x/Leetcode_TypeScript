// items: [value, weight]
function kNapSack(items: number[][], weight: number): number {
  let p: boolean[][] = new Array(items.length);
  for (let i = 0; i < items.length; i++) {
    p[i] = new Array(weight).fill(false);
  }

  let c: number[] = new Array(weight + 1).fill(0);

  for (let i = 0; i < items.length; ++i) {
		for (let j = weight; j >= items[i][1]; j--) {
      if (c[j - items[i][1]] + items[i][0] > c[j]) {
				c[j] = c[j - items[i][1]] + items[i][0];
				p[i][j] = true;	// 有放
			}
    }
  }

  console.log('c:', c)
  console.log('p:', p)

  for (let i = items.length-1, j = weight; i >= 0; i--)
    if (p[i][j]) {	// 背包有該物品
      console.log("背包裡面有第", i+1, "個物品")
      j -= items[i][1];
  }
  
  return c[weight - 1];
}

console.log('此背包可容納的最大價值為', 
(kNapSack([[20, 2], [30, 5], [50, 10], [10, 5]], 16))); // 80
