function addBinary(a: string, b: string): string {
  let aRe = a.split('').reverse().map(Number);
  let bRe = b.split('').reverse().map(Number);
  if (a.length < b.length) [aRe, bRe] = [bRe, aRe];

  let carryIn = 0, i: number;
  let result: number[] = [];
  for (i = 0; i < bRe.length; i++) {
    let sum = aRe[i] + bRe[i] + carryIn;
    result.push(sum % 2);
    carryIn = sum >= 2 ? 1 : 0;
  }
  for (; i < aRe.length; i++) {
    let sum = aRe[i] + carryIn;
    result.push(sum % 2);
    carryIn = sum >= 2 ? 1 : 0;
  }
  if (carryIn == 1) result.push(1);

  return result.reverse().join('')
};

let list1 = '100'
let list2 = '10'

console.log(addBinary(list1, list2))