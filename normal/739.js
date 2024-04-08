// temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
function dailyTemperatures(temperatures) {
    var iStack = [0];
    var tStack = [temperatures[0]];
    var re = [];
    for (var i = 1; i < temperatures.length; i++) {
        while (temperatures[i] > tStack[tStack.length - 1]) {
            var temp = iStack.pop();
            re.push([i - temp, temp]);
            tStack.pop();
        }
        iStack.push(i);
        tStack.push(temperatures[i]);
    }
    for (var i = 0; i < iStack.length; i++) {
        re.push([0, iStack[i]]);
    }
    return re.sort(function (a, b) { return a[1] - b[1]; }).map(function (c) { return c[0]; });
}
function dailyTemperatures2(temperatures) {
    var re = new Array(temperatures.length);
    var iStack = [];
    for (var i = 0; i < temperatures.length; i++) {
        while (iStack.length > 0 && temperatures[i] > temperatures[iStack[iStack.length - 1]]) {
            var temp = iStack.pop();
            re[temp] = i - temp;
        }
        iStack.push(i);
    }
    for (var _i = 0, iStack_1 = iStack; _i < iStack_1.length; _i++) {
        var i = iStack_1[_i];
        re[i] = 0;
    }
    return re;
}
console.log(dailyTemperatures2([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
