function scoreOfString(s: string): number {
  let count = 0;
  s.split('').reduce((p, c) => {
    count += Math.abs((p.charCodeAt(0) - c.charCodeAt(0)));
    return c;
  })
  return count;
};