// [73,74,75,71,69,72,76,73]
// [1,1,4,2,1,1,0,0]

function dailyTemperatures(temperatures: number[]): number[] {
  if (temperatures.length <= 1) return [0];

  let re: number[] = [];
  let countStack: number[] = [];
  let temperStack: number[] = [temperatures[0]];
  let indexStack: number[] = [0];

  for (let i = 1; i < temperatures.length; i++) {
    while (temperStack.length > 0 && temperStack[temperStack.length - 1] < temperatures[i]) {
      temperStack.pop();
      countStack.push(i - indexStack.pop()!);
    }
    if (temperStack.length === 0) {
      while (countStack.length > 0) {
        re.push(countStack.pop()!);
      }
    }
    temperStack.push(temperatures[i]);
    indexStack.push(i);
    
  }
  while (countStack.length > 0) {
    re.push(countStack.pop()!);
  }
  for (let i = 0; i < indexStack.length; i++) {
    re.push(0);
  }

  return re;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30,40,50,60])); // [1,1,1,0]
console.log(dailyTemperatures([30,60,90])); // [1,1,0]