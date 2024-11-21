/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
  let symmetric = true;
  function compare(left: TreeNode | null, right: TreeNode | null) {
    if (!symmetric || left === right) return;
    if ((left === null || right === null) && left !== right) {
      symmetric = false;
      return;
    }
    if (left.val !== right.val) {
      symmetric = false;
      return;
    }
    compare(left.left, right.right);
    compare(left.right, right.left);
  }
  compare(root.left, root.right);
  return symmetric;
}
// @lc code=end
