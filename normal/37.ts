/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  const n = 9;

  function isVaild(row: number, col: number, num: string): boolean {
    for (let i = 0; i < n; i++) {
      if (board[i][col] === num) return false;
      if (board[row][i] === num) return false;
    }

    const rowGrid = Math.floor(row / 3) * 3;
    const colGrid = Math.floor(col / 3) * 3;
    for (let i = rowGrid; i < rowGrid + 3; i++) {
      for (let j = colGrid; j < colGrid + 3; j++) {
        if (board[i][j] === num) return false;
      }
    }

    return true;
  }

  function solver(row: number, col: number): boolean {
    if (col === n) row++, col = 0;
    if (row === n) return true;
    if (board[row][col] !== '.') return solver(row, col + 1);

    for (let i = 1; i <= n; i++) {
      if (isVaild(row, col, i.toString())) {
        board[row][col] = i.toString();
        if (solver(row, col + 1)) return true;
        board[row][col] = '.';
      }
    }
  }

  solver(0, 0);
  return;
};