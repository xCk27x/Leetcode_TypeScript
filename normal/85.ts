function maximalRectangle(matrix: string[][]): number {
  let maxRec = 0;
  let columnCount = Array.from({ length: matrix[0].length }, () => 0);
  for (let row of matrix) {
    for (let i = 0; i < row.length; i++) {
      columnCount[i] = row[i] === '1' ? columnCount[i] + 1 : 0;
    }
    maxRec = Math.max(maxRec, largestRecArea(columnCount));
  }
  return maxRec;
};

function largestRecArea(column: number[]): number {
  let maxRec = 0, stack: number[] = [];
  for (let i = 0; i <= column.length; i++) {
    let curHeight = i === column.length ? 0 : column[i];
    while (stack.length && column[stack[stack.length - 1]] > curHeight) {
      let height = column[stack.pop()!];
      let width = stack.length !== 0 ? i - stack[stack.length - 1] - 1 : i;
      maxRec = Math.max(maxRec, height * width);
    }
    stack.push(i);
  }
  return maxRec;
}

console.log(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])); 