function convert(s, numRows) {
    if (numRows === 1)
        return s;
    let reString = '';
    let n = 2 * (numRows - 1);
    // first row
    for (let k = 0; k * n < s.length; k++)
        reString += s[k * n];
    // console.log('start: ', reString);
    // middle rows
    for (let i = 1; i < numRows - 1; i++) {
        for (let j = 0; j * n + i < s.length; j++) {
            reString += s[j * n + i];
            if (n * (j + 1) - i < s.length)
                reString += s[n * (j + 1) - i];
        }
    }
    // console.log('mid: ', reString);
    // last row
    for (let k = 1; k * (n / 2) < s.length; k += 2)
        reString += s[k * (n / 2)];
    // console.log('last: ', reString);
    return reString;
}
;
let t1 = "PAYPALISHIRING";
console.log(convert(t1, 1)); // "PAHNAPLSIIGYIR"
console.log(convert(t1, 2)); // "PAHNAPLSIIGYIR"
console.log(convert(t1, 3)); // "PAHNAPLSIIGYIR"
console.log(convert(t1, 4)); // "PAHNAPLSIIGYIR"
