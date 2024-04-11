function reverseWords(s) {
    return s.split(' ').filter(c => c !== '').reduce((acc, word) => word.trim() + ' ' + acc);
}
;
console.log(reverseWords('the     sky is blue')); // 'blue is sky the'
