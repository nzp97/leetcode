/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  if (prices.length <= 1) return 0;
  let max = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    if (price - min > max) max = price - min;
    if (price < min) min = prices[i];
  }
  return max;
}
// @lc code=end
