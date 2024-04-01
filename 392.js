function isSubsequence(s, t) {
    let sPtr, tPtr;
    for (sPtr = 0, tPtr = 0; sPtr < s.length && tPtr < t.length; tPtr++) {
        console.log(s[sPtr], t[tPtr]);
        s[sPtr] === t[tPtr] ? sPtr++ : null;
    }
    return sPtr === s.length;
}
;
console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
console.log(isSubsequence("", "")); // true
