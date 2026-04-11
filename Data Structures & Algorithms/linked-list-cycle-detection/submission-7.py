# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        """
        (X) if values are distincts, we store it in hash set

        """
        # visited = set()

        # while head:
        #     if head.val in visited:
        #         return True
        #     else:
        #         visited.add(head.val)
        #     head = head.next
        
        # return False

        # ###########
        # Using set
        # ###########

        # visited = set()

        # while head:
        #     if head in visited:
        #         return True
        #     else:
        #         visited.add(head)
        #     head = head.next
        
        # return False

        # ###########
        # Using Two pointers
        # ###########

        if not head or not head.next  : return False
        if head == head.next : return True
        slow = head
        fast = head.next

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

            if slow == fast : return True
        return False

