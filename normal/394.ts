function decodeString(s: string): string {
  const numStack: number[] = [];
  const strStack: string[] = [''];
  let isLastNum = false

  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122)
      // letter
      strStack[strStack.length - 1] += s[i];
    else if (s[i] === '[') 
      // '['
      strStack.push('');
    else if (s[i] === ']') {
      // ']'
      const lastStr = strStack.pop()!.repeat(numStack.pop()!);
      strStack[strStack.length - 1] += lastStr;
    } 
    else {
      // Number
      isLastNum 
      ? numStack[numStack.length - 1] = numStack[numStack.length - 1] * 10 + parseInt(s[i])
      : numStack.push(parseInt(s[i]));
      
      isLastNum = true;
      continue;
    }
    isLastNum = false;
  }

  return strStack[0];
};

console.log(decodeString('3[a2[c]]'));

// numStack: [3];
// strStack: ['', 'acc'];