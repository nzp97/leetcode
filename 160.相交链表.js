/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const set = new Set();
  let node = headA;
  while (node) {
    set.add(node);
    node = node.next;
  }
  node = headB;
  while (node) {
    if (set.has(node)) return node;
    node = node.next;
  }
  return null;
};
// @lc code=end
