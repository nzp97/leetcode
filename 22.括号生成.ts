/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  const res: string[][] = [];
  const path: string[] = [];
  let lCount = 0;
  const choices = ["(", ")"];
  function backtrack(stratIndex = 0) {
    if (lCount > n || path.length - lCount > lCount) return;
    if (path.length === n * 2) {
      res.push([...path]);
      return;
    }
    for (let i = stratIndex; i < n * 2; i++) {
      choices.forEach((choice) => {
        path.push(choice);
        if (choice === "(") {
          lCount++;
        }
        backtrack(i + 1);
        path.pop();
        if (choice === "(") {
          lCount--;
        }
      });
    }
  }
  backtrack();
  return res.map((item) => item.join(""));
}
// @lc code=end
