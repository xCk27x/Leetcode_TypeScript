function longestCommonSubsequence(text1, text2) {
    let text2D = new Array(text1.length + 1).fill(new Array(text2.length + 1).fill(0));
    console.log(text2D);
    for (let i = 1; i <= text1.length; i++) {
        console.log(i);
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                text2D[i][j] = text2D[i - 1][j - 1] + 1;
            }
            else {
                text2D[i][j] = Math.max(text2D[i - 1][j], text2D[i][j - 1]);
            }
        }
    }
    console.log(text2D);
    return text2D[text1.length][text2.length];
}
;
// console.log(longestCommonSubsequence("abcde", "ace")); // 3
// console.log(longestCommonSubsequence("abc", "abc")); // 3
console.log(longestCommonSubsequence("abcba", "abcbcba")); // 5
