function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
  // original satisfied customer number
  let oriSum = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) oriSum += customers[i];
  }

  // increase satisfied customer number in minutes
  let peroidSum = 0;
  for (let i = 0; i < minutes; i++) {
    if (grumpy[i] === 1) peroidSum += customers[i];
  }

  let maxIncrease = peroidSum;
  for (let i = 1; i <= customers.length - minutes; i++) {
    if (grumpy[i - 1] === 1) peroidSum -= customers[i - 1];
    if (grumpy[i + minutes - 1] === 1) peroidSum += customers[i + minutes - 1];
    maxIncrease = Math.max(maxIncrease, peroidSum);
  }

  return oriSum + maxIncrease;
};