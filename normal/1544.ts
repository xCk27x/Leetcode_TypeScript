function makeGood(s: string): string {
    let charStack: string[] = [];
    for (let c of s) {
      if (charStack.length > 0 && Math.abs(charStack[charStack.length - 1].charCodeAt(0) - c.charCodeAt(0)) === 32) {
        charStack.pop();
      } else {
        charStack.push(c);
      }
    }
    return charStack.join('');    
};

function makeGood2(s: string): string {
  for (let left = 0, right = 1; right < s.length; ) {
    if (Math.abs(s.charCodeAt(left) - s.charCodeAt(right)) === 32) {
      s = s.slice(0, left) + s.slice(right + 1);
      left--;
      right--;
    } else {
      left++;
      right++;
    }
  }
  return s;
};

console.log(makeGood2("leEeetcode")); // "leetcode"