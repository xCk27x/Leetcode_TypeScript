// temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

function dailyTemperatures(temperatures: number[]): number[] {
  let iStack: number[] = [0];
  let tStack: number[] = [temperatures[0]];
  let re: number[][] = [];
  for (let i = 1; i < temperatures.length; i++) {
    while (temperatures[i] > tStack[tStack.length - 1]) {
      let temp = iStack.pop()!;
      re.push([i - temp, temp]);
      tStack.pop();
    }
    iStack.push(i);
    tStack.push(temperatures[i]);
  }
  for (let i = 0; i < iStack.length; i++) {
    re.push([0, iStack[i]]);
  }
  return re.sort((a, b) => a[1] - b[1]).map((c) => c[0]);
}

function dailyTemperatures2(temperatures: number[]): number[] {
  let re: number[] = new Array(temperatures.length);
  let iStack: number[] = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (iStack.length > 0 && temperatures[i] > temperatures[iStack[iStack.length - 1]]) {
      let temp = iStack.pop()!;
      re[temp] = i - temp;
    }
    iStack.push(i);
  }

  for (let i of iStack) {
    re[i] = 0;
  }

  return re;
}

console.log(dailyTemperatures2([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
