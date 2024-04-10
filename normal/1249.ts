function minRemoveToMakeValid(s: string): string {
  let vaildCount = 0;
  let unvaildIndex: number[] = [];
  let reStr = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      vaildCount++;
      unvaildIndex.push(i);
    } else if (s[i] === ')') {
      if (vaildCount > 0) {
        vaildCount--;
        unvaildIndex.pop();
      }
      else {
        unvaildIndex.push(i);
      }
    }
  }

  for (let i = 0, j = 0; i < s.length; i++) {
    if (i === unvaildIndex[j])
      j++;
    else
      reStr += s[i];
  }

  return reStr;
};