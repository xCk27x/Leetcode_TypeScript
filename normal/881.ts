function numRescueBoats(people: number[], limit: number): number {
  people.sort((a, b) => a - b);
  
  let count = 0 ;

  for (let i = 0, j = people.length - 1; i <= j; j--, count++) {
    if (people[i] + people[j] <= limit) i++;
  }

  return count;
};