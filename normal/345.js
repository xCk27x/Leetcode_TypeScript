function reverseVowels(s) {
    let sArray = s.split('');
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        while (!/[aeiou]/.test(sArray[i]) && i < j) {
            i++;
        }
        while (!/[aeiou]/.test(sArray[j]) && i < j) {
            j--;
        }
        console.log(i, j);
        if (i < j) {
            sArray[i] = s[j];
            sArray[j] = s[i];
        }
    }
    return sArray.join('');
}
;
console.log(reverseVowels('hello')); // 'holle'
