function isMatch(s, p) {
    // console.log('s: ', s, 'p: ', p);
    if (s.length === 0) {
        // console.log('s: ' ,s , ' p: ', p);
        if (p.length === 0)
            return true;
        else if (p[1] === '*') {
            if (p.length === 2) {
                // console.log('s: ' ,s , ' p: ', p);
                return true;
            }
            else
                return isMatch(s, p.slice(2));
        }
        else
            return false;
    }
    else if (p.length === 0) {
        return false;
    }
    if (p[1] !== '*') {
        if (s[0] === p[0] || '.' === p[0])
            return isMatch(s.slice(1), p.slice(1));
        else
            return false;
    }
    else {
        if (p[1] === '*' && p.length === 2) {
            // console.log('s: ' ,s , ' p: ', p);
            if (p[0] !== '.') {
                let len = s.length, str = '';
                while (len > 0) {
                    str += p[0];
                    len--;
                }
                return s === str ? true : false;
            }
            else
                return true;
        }
        let b = false;
        for (let i = 0; b !== true && i <= s.length; i++) {
            b = isMatch(s.slice(i), p.slice(2)) || b;
            if (b === false)
                continue;
            if (p[0] !== '.') {
                let len = i, str = '';
                while (len > 0) {
                    str += p[0];
                    len--;
                }
                b = s.slice(0, i) === str ? true : false;
            }
            else {
                b = true;
            }
        }
        return b;
    }
}
;
console.log('1. ', isMatch("aa", "a")); // false
console.log('2. ', isMatch("aa", "a*")); // true
console.log('3. ', isMatch("ab", ".*")); // true
console.log('4. ', isMatch("aab", "c*a*b")); // true
console.log('5. ', isMatch("mississippi", "mis*is*ip*.")); // true
console.log('6. ', isMatch("abbabaaaaaaacaa", "a*.*b.a.*c*b*a*c*")); // true
