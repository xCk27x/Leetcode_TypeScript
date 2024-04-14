function scoreOfString(s: string): number {
  let sum = 0;
  
  for (let i = 1; i < s.length; i++) {
    sum += Math.abs(s.charCodeAt(i-1) - s.charCodeAt(i))
  }

  return sum;
};

console.log(scoreOfString("hello")); // 2