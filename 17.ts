const Num2CharMap = new Map([
  ['2', 'abc'],
  ['3', 'def'],
  ['4', 'ghi'],
  ['5', 'jkl'],
  ['6', 'mno'],
  ['7', 'pqrs'],
  ['8', 'tuv'],
  ['9', 'wxyz']
])

function letterCombinations(digits: string): string[] {
  return digits.split('').map(num => Num2CharMap.get(num)?.split('')).reduce((p, c) => {
    let re: string[] = [];
    for (const p1 of p)
      for (const c1 of c)
        re.push(p1 + c1); 
    return re; 
    }, ['']);
}
console.log(letterCombinations('23'));