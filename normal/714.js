function maxProfit(prices, fee) {
    var cash = 0;
    var stock = -Infinity;
    var cashStack = [];
    var stockStack = [];
    for (var _i = 0, prices_1 = prices; _i < prices_1.length; _i++) {
        var p = prices_1[_i];
        cash = Math.max(cash, stock + p - fee);
        cashStack.push(cash);
        stock = Math.max(stock, cash - p);
        stockStack.push(stock);
    }
    console.log(cashStack);
    console.log(stockStack);
    return cash;
}
;
console.log(maxProfit([1, 3, 2, 8, 4, 9], 2)); // 8
// console.log(maxProfit([1, 3, 7, 5, 10, 3], 3)); // 6
