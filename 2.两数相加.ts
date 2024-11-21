/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head
    let cur
    let carray = 0
    while (l1 || l2) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carray
        carray = sum >= 10 ? 1 : 0
        const val = sum % 10
        if (!head) {
            head = cur = new ListNode(val)
        } else {
            cur.next = new ListNode(val)
            cur = cur.next
        }
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    if (carray) {
        cur.next = new ListNode(carray)
    }
    return head
};
// @lc code=end