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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if (!head) return null;

        let length = 0;
        let curr = head;
        while (curr) {
            curr = curr.next;
            length++;
        }

        let indexRemove = length - n;

        if (indexRemove === 0) {
            return head.next;
        }

        curr = head;
        for (let i = 0; i < indexRemove - 1; i++) {
            curr = curr.next; 
        }
        curr.next = curr.next.next; 

        return head;
    }
}
