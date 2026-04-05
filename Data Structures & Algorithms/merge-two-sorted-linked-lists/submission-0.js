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
        let current1 = list1
        let current2 = list2

        let newList = new ListNode(null)
        const head = newList

        while (current1 && current2) {
            const val1 = current1.val
            const val2 = current2.val

            if (val1 <= val2) {
                newList.next = new ListNode(val1)
                newList = newList.next
                current1 = current1.next
                continue
            }

            if (val2 <= val1) {
                newList.next = new ListNode(val2)
                current2 = current2.next
                newList = newList.next
                continue
            }
        }

        while (current1) {
            newList.next = new ListNode(current1.val)
            newList = newList.next
            current1 = current1.next
        }

        while (current2) {
            newList.next = new ListNode(current2.val)
            newList = newList.next
            current2 = current2.next
        }

        return head.next
    }
}
