/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const arr = [];
  let node = head;
  while (node) {
    arr.unshift(node);
    node = node.next;
  }
  let newHead = null;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      newHead = arr[i];
    }
    arr[i].next = arr[i + 1] || null;
  }
  return newHead
};
// @lc code=end
