function kNapSack(items, weight) {
    let itemWeightMap = new Array(items.length + 1);
    for (let i = 0; i < items.length + 1; i++) {
        itemWeightMap[i] = new Array(weight).fill(0);
    }
    for (let j = 1; j <= items.length; j++) {
        for (let k = 0; k < weight; k++) {
            if (items[j - 1][1] > k) {
                itemWeightMap[j][k] = itemWeightMap[j - 1][k];
            }
            else {
                itemWeightMap[j][k] = Math.max(itemWeightMap[j - 1][k], items[j - 1][0] + itemWeightMap[j - 1][k - items[j - 1][1]]);
            }
        }
    }
    return itemWeightMap[items.length - 1][weight - 1];
}
// items: [value, weight]
function kNapSack2(items, weight) {
    let p = new Array(items.length);
    for (let i = 0; i < items.length; i++) {
        p[i] = new Array(weight).fill(false);
    }
    let c = new Array(weight + 1).fill(0);
    for (let i = 0; i < items.length; ++i) {
        for (let j = weight; j >= items[i][1]; j--) {
            if (c[j - items[i][1]] + items[i][0] > c[j]) {
                c[j] = c[j - items[i][1]] + items[i][0];
                p[i][j] = true; // 有放
            }
        }
    }
    console.log('c:', c);
    console.log('p:', p);
    for (let i = items.length - 1, j = weight; i >= 0; i--)
        if (p[i][j]) { // 背包有該物品
            console.log("背包裡面有第", i + 1, "個物品");
            j -= items[i][1];
        }
    return c[weight - 1];
}
console.log('此背包可容納的最大價值為', (kNapSack2([[20, 2], [30, 5], [50, 10], [10, 5]], 16))); // 80
