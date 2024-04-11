function removeKdigits(num, k) {
    if (num.length === k)
        return '0';
    var numArray = num.split('');
    var stack = [];
    for (var _i = 0, numArray_1 = numArray; _i < numArray_1.length; _i++) {
        var current = numArray_1[_i];
        while (stack.length > 0 && stack[stack.length - 1] > current && k > 0) {
            stack.pop();
            k--;
        }
        stack.push(current);
    }
    if (k > 0) {
        stack = stack.slice(0, -k);
    }
    var result = stack.join("").replace(/^0+/, "");
    if (result.length == 0) {
        return "0";
    }
    return result;
}
;
console.log(removeKdigits('1432219', 3)); // '1219'
console.log(removeKdigits('10200', 1)); // '200'
console.log(removeKdigits('10', 2)); // '0'
