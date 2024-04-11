function timeRequiredToBuy(tickets, k) {
    var time = 0;
    for (var i = 0; i < tickets.length; i++) {
        time += i <= k ? Math.min(tickets[i], tickets[k]) : Math.min(tickets[k] - 1, tickets[i]);
    }
    return time;
}
;
console.log(timeRequiredToBuy([2, 6, 3, 4, 5], 2)); // 12
