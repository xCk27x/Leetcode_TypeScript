function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let re: boolean[] = [];
  let max = Math.max(...candies);

  for (let candy of candies) {
    re.push(candy + extraCandies >= max);
  }

  return re;
};