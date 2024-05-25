function partition(s: string): string[][] {
  function isPalindrome(str: string): boolean {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
      if (str[i] !== str[j]) return false;
    }
    return true;
  }

  function helper(i: number, j: number): string[][] {
    const str = s.slice(i, j);
    if (j === s.length) 
      return isPalindrome(str) ? [[str]] : [];
    
    const re: string[][] = [];

    if (isPalindrome(str)) {
      re.push(...helper(j, j + 1).map(arr => [str, ...arr]));  
    } 
    re.push(...helper(i, j + 1));
    
    return re;
  }

  return helper(0, 1);
};