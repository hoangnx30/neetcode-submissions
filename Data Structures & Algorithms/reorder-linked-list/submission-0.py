# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        s = []
        current = head

        while current:
            s.append(current)
            current = current.next

        i, j = 0, len(s) - 1

        while i < j:
            s[i].next = s[j]
            i += 1
            if i >= j:
                break

            s[j].next = s[i]
            j -= 1
        
        s[i].next = None
