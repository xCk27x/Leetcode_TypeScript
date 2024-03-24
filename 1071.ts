function gcd(a: number, b: number): number {
  while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
  }
  return a;
}

function gcdOfString(str: string): string {
  let charList = str.split('');
  let str1 = '', str2 = '';
  for (let i = 0; i < charList.length; i++) {
    str1 +=charList[i];
    str2 = charList[charList.length-i-1] + str2;
    if (str1 === str2 && str.split(str1).join('') === '') {
      return str1;
    };
  }
  return str;
}

function gcdOfStrings(str1: string, str2: string): string {
  let g1 = gcdOfString(str1), g2 = gcdOfString(str2);
  if (g1.length < g2.length) {
    let temp = g1;
    g1 = g2;
    g2 = temp;
  }
  if (g1.split(g2).join('') !== '') return ''

  let times: number = gcd(str1.length/g1.length, str2.length/g2.length);
  return g2.repeat(times);
};

console.log(gcdOfStrings('ABCABC', 'ABC'));
console.log(gcdOfStrings('ABABAB', 'ABAB'));