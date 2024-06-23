function solveNQueens(n: number): string[][] {
  const board: string[] = Array.from({ length: n }, () => '.'.repeat(n));

  function canPutQueen(row: number, col: number): boolean {
    for (let i = row; i >= 0; i--) {
      if (board[i][col] === 'Q') return false;
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }

    return true;
  }

  const result: string[][] = [];

  function backtrace(row: number): void {
    if (row === n) {
      result.push([...board]);
      return;
    }
    for (let col = 0; col < n; col++) {
      if (canPutQueen(row, col)) {
        board[row] = '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1);
        backtrace(row + 1);
        board[row] = '.'.repeat(n);
      }
    }
  }

  backtrace(0);
  return result;
};