/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        // brutal
        if (!head) return null;
        var curr = head;
        const list = [];
        while (curr) {
            list.push(curr);
            curr = curr.next;
        }

        const newHead = list[list.length - 1];
        var newCurr = newHead;
        for (let i = list.length - 2; i >= 0; i--) {
            newCurr.next = list[i];
            newCurr = newCurr.next;
        }
        newCurr.next = null;

        return newHead;
    }
}
