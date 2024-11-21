/*
 * @lc app=leetcode.cn id=216 lang=typescript
 *
 * [216] 组合总和 III
 */

// @lc code=start
function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = []
  const path: number[] = []
  let sum = 0
  function backtrack(startNum: number = 1) {
    if (path.length === k || sum > n) {
      if (sum === n)
        res.push([...path])
      return
    }
    for (let i = startNum; i <= 9; i++) {
      path.push(i)
      sum = sum + i
      backtrack(i + 1)
      path.pop()
      sum = sum - i
    }
  }
  backtrack()
  return res
};
// @lc code=end

