/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  if (!digits) return []
  const digitsArr = digits.split('')
  const strMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  const res: string[][] = []
  const path: string[] = []
  function backtrack(startIndex = 0) {
    if (path.length === digits.length) {
      res.push(path ? [...path] : [])
      return
    }
    for (let i = startIndex; i < digitsArr.length; i++) {
      const curNum = digitsArr[i]
      const choices = strMap[curNum]
      for (let j = 0; j < choices.length; j++) {
        path.push(choices[j])
        backtrack(i + 1)
        path.pop()
      }
    }
  }
  backtrack()
  return res.map(item => item.join(''))
};
// @lc code=end