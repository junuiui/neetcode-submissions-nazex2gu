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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let list1_curr = list1;
        let list2_curr = list2;

        let curr = new ListNode();
        let result_head = curr;

        while (list1_curr && list2_curr) {

            if (list1_curr.val < list2_curr.val) {
                curr.next = list1_curr;
                list1_curr = list1_curr.next;
            }
            else {
                curr.next = list2_curr;
                list2_curr = list2_curr.next;
            }
            curr = curr.next;
        }

        while (list1_curr) {
            curr.next = list1_curr;
            curr = curr.next;
            list1_curr = list1_curr.next;
        }

        while (list2_curr) {
            curr.next = list2_curr;
            curr = curr.next;
            list2_curr = list2_curr.next;
        }
        return result_head.next;
    }
}
