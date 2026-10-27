# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        nodes = []

        current = head

        while current:
            nodes.append(current)
            current = current.next

        pos = len(nodes) - n

        if pos == 0:
            return head.next
    
        nodes[pos - 1].next = nodes[pos].next

        return head
