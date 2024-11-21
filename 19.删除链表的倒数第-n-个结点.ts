/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const stack: ListNode[] = []
    let cur = head
    while (cur) {
        stack.push(cur)
        cur = cur.next
    }
    let appendList: ListNode[] = []
    for (let i = 0; i < n; i++) {
        appendList.push(stack.pop())
    }
    appendList.pop()
    const lastOfStack = stack[stack.length - 1] || null
    const newHead = new ListNode(-1, stack[0] || null)
    if (lastOfStack) {
        lastOfStack.next = appendList[appendList.length - 1] || null
    } else {
        newHead.next = appendList[appendList.length - 1] || null
    }
    return newHead.next
};
// @lc code=end