function maximumHappinessSum(happiness: number[], k: number): number {
  happiness.sort((a, b) => b - a);
  let sum = 0;

  for (let i = 0; i < k; i++) {
    let num = happiness[i] - i;
    if (num <= 0) 
      break;
    else 
      sum += num;
  }

  return sum;
};