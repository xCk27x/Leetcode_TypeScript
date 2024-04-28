function numberOfSpecialChars(word) {
    const single = [];
    let count = 0;
    word.split('').filter(c => {
        if (single.indexOf(c) === -1) {
            single.push(c);
        }
    });
    while (single.length) {
        let c = single.pop();
        if (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) {
            let c1 = single.indexOf(c.toUpperCase());
            if (c1 !== -1) {
                single[c1] = '';
                count++;
            }
        }
        else if (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) {
            let c1 = single.indexOf(c.toLowerCase());
            if (c1 !== -1) {
                single[c1] = '';
                count++;
            }
        }
    }
    return count;
}
;
console.log(numberOfSpecialChars('aA')); // 1
console.log(numberOfSpecialChars("aaAbcBC")); // 1
