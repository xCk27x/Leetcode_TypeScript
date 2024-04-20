type Fn = (n: number, i: number) => boolean;

function filter(arr: number[], fn: Fn): number[] {
  const re: number[] = []
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i) && re.push(arr[i])
  }
  return re;
};