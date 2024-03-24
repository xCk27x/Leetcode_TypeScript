function longestPalindrome(s) {
    let longest = '';
    for (let i = 0; i < s.length; i++) {
        let j, k;
        for (j = i + 1; j < s.length; j++) {
            if (s[i] !== s[j])
                break;
        }
        let q = i - 1;
        if (q < 0 || j >= s.length) {
            longest = (j - (q + 1)) > longest.length ? s.slice(q + 1, j) : longest;
            continue;
        }
        ;
        for (k = 0; q - k >= 0 && j + k < s.length; k++) {
            if (s[q - k] !== s[j + k])
                break;
        }
        longest = (j - q + 2 * k - 1) > longest.length ? s.slice(q - k + 1, j + k) : longest;
    }
    return longest;
}
;
let t1 = "babad";
let t2 = "cbbd";
let t3 = "a";
let t4 = "ac";
console.log('ans: ', longestPalindrome(t1));
console.log('ans: ', longestPalindrome(t2));
console.log('ans: ', longestPalindrome(t3));
console.log('ans: ', longestPalindrome(t4));
