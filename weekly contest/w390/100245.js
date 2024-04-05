function maximumLengthSubstring(s) {
    let charSet = new Set();
    let re = 0;
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i; j < s.length; j++) {
            if (charSet.has(s[j].repeat(2))) {
                break;
            }
            else if (charSet.has(s[j])) {
                charSet.add(s[j].repeat(2));
                re = Math.max(re, j - i + 1);
            }
            else {
                charSet.add(s[j]);
                re = Math.max(re, j - i + 1);
            }
        }
        charSet.clear();
    }
    return re;
}
;
console.log(maximumLengthSubstring('bcbbbcba'));
console.log(maximumLengthSubstring('aaaa'));
console.log(maximumLengthSubstring('aa'));
