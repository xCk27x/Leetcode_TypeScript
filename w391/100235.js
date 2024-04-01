function maxBottlesDrunk(numBottles, numExchange) {
    let drunked = 0;
    let empty = 0;
    while (numBottles > 0) {
        empty += numBottles;
        drunked += numBottles;
        numBottles = 0;
        while (empty >= numExchange) {
            empty -= numExchange;
            numBottles++;
            numExchange++;
        }
    }
    ;
    return drunked;
}
;
console.log(maxBottlesDrunk(10, 3)); // 13
