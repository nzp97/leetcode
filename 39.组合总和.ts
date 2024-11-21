/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  let sum = 0;
  function backtrack(stratIndex = 0) {
    if (sum > target) return;
    if (sum === target) {
      res.push([...path]);
      return;
    }
    for (let i = stratIndex; i < candidates.length; i++) {
      const num = candidates[i];
      path.push(num);
      sum = sum + num;
      backtrack(i);
      sum = sum - num;
      path.pop();
    }
  }
  backtrack();
  return res;
}
// @lc code=end
