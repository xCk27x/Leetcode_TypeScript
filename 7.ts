function reverse(x: number): number {
  let maxNum = Math.pow(2, 31) - 1;
  let minNum = -Math.pow(2, 31);
  let n = x > 0 ? x : -x, sign = x > 0 ? 1 : -1, re = 0;

  do {
    re *= 10;
    re += n % 10;
    n = Math.floor(n/10);
  } while (n / 10 !== 0);
  re *= sign;
  // console.log('re: ', re, 'n: ', n);

  return re > maxNum || re < minNum ? 0 : re;
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(1000000007)); // 21