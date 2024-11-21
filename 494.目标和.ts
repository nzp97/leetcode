/*
 * @lc app=leetcode.cn id=494 lang=typescript
 *
 * [494] 目标和
 */

// @lc code=start
function findTargetSumWays(nums: number[], target: number): number {
  let res = 0;
  function backtrack(index = 0, sum = 0) {
    if (index === nums.length) {
      if (sum === target) {
        res++;
      }
      return;
    } else {
      backtrack(index + 1, sum + nums[index]);
      backtrack(index + 1, sum - nums[index]);
    }
  }
  backtrack();
  return res;
}
// @lc code=end
