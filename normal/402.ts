function removeKdigits(num: string, k: number): string {
  if (num.length === k) return '0';
  
  let numArray: string[] = num.split('');
  let stack: string[] = [];
  
  for (let current of numArray) {
    while (stack.length > 0 && stack[stack.length - 1] > current && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(current);
  }
  
  if (k > 0) stack = stack.slice(0, -k);

  let result = stack.join("").replace(/^0+/, "");
  if (result.length == 0) return "0";

  return result;
};

console.log(removeKdigits('1432219', 3)) // '1219'
console.log(removeKdigits('10200', 1)) // '200'
console.log(removeKdigits('10', 2)) // '0'