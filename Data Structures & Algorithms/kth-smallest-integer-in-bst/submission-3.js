/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const stack = []
        let current = root

        while (stack.length > 0 || current) {
            while (current) {
                stack.push(current)
                current = current.left
            }

            current = stack.pop()
            k--
            if (k === 0) {
                return current.val
            }
            current = current.right
        }

    }
}
