// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.

// 1 <= num <= 3999
function intToRoman(num: number): string {
  let RomanCharList = ['M', 'D', 'C', 'L', 'X', 'V', 'I']; 
  let n = num,re = '';

  for(let i = 1000, j = 0; i > 0; i = Math.floor(i/10), j++) {
    let digit = Math.floor(n / i);

    if (digit === 0 || digit > 9)
      continue;
    else if (digit % 5 === 4)
      re += RomanCharList[j*2] + RomanCharList[j*2 - (Math.floor(digit/5) + 1)];
    else if (digit < 5)
      re += RomanCharList[j*2].repeat(digit);
    else {
      re += RomanCharList[j*2 - 1];
      digit -= 5;
      re += RomanCharList[j*2].repeat(digit);
    } 

    n %= i;
  }

  return re;
};

console.log(intToRoman(3)); // "III"
console.log(intToRoman(7)); // "III"
console.log(intToRoman(58)); // "III"
console.log(intToRoman(100)); // "III"