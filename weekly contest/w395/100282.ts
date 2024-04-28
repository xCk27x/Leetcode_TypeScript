function findBits(nums: number): number[] {
  const bits = new Array(29).fill(0);
  for (let i = 0; i < 29; i++) {
    bits[i] = (nums >> i) & 1;
  }
  return bits;
}

function bits2Dec(bits: number[]): number {
  let result = 0;
  for (let i = 0; i < bits.length; i++) {
    result += bits[i] * (2 ** i);
  }
  return result;
}

function minEnd(n: number, x: number): number {
  const bits = findBits(x);
  for (let i = 0; i < 29; i++) {
    bits.push(0);
  }
  
  let a = findBits(n-1);

  
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] === 0) {
      a.pop();
    } else {
      break;
    }
  }
  
  console.log(a, bits)
  for (let i = 0; a.length > 0; i++) {
    if (bits[i] === 0) {
      bits[i] = a.shift()!;
    }
  }

  return bits2Dec(bits);  
};

console.log(minEnd(3, 4)) // 6
console.log(minEnd(2, 7)) // 5
console.log(minEnd(6715154, 7193485)) // 5
console.log(minEnd(9670929, 26736017)) // 5