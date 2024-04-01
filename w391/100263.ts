function sumOfTheDigitsOfHarshadNumber(x: number): number {
  let sum = 0;
  let temp = x;
  while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }
  console.log(temp % sum);
  return x % sum === 0 ? sum : -1;
};

console.log(sumOfTheDigitsOfHarshadNumber(18)); // 9
console.log(sumOfTheDigitsOfHarshadNumber(23)); // -1
console.log(sumOfTheDigitsOfHarshadNumber(1)); // -1