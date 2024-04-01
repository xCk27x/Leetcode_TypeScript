function lengthOfLastWord(s) {
    // s = s.trim();
    console.log(s.split(' '));
    return s.split(' ').pop().length;
}
;
console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
