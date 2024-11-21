/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  if (s.length < 2) return s;
  const len = s.length;
  const dp: boolean[][] = new Array(len)
    .fill(false)
    .map(() => new Array(len).fill(false));
  let start = 0;
  let maxLen = 1;

  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      if (s[i] === s[j]) {
        if (i === j || j - i === 1 || dp[i + 1][j - 1]) dp[i][j] = true;
        if (dp[i][j] && j - i + 1 >= maxLen) {
          maxLen = j - i + 1;
          start = i;
        }
      }
    }
  }
  return s.slice(start, start + maxLen);
}
// @lc code=end
