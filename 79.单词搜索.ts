/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
  let isExist = false;
  const VISITED = "#";

  function backtrack(m = 0, n = 0, index = 0) {
    if (index === word.length) {
      isExist = true;
      return;
    }
    if (
      m < 0 ||
      n < 0 ||
      m >= board.length ||
      n >= board[m].length ||
      board[m][n] !== word[index]
    ) {
      return;
    }
    const tmp = board[m][n];
    board[m][n] = VISITED;
    const candidate = [
      [m + 1, n],
      [m - 1, n],
      [m, n + 1],
      [m, n - 1],
    ];
    candidate.forEach(([x, y]) => {
      backtrack(x, y, index + 1);
    });
    board[m][n] = tmp;
  }
  for (let i = 0; i < board.length; i++) {
    if (isExist) break;
    for (let j = 0; j < board[i].length; j++) {
      if (isExist) break;
      backtrack(i, j, 0);
    }
  }
  return isExist;
}
// @lc code=end
