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

        // 1️⃣ 리스트 길이 계산
        let length = 0;
        let curr = head;
        while (curr) {
            curr = curr.next;
            length++;
        }

        // 2️⃣ 제거할 index (0부터 시작)
        let indexRemove = length - n;

        // 3️⃣ 첫 노드 제거
        if (indexRemove === 0) {
            return head.next;
        }

        // 4️⃣ 나머지 노드 제거
        curr = head;
        for (let i = 0; i < indexRemove - 1; i++) {
            curr = curr.next; // 제거 전 노드로 이동
        }
        curr.next = curr.next.next; // 제거

        return head;
    }
}
