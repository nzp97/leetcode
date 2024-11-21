/*
 * @lc app=leetcode.cn id=3142 lang=typescript
 *
 * [3142] 判断矩阵是否满足条件
 */

// @lc code=start
function satisfiesConditions(grid: number[][]): boolean {
  let isValid = true;
  for (let i = 0; i < grid.length; i++) {
    if (!isValid) break;
    for (let j = 0; j < grid[i].length; j++) {
      if (!isValid) break;
      if (grid[i + 1] && grid[i + 1][j] !== grid[i][j]) {
        isValid = false;
      }
      if (grid[i][j + 1] !== undefined && grid[i][j + 1] === grid[i][j]) {
        isValid = false;
      }
    }
  }
  return isValid;
}
// @lc code=end
