function scoreOfString(s) {
    var sum = 0;
    for (var i = 1; i < s.length; i++) {
        sum += Math.abs(s.charCodeAt(i - 1) - s.charCodeAt(i));
    }
    return sum;
}
;
console.log(scoreOfString("hello")); // 2
