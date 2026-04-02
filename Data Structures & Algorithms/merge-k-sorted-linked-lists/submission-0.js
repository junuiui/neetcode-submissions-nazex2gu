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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {

        // brutal force
        let result = [];
        for (let i = 0; i < lists.length; i++) {
            let curr = lists[i];
            while (curr) {
                result.push(curr.val);
                curr = curr.next;
            }
        }

        result.sort((a,b) => a - b);

        let head = new ListNode();
        let headToReturn = head;
        for (let i = 0; i < result.length; i++){
            head.next = new ListNode(result[i]);
            head = head.next;
        }

        return headToReturn.next;
        
    }
}