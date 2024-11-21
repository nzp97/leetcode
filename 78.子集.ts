/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  function backtrack(stratIndex=0) {
    res.push([...path]);
    for (let i = stratIndex; i < nums.length; i++) {
        path.push(nums[i])
        backtrack(i+1)
        path.pop()
    }
  }
  backtrack()
  return res;
}
// @lc code=end
