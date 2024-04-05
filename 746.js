function minCostClimbingStairs(cost) {
    let costMap = new Map([
        [1, cost[0]],
        [2, cost[1]]
    ]);
    function minCostClimbingStairsHelper(n) {
        if (costMap.has(n))
            return costMap.get(n);
        else {
            costMap.set(n, cost[n - 1] + Math.min(minCostClimbingStairsHelper(n - 1), minCostClimbingStairsHelper(n - 2)));
            return costMap.get(n);
        }
    }
    minCostClimbingStairsHelper(cost.length);
    return Math.min(costMap.get(cost.length), costMap.get(cost.length - 1));
}
;
console.log(minCostClimbingStairs([10, 15, 20])); // 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6
