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
     * @return {boolean}
     */
    hasCycle(head) {
        let current = head
        let next = current.next

        let count = 0

        while (current !== null && next !== null) {
            console.log(current, next)
            count++
            if (count == 10) {
                break

            }


            if (current === next) {
                return true
            }
            current = current.next
            next = next?.next?.next
        }

        return false
    }
}
