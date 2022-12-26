var exist = function (board, word) {
  const dfs = (board, sentence, i, j) => {
    const result = [];
    if (sentence === word) {
      return true;
    }

    if (sentence.length > word.length) return false;

    let temp = board[i][j];
    board[i][j] = true;
    if (
      board[i + 1] !== undefined &&
      board[i + 1][j] !== undefined &&
      board[i + 1][j] !== true
    ) {
      result.push(dfs(board, sentence + board[i + 1][j], i + 1, j));
    }

    if (
      board[i - 1] !== undefined &&
      board[i - 1][j] !== undefined &&
      board[i - 1][j] !== true
    ) {
      result.push(dfs(board, sentence + board[i - 1][j], i - 1, j));
    }

    if (
      board[i] !== undefined &&
      board[i][j + 1] !== undefined &&
      board[i][j + 1] !== true
    ) {
      result.push(dfs(board, sentence + board[i][j + 1], i, j + 1));
    }

    if (
      board[i] !== undefined &&
      board[i][j - 1] !== undefined &&
      board[i][j - 1] !== true
    ) {
      result.push(dfs(board, sentence + board[i][j - 1], i, j - 1));
    }

    board[i][j] = temp;

    if (result.includes(true)) return true;
    return false;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (dfs(board, board[i][j], i, j)) return true;
    }
  }

  return false;
};
